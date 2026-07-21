import { Link } from 'react-router-dom';
import caseFarsafe from '../assets/case-farsafe.png';
import caseBart from '../assets/case-bart.png';
import caseFintech from '../assets/case-fintech.png';

const projects = [
  {
    id: 1,
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
    outcome: '7.4% signup conversion rate',
    outcomeNote: 'above industry benchmarks',
    roles: ['Product Designer', 'UX Researcher'],
  },
  {
    id: 2,
    title: 'bART Solutions: Enterprise Web Products',
    image: caseBart,
    tags: ['Enterprise', 'Web & Mobile', 'Design Tokens', 'Dashboards'],
    description:
      'Owned the UX/UI for production web and mobile products serving enterprise clients. Built scalable design systems with design tokens and worked across complex, data-dense dashboards.',
    problem:
      'Information-heavy interfaces made task completion slow and error-prone.',
    role:
      'UX/UI Designer — design system, dashboards, and mobile products.',
    keyDecision:
      'Progressive disclosure of complexity backed by extensive usability testing.',
    outcome: '92% dashboard task success rate',
    outcomeNote: 'with reduced error rates',
    roles: ['UX/UI Designer'],
  },
  {
    id: 3,
    title: 'Fintech Mobile App (NDA)',
    image: caseFintech,
    tags: ['Fintech', 'Mobile', 'iOS & Android'],
    description:
      'Designed polished, device-optimized mobile UI for a fintech application. Turned wireframes and prototypes into production-ready interfaces in close collaboration with product and engineering.',
    problem:
      'Fintech onboarding felt slow and untrustworthy for first-time users.',
    role:
      'UI Designer — mobile UI, micro-interactions, and handoff documentation.',
    keyDecision:
      'Clear visual hierarchy and native platform patterns (iOS HIG, Material).',
    outcome: '1m 41s time-to-first-probe',
    outcomeNote: 'faster onboarding',
    roles: ['UI Designer'],
  },
];

function InfoCell({ label, children, note }) {
  return (
    <div className="bg-white border border-[#d7d6d2] rounded-[10px] p-3 flex flex-col gap-1.5">
      <p className="font-mono-bold text-xs text-[#757472] tracking-wide">{label}</p>
      {children}
      {note && <p className="font-mono-bold text-xs text-[#757472]">{note}</p>}
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative pt-10 pb-24 bg-white"
      style={{
        backgroundImage: 'radial-gradient(circle, #d7d7d7 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
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
                className="border border-[#d7d6d2] hover:border-[#288fd6] rounded-[15px] bg-white flex flex-col lg:flex-row items-stretch overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(40,143,214,0.35)]"
              >
                {/* Image half */}
                <div
                  className={`bg-[#d9d9d9] min-h-[220px] lg:min-h-0 lg:w-1/2 overflow-hidden ${
                    imageLeft ? 'lg:order-first' : 'lg:order-last'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content half */}
                <div className="lg:w-1/2 p-5 sm:p-6 flex flex-col items-start gap-4">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    {project.tags.map((tag, i) => (
                      <span key={tag} className="flex items-center gap-2.5">
                        {i === 0 ? (
                          <span className="bg-[#eff4fd] text-[#3870e2] font-mono-bold text-xs px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ) : (
                          <>
                            <span className="w-0.5 h-0.5 rounded-full bg-[#191919]" />
                            <span className="font-mono-bold text-xs text-[#191919]">{tag}</span>
                          </>
                        )}
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
                    <InfoCell label="OUTCOME" note={project.outcomeNote}>
                      <p className="font-grotesk font-medium text-sm text-[#288fd6]">
                        {project.outcome}
                      </p>
                    </InfoCell>
                  </div>

                  {/* Role pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.roles.map((role) => (
                      <span
                        key={role}
                        className="border border-[#d7d6d2] text-[#757472] font-mono-bold text-xs px-2.5 py-1 rounded-full"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/project/${project.id}`}
                    className="bg-[#288fd6] hover:bg-[#1f7ab8] text-white font-grotesk font-medium text-sm px-5 py-2.5 rounded-full transition-colors"
                  >
                    Read case study
                  </Link>
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
