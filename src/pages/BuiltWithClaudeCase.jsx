import CaseLayout from '../components/CaseLayout';
import { ProgressBar } from '../components/Charts';
import toolFigma from '../assets/icon-figma.svg';
import toolClaude from '../assets/icon-claude.svg';
import toolReact from '../assets/icon-react.svg';
import toolVite from '../assets/toolkit/vite.svg';
import toolTailwind from '../assets/toolkit/tailwind.webp';
import toolGsap from '../assets/toolkit/gsap.svg';
import toolVercel from '../assets/toolkit/vercel.svg';
import iconGithub from '../assets/toolkit/github.svg';
import iconWebsite from '/favicon.svg';

const project = {
  name: 'Built with Claude',
  title: 'From Research to Production: Designing and Shipping My Portfolio with Claude Code',
  heroImage: 'case-built-with-claude-hero.webp',
  // Preview-only page: keep it out of search until it is ready to ship.
  robots: 'noindex, nofollow',
  tags: ['Claude Code', 'Figma MCP', 'Design System', 'Performance'],
  meta: [
    { label: 'Role', value: 'Product designer and product owner' },
    { label: 'Build time', value: '10 weeks\nJuly 21 → September 29, 2026' },
    { label: 'Built with', value: 'Claude Code\n91 commits, 86 co-authored' },
  ],
  tools: [
    { icon: toolFigma, label: 'Figma' },
    { icon: toolClaude, label: 'Claude Code' },
    { icon: toolReact, label: 'React' },
    { icon: toolVite, label: 'Vite' },
    { icon: toolTailwind, label: 'Tailwind CSS' },
    { icon: toolGsap, label: 'GSAP' },
    { icon: toolVercel, label: 'Vercel' },
  ],
  links: [
    { icon: iconWebsite, label: 'Website', href: 'https://www.anastasiiavoskova.com/' },
    { icon: iconGithub, label: 'GitHub', href: 'https://github.com/voskovaanastasia/web-portfolio' },
  ],
  summary: [
    {
      label: 'PROBLEM',
      text: 'I needed a portfolio that shows how I work from research to code, not another template.',
    },
    {
      label: 'MY ROLE',
      text: 'Product designer and product owner: research, Figma components and tokens, directing Claude Code, and acting on review feedback.',
    },
    {
      label: 'APPROACH',
      text: 'I studied other portfolios and talked to a recruiter, designed components in Figma, and had Claude Code build them and assemble the pages. I reviewed every diff, and a QA tester and a front-end developer reviewed the live site. I fixed what they found.',
    },
  ],
  outcome: {
    value: '68 → 95',
    label: 'Mobile Lighthouse performance (LCP 5.2 s → 2.5 s). Accessibility, Best Practices and SEO at 100.',
  },
  intro: {
    heading: 'Turning my portfolio into a real product',
    image: 'case-built-with-claude-intro.webp',
    body: (
      <>
        A case study on turning my portfolio into a real product: researched, designed in Figma, built with Claude
        Code, and measured, with me making the decisions, reviewing the output and fixing what the AI got wrong.
        <br />
        <br />
        <strong>The result.</strong> A live site with nine case studies, a design system built from Figma components,
        and a repeatable way of directing AI without giving up design judgement. It also includes the mistakes I caught
        along the way, which are the most useful part of this story.
      </>
    ),
  },
};

const bodyText =
  'font-grotesk text-[14px] text-text-primary leading-relaxed max-w-3xl [&>strong]:font-bold [&>strong]:text-text-primary';
const h2Class = 'font-grotesk font-medium text-[26px] sm:text-4xl text-text-primary tracking-tight max-w-3xl';
const cardClass = 'rounded-card p-3 sm:p-5 flex flex-col gap-2 sm:gap-4';

