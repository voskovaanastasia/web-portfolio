import DotsBackground from '../components/DotsBackground';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import ImpactSection from '../components/ImpactSection';
import RecommendationsSection from '../components/RecommendationsSection';
import MyToolkitSection from '../components/MyToolkitSection';
import HowIWorkSection from '../components/HowIWorkSection';
import PhotographySection from '../components/PhotographySection';
import ContactSection from '../components/ContactSection';
import RightNowSection from '../components/RightNowSection';
import useDocumentMeta from '../hooks/useDocumentMeta';
import avatar from '../assets/avatar.webp';
import portrait from '../assets/about-portrait.webp';


const scrollToContact = (e) => {
  const target = document.getElementById('contact');
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const numbers = [
  { number: '6+', label: 'Years of Experience', project: 'Web, Mobile & SaaS' },
  { number: '10+', label: 'Products Shipped', project: 'bART Solutions' },
  { number: '92%', label: 'Dashboard Task Success', project: 'Farsafe' },
  { number: '68% → 41%', label: 'Bounce Rate', project: 'bART Solutions', description: 'After restructured IA' },
];

export default function About() {
  useDocumentMeta({
    title: 'About — Anastasiia Voskova',
    description:
      'Product designer with a Computer Science background, based in Granada, Spain — six years across SaaS, fintech, and healthcare products.',
    path: '/about',
  });

  return (
    <main id="main-content" data-route="/about" className="flex flex-col">
      <section id="about-hero" className="relative overflow-hidden">
        <DotsBackground />
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-24 flex flex-wrap items-center gap-14">
          <div className="flex-[1_1_480px] min-w-0 flex flex-col items-center md:items-start gap-6 text-center md:text-left">
            <div className="flex items-center gap-2.5 rounded-pill border border-border-subtle bg-surface-default py-1.5 pl-1.5 pr-4">
              <img src={avatar} alt="" width={74} height={74} className="w-9 h-9 rounded-pill object-cover" />
              <span className="font-mono-bold font-bold text-body text-text-primary">
                About me · <span className="text-text-brand">Anastasiia</span>
              </span>
            </div>

            <h1 className="font-grotesk font-medium text-[26px] sm:text-4xl md:text-5xl lg:text-[64px] text-text-primary tracking-tight leading-[1.15]">
              Where UX meets{' '}
              {/* Figma-style selection frame around the handwritten word, as on the home page */}
              <span className="relative inline-block px-2 sm:px-3 border-[1.5px] border-action-primary">
                <span className="font-caveat font-bold text-[1.18em] leading-none">engineering</span>
                {['-top-[5px] -left-[5px]', '-top-[5px] -right-[5px]', '-bottom-[5px] -left-[5px]', '-bottom-[5px] -right-[5px]'].map((pos) => (
                  <span
                    key={pos}
                    aria-hidden="true"
                    className={`absolute ${pos} w-[9px] h-[9px] bg-surface-default border-[1.5px] border-action-primary`}
                  />
                ))}
              </span>
              <span className="text-action-primary">.</span>
            </h1>

            <p className="font-grotesk text-lead text-text-primary max-w-xl">
              I&rsquo;m a product designer with a Computer Science degree. I make complex, data-dense products feel
              simple, ground every decision in research, and design with an engineer&rsquo;s mindset, so ideas ship
              the way they were drawn.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="group w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-3 text-center border-[1.5px] border-transparent bg-action-primary hover:bg-action-primary-hover text-text-inverse font-grotesk font-medium text-base pl-6 pr-1.5 py-1.5 rounded-pill transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                Contact me
                <span
                  aria-hidden="true"
                  className="w-[34px] h-[34px] inline-flex items-center justify-center rounded-pill bg-surface-default text-action-primary transition-transform group-hover:rotate-45"
                >
                  ↗
                </span>
              </a>
              <a
                href="/Anastasiia-Voskova-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Anastasiia-Voskova-Resume.pdf"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center text-center border-[1.5px] bg-surface-default border-action-primary text-action-primary hover:bg-surface-brand-tint font-grotesk font-medium text-base px-6 py-2.5 rounded-pill transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                Download CV
              </a>
              <span className="font-grotesk font-medium text-body text-text-primary sm:pl-1.5">🇪🇸 Granada, Spain</span>
            </div>
          </div>

          {/* Portrait in a Preview-style window */}
          <div className="relative flex-[1_1_380px] min-w-0 w-full max-w-[460px] mx-auto px-6 pt-6 pb-10">
            <div className="rotate-2 overflow-hidden rounded-[14px] border border-border-subtle bg-surface-default shadow-[0_30px_70px_rgba(17,24,39,0.14)]">
              <div className="relative flex items-center min-h-11 px-3.5 bg-surface-subtle border-b border-border-subtle">
                <span aria-hidden="true" className="flex gap-[7px]">
                  <span className="w-3 h-3 rounded-pill bg-[var(--color-traffic-red)]" />
                  <span className="w-3 h-3 rounded-pill bg-[var(--color-traffic-yellow)]" />
                  <span className="w-3 h-3 rounded-pill bg-[var(--color-traffic-green)]" />
                </span>
                <p className="absolute left-1/2 -translate-x-1/2 font-grotesk font-medium text-body text-text-primary whitespace-nowrap">
                  me.jpg
                </p>
              </div>
              <img
                src={portrait}
                alt="Portrait of Anastasiia Voskova"
                width={460}
                height={460}
                loading="eager"
                fetchPriority="high"
                className="block w-full aspect-square object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute left-0 bottom-2 -rotate-6 bg-[var(--color-sticky-note)] px-4 py-3 shadow-[0_10px_20px_rgba(17,24,39,0.12)]"
            >
              <span className="font-caveat font-bold text-[22px] text-text-primary">hi, that&rsquo;s me!</span>
            </div>
            <div aria-hidden="true" className="absolute right-0 top-[40%] flex items-start">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-action-primary">
                <path d="M1 1l5.2 13.5 2-5.6 5.6-2L1 1z" fill="currentColor" />
              </svg>
              <span className="mt-3.5 -ml-0.5 px-3 py-1 rounded-pill bg-action-primary text-text-inverse font-grotesk font-medium text-sm">
                Anastasiia
              </span>
            </div>
          </div>
        </div>
      </section>

      <ImpactSection
        id="numbers"
        eyebrow="In numbers"
        heading={
          <>
            Six years of turning <span className="text-action-primary">complexity</span> into clarity.
          </>
        }
        items={numbers}
        highlight={0}
      />

      <HowIWorkSection />
      <ExperienceSection />
      <EducationSection />
      <RecommendationsSection />
      <MyToolkitSection />
      <PhotographySection />
      <RightNowSection />
      <ContactSection />
    </main>
  );
}
