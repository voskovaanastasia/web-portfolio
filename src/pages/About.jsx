import DotsBackground from '../components/DotsBackground';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';
import useDocumentMeta from '../hooks/useDocumentMeta';
import avatar from '../assets/avatar.webp';

const facts = [
  { label: 'Based in', value: '🇪🇸 Granada, Spain' },
  { label: 'Experience', value: '6 years, web and mobile' },
  { label: 'Background', value: 'Computer Science (CAD)' },
  { label: 'Languages', value: 'Ukrainian, English, Spanish' },
];

const strengths = [
  {
    title: 'Full-cycle product design',
    text: 'From user research and information architecture to design systems and final UI, so decisions stay connected from the first interview to the shipped screen.',
  },
  {
    title: 'Data-dense products, made simple',
    text: 'Dashboards, monitoring and compliance tools: complex products that people can learn and use without a manual.',
  },
  {
    title: 'Systems thinking',
    text: 'A Computer-Aided Design education shaped how I work: tokens, components and clear rules instead of one-off screens.',
  },
  {
    title: 'Close to development',
    text: 'I design with the build in mind and work alongside engineers and stakeholders, so the handoff is a conversation, not a surprise.',
  },
];

const languages = [
  { name: 'Ukrainian', level: 'Native' },
  { name: 'English', level: 'B2' },
  { name: 'Spanish', level: 'Basic' },
];

export default function About() {
  useDocumentMeta({
    title: 'About — Anastasiia Voskova',
    description:
      'Product designer with a Computer Science background, based in Granada, Spain — six years across SaaS, fintech, and healthcare products.',
    path: '/about',
  });

  return (
    <main id="main-content" className="flex flex-col">
      <section id="about-hero" className="relative overflow-hidden">
        <DotsBackground />
        <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <img
            src={avatar}
            alt="Portrait of Anastasiia Voskova"
            width={296}
            height={296}
            loading="eager"
            fetchPriority="high"
            className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-pill object-cover shrink-0"
          />
          <div className="flex flex-col gap-5 text-center md:text-left">
            <span className="font-mono-bold font-bold text-body text-text-brand">About me</span>
            <h1 className="font-grotesk font-medium text-[32px] sm:text-5xl lg:text-[56px] tracking-tight leading-[1.15] text-text-primary">
              Hi, I&rsquo;m Anastasiia, a product designer who started in{' '}
              <span className="font-caveat font-bold text-[1.18em] leading-none">code</span>
              <span className="text-action-primary">.</span>
            </h1>
            <p className="font-grotesk text-lead text-text-primary max-w-xl">
              I have spent six years designing web and mobile products across SaaS, fintech and healthcare. I live in
              Granada, Spain, and I like the kind of work where the product is complicated and the design has to make
              it feel easy.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Quick facts" className="px-6 sm:px-8 pb-16">
        <dl className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map(({ label, value }) => (
            <div key={label} className="rounded-panel border border-border-subtle bg-surface-default p-5">
              <dt className="font-mono text-body text-text-secondary">{label}</dt>
              <dd className="mt-1 font-grotesk font-medium text-lead text-text-primary">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="story" className="px-6 sm:px-8 py-12 md:py-16">
        <div className="mx-auto max-w-3xl flex flex-col gap-5">
          <h2 className="font-grotesk font-medium text-3xl md:text-4xl tracking-tight text-text-primary">
            From Computer Science to design
          </h2>
          <p className="font-grotesk text-lead text-text-primary">
            I studied Computer Science, with a focus on Computer-Aided Design, at Lviv Polytechnic and Ivan Franko
            National University. Writing software taught me how products are actually built, and CAD taught me to care
            about precision and systems.
          </p>
          <p className="font-grotesk text-lead text-text-primary">
            That is why I moved into product design: it sits where structure meets people. Today I work across the
            whole cycle, and I am currently designing 0-to-1 SaaS for uptime monitoring at Farsafe.
          </p>
        </div>
      </section>

      <section id="strengths" className="px-6 sm:px-8 py-12 md:py-16">
        <div className="mx-auto max-w-5xl flex flex-col gap-8">
          <h2 className="font-grotesk font-medium text-3xl md:text-4xl tracking-tight text-text-primary">
            What I bring to a team
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strengths.map(({ title, text }) => (
              <li key={title} className="rounded-panel border border-border-subtle bg-surface-default p-6">
                <h3 className="font-grotesk font-medium text-xl text-text-primary">{title}</h3>
                <p className="mt-2 font-grotesk text-body text-text-secondary">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="languages" className="px-6 sm:px-8 py-12 md:py-16">
        <div className="mx-auto max-w-3xl flex flex-col gap-5">
          <h2 className="font-grotesk font-medium text-3xl md:text-4xl tracking-tight text-text-primary">Languages</h2>
          <ul className="flex flex-wrap gap-3">
            {languages.map(({ name, level }) => (
              <li
                key={name}
                className="inline-flex items-center gap-2 min-h-11 rounded-control border border-border-subtle bg-surface-default px-4 py-2.5 font-grotesk text-body text-text-primary"
              >
                <span className="font-medium">{name}</span>
                <span className="text-text-secondary">{level}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EducationSection />
      <ContactSection />
    </main>
  );
}
