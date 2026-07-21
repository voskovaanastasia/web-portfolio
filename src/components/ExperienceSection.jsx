export default function ExperienceSection() {
  const experiences = [
    {
      company: 'Farsafe',
      location: 'Texas, USA • part-time, remote',
      dateRange: 'JAN 2025 — PRESENT',
      description: 'Sole designer on a 0-to-1 uptime-monitoring platform, spanning the marketing website and in-app monitoring dashboard. Led discovery research (surveys and interviews) that defined the product\'s design targets — pricing clarity, alert reliability, and tool consolidation. Made pricing transparency the core conversion strategy: Signup Conversion Rate 7.4%, Dashboard Task Success 92%, Time-to-First-Probe 1 min 41 sec.',
      skills: ['Product Design', 'User Research', 'Design Systems'],
      roles: [
        {
          title: 'Product Designer',
          dateRange: 'Jan 2025 — Present',
          duration: '1 yr 7 mos',
        },
      ],
    },
    {
      company: 'bART Solutions',
      location: 'Lviv, Ukraine • full-time, remote',
      dateRange: 'MAY 2023 — DEC 2025',
      description: 'Owned UX/UI for production web and mobile products, from research and flows through high-fidelity UI. Translated business requirements into information architecture and user flows. Partnered with developers through implementation, handoff, and QA in an agile workflow.',
      skills: ['UX/UI Design', 'Product', 'Design Systems', 'Design Tokens'],
      roles: [
        {
          title: 'UX/UI Designer',
          dateRange: 'May 2023 — Dec 2025',
          duration: '2 yrs 8 mos',
        },
      ],
    },
    {
      company: 'Fintech Mobile App (under NDA)',
      location: 'full-time, hybrid',
      dateRange: 'MAY 2021 — APR 2023',
      description: 'Turned wireframes and user flows into polished, device-optimised mobile UI. Applied iOS Human Interface Guidelines and Material Design while maintaining brand consistency across products.',
      skills: ['UI Design', 'Mobile Design', 'iOS HIG', 'Material Design'],
      roles: [
        {
          title: 'UI Designer',
          dateRange: 'May 2021 — Apr 2023',
          duration: '2 yrs',
        },
      ],
    },
    {
      company: 'Freelancer',
      location: 'Self-employed',
      dateRange: 'MAR 2020 — APR 2021',
      description: 'Designed brand identities, logos, and visual assets across digital and print. Produced marketing collateral and digital assets for social media, websites, and email campaigns.',
      skills: ['Branding', 'Visual Design', 'Logo Design', 'Graphics'],
      roles: [
        {
          title: 'Graphic Designer',
          dateRange: 'Mar 2020 — Apr 2021',
          duration: '1 yr 2 mos',
        },
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-gray-900">Work Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-3 h-3 bg-gray-400 rounded-full mt-2" />
                {index < experiences.length - 1 && (
                  <div className="w-0.5 bg-gray-300 flex-1 mt-4" style={{ minHeight: '200px' }} />
                )}
              </div>

              <div className="pb-8 flex-1">
                <p className="text-sm font-mono text-gray-500 mb-2 tracking-wide">
                  {exp.dateRange}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {exp.company}
                </h3>

                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="mb-4 ml-0">
                    <div className="flex gap-4 mb-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">
                          {role.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          {role.dateRange} · {role.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <p className="text-gray-700 text-base leading-relaxed mt-6 mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
