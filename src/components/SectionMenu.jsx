import { useEffect, useState } from 'react';

const sections = [
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

export default function SectionMenu() {
  const [activeId, setActiveId] = useState('hero');

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
  }, []);

  const hidden = activeId === 'hero';

  return (
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
  );
}
