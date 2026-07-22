import logoFarsafe from '../assets/logo-farsafe.png';
import logoBart from '../assets/logo-bart.png';
import iconFintech from '../assets/exp-fintech.svg';
import iconFreelance from '../assets/exp-freelance.svg';

export default function ExperienceSection() {
  const experiences = [
    {
      dateRange: 'JAN 2025 — PRESENT',
      current: true,
      title: 'Product Designer',
      logo: logoFarsafe,
      meta: ['Farsafe', '1 yr 7 mos', '🇺🇸 Texas, USA', 'Part-time', 'Remote'],
      subtitle: ['0-to-1 SaaS Uptime-Monitoring Platform', 'Pricing-Led Conversion'],
      challenge:
        "Uptime monitoring is a crowded, commoditized category where buyers assume every tool is the same and pricing is deliberately opaque. As the sole designer on a 0-to-1 product, the challenge wasn't polishing screens - it was defining what the product should stand for before a single flow existed.",
      bullets: [
        'Sole designer on a 0-to-1 uptime-monitoring platform spanning the marketing website and the in-app monitoring dashboard, owning the product experience end to end.',
        "Led discovery research - surveys and interviews with developers, agencies, and small teams - that defined the product's design targets: pricing clarity, alert reliability, and tool consolidation.",
        "Made pricing transparency the core conversion strategy, turning the category's biggest friction into its strongest reason to trust.",
        'Designed one overview-first system reused across the fleet dashboard, single-probe, and public status views, keeping a data-dense product learnable across every view.',
        'Built the design system and responsive grid underpinning both surfaces, and partnered with the founder and a frontend developer for a clean design-to-development handoff.',
      ],
      skills: [
        'Product Design',
        'User Research',
        'Design Systems & Tokens',
        'Pricing-Led Conversion',
        'Data-Dense Dashboard UX',
        '0-to-1 SaaS Product',
      ],
    },
    {
      dateRange: 'MAY 2023 — DEC 2025',
      title: 'UX/UI Designer',
      logo: logoBart,
      meta: ['bART Solutions', '2 yrs 8 mos', '🇺🇦 Lviv, Ukraine', 'Full-time', 'Remote'],
      subtitle: null,
      challenge:
        'Agencies live or die on consistency across many products at once, but scope creep and thin documentation quietly erode it. The challenge was to keep quality identical across every screen and state while the product mix kept growing — and to catch UX problems before anyone had to flag them.',
      bullets: [
        'Owned UX/UI for production web and mobile products end to end — from research and flows through high-fidelity UI — using design systems and tokens for consistency across screens and states.',
        'On a large US tax-filing product, redesigned and simplified core flows so Americans could file returns in fewer, clearer steps.',
        'Translated business requirements into information architecture, user flows, and wireframes, grounding UX decisions in business goals and user needs.',
        'Proactively surfaced UX issues and drove improvements beyond the initial scope.',
        'Reviewed and directed the UI work of an external designer, safeguarding consistency, usability, and product alignment.',
        'Led client and stakeholder communication to align on goals, scope, and requirements, and documented design decisions and their rationale.',
        'Partnered with developers through implementation, handoff, and QA in an agile workflow, iterating on designs based on real usage.',
      ],
      skills: [
        'UX/UI Design',
        'Design Systems & Tokens',
        '10+ Products Shipped',
        'US Tax-Filing Redesign',
        'Information Architecture',
        'Cross-Platform Consistency',
        'Client & Stakeholder Communication',
      ],
    },
    {
      dateRange: 'MAY 2021 — APR 2023',
      title: 'UI Designer',
      logo: iconFintech,
      meta: ['Fintech Mobile App (under NDA)', '2 yrs', '🇺🇦 Kyiv, Ukraine', 'Full-time', 'Hybrid'],
      subtitle: ['Production Fintech App', 'iOS HIG & Material Design'],
      challenge:
        'In fintech, users decide whether to trust an app in the first few seconds, and one inconsistent screen reads as a red flag. Inside a 6-designer team, the challenge was to keep brand and interaction consistent as the product scaled — without slowing the roadmap.',
      bullets: [
        'Owned reusable UI components and foundational screens as part of a 6-designer team building a production fintech app.',
        'Turned wireframes and user flows into polished, device-optimised mobile UI, partnering with UX designers, product managers, and developers.',
        'Created wireframes, interactive prototypes, and high-fidelity mockups across screen sizes.',
        'Applied iOS Human Interface Guidelines and Material Design while maintaining brand consistency across products.',
        'Improved UI consistency and usability across multiple features through iterative design and feedback cycles.',
      ],
      skills: [
        'UI Design',
        'Production Fintech App',
        'Reusable Component Library',
        'iOS HIG',
        'Material Design',
        'Trust-Building UI',
        'Mobile Design at Scale',
      ],
    },
    {
      dateRange: 'MAR 2020 — APR 2021',
      title: 'Graphic Designer',
      logo: iconFreelance,
      meta: ['Freelancer', '1 yr 2 mos', '🇺🇦 Lviv, Ukraine', 'Self-employed'],
      subtitle: ['20+ Clients Across Industries', 'Brand Identity & Marketing Collateral'],
      challenge:
        'For a small business, a brand is the first — and often only — signal of credibility it has. With no in-house team to lean on, the challenge was translating vague goals from 20+ clients into visual systems clear enough to sell on their own.',
      bullets: [
        'Designed brand identities, logos, and visual assets across digital and print for clients in multiple industries.',
        'Produced marketing collateral — brochures, flyers, posters, banners — and digital assets for social media, websites, and email campaigns.',
        'Consulted with clients to define goals and requirements, translating them into effective visual solutions.',
      ],
      skills: [
        '20+ Clients',
        'Brand Identity Systems',
        'Logo Design',
        'Print & Digital Collateral',
        'Marketing Design',
        'Visual Systems',
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-white">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-2.5 mb-10">
          <p className="font-mono-bold text-base text-black">My Journey</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            Work Experience
          </h2>
        </div>

        <div>
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6">
              {/* Timeline rail */}
              <div className="flex flex-col items-center shrink-0 w-4">
                <div
                  className={`w-4 h-4 rounded-full mt-0.5 shrink-0 ${
                    exp.current ? 'bg-[#288fd6]' : 'bg-[#c4c4c4]'
                  }`}
                />
                {index < experiences.length - 1 && (
                  <div
                    className={`w-0.5 flex-1 ${
                      exp.current ? 'bg-[#288fd6]' : 'bg-[#e0e0e0]'
                    }`}
                  />
                )}
              </div>

              <div className="pb-12 flex-1">
                <p className="font-mono-bold text-sm text-[#4a4a48] tracking-wide mb-5">
                  {exp.dateRange}
                </p>

                <div className="flex items-start gap-4 mb-5">
                  <div className="bg-white border border-[#ececec] rounded-[12px] w-[54px] h-[54px] flex items-center justify-center shrink-0 p-2">
                    <img
                      src={exp.logo}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-grotesk font-bold text-lg text-black">
                      {exp.title}
                    </h3>
                    <p className="font-grotesk text-sm text-[#6b6a67]">
                      {exp.meta.map((part, i) => (
                        <span key={i}>
                          {i > 0 && <span className="mx-1.5 text-[#c4c4c4]">•</span>}
                          {part}
                        </span>
                      ))}
                    </p>
                    {exp.subtitle && (
                      <p className="font-grotesk text-sm text-[#6b6a67]">
                        {exp.subtitle.map((part, i) => (
                          <span key={i}>
                            {i > 0 && <span className="mx-1.5 text-[#c4c4c4]">•</span>}
                            {part}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-[#f6f6f5] rounded-[16px] px-6 py-5 mb-5">
                  <p className="font-grotesk text-base text-[#3d3d3b] leading-relaxed">
                    {exp.challenge}
                  </p>
                </div>

                <ul className="list-disc pl-5 space-y-2 mb-5">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="font-grotesk text-base text-[#3d3d3b] leading-relaxed"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-[#e9f3fa] text-black rounded-full text-sm font-grotesk font-medium"
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
