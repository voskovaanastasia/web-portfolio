import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '1',
    file: '01-frame.fig',
    title: 'Frame the problem',
    description: 'The user, the friction, the outcome — then wireframes and UX direction in Figma.',
  },
  {
    number: '2',
    file: '02-spec.md',
    title: 'Design to spec',
    description: "Flows, states and edge cases become precise Markdown specs an AI can't misread.",
  },
  {
    number: '3',
    file: '03-build.tsx',
    title: 'Build with AI',
    description: 'AI coding agents generate real, semantic front-end that behaves like the product.',
  },
  {
    number: '4',
    file: '04-live.url',
    title: 'Put it live',
    description: 'A real URL you can open and use — decisions tested on a live product.',
  },
  {
    number: '5',
    file: '05-test.log',
    title: 'Test & refine',
    description: 'Real users, real stumbles — insights fed back until it works, not just looks done.',
  },
];

const TrafficLights = ({ className = '', size = 'w-3 h-3' }) => (
  <span aria-hidden="true" className={`flex items-center gap-1.5 ${className}`}>
    <span className={`${size} rounded-pill bg-traffic-red`} />
    <span className={`${size} rounded-pill bg-traffic-yellow`} />
    <span className={`${size} rounded-pill bg-traffic-green`} />
  </span>
);

export default function AiDesignerSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.from('[data-ai-cards] > li', {
        y: 30,
        opacity: 0,
        duration: 0.45,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: '[data-ai-cards]', start: 'top 85%', toggleActions: 'restart none restart reset' },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="ai-designer" className="relative overflow-hidden bg-surface-default py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editor window */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-surface-dark shadow-window-dark">
          <div className="relative flex items-center h-11 px-4 bg-surface-dark-bar border-b border-white/10">
            <TrafficLights size="w-3 h-3" />
            <p className="absolute inset-x-0 text-center font-grotesk font-medium text-xs text-white/80 pointer-events-none">
              <span aria-hidden="true">&#128449;&nbsp;</span>AI + Designer — concept-to-prototype
            </p>
          </div>

          <div className="px-5 sm:px-6 lg:px-8 py-8 sm:py-10">
            <div className="mb-12 flex flex-col gap-2.5">
              <p className="font-mono-bold text-caption uppercase tracking-wider text-white/60">AI + DESIGNER</p>
              <p className="font-caveat font-bold text-xl text-text-on-dark-accent">Where design stops being a picture</p>
              <h2 className="font-grotesk font-medium text-heading text-white tracking-tight max-w-2xl">
                From static concepts to live prototypes.
              </h2>
              <p className="font-grotesk text-body-lg text-white/80 leading-relaxed max-w-3xl mt-2">
                I don&rsquo;t just hand off screens — I ship live, interactive prototypes.
                By pairing product thinking with modern AI models, I close the gap between
                UX design and engineering, so ideas get validated in the browser, not in a
                slide.
              </p>
            </div>

            <ol data-ai-cards className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const isLast = index === steps.length - 1;
                return (
                  <li
                    key={step.number}
                    className={`flex flex-col overflow-hidden rounded-xl border bg-surface-dark-bar shadow-step-card ${
                      isLast
                        ? 'border-border-on-dark-accent shadow-step-card-active'
                        : 'border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3 px-3.5 h-8 bg-surface-raised-dark-2">
                      <TrafficLights size="w-2 h-2" />
                      <span className="font-mono text-[11px] text-white/60">{step.file}</span>
                    </div>
                    <div className="flex flex-col gap-3 p-5 min-h-[170px]">
                      <h3 className="font-grotesk font-medium text-[18px] leading-snug text-white">{step.title}</h3>
                      <p className="font-grotesk text-sm text-white/65 leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
