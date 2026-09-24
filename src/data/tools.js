import iconFigma from '../assets/icon-figma.svg';
import iconSketch from '../assets/toolkit/sketch.svg';
import iconIllustrator from '../assets/toolkit/illustrator.svg';
import iconPhotoshop from '../assets/toolkit/photoshop.svg';
import iconLightroom from '../assets/toolkit/lightroom.svg';
import iconIndesign from '../assets/toolkit/indesign.svg';
import iconMidjourney from '../assets/toolkit/midjourney.svg';
import iconZeplin from '../assets/toolkit/zeplin.svg';
import iconAffinity from '../assets/toolkit/affinity.svg';
import iconMaterialDesign from '../assets/toolkit/material-design.webp';
import iconApple from '../assets/toolkit/apple.svg';

import iconClaude from '../assets/icon-claude.svg';
import iconNotion from '../assets/icon-notion.svg';
import iconJira from '../assets/icon-jira.svg';
import iconSlack from '../assets/toolkit/slack.svg';
import iconFramer from '../assets/toolkit/framer.webp';
import iconWebflow from '../assets/icon-webflow.svg';
import iconHotjar from '../assets/toolkit/hotjar.svg';
import iconZeroheight from '../assets/how-i-work/tool-zeroheight.webp';
import iconConfluence from '../assets/toolkit/confluence.svg';
import iconWhimsical from '../assets/toolkit/whimsical.webp';
import iconGoogleAnalytics from '../assets/toolkit/googleanalytics.svg';
import iconGemini from '../assets/toolkit/gemini.svg';
import iconOpenai from '../assets/toolkit/openai.svg';
import iconAsana from '../assets/toolkit/asana.svg';
import iconAmplitude from '../assets/how-i-work/tool-amplitude.svg';
import iconMaze from '../assets/how-i-work/tool-maze.svg';
import iconGoogleForms from '../assets/how-i-work/tool-googleforms.svg';
import iconMiro from '../assets/how-i-work/tool-miro.svg';

import iconHtml from '../assets/toolkit/html.svg';
import iconCss from '../assets/toolkit/css.svg';
import iconJavascript from '../assets/toolkit/javascript.svg';
import iconReact from '../assets/icon-react.svg';
import iconTailwind from '../assets/toolkit/tailwind.webp';
import iconVercel from '../assets/toolkit/vercel.svg';
import iconGithub from '../assets/toolkit/github.svg';
import iconGit from '../assets/icon-git.svg';
import iconVscode from '../assets/toolkit/vscode.svg';
import iconCursor from '../assets/toolkit/cursor.webp';
import iconNode from '../assets/how-i-work/tool-nodedotjs.svg';

