import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getToolsByCategory } from '../data/tools';
import flagGb from '../assets/flags/gb.svg';
import flagUa from '../assets/flags/ua.svg';
import flagEs from '../assets/flags/es.svg';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// "All tools" lists everything in folder order; each folder is one category.
const folders = [
  { id: 'all', label: 'All tools', tools: [...getToolsByCategory('design'), ...getToolsByCategory('software'), ...getToolsByCategory('programming')] },
  { id: 'design', label: 'Design', tools: getToolsByCategory('design') },
  { id: 'software', label: 'Software', tools: getToolsByCategory('software') },
  { id: 'programming', label: 'Programming', tools: getToolsByCategory('programming') },
];

const languages = [
  { flag: flagUa, label: 'Ukrainian', level: 'Native' },
  { flag: flagGb, label: 'English', level: 'B2 · Upper-Intermediate' },
  { flag: flagEs, label: 'Spanish', level: 'A2 · Basic' },
];

const FolderIcon = ({ open = false }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0">
    <path
      d={open ? 'M2 5.2c0-.7.5-1.2 1.2-1.2h3.3l1.6 1.8h5.7c.7 0 1.2.5 1.2 1.2V7M1.6 14l1.4-6.2h13.4L15 14H1.6z' : 'M2 4.2c0-.7.5-1.2 1.2-1.2h3.3l1.6 1.8h6.7c.7 0 1.2.5 1.2 1.2v6.8c0 .7-.5 1.2-1.2 1.2H3.2C2.5 14 2 13.5 2 12.8V4.2z'}
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

export default function MyToolkitSection() {
  const rootRef = useRef(null);
  const gridRef = useRef(null);
  const [active, setActive] = useState('all');
  const [langOpen, setLangOpen] = useState(true);
  const current = folders.find((f) => f.id === active);
  const firstRender = useRef(true);

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

      // The window's cards stagger in when it reaches the viewport.
      gsap.from('[data-tool-card]', {
        y: 20,
        scale: 0.85,
        opacity: 0,
        duration: 0.55,
        ease: 'back.out(1.6)',
        stagger: 0.015,
        scrollTrigger: { trigger: '[data-toolkit-window]', start: 'top 80%', toggleActions: 'restart none restart reset' },
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

  // Switching folders re-deals the cards.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (reduceMotion() || !gridRef.current) return;
    gsap.fromTo(
      gridRef.current.querySelectorAll('[data-tool-card]'),
      { y: 14, scale: 0.9, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.6)', stagger: 0.012, overwrite: true },
    );
  }, [active]);

  const sideItem = (selected) =>
    `w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-left font-grotesk font-medium text-[15px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
      selected ? 'bg-surface-brand-tint text-text-primary' : 'text-text-primary hover:bg-surface-subtle'
    }`;

  return (
    <section ref={rootRef} id="toolkit" className="relative overflow-hidden bg-surface-default py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2.5 mb-12 px-2 sm:px-0">
          <p data-toolkit-intro className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">
            My Toolkit
          </p>
          <p data-toolkit-intro className="font-caveat font-bold text-xl text-text-brand">
            Computer Science is my secret weapon.
          </p>
          <h2
            data-toolkit-intro
            className="font-grotesk font-medium text-[26px] sm:text-4xl text-text-primary tracking-tight leading-snug max-w-3xl"
          >
            I am Anastasiia Voskova, a designer who thinks like an engineer.
          </h2>
        </div>

        {/* Finder-style window */}
        <div
          data-toolkit-window
          className="rounded-2xl overflow-hidden border border-border-subtle bg-surface-default shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
        >
          <div className="relative flex items-center justify-between h-12 px-4 bg-surface-subtle border-b border-border-subtle">
            <span aria-hidden="true" className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-pill bg-[#EC6A5E]" />
              <span className="w-3 h-3 rounded-pill bg-[#F4BF4F]" />
              <span className="w-3 h-3 rounded-pill bg-[#61C554]" />
            </span>
            <p className="absolute inset-x-0 text-center font-grotesk font-medium text-sm text-text-primary pointer-events-none">
              {current.label}
            </p>
            <span className="relative inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-surface-default px-3 py-1 font-mono text-xs text-text-secondary">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="5" cy="5" r="3.6" stroke="currentColor" strokeWidth="1.2" />
                <path d="M8 8l2.6 2.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              {current.tools.length} apps
            </span>
          </div>

          <div className="grid md:grid-cols-[230px_minmax(0,1fr)]">
            <aside className="flex flex-col gap-1 p-3 bg-surface-subtle border-b md:border-b-0 md:border-r border-border-subtle">
              <p className="px-3 pt-2 pb-1 font-grotesk font-medium text-xs text-text-secondary">Favourites</p>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-1">
                {folders.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    aria-pressed={active === f.id}
                    onClick={() => setActive(f.id)}
                    className={sideItem(active === f.id)}
                  >
                    <FolderIcon />
                    <span className="flex-1">{f.label}</span>
                    <span className="font-mono text-xs text-text-secondary">{f.tools.length}</span>
                  </button>
                ))}
              </div>

              <p className="px-3 pt-4 pb-1 font-grotesk font-medium text-xs text-text-secondary">Languages</p>
              <button
                type="button"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
                className={sideItem(false)}
              >
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  aria-hidden="true"
                  className={`shrink-0 text-text-secondary transition-transform ${langOpen ? '' : '-rotate-90'}`}
                >
                  <path d="M0 2l4.5 5L9 2z" fill="currentColor" />
                </svg>
                <FolderIcon open={langOpen} />
                <span className="flex-1">Languages</span>
                <span className="font-mono text-xs text-text-secondary">{languages.length}</span>
              </button>
              {langOpen && (
                <ul className="flex flex-col gap-2.5 pl-10 pr-2 pt-1 pb-2">
                  {languages.map((lang) => (
                    <li key={lang.label} className="flex items-start gap-2.5">
                      <img
                        src={lang.flag}
                        alt={`${lang.label} flag`}
                        className="mt-0.5 w-[26px] h-[18px] rounded-[3px] object-cover ring-1 ring-track"
                      />
                      <div className="flex flex-col">
                        <p className="font-grotesk font-medium text-sm leading-tight text-text-primary">{lang.label}</p>
                        <p className="font-mono text-[11px] leading-snug text-text-secondary">{lang.level}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </aside>

            <ul
              ref={gridRef}
              className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-x-2 gap-y-5 content-start p-4 sm:p-8 lg:min-h-[560px]"
            >
              {current.tools.map((tool) => (
                <li key={tool.id} data-tool-card className="flex flex-col items-center gap-2 text-center">
                  <div
                    data-tool-tile
                    className={`flex items-center justify-center w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-2xl overflow-hidden ${
                      tool.fill
                        ? 'shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
                        : 'bg-surface-default border border-border-subtle shadow-[0_1px_3px_rgba(0,0,0,0.05)]'
                    }`}
                  >
                    <img
                      src={tool.icon}
                      alt=""
                      width={32}
                      height={32}
                      className={tool.fill ? 'w-full h-full object-cover' : 'w-8 h-8 object-contain'}
                    />
                  </div>
                  <span className="font-grotesk text-[13px] leading-tight text-text-primary">{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
