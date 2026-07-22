import DotsBackground from './DotsBackground';
import avatar from '../assets/avatar.png';
import iconFigma from '../assets/icon-figma.svg';
import iconReact from '../assets/icon-react.svg';
import iconStack1 from '../assets/icon-stack1.png';
import iconGit from '../assets/icon-git.svg';
import iconClaude from '../assets/icon-claude.svg';
import iconWebflow from '../assets/icon-webflow.svg';
import iconStack2 from '../assets/icon-stack2.png';
import iconJira from '../assets/icon-jira.svg';
import iconNotion from '../assets/icon-notion.svg';

const stackIcons = [
  { src: iconFigma, alt: 'Figma' },
  { src: iconReact, alt: 'React' },
  { src: iconStack1, alt: 'Tool' },
  { src: iconGit, alt: 'Git' },
  { src: iconClaude, alt: 'Claude' },
  { src: iconWebflow, alt: 'Webflow' },
  { src: iconStack2, alt: 'Tool' },
  { src: iconJira, alt: 'Jira' },
  { src: iconNotion, alt: 'Notion' },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center">
      <DotsBackground />
      <div className="relative z-10 flex flex-col items-center gap-5 max-w-3xl px-4 py-20 text-center">
        {/* Hello line */}
        <div className="flex items-center gap-2.5">
          <img src={avatar} alt="Anastasiia" className="w-9 h-9 rounded-full" />
          <span className="font-mono-bold font-bold text-base text-black">
            Hello I&rsquo;m <span className="text-[#288fd6]">Anastasiia</span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-grotesk font-medium text-3xl sm:text-4xl md:text-5xl text-black tracking-tight leading-snug">
          I make complex,{' '}
          <span className="font-playwrite font-normal">data-dense</span>{' '}
          products feel simple, and ground every decision in research.
        </h1>

        {/* Subheadline */}
        <p className="font-grotesk text-lg sm:text-xl text-black">
          Currently designing uptime-monitoring platforms and scalable design systems that users actually love.
        </p>

        {/* Based in */}
        <div className="flex flex-col items-center gap-2.5">
          <p className="font-mono-bold text-base text-black">Based in</p>
          <p className="font-grotesk font-medium text-base text-black">
            🇪🇸 Granada, Spain
          </p>
        </div>

        {/* My Stack */}
        <div className="flex flex-col items-center gap-2.5">
          <p className="font-mono-bold text-base text-black">My Stack</p>
          <div className="flex items-center">
            {stackIcons.map((icon, i) => (
              <div
                key={icon.alt + i}
                className="bg-[#fbfbfb] flex items-center justify-center w-[50px] h-[50px] rounded-full -mr-2 last:mr-0 shadow-[1px_1px_5px_rgba(124,124,124,0.25)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-110 hover:z-10 relative cursor-pointer"
              >
                <img src={icon.src} alt={icon.alt} className="w-[25px] h-[25px]" />
              </div>
            ))}
          </div>
          <p className="font-caveat font-bold text-xl text-[#ff7043]">+ more</p>
        </div>

        {/* CTA + handwritten note, tighter pairing */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="#resume"
            className="bg-[#288fd6] hover:bg-[#1f7ab8] text-white font-grotesk font-medium text-base px-5 py-2.5 rounded-full transition-colors"
          >
            Download Resume
          </a>
          <p className="font-caveat font-bold text-xl text-[#ff7043] max-w-[280px] sm:max-w-[300px]">
            I built this portfolio entirely with Claude Code. Just saying!
          </p>
        </div>
      </div>
    </section>
  );
}
