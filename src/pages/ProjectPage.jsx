import { useParams, Link } from 'react-router-dom';

export default function ProjectPage() {
  const { id } = useParams();

  const projectData = {
    1: {
      title: 'Farsafe: Uptime Monitoring Platform',
      type: 'Product Design • 0-to-1 SaaS',
      company: 'Farsafe',
      year: '2025',
      duration: 'Jan 2025 – Present',
      role: 'Sole Product Designer',
      image: 'https://via.placeholder.com/1200x600',
      keyMetric: '7.4% Signup Conversion Rate',
      overview: 'Farsafe is an uptime monitoring platform that helps businesses track the health and performance of their digital services. As the sole designer on this 0-to-1 SaaS product, I owned the entire product design experience from marketing website to in-app dashboard.',
      challenge: 'The primary challenge was creating a compelling value proposition and onboarding experience for a monitoring tool in a crowded market. Users needed to understand complex monitoring concepts quickly, and pricing transparency had to be a core differentiator.',
      solution: 'I made pricing transparency the centerpiece of the product strategy. The landing page clearly showed pricing upfront with no hidden fees, addressing a major pain point in the monitoring space. The dashboard was designed for clarity with intuitive status indicators and actionable insights.',
      outcome: 'By leading with transparent pricing and a frictionless onboarding experience, the product achieved a 7.4% signup conversion rate—significantly above industry benchmarks.',
      tools: ['Figma', 'FigJam', 'Miro', 'Notion'],
      contributions: [
        'Product strategy and positioning',
        'Landing page design and copy strategy',
        'In-app dashboard UX/UI',
        'Design systems and component library',
        'User onboarding flow',
      ],
    },
    2: {
      title: 'bART Solutions: Enterprise Web Products',
      type: 'UX/UI Design • Product Design',
      company: 'bART Solutions',
      year: '2023-2024',
      duration: 'May 2023 – Dec 2024',
      role: 'UX/UI Designer',
      image: 'https://via.placeholder.com/1200x600',
      keyMetric: '92% Dashboard Task Success Rate',
      overview: 'At bART Solutions, I owned the UX/UI for production web and mobile products serving enterprise clients. I built scalable design systems with design tokens and worked across complex, data-dense dashboards.',
      challenge: 'The products handled sensitive data and required high accuracy in task completion. Users needed intuitive navigation through information-heavy interfaces while maintaining security and compliance standards.',
      solution: 'I designed a comprehensive design system with design tokens for consistency across web and mobile. The dashboard featured clear information architecture, progressive disclosure of complexity, and high-affordance interactions. Extensive usability testing informed every iteration.',
      outcome: 'The redesigned dashboard achieved a 92% task success rate in user testing, with significant improvements in user confidence and reduced error rates.',
      tools: ['Figma', 'Design Tokens', 'Adobe XD', 'Miro'],
      contributions: [
        'Design system development and maintenance',
        'Web product redesign (dashboard, reports, settings)',
        'Mobile product design (iOS and Android)',
        'Usability testing and research',
        'Component documentation',
      ],
    },
    3: {
      title: 'Fintech Mobile App (NDA)',
      type: 'UI Design • Mobile Product',
      company: 'Fintech Startup (NDA)',
      year: '2021-2023',
      duration: 'May 2021 – Apr 2023',
      role: 'UI Designer',
      image: 'https://via.placeholder.com/1200x600',
      keyMetric: '1m 41s Time-to-First-Probe',
      overview: 'Designed polished, device-optimized mobile UI for a fintech application. Worked closely with product and engineering teams to turn wireframes and prototypes into production-ready interfaces.',
      challenge: 'Fintech applications require both beauty and precision. Every interaction must feel secure and trustworthy while remaining fast and delightful. Mobile performance was critical.',
      solution: 'I focused on clear visual hierarchy, intuitive gestures, and consistent interactions. Applied iOS Human Interface Guidelines and Material Design principles while maintaining the brand identity. Created detailed design specs for engineering handoff.',
      outcome: 'Onboarding time was reduced significantly, with users reaching their first meaningful action (first probe) in 1 minute 41 seconds on average.',
      tools: ['Figma', 'iOS HIG', 'Material Design', 'Prototyping'],
      contributions: [
        'Mobile UI design (iOS and Android)',
        'Interaction design and micro-interactions',
        'Responsive design specifications',
        'Design-to-development handoff documentation',
        'Brand identity application',
      ],
    },
  };

  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl">Case study not found</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/#work"
          className="text-indigo-600 hover:text-indigo-700 font-semibold mb-8 inline-block"
        >
          ← Back to Selected Work
        </Link>

        <div className="mb-12">
          <p className="text-sm font-semibold text-indigo-600 mb-2">{project.type}</p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600">
            {project.company} • {project.year}
          </p>
        </div>

        <div className="w-full h-96 sm:h-[500px] rounded-xl overflow-hidden mb-12 shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Outcome</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          <div className="md:col-span-1 space-y-6">
            <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
              <p className="text-sm text-gray-600 font-semibold mb-2">KEY METRIC</p>
              <p className="text-2xl font-bold text-indigo-600">
                {project.keyMetric}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-3">Role</h3>
              <p className="text-gray-700">{project.role}</p>
              <p className="text-sm text-gray-600 mt-2">{project.duration}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-4">Key Contributions</h3>
              <ul className="space-y-2">
                {project.contributions.map((contribution, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-indigo-600 font-bold mt-1">•</span>
                    <span className="text-gray-700 text-sm">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
