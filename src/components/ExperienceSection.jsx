import { CompactJourney } from './CompactJourney';
import logoFarsafe from '../assets/logo-farsafe.webp';
import logoBart from '../assets/logo-bart.webp';
import iconFintech from '../assets/exp-fintech.svg';
import iconFreelance from '../assets/exp-freelance.svg';

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

// [year, month] with month 1-12; `end: null` means the role is ongoing.
const formatMonth = ([year, month]) => `${MONTHS[month - 1]} ${year}`;

const formatDateRange = (start, end) =>
  `${formatMonth(start)} — ${end ? formatMonth(end) : 'PRESENT'}`;

// Inclusive month count, the way LinkedIn reports tenure: a role running
// MAY 2021 — APR 2023 reads as "2 yrs", not "1 yr 11 mos".
const formatDuration = ([startYear, startMonth], end, now) => {
  const [endYear, endMonth] = end ?? [now.getFullYear(), now.getMonth() + 1];
  const total = Math.max(1, (endYear - startYear) * 12 + (endMonth - startMonth) + 1);
  const years = Math.floor(total / 12);
  const months = total % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`);
  return parts.join(' ');
};

const VISIBLE_BULLETS = 3;

const bulletClass = 'font-grotesk text-body text-text-primary leading-relaxed';

// First three bullets always show; the rest sit behind a native <details> toggle placed right after them.
// <details> gives keyboard (Tab + Enter/Space) and screen-reader support for free, and the hidden bullets stay in
// the DOM (find-in-page opens the toggle).
function BulletList({ bullets }) {
  const shown = bullets.slice(0, VISIBLE_BULLETS);
  const rest = bullets.slice(VISIBLE_BULLETS);

  return (
    <div className="mb-5">
      <ul className="list-disc pl-5 space-y-2">
        {shown.map((bullet, i) => (
          <li key={i} className={bulletClass}>
            {bullet}
          </li>
        ))}
      </ul>
      {rest.length > 0 && (
        <details className="group mt-2">
          <summary className="list-none [&::-webkit-details-marker]:hidden inline-flex items-center gap-1.5 cursor-pointer rounded-md font-grotesk font-medium text-body text-text-brand hover:text-action-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring">
            <span className="group-open:hidden">Show {rest.length} more</span>
            <span className="hidden group-open:inline">Show less</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="w-3.5 h-3.5 transition-transform duration-200 motion-reduce:transition-none group-open:rotate-180"
            >
              <path d="M12 5v14m0 0-6-6m6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            {rest.map((bullet, i) => (
              <li key={i} className={bulletClass}>
                {bullet}
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}

export default function ExperienceSection({ compact = false }) {
  const now = new Date();

  const experiences = [
    {
      start: [2025, 1],
      end: null,
      current: true,
      title: 'Product Designer',
      logo: logoFarsafe,
      logoW: 2024,
      logoH: 244,
      meta: ['Farsafe', '🇺🇸 Texas, USA', 'Part-time', 'Remote'],
      subtitle: ['0-to-1 SaaS Uptime-Monitoring Platform', 'Pricing-Led Conversion'],
      challenge:
        "Uptime monitoring is a crowded, commoditized category where buyers assume every tool is the same and pricing is deliberately opaque. As the sole designer on a 0-to-1 product, the challenge wasn't polishing screens — it was defining what the product should stand for before a single flow existed.",
      bullets: [
        'Sole designer on a 0-to-1 uptime-monitoring platform spanning the marketing website and the in-app monitoring dashboard, owning the product experience end to end.',
        "Led discovery research — surveys and interviews with developers, agencies, and small teams - that defined the product's design targets: pricing clarity, alert reliability, and tool consolidation.",
        "Made pricing transparency the core conversion strategy, turning the category's biggest friction into its strongest reason to trust.",
        'Designed one overview-first system reused across the fleet dashboard, single-probe, and public status views, keeping a data-dense product learnable across every view.',
        'Built the design system and responsive grid underpinning both surfaces, and partnered with the founder and a frontend developer for a clean design-to-development handoff.',
        'Used Claude Code to build working prototypes for user testing, speeding up validation before development handoff.',
        'Used Claude to draft and refine marketing copy for the pricing page and onboarding flows, support competitor research, and generate documentation for the design system — on top of using Claude Code for interactive prototypes.',
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
      start: [2023, 5],
      end: [2025, 12],
      title: 'UX/UI Designer',
      logo: logoBart,
      logoW: 116,
      logoH: 61,
      meta: ['bART Solutions', '🇺🇦 Lviv, Ukraine', 'Full-time', 'Remote'],
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
        'Used Claude and ChatGPT to synthesize user interviews faster, draft documentation and user stories, and generate initial UI concepts during brainstorming — reducing time spent on repetitive tasks.',
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
      start: [2021, 5],
      end: [2023, 4],
      title: 'UI Designer',
      logo: iconFintech,
      logoW: 24,
      logoH: 24,
      meta: ['Fintech Mobile App (under NDA)', '🇺🇦 Kyiv, Ukraine', 'Full-time', 'Hybrid'],
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
      start: [2020, 3],
      end: [2021, 4],
      title: 'Graphic Designer',
      logo: iconFreelance,
      logoW: 36,
      logoH: 36,
      meta: ['Freelancer', '🇺🇦 Lviv, Ukraine', 'Self-employed'],
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

  if (compact) {
    return (
      <CompactJourney
        id="experience"
        eyebrow="My Journey"
        title="Work Experience"
        linkLabel="Full experience & education"
        linkTo="/about#experience"
        rows={experiences.map((exp, index) => {
          const [company, ...metaRest] = exp.meta;
          return {
            key: index,
            dateRange: formatDateRange(exp.start, exp.end),
            title: exp.title,
            logo: exp.logo,
            logoW: exp.logoW,
            logoH: exp.logoH,
            org: company,
            details: [formatDuration(exp.start, exp.end, now), ...metaRest.filter((part) => part !== 'Part-time' && part !== 'Full-time')],
          };
        })}
      />
    );
  }

  return (
    <section id="experience" className="relative overflow-hidden py-12 sm:py-24 bg-surface-default">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-2.5 mb-10">
          <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">My Journey</p>
          <h2 className="font-grotesk font-medium text-heading text-text-primary tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="border-b border-border-subtle">
          {experiences.map((exp, index) => {
            const [company, ...metaRest] = exp.meta;
            return (
              <article
                key={index}
                className="border-t border-border-subtle py-10 grid gap-5 md:grid-cols-[200px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] md:gap-10"
              >
                <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary md:pt-3">
                  {formatDateRange(exp.start, exp.end)}
                </p>

                <div>
                  <div className="flex items-start gap-4 mb-3">
                    <div className="bg-surface-default border border-border-subtle rounded-control w-[54px] h-[54px] flex items-center justify-center shrink-0 p-2">
                      <img
                        src={exp.logo}
                        alt=""
                        width={exp.logoW}
                        height={exp.logoH}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-grotesk font-medium text-[20px] sm:text-2xl leading-tight text-text-primary">
                        {exp.title}
                      </h3>
                      <p className="font-grotesk text-sm text-text-primary">
                        <span className="font-medium text-text-brand">{company}</span>
                        {[formatDuration(exp.start, exp.end, now), ...metaRest].map((part, i) => (
                          <span key={i}>
                            <span aria-hidden="true" className="mx-1.5 text-text-secondary">·</span>
                            {part}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  {exp.subtitle && (
                    <p className="font-mono-bold text-caption text-text-secondary mb-4">
                      {exp.subtitle.join(' · ')}
                    </p>
                  )}

                  <blockquote className="border-l-2 border-text-brand pl-4 mb-5 mt-4">
                    <p className="font-grotesk text-[14px] sm:text-[15px] text-text-primary leading-relaxed">
                      {exp.challenge}
                    </p>
                  </blockquote>

                  <BulletList bullets={exp.bullets} />

                  <ul className="flex flex-wrap gap-y-1 font-mono-bold text-caption text-text-secondary">
                    {exp.skills.map((skill, i) => (
                      <li key={skill}>
                        {skill}
                        {i < exp.skills.length - 1 && <span aria-hidden="true" className="mx-2">·</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
