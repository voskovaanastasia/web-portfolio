import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import SectionMenu from '../components/SectionMenu';
import IATree from '../components/IATree';
import { ProblemSolution, ImagePlaceholder, StyleGuide } from '../components/CaseLayout';
import caseBart from '../assets/case-bart.png';
import toolFigma from '../assets/icon-figma.svg';
import toolJira from '../assets/icon-jira.svg';
import toolNotion from '../assets/icon-notion.svg';

const caseSections = [
  { id: 'case-hero', label: 'Back to Top' },
  { id: 'intro', label: 'Project Intro' },
  { id: 'problem', label: 'Problem & Solution' },
  { id: 'goals', label: 'Project Goals' },
  { id: 'research', label: 'User Research' },
  { id: 'poll', label: 'The Poll' },
  { id: 'persona', label: 'User Persona' },
  { id: 'ia', label: 'Information Architecture' },
  { id: 'menu', label: 'Navigation & Menu' },
  { id: 'pages', label: 'Website Pages' },
  { id: 'style', label: 'Colors & Typography' },
  { id: 'analytics', label: 'Post-Launch Analytics' },
];

const styleGuide = {
  heading: 'One confident yellow against near-black',
  body: (
    <>
      Selective Yellow carries the brand and every call to action, and it is the only warm colour
      on the page &mdash; against near-black and generous white space it marks exactly where to
      look next without a second competing accent.{' '}
      <strong>Congo Pink and Malachite are reserved for form validation</strong>, errors and
      confirmations, so feedback never borrows the brand colour and stays unambiguous. Poppins
      gives headings the geometric weight an agency site needs while staying readable in body copy.
    </>
  ),
  colors: [
    { name: 'Selective Yellow', hex: '#FABA02', text: '#22292f' },
    { name: 'White', hex: '#FFFFFF', text: '#22292f' },
    { name: 'Congo Pink', hex: '#FF7F7E', text: '#ffffff' },
    { name: 'Malachite', hex: '#20BF55', text: '#22292f' },
    { name: 'Nero', hex: '#212121', text: '#ffffff' },
  ],
  // Tint ramp built from Selective Yellow — surfaces, states, and chart fills.
  scale: [
    '#4A3B0A',
    '#6B5610',
    '#8D7217',
    '#C09B1C',
    '#FABA02',
    '#FBC93A',
    '#FBDA7E',
    '#FCE9B4',
    '#FDF5E0',
  ],
  typeface: {
    name: 'Poppins',
    hex: '#FABA02',
    text: '#22292f',
    weights: ['Regular', 'Medium', 'Semi Bold', 'Bold', 'Extra Bold'],
  },
  image: 'case-bart-style.png',
};

