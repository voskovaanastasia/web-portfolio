import CaseLayout from '../components/CaseLayout';
import { ChartCard, RowBarChart, ColumnChart } from '../components/ChartCard';
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
    title: 'Why I needed a new site',
    icon: (
      <>
        <path d="M4 5h16v11H4zM8 20h8M12 16v4" strokeLinejoin="round" />
      </>
    ),
    text: 'My portfolio lived on Behance, and it was getting in my way. Formatting each case study took a lot of time, and the platform made it hard to show what I care about most: large user flows and information architecture. Once I started looking for a new role, I wanted one place that shows my full range: my experience, my case studies, my tech stack and my computer science education.',
  },
  {
    title: 'Why I built it myself',
    icon: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" strokeLinejoin="round" strokeLinecap="round" />
      </>
    ),
    text: 'I studied computer science, so code isn’t foreign territory for me, and I had already been testing ideas and prototypes with Claude Code. Building the site myself was a natural way to show how I work from design through to implementation. There were no real constraints on time or budget. I rewrote most of the copy with Claude’s help, then reviewed and proofread it.',
  },
  {
    title: 'Who it’s for',
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" strokeLinecap="round" />
      </>
    ),
    text: 'The main audience is recruiters and potential clients. I’m looking for full-time roles and I’ve worked in product companies, outsourcing and startups, so the site needed to speak to all three. I expected them to want to know three things within the first 30 seconds: is this experience relevant, what does the portfolio show, and what tools does this person work with.',
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
    text: 'I didn’t set numeric targets up front. The goals were simple: raise my visibility with recruiters and get invited to interviews.',
  },
];

const roleRows = [
  {
    who: 'Me',
    what: "Positioning and information architecture. Research: other designers' portfolios and a conversation with a recruiter. The components and design-system variables in Figma, and any missing component designed separately when a page needed one. Markdown specs for the sections. Most of the copy, rewritten by me with AI's help. Every decision about what the page says and leaves out. A read of every diff before it was committed.",
  },
  {
    who: 'Claude Code',
    what: 'Built the components in code, then composed the pages from them, reading my Figma work through the Figma MCP. Handled repetitive work: responsive images, share-card generation, page metadata, lazy-loaded routes.',
  },
  {
    who: 'Claude (chat)',
    what: 'Reviewer and prompt partner. Wrote prioritised audits of the live pages, helped me turn each finding into a scoped prompt, and flagged inconsistencies in copy.',
  },
  {
    who: 'A recruiter, a QA tester, a front-end developer',
    what: 'The recruiter shaped what the site should show. The tester and the developer reviewed the live site after launch.',
  },
];

