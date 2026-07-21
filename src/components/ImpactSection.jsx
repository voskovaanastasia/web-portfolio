const metrics = [
  {
    number: '1m 41s',
    label: 'Time-to-First-Probe',
    project: 'Farsafe',
    description: 'Optimized user onboarding and product discovery',
    card: 'bg-[#22292f] text-white',
    number_color: 'text-white',
    meta_color: 'text-[#bdbdbd]',
  },
  {
    number: '−40%',
    label: 'Bounce Rate',
    project: 'bART Solutions',
    description: '68% → 41% after restructured IA',
    card: 'bg-white text-black',
    number_color: 'text-[#288fd6]',
    meta_color: 'text-black',
  },
  {
    number: '0→1',
    label: 'Secure Send / Swap',
    project: 'Crypto Wallet',
    description: 'Guided flow designed to prevent lost funds',
    card: 'bg-[#288fd6] text-white',
    number_color: 'text-white',
    meta_color: 'text-[#d8efff]',
  },
  {
    number: '92%',
    label: 'Dashboard Task Success',
    project: 'Farsafe',
    description: 'High usability in a data-dense interface',
    card: 'bg-white text-black',
    number_color: 'text-[#288fd6]',
    meta_color: 'text-black',
  },
  {
    number: '5+',
    label: 'Years of Experience',
    project: 'Web, Mobile & SaaS',
    description: 'Product design, UX/UI, design systems & research',
    card: 'bg-white text-black',
    number_color: 'text-[#288fd6]',
    meta_color: 'text-black',
  },
];

export default function ImpactSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="font-mono-bold text-sm text-black tracking-wider mb-4">Proven Results</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl md:text-5xl text-black tracking-tight leading-snug">
            Design decisions grounded in research, measured by real outcomes.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className={`rounded-[15px] border border-[#d7d7d7] p-5 flex flex-col gap-2.5 ${metric.card}`}
            >
              <p className={`font-grotesk font-bold text-3xl sm:text-4xl whitespace-nowrap ${metric.number_color}`}>
                {metric.number}
              </p>
              <p className="font-grotesk font-bold text-base">{metric.label}</p>
              <p className={`font-grotesk text-sm ${metric.meta_color}`}>{metric.project}</p>
              <p className="font-grotesk text-sm">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
