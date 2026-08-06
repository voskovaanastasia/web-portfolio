import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// Interactive collapsible horizontal tree (D3). Click a node to expand/collapse.
const COLORS = [
  '#288fd6', '#6d3fc4', '#388E3C', '#E65100',
  '#B43145', '#6B6666', '#00838F', '#F9A825',
];
const FILLS = [
  '#e9f3fa', '#e1d5e7', '#D4EDDA', '#FFE0B2',
  '#FFE6E8', '#E8E3E3', '#B2EBF2', '#FFF9C4',
];

export default function IATree({
  data,
  nodeH = 30,
  depthGap = 70,
  sibGap = 10,
  defaultOpenIndex = 1,
  expandAll = false,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.innerHTML = '';

    function assignColors(d, idx) {
      d._branchIdx = idx;
      if (d.children) d.children.forEach((c) => assignColors(c, idx));
    }
    // Deep-copy so collapse state doesn't mutate the prop between renders
    const root_data = JSON.parse(JSON.stringify(data));
    if (root_data.children) root_data.children.forEach((c, i) => assignColors(c, i));
    root_data._branchIdx = -1;

    const root = d3.hierarchy(root_data);
    root.x0 = 0;
    root.y0 = 0;

    // Default view: only the first branch (Product / Features) open one level,
    // everything else collapsed — the user expands from there.
    if (!expandAll) (function collapseDefault(d, depth) {
      if (!d.children) return;
      d.children.forEach((c) => collapseDefault(c, depth + 1));
      const isOpenBranch = depth === 1 && d.data === root_data.children[defaultOpenIndex];
      if (depth >= 1 && !isOpenBranch) {
        d._children = d.children;
        d.children = null;
      }
    })(root, 0);

    const svg = d3
      .select(el)
      .append('svg')
      .style('overflow', 'visible')
      .style('font-family', "'Space Grotesk', sans-serif");

    const g = svg.append('g').attr('transform', 'translate(10, 20)');

    const treeLayout = d3
      .tree()
      .nodeSize([nodeH + sibGap, 1])
      .separation((a, b) => (a.parent === b.parent ? 1 : 1.2));

    const duration = 650;
    const ease = d3.easePolyOut.exponent(4); // fast start, long gentle settle
    let i = 0;

    // Measure real text width so pills get equal padding on both sides
    const measureCtx = document.createElement('canvas').getContext('2d');
    function estimateWidth(d) {
      const size = d.depth === 0 ? 14 : 13;
      const weight = d.depth <= 1 || d.children || d._children ? 600 : 400;
      measureCtx.font = `${weight} ${size}px 'Space Grotesk', sans-serif`;
      let w = measureCtx.measureText(d.data.label).width + 28;
      if (d.children || d._children) w += 20; // room for the +N / − indicator
      return Math.min(w, 360);
    }

    function diagonal(s, t) {
      const sy = s.y + (s.data ? estimateWidth(s) : 100);
      return `M ${sy} ${s.x} C ${(sy + t.y) / 2} ${s.x}, ${(sy + t.y) / 2} ${t.x}, ${t.y} ${t.x}`;
    }

    function update(source, focusSource) {
      treeLayout(root);
      const nodes = root.descendants();
      const links = root.links();

      // Place each depth column after the widest node of the previous column,
      // so long labels never overlap the next level.
      const maxW = [];
      nodes.forEach((d) => {
        maxW[d.depth] = Math.max(maxW[d.depth] || 0, estimateWidth(d));
      });
      const offsets = [0];
      for (let depth = 1; depth < maxW.length; depth++) {
        offsets[depth] = offsets[depth - 1] + maxW[depth - 1] + depthGap;
      }
      nodes.forEach((d) => {
        d.y = offsets[d.depth];
      });

      let minX = Infinity;
      let maxX = -Infinity;
      nodes.forEach((d) => {
        if (d.x < minX) minX = d.x;
        if (d.x > maxX) maxX = d.x;
      });
      const h = maxX - minX + nodeH * 2 + 40;
      // Size the svg to the real content width so the parent can scroll horizontally
      const w = Math.max(...nodes.map((d) => d.y + estimateWidth(d))) + 20;
      svg.transition().duration(duration).ease(ease).attr('height', h).attr('width', w);
      g.transition()
        .duration(duration).ease(ease)
        .attr('transform', `translate(10, ${-minX + nodeH + 10})`);

      const node = g.selectAll('g.ia-node').data(nodes, (d) => d.id || (d.id = ++i));

      const nodeEnter = node
        .enter()
        .append('g')
        .attr('class', 'ia-node')
        .attr('transform', `translate(${source.y0}, ${source.x0})`)
        .style('opacity', 0)
        .style('cursor', (d) => (d.children || d._children ? 'pointer' : 'default'))
        .on('click', (event, d) => {
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else if (d._children) {
            d.children = d._children;
            d._children = null;
          }
          update(d, true);
        });

      nodeEnter
        .append('rect')
        .attr('x', 0)
        .attr('y', -nodeH / 2)
        .attr('height', nodeH)
        .attr('rx', nodeH / 2)
        .attr('ry', nodeH / 2);

      nodeEnter
        .append('text')
        .attr('dy', '0.35em')
        .attr('x', 14)
        .attr('font-size', (d) => (d.depth === 0 ? '14px' : '13px'))
        .attr('font-weight', (d) => (d.depth <= 1 || d.children || d._children ? '600' : '400'))
        .text((d) => d.data.label);

      nodeEnter
        .append('text')
        .attr('class', 'ia-indicator')
        .attr('dy', '0.35em')
        .attr('font-size', '10px');

      const nodeUpdate = nodeEnter.merge(node);

      nodeUpdate
        .transition()
        .duration(duration).ease(ease)
        .attr('transform', (d) => `translate(${d.y}, ${d.x})`)
        .style('opacity', 1);

      nodeUpdate
        .select('rect')
        .attr('width', (d) => estimateWidth(d))
        .attr('fill', (d) => {
          if (d.depth === 0) return '#181212';
          const idx = d.data._branchIdx;
          return idx >= 0 ? FILLS[idx % FILLS.length] : '#f7f7f7';
        })
        .attr('stroke', (d) => {
          if (d.depth === 0) return '#181212';
          const idx = d.data._branchIdx;
          return idx >= 0 ? COLORS[idx % COLORS.length] : '#CDC8C8';
        })
        .attr('stroke-width', 1.2)
        .attr('stroke-dasharray', (d) =>
          !(d.children || d._children) && d.depth > 1 ? '3,2' : 'none'
        );

      nodeUpdate
        .selectAll('text:not(.ia-indicator)')
        .attr('fill', (d) => (d.depth === 0 ? '#F5F0F0' : '#181212'));

      nodeUpdate
        .select('.ia-indicator')
        .attr('x', (d) => estimateWidth(d) - 18)
        .attr('fill', (d) => (d.depth === 0 ? 'rgba(245,240,240,0.7)' : '#837D7D'))
        .text((d) => {
          if (d._children) return `+${d._children.length}`;
          if (d.children && d.depth > 0) return '−';
          return '';
        });

      nodeUpdate
        .on('mouseenter', function () {
          d3.select(this)
            .select('rect')
            .transition()
            .duration(150)
            .attr('y', -nodeH / 2 - 1)
            .attr('height', nodeH + 2);
        })
        .on('mouseleave', function () {
          d3.select(this)
            .select('rect')
            .transition()
            .duration(150)
            .attr('y', -nodeH / 2)
            .attr('height', nodeH);
        });

      node
        .exit()
        .transition()
        .duration(duration).ease(ease)
        .attr('transform', `translate(${source.y}, ${source.x})`)
        .style('opacity', 0)
        .remove();

      const link = g.selectAll('path.ia-link').data(links, (d) => d.target.id);

      link
        .enter()
        .insert('path', 'g')
        .attr('class', 'ia-link')
        .attr('fill', 'none')
        .attr('stroke-width', 1.2)
        .attr('d', () => {
          const o = { x: source.x0, y: source.y0, data: source.data, depth: source.depth };
          return diagonal(o, o);
        })
        .style('opacity', 0)
        .merge(link)
        .transition()
        .duration(duration).ease(ease)
        .attr('d', (d) => diagonal(d.source, d.target))
        .attr('stroke', (d) => {
          const idx = d.target.data._branchIdx;
          return idx >= 0 ? COLORS[idx % COLORS.length] : '#CDC8C8';
        })
        .style('opacity', 0.5);

      link
        .exit()
        .transition()
        .duration(duration).ease(ease)
        .attr('d', () => {
          const o = { x: source.x, y: source.y, data: source.data, depth: source.depth };
          return diagonal(o, o);
        })
        .style('opacity', 0)
        .remove();

      nodes.forEach((d) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      // Scroll the card so the clicked node and its just-opened children are in view
      if (focusSource) {
        // Wait for the width/position transition so scroll targets are reachable
        setTimeout(() => {
          const scroller = el.parentElement;
          if (!scroller || scroller.scrollWidth <= scroller.clientWidth) return;
          const rightEdge = source.children
            ? Math.max(...source.children.map((c) => c.y + estimateWidth(c)))
            : source.y + estimateWidth(source);
          const leftEdge = source.y;
          let target = scroller.scrollLeft;
          if (rightEdge + 60 - target > scroller.clientWidth) {
            target = rightEdge + 60 - scroller.clientWidth;
          }
          if (leftEdge < target) target = Math.max(0, leftEdge - 40);
          scroller.scrollTo({ left: target, behavior: 'smooth' });
        }, duration + 30);
      }
    }

    update(root);

    return () => {
      el.innerHTML = '';
    };
  }, [data, nodeH, depthGap, sibGap, defaultOpenIndex, expandAll]);

  return <div ref={containerRef} className="w-max" />;
}
