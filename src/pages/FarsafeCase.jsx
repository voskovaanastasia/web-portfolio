import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import SectionMenu from '../components/SectionMenu';
import IATree from '../components/IATree';
import caseFarsafe from '../assets/case-farsafe.png';
import toolFigma from '../assets/icon-figma.svg';
import toolFramer from '../assets/toolkit/framer.png';
import toolAmplitude from '../assets/how-i-work/tool-amplitude.svg';

const caseSections = [
  { id: 'case-hero', label: 'Back to Top' },
  { id: 'intro', label: 'Project Intro' },
  { id: 'problem-statement', label: 'Problem Statement' },
  { id: 'problem', label: 'Problem' },
  { id: 'goals', label: 'Project Goals' },
  { id: 'research', label: 'User Research' },
  { id: 'persona', label: 'User Persona' },
  { id: 'ia', label: 'Information Architecture' },
  { id: 'menu', label: 'Navigation & Menu' },
  { id: 'grid', label: 'Grid System' },
  { id: 'style', label: 'Colors & Typography' },
  { id: 'pages', label: 'Marketing Website' },
  { id: 'app-pages', label: 'Dashboard Pages' },
  { id: 'analytics', label: 'Post-Launch Analytics' },
];

const dashboardPages = [
  {
    title: 'Probe Page',
    image: 'case-farsafe-app-probe.png',
    blocks: [
      {
        heading: 'Probe Header',
        text: (
          <>
            Leads with <strong>identity and live state</strong> before any data, answering the
            two questions first: what&rsquo;s watched, is it running. Scope controls sit
            top-right where users expect them.
          </>
        ),
      },
      {
        heading: 'Metric Cards — Top Row',
        text: (
          <>
            Four cards answer &rdquo;is everything OK?&rdquo; in one scan, ordered by priority:
            health, speed, expirations, context. <strong>Status colour carries the read</strong>{' '}
            - the ring registers before any number.
          </>
        ),
      },
      {
        heading: 'Timeline',
        text: (
          <>
            Three response-time series show the <strong>spread, not just the average</strong>{' '}
            where degradation hides before it becomes an outage. A hover tooltip keeps the chart
            clean while exposing exact values on demand.
          </>
        ),
      },
      {
        heading: 'Outages / Samples Tabs',
        text: (
          <>
            Tabbed detail lets a user drop from summary into{' '}
            <strong>row-level records without leaving the screen.</strong> Leading with outages
            over raw samples reflects what an uptime owner reaches for first.
          </>
        ),
      },
    ],
  },
  {
    title: 'Dashboard',
    image: 'case-farsafe-app-dashboard.png',
    blocks: [
      {
        heading: 'Metric Cards — Top Row',
        text: (
          <>
            The <strong>fleet-level mirror</strong> of the probe view: same anatomy, aggregated,
            ordered by urgency. <strong>Status colour reads first,</strong> and each card links
            straight to the probe behind it, so noticing and investigating collapse into one
            click.
          </>
        ),
      },
      {
        heading: 'Timeline',
        text: (
          <>
            A <strong>condensed health band</strong> compresses the whole fleet into one strip,
            built for pattern detection, not precision. A clean run reads as calm; any break
            draws the eye.
          </>
        ),
      },
      {
        heading: 'Outages Table',
        text: (
          <>
            A <strong>row-level log</strong> with the probe name as a direct link, so a user
            jumps from summary to the affected monitor in one move. Placed last, because most
            users get their answer from the cards above.
          </>
        ),
      },
    ],
  },
  {
    title: 'Outage Details',
    image: 'case-farsafe-app-outage.png',
    blocks: [
      {
        heading: 'Modal Header',
        text: (
          <>
            Leads with <strong>what broke and its handling state,</strong> answering a
            responder&rsquo;s two questions on open: which service, and has anyone touched it.
            The unresolved state sits in an <strong>alarm colour,</strong> so an unattended
            incident can&rsquo;t be overlooked.
          </>
        ),
      },
      {
        heading: 'Timeline / Notes Tabs',
        text: (
          <>
            Splits the <strong>machine account from the human account</strong> - what the system
            observed vs. what the team documented. Two tabs for two reading needs: forensic
            diagnosis, and incident handoff.
          </>
        ),
      },
      {
        heading: 'Failure Timeline & Diagnostic Drill-Down',
        text: (
          <>
            A <strong>funnel of depth:</strong> each failed check is stamped with its{' '}
            <strong>exact probe location,</strong> so a responder instantly sees whether the
            failure is global or regional. It then decomposes into network stages with timings,
            down to the <strong>raw error</strong> - locating the problem at a specific step, not
            a vague &rdquo;it&rsquo;s down.&rdquo; The clearest expression of the product&rsquo;s
            diagnostic value.
          </>
        ),
      },
    ],
  },
  {
    title: 'Status Page',
    image: 'case-farsafe-app-status.png',
    blocks: [
      {
        heading: 'Status Header',
        text: (
          <>
            A <strong>dark, focused banner</strong> leading with the service name and operational
            state in status colour - the one answer a visitor came for, before any scroll. The
            live refresh timestamp signals real-time data, which is the whole credibility of a
            status page.
          </>
        ),
      },
      {
        heading: 'Overall Uptime',
        text: (
          <>
            A <strong>health band with the same figure across widening windows</strong> (day to
            weeks). Repeating the metric at multiple scales is a <strong>trust signal</strong> -
            it invites scrutiny instead of cherry-picking one flattering number.
          </>
        ),
      },
      {
        heading: 'Response Time',
        text: (
          <>
            A multi-series chart shows the <strong>spread between best and worst case</strong>{' '}
            with a tooltip for exact values. The min/average/max summary underneath gives a
            non-technical stakeholder the headline without reading the graph.
          </>
        ),
      },
    ],
  },
  {
    title: 'Monitoring',
    image: 'case-farsafe-app-monitoring.png',
    blocks: [
      {
        heading: 'Tab Switcher + Toolbar',
        text: (
          <>
            Two tabs split <strong>managing one monitor from organising many,</strong> matching
            the user&rsquo;s two mental models. Search sits left, the create action far right -
            scan, then act.
          </>
        ),
      },
      {
        heading: 'List Table',
        text: (
          <>
            A <strong>row-per-monitor table</strong> where the eye reads down a column, the
            fastest way to compare many. <strong>Status leads with colour,</strong> a paused row
            is tinted so exceptions surface, and the name links into the detail view - the list
            is the launch pad.
          </>
        ),
      },
      {
        heading: 'Inline Controls',
        text: (
          <>
            Pause, edit, and delete live <strong>on each row,</strong> so common actions happen
            in place. Delete is kept <strong>visually distinct from edit</strong> - a small
            safety guard on a table full of live services.
          </>
        ),
      },
    ],
  },
  {
    title: 'Billing',
    image: 'case-farsafe-app-billing.png',
    blocks: [
      {
        heading: 'Summary Cards',
        text: (
          <>
            Four cards answer a payer&rsquo;s real questions in priority order: what I owe,
            what&rsquo;s coming, what just happened, how I&rsquo;m billed. For a{' '}
            <strong>usage-based model, the estimated current charge is the trust move</strong> —
            it makes a variable bill predictable, not a month-end surprise.
          </>
        ),
      },
      {
        heading: 'Payment Methods',
        text: (
          <>
            A <strong>row-per-method table</strong> in the app&rsquo;s standard pattern, with a{' '}
            <strong>default indicator</strong> so there&rsquo;s no doubt which card is charged.
            The card number is <strong>masked</strong> - the same secret-handling discipline, on
            a page even more likely to be shared.
          </>
        ),
      },
      {
        heading: 'Disable Billing',
        text: (
          <>
            A <strong>destructive account-level action, placed last</strong> so it&rsquo;s never
            brushed by accident. Pairing it with a plain-language warning is a responsible
            choice: an irreversible, service-stopping action earns a full sentence, not just a
            red button.
          </>
        ),
      },
    ],
  },
  {
    title: 'Settings',
    image: 'case-farsafe-app-settings.png',
    blocks: [
      {
        heading: 'Phone Numbers',
        text: (
          <>
            The channel behind SMS alerts, as a named list for multiple on-call numbers. The{' '}
            <strong>verification column is the point:</strong> a number that only looks added is
            a silent failure when an incident fires, so verified state is shown in status colour.
          </>
        ),
      },
      {
        heading: 'API Keys',
        text: (
          <>
            The <strong>programmatic-access layer,</strong> with keys shown{' '}
            <strong>masked</strong> - a security choice that confirms a credential exists without
            exposing it. A per-key toggle cuts off access without deleting and re-issuing.
          </>
        ),
      },
      {
        heading: 'Integrations',
        text: (
          <>
            The <strong>external-destination layer,</strong> carrying the same verification
            state, because a broken webhook fails as silently as an unverified phone. Presenting
            it as one more row keeps a technical setup feeling routine.
          </>
        ),
      },
    ],
  },
];

