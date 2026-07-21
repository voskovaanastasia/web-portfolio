import iconSearch from '../assets/how-i-work/search.svg';
import iconColors from '../assets/how-i-work/colors.svg';
import iconIdea from '../assets/how-i-work/idea.svg';
import iconRocket from '../assets/how-i-work/rocket.svg';
import iconDashboard from '../assets/how-i-work/dashboard.svg';
import iconTable from '../assets/how-i-work/table.svg';
import iconPlay from '../assets/how-i-work/play.svg';
import iconCheckmark from '../assets/how-i-work/checkmark.svg';
import iconCode from '../assets/how-i-work/code.svg';
import iconTerminal from '../assets/how-i-work/terminal.svg';

const cards = [
  {
    icon: iconSearch,
    title: 'UX Research',
    description:
      'Interviews, surveys and synthesis that define product targets before a single screen is designed.',
  },
  {
    icon: iconColors,
    title: 'Interface Design',
    description:
      'Pixel-perfect UI that balances visual beauty, clarity and seamless interaction.',
  },
  {
    icon: iconIdea,
    title: 'Product Thinking',
    description:
      'Design decisions grounded in business goals, real user needs and measurable outcomes.',
  },
  {
    icon: iconRocket,
    title: '0-to-1 Product Design',
    description:
      'Building SaaS platforms from the ground up - marketing and product surfaces owned end to end.',
  },
  {
    icon: iconDashboard,
    title: 'IA & OOUX',
    description:
      'Making complex, data-dense products feel simple and learnable across every view and state.',
  },
  {
    icon: iconTable,
    title: 'Design Systems & Token',
    description:
      'Scalable, token-driven component libraries that keep teams consistent and ship velocity high.',
  },
  {
    icon: iconPlay,
    title: 'Prototyping',
    description:
      'Interactive, high-fidelity prototypes that test concepts before a single line of code.',
  },
  {
    icon: iconCheckmark,
    title: 'Design Handoff',
    description:
      'Clean, developer-ready specs and assets that keep launches on time and on point.',
  },
  {
    icon: iconCode,
    title: 'Front-End Fluency',
    description:
      'I read and write HTML, CSS and JavaScript - so my designs are realistic, code-aware and easy to implement.',
  },
  {
    icon: iconTerminal,
    title: 'CS Foundation',
    description:
      'A Computer Science degree with OOP and Node.js - the bridge I use to speak fluently between design and engineering.',
  },
];

export default function HowIWorkSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-2.5 mb-10">
          <p className="font-mono-bold text-base text-black">How I work</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            Designing with an engineer&rsquo;s mindset
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[15px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-[#d7d7d7] rounded-[10px] p-[15px] flex flex-col gap-2.5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#288fd6] hover:shadow-[0_10px_30px_rgba(40,143,214,0.35)]"
            >
              <img src={card.icon} alt="" className="w-6 h-6" />
              <p className="font-grotesk font-bold text-sm text-black">{card.title}</p>
              <p className="font-grotesk text-sm text-black">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
