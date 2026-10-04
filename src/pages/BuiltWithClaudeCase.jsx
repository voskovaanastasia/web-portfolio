import { Link } from 'react-router-dom';
import SectionMenu from '../components/SectionMenu';
import ContactSection from '../components/ContactSection';
import { ChartCard, RowBarChart, ColumnChart } from '../components/ChartCard';
import useDocumentMeta from '../hooks/useDocumentMeta';

const TITLE = 'From Research to Production: Designing and Shipping My Portfolio with Claude Code';

const menuSections = [
  { id: 'case-hero', label: 'Back to Top' },
  { id: 'context', label: 'Context & Goals' },
  { id: 'role', label: 'Role & Who Did What' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Get in Touch' },
];

const glance = [
  {
    label: 'Role',
    value:
      'Product designer and product owner: researched other portfolios and spoke with a recruiter, designed the components and design tokens in Figma, directed Claude Code to build them and compose the pages, and iterated on feedback from a QA tester and a front-end developer who reviewed the live site',
  },
  { label: 'Build time', value: '10 weeks: first commit July 21, 2026 → live on my own domain September 29' },
  { label: 'Stack', value: 'Figma, React, Vite, Tailwind CSS, GSAP, Vercel' },
  {
    label: 'Built with',
    value: 'Claude Code: 91 commits, 86 of them co-authored with it, working from Figma designs through MCP',
  },
  {
    label: 'Outcome',
    value: (
      <>
        11 pages · 9 case studies · mobile Lighthouse performance <strong>68 → 95</strong> (LCP 5.2 s → 2.5 s, FCP
        4.4 s → 2.3 s) · Accessibility, Best Practices and SEO at 100
      </>
    ),
  },
  {
    label: 'Links',
    value: (
      <>
        <ExternalLink href="https://www.anastasiiavoskova.com">Live site</ExternalLink> ·{' '}
        <ExternalLink href="https://github.com/voskovaanastasia/web-portfolio">GitHub</ExternalLink>
      </>
    ),
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

const bodyText =
  'font-grotesk text-[14px] text-text-primary leading-relaxed max-w-3xl [&>strong]:font-bold [&>strong]:text-text-primary';
const h2Class =
  'font-grotesk font-medium text-[26px] sm:text-4xl text-text-primary tracking-tight max-w-3xl';
const eyebrow = 'font-mono-bold text-[14px] text-text-primary';

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 text-text-brand hover:text-action-primary-hover rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
    >
      {children}
    </a>
  );
}

export default function BuiltWithClaudeCase() {
  useDocumentMeta({
    title: 'Built with Claude — Case Study | Anastasiia Voskova',
    description:
      'A case study on turning my portfolio into a real product: researched, designed in Figma, built with Claude Code, and measured.',
    path: '/project/built-with-claude',
    robots: 'noindex, nofollow',
  });

  return (
    <main id="main-content" className="flex flex-col bg-surface-default">
      <SectionMenu sections={menuSections} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* TODO: hero image — the source copy has none, so the hero is text only. */}
        <div id="case-hero" className="pt-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 mt-6 font-grotesk font-medium text-base text-text-primary hover:text-text-brand transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true">
              <path d="M9 14 4 9l5-5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 9h11a5 5 0 0 1 5 5v6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Portfolio
          </Link>

          <h1 className="font-grotesk font-medium text-[26px] sm:text-5xl lg:text-[56px] text-text-primary tracking-tight leading-tight mt-8 max-w-4xl">
            {TITLE}
          </h1>
          <p className="font-grotesk text-sm text-text-secondary mt-4">Oct 4, 2026</p>
          <p className="font-grotesk italic text-[16px] sm:text-[20px] text-text-primary leading-relaxed mt-4 max-w-3xl">
            A case study on turning my portfolio into a real product: researched, designed in Figma, built with Claude
            Code, and measured, with me making the decisions, reviewing the output and fixing what the AI got wrong.
          </p>
        </div>

        {/* At a glance */}
        <section aria-labelledby="glance-heading" className="pt-10">
          <h2 id="glance-heading" className={eyebrow}>
            At a glance
          </h2>
          <dl className="bg-surface-subtle rounded-card p-3 sm:p-5 mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 m-0">
            {glance.map((item) => (
              <div key={item.label} className={`flex flex-col gap-3 ${item.label === 'Role' ? 'md:col-span-2' : ''}`}>
                <dt className="font-grotesk text-[14px] text-text-secondary">{item.label}</dt>
                <dd className="font-grotesk font-medium text-[14px] text-text-primary leading-relaxed m-0 [&>strong]:font-bold">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="font-grotesk italic text-sm text-text-secondary mt-3">
            Lighthouse figures: PageSpeed Insights, mobile, October 4, 2026. Performance varied between 88 and 95 across
            runs.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
            <div className="bg-surface-subtle rounded-card p-3 sm:p-5">
              <p className={bodyText}>
                <strong>The problem.</strong> I needed a portfolio that shows how I work from research to implementation,
                not another template that looks like everyone else&rsquo;s.
              </p>
            </div>
            <div className="bg-surface-subtle rounded-card p-3 sm:p-5">
              <p className={bodyText}>
                <strong>The approach.</strong> I started by studying other designers&rsquo; portfolios and talking to a
                recruiter about what they look for. Then I designed the building blocks in Figma, and Claude Code turned
                them into code and assembled the pages from them. Whenever a page needed something I hadn&rsquo;t
                designed, I designed that component separately and added it to the project. I reviewed each result in the
                browser, and after launch a QA tester and a front-end developer reviewed the live site. I fixed what they
                found, alongside what I caught myself: responsive behaviour, performance, accessibility, the design
                system and copy.
              </p>
            </div>
            <div className="bg-surface-brand-tint rounded-card p-3 sm:p-5">
              <p className={bodyText}>
                <strong>The result.</strong> A live site with nine case studies, a design system built from Figma
                components, and a repeatable way of directing AI without giving up design judgement. It also includes the
                mistakes I caught along the way, which are the most useful part of this story.
              </p>
            </div>
          </div>
        </section>

        {/* Context and goals */}
        <section id="context" className="pt-20 flex flex-col gap-6">
          <p className={eyebrow}>CONTEXT</p>
          <h2 className={h2Class}>Context and goals</h2>
          <p className={bodyText}>
            <strong>Why I needed a new site.</strong> My portfolio lived on Behance, and it was getting in my way.
            Formatting each case study took a lot of time, and the platform made it hard to show what I care about most:
            large user flows and information architecture. Once I started looking for a new role, I wanted one place that
            shows my full range: my experience, my case studies, my tech stack and my computer science education.
          </p>
          <p className={bodyText}>
            <strong>Why I built it myself.</strong> I studied computer science, so code isn&rsquo;t foreign territory for
            me, and I had already been testing ideas and prototypes with Claude Code. Building the site myself was a
            natural way to show how I work from design through to implementation. There were no real constraints on time
            or budget. I rewrote most of the copy with Claude&rsquo;s help, then reviewed and proofread it.
          </p>
          <p className={bodyText}>
            <strong>Who it&rsquo;s for.</strong> The main audience is recruiters and potential clients. I&rsquo;m looking
            for full-time roles and I&rsquo;ve worked in product companies, outsourcing and startups, so the site needed to
            speak to all three. I expected them to want to know three things within the first 30 seconds: is this
            experience relevant, what does the portfolio show, and what tools does this person work with.
          </p>
          <p className={bodyText}>
            <strong>Positioning.</strong> The line I built the site around is:{' '}
            <em>I make complex, data-dense products feel simple.</em>
          </p>
          <p className={bodyText}>
            <strong>Goals.</strong> I didn&rsquo;t set numeric targets up front. The goals were simple: raise my
            visibility with recruiters and get invited to interviews.
          </p>
        </section>

        {/* Role and who did what */}
        <section id="role" className="pt-20 flex flex-col gap-6">
          <p className={eyebrow}>ROLE</p>
          <h2 className={h2Class}>Role and who did what</h2>
          <p className={bodyText}>
            I worked as the designer and product owner. Claude had three jobs, and three groups of people reviewed along
            the way.
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
            <strong>How the workflow ran.</strong> Design and code ran in parallel, and both were component-led. I
            designed components in Figma; Claude Code built them and composed the pages I needed from those pieces. I did
            not design every page up front. When a page called for something the component set didn&rsquo;t cover, I
            designed that component separately and added it to the project.
          </p>
          <p className={bodyText}>
            <strong>What stayed with me.</strong> Anything that needed judgement: what the page leads with, how a case
            study ends, which tools represent a pillar, and whether a result was good enough to ship. I treated
            everything Claude produced as a draft. Audit findings were evidence to check against the code and the
            browser, not instructions to follow, and nothing reached a commit without my reading the diff.
          </p>
          <p className={bodyText}>
            <strong>Where that wasn&rsquo;t enough.</strong> Reading diffs catches what a change does, not what it leaves
            out. The design tokens I&rsquo;d defined in Figma only reached the code after launch, and a bundling
            &ldquo;fix&rdquo; I had accepted without measuring it slowed down every page. Both are covered below, because
            they show where my review needed a different kind of check.
          </p>
        </section>

        {/* Research */}
        <section id="research" className="pt-20 pb-24 flex flex-col gap-6">
          <p className={eyebrow}>RESEARCH</p>
          <h2 className={h2Class}>Research</h2>
          <p className={bodyText}>
            <strong>Before I opened Figma, I looked at what recruiters actually meet.</strong> I reviewed around 40
            designer portfolios and had a short consultation with a technical recruiter who hires for many different
            companies.
          </p>
          <p className={bodyText}>
            <strong>What repeated across the portfolios.</strong> I ran 21 of them through the same checklist, with
            Claude reading each page; two would not load properly, so the counts below use the 19 I could read. The home
            page often carried CV content: 13 of 19 offered a resume link right on it, and 9 of 19 listed roles or skills
            there. The typical home page showed four case studies, and the typical top menu had four items.
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
              caption={'Checklist on portfolio home pages, page text only · 18 of 21 sites readable; “Coming soon” cards counted · October 4, 2026'}
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
            <strong>What the recruiter told me.</strong> The main point was not to overload the page, and to make
            navigation easy. That confirmed what I was already doing: the section menu and the mobile menu were my own
            idea, and the conversation told me I was on the right track.
          </p>
          <p className={bodyText}>
            <strong>How it shaped the site.</strong> I kept the home page as my CV, with a <em>Download CV</em> button in
            the first screen, and added a featured latest case study with a path on to the others. My first audit flagged
            that Experience dominated the page. I chose to keep it, because recruiters expect a CV-like home page, and
            instead balanced it with the featured case and clear navigation. The full set of case studies lives on its own
            Portfolio page in the top menu.
          </p>
          <p className={bodyText}>
            <strong>What the sample cannot say.</strong> The checklist was run on page text, so sites that render heavily
            in JavaScript were read only in part, and &ldquo;Coming soon&rdquo; cards count as cases. Treat these as a
            snapshot of 19 portfolios, not a measure of the market.
          </p>
          <p className={bodyText}>
            <strong>What they were built on.</strong> Of the 21 portfolios, 9 used a no-code builder (8 Framer, 1 Wix).
            Five were confirmed hand-coded, and for 7 the page markup gave no sign either way.
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
        </section>
      </div>

      <ContactSection />
    </main>
  );
}