const launchMetrics = [
  {
    title: 'Signup Conversion Rate — 7.4%',
    target: '(target 6%)',
    color: '#7da7f4',
    bars: [
      { label: '7.4%', value: 7.4 },
      { label: '6%', value: 6 },
    ],
    text: 'Outcome of clear pricing and repeated low-commitment CTAs.',
  },
  {
    title: 'Dashboard Task Success — 92%',
    target: '(target 90%)',
    color: '#b9a0ea',
    bars: [
      { label: '92%', value: 92 },
      { label: '90%', value: 90 },
    ],
    text: 'Reading uptime and finding an outage in usability testing validating the goal of making a dense product approachable.',
  },
  {
    title: 'Pricing-to-Signup Rate — 22%',
    target: '(target 15%)',
    color: '#ee8585',
    bars: [
      { label: '22%', value: 22 },
      { label: '15%', value: 15 },
    ],
    text: 'Pricing legibility converts rather than deters — the direct answer to the 27% who named pricing their top frustration.',
  },
  {
    title: 'Time-to-First-Probe — 1 min 41 sec',
    target: '(target under 2 min)',
    color: '#e8964a',
    bars: [
      { label: '1m 41s', value: 101 },
      { label: '2 m', value: 120 },
    ],
    text: 'Onboarding friction kept low by design.',
  },
  {
    title: 'Activation Rate — 77%',
    target: '(target 70%)',
    color: '#7da7f4',
    bars: [
      { label: '77%', value: 77 },
      { label: '70%', value: 70 },
    ],
    text: 'Signed up to first probe configured.',
  },
  {
    title: 'Bounce Rate — 36%',
    target: '(target under 45%)',
    color: '#6abf69',
    bars: [
      { label: '36%', value: 36 },
      { label: '45%', value: 45 },
    ],
    text: 'Clear entry points keep visitors exploring rather than leaving.',
  },
];

const surveyResults = [
  {
    pct: 84,
    color: '#7da7f4',
    title: '84% - understand what Farsafe does',
    text: 'The clear value proposition landed with first-time visitors.',
  },
  {
    pct: 86,
    color: '#b9a0ea',
    title: '86% - know exactly what they’ll pay',
    text: 'Pricing legibility closed the confusion gap the research opened.',
  },
  {
    pct: 87,
    color: '#ee8585',
    title: '87% - find the dashboard clear',
    text: 'A dense monitoring product read as simple, not overwhelming.',
  },
  {
    pct: 82,
    color: '#e8964a',
    title: '82% - trust the alerts',
    text: 'The payoff of multi-region checks, against the 73% once burned by false alerts.',
  },
];