const contextCards = [
  {
    title: 'The problem with Behance',
    icon: (
      <>
        <path d="M4 5h16v11H4zM8 20h8M12 16v4" strokeLinejoin="round" />
      </>
    ),
    text: 'My portfolio lived on Behance. Formatting each case study took a lot of time, and the platform made it hard to show large user flows and information architecture.',
  },
  {
    title: 'What I wanted',
    icon: (
      <>
        <path d="M12 3 14.6 9.4 21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3z" strokeLinejoin="round" />
      </>
    ),
    text: 'Once I started looking for a new role, I wanted one place for my full range: experience, case studies, tech stack and computer science education.',
  },
  {
    title: 'Why I built it myself',
    icon: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" strokeLinejoin="round" strokeLinecap="round" />
      </>
    ),
    text: 'I studied computer science and had already been testing prototypes with Claude Code, so building the site was a natural way to show how I work from design to implementation. I rewrote most of the copy with Claude’s help, then proofread it.',
  },
  {
    title: 'Who it’s for',
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" strokeLinecap="round" />
      </>
    ),
    text: 'Recruiters and potential clients. I’m looking for full-time roles and have worked in product companies, outsourcing and startups. I expected them to want three answers within 30 seconds: is this experience relevant, what does the portfolio show, and what tools do I work with.',
  },
  {
    title: 'Positioning',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      </>
    ),
    text: (
      <>
        The line I built the site around is: <em>I make complex, data-dense products feel simple.</em>
      </>
    ),
    tint: true,
  },
  {
    title: 'Goals',
    icon: (
      <>
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" strokeLinejoin="round" />
      </>
    ),
    text: 'No numeric targets. The goals were simple: raise my visibility with recruiters and get invited to interviews.',
  },
];

const roleRows = [
  {
    who: 'Me',
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" strokeLinecap="round" />
      </>
    ),
    what: "Positioning, information architecture and research. Figma components and variables. Every decision on what the page says and leaves out, and a read of every diff before commit.",
  },
  {
    who: 'Claude Code',
    icon: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" strokeLinejoin="round" strokeLinecap="round" />
      </>
    ),
    what: 'Built the components in code, then composed the pages from them, reading my Figma work through the Figma MCP. Handled repetitive work: responsive images, share-card generation, page metadata, lazy-loaded routes.',
  },
  {
    who: 'Claude (chat)',
    icon: (
      <>
        <path d="M4 5h16v11H9l-5 4V5z" strokeLinejoin="round" />
      </>
    ),
    what: 'Reviewer and prompt partner. Wrote prioritised audits of the live pages, helped me turn each finding into a scoped prompt, and flagged inconsistencies in copy.',
  },
  {
    who: 'A recruiter, a QA tester, a front-end developer',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" /><path d="m8 12.5 2.8 2.8L16.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    what: 'The recruiter shaped what the site should show. The tester and the developer reviewed the live site after launch.',
  },
];

