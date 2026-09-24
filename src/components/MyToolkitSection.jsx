import { useState } from 'react';
import { getToolsByCategory } from '../data/tools';

const designTools = getToolsByCategory('design');
const softwareTools = getToolsByCategory('software');
const programmingTools = getToolsByCategory('programming');

const languages = [
  { flag: '🇬🇧', label: 'English', level: 'B2 (Upper-Intermediate)' },
  { flag: '🇺🇦', label: 'Ukrainian', level: 'Native' },
  { flag: '🇪🇸', label: 'Spanish', level: 'A2 (Basic)' },
];

function ToolCard({ icon, label }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="bg-white border border-[#ececec] rounded-[15px] w-[50px] h-[50px] flex items-center justify-center shrink-0 p-[7px]">
        <img
          src={icon}
          alt=""
          width={24}
          height={24}
          loading="lazy"
          decoding="async"
          className="w-[25px] h-[25px] object-contain"
        />
      </div>
      <p className="font-grotesk font-bold text-sm text-black">{label}</p>
    </div>
  );
}

function ToolGroup({ label, tools }) {
  const [expanded, setExpanded] = useState(false);
  const featured = tools.filter((tool) => tool.featured);
  const hasMore = tools.length > featured.length;
  const visibleTools = expanded ? tools : featured;

  return (
    <div className="flex flex-col gap-5 w-full">
      <p className="font-mono-bold text-base text-black">{label}</p>
      <div className="bg-[#f7f7f7] rounded-[15px] p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-5 w-full">
        {visibleTools.map((tool) => (
          <ToolCard key={tool.id} icon={tool.icon} label={tool.name} />
        ))}
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center text-left"
          >
            <p className="font-caveat font-bold text-xl text-[#6d3fc4]">
              {expanded ? 'show less' : '+ more'}
            </p>
          </button>
        )}
      </div>
    </div>
  );
}

export default function MyToolkitSection() {
  return (
    <section id="toolkit" className="relative overflow-hidden bg-white py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-start gap-5 text-left">
        <p className="font-caveat font-bold text-xl text-[#6d3fc4]">
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

          <div className="flex flex-col gap-5 w-full">
            <p className="font-mono-bold text-base text-black">Language</p>
            <div className="bg-[#f7f7f7] rounded-[15px] p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-5 w-full">
              {languages.map((lang) => (
                <div key={lang.label} className="flex items-center gap-2.5">
                  <div className="bg-white border border-[#ececec] rounded-[15px] w-[50px] h-[50px] flex items-center justify-center shrink-0">
                    <span className="text-2xl leading-none">{lang.flag}</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-grotesk font-bold text-sm text-black">{lang.label}</p>
                    <p className="font-grotesk text-xs text-[#6b6a67]">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