function Context() {
  return (
    <>
      <h2 className={h2Class}>Context and goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {contextCards.map((card) => (
          <div
            key={card.title}
            className={`${cardClass} ${card.tint ? 'bg-[#1f7ab8] text-white' : 'bg-surface-subtle text-[#288fd6]'}`}
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

      <div className="bg-surface-subtle rounded-card p-3 sm:p-5">
        <table className="w-full text-left border-collapse">
          <thead className="sr-only sm:not-sr-only">
            <tr className="border-b border-grey-300">
              <th scope="col" className="font-grotesk font-bold text-[14px] text-text-primary py-3 pr-4 w-1/4">
                Who
              </th>
              <th scope="col" className="font-grotesk font-bold text-[14px] text-text-primary py-3">
                What they did
              </th>
            </tr>
          </thead>
          <tbody>
            {roleRows.map((row) => (
              <tr key={row.who} className="block sm:table-row border-b border-grey-300 last:border-b-0">
                <th
                  scope="row"
                  className="block sm:table-cell font-grotesk font-bold text-[14px] text-text-primary pt-4 pb-1 sm:py-4 sm:pr-4 align-top"
                >
                  {row.who}
                </th>
                <td className="block sm:table-cell font-grotesk text-[14px] text-text-primary leading-relaxed pb-4 sm:py-4 align-top">
                  {row.what}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={bodyText}>
        <strong>How the workflow ran.</strong> Design and code ran in parallel, and both were component-led. I designed
        components in Figma; Claude Code built them and composed the pages I needed from those pieces. I did not design
        every page up front. When a page called for something the component set didn&rsquo;t cover, I designed that
        component separately and added it to the project.
      </p>
      <p className={bodyText}>
        <strong>What stayed with me.</strong> Anything that needed judgement: what the page leads with, how a case study
        ends, which tools represent a pillar, and whether a result was good enough to ship. I treated everything Claude
        produced as a draft. Audit findings were evidence to check against the code and the browser, not instructions to
        follow, and nothing reached a commit without my reading the diff.
      </p>
      <p className={bodyText}>
        <strong>Where that wasn&rsquo;t enough.</strong> Reading diffs catches what a change does, not what it leaves
        out. The design tokens I&rsquo;d defined in Figma only reached the code after launch, and a bundling
        &ldquo;fix&rdquo; I had accepted without measuring it slowed down every page. Both are covered below, because
        they show where my review needed a different kind of check.
      </p>
    </>
  );
}

function Research() {
  return (
    <>
      <h2 className={h2Class}>Research</h2>
      <p className={bodyText}>
        <strong>Before I opened Figma, I looked at what recruiters actually meet.</strong> I reviewed around 40 designer
        portfolios and had a short consultation with a technical recruiter who hires for many different companies.
      </p>
      <p className={bodyText}>
        <strong>What repeated across the portfolios.</strong> I ran 21 of them through the same checklist, with Claude
        reading each page; two would not load properly, so the counts below use the 19 I could read. The home page often
        carried CV content: 13 of 19 offered a resume link right on it, and 9 of 19 listed roles or skills there. The
        typical home page showed four case studies, and the typical top menu had four items.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ChartCard
          title="13 of 19 portfolios link a resume from the home page; 9 list roles or skills there"
          subtitle="Share of readable portfolios (n = 19)"
          note="My site does both: roles and skills on the home page, and a Download CV button in the first screen."
          caption="Checklist on portfolio home pages, page text only · 19 of 21 sites readable · October 4, 2026"
        >
          <RowBarChart
            max={19}
            rows={[
              { label: 'Resume link on the home page', value: 13, display: '13 of 19 (68%)', tone: 'accent' },
              { label: 'Roles or skills list on the home page', value: 9, display: '9 of 19 (47%)', tone: 'grey' },
            ]}
          />
        </ChartCard>

        <ChartCard
          title="The typical portfolio home page shows 4 case studies; mine shows one featured case"
          subtitle="Number of portfolios by case studies on the home page (n = 18, median 4)"
          caption={
            'Checklist on portfolio home pages, page text only · 18 of 21 sites readable; “Coming soon” cards counted · October 4, 2026'
          }
        >
          <ColumnChart
            max={8}
            xLabel="Case studies shown on the home page (observed counts only)"
            columns={[
              { label: '1', value: 1, dashed: true, topLabel: 'This site' },
              { label: '2', value: 1, tone: 'grey' },
              { label: '3', value: 4, tone: 'grey' },
              { label: '4', value: 8, tone: 'accent' },
              { label: '5', value: 3, tone: 'grey' },
              { label: '7', value: 1, tone: 'grey' },
              { label: '13', value: 1, tone: 'grey' },
            ]}
          />
        </ChartCard>
      </div>

      <p className={bodyText}>
        <strong>What the recruiter told me.</strong> The main point was not to overload the page, and to make navigation
        easy. That confirmed what I was already doing: the section menu and the mobile menu were my own idea, and the
        conversation told me I was on the right track.
      </p>
      <p className={bodyText}>
        <strong>How it shaped the site.</strong> I kept the home page as my CV, with a <em>Download CV</em> button in the
        first screen, and added a featured latest case study with a path on to the others. My first audit flagged that
        Experience dominated the page. I chose to keep it, because recruiters expect a CV-like home page, and instead
        balanced it with the featured case and clear navigation. The full set of case studies lives on its own Portfolio
        page in the top menu.
      </p>
      <p className={bodyText}>
        <strong>What the sample cannot say.</strong> The checklist was run on page text, so sites that render heavily in
        JavaScript were read only in part, and &ldquo;Coming soon&rdquo; cards count as cases. Treat these as a snapshot
        of 19 portfolios, not a measure of the market.
      </p>
      <p className={bodyText}>
        <strong>What they were built on.</strong> Of the 21 portfolios, 9 used a no-code builder (8 Framer, 1 Wix). Five
        were confirmed hand-coded, and for 7 the page markup gave no sign either way.
      </p>

      <div className="max-w-3xl">
        <ChartCard
          title="9 of 21 portfolios use a no-code builder; 5 are confirmed hand-coded"
          subtitle="9 no-code · 5 hand-coded · 7 undetermined (n = 21)"
          note="Detected from page markup (generator tags, asset domains). No markers means undetermined, not hand-coded."
          caption="Page markup of 21 portfolios (generator tags, asset domains) · October 4, 2026"
        >
          <RowBarChart
            max={8}
            rows={[
              { label: 'Framer (no-code)', value: 8, tone: 'grey' },
              { label: 'Wix (no-code)', value: 1, tone: 'grey' },
              { label: 'Next.js (hand-coded)', value: 1, tone: 'accent' },
              {
                label: 'Other hand-coded: Firebase, Netlify, Cloudflare Pages, Cloud Run',
                value: 4,
                tone: 'accent',
              },
              { label: 'No markers found in the page', value: 7, tone: 'light' },
            ]}
          />
        </ChartCard>
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