const marketingPages = [
  {
    title: 'Landing page',
    image: 'case-farsafe-page-landing.png',
    blocks: [
      {
        heading: 'Hero Section',
        text: 'Leads with the differentiator before any feature, so positioning and value land in one read. The live dashboard preview and trust strip clear the biggest objections before the user scrolls.',
      },
      {
        heading: 'What We Monitor',
        text: 'Six identical cards in a parallel content structure let the eye scan rhythmically, answering the buyer’s first question: does it monitor what I care about.',
      },
      {
        heading: 'Built For',
        text: 'Four audience cards let visitors self-identify, each pinned to a concrete hook - no single-persona commitment.',
      },
      {
        heading: 'Global Network',
        text: 'The world map makes reliability visual, and the stat row does the trust work against the category’s biggest doubt: can I rely on the alerts.',
      },
      {
        heading: 'Alerts',
        text: 'The channel logos carry the message visually - meet teams where they already work. Logos read faster than a feature list.',
      },
      {
        heading: 'Pricing',
        text: 'Three account cards, one feature set, legible at a glance. In a category of confusing tiers, transparency becomes the conversion tool.',
      },
    ],
  },
  {
    title: 'Global Network',
    image: 'case-farsafe-page-network.png',
    blocks: [
      {
        heading: 'Hero Section',
        text: (
          <>
            Pairs the reliability message with a <strong>world map,</strong> turning an abstract
            &rdquo;we&rsquo;re everywhere&rdquo; claim into something the eye can verify. The stat
            row does the <strong>trust work</strong> up front, and the primary action sits in the
            first viewport so a convinced visitor can convert without scrolling.
          </>
        ),
      },
      {
        heading: 'Server Network Table',
        text: (
          <>
            Publishes a <strong>filterable list of every probe server,</strong> which is a
            deliberate transparency play. It also doubles as a practical tool - this is exactly
            the list a buyer needs to <strong>allowlist IPs in a firewall</strong> - and the
            region filters let a technical user narrow to what&rsquo;s relevant instead of
            scanning the whole table.
          </>
        ),
      },
      {
        heading: 'Why It Matters',
        text: (
          <>
            Reframes the network from a vanity metric into{' '}
            <strong>concrete user benefits,</strong> each as a titled card with a supporting
            checklist. The headline makes the promise and the checklist proves it, so a technical
            buyer can <strong>scan for the exact capability they&rsquo;re verifying</strong>{' '}
            without reading prose.
          </>
        ),
      },
    ],
  },
  {
    title: 'Pricing',
    image: 'case-farsafe-page-pricing.png',
    blocks: [
      {
        heading: 'Hero Section',
        text: (
          <>
            States the model in the headline itself:{' '}
            <strong>pay per probe, per seat, nothing else.</strong> The billing preview and trust
            strip remove the objections a pricing page usually triggers.
          </>
        ),
      },
      {
        heading: 'Comparison Table',
        text: (
          <>
            One feature matrix across four account types, where paid tiers{' '}
            <strong>gate almost nothing.</strong> The table isn&rsquo;t upselling features -
            it&rsquo;s proving nothing&rsquo;s hidden behind them.
          </>
        ),
      },
      {
        heading: 'Cost Calculator',
        text: (
          <>
            Sliders build the <strong>exact monthly cost in real time.</strong> Usage-based
            pricing is where trust normally breaks, so letting users watch the number turns the
            model&rsquo;s biggest risk into its proof.
          </>
        ),
      },
      {
        heading: 'Compare Table',
        text: (
          <>
            Places Farsafe beside the <strong>industry average,</strong> consistently lower. It
            reframes the decision from &rdquo;is this cheap?&rdquo; to &rdquo;why pay more
            elsewhere?&rdquo;
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

const brandColors = [
  { name: 'Shiny Black', hex: '#252525', dark: true },
  { name: 'Charleston Green', hex: '#212C2F', dark: true },
  { name: 'Gainsboro', hex: '#DDDDDD' },
  { name: 'Authentic White', hex: '#F8F9FA' },
  { name: 'Tibet', hex: '#4274C1', dark: true },
  { name: 'Pine', hex: '#77B788', dark: true },
  { name: 'Still Red', hex: '#CD4847', dark: true },
  { name: 'Authentic Orange', hex: '#EC8F38', dark: true },
];

const blueShades = [
  '#111C3A', '#1A2A55', '#243A6B', '#33518C', '#4274C1',
  '#7B9BD6', '#AEC2E6', '#CFDBF1', '#E8EDF7',
];

const fontWeights = ['Regular', 'Medium', 'Semi Bold', 'Bold', 'Extra Bold'];

const iaTree = {
  label: 'Farsafe.com',
  children: [
    { label: 'Home' },
    {
      label: 'Product / Features',
      children: [
        {
          label: 'Monitoring (overview)',
          children: [
            { label: 'Website Monitoring' },
            { label: 'Mail Service Monitoring' },
            { label: 'Ping Monitoring' },
            { label: 'TCP/UDP Port Monitoring' },
            { label: 'SSL Certificate Monitoring' },
            { label: 'Domain Registration Monitoring' },
          ],
        },
        { label: 'Advanced Monitoring' },
        { label: 'Flexible Alerts' },
        { label: 'Global Architecture (probe network)' },
        { label: 'Status Pages (public status pages)' },
        { label: 'Scheduled Reporting' },
      ],
    },
    {
      label: 'Pricing',
      children: [
        { label: 'Individual (Free)' },
        { label: 'Business (usage-based)' },
        { label: 'OSS / Non-Profit (Free)' },
      ],
    },
    {
      label: 'Solutions / Audiences',
      children: [
        { label: 'Developers' },
        { label: 'Agencies' },
        { label: 'Small Teams' },
        { label: 'OSS & Non-Profits' },
      ],
    },
    {
      label: 'Resources',
      children: [{ label: 'Blog' }, { label: 'FAQ' }],
    },
    {
      label: 'Company',
      children: [
        { label: 'Contact Us' },
        { label: 'Terms and Conditions' },
        { label: 'Privacy Policy' },
      ],
    },
    {
      label: 'Account',
      children: [
        { label: 'Login' },
        { label: 'Signup' },
        { label: 'Dashboard (post-login)' },
      ],
    },
  ],
};

function ImagePlaceholder({ filename, className = '' }) {
  return (
    <div
      className={`bg-[#f7f7f7] rounded-[24px] flex items-center justify-center overflow-hidden ${className}`}
    >
      <p className="font-grotesk text-sm text-[#b3b2af] px-8 text-center">
        Add {filename} to src/assets
      </p>
    </div>
  );
}

function Donut({ segments, hollowSize = '32%' }) {
  const options = {
    colors: segments.map((s) => s.color),
    chart: {
      type: 'radialBar',
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        track: { background: '#ececec' },
        dataLabels: { show: false },
        hollow: { margin: 0, size: hollowSize },
      },
    },
    grid: {
      show: false,
      padding: { left: 2, right: 2, top: -23, bottom: -20 },
    },
    labels: segments.map((s) => s.label),
    legend: { show: false },
    tooltip: {
      enabled: true,
      x: { show: false },
    },
    yaxis: {
      show: false,
      labels: { formatter: (value) => `${value}%` },
    },
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

const cases = {
  farsafe: {
    heroImage: caseFarsafe,
    name: 'Farsafe',
    title: 'Marketing Website & Monitoring Dashboard',
    tags: [
      '0-to-1 SaaS',
      'Web App',
      'Marketing Site',
      'Design System',
      'End-To-End Production Design',
      'UX Research & Strategy',
    ],
    meta: [
      { label: 'Participation', value: 'Product Designer (solo designer)' },
      { label: 'Service', value: 'UX/UI Design  Design System' },
      { label: 'My Team', value: 'Founder (backend), Frontend Developer, Designer' },
      { label: 'Timeline', value: '1 year 6 months' },
    ],
    tools: [
      { icon: toolFigma, label: 'Figma' },
      { icon: toolFramer, label: 'Framer' },
      { icon: toolAmplitude, label: 'Amplitude' },
    ],
    summary: [
      {
        label: 'PROBLEM',
        text: 'Monitoring tools hide pricing and overwhelm users with complex setup flows.',
      },
      {
        label: 'MY ROLE',
        text: 'Sole Product Designer — research, strategy, marketing site, and dashboard.',
      },
      {
        label: 'KEY DECISION',
        text: 'Made pricing transparency the centerpiece of the conversion strategy.',
      },
    ],
    outcome: { value: '92%', label: 'Dashboard Task Success' },
    intro: {
      heading: 'From static concepts to live prototypes.',
      body: (
        <>
          <strong>FarSafe</strong> is an all-included uptime-monitoring platform that{' '}
          <strong>
            tells developers, agencies, and small teams the moment a website, server, or
            certificate fails.
          </strong>{' '}
          I designed it from scratch across both surfaces: the marketing website and the in-app
          monitoring dashboard. <strong>The core challenge was</strong> making a technically dense
          product feel simple enough to convert a first-time visitor, yet deep enough for an
          engineer to trust it in production.
        </>
      ),
    },
  },
};


const iaAppTree = {
  label: 'Farsafe App (Business)',
  children: [
    {
      label: 'Account Switcher',
      children: [{ label: 'Switch org / "The Big Four · Business"' }],
    },
    {
      label: 'Dashboard (default landing)',
      children: [
        { label: 'Date-range filter (e.g. 7 days)' },
        {
          label: 'KPI cards',
          children: [
            { label: 'Uptime' },
            { label: 'Total Probes (Up / Down / Paused / Unknown)' },
            { label: 'Expiration Dates (Domain / SSL)' },
            { label: 'Most Recent Outage' },
          ],
        },
        { label: 'Timeline (uptime strip)' },
        { label: 'Outages table (Probe · Downtime · Start · End · Notes)' },
      ],
    },
    {
      label: 'Monitoring',
      children: [
        {
          label: 'Probes (tab)',
          children: [
            { label: '+ Create Probe' },
            { label: 'Row actions: Edit · Delete · Pause toggle' },
            { label: 'Probe detail (open by name)' },
          ],
        },
        {
          label: 'Probe Groups (tab)',
          children: [
            { label: '+ Create Probe Group' },
            { label: 'Row actions: Edit · Delete' },
          ],
        },
      ],
    },
    {
      label: 'Reporting',
      children: [
        {
          label: 'Reports (tab)',
          children: [
            { label: '+ Create Report' },
            { label: 'Row actions: Download · Edit · Delete' },
          ],
        },
        {
          label: 'Report Schedules (tab)',
          children: [
            { label: '+ Create Report Schedule' },
            { label: 'Row actions: Edit · Delete' },
          ],
        },
      ],
    },
    {
      label: 'Status Pages',
      children: [
        { label: '+ Create Status Page' },
        { label: 'Row actions: View · Edit · Delete' },
        {
          label: 'Public Status Page (external view)',
          children: [
            { label: 'Overall status banner' },
            { label: 'Probes list (per-probe uptime %, status)' },
            {
              label: 'Probe detail',
              children: [
                { label: 'Overall Uptime (24h / 48h / 7d / 14d)' },
                { label: 'Response Time (min / avg / max)' },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Settings (organization-level)',
      children: [
        { label: 'Organization profile (name, timezone)' },
        { label: 'Phone Numbers (+ Add, verify)' },
        { label: 'API Keys (+ Add, enable/disable)' },
        { label: 'Integrations (+ Add — e.g. Slack)' },
        { label: 'Delete Business Account (danger zone)' },
      ],
    },
    {
      label: 'Members (team management)',
      children: [
        {
          label: 'Members (tab)',
          children: [
            { label: '+ Invite Member' },
            { label: 'Access levels: Owner · Administrator · User' },
            { label: 'Row actions: Edit · Delete' },
          ],
        },
        {
          label: 'Member Groups (tab)',
          children: [
            { label: '+ Create Member Group' },
            { label: 'Row actions: Edit · Delete' },
          ],
        },
      ],
    },
    {
      label: 'Billing',
      children: [
        {
          label: 'Summary (tab)',
          children: [
            { label: 'Account Balance (+ tax rate)' },
            { label: 'Current Billing Period (estimated charges)' },
            { label: 'Latest Transactions' },
            { label: 'Notification Preferences' },
            { label: 'Payment Methods (+ Add, set default)' },
            { label: 'Disable Billing (danger zone)' },
          ],
        },
        { label: 'Transactions (tab): Type · Amount · Status · Method · Date' },
      ],
    },
  ],
};

export default function FarsafeCase() {
  const project = cases.farsafe;

  useEffect(() => {
    document.title = `${project.name} — Anastasiia Voskova`;
    return () => {
      document.title = 'Anastasiia Voskova';
    };
  }, [project]);

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
        <div className="bg-[#f7f7f7] rounded-[24px] p-8 mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
              className="bg-[#f7f7f7] rounded-[24px] p-7 flex flex-col gap-4"
            >
              <p className="font-grotesk text-sm text-[#6b6a67] uppercase tracking-wide">{card.label}</p>
              <p className="font-grotesk text-base text-black leading-relaxed">{card.text}</p>
            </div>
          ))}
          <div className="bg-[#e9f3fa] rounded-[24px] p-7 flex flex-col gap-3">
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
          <div className="bg-[#f7f7f7] rounded-[24px] min-h-[420px] flex items-center justify-center overflow-hidden">
            <p className="font-grotesk text-sm text-[#b3b2af] px-8 text-center">
              Add case-farsafe-intro.png to src/assets
            </p>
          </div>
        </section>

        {/* Problem statement */}
        <section id="problem-statement" className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">PROBLEM STATEMENT</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight max-w-3xl leading-snug">
            Developers and agencies need a monitoring tool they can set up fast and actually trust.
          </h2>
          <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-3xl">
            Existing tools bury pricing, fire false alarms from a single location, and scatter
            status and reporting across separate products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
            <div className="bg-[#f7f7f7] rounded-[24px] p-7 flex flex-col gap-4">
              <p className="font-grotesk text-sm text-[#6b6a67] uppercase tracking-wide">Insight 1</p>
              <p className="font-grotesk font-bold text-base text-black">
                Pricing is impossible to predict
              </p>
              <p className="font-grotesk font-bold text-6xl text-black">66%</p>
              <p className="font-grotesk text-base text-[#393939]">
                <strong className="font-bold text-black">66%</strong> of interviewees said tiered
                pricing made their bill unpredictable.
              </p>
            </div>
            <div className="bg-[#e9f3fa] rounded-[24px] p-7 flex flex-col gap-4">
              <p className="font-grotesk text-sm text-[#6b6a67] uppercase tracking-wide">Insight 2</p>
              <p className="font-grotesk font-bold text-base text-black">
                Alerts can&rsquo;t be trusted when a single location triggers them.
              </p>
              <p className="font-grotesk text-base text-[#393939] mt-auto">
                <strong className="font-bold text-black">73%</strong> wanted to share status
                without a separate tool.
              </p>
            </div>
            <div className="bg-[#6d3fc4] rounded-[24px] p-7 flex flex-col gap-4 text-white">
              <p className="font-grotesk text-sm text-white/70 uppercase tracking-wide">Insight 3</p>
              <p className="font-grotesk font-bold text-base">
                Status and reporting mean buying yet another product.
              </p>
              <p className="font-grotesk font-bold text-6xl">58%</p>
              <p className="font-grotesk text-base text-white/90">
                <strong className="font-bold text-white">58%</strong> wanted to share status
                without a separate tool.
              </p>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <ImagePlaceholder filename="case-farsafe-problem.png" className="min-h-[420px]" />
          <div className="flex flex-col gap-5 lg:col-span-2">
            <p className="font-mono-bold text-base text-black">PROBLEM</p>
            <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
              Monitoring tools force a trade-off between simple and trustworthy
            </h2>
            <p className="font-grotesk text-base text-[#393939] leading-relaxed">
              Developers, agencies, and small teams need to know the moment something breaks. But
              existing tools bury pricing behind tiers, fire false alarms from a single check
              location, and split status and reporting into separate paid products.
            </p>
            <p className="font-mono-bold text-base text-black">WHY IS THIS IMPORTANT?</p>
            <p className="font-grotesk text-base text-[#393939] leading-relaxed">
              The result is teams that either overpay, miss real outages, or juggle multiple tools
              - and lose trust in the one system meant to warn them.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="flex flex-col gap-5 lg:col-span-2">
            <p className="font-mono-bold text-base text-black">SOLUTION</p>
            <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
              One all-included platform, legible from the first click
            </h2>
            <p className="font-grotesk text-base text-[#393939] leading-relaxed">
              I designed FarSafe end-to-end across two surfaces - the marketing site and the
              dashboard. Pricing is exposed and flat, every alert is cross-verified across regions
              before it fires, and status pages and reports are built in, not sold separately.
            </p>
            <p className="font-mono-bold text-base text-black">USER SCENARIO CONSIDERATION</p>
            <p className="font-grotesk text-base text-[#393939] leading-relaxed">
              My aim was a product a first-time visitor could understand in seconds and an engineer
              could trust in production - the same clarity from landing page to daily dashboard.
            </p>
          </div>
          <ImagePlaceholder filename="case-farsafe-solution.png" className="min-h-[420px]" />
        </section>

        {/* Project goals */}
        <section id="goals" className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Project Goals</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#f7f7f7] rounded-[24px] p-7 flex flex-col gap-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="#288fd6" strokeWidth="1.8" className="w-8 h-8">
                <circle cx="12" cy="7" r="4" />
                <path d="M12 5v4M10.5 6.2h3a1 1 0 0 1 0 2h-3a1 1 0 0 0 0 2h3" strokeLinecap="round" />
                <path d="M3 17c2-2 4-2 6-1l3 1.5c1.5.7 3-.5 4-1.5l2.5-2.5a1.4 1.4 0 0 1 2 2L16 20c-1.5 1.5-4 2-6 1l-7-3z" strokeLinejoin="round" />
              </svg>
              <p className="font-grotesk font-bold text-base text-black">
                Make the Value Proposition Instantly Clear
              </p>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed">
                Communicate &rdquo;everything included, pay only for what you use&rdquo; in seconds
                - and remove the category&rsquo;s biggest friction, hidden tier pricing, before a
                visitor ever scrolls.
              </p>
            </div>
            <div className="bg-[#288fd6] rounded-[24px] p-7 flex flex-col gap-4 text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
                <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" strokeLinejoin="round" />
              </svg>
              <p className="font-grotesk font-bold text-base">
                Make a Data-Dense Product Approachable
              </p>
              <p className="font-grotesk text-base text-white/90 leading-relaxed">
                Design a monitoring dashboard where uptime, response times, diagnostics, and
                expirations are scannable at a glance - depth without overwhelm.
              </p>
            </div>
            <div className="bg-[#f7f7f7] rounded-[24px] p-7 flex flex-col gap-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="#288fd6" strokeWidth="1.8" className="w-8 h-8">
                <circle cx="10" cy="8" r="4" />
                <path d="M3 21c0-3.5 3-6 7-6 1.5 0 2.8.3 4 .9" strokeLinecap="round" />
                <path d="m16 19 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-grotesk font-bold text-base text-black">
                Drive Low-Friction Signup &amp; Activation
              </p>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed">
                Guide visitors to the free account with repeated, low-commitment CTAs, and get a
                new user from signup to first configured probe in under 2 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* User research */}
        <section id="research" className="pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="flex flex-col gap-5">
            <p className="font-mono-bold text-base text-black">User Research</p>
            <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight leading-snug">
              The goal was to map what makes existing tools frustrating - and design around those
              gaps from day one.
            </h2>
            <p className="font-grotesk text-base text-[#393939] leading-relaxed">
              Surveys and interviews with 15 developers, agency owners, and small-team leads who
              own uptime. Three patterns stood out:
            </p>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-5">
            {[
              {
                pct: 66,
                color: '#7da7f4',
                title: '66% - couldn’t predict their bill',
                text: 'Tiered competitor pricing hid the real cost until after commitment.',
              },
              {
                pct: 73,
                color: '#6abf69',
                title: '73% - had been burned by false alerts',
                text: 'Single-location checks flag healthy sites as down; people stop trusting alerts.',
              },
              {
                pct: 58,
                color: '#e8964a',
                title: '58% - wanted status sharing built in',
                text: 'Proving uptime meant buying a separate status or reporting tool.',
              },
            ].map((bar) => (
              <div key={bar.title} className="bg-[#f7f7f7] rounded-[24px] p-7 flex flex-col gap-3">
                <div className="h-2.5 rounded-full bg-[#d9d9d9] overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${bar.pct}%`, backgroundColor: bar.color }}
                  />
                </div>
                <p className="font-grotesk font-bold text-base text-black mt-2">{bar.title}</p>
                <p className="font-grotesk text-base text-[#393939]">{bar.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The poll */}
        <section className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">The Poll</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#f7f7f7] rounded-[24px] p-8 flex flex-col gap-6">
              <p className="font-grotesk font-bold text-base text-black">
                What frustrates you most about your current monitoring tool?
              </p>
              <div className="flex justify-center">
                <Donut
                  hollowSize="12%"
                  segments={[
                    { value: 30, color: '#f2c94c', label: 'False alerts from single-location checks' },
                    { value: 27, color: '#6abf69', label: 'Confusing or tiered pricing' },
                    { value: 18, color: '#ee8585', label: 'Paying extra for status pages / reports' },
                    { value: 14, color: '#4d8fd1', label: 'Too many separate tools to manage' },
                    { value: 11, color: '#6d3fc4', label: 'Hard or slow to set up' },
                  ]}
                />
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  ['#f2c94c', 'False alerts from single-location checks'],
                  ['#6abf69', 'Confusing or tiered pricing'],
                  ['#ee8585', 'Paying extra for status pages / reports'],
                  ['#4d8fd1', 'Too many separate tools to manage'],
                  ['#6d3fc4', 'Hard or slow to set up'],
                ].map(([color, label]) => (
                  <li key={label} className="flex items-center gap-3 font-grotesk text-base text-black">
                    <span className="w-3.5 h-3.5 rounded-md shrink-0" style={{ backgroundColor: color }} />
                    {label}
                  </li>
                ))}
              </ul>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed">
                Together, the top three account for{' '}
                <strong className="font-bold text-black">75% of user frustration</strong> - each
                one became a direct design target for the product.
              </p>
            </div>
            <div className="bg-[#f7f7f7] rounded-[24px] p-8 flex flex-col gap-6">
              <p className="font-grotesk font-bold text-base text-black">
                Interested in an all-in-one, pay-as-you-go tool?
              </p>
              <div className="flex justify-center">
                <Donut
                  segments={[
                    { value: 64, color: '#6abf69', label: 'Yes' },
                    { value: 23, color: '#f2c94c', label: 'Not sure' },
                    { value: 13, color: '#ee8585', label: 'No' },
                  ]}
                />
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  ['#6abf69', 'Yes'],
                  ['#f2c94c', 'Not sure'],
                  ['#ee8585', 'No'],
                ].map(([color, label]) => (
                  <li key={label} className="flex items-center gap-3 font-grotesk text-base text-black">
                    <span className="w-3.5 h-3.5 rounded-md shrink-0" style={{ backgroundColor: color }} />
                    {label}
                  </li>
                ))}
              </ul>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed mt-auto">
                <strong className="font-bold text-black">64% said yes</strong> - confirming real
                demand for an everything-included, pay-for-what-you-use model and giving the
                product a clear wedge into the market.
              </p>
            </div>
          </div>
        </section>

        {/* User persona */}
        <section id="persona" className="pb-24 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">User Persona</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="flex flex-col gap-4">
              <ImagePlaceholder filename="persona-daniel.png" className="aspect-square" />
              <h3 className="font-grotesk font-medium text-3xl text-black tracking-tight mt-2">
                Daniel Reyes
              </h3>
              <p className="font-grotesk font-bold text-base text-black">
                34, Founder / Lead Developer, small web agency
              </p>
              <p className="font-grotesk font-bold text-base text-black">Texas, USA</p>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed">
                Daniel is the person clients call when a site goes down. He manages uptime for
                roughly 20 client sites and needs to know about problems before the client does. He
                evaluates monitoring tools quickly &mdash; scanning for clear pricing, reliable
                alerting, and a way to prove uptime to clients &mdash; and abandons anything that
                buries those signals.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-5">
              {[
                {
                  title: 'Motivations',
                  items: [
                    <>I want to <strong>know what I&rsquo;ll pay</strong> before I commit - no tiered guessing games.</>,
                    <>I need <strong>alerts I can trust</strong>, not noise from a single bad route.</>,
                    <>I want to <strong>prove uptime to clients</strong> without spinning up another tool.</>,
                    <>I prefer products where <strong>everything I need is already included</strong>.</>,
                  ],
                },
                {
                  title: 'Goals',
                  items: [
                    <>Add monitoring for a new client <strong>quickly, without a long setup.</strong></>,
                    <>Catch real outages early and <strong>avoid false alarms.</strong></>,
                    <>Hand clients <strong>a status page or report</strong> without extra cost.</>,
                    <>Manage <strong>every client from one account.</strong></>,
                  ],
                },
                {
                  title: 'Frustrations',
                  items: [
                    <><strong>Pricing tiers</strong> that hide the real cost behind checkboxes.</>,
                    <><strong>False positives</strong> that erode trust in the tool.</>,
                    <>Paying extra for <strong>status pages and reports</strong> that should be standard.</>,
                    <>Juggling <strong>multiple separate tools</strong> for alerts, status, and reporting.</>,
                  ],
                },
              ].map((group) => (
                <div key={group.title} className="bg-[#f7f7f7] rounded-[24px] p-7 flex flex-col gap-3">
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
            Research confirmed the primary user is a time-pressured uptime owner - not a casual
            browser. Every design decision was tested against his scenario: can he understand the
            pricing, trust the alerts, and prove uptime to a client?
          </p>
        </section>

        {/* Information architecture */}
        <section id="ia" className="pb-24 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Information Architecture</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            Website
          </h2>
          <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl [&>strong]:font-bold [&>strong]:text-black">
            The public site is kept <strong>deliberately shallow</strong> so a first-time visitor
            can reach signup from anywhere. Monitoring capability sits under one parent, pricing
            is exposed at the top level (because pricing legibility is the core value), and
            supporting content - Blog, Company, auth - stays one level deep. The structure mirrors
            how a visitor decides:{' '}
            <strong>see what&rsquo;s monitored, how alerts work, what it costs, then sign up.</strong>
          </p>
          <div className="bg-[#f7f7f7] rounded-[24px] p-8 sm:p-10 overflow-x-auto">
            <IATree data={iaTree} />
            <p className="font-grotesk text-sm text-[#b3b2af] mt-4">
              Click a node to expand or collapse its branch.
            </p>
          </div>

          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight mt-10">
            Dashboard
          </h2>
          <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl [&>strong]:font-bold [&>strong]:text-black">
            Inside the app, the IA is organised around{' '}
            <strong>the daily jobs of an uptime owner</strong>. A flat top level: Dashboard,
            Monitoring, Reporting, Status Page, Settings, Members, Billing - keeps every core
            task one click away, with operational detail nested only one level beneath. No deep
            hierarchies to navigate while responding to an incident.
          </p>
          <div className="bg-[#f7f7f7] rounded-[24px] p-8 sm:p-10 overflow-x-auto">
            <IATree data={iaAppTree} />
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
                  A new product means no legacy clutter - so every item earns its place.{' '}
                  <strong>All monitoring lives under one parent</strong> (Advanced Monitoring,
                  Flexible Alerts, Global Architecture, Status Pages, Scheduled Reporting),
                  keeping a dense feature set scannable rather than scattered.
                </p>
                <p>
                  <strong>Pricing sits at the top level, not inside a menu</strong> - in a
                  category defined by confusing tiers, exposing it is a trust move. Login and
                  Signup stay isolated on the right, Signup as the single high-contrast CTA.
                </p>
                <p>
                  Inside the app, the <strong>sidebar follows the same flat logic</strong>{' '}
                  (Dashboard, Monitoring, Reporting, Status Pages, Settings, Members, Billing) -
                  predictable enough to operate without hunting.
                </p>
                <p>
                  The result:{' '}
                  <strong>easy to explore for first-time visitors, fast to operate for daily users.</strong>
                </p>
              </div>
            </div>
            <ImagePlaceholder filename="case-farsafe-menu.png" className="min-h-[420px]" />
          </div>
          <ImagePlaceholder filename="case-farsafe-menu-mobile.png" className="min-h-[480px] mt-4" />
        </section>

        {/* Grid system */}
        <section id="grid" className="pb-24 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Grid System</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            One responsive grid
          </h2>
          <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl">
            One responsive grid keeps every layout consistent across the product — tuned per
            surface, then reused everywhere. All grids use stretch columns.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-[#f7f7f7] rounded-[24px] p-8 flex flex-col gap-4">
              <p className="font-grotesk font-bold text-base text-black">Marketing — Desktop</p>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed">
                Two setups: a 3-column grid for standard sections, a 4-column for denser card
                layouts.
              </p>
              <ImagePlaceholder
                filename="case-farsafe-grid-marketing.png"
                className="min-h-[380px] mt-auto bg-white"
              />
            </div>
            <div className="bg-[#f7f7f7] rounded-[24px] p-8 flex flex-col gap-4">
              <p className="font-grotesk font-bold text-base text-black">Dashboard (App) — Desktop</p>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed">
                A 4-column content grid sitting beside a fixed side menu, with margin 40 and
                gutter 20. The tighter margin (vs. 80 on the marketing site) hands more working
                width to dense tables, metric cards, and timelines.
              </p>
              <ImagePlaceholder
                filename="case-farsafe-grid-dashboard.png"
                className="min-h-[380px] mt-auto bg-white"
              />
            </div>
            <div className="bg-[#f7f7f7] rounded-[24px] p-8 flex flex-col gap-4">
              <p className="font-grotesk font-bold text-base text-black">Mobile — All pages</p>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed">
                A 2-column grid, sized for comfortable reading on compact screens.
              </p>
              <ImagePlaceholder
                filename="case-farsafe-grid-mobile.png"
                className="min-h-[480px] mt-auto bg-white"
              />
            </div>
          </div>
        </section>

        {/* Colors & typography */}
        <section id="style" className="pb-24 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Visual Language</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            Colors &amp; Typography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Palette stack */}
            <div className="rounded-[24px] overflow-hidden flex flex-col lg:row-span-2 min-h-[500px]">
              {brandColors.map((c) => (
                <div
                  key={c.name}
                  className="flex-1 px-6 py-4 flex flex-col justify-center gap-0.5"
                  style={{ backgroundColor: c.hex, color: c.dark ? '#ffffff' : '#252525' }}
                >
                  <p className="font-grotesk font-bold text-base">{c.name}</p>
                  <p className="font-grotesk text-sm opacity-90">{c.hex}</p>
                </div>
              ))}
            </div>

            {/* Open Sans */}
            <div
              className="rounded-[24px] p-8 flex flex-col justify-between min-h-[280px] bg-[#a3bbdf] text-[#1c1c1c]"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              <div className="flex flex-col gap-1.5 text-base">
                {fontWeights.map((w, idx) => (
                  <span key={w} style={{ fontWeight: 400 + idx * 100 }}>{w}</span>
                ))}
              </div>
              <p className="font-bold text-4xl">Open Sans</p>
            </div>

            {/* Alert mockups image */}
            <ImagePlaceholder
              filename="case-farsafe-alerts.png"
              className="lg:col-span-2 min-h-[280px]"
            />

            {/* Rubik */}
            <div
              className="rounded-[24px] p-8 flex flex-col justify-between items-end min-h-[280px] bg-[#33518C] text-white lg:col-start-2"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              <div className="flex flex-col gap-1.5 text-base text-right">
                {fontWeights.map((w, idx) => (
                  <span key={w} style={{ fontWeight: 400 + idx * 100 }}>{w}</span>
                ))}
              </div>
              <p className="font-bold text-4xl">Rubik</p>
            </div>

            {/* Blue shades */}
            <div className="rounded-[24px] overflow-hidden flex flex-col min-h-[280px]">
              {blueShades.map((hex) => (
                <div key={hex} className="flex-1" style={{ backgroundColor: hex }} />
              ))}
            </div>

            {/* Gradient */}
            <div
              className="rounded-[24px] min-h-[280px]"
              style={{ background: 'linear-gradient(120deg, #4274C1 0%, #1A2A55 100%)' }}
            />
          </div>
        </section>

        {/* Marketing website pages */}
        <section id="pages" className="pb-24 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Marketing Website</p>
          <PagesSlider pages={marketingPages} />
        </section>

        {/* Dashboard pages */}
        <section id="app-pages" className="pb-24 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Dashboard</p>
          <PagesSlider pages={dashboardPages} />
        </section>

        {/* Post-launch analytics */}
        <section id="analytics" className="pb-24 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Post-Launch</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            Post-Launch Analytics
          </h2>
          <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl">
            Farsafe launched as a complete, from-scratch product. With no old version to compare
            against, success was set up front - every goal had a target metric. Performance was
            tracked for 8 weeks after launch using Google Analytics, Hotjar, and a post-launch
            survey. The evaluation was objective, not subjective.
          </p>

          <h3 className="font-grotesk font-medium text-2xl sm:text-3xl text-black tracking-tight mt-4">
            The Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {launchMetrics.map((metric) => {
              const max = Math.max(...metric.bars.map((b) => b.value));
              return (
                <div key={metric.title} className="bg-[#f7f7f7] rounded-[24px] p-7 flex flex-col gap-4">
                  <p className="font-grotesk font-bold text-base text-black">{metric.title}</p>
                  <p className="font-grotesk text-sm text-[#6b6a67]">{metric.target}</p>
                  <div className="flex items-end gap-4 h-44">
                    {metric.bars.map((bar, idx) => (
                      <div
                        key={bar.label}
                        className="flex-1 rounded-[16px] flex items-end justify-center pb-3"
                        style={{
                          height: `${(bar.value / max) * 100}%`,
                          backgroundColor: idx === 0 ? metric.color : '#e3e3e3',
                        }}
                      >
                        <span className="font-grotesk font-bold text-sm text-black">{bar.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-grotesk text-base text-[#393939] leading-relaxed">{metric.text}</p>
                </div>
              );
            })}
          </div>

          <h3 className="font-grotesk font-medium text-2xl sm:text-3xl text-black tracking-tight mt-4">
            Post-Launch User Survey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {surveyResults.map((item) => (
              <div key={item.title} className="bg-[#f7f7f7] rounded-[24px] p-7 flex flex-col gap-3">
                <div className="h-2.5 rounded-full bg-[#d9d9d9] overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                  />
                </div>
                <p className="font-grotesk font-bold text-base text-black mt-2">{item.title}</p>
                <p className="font-grotesk text-base text-[#393939]">{item.text}</p>
              </div>
            ))}
          </div>

          <h3 className="font-grotesk font-medium text-2xl sm:text-3xl text-black tracking-tight mt-4">
            Key Takeaway
          </h3>
          <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-3xl [&>strong]:font-bold [&>strong]:text-black">
            The research didn&rsquo;t just inform the design - it <strong>set the targets.</strong>{' '}
            Every friction point uncovered became a measurable goal: pricing legibility, onboarding
            speed, dashboard clarity, and alert trust. The outcome isn&rsquo;t just a polished
            interface - it&rsquo;s a{' '}
            <strong>0 to 1 product, validated against real user expectations,</strong> that makes a
            technically demanding category feel simple from the first click to the daily dashboard.
          </p>
        </section>
      </div>
    </main>
  );
}
