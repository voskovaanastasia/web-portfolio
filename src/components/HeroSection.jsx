import DotsBackground from './DotsBackground';
import avatar from '../assets/avatar.webp';
import iconFigma from '../assets/icon-figma.svg';
import iconReact from '../assets/icon-react.svg';
import iconStack1 from '../assets/icon-stack1.webp';
import iconGit from '../assets/icon-git.svg';
import iconClaude from '../assets/icon-claude.svg';
import iconWebflow from '../assets/icon-webflow.svg';
import iconStack2 from '../assets/icon-stack2.webp';
import iconJira from '../assets/icon-jira.svg';
import iconNotion from '../assets/icon-notion.svg';

const stackIcons = [
  { src: iconFigma, alt: 'Figma', w: 25, h: 25 },
  { src: iconReact, alt: 'React', w: 24, h: 22 },
  { src: iconStack1, alt: 'Slack', w: 512, h: 512 },
  { src: iconGit, alt: 'Git', w: 25, h: 25 },
  { src: iconClaude, alt: 'Claude', w: 22, h: 22 },
  { src: iconWebflow, alt: 'Webflow', w: 25, h: 25 },
  { src: iconStack2, alt: 'Tailwind CSS', w: 512, h: 512 },
  { src: iconJira, alt: 'Jira', w: 25, h: 25 },
  { src: iconNotion, alt: 'Notion', w: 25, h: 25 },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-[85vh] flex items-center justify-center">
      <DotsBackground />
      <div className="relative z-10 flex flex-col items-center gap-5 max-w-3xl px-6 sm:px-8 py-20 text-center">
        {/* Hello line */}
        <div className="flex items-center gap-2.5">
          <img
            src={avatar}
            alt="Anastasiia"
            width={74}
            height={74}
            loading="eager"
            fetchPriority="high"
            className="w-9 h-9 rounded-full"
          />
          <span className="font-mono-bold font-bold text-[14px] text-black">
            Hello, I&rsquo;m <span className="text-[#288fd6]">Anastasiia</span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-grotesk font-medium text-[26px] sm:text-4xl md:text-5xl text-black tracking-tight leading-snug max-w-[280px] sm:max-w-none">
          I make complex,{' '}
          <span className="font-playwrite font-normal">data-dense</span>{' '}
          products feel simple, and ground every decision in research.
        </h1>

        {/* Subheadline */}
        <p className="font-grotesk text-[16px] sm:text-xl text-black max-w-[280px] sm:max-w-none">
          Currently designing uptime-monitoring platforms and scalable design systems that users actually love.
        </p>

        {/* Based in */}
        <div className="flex flex-col items-center gap-2.5">
          <p className="font-mono-bold text-[14px] text-black">Based in</p>
          <p className="font-grotesk font-medium text-[14px] text-black">
            🇪🇸 Granada, Spain
          </p>
        </div>

        {/* My Stack */}
        <div className="flex flex-col items-center gap-2.5">
          <p className="font-mono-bold text-[14px] text-black">My Stack</p>
          <div className="flex items-center">
            {stackIcons.map((icon, i) => (
              <div
                key={icon.alt + i}
                className="bg-[#fbfbfb] flex items-center justify-center w-[50px] h-[50px] rounded-full -mr-4 last:mr-0 shadow-[1px_1px_5px_rgba(124,124,124,0.25)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-110 hover:z-10 relative cursor-pointer"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.w}
                  height={icon.h}
                  className="w-[25px] h-[25px]"
                />
              </div>
            ))}
          </div>
          <p className="font-caveat font-bold text-xl text-[#6d3fc4]">+ more</p>
        </div>

        {/* CTA + handwritten note, tighter pairing */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="/Anastasiia-Voskova-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Anastasiia-Voskova-Resume.pdf"
            className="bg-[#1f7ab8] hover:bg-[#186a9c] text-white font-grotesk font-medium text-base px-5 py-2.5 rounded-full transition-colors"
          >
            Download Resume
          </a>
          <p className="font-caveat font-bold text-xl text-[#6d3fc4] max-w-[280px] sm:max-w-[300px]">
            This entire portfolio was built with Claude Code.
          </p>
        </div>
      </div>
    </section>
  );
}
