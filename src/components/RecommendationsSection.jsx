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

export default function RecommendationsSection() {
  return (
    <section id="recommendations" className="relative overflow-hidden bg-surface-default py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2.5">
          <p className="font-mono-bold text-[12px] uppercase tracking-wider text-text-secondary">Recommendations</p>
          <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-text-primary tracking-tight">
            What people say
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {recommendations.map((rec) => (
            <figure key={rec.name} className="flex flex-col sm:flex-row gap-5 sm:gap-12">
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
                    <span className="font-grotesk font-bold text-[14px] text-text-primary">{rec.name}</span>
                    <span className="font-mono-bold text-[11px] uppercase tracking-wide text-text-secondary">{rec.role}</span>
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
