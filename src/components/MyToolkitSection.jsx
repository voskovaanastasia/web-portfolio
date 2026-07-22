import iconFigma from '../assets/icon-figma.svg';
import iconReact from '../assets/icon-react.svg';
import iconGit from '../assets/icon-git.svg';
import iconClaude from '../assets/icon-claude.svg';
import iconWebflow from '../assets/icon-webflow.svg';
import iconJira from '../assets/icon-jira.svg';
import iconNotion from '../assets/icon-notion.svg';

import iconSketch from '../assets/toolkit/sketch.svg';
import iconIllustrator from '../assets/toolkit/illustrator.svg';
import iconPhotoshop from '../assets/toolkit/photoshop.svg';
import iconLightroom from '../assets/toolkit/lightroom.svg';
import iconIndesign from '../assets/toolkit/indesign.svg';
import iconMidjourney from '../assets/toolkit/midjourney.svg';
import iconZeplin from '../assets/toolkit/zeplin.svg';
import iconAffinity from '../assets/toolkit/affinity.svg';
import iconMaterialDesign from '../assets/toolkit/material-design.png';
import iconApple from '../assets/toolkit/apple.svg';

import iconHotjar from '../assets/toolkit/hotjar.svg';
import iconStorybook from '../assets/toolkit/storybook.svg';
import iconConfluence from '../assets/toolkit/confluence.svg';
import iconWhimsical from '../assets/toolkit/whimsical.png';
import iconGoogleAnalytics from '../assets/toolkit/googleanalytics.svg';
import iconFramer from '../assets/toolkit/framer.png';
import iconGemini from '../assets/toolkit/gemini.svg';
import iconOpenai from '../assets/toolkit/openai.svg';
import iconSlack from '../assets/toolkit/slack.svg';
import iconAsana from '../assets/toolkit/asana.svg';

import iconHtml from '../assets/toolkit/html.svg';
import iconCss from '../assets/toolkit/css.svg';
import iconJavascript from '../assets/toolkit/javascript.svg';
import iconTailwind from '../assets/toolkit/tailwind.png';
import iconVercel from '../assets/toolkit/vercel.svg';
import iconGithub from '../assets/toolkit/github.svg';
import iconVscode from '../assets/toolkit/vscode.svg';
import iconCursor from '../assets/toolkit/cursor.png';

const designTools = [
  { icon: iconFigma, label: 'Figma' },
  { icon: iconSketch, label: 'Sketch' },
  { icon: iconIllustrator, label: 'Illustrator' },
  { icon: iconPhotoshop, label: 'Photoshop' },
  { icon: iconLightroom, label: 'Lightroom' },
  { icon: iconIndesign, label: 'InDesign' },
  { icon: iconMidjourney, label: 'Midjourney' },
  { icon: iconZeplin, label: 'Zeplin' },
  { icon: iconAffinity, label: 'Affinity' },
  { icon: iconMaterialDesign, label: 'Material Design' },
  { icon: iconApple, label: 'Human Interface' },
];

const softwareTools = [
  { icon: iconClaude, label: 'Claude' },
  { icon: iconNotion, label: 'Notion' },
  { icon: iconJira, label: 'Jira' },
  { icon: iconHotjar, label: 'Hotjar' },
  { icon: iconStorybook, label: 'Storybook' },
  { icon: iconConfluence, label: 'Confluence' },
  { icon: iconWhimsical, label: 'Whimsical' },
  { icon: iconGoogleAnalytics, label: 'Google Analytics' },
  { icon: iconFramer, label: 'Framer' },
  { icon: iconWebflow, label: 'Webflow' },
  { icon: iconGemini, label: 'Gemini' },
  { icon: iconOpenai, label: 'ChatGPT' },
  { icon: iconSlack, label: 'Slack' },
  { icon: iconAsana, label: 'Asana' },
];

const programmingTools = [
  { icon: iconHtml, label: 'HTML' },
  { icon: iconCss, label: 'CSS' },
  { icon: iconJavascript, label: 'JavaScript' },
  { icon: iconReact, label: 'React' },
  { icon: iconTailwind, label: 'Tailwind CSS' },
  { icon: iconVercel, label: 'Vercel' },
  { icon: iconGithub, label: 'GitHub' },
  { icon: iconGit, label: 'Git' },
  { icon: iconVscode, label: 'VS Code' },
  { icon: iconClaude, label: 'Claude Code' },
  { icon: iconFigma, label: 'Figma API' },
  { icon: iconCursor, label: 'Cursor' },
];

function ToolCard({ icon, label }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="bg-white border border-[#ececec] rounded-[15px] w-[50px] h-[50px] flex items-center justify-center shrink-0 p-[7px]">
        <img src={icon} alt="" className="w-[25px] h-[25px] object-contain" />
      </div>
      <p className="font-grotesk font-bold text-sm text-black">{label}</p>
    </div>
  );
}

function ToolGroup({ label, tools }) {
  return (
    <div className="flex flex-col gap-[15px] w-full">
      <p className="font-mono-bold text-base text-black">{label}</p>
      <div className="bg-[#f7f7f7] rounded-[15px] p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-5 w-full">
        {tools.map((tool) => (
          <ToolCard key={tool.label} icon={tool.icon} label={tool.label} />
        ))}
        <div className="flex items-center">
          <p className="font-caveat font-bold text-xl text-[#ff7043]">+ more</p>
        </div>
      </div>
    </div>
  );
}

export default function MyToolkitSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-start gap-5 text-left">
        <p className="font-caveat font-bold text-xl text-[#ff7043]">
          Computer Science is my secret weapon.
        </p>
        <h2 className="font-grotesk font-medium text-3xl sm:text-4xl md:text-5xl text-black tracking-tight leading-snug">
          I am Anastasiia Voskova,
          <span className="font-playwrite font-normal block mt-2">
            a designer who thinks like an engineer.
          </span>
        </h2>

        <div className="flex flex-col gap-8 w-full mt-6 text-left">
          <ToolGroup label="DESIGN" tools={designTools} />
          <ToolGroup label="SOFTWARE" tools={softwareTools} />
          <ToolGroup label="PROGRAMMING" tools={programmingTools} />
        </div>
      </div>
    </section>
  );
}
