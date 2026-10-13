import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getToolsByCategory } from '../data/tools';
import ToolIcon from './ToolIcon';
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

const toolRows = [
  { label: 'DESIGN', tools: designTools },
  { label: 'SOFTWARE', tools: softwareTools },
  { label: 'PROGRAMMING', tools: programmingTools },
];

const rowClass =
  'grid md:grid-cols-[200px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] gap-4 md:gap-10 items-center py-6 border-t border-border-subtle';
const labelClass = 'font-mono-bold text-caption uppercase tracking-wider text-text-secondary';

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
    <section ref={rootRef} id="toolkit" className="relative overflow-hidden bg-surface-default py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-2.5 mb-12">
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

        <div className="border-b border-border-subtle">
          {toolRows.map((row) => (
            <div key={row.label} data-tool-group className={rowClass}>
              <p className={labelClass}>{row.label}</p>
              <ul className="flex flex-wrap gap-3">
                {row.tools.map((tool) => (
                  <li key={tool.id} data-tool-card>
                    <ToolIcon
                      id={tool.id}
                      data-tool-tile
                      iconClassName="w-[25px] h-[25px]"
                      className="bg-surface-default w-[50px] h-[50px] shadow-icon"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div data-tool-group className={rowClass}>
            <p className={labelClass}>Language</p>
            <ul className="flex flex-wrap gap-x-10 gap-y-4">
              {languages.map((lang) => (
                <li key={lang.label} data-tool-card className="flex items-center gap-3">
                  <img
                    src={lang.flag}
                    alt={`${lang.label} flag`}
                    className="w-8 h-[22px] rounded-[3px] object-cover ring-1 ring-track"
                  />
                  <div className="flex flex-col">
                    <p className="font-grotesk font-bold text-sm text-text-primary">{lang.label}</p>
                    <p className="font-grotesk text-xs text-text-secondary">{lang.level}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
