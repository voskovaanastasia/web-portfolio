import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DotsBackground from './DotsBackground';
import avatar from '../assets/avatar.webp';
import iconFigma from '../assets/icon-figma.svg';
import iconReact from '../assets/icon-react.svg';
import iconStack1 from '../assets/icon-stack1.webp';
import iconGit from '../assets/icon-git.svg';
import iconClaude from '../assets/icon-claude.svg';
import iconWebflow from '../assets/icon-webflow.svg';
import iconStack2 from '../assets/icon-stack2.webp';
import iconJira from '../assets/icon-jira.svg';
import iconNotion from '../assets/icon-notion.svg';

const stackIcons = [
  { src: iconFigma, alt: 'Figma', w: 25, h: 25 },
  { src: iconReact, alt: 'React', w: 24, h: 22 },
  { src: iconStack1, alt: 'Framer', w: 512, h: 512 },
  { src: iconGit, alt: 'Git', w: 25, h: 25 },
  { src: iconClaude, alt: 'Claude', w: 22, h: 22 },
  { src: iconWebflow, alt: 'Webflow', w: 25, h: 25 },
  { src: iconStack2, alt: 'Tailwind CSS', w: 512, h: 512 },
  { src: iconJira, alt: 'Jira', w: 25, h: 25 },
  { src: iconNotion, alt: 'Notion', w: 25, h: 25 },
];

export default function HeroSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // Entrance: content rises in, then the stack icons pop in one by one.
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('[data-hero-item]', { y: 24, opacity: 0, duration: 0.7, stagger: 0.1 })
        .from(
          '[data-stack-icon]',
          { scale: 0, y: 20, opacity: 0, duration: 0.6, ease: 'back.out(2)', stagger: 0.06 },
          '-=0.5'
        );

      // Interaction: icons lean toward the cursor and spring back on leave.
      const icons = gsap.utils.toArray('[data-stack-icon]');
      const cleanups = icons.map((el) => {
        const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
        const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });
        const onMove = (e) => {
          const r = el.getBoundingClientRect();
          xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
          yTo((e.clientY - (r.top + r.height / 2)) * 0.35 - 8);
        };
        const onEnter = () => gsap.to(el, { scale: 1.2, duration: 0.3, ease: 'back.out(2)' });
        const onLeave = () => {
          xTo(0);
          yTo(0);
          gsap.to(el, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
        };
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
        return () => {
          el.removeEventListener('mousemove', onMove);
          el.removeEventListener('mouseenter', onEnter);
          el.removeEventListener('mouseleave', onLeave);
        };
      });
      return () => cleanups.forEach((fn) => fn());
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const scrollToToolkit = (e) => {
    const target = document.getElementById('toolkit');
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={rootRef} id="hero" className="relative overflow-hidden min-h-[85vh] flex items-center justify-center">
      <DotsBackground />
      <div className="relative z-10 flex flex-col items-center gap-5 max-w-3xl px-6 sm:px-8 py-20 text-center">
        {/* Hello line */}
        <div data-hero-item className="flex items-center gap-2.5">
          <img
            src={avatar}
            alt="Anastasiia"
            width={74}
            height={74}
            loading="eager"
            fetchPriority="high"
            className="w-9 h-9 rounded-full"
          />
          <span className="font-mono-bold font-bold text-[14px] text-black">
            Hello, I&rsquo;m <span className="text-[#288fd6]">Anastasiia</span>
          </span>
        </div>

        {/* Headline */}
        <h1 data-hero-item className="font-grotesk font-medium text-[26px] sm:text-4xl md:text-5xl text-black tracking-tight leading-snug max-w-[280px] sm:max-w-none">
          I make complex,{' '}
          <span className="font-playwrite font-normal">data-dense</span>{' '}
          products feel simple, and ground every decision in research.
        </h1>

        {/* Subheadline */}
        <p data-hero-item className="font-grotesk text-[16px] sm:text-xl text-black max-w-[280px] sm:max-w-none">
          Currently designing uptime-monitoring platforms and scalable design systems that users actually love.
        </p>

        {/* Based in */}
        <div data-hero-item className="flex flex-col items-center gap-2.5">
          <p className="font-mono-bold text-[14px] text-black">Based in</p>
          <p className="font-grotesk font-medium text-[14px] text-black">
            🇪🇸 Granada, Spain
          </p>
        </div>

        {/* My Stack */}
        <div data-hero-item className="flex flex-col items-center gap-2.5">
          <p className="font-mono-bold text-[14px] text-black">My Stack</p>
          <div className="flex items-center">
            {stackIcons.map((icon, i) => (
              <div
                key={icon.alt + i}
                data-stack-icon
                className="group bg-[#fbfbfb] flex items-center justify-center w-[50px] h-[50px] rounded-full -mr-4 last:mr-0 shadow-[1px_1px_5px_rgba(124,124,124,0.25)] hover:z-10 relative cursor-pointer"
              >
                <span
                  role="tooltip"
                  className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2.5 py-1 font-grotesk text-xs font-medium text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                >
                  {icon.alt}
                </span>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.w}
                  height={icon.h}
                  className="w-[25px] h-[25px]"
                />
              </div>
            ))}
          </div>
          <a
            href="/about#toolkit"
            onClick={scrollToToolkit}
            className="font-caveat font-bold text-xl text-[#6d3fc4] hover:underline underline-offset-4"
          >
            + more
          </a>
        </div>

        {/* CTA + handwritten note, tighter pairing */}
        <div data-hero-item className="flex flex-col items-center gap-3">
          <a
            href="/Anastasiia-Voskova-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Anastasiia-Voskova-Resume.pdf"
            className="bg-[#1f7ab8] hover:bg-[#186a9c] text-white font-grotesk font-medium text-base px-5 py-2.5 rounded-full transition-colors"
          >
            Download CV
          </a>
          <p className="font-caveat font-bold text-xl text-[#6d3fc4] max-w-[280px] sm:max-w-[300px]">
            This entire portfolio was built with Claude Code.
          </p>
        </div>
      </div>
    </section>
  );
}
