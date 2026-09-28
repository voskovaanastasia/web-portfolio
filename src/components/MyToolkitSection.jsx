import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getToolsByCategory } from '../data/tools';
import flagGb from '../assets/flags/gb.svg';
import flagUa from '../assets/flags/ua.svg';
import flagEs from '../assets/flags/es.svg';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const designTools = getToolsByCategory('design');
const softwareTools = getToolsByCategory('software');
const programmingTools = getToolsByCategory('programming');

const languages = [
  { flag: flagGb, label: 'English', level: 'B2 (Upper-Intermediate)' },
  { flag: flagUa, label: 'Ukrainian', level: 'Native' },
  { flag: flagEs, label: 'Spanish', level: 'A2 (Basic)' },
];

function ToolCard({ icon, label }) {
  return (
    <div data-tool-card className="flex items-center gap-2.5">
      <div data-tool-tile className="bg-white border border-[#ececec] rounded-[15px] w-[50px] h-[50px] flex items-center justify-center shrink-0 p-[7px]">
        <img
          src={icon}
          alt=""
          width={24}
          height={24}
          loading="lazy"
          decoding="async"
          className="w-[25px] h-[25px] object-contain"
        />
      </div>
      <p className="font-grotesk font-bold text-sm text-black">{label}</p>
    </div>
  );
}

function ToolGroup({ label, tools }) {
  const [expanded, setExpanded] = useState(false);
  const featured = tools.filter((tool) => tool.featured);
  const hasMore = tools.length > featured.length;
  const visibleTools = expanded ? tools : featured;
  const gridRef = useRef(null);
  const firstRender = useRef(true);

  // Newly revealed cards (after "+ more") pop in; the initial batch is handled by the scroll animation.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!expanded || reduceMotion()) return;
    const extra = gridRef.current?.querySelectorAll('[data-tool-card]:nth-child(n + ' + (featured.length + 1) + ')');
    if (extra?.length) {
      gsap.from(extra, { y: 16, scale: 0.8, opacity: 0, duration: 0.5, ease: 'back.out(1.8)', stagger: 0.04 });
    }
  }, [expanded, featured.length]);

  return (
    <div data-tool-group className="flex flex-col gap-5 w-full">
      <p className="font-mono-bold text-[14px] text-black">{label}</p>
      <div ref={gridRef} className="bg-[#f7f7f7] rounded-[15px] p-3 sm:p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-3 sm:gap-x-5 gap-y-3 sm:gap-y-5 w-full">
        {visibleTools.map((tool) => (
          <ToolCard key={tool.id} icon={tool.icon} label={tool.name} />
        ))}
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center text-left"
          >
            <p className="font-caveat font-bold text-xl text-[#6d3fc4]">
              {expanded ? 'show less' : '+ more'}
            </p>
          </button>
        )}
      </div>
    </div>
  );
}

export default function MyToolkitSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (reduceMotion()) return;

    const ctx = gsap.context(() => {
      // Intro text rises in as the section scrolls into view.
      gsap.from('[data-toolkit-intro]', {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: '#toolkit', start: 'top 75%', toggleActions: 'restart none restart reset' },
      });

      // Each group's cards stagger in when that group reaches the viewport.
      gsap.utils.toArray('[data-tool-group]').forEach((group) => {
        gsap.from(group.querySelectorAll('[data-tool-card]'), {
          y: 20,
          scale: 0.85,
          opacity: 0,
          duration: 0.55,
          ease: 'back.out(1.6)',
          stagger: 0.05,
          scrollTrigger: { trigger: group, start: 'top 85%', toggleActions: 'restart none restart reset' },
        });
      });

      // Hover: the icon tile lifts and wiggles.
      const root = rootRef.current;
      const onOver = (e) => {
        const tile = e.target.closest?.('[data-tool-tile]');
        if (!tile || tile.contains(e.relatedTarget)) return;
        gsap.timeline()
          .to(tile, { y: -6, scale: 1.12, duration: 0.25, ease: 'power2.out' })
          .to(tile, { rotate: 8, duration: 0.1, yoyo: true, repeat: 3, ease: 'sine.inOut' }, 0)
          .to(tile, { rotate: 0, duration: 0.1 });
      };
      const onOut = (e) => {
        const tile = e.target.closest?.('[data-tool-tile]');
        if (!tile || tile.contains(e.relatedTarget)) return;
        gsap.to(tile, { y: 0, scale: 1, rotate: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)', overwrite: true });
      };
      root.addEventListener('mouseover', onOver);
      root.addEventListener('mouseout', onOut);
      return () => {
        root.removeEventListener('mouseover', onOver);
        root.removeEventListener('mouseout', onOut);
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="toolkit" className="relative overflow-hidden bg-white py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-start gap-5 text-left">
        <p data-toolkit-intro className="font-caveat font-bold text-xl text-[#6d3fc4]">
          Computer Science is my secret weapon.
        </p>
        <h2 data-toolkit-intro className="font-grotesk font-medium text-[26px] sm:text-4xl text-black tracking-tight leading-snug">
          I am Anastasiia Voskova,
          <span className="font-playwrite font-normal block mt-2">
            a designer who thinks like an engineer.
          </span>
        </h2>

        <div className="flex flex-col gap-8 w-full mt-6 text-left">
          <ToolGroup label="DESIGN" tools={designTools} />
          <ToolGroup label="SOFTWARE" tools={softwareTools} />
          <ToolGroup label="PROGRAMMING" tools={programmingTools} />

          <div data-tool-group className="flex flex-col gap-5 w-full">
            <p className="font-mono-bold text-[14px] text-black">Language</p>
            <div className="bg-[#f7f7f7] rounded-[15px] p-3 sm:p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-3 sm:gap-x-5 gap-y-3 sm:gap-y-5 w-full">
              {languages.map((lang) => (
                <div key={lang.label} data-tool-card className="flex items-center gap-2.5">
                  <div data-tool-tile className="bg-white border border-[#ececec] rounded-[15px] w-[50px] h-[50px] flex items-center justify-center shrink-0">
                    <img src={lang.flag} alt={`${lang.label} flag`} className="w-8 h-[22px] rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-grotesk font-bold text-sm text-black">{lang.label}</p>
                    <p className="font-grotesk text-xs text-[#6b6a67]">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
