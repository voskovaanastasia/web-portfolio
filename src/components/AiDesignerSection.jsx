import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '1',
    title: 'Frame the problem',
    description:
      "Before anything visual, I get clear on what we're actually solving — the user, the friction, the outcome. Wireframes and UX direction come out of that clarity, in Figma.",
  },
  {
    number: '2',
    title: 'Turn design into instructions',
    description:
      "I convert flows, states, and edge cases into precise written specs (Markdown) — a briefing detailed enough that an AI can't misread my intent.",
  },
  {
    number: '3',
    title: 'Build with AI',
    description:
      'Those specs go to AI coding agents that generate real, semantic front-end — layout, styling, and interaction logic that behaves like the product, not a demo.',
  },
  {
    number: '4',
    title: 'Put it live',
    description:
      'The result ships as a real URL you can open and use — decisions get tested on a live product, not argued over a static frame.',
  },
  {
    number: '5',
    title: 'Test & refine',
    description:
      'I put the prototype in front of real users, watch where they stumble, and feed those insights back into the design — closing the gap between "looks done" and "works."',
  },
];

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
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-2.5">
          <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">AI + DESIGNER</p>
          <p className="font-caveat font-bold text-xl text-text-brand">Where design stops being a picture</p>
          <h2 className="font-grotesk font-medium text-heading text-text-primary tracking-tight">
            From static concepts to live prototypes.
          </h2>
          <p className="font-grotesk text-body-lg text-text-primary leading-relaxed max-w-3xl mt-2">
            I don&rsquo;t just hand off screens — I ship live, interactive prototypes.
            By pairing product thinking with modern AI models, I close the gap between
            UX design and engineering, so ideas get validated in the browser, not in a
            slide. Here&rsquo;s how I turn a product concept into a working app using AI.
          </p>
        </div>

        <ol data-ai-cards className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-10">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <li
                key={step.number}
                className={`flex flex-col gap-3 pt-5 border-t ${isLast ? 'border-action-primary' : 'border-border-subtle'}`}
              >
                <p className="font-mono-bold text-caption uppercase tracking-wider text-text-brand">
                  Step {step.number}
                </p>
                <h3 className="font-grotesk font-medium text-[18px] leading-snug text-text-primary">{step.title}</h3>
                <p className="font-grotesk text-sm text-text-primary leading-relaxed">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
