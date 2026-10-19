import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Renders `text` with every digit run replaced by an in-progress value at progress `p` (0..1).
// Multi-digit runs count up; single digits flicker through random values before settling.
function renderProgress(text, p) {
  return text.replace(/\d+/g, (run) => {
    if (p >= 1) return run;
    const target = Number(run);
    if (run.length === 1) return String(Math.floor(Math.random() * 10));
    return String(Math.round(target * p)).padStart(run.length, '0');
  });
}

const metrics = [
  {
    number: '1m 41s',
    label: 'Time-to-First-Probe',
    project: 'Farsafe',
    description: 'Optimized user onboarding and product discovery',
  },
  {
    number: '−40%',
    label: 'Bounce Rate',
    project: 'bART Solutions',
    description: '68% → 41% after restructured IA',
  },
  {
    number: '0→1',
    label: 'Secure Send / Swap',
    project: 'CryptoWallet',
    description: 'Guided flow designed to prevent lost funds',
  },
  {
    number: '92%',
    label: 'Dashboard Task Success',
    project: 'Farsafe',
    description: 'High usability in a data-dense interface',
  },
  {
    number: '6+',
    label: 'Years of Experience',
    project: 'Web, Mobile & SaaS',
    description: 'Product design, UX/UI, design systems & research',
  },
];

export default function ImpactSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-metric-number]').forEach((el) => {
        const finalText = el.textContent;
        const state = { p: 0 };
        el.textContent = renderProgress(finalText, 0);

        gsap.to(state, {
          p: 1,
          duration: 0.9,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = renderProgress(finalText, state.p);
          },
          onComplete: () => {
            el.textContent = finalText;
          },
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'restart none restart reset' },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="impact" className="relative overflow-hidden bg-surface-default py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-2.5">
          <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">Proven Results</p>
          <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-text-primary tracking-tight leading-snug max-w-[590px]">
            Design decisions grounded in research, measured by real outcomes.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-10">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col gap-1 sm:gap-2.5 pt-5 border-t ${
                index === metrics.length - 1 ? 'border-action-primary' : 'border-border-subtle'
              }`}
            >
              <p
                data-metric-number
                className="font-grotesk font-bold text-[30px] sm:text-5xl lg:text-[clamp(1.75rem,calc(5.55vw_-_1.2rem),2.8rem)] whitespace-nowrap tabular-nums text-text-brand"
              >
                {metric.number}
              </p>
              <p className="font-grotesk font-bold text-body text-text-primary">{metric.label}</p>
              <p className="font-grotesk text-sm text-text-secondary">{metric.project}</p>
              <p className="font-grotesk text-sm text-text-primary">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