const websitePages = [
  {
    title: 'Landing Page',
    image: 'case-bart-page-landing.png',
    blocks: [
      {
        heading: 'Hero Section',
        text: (
          <>
            The headline &rdquo;THE ART OF SOFTWARE DEVELOPMENT&rdquo; works as both a{' '}
            <strong>brand statement and value proposition</strong> in one. &rdquo;ART&rdquo;
            doubling as a company name and philosophy creates an instant emotional hook. Trust
            badges in the first viewport eliminate early objections before the user starts
            scrolling.
          </>
        ),
      },
      {
        heading: 'Our Developers',
        text: (
          <>
            Surfacing the actual team is a deliberate{' '}
            <strong>trust-building product decision.</strong> Each card exposes photo, name,
            role, stack, and seniority — turning an abstract &rdquo;we have experts&rdquo; claim
            into <strong>verifiable, human proof.</strong> The slider scales the pattern across
            profiles without breaking page rhythm.
          </>
        ),
      },
      {
        heading: 'Our Clients',
        text: (
          <>
            A logo row operates as <strong>passive social proof:</strong> no copy needed. The
            brain processes brand recognition instantly, and the minimal layout ensures logos
            carry full visual weight — <strong>letting familiarity do the persuasion work.</strong>
          </>
        ),
      },
      {
        heading: 'Core Competencies',
        text: (
          <>
            Development, Integration, and Consulting are surfaced early as{' '}
            <strong>scannable decision anchors</strong> helping visitors self-identify their
            entry point before reaching the detailed service list below.
          </>
        ),
      },
      {
        heading: 'Services',
        text: (
          <>
            The eight-card grid applies a <strong>parallel content structure:</strong> same label
            + value proposition format across every card, creating a rhythm that lets users
            compare offerings at a glance. <strong>The layout itself communicates parity.</strong>
          </>
        ),
      },
      {
        heading: 'Technologies',
        text: (
          <>
            The tabbed filter is a <strong>progressive disclosure pattern</strong> that serves
            both audiences at once: a clean overview for non-technical stakeholders, full stack
            depth for technical buyers in one click.
          </>
        ),
      },
      {
        heading: 'Expertise',
        text: (
          <>
            Naming six specific industries triggers an instant <strong>pattern-match:</strong>{' '}
            &rdquo;they&rsquo;ve done this in my field&rdquo; — one of the fastest ways to{' '}
            <strong>reduce perceived risk</strong> in a B2B decision.
          </>
        ),
      },
      {
        heading: 'Client Success Stories',
        text: (
          <>
            The <strong>problem &rarr; solution &rarr; result</strong> card format grounds
            abstract capabilities in real outcomes. A project photo, tags, and headline give
            immediate context. The slider signals more proof exists beyond what&rsquo;s visible —{' '}
            <strong>depth without overwhelm.</strong>
          </>
        ),
      },
      {
        heading: 'Footer',
        text: (
          <>
            By the time a user reaches the footer, the decision is near-made. Direct contact
            paths, certification badges, and structured navigation answer the{' '}
            <strong>practical next-step questions</strong> a converted lead actually has —
            functional closure, not more marketing.
          </>
        ),
      },
    ],
  },
  {
    title: 'Blog Page',
    image: 'case-bart-page-blog.png',
    blocks: [
      {
        heading: 'Search + Filter Tabs',
        text: (
          <>
            A centered search bar combined with <strong>category pills</strong> gives users two
            parallel entry paths: exploratory (browsing by topic) and intentional (knowing what
            they want). The active tab highlighted in yellow <strong>anchors attention</strong>{' '}
            without overloading the eye. Ghost-state tabs keep the interface quiet until chosen.
          </>
        ),
      },
      {
        heading: '3-Column Article Grid',
        text: (
          <>
            Every card follows an identical anatomy — cover image &rarr; tags &rarr; headline
            &rarr; author + read time. This <strong>parallel content structure</strong> removes
            the need to &rdquo;learn&rdquo; each card. The brain scans rhythmically, not
            randomly. Twelve posts per page maintains density without pagination anxiety.
          </>
        ),
      },
      {
        heading: 'Article Card Anatomy',
        text: (
          <>
            Tags sit above the headline — a deliberate <strong>progressive disclosure move:</strong>{' '}
            topic first, commitment second. The author avatar and read time at the bottom answer
            the two implicit questions every reader has before clicking: who wrote this and how
            long will it take.
          </>
        ),
      },
      {
        heading: 'Our Authors',
        text: (
          <>
            Surfacing real authors with bios and dedicated pages mirrors the developer section
            on the landing page. It&rsquo;s a <strong>deliberate humanization pattern:</strong>{' '}
            converting abstract expertise into named, credible individuals. The &rdquo;Go to
            Author Page&rdquo; CTA extends the relationship beyond the article.
          </>
        ),
      },
    ],
  },
  {
    title: 'Service Page',
    image: 'case-bart-page-service.png',
    blocks: [
      {
        heading: 'Services We Provide',
        text: (
          <>
            <strong>3-Column Grid</strong> Three service columns with equal visual weight create
            a <strong>scannable decision matrix.</strong> Each card follows the same label +
            description pattern, letting the user self-identify their need without reading
            everything. The two additional sub-cards below extend the list without breaking the
            grid rhythm — depth without visual overload.
          </>
        ),
      },
      {
        heading: 'Advantages of Bespoke CRM',
        text: (
          <>
            A two-column layout with short titled paragraphs acts as a{' '}
            <strong>fast-read value stack.</strong> No icons, no illustrations — pure copy
            confidence. This signals that the product sells itself on substance, not decoration.
            Each advantage is written as a standalone claim, making the section{' '}
            <strong>skimmable in under 10 seconds.</strong>
          </>
        ),
      },
      {
        heading: 'Development Process',
        text: (
          <>
            The tabbed process section is a <strong>progressive disclosure pattern</strong> that
            respects both audiences: a non-technical stakeholder sees a clean step overview, a
            technical buyer clicks deeper into each phase. The numbered steps with short labels
            reduce a complex process to a <strong>predictable, trustworthy sequence.</strong>
          </>
        ),
      },
      {
        heading: 'What Our Clients Say',
        text: (
          <>
            Two testimonials side-by-side with avatar, name, and platform badge — the badge is
            the <strong>trust multiplier.</strong> Anyone can write a quote; a verified platform
            rating makes it accountable. The slider signals more social proof exists beyond
            what&rsquo;s visible.
          </>
        ),
      },
      {
        heading: 'Client Success Stories',
        text: (
          <>
            A full-width project card with cover image, category tags, headline, and &rdquo;Read
            More&rdquo; CTA follows the <strong>problem &rarr; solution &rarr; result</strong>{' '}
            storytelling frame. The image provides immediate industry context before the user
            reads a single word.
          </>
        ),
      },
      {
        heading: 'Our Tech Stack — Tabbed Filter',
        text: (
          <>
            Technology logos grouped by category (languages, frameworks, databases) with a
            tabbed filter serve a <strong>dual-audience purpose:</strong> non-technical clients
            see breadth, technical buyers verify specific tools. Logos carry more credibility
            than text lists — <strong>recognition beats reading.</strong>
          </>
        ),
      },
      {
        heading: 'Industries We Work With',
        text: (
          <>
            Six industry cards with cover photos and labels work as{' '}
            <strong>pattern-match triggers</strong> — &rdquo;they&rsquo;ve done this in my
            field.&rdquo; It&rsquo;s one of the fastest ways to reduce perceived risk in a B2B
            decision. The image-first layout lets familiarity do the persuasion before the label
            is even read.
          </>
        ),
      },
      {
        heading: 'Why Choose bArt Solutions',
        text: (
          <>
            Four benefit blocks with icons and short paragraphs form a{' '}
            <strong>compact objection-handling grid.</strong> Each block addresses a silent
            question the buyer already has — reliability, speed, communication, quality. The
            section doesn&rsquo;t sell features; it <strong>removes hesitation.</strong>
          </>
        ),
      },
      {
        heading: 'Our Cooperation Models',
        text: (
          <>
            Three engagement models (Fixed Price, Time &amp; Material, Dedicated Team) laid out
            side by side let the user <strong>self-select their risk tolerance.</strong>{' '}
            Presenting all three simultaneously eliminates the &rdquo;what if I choose
            wrong&rdquo; anxiety — transparency here is a conversion tool.
          </>
        ),
      },
      {
        heading: 'FAQ',
        text: (
          <>
            An accordion-style FAQ placed just before the CTA is a{' '}
            <strong>last-mile objection handler.</strong> By the time a user reaches this point,
            they&rsquo;re nearly decided — the FAQ removes the final friction points before
            committing. Collapsed answers keep the page clean; expanded answers go as deep as
            needed.
          </>
        ),
      },
    ],
  },
];

