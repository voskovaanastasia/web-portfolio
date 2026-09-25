
const steps = [
  {
    number: '1',
    title: 'Frame the problem',
    description:
      "Before anything visual, I get clear on what we're actually solving - the user, the friction, the outcome. Wireframes and UX direction come out of that clarity, in Figma.",
  },
  {
    number: '2',
    title: 'Turn design into instructions',
    description:
      "I convert flows, states, and edge cases into precise written specs (Markdown) — a briefing detailed enough that an AI can't misread my intent.",
  },
  {
    number: '3',
    title: 'Build with AI',
    description:
      'Those specs go to AI coding agents that generate real, semantic front-end — layout, styling, and interaction logic that behaves like the product, not a demo.',
  },
  {
    number: '4',
    title: 'Put it live',
    description:
      'The result ships to Firebase Hosting as a real URL you can open and use — decisions get tested on a live product, not argued over a static frame.',
  },
  {
    number: '5',
    title: 'Test & refine',
    description:
      'I put the prototype in front of real users, watch where they stumble, and feed those insights back into the design — closing the gap between "looks done" and "works."',
  },
];

export default function AiDesignerSection() {
  return (
    <section id="ai-designer" className="relative overflow-hidden bg-white py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4">
          <p className="font-mono-bold text-[14px] text-black">AI + DESIGNER</p>
          <div className="max-w-[590px] flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <p className="font-caveat font-bold text-xl text-[#6d3fc4]">
                Where design stops being a picture
              </p>
              <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-black tracking-tight">
                From static concepts to live prototypes.
              </h2>
            </div>
            <p className="font-grotesk text-sm text-[#6b6a67] leading-relaxed">
              I don&rsquo;t just hand off screens - I ship live, interactive prototypes.
              By pairing product thinking with modern AI models, I close the gap between
              UX design and engineering, so ideas get validated in the browser, not in a
              slide. Here&rsquo;s how I turn a product concept into a working app using AI
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step, index) => {
            const isFirst = index === 0;
            const isLast = index === steps.length - 1;
            const cardClass = isFirst
              ? 'bg-[#22292f] text-white'
              : isLast
                ? 'bg-[#1f7ab8] text-white'
                : 'bg-[#f7f7f7] text-black';
            const numberClass = isFirst || isLast ? 'text-white' : 'text-[#288fd6]';
            return (
              <div
                key={step.number}
                className={`rounded-[15px] p-3 sm:p-5 flex flex-col gap-1 sm:gap-2.5 ${cardClass}`}
              >
                <p className={`font-grotesk font-bold text-[30px] sm:text-5xl ${numberClass}`}>
                  {step.number}
                </p>
                <p className="font-grotesk font-bold text-[14px]">{step.title}</p>
                <p className="font-grotesk text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
