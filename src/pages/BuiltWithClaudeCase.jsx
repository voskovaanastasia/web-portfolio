import CaseLayout, { ImagePlaceholder, MetricList, ProcessColumns, registerCaseAssets } from '../components/CaseLayout';
import Goals from '../components/Goals';
import iconGithub from '../assets/toolkit/github.svg';
import iconWebsite from '/favicon.svg';

// This case's images (including any added later as case-built-with-claude-<slot>.webp) load with the page.
registerCaseAssets(
  import.meta.glob('../assets/case-built-with-claude-*.{png,jpg,jpeg,svg,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
);

const project = {
  name: 'Built with Claude',
  title: 'From Research to Production: Designing and Shipping My Portfolio with Claude Code',
  heroImage: 'case-built-with-claude-hero.webp',
  // Preview-only page: keep it out of search until it is ready to ship.
  robots: 'noindex, nofollow',
  tags: ['Claude Code', 'Figma MCP', 'Design System', 'Performance'],
  meta: [
    { label: 'Role', value: 'Product designer and product owner' },
    { label: 'Build time', value: '10 weeks to launch · 21 July → 29 September 2026, refreshed in October' },
    { label: 'Built with', value: 'Claude Code · 166 commits, 155 co-authored (13 October 2026)' },
  ],
  tools: ['figma', 'claude-code', 'react', 'vite', 'tailwind', 'gsap', 'vercel'],
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
    value: '68 → 97',
    label:
      'Mobile Lighthouse performance. Accessibility, Best Practices and SEO at 100, Agentic browsing 3/3. (PageSpeed Insights, mobile, 19 October 2026.)',
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
  problem: {
    heading: 'My portfolio lived on Behance, and it was getting in my way',
    image: 'case-built-with-claude-problem-behance.webp',
    imageAlt: 'The old Behance portfolio',
    body: (
      <>
        Formatting each case study took a lot of time, and the platform made it hard to show what I care about most:
        large user flows and information architecture. Once I started looking for a new role, I wanted one place that
        shows my full range: my experience, my case studies, my tech stack and my computer science education.
        <br />
        <br />
        The audience is recruiters and potential clients. I have worked in product companies, outsourcing and startups,
        so the site had to speak to all three. I expected them to want three answers in the first 30 seconds: is this
        experience relevant, what does the portfolio show, and what tools does this person work with.
      </>
    ),
  },
  solution: {
    heading: 'One site I own, designed in Figma and built with Claude Code',
    image: 'case-built-with-claude-solution-home.webp',
    imageAlt: 'The live home page',
    body: (
      <>
        I designed the building blocks in Figma, and Claude Code built them and assembled the pages. I read every diff,
        and a QA tester and a front-end developer reviewed the live site.
        <br />
        <br />
        A site I own changes in minutes. A new case is one data entry plus its images, and a number can be corrected
        the day it changes. Nine case studies are live, five of them assembled from one shared case layout. The
        positioning I built the site around is: <em>I make complex, data-dense products feel simple.</em>
      </>
    ),
  },
};

const bodyText =
  'font-grotesk text-body text-text-primary leading-relaxed max-w-3xl [&>strong]:font-bold [&>strong]:text-text-primary';
const h2Class = 'font-grotesk font-medium text-heading text-text-primary tracking-tight max-w-3xl';
const h3Class = 'font-mono-bold text-body text-text-primary';
const captionClass = 'font-grotesk text-caption text-text-secondary';
const cardClass = 'rounded-card p-3 sm:p-5 flex flex-col gap-2 sm:gap-4';
const cardTitle = 'font-grotesk font-bold text-body text-text-primary';
const cardText = 'font-grotesk text-body text-text-primary leading-relaxed';
const calloutTitle = 'font-grotesk font-bold text-body text-text-inverse';
const calloutText = 'font-grotesk text-body text-text-inverse leading-relaxed';

function StatTile({ value, label }) {
  return (
    <div className={`${cardClass} bg-surface-subtle`}>
      <p className="font-grotesk font-bold text-stat text-text-brand leading-none">{value}</p>
      <p className={cardText}>{label}</p>
    </div>
  );
}

// ---- 4 · Project goals ----------------------------------------------------

const projectGoals = {
  headline:
    'Give recruiters one place to see my full range, from research through design to implementation, and get invited to interviews.',
  items: [
    'Replace Behance with one home for experience, case studies, tech stack and computer science background.',
    'Answer a recruiter’s three questions in 30 seconds: is the experience relevant, what does the portfolio show, which tools do I work with.',
    'Show large user flows and information architecture in full, without fighting the platform’s formatting.',
    'Prove how I work from design to implementation by designing, building and shipping the site myself with Claude Code.',
  ],
};

function Context() {
  return <Goals as="div" headline={projectGoals.headline} items={projectGoals.items} />;
}

// ---- 5 · Role and who did what --------------------------------------------

const roleRows = [
  {
    who: 'Me',
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" strokeLinecap="round" />
      </>
    ),
    what: 'Positioning, information architecture and research. Figma components and variables. Every decision on what the page says and leaves out, and a read of every diff before commit.',
  },
  {
    who: 'Claude Code',
    icon: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" strokeLinejoin="round" strokeLinecap="round" />
      </>
    ),
    what: 'Built the components in code and composed the pages from them, reading my Figma work through the Figma MCP. Handled repetitive work: responsive images, share-card generation, page metadata, lazy-loaded routes.',
  },
  {
    who: 'Claude (chat)',
    icon: (
      <>
        <path d="M4 5h16v11H9l-5 4V5z" strokeLinejoin="round" />
      </>
    ),
    what: 'Reviewer and prompt partner. Wrote prioritised audits of the live pages and helped me turn each finding into a scoped prompt.',
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

function Role() {
  return (
    <>
      <h2 className={h2Class}>Role and who did what</h2>
      <p className={bodyText}>
        I worked as the designer and product owner. Claude had three jobs, and three groups of people reviewed along the
        way. Judgement stayed with me: what the page leads with, how a case study ends, and whether a result was good
        enough to ship.
      </p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {roleRows.map((row) => (
          <div key={row.who} className="flex flex-col gap-4 border-t border-border-subtle pt-5">
            <span
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-brand-tint text-action-primary"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                {row.icon}
              </svg>
            </span>
            <p className={cardTitle}>{row.who}</p>
            <p className={cardText}>{row.what}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// ---- 6 · Research ---------------------------------------------------------

const researchStats = [
  { value: '68%', count: '13 of 19', label: 'link a resume from the home page' },
  { value: '47%', count: '9 of 19', label: 'list roles or skills on the home page' },
];

function CheckMark() {
  return (
    <span
      aria-hidden="true"
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface-brand-tint text-action-primary"
    >
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
        <path d="m3.5 8.5 3 3 6-7" />
      </svg>
    </span>
  );
}

function Research() {
  return (
    <>
      <h2 className={h2Class}>What other portfolios do, and what a recruiter looks for</h2>
      <p className={bodyText}>
        I studied other designers&rsquo; portfolios and spoke to a technical recruiter who hires for many different
        companies. After launch, on 4 October 2026, I ran 21 portfolios through one checklist to test my choices. Two
        would not load, so the counts use the 19 I could read.
      </p>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-2 flex flex-col gap-4 rounded-card border border-border-subtle bg-surface-default p-6 sm:p-8 shadow-sm">
          <p className="font-mono text-caption uppercase tracking-wider text-text-secondary">
            Checklist on portfolio home pages
          </p>
          <div className="flex flex-col">
            {researchStats.map((stat) => (
              <div key={stat.value} className="flex items-center gap-4 border-b border-border-subtle py-4">
                <CheckMark />
                <p className="flex-1 font-grotesk font-bold text-body text-text-primary">{stat.label}</p>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <p className="font-grotesk font-bold text-stat leading-none text-text-brand">{stat.value}</p>
                  <p className="font-mono text-caption uppercase tracking-wider text-text-secondary">{stat.count}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-4 border-b border-border-subtle py-4">
              <CheckMark />
              <p className={cardText}>
                The typical home page showed four case studies and four menu items. Of the 21 portfolios, 9 used a
                no-code builder and 5 were confirmed hand-coded.
              </p>
            </div>
          </div>
          <p className="font-mono text-caption text-text-secondary">
            page text only · 19 of 21 sites readable · 4 October 2026. A snapshot, not a measure of the market.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:pt-6">
          <div className="flex flex-col gap-2">
            <p className="font-grotesk font-bold text-body text-text-brand">My site does both.</p>
            <p className={cardText}>
              Roles and skills on the home page, and a Download CV button in the first screen.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-grotesk font-bold text-body text-text-brand">What the recruiter told me.</p>
            <p className={cardText}>
              Do not overload the page, make it easy to reach the case studies, and show a proper tool stack. That
              confirmed my direction: the section menu and the mobile menu were my own idea.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 border-t border-border-subtle pt-8 lg:grid-cols-3 lg:gap-10">
        <p className="font-mono text-caption uppercase tracking-wider text-text-secondary">How it shaped the site.</p>
        <p className={`${cardText} lg:col-span-2 max-w-3xl`}>
          Home stays a CV, with a <em>Download CV</em> button in the first screen and a featured latest case study
          leading to the rest. My audit flagged that Experience dominates; I kept it because recruiters expect a
          CV-like home, and balanced it with the featured case and clear navigation.
        </p>
      </div>
    </>
  );
}

// ---- 7 · From version 1 to version 2 --------------------------------------

function VersionTwo() {
  return (
    <>
      <h2 className={h2Class}>From version 1 to version 2</h2>
      <p className={bodyText}>
        The first home page opened with one featured project, filled purple cards on how I work, a testimonial, my full
        toolkit and a long Experience section. It worked, but it read more like a CV than a portfolio, and the work was
        hard to find. People who looked at it said the same.
      </p>
      <p className={bodyText}>
        For version 2 I showed more cases straight away, dropped the filled cards, reordered the home page blocks and
        refreshed the UI. I asked Claude Design to review the first version. It found front-end bugs, including
        typography problems I fixed, and proposed 31 changes. I treated them as options and implemented 8, testing each
        against one question: does it help a reviewer reach the work faster? I also changed the font set so the page
        loads faster.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-2">
        <ImagePlaceholder
          filename="case-built-with-claude-v1-home.webp"
          alt="Version 1, full home page"
          className="lg:col-span-2 min-h-[320px] lg:min-h-full"
        />
        <div className="flex flex-col gap-5">
          <ImagePlaceholder
            filename="case-built-with-claude-v1-toolkit.webp"
            alt="Version 1, toolkit block"
            className="min-h-[200px] flex-1"
          />
          <ImagePlaceholder
            filename="case-built-with-claude-v1-ai-designer.webp"
            alt="Version 1, AI + Designer block"
            className="min-h-[200px] flex-1"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ImagePlaceholder
          filename="case-built-with-claude-v1-v2-first-screen.webp"
          alt="Before and after, first screen"
          className="min-h-[320px]"
        />
        <ImagePlaceholder
          filename="case-built-with-claude-v1-v2-cases.webp"
          alt="Before and after, cases block"
          className="min-h-[320px]"
        />
      </div>
    </>
  );
}

// ---- 8 · The loop ----------------------------------------------------------

const loopSteps = [
  {
    marker: '1',
    heading: 'Frame the problem',
    body: 'What I am solving, for whom, with what outcome. Wireframes and direction in Figma.',
  },
  {
    marker: '2',
    heading: 'Turn design into instructions',
    body: 'Flows, states and edge cases as precise written specs in Markdown.',
  },
  {
    marker: '3',
    heading: 'Build with AI',
    body: 'Claude Code writes the front end from the specs. I read every diff.',
  },
  {
    marker: '4',
    heading: 'Put it live',
    body: 'The result ships as a real URL, so decisions are tested on a working page, not argued over a frame.',
  },
  {
    marker: '5',
    heading: 'Test and refine',
    body: 'People and audits find what I cannot see, and each finding becomes the next prompt.',
  },
];

const loopRules = [
  { lead: 'No invented content.', text: 'Prompts for new cases asked for marked TODO fields instead of made-up metrics.' },
  {
    lead: 'Report, do not repair.',
    text: 'Audit prompts ended with “report every mismatch”, so the decision stayed mine.',
  },
  {
    lead: 'Before launch, Claude Code pushed to the live branch directly.',
    text: 'After I published the site, every change went through a test branch first.',
  },
];

function Loop() {
  return (
    <>
      <h2 className={h2Class}>The same five steps I describe on the home page</h2>
      <p className={bodyText}>
        Design and code ran in parallel, and both were component-led. When a page needed something the component set did
        not cover, I designed that component separately and added it to the project.
      </p>

      <ProcessColumns columns={loopSteps} />

      <h3 className={`${h3Class} mt-4`}>Rules I set</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {loopRules.map((rule) => (
          <div key={rule.lead} className={`${cardClass} bg-surface-subtle`}>
            <p className={cardTitle}>{rule.lead}</p>
            <p className={cardText}>{rule.text}</p>
          </div>
        ))}
      </div>

      <ImagePlaceholder
        filename="case-built-with-claude-loop-figma-claude.webp"
        alt="Figma component library next to a Claude Code session"
        className="min-h-[320px]"
      />
    </>
  );
}

// ---- 9 · Design tokens -----------------------------------------------------

const tokenResults = [
  { value: '39 → 0', label: 'Raw colour values outside the case-study palettes.' },
  { value: '148 → 47', label: 'Arbitrary font sizes.' },
];

function Tokens() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col gap-6 self-start lg:sticky lg:top-24">
          <h2 className="font-grotesk font-medium text-heading text-text-primary tracking-tight leading-snug md:-mt-[0.15em]">
            Design tokens: one vocabulary for Figma and code
          </h2>
          <p className={cardText}>
            The first build looked consistent by accident. The same text colour was typed out by hand 98 times, the same
            card radius 82 times and the same body size 257 times, and nothing stopped the next prompt from typing a
            slightly different value.
          </p>
          <p className={cardText}>
            I defined the tokens in Figma in two layers, primitives and semantic roles. Claude Code read them through the
            Figma MCP into CSS variables and the Tailwind theme. They first reached the code on 4 October, after launch,
            and the migration was finished on 13 October.
          </p>
        </div>
        <div className="md:col-span-2 flex flex-col gap-5">
          <h3 className={h3Class}>Result</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tokenResults.map((item) => (
              <StatTile key={item.value} {...item} />
            ))}
          </div>
          <div className={`${cardClass} bg-surface-subtle`}>
            <p className={cardText}>A lint check now fails if a raw colour is added.</p>
          </div>
          <div className={`${cardClass} bg-surface-subtle`}>
            <p className={cardText}>
              The brand blue (<code className="font-mono-bold">#288FD6</code>) has 3.5:1 contrast on white, so it is
              never used for text. Text and links use a deeper blue (<code className="font-mono-bold">#186A9C</code>,
              5.9:1).
            </p>
          </div>
          <div className={`${cardClass} bg-surface-subtle`}>
            <p className={cardText}>
              Colours inside case studies belong to the client&rsquo;s product, so they stay outside the system on
              purpose.
            </p>
          </div>
        </div>
      </div>

      <ImagePlaceholder
        filename="case-built-with-claude-tokens-structure.webp"
        alt="Token structure: raw value, primitive, semantic, in code"
        className="min-h-[420px]"
      />
    </>
  );
}

// ---- 10 · Mistakes worth showing ------------------------------------------

const mistakes = [
  {
    lead: 'The design system did not reach the code.',
    text: 'The components existed in Figma, but the variables did not carry through, so colours and sizes were hard-coded. I wired the tokens in after launch.',
  },
  {
    lead: 'A bundling “fix” I accepted without measuring.',
    text: 'A build setting forced an 847 KB charting library to load on every page, including the home page, where it is not used. I removed it on 4 October.',
  },
  {
    lead: 'A placeholder URL went live.',
    text: 'A placeholder from one of my own prompts reached the canonical link and the share tags. The tool did exactly what I asked. I replaced it with the real domain.',
  },
  {
    lead: 'The wrong title and the wrong hosting claim.',
    text: 'The page title was still the starter template’s for a while, and one line named the wrong hosting provider. I fixed both in review.',
  },
  {
    lead: 'Found by the QA tester.',
    text: 'A button I had forgotten to link, and an email form that did not work on Windows.',
  },
  {
    lead: 'Advised by the front-end developer.',
    text: 'Run a performance check and optimise loading, which led to the next block.',
  },
];

function Mistakes() {
  return (
    <>
      <h2 className={h2Class}>Not everything Claude Code did was right, and some mistakes were mine</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {mistakes.map((item) => (
          <div key={item.lead} className={`${cardClass} bg-surface-subtle`}>
            <p className={cardTitle}>{item.lead}</p>
            <p className={cardText}>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// ---- 11 · Performance and results -----------------------------------------

const scoreTiles = [
  { value: '97', label: 'Performance' },
  { value: '100', label: 'Accessibility' },
  { value: '100', label: 'Best Practices' },
  { value: '100', label: 'SEO' },
  { value: '3/3', label: 'Agentic browsing' },
];

const pageSpeedMetrics = [
  {
    title: 'Mobile performance',
    bars: [
      { label: '68', value: 68, before: true },
      { label: '97', value: 97 },
    ],
    text: 'PageSpeed Insights, mobile, 19 October.',
  },
  {
    title: 'Largest contentful paint',
    lowerIsBetter: true,
    bars: [
      { label: '5.2 s', value: 5.2, before: true },
      { label: '2.5 s', value: 2.5 },
    ],
    text: 'PageSpeed Insights, 4 October.',
  },
];

const localMetrics = [
  {
    title: 'First paint',
    lowerIsBetter: true,
    bars: [
      { label: '2.41 s', value: 2.41, before: true },
      { label: '2.07 s', value: 2.07 },
    ],
    text: 'First paint came sooner.',
  },
  {
    title: 'Blocking time',
    lowerIsBetter: true,
    bars: [
      { label: '374 ms', value: 374, before: true },
      { label: '290 ms', value: 290 },
    ],
    text: 'Blocking time fell.',
  },
  {
    title: 'Main script',
    lowerIsBetter: true,
    bars: [
      { label: '495 KB', value: 495, before: true },
      { label: '324 KB', value: 324 },
    ],
    text: 'The main script shrank.',
  },
];

function Results() {
  return (
    <>
      <h2 className={h2Class}>From 68 to 97 on mobile, and who arrived</h2>

      <h3 className={h3Class}>Performance</h3>
      <p className={bodyText}>
        The first score was 68 on mobile, with a largest contentful paint of 5.2 s. Removing the forced chunk preload,
        self-hosting the fonts and compressing the images took it to 95 and 2.5 s (PageSpeed Insights, 4 October).
      </p>
      <p className={bodyText}>
        A second pass split the below-the-fold sections and the animation library out of the entry bundle and loaded
        them when the browser is idle. In a controlled local comparison, five runs each, first paint came sooner (2.41 s
        → 2.07 s), blocking time fell (374 → 290 ms) and the main script shrank from 495 to 324 KB. Largest contentful
        paint did not improve, and I did not claim otherwise.
      </p>
      <p className={bodyText}>
        On 19 October PageSpeed Insights gave <strong>97</strong> for performance, <strong>100</strong> for
        Accessibility, Best Practices and SEO, and 3/3 on Agentic browsing.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {scoreTiles.map((tile) => (
          <div key={tile.label} className="last:col-span-2 md:last:col-span-1 flex">
            <div className={`${cardClass} bg-surface-subtle w-full`}>
              <p className="font-grotesk font-bold text-stat text-text-brand leading-none">{tile.value}</p>
              <p className={cardText}>{tile.label}</p>
            </div>
          </div>
        ))}
      </div>

      <MetricList metrics={pageSpeedMetrics} markerName="Before" />
      <p className={captionClass}>Controlled local comparison, five runs each</p>
      <MetricList metrics={localMetrics} markerName="Before" />

      <ImagePlaceholder
        filename="case-built-with-claude-results-psi.webp"
        alt="PageSpeed Insights, mobile, 19 October 2026: 97 performance, 100 accessibility, 100 best practices, 100 SEO, Agentic browsing 3/3"
        className="min-h-[320px]"
      />

      <h3 className={`${h3Class} mt-4`}>Who arrived</h3>
      <p className={bodyText}>
        Vercel Analytics, as of 19 October: <strong>3,281 visitors</strong> and <strong>5,940 page views</strong>. About
        2,700 visitors came from LinkedIn, where I announced the site, which is over 80% of the total. The home page had
        3.1K visitors, Portfolio 637 and About 294.
      </p>
      <p className={bodyText}>
        The featured Farsafe case drew 544 visitors. The next most visited cases had 68, 52 and 47. Interview
        invitations followed, and their number has kept growing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <StatTile value="3,281" label="visitors" />
        <StatTile value="5,940" label="page views" />
        <StatTile
          value="About 2,700"
          label="visitors came from LinkedIn, where I announced the site, which is over 80% of the total."
        />
      </div>

      <ImagePlaceholder
        filename="case-built-with-claude-results-analytics.webp"
        alt="Vercel Analytics, 19 October 2026: visitors, page views, pages, referrers"
        className="min-h-[320px]"
      />

      <h3 className={`${h3Class} mt-4`}>Beyond the scores</h3>
      <p className={bodyText}>
        What I shipped that does not show on screen: page metadata per route and a sitemap built at release, structured
        data, a real 404 page for unknown routes, an <code className="font-mono-bold">llms.txt</code> file, responsive
        image sizes, self-hosted fonts, lazy-loaded case routes, reduced-motion support and a lint check against raw
        colours.
      </p>
    </>
  );
}

// ---- 12 · Key takeaway -----------------------------------------------------

const keyTakeaway = {
  heading: 'The brief is the design',
  body: [
    'The tool wrote the code quickly. What decided whether it was good was how precisely I specified what I wanted and how carefully I checked the result.',
    'My education is in Computer Science (Lviv Polytechnic National University), which meant I could read what the tool wrote instead of trusting it, and say exactly what was wrong when it was. That is the part of the process I would not hand over.',
    <>
      <strong>What I would do differently.</strong> I would write acceptance criteria before the first prompt:
      Lighthouse targets, an accessibility check and a link crawl. And I would make the design system enforceable from
      the first week with a lint rule against raw colours, not a note in a prompt.
    </>,
  ],
};

const sections = [
  { id: 'context', label: 'Project Goals', bare: true, content: <Context /> },
  { id: 'role', label: 'Role & Who Did What', content: <Role /> },
  { id: 'research', label: 'Research', content: <Research /> },
  { id: 'versions', label: 'Version 1 → 2', content: <VersionTwo /> },
  { id: 'loop', label: 'How I Worked with Claude Code', content: <Loop /> },
  { id: 'tokens', label: 'Design System', content: <Tokens /> },
  { id: 'mistakes', label: 'Mistakes', content: <Mistakes /> },
  { id: 'results', label: 'Results', content: <Results /> },
];

export default function BuiltWithClaudeCase() {
  return <CaseLayout project={project} sections={sections} keyTakeaway={keyTakeaway} caseId="built-with-claude" />;
}
