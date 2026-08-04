import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionMenu from '../components/SectionMenu';
import caseBart from '../assets/case-bart.png';
import toolFigma from '../assets/icon-figma.svg';
import toolJira from '../assets/icon-jira.svg';
import toolNotion from '../assets/icon-notion.svg';

const caseSections = [
  { id: 'case-hero', label: 'Back to Top' },
  { id: 'intro', label: 'Project Intro' },
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

const project = {
  heroImage: caseBart,
  name: 'bART Solutions',
  title: 'Enterprise Web Products & Design System',
  tags: [
    'Enterprise',
    'Web & Mobile',
    'Design Tokens',
    'Design System',
    'Data-Dense Dashboards',
  ],
  meta: [
    { label: 'Participation', value: 'UX/UI Designer' },
    { label: 'Service', value: 'UX/UI Design  Design System' },
    { label: 'My Team', value: 'Product Managers, Developers, Designers' },
    { label: 'Timeline', value: '2 years 8 months' },
  ],
  tools: [
    { icon: toolFigma, label: 'Figma' },
    { icon: toolJira, label: 'Jira' },
    { icon: toolNotion, label: 'Notion' },
  ],
  summary: [
    {
      label: 'PROBLEM',
      text: 'Information-heavy interfaces made task completion slow and error-prone.',
    },
    {
      label: 'MY ROLE',
      text: 'UX/UI Designer — design system, dashboards, and mobile products.',
    },
    {
      label: 'KEY DECISION',
      text: 'Progressive disclosure of complexity backed by extensive usability testing.',
    },
  ],
  outcome: { value: '−40%', label: 'Bounce Rate' },
  intro: {
    heading: 'Enterprise products, designed for daily work.',
    body: (
      <>
        At <strong>bART Solutions</strong> I owned the UX/UI for{' '}
        <strong>production web and mobile products serving enterprise clients.</strong> I built
        scalable design systems with design tokens and worked across complex, data-dense
        dashboards, where <strong>the core challenge was</strong> keeping information-heavy
        screens fast to read and safe to operate.
      </>
    ),
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
          <ImagePlaceholder filename="case-bart-intro.png" className="min-h-[420px]" />
        </section>

        {/* Case content in progress */}
        <div className="pb-24 flex flex-col items-center gap-4">
          <ImagePlaceholder filename="bart case content (in progress)" className="w-full min-h-[320px]" />
          <p className="font-grotesk text-base text-[#6b6a67]">Full case study coming soon.</p>
        </div>
      </div>
    </main>
  );
}
