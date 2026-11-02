import { useEffect, useRef, useState } from 'react';
import CaseLayout, { ImagePlaceholder, MetricList, registerCaseAssets } from '../components/CaseLayout';
import { StatBar } from '../components/StatBar';
import Goals from '../components/Goals';
import IATree from '../components/IATree';
import BuildLog from '../components/BuildLog';
import iconGithub from '../assets/toolkit/github.svg';
import iconWebsite from '/favicon.svg';
import './builtWithClaudeVersions.css';
import './builtWithClaudeLoop.css';

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
    { label: 'Build time', value: '10 weeks to launch · 21 July → 29 September 2026, redesigned in late October' },
    { label: 'Built with', value: 'Claude Code · 264 commits, 246 co-authored (30 October 2026)' },
  ],
  tools: ['figma', 'claude-design', 'claude-code', 'react', 'vite', 'tailwind', 'gsap', 'vercel'],
  links: [
    { icon: iconWebsite, label: 'Website', href: 'https://www.anastasiiavoskova.com/' },
    { icon: iconGithub, label: 'GitHub', href: 'https://github.com/voskovaanastasia/web-portfolio' },
  ],
  summary: [
    {
      label: 'PROBLEM',
      text: 'My portfolio lived on Behance, where formatting each case took a lot of time and large user flows were hard to show. I needed one place that shows how I work from research to code, not another template.',
    },
    {
      label: 'MY ROLE',
      text: 'Product designer and product owner: research, Figma components and tokens, directing Claude Code, and acting on review feedback.',
    },
    {
      label: 'APPROACH',
      text: 'I researched other portfolios, designed components in Figma and had Claude Code build the pages. I reviewed every diff and fixed what a QA tester and a front-end developer found on the live site. For the redesign, Claude Design explored structures and component ideas on top of my system.',
    },
  ],
  outcome: {
    value: '68 → 100',
    label:
      'Mobile Lighthouse performance. Accessibility, Best Practices and SEO at 100. PageSpeed Insights, 30 October 2026.',
  },
  intro: {
    heading: 'Turning my portfolio into a real product',
    image: 'case-built-with-claude-intro.png',
    body: (
      <>
        A case study on turning my portfolio into a real product: researched, designed in Figma, built with Claude
        Code, and measured, with me making the decisions, reviewing the output and fixing what the AI got wrong.
      </>
    ),
  },
  problem: {
    heading: 'My portfolio lived on Behance, and it was getting in my way',
    image: 'case-built-with-claude-problem-behance.png',
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
    image: 'case-built-with-claude-solution-home.png',
    imageAlt: 'The live home page',
    body: (
      <>
        I designed the building blocks in Figma, and Claude Code built them and assembled the pages.
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
const h3Class = 'font-mono-bold text-caption uppercase tracking-wider text-text-secondary';
const captionClass = 'font-grotesk text-caption text-text-secondary';
const cardClass = 'rounded-card p-3 sm:p-5 flex flex-col gap-2 sm:gap-4';
const cardTitle = 'font-grotesk font-bold text-body text-text-primary';
const cardText = 'font-grotesk text-body text-text-primary leading-relaxed';
const calloutTitle = 'font-grotesk font-bold text-body text-text-inverse';
const calloutText = 'font-grotesk text-body text-text-inverse leading-relaxed';

// ---- 4 · Project goals ----------------------------------------------------

const projectGoals = {
  headline:
    'Give recruiters one place to see my full range, from research to code, and get invited to interviews.',
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
    span: 'lg:col-span-2',
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" strokeLinecap="round" />
      </>
    ),
    what: 'Positioning, information architecture and research. Figma components and variables. Every decision on what the page says and leaves out.',
  },
  {
    who: 'Claude Code',
    span: 'lg:col-span-2',
    icon: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" strokeLinejoin="round" strokeLinecap="round" />
      </>
    ),
    what: 'Built the components in code and composed the pages from them, reading my Figma work through the Figma MCP. Handled repetitive work: responsive images, share-card generation, page metadata, lazy-loaded routes.',
  },
  {
    who: 'Claude (chat)',
    span: 'lg:col-span-2',
    icon: (
      <>
        <path d="M4 5h16v11H9l-5 4V5z" strokeLinejoin="round" />
      </>
    ),
    what: 'Reviewer and prompt partner. Wrote prioritised audits of the live pages and helped me turn each finding into a scoped prompt.',
  },
  {
    who: 'Claude Design',
    span: 'lg:col-span-3',
    icon: (
      <>
        <path d="m4 20 1-4L16 5l3 3L8 19l-4 1zM14 7l3 3" strokeLinejoin="round" strokeLinecap="round" />
      </>
    ),
    what: 'Reviewed the first version of the site: it found front-end bugs and proposed changes, which I treated as options. For the redesign it proposed structures and new takes on components, working from my design system and my first version. I filled the structures with my content and reworked the components before anything went to Claude Code.',
  },
  {
    who: 'A recruiter, a QA tester, a front-end developer',
    span: 'md:col-span-2 lg:col-span-3',
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

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
        {roleRows.map((row) => (
          <div key={row.who} className={`flex flex-col gap-4 border-t border-border-subtle pt-5 ${row.span}`}>
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

// Bars use the data palette (blue, green, orange); the percentages stay in the dark ink of the row labels.
const researchBars = [
  {
    pct: 68,
    color: 'var(--color-data-5)',
    valueClass: 'text-ink',
    title: '68% — link a resume from the home page',
    text: '13 of 19 portfolios. My site does it too: a Download CV button sits in the first screen.',
  },
  {
    pct: 47,
    color: 'var(--color-data-2)',
    valueClass: 'text-ink',
    title: '47% — list roles or skills on the home page',
    text: '9 of 19 portfolios. My site does it too; the full version now lives on About.',
  },
  {
    pct: 72,
    color: 'var(--color-data-6)',
    valueClass: 'text-ink',
    title: '72% — show four or more case studies on the home page',
    text: <>13 of 18 portfolios. Across all 18 the count ranged from 2 to 13. &ldquo;Coming soon&rdquo; cards counted.</>,
  },
];

function Research() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
      <div className="flex flex-col gap-5">
        <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">Research</p>
        <h2 className={h2Class}>
          The goal was to test my choices against what other portfolios do and what a recruiter looks for.
        </h2>
        <p className={bodyText}>
          After launch, on 4 October 2026, I ran 21 portfolios through one checklist. Not all would load, so the counts
          use the ones I could read: 19 for the first two rows and 18 for the third.
        </p>
      </div>

      <div className="lg:col-span-2 flex flex-col gap-5">
        {researchBars.map((bar) => (
          <StatBar key={bar.title} {...bar} />
        ))}
        <div className="flex flex-col gap-2 pt-3">
          <p className="font-grotesk font-bold text-body text-text-brand">What the recruiter told me.</p>
          <p className={cardText}>
            I spoke to a technical recruiter who hires for many different companies. Their advice: do not overload the
            page, make the case studies easy to reach and show a proper tool stack. That confirmed my direction: the
            section menu and the mobile menu were my own idea.
          </p>
        </div>
      </div>
    </div>
  );
}

// ---- 7 · From the first version to the current one ------------------------

// Screenshots for this block are 1200 x 900 WebP, named case-built-with-claude-versions-<id>[-v1|-current].webp.
// `placeholder: true` keeps an image as a dashed placeholder even if a file of that name exists; delete the flag
// when the real screenshot is in src/assets.
const versionAssets = import.meta.glob('../assets/case-built-with-claude-versions-*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});
const versionAsset = (file) => versionAssets[`../assets/${file}`];

const versionItems = [
  {
    id: 'first-screen',
    label: 'First screen',
    kind: 'compare',
    v1: {
      file: 'case-built-with-claude-versions-first-screen-v1.webp',
      name: 'Version 1 first screen',
      alt: 'Version 1 first screen',
      placeholder: true,
    },
    current: {
      file: 'case-built-with-claude-versions-first-screen-current.webp',
      name: 'Current first screen',
      alt: 'Current first screen: “I make complex, data-dense products feel simple…”, Contact me and Download CV',
      placeholder: true,
    },
  },
  {
    id: 'how-i-work',
    label: 'How I work',
    kind: 'compare',
    v1: {
      file: 'case-built-with-claude-versions-how-i-work-v1.webp',
      name: 'Version 1 How I work',
      alt: 'Version 1 How I work: four filled purple cards',
      placeholder: true,
    },
    current: {
      file: 'case-built-with-claude-versions-how-i-work-current.webp',
      name: 'Current How I work',
      alt: 'Current How I work: four light cards with tool icons',
      placeholder: true,
    },
  },
  {
    id: 'experience',
    label: 'Experience',
    kind: 'compare',
    v1: {
      file: 'case-built-with-claude-versions-experience-v1.webp',
      name: 'Version 1 Experience',
      alt: 'Version 1 Experience: a long timeline with every bullet open',
      placeholder: true,
    },
    current: {
      file: 'case-built-with-claude-versions-experience-current.webp',
      name: 'Current Experience',
      alt: 'Current Experience on the About page, with Show more',
      placeholder: true,
    },
  },
  {
    id: 'contact',
    label: 'Contact',
    kind: 'compare',
    v1: {
      file: 'case-built-with-claude-versions-contact-v1.webp',
      name: 'Version 1 separate contact block at the end of the page',
      alt: 'Version 1 separate contact block at the end of the page',
      placeholder: true,
    },
    current: {
      file: 'case-built-with-claude-versions-contact-current.webp',
      name: 'Current footer',
      alt: 'Current footer, the one contact area',
      placeholder: true,
    },
  },
  {
    id: 'ai-designer',
    label: 'AI + Designer',
    kind: 'compare',
    v1: {
      file: 'case-built-with-claude-versions-ai-designer-v1.webp',
      name: 'Version 1 AI + Designer: five steps',
      alt: 'Version 1 AI + Designer: five steps',
      placeholder: true,
    },
    current: {
      file: 'case-built-with-claude-versions-ai-designer-current.webp',
      name: 'Current AI + Designer',
      alt: 'Current AI + Designer: an editor-style window with file-tab cards',
      placeholder: true,
    },
  },
  {
    id: 'toolkit',
    label: 'Toolkit',
    kind: 'compare',
    v1: {
      file: 'case-built-with-claude-versions-toolkit-v1.webp',
      name: 'Version 1 Toolkit: a full list of tools',
      alt: 'Version 1 Toolkit: a full list of tools',
      placeholder: true,
    },
    current: {
      file: 'case-built-with-claude-versions-toolkit-current.webp',
      name: 'Current Toolkit',
      alt: 'Current Toolkit: a Finder-style window with folders and search',
      placeholder: true,
    },
  },
  {
    id: 'about',
    label: 'About',
    kind: 'new',
    image: {
      file: 'case-built-with-claude-versions-about.webp',
      name: 'New About page',
      alt: 'New About page: “Where UX meets engineering”, with a photo',
      placeholder: true,
    },
  },
  {
    id: 'contact-dialog',
    label: 'Contact dialog',
    kind: 'new',
    image: {
      file: 'case-built-with-claude-versions-contact-dialog.webp',
      name: 'New Contact me dialog',
      alt: 'New Contact me dialog: “Let’s talk” with seven ways to reach me',
      placeholder: true,
    },
  },
];

const frameLabel =
  'absolute top-3 inline-flex items-center gap-1.5 rounded-pill border border-border-subtle bg-surface-default px-2.5 py-1 font-mono-bold text-caption-xs uppercase tracking-wider text-text-secondary pointer-events-none';

// One screenshot, or a dashed placeholder while the file is missing or still flagged `placeholder`.
function VersionPicture({ image, side }) {
  const src = image.placeholder ? undefined : versionAsset(image.file);
  if (src) {
    return (
      <img
        src={src}
        alt={image.alt}
        width="1200"
        height="900"
        loading="lazy"
        decoding="async"
        draggable="false"
        className="vc-fill"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${image.name}, screenshot to add`}
      className="absolute inset-0 flex items-center border border-dashed border-text-secondary bg-surface-subtle"
    >
      {/* A compare placeholder keeps its text in its own half, so the v1 and current notes never overlap. */}
      <div
        className={`flex flex-col items-center gap-1 px-4 text-center ${
          side ? 'w-1/2' : 'w-full'
        } ${side === 'current' ? 'ml-auto' : ''}`}
      >
        <span className="font-mono-bold text-caption-xs text-ink">{image.name}</span>
        <span className="font-mono text-caption-xs text-text-secondary">screenshot to add · 1200 × 900</span>
      </div>
    </div>
  );
}

const chipBase =
  'inline-flex items-center gap-1.5 min-h-11 sm:min-h-10 px-3.5 rounded-pill border font-grotesk font-medium text-body whitespace-nowrap cursor-pointer transition-colors motion-reduce:transition-none max-sm:shrink-0 max-sm:snap-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring';
const chipIdle = 'border-border-subtle bg-surface-default text-text-primary hover:border-text-secondary';
const chipActive = 'border-action-primary bg-action-primary text-text-inverse';

function VersionCompare() {
  const [index, setIndex] = useState(0);
  const [pos, setPos] = useState(50);
  const chipRefs = useRef([]);
  const item = versionItems[index];
  const count = versionItems.length;

  const select = (i, focus) => {
    setIndex(i);
    setPos(50);
    const chip = chipRefs.current[i];
    if (!chip) return;
    if (focus) chip.focus({ preventScroll: true });
    chip.scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  const onChipKey = (e) => {
    const next = {
      ArrowRight: (index + 1) % count,
      ArrowDown: (index + 1) % count,
      ArrowLeft: (index + count - 1) % count,
      ArrowUp: (index + count - 1) % count,
      Home: 0,
      End: count - 1,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(next, true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div className="flex min-w-0 flex-col gap-6">
        <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">Version 1 → current</p>
        <h2 className={h2Class}>From the first version to the current one</h2>
        <p className={bodyText}>
          I launched the first version because{' '}
          <strong>sending it with my job applications mattered more to me than perfecting it first.</strong> It opened
          with one featured project, filled purple cards, a testimonial, my full toolkit and a long Experience section.
          It worked, but it read more like a CV than a portfolio, and the work was hard to find. People who looked at it
          said the same. Once I started sending it, I kept changing and polishing it.{' '}
          <strong>The home page now does one job:</strong> it is the starting point, with more cases straight away, no
          filled cards, the essentials and links on to the next pages. Everything about me moved to a new About page.
          The separate contact block is gone: Contact me opens a dialog, and a new footer is the one contact area. The
          interface was refreshed along the way.
        </p>
        <p className={bodyText}>
          I built the core components, colours and tokens in Figma myself.{' '}
          <strong>Claude Design worked from that system and from the first version</strong>, proposing structures and
          new takes on components. I filled them with my content and reworked them, and the edited artboard went to
          Claude Code, usually with a written spec. Not everything stayed: I removed its hero sticky note and
          collaborator cursor, because they cost performance.
        </p>
        <p className="font-grotesk text-body text-text-secondary leading-relaxed">
          Every change had to pass one question: <em>does it help a reviewer reach the work faster?</em>
        </p>
      </div>

      <div className="min-w-0 lg:self-stretch">
        <div className="flex flex-col gap-4 lg:sticky lg:top-24">
          <figure
            id="versions-panel"
            role="tabpanel"
            aria-labelledby={`versions-chip-${item.id}`}
            className="m-0 overflow-hidden rounded-card bg-surface-brand-tint"
          >
            {item.kind === 'compare' ? (
              <div className="vc-frame" style={{ '--p': `${pos}%` }}>
                <VersionPicture image={item.current} side="current" />
                <div className="vc-v1">
                  <VersionPicture image={item.v1} side="v1" />
                </div>
                <span className={`${frameLabel} left-3`} aria-hidden="true">
                  v1
                </span>
                <span className={`${frameLabel} right-3`} aria-hidden="true">
                  current
                </span>
                <span className="vc-line" aria-hidden="true">
                  <span className="vc-knob">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 5L3 9l4 4M11 5l4 4-4 4" />
                    </svg>
                  </span>
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={pos}
                  onChange={(e) => setPos(Number(e.target.value))}
                  className="vc-range"
                  aria-label={`${item.label}: drag or use the arrow keys. Right shows more of version 1.`}
                  aria-valuetext={`${pos} percent of version 1 visible`}
                />
              </div>
            ) : (
              <div className="vc-frame">
                <VersionPicture image={item.image} />
                <span className={`${frameLabel} left-3 text-action-primary`}>
                  <span className="h-1.5 w-1.5 rounded-pill bg-action-primary" aria-hidden="true" />
                  new
                </span>
              </div>
            )}
          </figure>

          <div
            role="tablist"
            aria-label="Compare what changed"
            className="vc-chips flex flex-wrap gap-2 max-sm:-mx-6 max-sm:flex-nowrap max-sm:snap-x max-sm:snap-mandatory max-sm:overflow-x-auto max-sm:scroll-px-6 max-sm:px-6 max-sm:pb-1"
          >
            {versionItems.map((chip, i) => {
              const active = i === index;
              return (
                <button
                  key={chip.id}
                  ref={(el) => (chipRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`versions-chip-${chip.id}`}
                  aria-selected={active}
                  aria-controls="versions-panel"
                  tabIndex={active ? 0 : -1}
                  onClick={() => select(i, false)}
                  onKeyDown={onChipKey}
                  className={`${chipBase} ${active ? chipActive : chipIdle}`}
                >
                  {chip.label}
                  {chip.kind === 'new' && (
                    <span
                      className={`font-mono-bold text-caption-xs uppercase tracking-wider ${
                        active ? 'text-text-inverse' : 'text-action-primary'
                      }`}
                    >
                      new
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- 7b · Information architecture -----------------------------------------

const siteTree = {
  label: 'anastasiiavoskova.com',
  children: [
    // colorIdx pins a branch to its IATree palette entry (0 blue, 1 purple, 2 green, 3 orange, 4 red, 5 grey, 6 teal,
    // 7 yellow), so the branches that were already here keep their colours and each new one gets an unused entry.
    {
      label: 'Home',
      colorIdx: 0,
      children: [
        { label: 'Hero' },
        { label: 'Selected Work' },
        { label: 'Proven Results' },
        { label: 'How I Work' },
        { label: 'My Toolkit' },
        { label: 'What People Say' },
        { label: 'AI + Designer' },
        { label: 'Experience' },
      ],
    },
    {
      label: 'About',
      colorIdx: 6,
      children: [
        { label: 'Hero' },
        { label: 'In Numbers' },
        { label: 'How I Work' },
        { label: 'Experience' },
        { label: 'Education' },
        { label: 'What People Say' },
        { label: 'My Toolkit' },
        { label: 'AI + Designer' },
        { label: 'Photography' },
        { label: 'Right Now' },
      ],
    },
    {
      label: 'Contact dialog',
      colorIdx: 7,
      children: [
        { label: 'Email' },
        { label: 'Copy email address' },
        { label: 'LinkedIn' },
        { label: 'Telegram' },
        { label: 'Behance' },
        { label: 'Instagram' },
        { label: 'Download CV' },
      ],
    },
    {
      label: 'Footer',
      colorIdx: 5,
      children: [
        { label: 'Contact me' },
        { label: 'Copy email' },
        { label: 'Pages' },
        { label: 'Work' },
        { label: 'Social' },
        { label: 'Download CV' },
      ],
    },
    {
      label: 'Portfolio',
      colorIdx: 1,
      children: [
        {
          label: 'Product & UX/UI Design',
          children: [
            { label: 'Farsafe' },
            { label: 'bART Solutions' },
            { label: 'CryptoWallet' },
            { label: 'Online Doctor' },
            { label: 'Enterprise CRM' },
            { label: 'Fitness App' },
            { label: 'Online Payment Solutions' },
            { label: 'SHOOT' },
          ],
        },
        { label: 'Built with Claude', children: [{ label: 'This case study' }] },
        { label: 'Logos & Branding', children: [{ label: 'Coming soon' }] },
      ],
    },
    { label: 'Download CV (PDF)', colorIdx: 2 },
    {
      label: 'Case study page (shared frame)',
      colorIdx: 3,
      children: [
        { label: 'Hero and meta bar' },
        { label: 'Summary cards' },
        { label: 'Project intro' },
        { label: 'Problem and solution' },
        { label: 'Case-specific blocks' },
        { label: 'Key takeaway' },
        { label: 'Next case' },
        { label: 'Contact' },
      ],
    },
    { label: '404 page', colorIdx: 4 },
  ],
};

function InformationArchitecture() {
  return (
    <>
      <h2 className={h2Class}>The site map</h2>
      <p className={bodyText}>
        The header has two pages and one action: <strong>About Me, Portfolio and Contact me</strong>, which opens a
        dialog with every way to reach me. Both Home and About have a side section menu, and its last stop, Contact,
        scrolls to the footer. All nine case studies live on one Portfolio page, one click from anywhere. Every case
        follows the same frame, so a reader who has seen one knows where to look in the next.
      </p>
      <div tabIndex={0} className="rounded-card bg-surface-subtle p-3 sm:p-5 overflow-x-auto">
        <IATree data={siteTree} defaultOpenIndex={0} />
        <p className={`${captionClass} mt-4`}>Click a node to expand or collapse its branch.</p>
      </div>
    </>
  );
}

// ---- 8 · How I worked with Claude Code ------------------------------------

// Five tiles in one row from 1024px. Tile 3 (Build with AI, the Claude Code step) is the lit one in the final state.
const loopSteps = [
  {
    title: 'Frame the problem.',
    text: 'What I am solving, for whom, with what outcome. Wireframes and direction in Figma.',
    tag: 'figma',
  },
  {
    title: 'Turn design into instructions.',
    text: 'Flows, states and edge cases as precise written specs in Markdown.',
    tag: 'spec.md',
  },
  {
    title: 'Build with AI.',
    text: 'Claude Code writes the front end from the specs.',
    tag: 'claude-code',
    lit: true,
  },
  {
    title: 'Put it live.',
    text: 'The result ships as a real URL, so decisions are tested on a working page, not argued over a frame.',
    tag: 'deploy ✓',
  },
  {
    title: 'Test and refine.',
    text: 'People and audits find what I cannot see, and each finding becomes the next prompt.',
    tag: 're-runs',
  },
];

function Loop() {
  const listRef = useRef(null);

  // The tiles light up in turn once, when the block scrolls into view. While it is still below the fold the
  // block is "armed" (all tiles unlit), so there is no visible jump when the run starts. If it is already in view,
  // or motion is reduced, nothing is armed and the final state stays. One observer, one pass, then disconnected.
  useEffect(() => {
    const el = listRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return undefined;
    el.dataset.arm = '';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.run = '';
        observer.disconnect();
      },
      { rootMargin: '0px 0px -20% 0px' },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      delete el.dataset.arm;
      delete el.dataset.run;
    };
  }, []);

  return (
    <>
      <h2 className={h2Class}>My five-step process, applied to this site</h2>
      <p className={bodyText}>
        Design and code ran in parallel, and both were component-led. When a page needed something the component set did
        not cover, I designed that component separately and added it to the project.
      </p>

      <ol
        ref={listRef}
        aria-label="Five steps, run in order; step 5 loops back to step 1"
        className="mt-4 grid list-none grid-cols-1 gap-3 p-0 lg:grid-cols-5"
      >
        {loopSteps.map((step, i) => (
          <li
            key={step.title}
            className={`lp-tile flex flex-col gap-2.5 rounded-panel border-2 border-transparent bg-surface-subtle p-4${
              step.lit ? ' lp-tile--lit' : ''
            }`}
          >
            <span className="font-mono text-caption text-text-secondary">{String(i + 1).padStart(2, '0')}</span>
            <p className={`font-grotesk text-body-lg font-medium leading-snug ${step.lit ? 'text-text-brand' : 'text-ink'}`}>
              {step.title}
            </p>
            <p className="font-grotesk text-body leading-relaxed text-text-primary">{step.text}</p>
            <span className="mt-auto inline-flex w-fit items-center whitespace-nowrap rounded-md bg-surface-default px-2 py-0.5 font-mono text-caption text-text-primary">
              {step.tag}
            </span>
          </li>
        ))}
      </ol>
      <div className="lp-prog hidden lg:block" aria-hidden="true">
        <span className="lp-back">
          <span className="lp-back-head" />
        </span>
      </div>
    </>
  );
}

// ---- 8b · How I checked the output ----------------------------------------

const outputChecks = [
  {
    label: 'Diff',
    title: 'What changed.',
    text: 'Every change was read line by line before commit. A diff shows what a change does, not what it leaves out.',
  },
  {
    label: 'Browser',
    title: 'How it looks.',
    text: 'Each result was opened in the browser to check layout and responsive behaviour, which a diff cannot show.',
  },
  {
    label: 'Lighthouse',
    title: 'How fast and accessible.',
    text: 'PageSpeed Insights showed that the first build was slow (68 on mobile) and that the fixes worked (99).',
  },
  {
    label: 'Linter',
    title: 'What must not come back.',
    text: 'A lint check fails if a raw colour is added, so the design system rule holds even when I am not reading the diff.',
  },
];

function OutputChecks() {
  return (
    <>
      <h2 className={h2Class}>How I checked what Claude Code wrote</h2>
      <p className={bodyText}>Each check catches something the others miss.</p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {outputChecks.map((check) => (
          <div key={check.label} className={`${cardClass} bg-surface-subtle`}>
            <p className={h3Class}>{check.label}</p>
            <p className={cardTitle}>{check.title}</p>
            <p className={cardText}>{check.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// ---- 9 · Design tokens -----------------------------------------------------

const tokenResults = [
  { from: '39', to: '0', label: 'raw colour values outside the case-study palettes' },
  { from: '148', to: '47', label: 'arbitrary font sizes' },
];

// Token examples shown in the two panels below (values are the real ones in src/styles/globals.css).
const figmaPrimitives = [
  { name: 'blue-500', value: '#288FD6', swatch: 'bg-blue-500' },
  { name: 'blue-700', value: '#186A9C', swatch: 'bg-text-brand', active: true },
];
const figmaSemantic = [
  { name: 'text/brand', value: 'blue-700', swatch: 'bg-text-brand', active: true },
  { name: 'surface/subtle', value: 'grey-100', swatch: 'bg-surface-subtle border border-border-subtle' },
];

function ArrowRight({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M3 12h17M14 6l6 6-6 6" />
    </svg>
  );
}

function FigmaRow({ name, value, swatch, active }) {
  return (
    <div className={`flex items-center gap-3 px-5 py-2.5 ${active ? 'bg-surface-brand-tint' : ''}`}>
      <span aria-hidden="true" className={`h-5 w-5 shrink-0 rounded-md ${swatch}`} />
      <span className={`flex-1 font-mono text-body text-text-primary ${active ? 'font-bold' : ''}`}>{name}</span>
      <span className={`font-mono text-caption ${active ? 'text-text-brand' : 'text-text-secondary'}`}>{value}</span>
    </div>
  );
}

function CodeLine({ name, value, active, comment }) {
  if (comment) return <p className="px-4 pt-3 text-data-2">{comment}</p>;
  return (
    <p className={`px-4 py-1 ${active ? 'rounded-md bg-glass-light' : ''}`}>
      <span className="text-blue-500">{name}</span>
      <span className="text-grey-300">: </span>
      <span className="text-text-inverse">{value}</span>
    </p>
  );
}

function Tokens() {
  return (
    <>
      <h2 className={h2Class}>Design tokens: one vocabulary for Figma and code</h2>
      <p className={bodyText}>
        The first build looked consistent by accident. The same text colour was typed out by hand <strong>98 times</strong>,
        the same card radius <strong>82 times</strong> and the same body size <strong>257 times</strong>, and nothing
        stopped the next prompt from typing a slightly different value.
      </p>

      <div className="mt-4 flex flex-col items-stretch gap-5 lg:flex-row">
        <div className="flex-1 overflow-hidden rounded-card border border-border-subtle bg-surface-default shadow-sm">
          <div className="flex items-center justify-between border-b border-border-subtle bg-surface-subtle px-5 py-3">
            <p className="font-grotesk text-body font-bold text-text-primary">Figma · Variables</p>
            <p className="font-mono text-caption text-text-secondary">2 layers</p>
          </div>
          <div className="flex flex-col py-2">
            {figmaPrimitives.map((row) => (
              <FigmaRow key={row.name} {...row} />
            ))}
            <div className="mx-5 my-1 border-t border-border-subtle" />
            {figmaSemantic.map((row) => (
              <FigmaRow key={row.name} {...row} />
            ))}
          </div>
        </div>

        <ArrowRight className="h-6 w-6 shrink-0 rotate-90 self-center text-blue-500 lg:rotate-0" />

        <div className="flex-1 overflow-hidden rounded-card bg-surface-inverse text-text-inverse">
          <div className="flex items-center justify-between border-b border-glass-border px-5 py-3">
            <p className="font-grotesk text-body font-bold">theme.css</p>
            <p className="font-mono text-caption text-grey-300">via Figma MCP</p>
          </div>
          <div className="flex flex-col py-3 font-mono text-caption leading-relaxed">
            <p className="px-4 py-1 text-grey-300">:root {'{'}</p>
            <CodeLine name="--color-blue-500" value="#288FD6;" />
            <CodeLine name="--color-blue-700" value="#186A9C;" active />
            <CodeLine name="--color-text-brand" value="var(--color-blue-700);" active />
            <CodeLine name="--color-surface-subtle" value="var(--color-grey-100);" />
            <p className="px-4 py-1 text-grey-300">{'}'}</p>
            <CodeLine comment="// lint fails if a raw colour is added" />
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-x-10 lg:grid-cols-2">
        <div className="flex flex-col">
          {tokenResults.map((item) => (
            <div key={item.from} className="flex items-center gap-5 border-t border-border-subtle py-5">
              <p className="flex shrink-0 items-center gap-3 font-grotesk text-heading font-bold leading-none">
                <span className="text-text-secondary">{item.from}</span>
                <ArrowRight className="h-5 w-5 text-text-brand" />
                <span className="text-text-brand">{item.to}</span>
              </p>
              <p className={cardText}>{item.label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <p className={`${cardText} border-t border-border-subtle py-5`}>
            I defined the tokens in Figma in two layers, primitives and semantic roles. They first reached the code on 4
            October, after launch, and the migration was finished on 13 October.
          </p>
          <p className={`${cardText} border-t border-border-subtle py-5`}>
            The brand blue (#288FD6) has 3.5:1 contrast on white, so it is never used for text. Text and links use a
            deeper blue (#186A9C, 5.9:1). Colours inside case studies belong to the client&rsquo;s product, so they stay
            outside the system on purpose.
          </p>
        </div>
      </div>

      <ImagePlaceholder
        filename="case-built-with-claude-tokens-structure.png"
        alt="Token structure: raw value, primitive, semantic, in code"
        className="min-h-[420px]"
      />
    </>
  );
}

// ---- 10 · Mistakes worth showing ------------------------------------------

// Shown as a terminal log. The tags are labels, not real commits.
const mistakes = [
  {
    tag: 'TOKENS',
    lead: 'The design system did not reach the code.',
    text: 'The components existed in Figma, but the variables did not carry through, so colours and sizes were hard-coded.',
  },
  {
    tag: 'PERF',
    lead: 'A bundling “fix” I accepted without measuring.',
    text: 'A build setting forced an 847 KB charting library to load on every page, including the home page, where it is not used. I removed it on 4 October.',
  },
  {
    tag: 'SEO',
    lead: 'A placeholder URL went live.',
    text: 'A placeholder from one of my own prompts reached the canonical link and the share tags. The tool did exactly what I asked. I replaced it with the real domain.',
  },
  {
    tag: 'COPY',
    lead: 'The wrong title and the wrong hosting claim.',
    text: 'The page title was still the starter template’s for a while, and one line named the wrong hosting provider. I fixed both in review.',
  },
];

const mistakeNotes = [
  { label: 'Found by the QA tester', text: 'A button I had forgotten to link, and an email form that did not work on Windows.' },
  {
    label: 'Advised by the front-end developer',
    text: 'Run a performance check and optimise loading, which led to the next block.',
  },
];

function Mistakes() {
  return (
    <>
      <h2 className={h2Class}>Not everything Claude Code did was right, and some mistakes were mine</h2>

      <div className="mt-4 overflow-hidden rounded-card bg-surface-inverse text-text-inverse">
        <div className="flex items-center gap-4 border-b border-glass-border px-5 py-4">
          <span aria-hidden="true" className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-data-3" />
            <span className="h-3 w-3 rounded-full bg-data-1" />
            <span className="h-3 w-3 rounded-full bg-data-2" />
          </span>
          <p className="font-mono text-caption text-grey-300">git log --oneline --grep=&quot;fix&quot;</p>
        </div>
        <div className="flex flex-col px-5 py-2 sm:px-8">
          {mistakes.map((item) => (
            <div
              key={item.tag}
              className="flex flex-col gap-2 border-b border-glass-border py-5 last:border-b-0 sm:flex-row sm:gap-6"
            >
              <div className="flex shrink-0 gap-4 font-mono text-caption sm:gap-6">
                <span className="text-blue-500 sm:w-24">{item.tag}</span>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <p className="font-grotesk text-body font-bold text-text-inverse">{item.lead}</p>
                <p className="font-grotesk text-body leading-relaxed text-grey-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
        {mistakeNotes.map((note) => (
          <div key={note.label} className="flex flex-col gap-3 border-t border-border-subtle pt-5">
            <p className="font-mono text-caption uppercase tracking-wider text-text-secondary">{note.label}</p>
            <p className={cardText}>{note.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// ---- 11 · Performance and results -----------------------------------------

const scoreGauges = [
  { value: '99', pct: 99, label: 'Performance' },
  { value: '100', pct: 100, label: 'Accessibility' },
  { value: '100', pct: 100, label: 'Best Practices' },
  { value: '100', pct: 100, label: 'SEO' },
  { value: '3/3', pct: 100, label: 'Agentic browsing' },
];

// Circular score: the ring is drawn from the percentage (circumference of r=40 is about 251).
function ScoreGauge({ value, pct, label }) {
  const circumference = 2 * Math.PI * 40;
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-24 w-24">
        <svg viewBox="0 0 100 100" aria-hidden="true" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r="40" fill="none" strokeWidth="9" className="stroke-track" />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={`${(pct / 100) * circumference} ${circumference}`}
            className={pct < 100 ? 'stroke-blue-500' : 'stroke-text-brand'}
          />
        </svg>
        <p className="absolute inset-0 flex items-center justify-center font-grotesk text-title-md font-bold text-text-brand">
          {value}
        </p>
      </div>
      <p className={`${cardText} text-center`}>{label}</p>
    </div>
  );
}


const pageSpeedMetrics = [
  {
    title: 'Mobile performance',
    max: 100,
    bars: [
      { label: '68', value: 68, before: true },
      { label: '99', value: 99 },
    ],
    text: 'PageSpeed Insights, mobile, 19 October.',
  },
  {
    title: 'Largest contentful paint',
    lowerIsBetter: true,
    max: 6,
    bars: [
      { label: '5.2 s', value: 5.2, before: true },
      { label: '1.8 s', value: 1.8 },
    ],
    text: 'PageSpeed Insights, 19 October.',
  },
];

const localMetrics = [
  {
    title: 'First paint',
    lowerIsBetter: true,
    max: 3,
    bars: [
      { label: '2.41 s', value: 2.41, before: true },
      { label: '2.07 s', value: 2.07 },
    ],
    text: 'First paint came sooner.',
  },
  {
    title: 'Blocking time',
    lowerIsBetter: true,
    max: 400,
    bars: [
      { label: '374 ms', value: 374, before: true },
      { label: '290 ms', value: 290 },
    ],
    text: 'Blocking time fell.',
  },
  {
    title: 'Main script',
    lowerIsBetter: true,
    max: 500,
    bars: [
      { label: '495 KB', value: 495, before: true },
      { label: '324 KB', value: 324 },
    ],
    text: 'The main script shrank.',
  },
];

const audienceStats = [
  { label: 'Visitors', value: '3,281' },
  { label: 'Page views', value: '5,940' },
  { label: 'From LinkedIn', value: '~2,700' },
];

// value is the label shown; count is the number the bar is drawn from (3.1K is 3,100).
const pageVisits = [
  { name: 'Home', value: '3.1K', count: 3100 },
  { name: 'Portfolio', value: '637', count: 637 },
  { name: 'About', value: '294', count: 294 },
];
const caseVisits = [
  { name: 'Farsafe · featured', value: '544', count: 544, strong: true },
  { name: 'bART Solutions', value: '68', count: 68 },
  { name: 'Online Doctor', value: '52', count: 52 },
  { name: 'CryptoWallet', value: '47', count: 47 },
];

function BarPanel({ label, rows }) {
  const max = Math.max(...rows.map((row) => row.count));
  return (
    <div className="flex flex-col gap-4 px-5 py-5 md:px-8">
      <p className="font-mono text-caption uppercase tracking-wider text-text-secondary">{label}</p>
      {rows.map((row, i) => (
        <div key={`${row.name}-${i}`} className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between gap-4">
            <p className={cardText}>{row.name}</p>
            <p className="font-grotesk text-body font-bold text-text-primary">{row.value}</p>
          </div>
          <div className="h-1.5 rounded-full bg-track">
            <div
              className={`h-full rounded-full ${row.strong ? 'bg-text-brand' : 'bg-blue-500'}`}
              style={{ width: `${(row.count / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function Results() {
  return (
    <>
      <h2 className={h2Class}>From 68 to 99 on mobile, and who arrived</h2>

      <h3 className={h3Class}>Performance</h3>
      <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
        <p className={cardText}>
          The first score was 68 on mobile, with a largest contentful paint of 5.2 s. Removing the forced chunk preload,
          self-hosting the fonts and compressing the images took it to 95 and 2.5 s (PageSpeed Insights, 4 October).
        </p>
        <p className={cardText}>
          A second pass split the below-the-fold sections and the animation library out of the entry bundle and loaded
          them when the browser is idle. In a controlled local comparison, five runs each, first paint came sooner (2.41
          s → 2.07 s), blocking time fell (374 → 290 ms) and the main script shrank from 495 to 324 KB. Largest
          contentful paint did not improve, and I did not claim otherwise.
        </p>
      </div>

      <div className="mt-2 overflow-hidden rounded-card border border-border-subtle bg-surface-default shadow-sm">
        <div className="flex items-center justify-between gap-4 border-b border-border-subtle bg-surface-subtle px-5 py-4 md:px-8">
          <p className="font-grotesk text-body font-bold text-text-primary">PageSpeed Insights · mobile</p>
          <p className="font-mono text-caption uppercase tracking-wider text-text-brand">19 October</p>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 px-5 py-8 sm:grid-cols-3 md:grid-cols-5 md:px-8">
          {scoreGauges.map((gauge) => (
            <div key={gauge.label} className="flex justify-center last:col-span-2 sm:last:col-span-1">
              <ScoreGauge {...gauge} />
            </div>
          ))}
        </div>
        <p className={`${cardText} border-t border-border-subtle px-5 py-4 text-text-secondary md:px-8 [&>strong]:font-bold [&>strong]:text-text-primary`}>
          Final result after several runs. Scores vary slightly from run to run.
        </p>
      </div>

      <MetricList metrics={pageSpeedMetrics} markerName="Before" />
      <p className={captionClass}>Controlled local comparison, five runs each</p>
      <MetricList metrics={localMetrics} markerName="Before" />

      <ImagePlaceholder
        filename="case-built-with-claude-results-psi.png"
        alt="PageSpeed Insights, mobile, 19 October 2026: 99 performance, 100 accessibility, 100 best practices, 100 SEO, Agentic browsing 3/3"
        className="min-h-[320px]"
      />

      <h3 className={`${h3Class} mt-4`}>Who arrived</h3>
      <p className={bodyText}>
        Vercel Analytics, as of 19 October: <strong>3,281 visitors</strong> and <strong>5,940 page views</strong>. About
        2,700 visitors came from LinkedIn, where I announced the site, which is over 80% of the total.
      </p>

      <div className="overflow-hidden rounded-card border border-border-subtle bg-surface-default shadow-sm">
        <div className="flex items-center justify-between gap-4 border-b border-border-subtle bg-surface-subtle px-5 py-4 md:px-8">
          <p className="font-grotesk text-body font-bold text-text-primary">anastasiiavoskova.com · Analytics</p>
          <p className="font-mono text-caption uppercase tracking-wider text-text-secondary">launch → 19 Oct</p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-border-subtle border-b border-border-subtle sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {audienceStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 px-5 py-5 md:px-8">
              <p className="font-mono text-caption uppercase tracking-wider text-text-secondary">{stat.label}</p>
              <p className="font-grotesk text-heading font-bold leading-none text-text-brand">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 divide-y divide-border-subtle md:grid-cols-2 md:divide-x md:divide-y-0">
          <BarPanel label="Pages" rows={pageVisits} />
          <BarPanel label="Case studies" rows={caseVisits} />
        </div>
      </div>

      <div className="flex items-center gap-4 border-t border-border-subtle pt-5">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 shrink-0 text-text-brand">
          <path d="m3 17 6-6 4 4 8-8M15 7h6v6" />
        </svg>
        <p className="font-grotesk text-body-lg font-medium text-text-primary">
          Interview invitations followed, and their number has kept growing.
        </p>
      </div>

      <ImagePlaceholder
        filename="case-built-with-claude-results-analytics.png"
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
  { id: 'research', label: 'Research', bare: true, content: <Research /> },
  { id: 'versions', label: 'Version 1 → current', bare: true, content: <VersionCompare /> },
  { id: 'ia', label: 'Information Architecture', content: <InformationArchitecture /> },
  { id: 'loop', label: 'How I Worked with Claude Code', content: <Loop /> },
  { id: 'checks', label: 'How I Checked the Output', content: <OutputChecks /> },
  { id: 'tokens', label: 'Design System', content: <Tokens /> },
  { id: 'mistakes', label: 'Mistakes', content: <Mistakes /> },
  { id: 'results', label: 'Results', content: <Results /> },
  { id: 'build-log', label: 'Build log', content: <BuildLog /> },
];

export default function BuiltWithClaudeCase() {
  return <CaseLayout project={project} sections={sections} keyTakeaway={keyTakeaway} caseId="built-with-claude" />;
}
