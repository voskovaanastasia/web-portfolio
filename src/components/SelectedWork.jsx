import { Link } from 'react-router-dom';
import caseFarsafe from '../assets/case-farsafe.webp';

const projects = [
  {
    id: 'farsafe',
    title: 'Farsafe: Uptime Monitoring Platform',
    image: caseFarsafe,
    tags: ['0-to-1 SaaS', 'Web App', 'Marketing Site', 'Design System'],
    description:
      'Sole designer on a 0-to-1 uptime-monitoring platform, spanning the marketing website and in-app monitoring dashboard. Led discovery research that defined the product\'s design targets — pricing clarity, alert reliability, and tool consolidation.',
    problem:
      'Monitoring tools hide pricing and overwhelm users with complex setup flows.',
    role:
      'Sole Product Designer — research, strategy, marketing site, and dashboard.',
    keyDecision:
      'Made pricing transparency the centerpiece of the conversion strategy.',
    outcomeMetric: '92%',
    outcomeLabel: 'Dashboard Task Success',
    roles: ['Product Designer', 'UX Researcher'],
  },
];

function InfoCell({ label, children, highlight }) {
  return (
    <div
      className={`rounded-[10px] p-4 flex flex-col gap-2 ${
        highlight ? 'bg-[#e9f3fa]' : 'bg-[#f7f7f7]'
      }`}
    >
      <p className="font-mono-bold text-xs text-[#4a4a48] tracking-wide">{label}</p>
      {children}
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="relative overflow-hidden pt-5 pb-12 sm:pt-10 sm:pb-24 bg-white">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-8 flex flex-col gap-2.5">
          <p className="font-mono-bold text-base text-black">Selected work</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => {
            const imageLeft = index % 2 === 0;
            return (
              <div
                key={project.id}
                className="flex flex-col lg:flex-row items-stretch gap-8"
              >
                {/* Image half */}
                <div
                  className={`bg-[#d9d9d9] aspect-[4/3] lg:aspect-auto lg:min-h-0 lg:w-1/2 overflow-hidden rounded-[15px] ${
                    imageLeft ? 'lg:order-first' : 'lg:order-last'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    width={2116}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content half */}
                <div className="lg:w-1/2 flex flex-col items-start gap-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-[5px] bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title + description */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-grotesk font-medium text-xl tracking-tight">
                      <Link
                        to={`/project/${project.id}`}
                        className="text-black hover:text-[#288fd6] hover:underline underline-offset-4 transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="font-grotesk text-sm text-[#6b6a67] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* PROBLEM / MY ROLE / KEY DECISION / OUTCOME grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                    <InfoCell label="PROBLEM">
                      <p className="font-grotesk font-medium text-sm text-black">
                        {project.problem}
                      </p>
                    </InfoCell>
                    <InfoCell label="MY ROLE">
                      <p className="font-grotesk font-medium text-sm text-black">
                        {project.role}
                      </p>
                    </InfoCell>
                    <InfoCell label="KEY DECISION">
                      <p className="font-grotesk font-medium text-sm text-black">
                        {project.keyDecision}
                      </p>
                    </InfoCell>
                    <InfoCell label="OUTCOME" highlight>
                      <p className="font-grotesk font-bold text-4xl text-black whitespace-nowrap">
                        {project.outcomeMetric}
                      </p>
                      <p className="font-grotesk font-medium text-sm text-black">
                        {project.outcomeLabel}
                      </p>
                    </InfoCell>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-2 w-full flex justify-end">
                    <Link
                      to={`/project/${project.id}`}
                      className="bg-[#288fd6] hover:bg-[#1f7ab8] text-white font-grotesk font-medium text-sm px-5 py-2.5 rounded-full transition-colors"
                    >
                      Read case study
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* All work */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="font-grotesk font-medium text-base text-black hover:text-[#288fd6] underline underline-offset-4 transition-colors"
          >
            All work →
          </Link>
        </div>
      </div>
    </section>
  );
}
