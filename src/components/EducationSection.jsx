import logoLpnu from '../assets/edu-lpnu.webp';
import logoLnu from '../assets/edu-lnu.webp';

const education = [
  {
    dateRange: 'SEP 2020 — JUN 2022',
    school: 'Computer Science',
    logo: logoLpnu,
    logoW: 128,
    logoH: 128,
    meta: [
      'Lviv Polytechnic National University',
      "Bachelor's degree",
      '🇺🇦 Lviv, Ukraine',
      'Department of Computer-Aided Design',
    ],
    description: (
      <>
        Specialized in software engineering with a focus on object-oriented design,
        full-stack web development, and blockchain systems. As part of the Department of
        Computer-Aided Design, studied CAD principles and computer-aided design
        workflows — building an early appreciation for precision, systems thinking, and
        how tooling shapes the design process.
        <span className="block h-3" aria-hidden="true" />
        Delivered a Bachelor&rsquo;s thesis &mdash;{' '}
        <span className="font-bold">
          &ldquo;Web Application for Multi-Blockchain System Management (Node.js)&rdquo;
        </span>{' '}
        — architecting and building a production-style web application end-to-end, with a
        disciplined emphasis on clean structure, technical documentation, and a
        maintainable development workflow.
      </>
    ),
    skills: [
      'Object-Oriented Programming (OOP)',
      'Web Development',
      'Blockchain',
      'Web Design',
      'Node.js',
      'Computer-Aided Design (CAD)',
      'Software Architecture',
      'Algorithms',
      'Technical Documentation',
    ],
  },
  {
    dateRange: 'SEP 2017 — JUN 2020',
    school: 'Computer Science',
    logo: logoLnu,
    logoW: 16,
    logoH: 16,
    meta: [
      'Ivan Franko National University of Lviv',
      "Junior Specialist's degree",
      '🇺🇦 Lviv, Ukraine',
    ],
    description:
      'Built a rigorous foundation in computer science — algorithms, data structures, and core programming - with hands-on development in Python and C++. Established the analytical and problem-solving fundamentals that underpin a systematic, engineering-minded approach to design work.',
    skills: [
      'Object-Oriented Programming (OOP)',
      'Python',
      'C++',
      'Algorithms',
      'Data Structures',
      'Computer Science',
      'Programming',
      'Problem Solving',
      'UX/UI Design',
    ],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative overflow-hidden py-12 sm:py-24 bg-surface-default">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-2.5 mb-10">
          <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">My Learning</p>
          <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-text-primary tracking-tight">
            Education
          </h2>
        </div>

        <div className="border-b border-border-subtle">
          {education.map((edu) => {
            const [school, ...metaRest] = edu.meta;
            return (
              <article
                key={edu.dateRange}
                className="border-t border-border-subtle py-10 grid gap-5 md:grid-cols-[200px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] md:gap-10"
              >
                <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary md:pt-3">
                  {edu.dateRange}
                </p>

                <div>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="bg-surface-default border border-border-subtle rounded-control w-[54px] h-[54px] flex items-center justify-center shrink-0 p-2">
                      <img
                        src={edu.logo}
                        alt=""
                        width={edu.logoW}
                        height={edu.logoH}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-grotesk font-medium text-[20px] sm:text-2xl leading-tight text-text-primary">
                        {edu.school}
                      </h3>
                      <p className="font-grotesk text-sm text-text-primary">
                        <span className="font-medium text-text-brand">{school}</span>
                        {metaRest.map((part, i) => (
                          <span key={i}>
                            <span aria-hidden="true" className="mx-1.5 text-text-secondary">·</span>
                            {part}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <p className="font-grotesk text-[14px] sm:text-[15px] text-text-primary leading-relaxed mb-5">
                    {edu.description}
                  </p>

                  <ul className="flex flex-wrap gap-y-1 font-mono-bold text-caption text-text-secondary">
                    {edu.skills.map((skill, i) => (
                      <li key={skill}>
                        {skill}
                        {i < edu.skills.length - 1 && <span aria-hidden="true" className="mx-2">·</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
