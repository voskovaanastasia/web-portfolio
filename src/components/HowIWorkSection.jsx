import iconSearch from '../assets/how-i-work/search.svg';
import iconColors from '../assets/how-i-work/colors.svg';
import iconTable from '../assets/how-i-work/table.svg';
import iconTerminal from '../assets/how-i-work/terminal.svg';
import { getToolsForPillar } from '../data/tools';

const cards = [
  {
    pillar: 'research',
    icon: iconSearch,
    accent: true,
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
    icon: iconColors,
    accent: false,
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
    icon: iconTable,
    accent: false,
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
    icon: iconTerminal,
    accent: true,
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

function SkillTag({ label, accent }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-grotesk font-medium ${
        accent ? 'bg-[#4c2c8a] text-white' : 'bg-[#f2f3f5] text-[#22292f]'
      }`}
    >
      {label}
    </span>
  );
}

function ToolPill({ icon, label, accent }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-grotesk font-medium ${
        accent ? 'bg-[#4c2c8a] text-white' : 'bg-[#f2f3f5] text-[#22292f]'
      }`}
    >
      <img
        src={icon}
        alt=""
        width={24}
        height={24}
        loading="lazy"
        decoding="async"
        className={`w-4 h-4 object-contain ${accent ? 'brightness-0 invert' : ''}`}
      />
      {label}
    </span>
  );
}

export default function HowIWorkSection() {
  return (
    <section id="how-i-work" className="relative overflow-hidden bg-white py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-2.5 mb-10">
          <p className="font-mono-bold text-base text-black">How I work</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            Designing with an engineer&rsquo;s mindset
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-[24px] p-5 flex flex-col gap-4 ${
                card.accent
                  ? 'bg-[#6d3fc4] text-white'
                  : 'bg-[#f7f7f7] border border-[#ececec] text-black'
              }`}
            >
              <img
                src={card.icon}
                alt=""
                width={24}
                height={24}
                loading="lazy"
                decoding="async"
                className={`w-7 h-7 ${
                  card.accent
                    ? 'brightness-0 invert'
                    : '[filter:invert(58%)_sepia(58%)_saturate(1740%)_hue-rotate(177deg)_brightness(97%)_contrast(90%)]'
                }`}
              />
              <div className="flex flex-col gap-2">
                <p className="font-grotesk font-bold text-base">{card.title}</p>
                <p className="font-grotesk font-medium text-base">{card.subtitle}</p>
                <p className="font-grotesk text-base">{card.description}</p>
              </div>
              <div
                className={`mt-auto border-t pt-4 flex flex-wrap gap-2 ${
                  card.accent ? 'border-white/30' : 'border-[#e5e5e5]'
                }`}
              >
                {card.skills.map((skill) => (
                  <SkillTag key={skill} label={skill} accent={card.accent} />
                ))}
              </div>
              <div
                className={`border-t pt-4 flex flex-wrap gap-2 ${
                  card.accent ? 'border-white/30' : 'border-[#e5e5e5]'
                }`}
              >
                {getToolsForPillar(card.pillar).map((tool) => (
                  <ToolPill
                    key={tool.id}
                    icon={tool.icon}
                    label={tool.name}
                    accent={card.accent}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
