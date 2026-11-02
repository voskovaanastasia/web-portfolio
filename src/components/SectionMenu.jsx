import { useEffect, useRef, useState } from 'react';
import { measureBehind } from '../lib/backdropLuminance';

const homeSections = [
  { id: 'hero', label: 'Back to Top' },
  { id: 'work', label: 'Selected Work' },
  { id: 'impact', label: 'Proven Results' },
  { id: 'how-i-work', label: 'How I Work' },
  { id: 'toolkit', label: 'My Toolkit' },
  { id: 'recommendations', label: 'What People Say' },
  { id: 'ai-designer', label: 'AI + Designer' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

// Backdrop luminance (WCAG relative, 0 = black) below which the desktop navigator switches to light text, and above
// which it switches back; the gap keeps it from flickering on a boundary.
const DARK_BELOW = 0.14;
const LIGHT_ABOVE = 0.22;

// Fixed bottom-left section navigator on wide screens, burger dropdown otherwise. Hidden while the first section is active.
export default function SectionMenu({ sections = homeSections, refreshKey = 0 }) {
  const [intersectingIds, setIntersectingIds] = useState(() => new Set());
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const itemRefs = useRef([]);
  const navRef = useRef(null);
  const compactRef = useRef(null);
  const pillLabelRef = useRef(null);
  const [onDark, setOnDark] = useState(false);
  // The compact burger button and its dropdown each follow the backdrop behind them.
  const [pillOnDark, setPillOnDark] = useState(false);
  const [panelOnDark, setPanelOnDark] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIntersectingIds((prev) => {
          const next = new Set(prev);
          entries.forEach((entry) => {
            if (entry.isIntersecting) next.add(entry.target.id);
            else next.delete(entry.target.id);
          });
          return next;
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections, refreshKey]);

  // Like the header: the desktop navigator's text follows what is behind it (the dark footer, dark heroes).
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return undefined;
    let raf = 0;
    const measure = () => {
      raf = 0;
      const rect = nav.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return; // hidden below 1450px
      const { L } = measureBehind(rect, nav);
      setOnDark((prev) => (prev ? L < LIGHT_ABOVE : L < DARK_BELOW));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    document.addEventListener('load', schedule, true);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      document.removeEventListener('load', schedule, true);
    };
  }, [sections, refreshKey]);

  // Same for the compact navigator (below 1450px): light text and a dark glass tint over dark sections.
  useEffect(() => {
    const wrap = compactRef.current;
    if (!wrap) return undefined;
    let raf = 0;
    const follow = (el, setter) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return; // hidden from 1450px up
      const { L } = measureBehind(rect, wrap);
      setter((prev) => (prev ? L < LIGHT_ABOVE : L < DARK_BELOW));
    };
    const measure = () => {
      raf = 0;
      follow(pillLabelRef.current, setPillOnDark); // the text decides, not the blue circle beside it
      follow(menuRef.current, setPanelOnDark);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    document.addEventListener('load', schedule, true);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      document.removeEventListener('load', schedule, true);
    };
  }, [sections, refreshKey, isOpen]);

  // Topmost section (in page order) that's currently intersecting wins, so the
  // dropdown reliably reads "hero" at scroll position 0 instead of whichever
  // section's observer entry happened to fire/settle last.
  const activeId = sections.find(({ id }) => intersectingIds.has(id))?.id ?? sections[0].id;
  const hidden = activeId === sections[0].id;
  const activeLabel = sections.find(({ id }) => id === activeId)?.label ?? sections[0].label;

  useEffect(() => {
    if (isOpen) itemRefs.current[0]?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (!menuRef.current?.contains(e.target) && !buttonRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const handleMenuKeyDown = (e) => {
    const items = itemRefs.current.filter(Boolean);
    const currentIndex = items.indexOf(document.activeElement);

    if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      items[(currentIndex + 1) % items.length]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      items[(currentIndex - 1 + items.length) % items.length]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      items[items.length - 1]?.focus();
    } else if (e.key === 'Tab') {
      closeMenu();
    }
  };

  return (
    <>
      {/* Desktop section navigator. Only shown where the gutter beside the 1152px content column is wide
          enough for it (>= 1450px); its width and offset are derived from that gutter, so it can't overlap
          the content. Every item reserves the same left padding for the line, so the active state never
          changes an item's width or moves its label. */}
      <nav
        ref={navRef}
        aria-label="Page sections"
        style={{
          '--menu-left': 'clamp(16px, calc((100vw - 1450px) / 2 + 16px), 32px)',
          '--menu-line': 'clamp(10px, calc(1.5vw - 6px), 20px)',
          '--menu-pad': 'calc(var(--menu-line) + 8px)',
          left: 'var(--menu-left)',
          width: 'clamp(130px, calc((100vw - 1152px) / 2 + 32px - var(--menu-left) - 32px), 200px)',
        }}
        className={`fixed bottom-8 z-50 hidden min-[1450px]:flex flex-col gap-2.5 transition-all duration-300 ${
          hidden ? 'opacity-0 -translate-x-4 pointer-events-none' : 'opacity-100 translate-x-0'
        }`}
      >
        {sections.map(({ id, label }) => {
          const active = id === activeId;
          return (
            <a key={id} href={`#${id}`} className="group relative block pl-[var(--menu-pad)]">
              <span
                aria-hidden="true"
                style={{ width: 'var(--menu-line)' }}
                className={`absolute left-0 top-[0.6em] h-px origin-left transition-[transform,background-color] duration-300 ${
                  onDark ? 'bg-white' : 'bg-ink'
                } ${active ? 'scale-x-100' : 'scale-x-0'}`}
              />
              <span
                className={`block font-grotesk font-medium text-[clamp(11px,0.8vw,12px)] leading-snug tracking-wide break-words transition-colors duration-300 ${
                  onDark
                    ? active
                      ? 'text-white'
                      : 'text-text-on-dark-muted group-hover:text-white'
                    : active
                      ? 'text-text-primary'
                      : 'text-text-secondary group-hover:text-text-primary'
                }`}
              >
                {label}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Compact section navigator (below 1450px): burger menu showing the current section, bottom-right */}
      <div
        ref={compactRef}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex min-[1450px]:hidden flex-col items-end gap-2 sm:gap-2.5 transition-all duration-300 ${
          hidden ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        {isOpen && (
          <div
            id="section-menu"
            ref={menuRef}
            role="menu"
            aria-label="Page sections"
            onKeyDown={handleMenuKeyDown}
            className={`${panelOnDark ? 'bg-surface-inverse' : 'bg-glass-panel'} backdrop-blur-md border border-glass-border rounded-control sm:rounded-panel p-2.5 sm:p-4 flex flex-col gap-1 sm:gap-2 font-grotesk min-w-[160px] sm:min-w-[200px] transition-colors duration-300`}
          >
            {sections.map(({ id, label }, index) => {
              const active = id === activeId;
              return (
                <a
                  key={id}
                  ref={(el) => (itemRefs.current[index] = el)}
                  role="menuitem"
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-colors text-sm sm:text-base font-medium ${
                    panelOnDark ? 'text-text-inverse' : 'text-text-primary'
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>
        )}

        <button
          ref={buttonRef}
          onClick={() => setIsOpen((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown' && !isOpen) {
              e.preventDefault();
              setIsOpen(true);
            }
          }}
          aria-label="Toggle page sections menu"
          aria-haspopup="menu"
          aria-expanded={isOpen}
          aria-controls="section-menu"
          className={`${pillOnDark ? 'bg-glass-dark' : 'bg-glass-light'} backdrop-blur-md border border-glass-border rounded-pill pl-3 pr-1.5 py-1.5 sm:pl-5 sm:pr-2 sm:py-2 flex items-center gap-2 sm:gap-3 transition-colors duration-300`}
        >
          <span ref={pillLabelRef} className={`font-grotesk font-medium text-xs sm:text-sm whitespace-nowrap transition-colors duration-300 ${pillOnDark ? 'text-text-inverse' : 'text-text-primary'}`}>
            {activeLabel}
          </span>
          <span className="bg-blue-500 rounded-pill w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center flex-shrink-0">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-inverse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}
