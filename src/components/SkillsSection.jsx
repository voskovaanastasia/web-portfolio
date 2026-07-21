export default function SkillsSection() {
  const skillCategories = [
    {
      category: 'Core Strengths',
      skills: ['UX Research & Insights', 'Product Design (0-to-1)', 'Design Systems', 'Information Architecture', 'Interaction Design', 'Usability Testing'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Figma', 'FigJam', 'Miro', 'Notion', 'Adobe Creative Suite', 'Prototyping Tools'],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-mono text-gray-600 mb-4 tracking-wider">SKILLS</p>
          <h2 className="text-5xl font-bold text-blue-600">Expertise & Tools</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {skillCategories.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-8 text-gray-900">{section.category}</h3>
              <div className="space-y-4">
                {section.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                    <p className="text-gray-800 text-lg">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 border border-blue-200">
          <p className="text-sm font-mono text-blue-700 mb-4 tracking-wider font-semibold">LANGUAGES</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="font-bold text-xl text-gray-900">🇺🇦 Ukrainian</p>
              <p className="text-blue-700 font-semibold mt-1">Native</p>
            </div>
            <div>
              <p className="font-bold text-xl text-gray-900">🇬🇧 English</p>
              <p className="text-blue-700 font-semibold mt-1">B2 (Fluent)</p>
            </div>
            <div>
              <p className="font-bold text-xl text-gray-900">🇪🇸 Spanish</p>
              <p className="text-blue-700 font-semibold mt-1">Basic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
