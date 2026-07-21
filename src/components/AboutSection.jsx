export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-mono text-gray-600 mb-4 tracking-wider">ABOUT</p>
          <h2 className="text-5xl font-bold mb-8 text-blue-600">Designer. Systems Thinker. Problem Solver.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">
              I'm a product designer with 6+ years of experience across web and mobile. I specialize in making <span className="text-blue-600 font-semibold">complex, data-dense products feel simple</span> and intuitive.
            </p>
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">
              My approach is grounded in <span className="text-blue-600 font-semibold">research and measurable outcomes</span>. I've designed SaaS platforms from the ground up (0-to-1), built scalable design systems, and led product experiences that improved key metrics like task success rates and conversion rates.
            </p>
            <p className="text-xl text-gray-800 leading-relaxed">
              I'm backed by a systems-oriented background in Computer-Aided Design, which helps me think about products holistically—from user research and information architecture to scalable design patterns and final UI.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h4 className="text-sm font-mono text-gray-600 mb-3 tracking-wider">DESIGN PHILOSOPHY</h4>
              <p className="text-gray-900 font-semibold text-lg">
                Ground decisions in research. Measure impact. Build systems that scale.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h4 className="text-sm font-mono text-gray-600 mb-3 tracking-wider">WHAT SETS ME APART</h4>
              <p className="text-gray-900 font-semibold text-lg">
                I bridge design and product. I think like an architect. I ship with confidence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h4 className="text-sm font-mono text-gray-600 mb-3 tracking-wider">BASED IN</h4>
              <p className="text-gray-900 font-semibold text-lg">
                Granada, Spain 🇪🇸
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
