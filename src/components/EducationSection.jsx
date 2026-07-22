import logoLpnu from '../assets/edu-lpnu.png';
import logoLnu from '../assets/edu-lnu.png';

const education = [
  {
    dateRange: 'SEP 2020 — JUN 2022',
    school: 'Computer Science',
    logo: logoLpnu,
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
        workflows - building an early appreciation for precision, systems thinking, and
        how tooling shapes the design process.
        <br />
        Delivered a Bachelor&rsquo;s thesis -{' '}
        <span className="font-bold">
          &ldquo;Web Application for Multi-Blockchain System Management (Node.js)&rdquo;
        </span>{' '}
        - architecting and building a production-style web application end-to-end, with a
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
    meta: [
      'Ivan Franko National University of Lviv',
      "Junior Specialist's degree",
      '🇺🇦 Lviv, Ukraine',
    ],
    description:
      'Built a rigorous foundation in computer science - algorithms, data structures, and core programming - with hands-on development in Python and C++. Established the analytical and problem-solving fundamentals that underpin a systematic, engineering-minded approach to design work.',
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
    <section className="relative overflow-hidden py-24 bg-white">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-2.5 mb-10">
          <p className="font-mono-bold text-base text-black">My Learning</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            Education
          </h2>
        </div>

        <div>
          {education.map((edu, index) => (
            <div key={edu.dateRange} className="flex gap-6">
              {/* Timeline rail */}
              <div className="flex flex-col items-center shrink-0 w-4">
                <div className="w-4 h-4 rounded-full mt-0.5 shrink-0 bg-[#c4c4c4]" />
                {index < education.length - 1 && (
                  <div className="w-0.5 flex-1 bg-[#e0e0e0]" />
                )}
              </div>

              <div className="pb-12 flex-1">
                <p className="font-mono-bold text-sm text-[#4a4a48] tracking-wide mb-5">
                  {edu.dateRange}
                </p>

                <div className="flex items-start gap-4 mb-5">
                  <div className="bg-white border border-[#ececec] rounded-[12px] w-[54px] h-[54px] flex items-center justify-center shrink-0 p-2">
                    <img src={edu.logo} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-grotesk font-bold text-lg text-black">
                      {edu.school}
                    </h3>
                    <p className="font-grotesk text-sm text-[#6b6a67]">
                      {edu.meta.map((part, i) => (
                        <span key={i}>
                          {i > 0 && <span className="mx-1.5 text-[#c4c4c4]">•</span>}
                          {part}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <p className="font-grotesk text-base text-[#3d3d3b] leading-relaxed mb-5">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {edu.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-[#e9f3fa] text-black rounded-full text-sm font-grotesk font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
