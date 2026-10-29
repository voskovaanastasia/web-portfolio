import { useEffect, useRef } from 'react';
import DotsBackground from './DotsBackground';
import avatar from '../assets/avatar.webp';
import ToolIcon from './ToolIcon';
import { openContactModal } from '../contactModalStore';

const stackToolIds = ['figma', 'react', 'framer', 'git', 'claude-code', 'webflow', 'tailwind', 'jira', 'notion'];

export default function HeroSection() {
  const rootRef = useRef(null);
  const cursorRef = useRef(null);

  // The entrance runs in CSS (see globals.css) so the hero paints without waiting for GSAP.
  // GSAP is only needed for the icon hover physics, so it loads once the page is idle.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!window.matchMedia('(hover: hover)').matches) return undefined;

    let cancelled = false;
    let ctx;
    const setup = async () => {
      const { default: gsap } = await import('gsap');
      if (cancelled || !rootRef.current) return;
      ctx = gsap.context(() => {
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
    };

    const idle = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 1));
    const cancelIdle = window.cancelIdleCallback ?? clearTimeout;
    const handle = idle(setup, { timeout: 3000 });
    return () => {
      cancelled = true;
      cancelIdle(handle);
      ctx?.revert();
    };
  }, []);

  // Figma-style multiplayer cursor: inside the hero the pointer is replaced by a labelled "You" cursor.
  // Plain DOM + rAF, so it costs nothing at load. Links and buttons keep the native pointer.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    const root = rootRef.current;
    const cursor = cursorRef.current;
    if (!root || !cursor) return undefined;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.1 ? requestAnimationFrame(tick) : 0;
    };
    const onMove = (e) => {
      const r = root.getBoundingClientRect();
      const first = !root.dataset.cursor;
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (first) {
        x = tx;
        y = ty;
      }
      root.dataset.cursor = e.target.closest('a, button') ? 'native' : 'custom';
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      delete root.dataset.cursor;
    };
    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <section ref={rootRef} id="hero" className="relative overflow-hidden min-h-[85vh] flex items-center justify-center">
      <DotsBackground />
      {/* Visitor cursor: same look as the team cursor, in blue and labelled "You" */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="hero-visitor-cursor pointer-events-none absolute z-20 left-0 top-0 opacity-0 transition-opacity duration-150"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-action-primary">
          <path d="M1 1l5.2 13.5 2-5.6 5.6-2L1 1z" fill="currentColor" />
        </svg>
        <span className="absolute left-3 top-3.5 px-3 py-1 rounded-pill bg-action-primary text-text-inverse font-grotesk font-medium text-sm whitespace-nowrap">
          You
        </span>
      </div>
      {/* Collaborator cursor, as in a shared Figma file */}
      <div aria-hidden="true" className="hidden lg:flex absolute z-10 left-[6%] top-[18%] flex-col items-start">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent-handwritten">
          <path d="M1 1l5.2 13.5 2-5.6 5.6-2L1 1z" fill="currentColor" />
        </svg>
        <span className="ml-3 -mt-0.5 px-3 py-1 rounded-pill bg-accent-handwritten text-text-inverse font-grotesk font-medium text-sm">
          Anastasiia
        </span>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-5 max-w-5xl px-6 sm:px-8 py-20 text-center">
        {/* Hello line */}
        <div data-hero-item className="flex items-center gap-2.5">
          <img
            src={avatar}
            alt="Anastasiia"
            width={74}
            height={74}
            loading="eager"
            fetchPriority="high"
            className="w-9 h-9 rounded-pill"
          />
          <span className="font-mono-bold font-bold text-body text-text-primary">
            Hello, I&rsquo;m <span className="text-text-brand">Anastasiia</span>
          </span>
        </div>

        {/* Headline */}
        <h1 data-hero-item className="relative font-grotesk font-medium text-[26px] sm:text-4xl md:text-5xl lg:text-[64px] text-text-primary tracking-tight leading-[1.15] max-w-[280px] sm:max-w-none lg:max-w-[1000px]">
          I make complex,{' '}
          {/* Figma-style selection frame around the handwritten word */}
          <span className="relative inline-block px-2 sm:px-3 border-[1.5px] border-action-primary">
            <span className="font-caveat font-bold text-[1.18em] leading-none">data-dense</span>
            {['-top-[5px] -left-[5px]', '-top-[5px] -right-[5px]', '-bottom-[5px] -left-[5px]', '-bottom-[5px] -right-[5px]'].map((pos) => (
              <span
                key={pos}
                aria-hidden="true"
                className={`absolute ${pos} w-[9px] h-[9px] bg-surface-default border-[1.5px] border-action-primary`}
              />
            ))}
          </span>{' '}
          products feel simple, and ground every decision in research<span className="text-action-primary">.</span>
        </h1>

        {/* Subheadline */}
        <p data-hero-item className="font-grotesk text-lead text-text-primary max-w-[280px] sm:max-w-md md:max-w-xl">
          Currently designing uptime-monitoring platforms and scalable design systems that users actually love.
        </p>

        {/* Buttons */}
        <div data-hero-item className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[280px] sm:max-w-none">
          <button
            type="button"
            onClick={openContactModal}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center text-center border-[1.5px] border-transparent bg-action-primary hover:bg-action-primary-hover text-text-inverse font-grotesk font-medium text-base px-6 py-2.5 rounded-pill transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            Contact me
          </button>
          <a
            href="/Anastasiia-Voskova-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Anastasiia-Voskova-Resume.pdf"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center text-center border-[1.5px] bg-surface-default border-action-primary text-action-primary hover:bg-surface-brand-tint font-grotesk font-medium text-base px-6 py-2.5 rounded-pill transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            Download CV
          </a>
        </div>

        {/* Location + stack */}
        <div data-hero-item className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
          <p className="font-grotesk font-medium text-body text-text-primary whitespace-nowrap">
            🇪🇸 Granada, Spain
          </p>
          <span aria-hidden="true" className="hidden sm:block w-1 h-1 rounded-pill bg-text-secondary" />
          <div className="flex items-center">
            {stackToolIds.map((id) => (
              <ToolIcon
                key={id}
                id={id}
                data-stack-icon
                iconClassName="w-[25px] h-[25px]"
                className="bg-surface-default w-[50px] h-[50px] -mr-4 last:mr-0 shadow-icon hover:z-10"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