// Single source of truth for every tool referenced on the home page.
// - `category` groups tools for the My Toolkit section (design / software / programming).
// - `featured` controls which tools My Toolkit shows before "+ more" is expanded.
// - `pillars` lists the How I Work pillar ids a tool backs (each pillar renders at most 4).
export const tools = [
  // Design
  { id: 'figma', name: 'Figma', icon: iconFigma, category: 'design', featured: true, pillars: ['design', 'systems'] },
  { id: 'sketch', name: 'Sketch', icon: iconSketch, category: 'design', featured: true, pillars: ['design'] },
  { id: 'illustrator', name: 'Illustrator', icon: iconIllustrator, category: 'design', featured: true, pillars: [] },
  { id: 'photoshop', name: 'Photoshop', icon: iconPhotoshop, category: 'design', featured: true, pillars: [] },
  { id: 'lightroom', name: 'Lightroom', icon: iconLightroom, category: 'design', featured: false, pillars: [] },
  { id: 'indesign', name: 'InDesign', icon: iconIndesign, category: 'design', featured: false, pillars: [] },
  { id: 'midjourney', name: 'Midjourney', icon: iconMidjourney, category: 'design', featured: false, pillars: [] },
  { id: 'zeplin', name: 'Zeplin', icon: iconZeplin, category: 'design', featured: false, pillars: ['systems'] },
  { id: 'affinity', name: 'Affinity', icon: iconAffinity, category: 'design', featured: false, pillars: [] },
  { id: 'material-design', name: 'Material Design', icon: iconMaterialDesign, category: 'design', featured: false, pillars: [] },
  { id: 'human-interface', name: 'Human Interface', icon: iconApple, category: 'design', featured: false, pillars: [] },

  // Software
  { id: 'notion', name: 'Notion', icon: iconNotion, category: 'software', featured: true, pillars: ['research'] },
  { id: 'jira', name: 'Jira', icon: iconJira, category: 'software', featured: true, pillars: ['systems'] },
  { id: 'slack', name: 'Slack', icon: iconSlack, category: 'software', featured: true, pillars: [] },
  { id: 'framer', name: 'Framer', icon: iconFramer, category: 'software', featured: true, pillars: ['design'] },
  { id: 'webflow', name: 'Webflow', icon: iconWebflow, category: 'software', featured: true, pillars: ['design'] },
  { id: 'hotjar', name: 'Hotjar', icon: iconHotjar, category: 'software', featured: false, pillars: [] },
  { id: 'zeroheight', name: 'Zeroheight', icon: iconZeroheight, category: 'software', featured: false, pillars: ['systems'] },
  { id: 'confluence', name: 'Confluence', icon: iconConfluence, category: 'software', featured: false, pillars: [] },
  { id: 'whimsical', name: 'Whimsical', icon: iconWhimsical, category: 'software', featured: false, pillars: [] },
  { id: 'google-analytics', name: 'Google Analytics', icon: iconGoogleAnalytics, category: 'software', featured: false, pillars: [] },
  { id: 'gemini', name: 'Gemini', icon: iconGemini, category: 'software', featured: false, pillars: [] },
  { id: 'chatgpt', name: 'ChatGPT', icon: iconOpenai, category: 'software', featured: false, pillars: [] },
  { id: 'asana', name: 'Asana', icon: iconAsana, category: 'software', featured: false, pillars: [] },
  { id: 'amplitude', name: 'Amplitude', icon: iconAmplitude, category: 'software', featured: false, pillars: ['research'] },
  { id: 'maze', name: 'Maze', icon: iconMaze, category: 'software', featured: false, pillars: ['research'] },
  { id: 'google-forms', name: 'Google Forms', icon: iconGoogleForms, category: 'software', featured: false, pillars: ['research'] },
  { id: 'miro', name: 'Miro', icon: iconMiro, category: 'software', featured: false, pillars: [] },

  // Programming
  { id: 'react', name: 'React', icon: iconReact, category: 'programming', featured: true, pillars: ['engineering'] },
  { id: 'git', name: 'Git', icon: iconGit, category: 'programming', featured: true, pillars: ['engineering'] },
  { id: 'github', name: 'GitHub', icon: iconGithub, category: 'programming', featured: true, pillars: ['engineering'] },
  { id: 'vscode', name: 'VS Code', icon: iconVscode, category: 'programming', featured: true, pillars: [] },
  { id: 'claude-code', name: 'Claude Code', icon: iconClaude, category: 'programming', featured: true, pillars: [] },
  { id: 'html', name: 'HTML', icon: iconHtml, category: 'programming', featured: false, pillars: [] },
  { id: 'css', name: 'CSS', icon: iconCss, category: 'programming', featured: false, pillars: [] },
  { id: 'javascript', name: 'JavaScript', icon: iconJavascript, category: 'programming', featured: false, pillars: [] },
  { id: 'tailwind', name: 'Tailwind CSS', icon: iconTailwind, category: 'programming', featured: false, pillars: [] },
  { id: 'vercel', name: 'Vercel', icon: iconVercel, category: 'programming', featured: false, pillars: [] },
  { id: 'cursor', name: 'Cursor', icon: iconCursor, category: 'programming', featured: false, pillars: [] },
  { id: 'nodejs', name: 'Node.js', icon: iconNode, category: 'programming', featured: false, pillars: ['engineering'] },
];

export const getToolsForPillar = (pillarId, max = 4) =>
  tools.filter((tool) => tool.pillars.includes(pillarId)).slice(0, max);

export const getToolsByCategory = (category) => tools.filter((tool) => tool.category === category);