function Context() {
  return (
    <>
      <h2 className={h2Class}>Context and goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {contextCards.map((card) => (
          <div
            key={card.title}
            className={`${cardClass} ${card.tint ? 'bg-action-primary text-white' : 'bg-surface-subtle text-blue-500'}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8" aria-hidden="true">
              {card.icon}
            </svg>
            <p className={`font-grotesk font-bold text-[14px] ${card.tint ? 'text-white' : 'text-text-primary'}`}>
              {card.title}
            </p>
            <p
              className={`font-grotesk text-[14px] leading-relaxed ${card.tint ? 'text-white' : 'text-text-primary'}`}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function Role() {
  return (
    <>
      <h2 className={h2Class}>Role and who did what</h2>
      <p className={bodyText}>
        I worked as the designer and product owner. Claude had three jobs, and three groups of people reviewed along the
        way.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {roleRows.map((row) => (
          <div key={row.who} className={`${cardClass} bg-surface-subtle text-blue-500`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8" aria-hidden="true">
              {row.icon}
            </svg>
            <p className="font-grotesk font-bold text-[14px] text-text-primary">{row.who}</p>
            <p className="font-grotesk text-[14px] text-text-primary leading-relaxed">{row.what}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <p className="font-mono-bold text-[14px] text-text-primary">How the workflow ran</p>
          <p className="font-grotesk text-[14px] text-text-primary leading-relaxed">
            Design and code ran in parallel, and both were component-led. I designed components in Figma; Claude Code
            built them and composed the pages from those pieces, and when a page needed something the set didn&rsquo;t
            cover, I designed it separately. Judgement stayed with me: what the page leads with, how a case study ends,
            and whether a result was good enough to ship. I treated everything Claude produced as a draft, and audit
            findings as evidence to check, not instructions to follow.
          </p>
        </div>
        <div className={`${cardClass} bg-action-primary`}>
          <p className="font-grotesk font-bold text-[14px] text-white">Where that wasn&rsquo;t enough</p>
          <p className="font-grotesk text-[14px] text-white leading-relaxed">
            Reading diffs shows what a change does, not what it leaves out. My Figma design tokens reached the code only
            after launch, and a bundling &ldquo;fix&rdquo; I accepted without measuring slowed down every page. Both are
            covered below.
          </p>
        </div>
      </div>
    </>
  );
}

const researchStats = [
  {
    pct: 68,
    color: 'var(--color-blue-500)',
    title: '68% (13 of 19) — link a resume from the home page',
    text: 'Visitors can get the CV without leaving the home page.',
  },
  {
    pct: 47,
    color: 'var(--color-grey-500)',
    title: '47% (9 of 19) — list roles or skills on the home page',
    text: 'Almost half put CV content right on the home page.',
  },
];

function Research() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col gap-6 self-start lg:sticky lg:top-24">
          <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-text-primary tracking-tight leading-snug md:-mt-[0.15em]">
            Before I opened Figma, I looked at what recruiters actually meet.
          </h2>
          <p className="font-grotesk text-[14px] text-text-primary leading-relaxed">
            I reviewed around 40 designer portfolios and ran 21 of them through the same checklist, with Claude reading
            each page. Two would not load, so the counts use the 19 I could read.
          </p>
        </div>
        <div className="md:col-span-2 flex flex-col gap-5">
          {researchStats.map((stat) => (
            <div key={stat.title} className={`${cardClass} bg-surface-subtle`}>
              <ProgressBar pct={stat.pct} color={stat.color} />
              <p className="font-grotesk font-bold text-[14px] text-text-primary mt-2">{stat.title}</p>
              <p className="font-grotesk text-[14px] text-text-primary leading-relaxed">{stat.text}</p>
            </div>
          ))}
          <div className={`${cardClass} bg-action-primary`}>
            <p className="font-grotesk font-bold text-[14px] text-white">My site does both</p>
            <p className="font-grotesk text-[14px] text-white leading-relaxed">
              Roles and skills on the home page, and a Download CV button in the first screen.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-grotesk text-[14px] text-text-primary">
          The typical home page also showed four case studies and four menu items.
        </p>
        <p className="font-grotesk text-[12px] text-text-secondary">
          Checklist on portfolio home pages, page text only · 19 of 21 sites readable · October 4, 2026
        </p>
      </div>

      <p className="font-mono-bold text-[14px] text-text-primary">What I did with it</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className={`${cardClass} bg-surface-subtle`}>
          <p className="font-grotesk font-bold text-[14px] text-text-primary">What the recruiter told me</p>
          <p className="font-grotesk text-[14px] text-text-primary leading-relaxed">
            Don't overload the page, and make navigation easy. That confirmed my direction: the section menu and mobile
            menu were my own idea.
          </p>
        </div>
        <div className={`${cardClass} bg-surface-subtle`}>
          <p className="font-grotesk font-bold text-[14px] text-text-primary">How it shaped the site</p>
          <p className="font-grotesk text-[14px] text-text-primary leading-relaxed">
            Home stays a CV, with a <em>Download CV</em> button in the first screen and a featured latest case study
            leading to the rest. My audit flagged that Experience dominates; I kept it because recruiters expect a
            CV-like home, and balanced it with the featured case and clear navigation. All case studies live on the
            Portfolio page.
          </p>
        </div>
      </div>
    </>
  );
}

const sections = [
  { id: 'context', label: 'Context & Goals', content: <Context /> },
  { id: 'role', label: 'Role & Who Did What', content: <Role /> },
  { id: 'research', label: 'Research', content: <Research /> },
];

export default function BuiltWithClaudeCase() {
  return <CaseLayout project={project} sections={sections} caseId="built-with-claude" />;
}
