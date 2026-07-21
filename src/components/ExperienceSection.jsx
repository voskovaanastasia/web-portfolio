import logoFarsafe from '../assets/logo-farsafe.png';
import logoBart from '../assets/logo-bart.png';

export default function ExperienceSection() {
  const experiences = [
    {
      company: 'Farsafe',
      logo: logoFarsafe,
      location: 'Texas, USA • part-time, remote',
      dateRange: 'JAN 2025 — PRESENT',
      description: "Sole designer on a 0-to-1 uptime-monitoring platform, owning the full experience across the marketing site and the in-app dashboard. Grounded the product's direction in discovery research with developers, agencies, and small teams, then made pricing transparency the core conversion strategy - turning the category's biggest friction into its strongest reason to trust. Designed one overview-first system reused across fleet, single-probe, and public status views to keep a data-dense product learnable everywhere. Shipped results: 7.4% signup conversion, 92% dashboard task success, and a 1 min 41 sec time-to-first-probe.",
      skills: ['Product Design', 'User Research', 'Design Systems & Token'],
      roles: [
        {
          title: 'Product Designer',
          dateRange: 'Jan 2025 — Present',
          duration: '1 yr 7 mos',
          location: 'Texas, USA • part-time, remote',
        },
      ],
    },
    {
      company: 'bART Solutions',
      logo: logoBart,
      location: 'Lviv, Ukraine • full-time, remote',
      dateRange: 'MAY 2023 — DEC 2025',
      description: 'Led UX/UI across 10+ production web and mobile products over nearly three years - building design systems both on top of existing foundations and from scratch, and keeping quality consistent across every screen and state. On a large US tax-filing product, redesigned and simplified core flows so Americans could file returns in fewer, clearer steps. Worked hand in hand with developers, marketers, and copywriters, and communicated directly with clients to align on goals, scope, and requirements.',
      skills: ['UX/UI Design', 'Product', 'Design Systems', 'Design Tokens'],
      roles: [
        {
          title: 'UX/UI Designer',
          dateRange: 'May 2023 — Dec 2025',
          duration: '2 yrs 8 mos',
          location: 'Lviv, Ukraine • full-time, remote',
        },
      ],
    },
    {
      company: 'Fintech Mobile App (under NDA)',
      location: 'Kyiv, Ukraine • full-time, hybrid',
      dateRange: 'MAY 2021 — APR 2023',
      description: 'Part of a 6-designer team building a production fintech app, where I owned reusable UI components and foundational screens. Delivered device-optimised UI to iOS Human Interface Guidelines and Material Design, keeping brand consistency intact as the product scaled - and sharpened both components and screens through iterative feedback cycles.',
      skills: ['UI Design', 'Mobile Design', 'iOS HIG', 'Material Design'],
      roles: [
        {
          title: 'UI Designer',
          dateRange: 'May 2021 — Apr 2023',
          duration: '2 yrs',
          location: 'Kyiv, Ukraine • full-time, hybrid',
        },
      ],
    },
    {
      company: 'Freelancer',
      location: 'Self-employed',
      dateRange: 'MAR 2020 — APR 2021',
      description: "Delivered brand identities, logos, and marketing collateral for 20+ clients across a wide range of industries. Designed everything from newsletters and print pieces to digital assets for social and web — translating each client's goals into clear, effective visual solutions.",
      skills: ['Branding', 'Visual Design', 'Logo Design', 'Graphics'],
      roles: [
        {
          title: 'Graphic Designer',
          dateRange: 'Mar 2020 — Apr 2021',
          duration: '1 yr 2 mos',
          location: 'Self-employed',
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

        <div>
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${exp.dateRange.includes('PRESENT') ? 'bg-[#288fd6]' : 'bg-gray-400'}`}
                />
                {index < experiences.length - 1 && (
                  <div
                    className={`w-0.5 flex-1 ${exp.dateRange.includes('PRESENT') ? 'bg-[#288fd6]' : 'bg-gray-300'}`}
                  />
                )}
              </div>

              <div className="pb-8 flex-1">
                <p className="text-sm font-mono text-gray-500 mb-2 tracking-wide">
                  {exp.dateRange}
                </p>

                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className={`${exp.company === 'bART Solutions' ? 'h-12' : 'h-6'} w-auto mb-2`}
                  />
                )}
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
                          {role.duration}
                          {role.location && ` · ${role.location}`}
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
