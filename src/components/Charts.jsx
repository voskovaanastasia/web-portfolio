import { useMemo, useState, useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function Donut({ segments, hollowSize = '32%' }) {
  const wrapRef = useRef(null);
  // 0 = not shown yet; each scroll-in bumps the key so ApexCharts remounts and replays its draw animation.
  const [run, setRun] = useState(() => (prefersReducedMotion() ? 1 : 0));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const trigger = ScrollTrigger.create({
      trigger: wrapRef.current,
      start: 'top 85%',
      onEnter: () => setRun((k) => k + 1),
      onEnterBack: () => setRun((k) => k + 1),
      onLeaveBack: () => setRun(0),
    });
    return () => trigger.kill();
  }, []);

  const options = useMemo(
    () => ({
      colors: segments.map((s) => s.color),
      chart: {
        type: 'radialBar',
        sparkline: { enabled: true },
        animations: { enabled: true, easing: 'easeout', speed: 900, animateGradually: { enabled: true, delay: 150 } },
      },
      plotOptions: {
        radialBar: {
          track: { background: 'var(--color-border-subtle)' },
          dataLabels: { show: false },
          hollow: { margin: 0, size: hollowSize },
        },
      },
      grid: { show: false, padding: { left: 2, right: 2, top: -23, bottom: -20 } },
      labels: segments.map((s) => s.label),
      legend: { show: false },
      tooltip: { enabled: true, x: { show: false } },
      yaxis: { show: false, labels: { formatter: (value) => `${value}%` } },
    }),
    [segments, hollowSize]
  );

  const series = useMemo(() => segments.map((s) => s.value), [segments]);

  return (
    <div ref={wrapRef} className="w-full" style={{ minHeight: 350 }}>
      {run > 0 && <Chart key={run} options={options} series={series} type="radialBar" height={350} width="100%" />}
    </div>
  );
}

export function DonutStat({ pct, color }) {
  const r = 60;
  const c = 2 * Math.PI * r;
  const svgRef = useRef(null);
  const arcRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const arc = arcRef.current;
    const text = textRef.current;
    const state = { p: 0 };
    const render = () => {
      arc.setAttribute('stroke-dasharray', `${(pct / 100) * c * state.p} ${c}`);
      text.textContent = `${Math.round(pct * state.p)}%`;
    };
    render();
    const tween = gsap.to(state, {
      p: 1,
      duration: 1.1,
      ease: 'power2.out',
      onUpdate: render,
      scrollTrigger: { trigger: svgRef.current, start: 'top 85%', toggleActions: 'restart none restart reset' },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [pct, c]);

  return (
    <svg ref={svgRef} viewBox="0 0 160 160" className="w-40 h-40">
      <circle cx="80" cy="80" r={r} fill="none" stroke="#e3e3e3" strokeWidth="26" />
      <circle
        ref={arcRef}
        cx="80"
        cy="80"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="26"
        strokeLinecap="round"
        strokeDasharray={`${(pct / 100) * c} ${c}`}
        transform="rotate(-90 80 80)"
      />
      <text
        ref={textRef}
        x="80"
        y="80"
        textAnchor="middle"
        dominantBaseline="central"
        className="font-grotesk"
        fontSize="30"
        fontWeight="700"
        fill="#000"
      >
        {pct}%
      </text>
    </svg>
  );
}

// Horizontal progress bar whose fill grows from 0 to `pct` each time it scrolls into view.
export function ProgressBar({ pct, color }) {
  const trackRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const tween = gsap.fromTo(
      fillRef.current,
      { width: '0%' },
      {
        width: `${pct}%`,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: trackRef.current, start: 'top 90%', toggleActions: 'restart none restart reset' },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [pct]);

  return (
    <div ref={trackRef} className="h-2.5 rounded-pill bg-[#d9d9d9] overflow-hidden">
      <div ref={fillRef} className="h-full rounded-pill" style={{ width: `${pct}%`, backgroundColor: color }} />
    </div>
  );
}
