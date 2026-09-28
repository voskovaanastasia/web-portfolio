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
    card: 'bg-[#22292f] text-white',
    number_color: 'text-white',
    meta_color: 'text-[#bdbdbd]',
  },
  {
    number: '−40%',
    label: 'Bounce Rate',
    project: 'bART Solutions',
    description: '68% → 41% after restructured IA',
    card: 'bg-[#f7f7f7] text-black',
    number_color: 'text-[#288fd6]',
    meta_color: 'text-black',
  },
  {
    number: '0→1',
    label: 'Secure Send / Swap',
    project: 'CryptoWallet',
    description: 'Guided flow designed to prevent lost funds',
    card: 'bg-[#1f7ab8] text-white',
    number_color: 'text-white',
    meta_color: 'text-white',
  },
  {
    number: '92%',
    label: 'Dashboard Task Success',
    project: 'Farsafe',
    description: 'High usability in a data-dense interface',
    card: 'bg-[#f7f7f7] text-black',
    number_color: 'text-[#288fd6]',
    meta_color: 'text-black',
  },
  {
    number: '6+',
    label: 'Years of Experience',
    project: 'Web, Mobile & SaaS',
    description: 'Product design, UX/UI, design systems & research',
    card: 'bg-[#6d3fc4] text-white',
    number_color: 'text-white',
    meta_color: 'text-white/80',
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
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="impact" className="relative overflow-hidden bg-white py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-2.5">
          <p className="font-mono-bold text-[14px] text-black">Proven Results</p>
          <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-black tracking-tight leading-snug max-w-[590px]">
            Design decisions grounded in research, measured by real outcomes.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className={`rounded-[15px] p-3 sm:p-5 flex flex-col gap-1 sm:gap-2.5 ${metric.card}`}
            >
              <p
                data-metric-number
                style={{ fontVariantNumeric: 'tabular-nums' }}
                className={`font-grotesk font-bold text-[30px] sm:text-5xl whitespace-nowrap ${metric.number_color}`}
              >
                {metric.number}
              </p>
              <p className="font-grotesk font-bold text-[14px]">{metric.label}</p>
              <p className={`font-grotesk text-sm ${metric.meta_color}`}>{metric.project}</p>
              <p className="font-grotesk text-sm">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
