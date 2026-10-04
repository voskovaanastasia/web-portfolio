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
      'The result ships to Firebase Hosting as a real URL you can open and use — decisions get tested on a live product, not argued over a static frame.',
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
      gsap.from('[data-ai-cards] > div', {
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
        <div className="mb-8 flex flex-col gap-4">
          <p className="font-mono-bold text-[14px] text-text-primary">AI + DESIGNER</p>
          <div className="max-w-[590px] flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <p className="font-caveat font-bold text-xl text-accent-handwritten">
                Where design stops being a picture
              </p>
              <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-text-primary tracking-tight">
                From static concepts to live prototypes.
              </h2>
            </div>
            <p className="font-grotesk text-sm text-text-secondary leading-relaxed">
              I don&rsquo;t just hand off screens — I ship live, interactive prototypes.
              By pairing product thinking with modern AI models, I close the gap between
              UX design and engineering, so ideas get validated in the browser, not in a
              slide. Here&rsquo;s how I turn a product concept into a working app using AI.
            </p>
          </div>
        </div>

        <div data-ai-cards className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step, index) => {
            const isFirst = index === 0;
            const isLast = index === steps.length - 1;
            const cardClass = isFirst
              ? 'bg-surface-inverse text-white'
              : isLast
                ? 'bg-action-primary text-white'
                : 'bg-surface-subtle text-text-primary';
            const numberClass = isFirst || isLast ? 'text-white' : 'text-text-brand';
            return (
              <div
                key={step.number}
                className={`rounded-panel p-3 sm:p-5 flex flex-col gap-1 sm:gap-2.5 ${cardClass}`}
              >
                <p className={`font-grotesk font-bold text-[30px] sm:text-5xl ${numberClass}`}>
                  {step.number}
                </p>
                <p className="font-grotesk font-bold text-[14px]">{step.title}</p>
                <p className="font-grotesk text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
