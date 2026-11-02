import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Kept apart from Charts.jsx so a page that only needs the bars does not load ApexCharts.
gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Horizontal progress bar whose fill grows from 0 to `pct` each time it scrolls into view.
export function ProgressBar({ pct, color }) {
  const trackRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const tween = gsap.fromTo(
      fillRef.current,
      { width: '0%' },
      {
        width: `${pct}%`,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: trackRef.current, start: 'top 90%', toggleActions: 'restart none restart reset' },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [pct]);

  return (
    <div ref={trackRef} className="h-1.5 rounded-pill bg-surface-placeholder overflow-hidden">
      <div ref={fillRef} className="h-full rounded-pill" style={{ width: `${pct}%`, backgroundColor: color }} />
    </div>
  );
}

// Stat row: label on the left, value on the right in the bar's colour, bar underneath, caption below.
// `title` is "<value> — <label>"; the part before the dash becomes the value.
export function StatBar({ pct, color, title, text }) {
  const [value, ...rest] = title.split(' — ');
  const label = rest.join(' — ');
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-grotesk font-medium text-body-lg text-ink">{label}</p>
        <p className="font-grotesk font-bold text-body shrink-0" style={{ color }}>{value}</p>
      </div>
      <ProgressBar pct={pct} color={color} />
      {text && <p className="font-grotesk text-body text-text-primary leading-relaxed">{text}</p>}
    </div>
  );
}
