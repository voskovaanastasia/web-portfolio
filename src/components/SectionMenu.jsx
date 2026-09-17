import { useEffect, useState } from 'react';

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
  const [activeId, setActiveId] = useState(sections[0].id);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
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

  const hidden = activeId === sections[0].id;
  const activeLabel = sections.find(({ id }) => id === activeId)?.label ?? sections[0].label;

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
        className={`fixed bottom-6 right-6 z-50 flex xl:hidden flex-col items-end gap-2.5 transition-all duration-300 ${
          hidden ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        {isOpen && (
          <div className="bg-[rgba(240,240,240,0.6)] backdrop-blur-md border border-white/30 rounded-2xl p-4 flex flex-col gap-2 font-grotesk min-w-[200px]">
            {sections.map(({ id, label }) => {
              const active = id === activeId;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors text-base font-medium ${
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
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle page sections menu"
          aria-expanded={isOpen}
          className="bg-[rgba(240,240,240,0.2)] backdrop-blur-md border border-white/30 rounded-full pl-5 pr-2 py-2 flex items-center gap-3"
        >
          <span className="font-grotesk font-medium text-sm whitespace-nowrap text-black">
            {activeLabel}
          </span>
          <span className="bg-[#288fd6] rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0">
            <svg
              className="w-4 h-4 text-white"
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
