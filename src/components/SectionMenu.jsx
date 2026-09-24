import { useEffect, useRef, useState } from 'react';

const homeSections = [
  { id: 'hero', label: 'Back to Top' },
  { id: 'how-i-work', label: 'How I Work' },
  { id: 'work', label: 'Selected Work' },
  { id: 'toolkit', label: 'My Toolkit' },
  { id: 'impact', label: 'Proven Results' },
  { id: 'experience', label: 'Experience' },
  { id: 'ai-designer', label: 'AI + Designer' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

// Fixed bottom-left section navigator. Hidden while the first section is active.
export default function SectionMenu({ sections = homeSections }) {
  const [intersectingIds, setIntersectingIds] = useState(() => new Set());
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const itemRefs = useRef([]);

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
  }, [sections]);

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
      {/* Desktop section navigator (xl and up) */}
      <nav
        aria-label="Page sections"
        className={`fixed bottom-8 left-8 z-50 hidden xl:flex flex-col gap-2.5 transition-all duration-300 ${
          hidden ? 'opacity-0 -translate-x-4 pointer-events-none' : 'opacity-100 translate-x-0'
        }`}
      >
        {sections.map(({ id, label }) => {
          const active = id === activeId;
          return (
            <a key={id} href={`#${id}`} className="group flex items-center">
              <span
                className={`h-px bg-black transition-all duration-300 ${
                  active ? 'w-10 mr-3' : 'w-0 mr-0'
                }`}
              />
              <span
                className={`font-grotesk font-medium text-xs tracking-wide transition-colors duration-300 ${
                  active ? 'text-black' : 'text-[#c4c4c4] group-hover:text-black'
                }`}
              >
                {label}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Mobile/tablet section navigator (below xl): burger menu, bottom-right */}
      <div
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex xl:hidden flex-col items-end gap-2 sm:gap-2.5 transition-all duration-300 ${
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
            className="bg-[rgba(240,240,240,0.6)] backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col gap-1 sm:gap-2 font-grotesk min-w-[160px] sm:min-w-[200px]"
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
                    active ? 'text-black' : 'text-[#393939] hover:text-black'
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
          className="bg-[rgba(240,240,240,0.2)] backdrop-blur-md border border-white/30 rounded-full pl-3 pr-1.5 py-1.5 sm:pl-5 sm:pr-2 sm:py-2 flex items-center gap-2 sm:gap-3"
        >
          <span className="font-grotesk font-medium text-xs sm:text-sm whitespace-nowrap text-black">
            {activeLabel}
          </span>
          <span className="bg-[#288fd6] rounded-full w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center flex-shrink-0">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
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
