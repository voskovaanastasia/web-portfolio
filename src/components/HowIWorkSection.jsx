import { Link } from 'react-router-dom';
import { getToolsForPillar } from '../data/tools';

const cards = [
  {
    pillar: 'research',
    title: 'Research & Strategy',
    subtitle: 'Decisions grounded in evidence, not opinion',
    description:
      'Interviews, surveys, and synthesis that define product targets before a single screen is designed — every decision tied to business goals, real user needs, and measurable outcomes.',
    skills: [
      'User Research',
      'Interviews & Surveys',
      'Synthesis',
      'Product Strategy',
      'Success Metrics',
    ],
  },
  {
    pillar: 'design',
    title: 'Product & Interface Design',
    subtitle: 'Complex, data-dense products made simple',
    description:
      'Building SaaS platforms from the ground up and shaping their information architecture — then crafting pixel-perfect UI that stays clear and seamless across every state, validated with high-fidelity prototypes before a line of code.',
    skills: [
      '0-to-1 Product Design',
      'Interface Design',
      'OOUX',
      'Information Architecture',
      'High-Fidelity Prototyping',
      'SaaS Platforms',
      'Systems Thinking',
    ],
  },
  {
    pillar: 'systems',
    title: 'Systems, Tokens & Handoff',
    subtitle: 'Built for adoption, shipped clean',
    description:
      'Scalable, token-driven component libraries that keep teams consistent and delivery fast — paired with developer-ready specs and assets that keep every launch on time and easy to build.',
    skills: [
      'Design Systems',
      'Design Tokens',
      'Component Libraries',
      'Developer Handoff',
      'Documentation',
    ],
  },
  {
    pillar: 'engineering',
    title: 'Engineering Fluency',
    subtitle: 'The bridge between design and engineering',
    description:
      'A Computer Science degree with OOP and Node.js behind me — I read and write front-end code, so my designs stay realistic, code-aware, and easy to implement.',
    skills: [
      'Code-Aware Design',
      'Component Thinking',
      'OOP Fundamentals',
      'Technical Feasibility',
      'Design–Dev Collaboration',
    ],
  },
];

function ToolItem({ icon, label }) {
  return (
    <li className="flex items-center gap-3">
      <img src={icon} alt="" width={24} height={24} loading="lazy" decoding="async" className="w-6 h-6 object-contain shrink-0" />
      <span className="font-grotesk font-medium text-body-md text-text-primary">{label}</span>
    </li>
  );
}

const COMPACT_TOOLS = 5;
const COMPACT_SKILLS = 4;

// Short version for the home page: four cards in a row with a few skills and a strip of tool icons.
function CompactHowIWork() {
  return (
    <section id="how-i-work" className="relative overflow-hidden bg-surface-default py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div className="flex flex-col gap-2.5">
            <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">How I work</p>
            <h2 className="font-grotesk font-medium text-heading text-text-primary tracking-tight">
              Designing with an engineer&rsquo;s mindset
            </h2>
          </div>
          <Link
            to="/about#how-i-work"
            className="pb-1.5 font-grotesk font-medium text-body text-text-brand hover:text-action-primary-hover rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            More about how I work <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const cardTools = getToolsForPillar(card.pillar);
            const shown = cardTools.slice(0, COMPACT_TOOLS);
            const rest = cardTools.slice(COMPACT_TOOLS);
            return (
              <article
                key={card.title}
                className="flex flex-col gap-3 rounded-[22px] border border-border-subtle bg-surface-subtle p-6"
              >
                <h3 className="font-grotesk font-medium text-[21px] leading-tight text-text-primary">{card.title}</h3>
                <p className="font-grotesk font-medium text-body text-text-brand">{card.subtitle}</p>
                <p className="font-mono-bold text-caption text-text-secondary leading-relaxed">
                  {card.skills.slice(0, COMPACT_SKILLS).join(' · ')}
                </p>
                <ul className="mt-auto pt-2 flex flex-wrap gap-1.5">
                  {shown.map((tool) => (
                    <li
                      key={tool.id}
                      title={tool.name}
                      className="w-9 h-9 flex items-center justify-center rounded-[9px] bg-surface-default border border-border-subtle"
                    >
                      <img src={tool.icon} alt={tool.name} width={22} height={22} loading="lazy" decoding="async" className="w-[22px] h-[22px] object-contain" />
                    </li>
                  ))}
                  {rest.length > 0 && (
                    <li
                      title={rest.map((tool) => tool.name).join(', ')}
                      className="h-9 min-w-9 px-2 flex items-center justify-center rounded-[9px] bg-surface-default border border-border-subtle font-mono-bold text-caption text-text-brand"
                    >
                      +{rest.length}
                    </li>
                  )}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function HowIWorkSection({ compact = false }) {
  if (compact) return <CompactHowIWork />;

  return (
    <section id="how-i-work" className="relative overflow-hidden bg-surface-default py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-2.5 mb-12">
          <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">How I work</p>
          <h2 className="font-grotesk font-medium text-heading text-text-primary tracking-tight">
            Designing with an engineer&rsquo;s mindset
          </h2>
        </div>

        <div className="border-b border-border-subtle">
          {cards.map((card) => (
            <article
              key={card.title}
              className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-10 py-10 border-t border-border-subtle"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-grotesk font-medium text-[20px] sm:text-2xl leading-tight text-text-primary">
                  {card.title}
                </h3>
                <p className="font-grotesk font-medium text-body text-text-brand">{card.subtitle}</p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-grotesk text-[15px] sm:text-base text-text-primary leading-relaxed">
                  {card.description}
                </p>
                <ul className="flex flex-wrap gap-y-1 font-mono-bold text-caption text-text-secondary">
                  {card.skills.map((skill, i) => (
                    <li key={skill}>
                      {skill}
                      {i < card.skills.length - 1 && <span aria-hidden="true" className="mx-2">·</span>}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="grid grid-cols-2 gap-x-5 gap-y-4 content-start">
                {getToolsForPillar(card.pillar).map((tool) => (
                  <ToolItem key={tool.id} icon={tool.icon} label={tool.name} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
