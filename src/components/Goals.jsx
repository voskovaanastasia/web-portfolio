import { useRef } from 'react';
import useStaggerReveal from '../hooks/useStaggerReveal';

// Same five colours, in the same order (outer ring to inner ring), as the radial charts
// (frustrationSegments in BartCase / monitoringFrustrationSegments in FarsafeCase).
const GOAL_COLORS = [
  'var(--color-data-1)',
  'var(--color-data-2)',
  'var(--color-data-3)',
  'var(--color-data-4)',
  'var(--color-purple-500)',
];

const pad = (n) => String(n).padStart(2, '0');

// Shared "Project Goals" block: a title, then a headline statement on the left, a numbered list of goals on the right.
// `as="div"` lets a host that already supplies the <section> wrapper (CaseLayout) avoid nesting sections.
export default function Goals({ headline, items, title = 'Project Goals', as: Wrapper = 'section', id }) {
  const listRef = useRef(null);
  useStaggerReveal(listRef);

  return (
    <Wrapper id={id} className="pb-20 flex flex-col gap-10">
      <p className="font-mono-bold text-[14px] text-text-primary">{title}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <h2 className="font-grotesk font-medium text-text-primary tracking-tight leading-[1.1] text-[clamp(28px,4.2vw,48px)] lg:max-w-[16em]">
          {headline}
        </h2>

        <ol ref={listRef} className="flex flex-col lg:mt-3">
          {items.map((text, i) => (
            <li key={text} className="flex gap-5 py-4">
              <span
                aria-hidden="true"
                className="font-mono-bold font-semibold text-[14px] leading-relaxed shrink-0 tabular-nums"
                style={{ color: GOAL_COLORS[i % GOAL_COLORS.length] }}
              >
                {pad(i + 1)}
              </span>
              <p className="font-grotesk text-[14px] text-text-primary leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Wrapper>
  );
}
