import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import SectionMenu from '../components/SectionMenu';
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
];

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

// The Work page currently shows the same case twice as a placeholder.
cases['farsafe-2'] = cases.farsafe;

export default function ProjectPage() {
  const { id } = useParams();
  const project = cases[id];

  useEffect(() => {
    if (project) document.title = `${project.name} — Anastasiia Voskova`;
    return () => {
      document.title = 'Anastasiia Voskova';
    };
  }, [project]);

  if (!project) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-white">
        <p className="font-grotesk text-2xl text-black">Case study not found</p>
        <Link to="/projects" className="font-grotesk text-[#288fd6] hover:underline">
          Back to Works
        </Link>
      </main>
    );
  }

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
            <p className="font-mono-bold text-base text-black">PROBLEM</p>
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
      </div>
    </main>
  );
}