function PagesSlider({ pages }) {
  const [index, setIndex] = useState(0);
  const page = pages[index];
  const prev = () => setIndex((index - 1 + pages.length) % pages.length);
  const next = () => setIndex((index + 1) % pages.length);

  const arrowClass =
    'w-11 h-11 rounded-full border border-[#e2e2e2] flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-colors';

  return (
    <>
      <div className="flex items-center justify-between gap-6 flex-wrap">
        <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
          {page.title}
        </h2>
        <div className="flex items-center gap-3">
          <span className="font-grotesk text-sm text-[#6b6a67] mr-1">
            {index + 1} / {pages.length}
          </span>
          <button type="button" onClick={prev} aria-label="Previous page" className={arrowClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="m14 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" onClick={next} aria-label="Next page" className={arrowClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="m10 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-4">
        <div className="flex flex-col gap-7">
          {page.blocks.map((block) => (
            <div key={block.heading} className="flex flex-col gap-2">
              <p className="font-grotesk font-bold text-base text-black">{block.heading}</p>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed [&_strong]:font-bold [&_strong]:text-[#4274C1]">
                {block.text}
              </p>
            </div>
          ))}
        </div>
        <ImagePlaceholder filename={page.image} className="min-h-[560px] lg:min-h-[720px]" />
      </div>
    </>
  );
}

const launchMetrics = [
  {
    title: 'Bounce Rate',
    color: '#f2c94c',
    bars: [
      { label: '68', value: 68, before: true },
      { label: '41', value: 41 },
    ],
    text: (
      <>
        Dropped from 68% to <strong>41%</strong> — users who previously left without interacting
        now stay and explore. A direct outcome of restructured information architecture and
        clearer entry points.
      </>
    ),
  },
  {
    title: 'Pages per Session',
    color: '#6abf69',
    bars: [
      { label: '1.8', value: 1.8, before: true },
      { label: '3.2', value: 3.2 },
    ],
    text: (
      <>
        Increased from 1.8 to <strong>3.2</strong> — visitors navigate deeper into the site,
        discovering services and case studies that were previously buried.
      </>
    ),
  },
  {
    title: 'Average Session Duration',
    color: '#ee8585',
    bars: [
      { label: '1m 12s', value: 72, before: true },
      { label: '2m 48s', value: 168 },
    ],
    text: (
      <>
        Up from 1m 12s to <strong>2m 48s</strong> — a signal that content hierarchy now matches
        user intent. People find what they came for and keep reading.
      </>
    ),
  },
  {
    title: 'Contact Form Submissions',
    color: '#4d8fd1',
    bars: [{ label: '+74%', value: 100 }],
    text: (
      <>
        Increased by <strong>+74%</strong> — the most direct conversion signal. Optimised CTA
        placement and reduced form friction translated into measurable business impact.
      </>
    ),
  },
  {
    title: 'Return Visit Rate',
    color: '#a077e0',
    bars: [
      { label: '18%', value: 18, before: true },
      { label: '31%', value: 31 },
    ],
    text: (
      <>
        Grew from 18% to <strong>31%</strong> — aligning with the poll finding that 68% of users
        said they would return to an updated website.
      </>
    ),
  },
];

const surveyResults = [
  {
    color: '#f2c94c',
    bars: [
      { label: '38', value: 38, before: true },
      { label: '81', value: 81 },
    ],
    title: '"I immediately understand what this company does"',
    text: (
      <>
        Before: 38% agreed &rarr; After: <strong>81% agreed</strong> Directly addresses the
        pre-launch finding where 62% struggled to grasp the service offer at first glance.
      </>
    ),
  },
  {
    color: '#6abf69',
    bars: [
      { label: '26', value: 26, before: true },
      { label: '79', value: 79 },
    ],
    title: '"Navigation feels clear and easy to use"',
    text: (
      <>
        Before: 26% agreed &rarr; After: <strong>79% agreed</strong> Closes the loop on the 74%
        who reported navigation required extra effort before the redesign.
      </>
    ),
  },
  {
    color: '#ee8585',
    bars: [
      { label: '42', value: 42, before: true },
      { label: '88', value: 88 },
    ],
    title: '"The website looks modern and professional"',
    text: (
      <>
        Before: 42% agreed &rarr; After: <strong>88% agreed</strong> Validates the visual
        refresh — the 58% who described the old design as outdated now see a brand that matches
        the company&rsquo;s expertise level.
      </>
    ),
  },
];

const researchStats = [
  {
    pct: 62,
    color: '#f2c94c',
    text: (
      <>
        <strong>62%</strong> of respondents found it difficult to understand what services the
        company offers at first glance — a direct signal of a{' '}
        <strong>broken information hierarchy.</strong>
      </>
    ),
  },
  {
    pct: 74,
    color: '#6abf69',
    text: (
      <>
        <strong>74%</strong> noted that the navigation required extra effort to find needed
        information — confirming the need for a <strong>full structural redesign.</strong>
      </>
    ),
  },
  {
    pct: 58,
    color: '#ee8585',
    text: (
      <>
        <strong>58%</strong> described the visual design as outdated and not reflecting the
        company&rsquo;s expertise level — validating the need for a{' '}
        <strong>complete visual refresh.</strong>
      </>
    ),
  },
];

function Donut({ segments, hollowSize = '32%' }) {
  const options = {
    colors: segments.map((s) => s.color),
    chart: { type: 'radialBar', sparkline: { enabled: true } },
    plotOptions: {
      radialBar: {
        track: { background: '#ececec' },
        dataLabels: { show: false },
        hollow: { margin: 0, size: hollowSize },
      },
    },
    grid: { show: false, padding: { left: 2, right: 2, top: -23, bottom: -20 } },
    labels: segments.map((s) => s.label),
    legend: { show: false },
    tooltip: { enabled: true, x: { show: false } },
    yaxis: { show: false, labels: { formatter: (value) => `${value}%` } },
  };

  return (
    <Chart
      options={options}
      series={segments.map((s) => s.value)}
      type="radialBar"
      height={350}
      width="100%"
    />
  );
}

function DonutStat({ pct, color }) {
  const r = 60;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 160 160" className="w-40 h-40">
      <circle cx="80" cy="80" r={r} fill="none" stroke="#e3e3e3" strokeWidth="26" />
      <circle
        cx="80"
        cy="80"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="26"
        strokeLinecap="round"
        strokeDasharray={`${(pct / 100) * c} ${c}`}
        transform="rotate(-90 80 80)"
      />
      <text
        x="80"
        y="80"
        textAnchor="middle"
        dominantBaseline="central"
        className="font-grotesk"
        fontSize="30"
        fontWeight="700"
        fill="#000"
      >
        {pct}%
      </text>
    </svg>
  );
}

function MetricBars({ bars, color }) {
  const max = Math.max(...bars.map((b) => b.value));
  return (
    <div className="flex items-end justify-center gap-4 h-44">
      {bars.map((bar) => (
        <div
          key={bar.label}
          className="w-16 rounded-[14px] flex items-end justify-center pb-3"
          style={{
            height: `${(bar.value / max) * 100}%`,
            backgroundColor: bar.before ? '#e3e3e3' : color,
          }}
        >
          <span className="font-grotesk font-bold text-sm text-black">{bar.label}</span>
        </div>
      ))}
    </div>
  );
}

const iaTree = {
  label: 'bART Solutions',
  children: [
    {
      label: 'Services',
      children: [
        { label: 'Custom Software Development' },
        { label: 'Web Development' },
        { label: 'Mobile Development' },
        { label: 'Testing & QA' },
        { label: 'UI/UX Design' },
        { label: 'Application Modernization Services' },
        { label: 'Dedicated Development Team' },
        { label: 'AI Development' },
        { label: 'Product Discovery' },
        { label: 'IT Consulting' },
        { label: 'Microsoft Software Development' },
        { label: 'CRM Development' },
        { label: 'Business Intelligence and Analytics' },
        { label: 'MVP Development' },
        { label: 'Marketplace Development' },
        { label: 'Data Analytics' },
        { label: 'VR Development' },
        { label: 'Game Development' },
      ],
    },
    {
      label: 'Expertise',
      children: [
        { label: 'FinTech' },
        { label: 'Real Estate' },
        { label: 'Hospitality & Travel' },
        { label: 'Wellness and Fitness' },
        { label: 'Healthcare' },
        { label: 'Transportation and Logistics' },
        { label: 'E-commerce' },
        { label: 'Education' },
        { label: 'Construction' },
      ],
    },
    {
      label: 'Our Work',
      children: [
        { label: 'Search' },
        { label: 'Category' },
        { label: 'Cases', children: [{ label: 'Case study detail page' }] },
      ],
    },
    {
      label: 'Blog',
      children: [
        { label: 'Search' },
        { label: 'Category' },
        { label: 'Blogs', children: [{ label: 'Article listing' }] },
        { label: 'Our Authors', children: [{ label: 'Article listing' }] },
      ],
    },
    {
      label: 'News',
      children: [{ label: 'Search' }, { label: 'News' }],
    },
    {
      label: 'About',
      children: [
        { label: 'Company' },
        { label: 'Our story' },
        { label: 'Our strength' },
        { label: 'What our clients say' },
        { label: 'Our mission' },
        { label: 'Team' },
        { label: 'Work at bART' },
        { label: 'Open positions' },
      ],
    },
    {
      label: 'For Start-ups',
      children: [{ label: 'Our developers' }],
    },
  ],
};

const project = {
  heroImage: caseBart,
  name: 'bART Solutions',
  title: 'Corporate Website Redesign & Design System',
  tags: [
    'Corporate Website',
    'Web',
    'UX Research',
    'Information Architecture',
    'Design System',
  ],
  meta: [
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Service', value: 'UX/UI Design · Design System' },
    { label: 'My Team', value: 'Product Managers, Developers, Marketing Department, Copywriter' },
    { label: 'Timeline', value: '10 months, 2024' },
  ],
  tools: [
    { icon: toolFigma, label: 'Figma' },
    { icon: toolJira, label: 'Jira' },
    { icon: toolNotion, label: 'Notion' },
  ],
  summary: [
    {
      label: 'PROBLEM',
      text: 'A brand-strong site that people could not navigate — services were unreadable at a glance and the structure had outgrown itself.',
    },
    {
      label: 'MY ROLE',
      text: 'UX/UI Designer - research, information architecture, UI, and the design system.',
    },
    {
      label: 'KEY DECISION',
      text: 'Split navigation along two mental models: visitors hunting for a service, and visitors validating industry fit first.',
    },
  ],
  outcome: { value: '68% → 41%', label: 'Bounce Rate' },
  intro: {
    heading: 'A corporate site rebuilt around how people actually use it.',
    body: (
      <>
        <strong>bART Solutions</strong> is a software development agency with a strong brand and a website that had stopped keeping up with it. I rebuilt it end to end — UX research and user surveys, a reworked information architecture, a scalable design system, and the final UI.
        The visual direction came from the client's references. Everything underneath it — navigation logic, content structure, key interaction flows — was rebuilt around what research showed people actually came to do.
        The core challenge:{' '}
        <strong>translating a strong brand vision into a structure that is easy to navigate and ready to grow.</strong> 
      </>
    ),
  },
  problem: {
    image: 'case-bart-problem.png',
    heading: 'A brand-strong site that is hard to move through',
    body: 'The site looked the part but did not work for the people using it. Navigation did not match how visitors actually searched. The information architecture had grown tangled and could no longer absorb new services without breaking. Key flows carried friction that had no reason to be there. Surveys and interviews surfaced two things at once: where users got lost, and what they had come to do. The existing structure supported neither.',
    why: 'A corporate site is usually the first impression and the main path to action. When visitors cannot find what they need or cannot read the company`s credibility off the page, they leave — and the brands strongest asset quietly works against it.',
  },
  solution: {
    image: 'case-bart-solution.png',
    heading: 'Research-led structure inside a cohesive brand',
    body: 'I ran a full cycle grounded in research. Surveys and interview findings shaped a reworked navigation and a cleaner, scalable information architecture, and key interaction flows were streamlined around real user goals. A design system built to the client`s visual direction kept every page consistent and easy to extend.',
    scenario: 'The target: a visitor lands anywhere on the site, immediately understands where they are and where to go next, and completes what they came to do — while the client gains a system they can grow without breaking.',
  },
};

export default function BartCase() {
  useEffect(() => {
    document.title = `${project.name} — Anastasiia Voskova`;
    return () => {
      document.title = 'Anastasiia Voskova';
    };
  }, []);

  return (
    <main className="flex flex-col bg-white">
      <SectionMenu sections={caseSections} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* Hero image */}
        <div id="case-hero" className="pt-4">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full max-w-[1058px] mx-auto h-auto max-h-[600px] aspect-[1058/600] rounded-[24px] object-cover"
          />
        </div>

        {/* Back link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-3 mt-10 font-grotesk font-medium text-base text-black hover:text-[#288fd6] transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M9 14 4 9l5-5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 9h11a5 5 0 0 1 5 5v6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Works
        </Link>

        {/* Title */}
        <h1 className="font-grotesk font-medium text-4xl sm:text-5xl lg:text-[56px] text-black tracking-tight leading-tight mt-8 max-w-3xl">
          {project.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2.5 mt-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-[#f2f3f5] rounded-full font-grotesk font-medium text-sm text-[#22292f]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta bar */}
        <div className="bg-[#f7f7f7] rounded-[24px] p-5 mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {project.meta.map((item) => (
            <div key={item.label} className="flex flex-col gap-3">
              <p className="font-grotesk text-base text-[#6b6a67]">{item.label}</p>
              <p className="font-grotesk font-medium text-base text-black whitespace-pre-line">
                {item.value}
              </p>
            </div>
          ))}
          <div className="flex flex-col gap-3">
            <p className="font-grotesk text-base text-[#6b6a67]">Tools</p>
            <div className="flex gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool.label}
                  title={tool.label}
                  className="bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-sm"
                >
                  <img src={tool.icon} alt={tool.label} className="w-5 h-5 object-contain" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {project.summary.map((card) => (
            <div
              key={card.label}
              className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-4"
            >
              <p className="font-grotesk text-sm text-[#6b6a67] uppercase tracking-wide">{card.label}</p>
              <p className="font-grotesk text-base text-black leading-relaxed">{card.text}</p>
            </div>
          ))}
          <div className="bg-[#e9f3fa] rounded-[24px] p-5 flex flex-col gap-3">
            <p className="font-grotesk text-sm text-[#6b6a67] uppercase tracking-wide">OUTCOME</p>
            <p className="font-grotesk font-bold text-5xl text-black">{project.outcome.value}</p>
            <p className="font-grotesk text-base text-black">{project.outcome.label}</p>
          </div>
        </div>

        {/* Project intro */}
        <section id="intro" className="py-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <p className="font-mono-bold text-base text-black">PROJECT INTRO</p>
            <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
              {project.intro.heading}
            </h2>
            <p className="font-grotesk text-base text-[#393939] leading-relaxed [&>strong]:text-black [&>strong]:font-bold">
              {project.intro.body}
            </p>
          </div>
          <ImagePlaceholder filename="case-bart-intro.png" className="min-h-[420px]" />
        </section>

        {/* Problem & solution */}
        <ProblemSolution problem={project.problem} solution={project.solution} />

        {/* Project goals */}
        <section id="goals" className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Project Goals</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="#288fd6" strokeWidth="1.8" className="w-8 h-8">
                <path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5V4l-6 2.5L9 4z" strokeLinejoin="round" />
                <path d="M9 4v13M15 6.5v13" />
              </svg>
              <p className="font-grotesk font-bold text-base text-black">
                Improve Navigation Clarity
              </p>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed">
                Restructure the information architecture to reduce user drop-off — making it
                easier to find services, cases, and contact information in fewer clicks.
              </p>
            </div>
            <div className="bg-[#288fd6] rounded-[24px] p-5 flex flex-col gap-4 text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
                <path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-1.8 0-1.4-1.5-1.6-1.5-2.7 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4-4-7-9-7z" strokeLinejoin="round" />
                <circle cx="8" cy="10" r="1.1" fill="currentColor" stroke="none" />
                <circle cx="12" cy="7.5" r="1.1" fill="currentColor" stroke="none" />
                <circle cx="16" cy="10" r="1.1" fill="currentColor" stroke="none" />
              </svg>
              <p className="font-grotesk font-bold text-base">Refresh the Visual Identity</p>
              <p className="font-grotesk text-base text-white/90 leading-relaxed">
                Deliver a modern, consistent interface aligned with the client&rsquo;s brand
                vision — updating typography, colour system, and component style across all
                pages.
              </p>
            </div>
            <div className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="#288fd6" strokeWidth="1.8" className="w-8 h-8">
                <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" strokeLinejoin="round" />
              </svg>
              <p className="font-grotesk font-bold text-base text-black">
                Increase Conversion Rate
              </p>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed">
                Optimise key user flows and CTA placement to guide visitors toward targeted
                actions — contact requests, service inquiries, and portfolio engagement.
              </p>
            </div>
          </div>
        </section>

        {/* User research */}
        <section id="research" className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">User Research</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight max-w-3xl leading-snug [&>strong]:font-medium">
            To validate the redesign direction
          </h2>
          <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl [&>strong]:font-bold [&>strong]:text-black">
            To validate the redesign direction, research ran in two rounds: a screening survey distributed to existing clients and external B2B users, followed by six semi-structured interviews.
            Findings clustered around three recurring frictions — site clarity, navigation logic, and brand perception.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {researchStats.map((stat) => (
              <div key={stat.pct} className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col items-center gap-5">
                <DonutStat pct={stat.pct} color={stat.color} />
                <p className="font-grotesk text-base text-[#393939] leading-relaxed text-center [&>strong]:font-bold [&>strong]:text-black">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The poll */}
        <section id="poll" className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">What Users Told Us</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-6">
              <p className="font-grotesk font-bold text-base text-black">
                What frustrates you most on corporate websites?
              </p>
              <div className="flex justify-center">
                <Donut
                  hollowSize="12%"
                  segments={[
                    { value: 32, color: '#f2c94c', label: 'Outdated visual design' },
                    { value: 28, color: '#6abf69', label: 'Hard to find needed information' },
                    { value: 22, color: '#ee8585', label: 'Unclear navigation' },
                    { value: 12, color: '#4d8fd1', label: "Don't understand what the company does" },
                    { value: 6, color: '#6d3fc4', label: 'Too much text, low readability' },
                  ]}
                />
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  ['#f2c94c', 'Outdated visual design'],
                  ['#6abf69', 'Hard to find needed information'],
                  ['#ee8585', 'Unclear navigation'],
                  ['#4d8fd1', "Don't understand what the company does"],
                  ['#6d3fc4', 'Too much text, low readability'],
                ].map(([color, label]) => (
                  <li key={label} className="flex items-center gap-3 font-grotesk text-base text-black">
                    <span className="w-3.5 h-3.5 rounded-md shrink-0" style={{ backgroundColor: color }} />
                    {label}
                  </li>
                ))}
              </ul>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed">
                Multiple answers were allowed, so totals exceed 100%. Three answers dominated every other option —{' '}
                <strong className="font-bold text-black">structure, findability, and navigation</strong> —
                and each became a named design target in this project.
              </p>
            </div>
            <div className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-6">
              <p className="font-grotesk font-bold text-base text-black">
                Would You Return to an Updated Website?
              </p>
              <div className="flex justify-center">
                <Donut
                  segments={[
                    { value: 68, color: '#f2c94c', label: 'Yes' },
                    { value: 20, color: '#6abf69', label: 'Not sure' },
                    { value: 12, color: '#ee8585', label: 'No' },
                  ]}
                />
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  ['#f2c94c', 'Yes'],
                  ['#6abf69', 'Not sure'],
                  ['#ee8585', 'No'],
                ].map(([color, label]) => (
                  <li key={label} className="flex items-center gap-3 font-grotesk text-base text-black">
                    <span className="w-3.5 h-3.5 rounded-md shrink-0" style={{ backgroundColor: color }} />
                    {label}
                  </li>
                ))}
              </ul>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed mt-auto">
                <strong className="font-bold text-black">68% said yes</strong> Stated intent is not behaviour — but it told us the audience was not lost, only stalled by the current site.
              </p>
            </div>
          </div>
        </section>

        {/* User persona */}
        <section id="persona" className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">User Persona</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="flex flex-col gap-4">
              <ImagePlaceholder filename="persona-james.png" className="aspect-square" />
              <h3 className="font-grotesk font-medium text-3xl text-black tracking-tight mt-2">
                James Mitchell
              </h3>
              <p className="font-grotesk font-bold text-base text-black">
                38, Business Development Manager
              </p>
              <p className="font-grotesk font-bold text-base text-black">London, UK</p>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed">
                James evaluates tech vendors and service providers on behalf of his company. He
                visits corporate websites to quickly assess whether an agency is worth a deeper
                conversation &mdash; scanning for relevant cases, team expertise, and a clear
                service offering before deciding to reach out.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-5">
              {[
                {
                  title: 'Motivations',
                  items: [
                    <>I want to <strong>quickly understand what the company does</strong> and whether it fits my business needs.</>,
                    <>I need to see <strong>real cases and results,</strong> not just generic descriptions.</>,
                    <>I want to feel that the team is <strong>professional and reliable,</strong> before making contact.</>,
                    <>I prefer sites where <strong>information is easy to find</strong> without extra effort.</>,
                  ],
                },
                {
                  title: 'Goals',
                  items: [
                    <>Evaluate the company&rsquo;s <strong>expertise and portfolio</strong> in the first few minutes.</>,
                    <>Find the <strong>right service</strong> without digging through unclear navigation.</>,
                    <>Easily <strong>get in touch</strong> with the team when ready.</>,
                    <>Get a sense of the <strong>brand&rsquo;s credibility</strong> through visual quality and content clarity.</>,
                  ],
                },
                {
                  title: 'Frustrations',
                  items: [
                    <>Sites that <strong>hide key information</strong> behind vague language or excessive scrolling.</>,
                    <><strong>Outdated design</strong> that makes the company feel less trustworthy.</>,
                    <>No clear <strong>case studies or proof of work</strong> to support claims.</>,
                    <><strong>Hard-to-find contact</strong> options or unclear next steps.</>,
                  ],
                },
              ].map((group) => (
                <div key={group.title} className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-3">
                  <p className="font-grotesk font-bold text-base text-black">{group.title}</p>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item, i) => (
                      <li
                        key={i}
                        className="font-grotesk text-base text-[#393939] leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-1 [&>strong]:font-bold [&>strong]:text-black"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <p className="font-mono-bold text-base text-black leading-relaxed max-w-3xl">
            Persona validation confirmed that the primary user is a time-pressured B2B evaluator
            &mdash; not a casual browser. James Mitchell, Business Development Manager, visits
            the site with one goal: to quickly assess whether this agency is worth a deeper
            conversation. He scans for relevant cases, team credibility, and a clear service
            offering &mdash; and leaves if any of those signals are missing or hard to find.
            Every design decision in this project was tested against his scenario.
          </p>
        </section>

        {/* Information architecture */}
        <section id="ia" className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Information Architecture</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            Information Architecture
          </h2>
          <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl [&>strong]:font-bold [&>strong]:text-black">
            The IA was redesigned to create a <strong>clear and scalable structure</strong> that
            supports intuitive navigation and efficient content discovery. Based on competitor
            analysis and research findings, unnecessary pages were removed, content was
            regrouped, and new sections were added to better reflect the business offering. The
            result is a <strong>simplified navigation logic</strong> and improved content
            hierarchy — making it easier for users to find what they need at every stage of their
            journey.
          </p>
          <div className="bg-[#f7f7f7] rounded-[24px] p-5 overflow-x-auto">
            <IATree data={iaTree} defaultOpenIndex={1} />
            <p className="font-grotesk text-sm text-[#b3b2af] mt-4">
              Click a node to expand or collapse its branch.
            </p>
          </div>
        </section>

        {/* Navigation & menu architecture */}
        <section id="menu" className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Navigation &amp; Menu Architecture</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-5">
              <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
                Menu
              </h2>
              <div className="font-grotesk text-base text-[#393939] leading-relaxed flex flex-col gap-4 [&_strong]:font-bold [&_strong]:text-black">
                <p>
                  The previous navigation lacked <strong>information hierarchy</strong> making it
                  difficult for users to understand the company&rsquo;s full service range and
                  find what they needed without extra effort.
                </p>
                <p>
                  The menu was redesigned into a <strong>mega-menu format</strong> with a
                  logical, scannable layout. Services are <strong>grouped by type</strong> and
                  organised into 4 columns with supporting icons — reducing cognitive load and
                  significantly improving discoverability.
                </p>
                <p>
                  <strong>Expertise</strong> was separated into its own dedicated section,
                  allowing users to immediately identify the industries the company works with —
                  without mixing domain knowledge with the service offering. This separation
                  respects the <strong>mental models</strong> of two distinct user types: those
                  looking for a specific service, and those validating industry fit first.
                </p>
                <p>
                  The result is a navigation system where every item has{' '}
                  <strong>a clear place and purpose,</strong> making the site easier to explore
                  for both first-time visitors and returning clients evaluating new services.
                </p>
              </div>
            </div>
            <ImagePlaceholder filename="case-bart-menu.png" className="min-h-[520px]" />
          </div>
        </section>

        {/* Website pages */}
        <section id="pages" className="pb-24 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Website Pages</p>
          <PagesSlider pages={websitePages} />
        </section>

        {/* Case content in progress */}
        <div className="pb-20 flex flex-col items-center gap-4">
          <ImagePlaceholder filename="bart case content (in progress)" className="w-full min-h-[320px]" />
          <p className="font-grotesk text-base text-[#6b6a67]">More sections coming soon.</p>
        </div>

        {/* Colors & typography */}
        <section id="style" className="pb-24 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Colors & Typography</p>
          <StyleGuide {...styleGuide} />
        </section>

        {/* Post-launch analytics */}
        <section id="analytics" className="pb-24 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Post-Launch</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            Post-Launch Analytics
          </h2>
          <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl [&>strong]:font-bold [&>strong]:text-black">
            <strong>Website Redesign Project</strong> delivered measurable results across all
            three core goals. Following the launch, <strong>quantitative data was collected</strong>{' '}
            over a 60-day period through Google Analytics, Hotjar session recordings, and a
            post-launch user survey — tracking the same friction points identified in the initial
            research.
          </p>

          <h3 className="font-grotesk font-medium text-2xl sm:text-3xl text-black tracking-tight mt-4">
            Project Goals — Revisited
          </h3>
          <p className="font-grotesk font-bold text-base text-black max-w-2xl">
            Improve Navigation Clarity · Refresh the Visual Identity · Increase Conversion Rate
          </p>
          <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl">
            Each goal was tied to a specific metric from day one, making post-launch evaluation
            objective, not subjective.
          </p>

          <h3 className="font-grotesk font-medium text-2xl sm:text-3xl text-black tracking-tight mt-4">
            The Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {launchMetrics.map((metric) => (
              <div key={metric.title} className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-4">
                <MetricBars bars={metric.bars} color={metric.color} />
                <p className="font-grotesk font-bold text-base text-black">{metric.title}</p>
                <p className="font-grotesk text-base text-[#393939] leading-relaxed [&>strong]:font-bold [&>strong]:text-black">
                  {metric.text}
                </p>
              </div>
            ))}
          </div>

          <h3 className="font-grotesk font-medium text-2xl sm:text-3xl text-black tracking-tight mt-4">
            Post-Launch User Survey
          </h3>
          <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl">
            A follow-up survey mirrored the original poll questions to measure perception shift
            after the redesign.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {surveyResults.map((item) => (
              <div key={item.title} className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-4">
                <MetricBars bars={item.bars} color={item.color} />
                <p className="font-grotesk font-bold text-base text-black">{item.title}</p>
                <p className="font-grotesk text-base text-[#393939] leading-relaxed [&>strong]:font-bold [&>strong]:text-black">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <h3 className="font-grotesk font-medium text-2xl sm:text-3xl text-black tracking-tight mt-4">
            Key Takeaway
          </h3>
          <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-3xl [&>strong]:font-bold [&>strong]:text-black">
            The research didn&rsquo;t just inform the design — it <strong>created accountability.</strong>{' '}
            Every friction point identified in the surveys became a measurable design target.
            Every metric moved in the right direction. The result is not just a better-looking
            website — it&rsquo;s a{' '}
            <strong>conversion-optimised, user-validated product</strong> aligned with both
            business goals and real user expectations.
          </p>
        </section>
      </div>
    </main>
  );
}
