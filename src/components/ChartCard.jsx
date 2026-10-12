import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Bar fills by role: the accent marks the bars named in the chart title,
// everything else stays quiet.
const TONE = {
  accent: 'bg-blue-500',
  grey: 'bg-grey-300',
  light: 'bg-grey-300 opacity-60',
};

// Bars grow from zero (left for rows, bottom for columns) as the chart scrolls in,
// the same way MetricBars does. Skipped for reduced motion.
function useBarGrow(ref, axis) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const bars = ref.current.querySelectorAll('[data-bar]');
    const tween = gsap.from(bars, {
      [axis === 'x' ? 'scaleX' : 'scaleY']: 0,
      transformOrigin: axis === 'x' ? 'left' : 'bottom',
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: { trigger: ref.current, start: 'top 90%', toggleActions: 'restart none restart reset' },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ref, axis]);
}

/**
 * Card wrapper for a chart: title, subtitle, the chart itself, an optional
 * note, and the caption (source and date) below.
 */
export function ChartCard({ title, subtitle, note, caption, children }) {
  return (
    <figure className="bg-surface-subtle rounded-card p-3 sm:p-5 flex flex-col gap-4 m-0">
      <div className="flex flex-col gap-1">
        <h3 className="font-grotesk font-bold text-[16px] sm:text-[18px] text-text-primary leading-snug">
          {title}
        </h3>
        {subtitle && <p className="font-grotesk text-sm text-text-secondary">{subtitle}</p>}
      </div>
      {children}
      {note && <p className="font-grotesk text-[14px] text-text-primary leading-relaxed">{note}</p>}
      <figcaption className="font-grotesk text-caption text-text-secondary leading-relaxed">{caption}</figcaption>
    </figure>
  );
}

/**
 * Horizontal bars from zero. rows = [{ label, value, display?, tone }].
 * `max` is the value that fills the full width; the value sits at the end of the label row.
 */
export function RowBarChart({ rows, max }) {
  const ref = useRef(null);
  useBarGrow(ref, 'x');

  return (
    <ul ref={ref} className="flex flex-col gap-4 list-none p-0 m-0">
      {rows.map((row) => (
        <li key={row.label} className="flex flex-col gap-1.5">
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-grotesk text-[14px] text-text-primary leading-snug">{row.label}</span>
            <span className="font-grotesk font-bold text-[16px] text-text-primary whitespace-nowrap">
              {row.display ?? row.value}
            </span>
          </div>
          <div
            data-bar
            aria-hidden="true"
            className={`h-8 rounded-control ${TONE[row.tone]}`}
            style={{ width: `${(row.value / max) * 100}%` }}
          />
        </li>
      ))}
    </ul>
  );
}

/**
 * Vertical columns from zero. columns = [{ label, value, tone, dashed?, topLabel? }].
 * A `dashed` column is drawn as an empty outline instead of a filled bar.
 */
export function ColumnChart({ columns, max, xLabel }) {
  const ref = useRef(null);
  useBarGrow(ref, 'y');

  return (
    <div className="flex flex-col gap-3">
      <ul ref={ref} className="flex items-end gap-1.5 sm:gap-3 h-52 list-none p-0 m-0 border-b border-grey-300">
        {columns.map((col) => (
          <li key={col.label} className="flex-1 min-w-0 h-full flex flex-col items-center justify-end gap-1">
            <span className="font-grotesk font-bold text-[14px] sm:text-[16px] text-text-primary text-center leading-tight">
              {col.topLabel ?? col.value}
            </span>
            <div
              data-bar
              aria-hidden="true"
              className={`w-full max-w-12 rounded-t-control ${
                col.dashed ? 'border-2 border-dashed border-blue-500' : TONE[col.tone]
              }`}
              style={{ height: `${(col.value / max) * 80}%` }}
            />
          </li>
        ))}
      </ul>
      <ul className="flex gap-1.5 sm:gap-3 list-none p-0 m-0">
        {columns.map((col) => (
          <li
            key={col.label}
            className="flex-1 min-w-0 font-grotesk text-[14px] text-text-primary text-center"
          >
            {col.label}
          </li>
        ))}
      </ul>
      <p className="font-grotesk text-sm text-text-secondary text-center">{xLabel}</p>
    </div>
  );
}
