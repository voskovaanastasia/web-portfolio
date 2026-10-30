import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { openContactModal } from '../contactModalStore';
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

function FullToolkit() {
  const rootRef = useRef(null);
  const gridRef = useRef(null);
  const [active, setActive] = useState('all');
  const [langOpen, setLangOpen] = useState(true);
  const [query, setQuery] = useState('');
  const folder = folders.find((f) => f.id === active);
  const q = query.trim();
  const searching = q.length > 0;
  // Search looks through every tool, whichever folder is open.
  const current = searching
    ? { ...folder, label: `Searching \u201c${q}\u201d`, tools: folders[0].tools.filter((t) => t.name.toLowerCase().includes(q.toLowerCase())) }
    : folder;
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
              <span className="w-3 h-3 rounded-pill bg-traffic-red" />
              <span className="w-3 h-3 rounded-pill bg-traffic-yellow" />
              <span className="w-3 h-3 rounded-pill bg-traffic-green" />
            </span>
            <p className="hidden md:block absolute inset-x-0 text-center font-grotesk font-medium text-sm text-text-primary pointer-events-none truncate px-48">
              {current.label}
            </p>
            <label className="relative flex items-center gap-2 w-44 sm:w-72 rounded-lg border border-border-subtle bg-surface-default px-3 py-1.5 font-grotesk text-sm text-text-primary focus-within:border-action-primary focus-within:ring-2 focus-within:ring-action-primary/20">
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0 text-text-secondary">
                <circle cx="5" cy="5" r="3.6" stroke="currentColor" strokeWidth="1.2" />
                <path d="M8 8l2.6 2.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Escape' && setQuery('')}
                placeholder={`Search ${folders[0].tools.length} apps`}
                aria-label="Search my tools"
                className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-text-secondary [&::-webkit-search-cancel-button]:hidden"
              />
              {searching && (
                <button type="button" aria-label="Clear search" onClick={() => setQuery('')} className="shrink-0 text-action-primary font-bold leading-none">
                  &#10005;
                </button>
              )}
            </label>
          </div>

          <div className="grid md:grid-cols-[230px_minmax(0,1fr)]">
            <aside className="flex flex-col gap-1 p-3 bg-surface-subtle border-b md:border-b-0 md:border-r border-border-subtle">
              <p className="px-3 pt-2 pb-1 font-grotesk font-medium text-xs text-text-secondary">Favourites</p>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-1">
                {folders.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    aria-pressed={!searching && active === f.id}
                    onClick={() => {
                      setActive(f.id);
                      setQuery('');
                    }}
                    className={sideItem(!searching && active === f.id)}
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

            {current.tools.length === 0 ? (
              <div className="p-4 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 rounded-2xl border-[1.5px] border-dashed border-action-primary/30 bg-surface-brand-tint/40 p-6 sm:p-10">
                  <div className="flex flex-col items-center gap-3 shrink-0">
                    <div className="flex items-center justify-center w-[72px] h-[72px] rounded-2xl border-[1.5px] border-dashed border-action-primary text-action-primary">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M7 18a4.5 4.5 0 01-.6-8.96A6 6 0 0117.7 8.2 4.8 4.8 0 0117 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 11v8m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="font-grotesk font-bold text-sm text-text-primary max-w-[140px] truncate">{q}</span>
                  </div>
                  <div className="flex flex-col gap-3 items-center sm:items-start text-center sm:text-left min-w-0">
                    <p className="font-mono text-xs uppercase tracking-wider text-text-brand">Not installed — yet</p>
                    <h3 className="font-grotesk font-medium text-2xl text-text-primary tracking-tight break-words max-w-full">
                      &ldquo;{q}&rdquo; isn&rsquo;t in my toolkit yet.
                    </h3>
                    <p className="font-grotesk text-body text-text-primary">
                      Good news: I&rsquo;m a fast learner with a Computer Science background. If your project needs it, I&rsquo;ll pick it up.
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-1">
                      <button
                        type="button"
                        onClick={openContactModal}
                        className="min-h-[44px] inline-flex items-center gap-2 rounded-pill bg-action-primary hover:bg-action-primary-hover text-text-inverse font-grotesk font-medium text-base px-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M7 1v8m0 0L4 6m3 3l3-3M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Install on request
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuery('')}
                        className="min-h-[44px] inline-flex items-center rounded-pill border-[1.5px] border-border-subtle bg-surface-default hover:bg-surface-subtle text-text-primary font-grotesk font-medium text-base px-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                      >
                        Show all tools
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Home version: three category rows of tool pills, each drifting at its own speed (alternating direction),
// with a link to the full Finder-style toolkit on the About page.
const marqueeRows = [
  { id: 'design', label: 'Design', seconds: 40, reverse: false },
  { id: 'software', label: 'Software', seconds: 70, reverse: true },
  { id: 'programming', label: 'Programming', seconds: 60, reverse: false },
];

const ToolPill = ({ tool }) => (
  <li className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-pill border border-border-subtle bg-surface-default py-1.5 pl-1.5 pr-4 font-grotesk font-medium text-[15px] text-text-primary shadow-[0_1px_2px_rgba(17,24,39,0.04)]">
    <span
      aria-hidden="true"
      className="flex h-[26px] w-[26px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-surface-default shadow-[0_1px_2px_rgba(17,24,39,0.05),inset_0_0_0_0.5px_rgba(0,0,0,0.10)]"
    >
      <img
        src={tool.icon}
        alt=""
        width={17}
        height={17}
        loading="lazy"
        decoding="async"
        className={tool.fill ? 'h-full w-full object-cover' : 'h-[17px] w-[17px] object-contain'}
      />
    </span>
    {tool.name}
  </li>
);

function CompactToolkit() {
  return (
    <section id="toolkit" className="relative overflow-hidden bg-surface-default py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div className="flex flex-col gap-2.5">
            <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">My Toolkit</p>
            <p className="font-caveat font-bold text-xl text-text-brand">Computer Science is my secret weapon.</p>
            <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-text-primary tracking-tight leading-snug max-w-3xl">
              I am Anastasiia Voskova, a designer who thinks like an engineer.
            </h2>
          </div>
          <Link
            to="/about#toolkit"
            className="pb-1.5 font-grotesk font-medium text-body text-text-brand hover:text-action-primary-hover rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            Full toolkit <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="flex flex-col gap-3.5">
          {marqueeRows.map(({ id, label, seconds, reverse }) => {
            const list = getToolsByCategory(id);
            return (
              <div key={id} className="flex flex-col gap-2 md:flex-row md:items-center md:gap-5">
                <span className="md:w-[110px] md:shrink-0 font-mono text-xs uppercase text-text-secondary">{label}</span>
                <div className="toolkit-marquee min-w-0 flex-1">
                  <div
                    className={`toolkit-marquee-track ${reverse ? 'toolkit-marquee-track--rev' : ''}`}
                    style={{ animationDuration: `${seconds}s` }}
                  >
                    {[false, true].map((copy) => (
                      <ul key={String(copy)} aria-hidden={copy || undefined} className="flex shrink-0 gap-2.5 pr-2.5">
                        {list.map((tool) => (
                          <ToolPill key={tool.id} tool={tool} />
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function MyToolkitSection({ compact = false }) {
  return compact ? <CompactToolkit /> : <FullToolkit />;
}
