import { useState } from 'react';
import vitaliiAvatar from '../assets/rec-vitalii.webp';
import ostapAvatar from '../assets/rec-ostap.webp';

const recommendations = [
  {
    quote:
      'Anastasia was part of my team for over a year, and during that time she consistently demonstrated the ability to solve non-standard challenges with creativity while staying aligned with project requirements. She led UX/UI design across multiple projects, delivering high-quality work on time and with great attention to detail. Anastasia is highly proficient with modern design tools including Figma and Adobe Suite, and collaborates effectively with both developers and stakeholders. She would be a valuable asset to any team.',
    name: 'Vitalii Chetak',
    role: 'CMO & CBDO',
    avatar: vitaliiAvatar,
  },
  {
    quote:
      "I worked with Anastasiia for approximately a year. She is a professional UX/UI designer, and working with her was a genuinely great experience. Anastasiia works well with feedback, provides well-reasoned explanations for design decisions, and interacts effectively with developers, product managers, and other team members. At the same time, she consistently focuses not only on the visual aspects but also on user needs and the product's business goals. A great team player, proactive problem-solver, and someone you can always count on.",
    name: 'Ostap Kinakh',
    role: 'QA Engineer',
    avatar: ostapAvatar,
  },
];

const arrowClass =
  'w-11 h-11 flex items-center justify-center rounded-pill border border-border-subtle text-text-primary hover:bg-surface-subtle transition-colors';

export default function RecommendationsSection() {
  const [index, setIndex] = useState(0);
  const count = recommendations.length;
  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <section id="recommendations" className="relative overflow-hidden bg-surface-default py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2.5">
          <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">Recommendations</p>
          <h2 className="font-grotesk font-medium text-heading text-text-primary tracking-tight">
            What people say
          </h2>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
          {recommendations.map((rec, i) => (
            <figure
              key={rec.name}
              aria-hidden={i !== index}
              className="w-full shrink-0 flex flex-col sm:flex-row gap-5 sm:gap-12"
            >
              <svg
                viewBox="0 0 48 36"
                aria-hidden="true"
                className="w-10 sm:w-12 shrink-0 self-start mt-1 text-text-brand"
                fill="currentColor"
              >
                <path d="M0 22C0 10 6 3 17 0l2 5c-6 2-9 6-9 11h9v20H0V22z" />
                <path d="M26 22C26 10 32 3 43 0l2 5c-6 2-9 6-9 11h9v20H26V22z" />
              </svg>
              <div className="flex flex-col gap-6 max-w-4xl">
                <blockquote className="font-grotesk text-[16px] sm:text-xl text-text-primary leading-[1.8]">
                  {rec.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <img
                    src={rec.avatar}
                    alt={rec.name}
                    width="48"
                    height="48"
                    loading="lazy"
                    className="w-12 h-12 rounded-pill object-cover"
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-grotesk font-bold text-body text-text-primary">{rec.name}</span>
                    <span className="font-mono-bold text-caption-xs uppercase tracking-wide text-text-secondary">{rec.role}</span>
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
          </div>
        </div>

        {count > 1 && (
          <div className="mt-10 flex items-center gap-6">
            <div className="flex gap-3">
              <button type="button" onClick={prev} className={arrowClass} aria-label="Previous recommendation">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button type="button" onClick={next} className={arrowClass} aria-label="Next recommendation">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex gap-2">
              {recommendations.map((rec, i) => (
                <button
                  type="button"
                  key={rec.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Show recommendation from ${rec.name}`}
                  className={`h-2.5 rounded-pill transition-all ${i === index ? 'bg-action-primary w-8' : 'bg-grey-300 w-2.5'}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
