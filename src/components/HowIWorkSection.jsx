import iconSearch from '../assets/how-i-work/search.svg';
import iconColors from '../assets/how-i-work/colors.svg';
import iconTable from '../assets/how-i-work/table.svg';
import iconTerminal from '../assets/how-i-work/terminal.svg';

import toolMaze from '../assets/how-i-work/tool-maze.svg';
import toolGoogleForms from '../assets/how-i-work/tool-googleforms.svg';
import toolAmplitude from '../assets/how-i-work/tool-amplitude.svg';
import toolMiro from '../assets/how-i-work/tool-miro.svg';
import toolNode from '../assets/how-i-work/tool-nodedotjs.svg';
import toolZeroheight from '../assets/how-i-work/tool-zeroheight.png';

import toolFigma from '../assets/icon-figma.svg';
import toolSketch from '../assets/toolkit/sketch.svg';
import toolNotion from '../assets/icon-notion.svg';
import toolJira from '../assets/icon-jira.svg';
import toolFramer from '../assets/toolkit/framer.png';
import toolWebflow from '../assets/icon-webflow.svg';
import toolWhimsical from '../assets/toolkit/whimsical.png';
import toolZeplin from '../assets/toolkit/zeplin.svg';
import toolHtml from '../assets/toolkit/html.svg';
import toolCss from '../assets/toolkit/css.svg';
import toolJs from '../assets/toolkit/javascript.svg';
import toolReact from '../assets/icon-react.svg';
import toolGit from '../assets/icon-git.svg';
import toolGithub from '../assets/toolkit/github.svg';
import toolVscode from '../assets/toolkit/vscode.svg';

const cards = [
  {
    icon: iconSearch,
    accent: true,
    title: 'Research & Strategy',
    subtitle: 'Decisions grounded in evidence, not opinion',
    description:
      'Interviews, surveys, and synthesis that define product targets before a single screen is designed — every decision tied to business goals, real user needs, and measurable outcomes.',
    skills: [
      'User Research',
      'Interviews & Surveys',
      'Synthesis',
      'Product Strategy',
      'Success Metrics',
    ],
    tools: [
      { icon: toolMaze, label: 'Maze' },
      { icon: toolGoogleForms, label: 'Google Forms' },
      { icon: toolJira, label: 'Jira' },
      { icon: toolAmplitude, label: 'Amplitude' },
      { icon: toolNotion, label: 'Notion' },
    ],
  },
  {
    icon: iconColors,
    accent: false,
    title: 'Product & Interface Design',
    subtitle: 'Complex, data-dense products made simple',
    description:
      'Building SaaS platforms from the ground up and shaping their information architecture — then crafting pixel-perfect UI that stays clear and seamless across every state, validated with high-fidelity prototypes before a line of code.',
    skills: [
      '0-to-1 Product Design',
      'Interface Design',
      'OOUX',
      'Information Architecture',
      'High-Fidelity Prototyping',
      'SaaS Platforms',
      'Systems Thinking',
    ],
    tools: [
      { icon: toolFigma, label: 'Figma' },
      { icon: toolSketch, label: 'Sketch' },
      { icon: toolFramer, label: 'Framer' },
      { icon: toolFigma, label: 'FigJam' },
      { icon: toolWebflow, label: 'Webflow' },
      { icon: toolMiro, label: 'Miro' },
      { icon: toolWhimsical, label: 'Whimsical' },
    ],
  },
  {
    icon: iconTable,
    accent: false,
    title: 'Systems, Tokens & Handoff',
    subtitle: 'Built for adoption, shipped clean',
    description:
      'Scalable, token-driven component libraries that keep teams consistent and delivery fast — paired with developer-ready specs and assets that keep every launch on time and easy to build.',
    skills: [
      'Design Systems',
      'Design Tokens',
      'Component Libraries',
      'Developer Handoff',
      'Documentation',
    ],
    tools: [
      { icon: toolFigma, label: 'Figma' },
      { icon: toolZeroheight, label: 'Zeroheight' },
      { icon: toolFigma, label: 'Figma Dev Mode' },
      { icon: toolZeplin, label: 'Zeplin' },
      { icon: toolJira, label: 'Jira' },
    ],
  },
  {
    icon: iconTerminal,
    accent: true,
    title: 'Engineering Fluency',
    subtitle: 'The bridge between design and engineering',
    description:
      'A Computer Science degree with OOP and Node.js behind me — I read and write front-end code, so my designs stay realistic, code-aware, and easy to implement.',
    skills: [
      'Code-Aware Design',
      'Component Thinking',
      'OOP Fundamentals',
      'Technical Feasibility',
      'Design–Dev Collaboration',
    ],
    tools: [
      { icon: toolNode, label: 'Node.js' },
      { icon: toolGit, label: 'Git' },
      { icon: toolGithub, label: 'GitHub' },
      { icon: toolVscode, label: 'VS Code' },
      { icon: toolReact, label: 'React' },
      { icon: toolJs, label: 'JavaScript' },
      { icon: toolHtml, label: 'HTML' },
      { icon: toolCss, label: 'CSS' },
    ],
  },
];

function SkillTag({ label, accent }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-grotesk font-medium ${
        accent ? 'bg-white/20 text-white' : 'bg-white border border-[#ececec] text-black'
      }`}
    >
      {label}
    </span>
  );
}

function ToolPill({ icon, label, accent }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-grotesk font-medium ${
        accent ? 'bg-white/20 text-white' : 'bg-white border border-[#ececec] text-black'
      }`}
    >
      <img
        src={icon}
        alt=""
        className={`w-4 h-4 object-contain ${accent ? 'brightness-0 invert' : ''}`}
      />
      {label}
    </span>
  );
}

export default function HowIWorkSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-2.5 mb-10">
          <p className="font-mono-bold text-base text-black">How I work</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            Designing with an engineer&rsquo;s mindset
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-[15px] p-[25px] flex flex-col gap-4 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(40,143,214,0.35)] ${
                card.accent ? 'bg-[#f4633a] text-white' : 'bg-[#f7f7f7] text-black'
              }`}
            >
              <img
                src={card.icon}
                alt=""
                className={`w-7 h-7 ${card.accent ? 'brightness-0 invert' : ''}`}
              />
              <div className="flex flex-col gap-2">
                <p className="font-grotesk font-bold text-base">{card.title}</p>
                <p className="font-grotesk font-medium text-base">{card.subtitle}</p>
                <p className="font-grotesk text-base">{card.description}</p>
              </div>
              <div
                className={`mt-auto border-t pt-4 flex flex-wrap gap-2 ${
                  card.accent ? 'border-white/30' : 'border-[#e5e5e5]'
                }`}
              >
                {card.skills.map((skill) => (
                  <SkillTag key={skill} label={skill} accent={card.accent} />
                ))}
              </div>
              <div
                className={`border-t pt-4 flex flex-wrap gap-2 ${
                  card.accent ? 'border-white/30' : 'border-[#e5e5e5]'
                }`}
              >
                {card.tools.map((tool) => (
                  <ToolPill
                    key={tool.label}
                    icon={tool.icon}
                    label={tool.label}
                    accent={card.accent}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
