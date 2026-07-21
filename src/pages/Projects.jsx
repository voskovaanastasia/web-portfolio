import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of your first project',
      image: 'https://via.placeholder.com/400x300',
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of your second project',
      image: 'https://via.placeholder.com/400x300',
      category: 'UI/UX Design',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of your third project',
      image: 'https://via.placeholder.com/400x300',
      category: 'Web Development',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          A collection of my recent work and case studies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg mb-4 h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-sm text-blue-600 dark:text-blue-400">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
