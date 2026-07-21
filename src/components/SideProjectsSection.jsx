export default function SideProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'UN Time Odyssey — travel through time',
      tags: ['Concept', 'Self-initiated'],
      description: 'Time-travel booking app with holographic memories and smartwatch sync',
      image: 'https://via.placeholder.com/300x500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-100',
    },
    {
      id: 2,
      title: 'WhatsApp Business — redesign',
      tags: ['Mobile', 'Concept'],
      description: 'Rethinking catalog browsing and checkout for small sellers.',
      image: 'https://via.placeholder.com/300x500',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-100',
    },
    {
      id: 3,
      title: 'Paytm Metro — e-ticket redesign',
      tags: ['Mobile', 'Concept'],
      description: 'Reimagining the metro e-ticket booking experience.',
      image: 'https://via.placeholder.com/300x500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-100',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">Side Projects</h2>
          <p className="text-lg text-gray-600">
            Quick redesigns, concepts, and app teardowns I do on the side.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group cursor-pointer rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-lg ${project.bgColor} ${project.borderColor}`}
            >
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 bg-white bg-opacity-60 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-96 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
