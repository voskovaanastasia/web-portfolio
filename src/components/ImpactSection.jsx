export default function ImpactSection() {
  const metrics = [
    {
      number: '7.4%',
      label: 'Signup Conversion Rate',
      project: 'Farsafe',
      description: 'Achieved through pricing transparency strategy',
      color: 'bg-gray-50',
      numberColor: 'text-gray-900',
      highlight: false,
    },
    {
      number: '92%',
      label: 'Dashboard Task Success',
      project: 'bART Solutions',
      description: 'High usability and learnability in data-dense interface',
      color: 'bg-gradient-to-br from-blue-100 to-blue-200',
      numberColor: 'text-blue-700',
      highlight: true,
    },
    {
      number: '1m 41s',
      label: 'Time-to-First-Probe',
      project: 'Farsafe',
      description: 'Optimized user onboarding and product discovery',
      color: 'bg-gray-900 text-white',
      numberColor: 'text-white',
      highlight: false,
    },
    {
      number: '6+',
      label: 'Years of Experience',
      project: 'Web, Mobile & SaaS',
      description: 'Product design, UX/UI, design systems & research',
      color: 'bg-gray-50',
      numberColor: 'text-gray-900',
      highlight: false,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-mono text-gray-600 mb-4 tracking-wider">IMPACT</p>
          <h2 className="text-5xl font-bold mb-6 text-blue-600">Proven Results</h2>
          <p className="text-lg text-gray-700">
            Design decisions grounded in research, measured by real outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border border-gray-200 ${metric.color}`}
            >
              <p className={`text-5xl font-bold mb-3 ${metric.numberColor}`}>
                {metric.number}
              </p>
              <p className={`font-bold text-lg mb-2 ${metric.numberColor}`}>
                {metric.label}
              </p>
              <p className={`text-sm mb-1 ${metric.highlight ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
                {metric.project}
              </p>
              <p className={`text-xs ${metric.highlight ? 'text-blue-600' : 'text-gray-500'}`}>
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
