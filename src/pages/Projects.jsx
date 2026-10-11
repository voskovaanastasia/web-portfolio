import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import caseFarsafe480 from '../assets/case-farsafe-480w.webp';
import caseFarsafe960 from '../assets/case-farsafe-960w.webp';
import caseBart480 from '../assets/case-bart-480w.webp';
import caseBart960 from '../assets/case-bart-960w.webp';
import caseCryptowallet480 from '../assets/case-cryptowallet-480w.webp';
import caseCryptowallet960 from '../assets/case-cryptowallet-960w.webp';
import caseOnlineDoctor480 from '../assets/case-onlinedoctor-480w.webp';
import caseOnlineDoctor960 from '../assets/case-onlinedoctor-960w.webp';
import caseCrm480 from '../assets/case-crm-480w.webp';
import caseCrm960 from '../assets/case-crm-960w.webp';
import caseFitness480 from '../assets/case-fitness-480w.webp';
import caseFitness960 from '../assets/case-fitness-960w.webp';
import casePayments480 from '../assets/case-payments-480w.webp';
import casePayments960 from '../assets/case-payments-960w.webp';
import caseShoot480 from '../assets/case-shoot-480w.webp';
import caseShoot960 from '../assets/case-shoot-960w.webp';
import caseBuiltWithClaude480 from '../assets/case-built-with-claude-480w.webp';
import caseBuiltWithClaude960 from '../assets/case-built-with-claude-960w.webp';
import DotsBackground from '../components/DotsBackground';
import ContactSection from '../components/ContactSection';
import useDocumentMeta from '../hooks/useDocumentMeta';

const categories = ['Product & UX/UI Design', 'Logos & Branding', 'Built with Claude'];

// Card cover images are pre-cropped to the card's 4:3 display ratio at two
// widths so the browser never downloads more pixels than it will show.
// Only the first card (above the fold on desktop) loads eagerly at high
// priority; the next two in the first row stay eager but default priority;
// the rest are lazy.
function ProjectCard({ project, index }) {
  const isFirst = index === 0;
  const isEager = index < 3;

  return (
    <article className="flex flex-col">
      <Link to={`/project/${project.id}`} className="block group overflow-hidden rounded-card mb-5">
        <img
          src={project.image960}
          srcSet={`${project.image480} 480w, ${project.image960} 960w`}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          alt={project.title}
          width={960}
          height={720}
          loading={isEager ? undefined : 'lazy'}
          decoding={isEager ? undefined : 'async'}
          fetchPriority={isFirst ? 'high' : undefined}
          className="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
      </Link>
      <p className="font-mono-bold text-[12px] text-text-secondary mb-3">
        {project.tags.map((tag, i) => (
          <span key={tag}>
            {tag}
            {i < project.tags.length - 1 && (
              <span aria-hidden="true" className="mx-2">
                ·
              </span>
            )}
          </span>
        ))}
      </p>
      <h2 className="font-grotesk font-medium text-[22px] sm:text-[26px] leading-tight tracking-tight text-text-primary mb-3">
        <Link to={`/project/${project.id}`} className="hover:text-text-brand transition-colors">
          {project.title}
        </Link>
      </h2>
      <p className="font-grotesk text-[15px] text-text-primary leading-relaxed mb-5">
        {project.description}
      </p>
      <div className="mt-auto">
        <Link
          to={`/project/${project.id}`}
          className="font-grotesk font-medium text-[15px] text-text-brand hover:text-action-primary-hover underline-offset-4 hover:underline transition-colors"
        >
          Read case study →
        </Link>
      </div>
    </article>
  );
}

const projects = [
  {
    id: 'farsafe',
    category: 'Product & UX/UI Design',
    image480: caseFarsafe480,
    image960: caseFarsafe960,
    tags: ['0-to-1 SaaS', 'Web App', 'Marketing Site', 'Design System'],
    title: 'Farsafe: Uptime Monitoring Platform',
    description:
      'Sole designer on a 0-to-1 uptime-monitoring platform, spanning the marketing website and in-app monitoring dashboard. Led discovery research that defined the product’s design targets — pricing clarity, alert reliability, and tool consolidation.',
  },
  {
    id: 'bart',
    category: 'Product & UX/UI Design',
    image480: caseBart480,
    image960: caseBart960,
    tags: ['Enterprise', 'Web & Mobile', 'Design Tokens'],
    title: 'bART Solutions: Enterprise Web Products',
    description:
      'Owned the UX/UI for production web and mobile products serving enterprise clients. Built scalable design systems with design tokens and worked across complex, data-dense dashboards.',
  },
  {
    id: 'cryptowallet',
    category: 'Product & UX/UI Design',
    image480: caseCryptowallet480,
    image960: caseCryptowallet960,
    tags: ['Fintech', 'Mobile', 'iOS & Android', 'Crypto'],
    title: 'CryptoWallet: Mobile Crypto App',
    description:
      'Designed a mobile app for buying, storing, and sending crypto — turning a category that overwhelms first-time users into a flow that feels confident and clear from the first screen.',
  },
  {
    id: 'online-doctor',
    category: 'Product & UX/UI Design',
    image480: caseOnlineDoctor480,
    image960: caseOnlineDoctor960,
    tags: ['Healthcare', 'Web & Mobile', 'Telemedicine'],
    title: 'Online Doctor: Telemedicine Platform',
    description:
      'A secure, HIPAA-compliant telehealth platform designed to enhance patient-doctor interactions. Grown from an MVP into a product with real-time consultations, appointment scheduling, and integrated billing.',
  },
  {
    id: 'crm-platform',
    category: 'Product & UX/UI Design',
    image480: caseCrm480,
    image960: caseCrm960,
    tags: ['B2B SaaS', 'Web App', 'Data-Dense UI', 'Marketing Automation'],
    title: 'Enterprise CRM: B2B Operations Platform',
    description:
      'A B2B operations platform that centralizes client information, streamlines sales operations, and optimizes inventory and marketing workflows at large-company scale. The UI was redesigned to support the full sales cycle from lead generation to deal closure.',
  },
  {
    id: 'fitness-app',
    category: 'Product & UX/UI Design',
    image480: caseFitness480,
    image960: caseFitness960,
    tags: ['Mobile', 'iOS & Android', 'Health & Wellness', 'AI Personalization'],
    title: 'Fitness App: Mobile Health & Training Platform',
    description:
      'An advanced mobile health and fitness platform designed to support individuals in reaching their fitness goals. Personalized workout plans, AI-driven customization, and real-time health tracking that integrates with wearable devices for comprehensive wellness insights.',
  },
  {
    id: 'online-payments',
    category: 'Product & UX/UI Design',
    image480: casePayments480,
    image960: casePayments960,
    tags: ['Fintech', 'Web', 'Checkout', 'Compliance'],
    title: 'Online Payment Solutions: Checkout & Merchant Console',
    description:
      'Both ends of a transaction: a checkout that survives real-world failure — declines, 3-D Secure, retries — and a merchant console where those same events are legible enough to act on. Error states designed as primary screens, not edge cases.',
  },
  {
    id: 'shoot',
    category: 'Product & UX/UI Design',
    image480: caseShoot480,
    image960: caseShoot960,
    tags: ['Marketplace', 'Web & Mobile', 'Booking Flow', 'Payments'],
    title: 'SHOOT: Creative-Services Marketplace',
    description:
      'A marketplace connecting people with professional photographers, rentable cameras, and bookable studios. Designed end-to-end — from a browsable portfolio feed to a transparent booking flow and an equipment-and-studio rental system — unifying three fragmented markets into one journey.',
  },
  {
    id: 'built-with-claude',
    category: 'Built with Claude',
    image480: caseBuiltWithClaude480,
    image960: caseBuiltWithClaude960,
    tags: ['Claude Code', 'Figma MCP', 'Design System', 'Lighthouse 95'],
    title: 'This Portfolio: Designed and Shipped with Claude Code',
    description:
      'A portfolio treated as a real product: researched against other designers’ sites, designed in Figma, built with Claude Code, and measured. A case study on directing AI without giving up design judgement, including the mistakes I caught along the way.',
  },
];

export default function Projects() {
  useDocumentMeta({
    title: 'Portfolio — Anastasiia Voskova',
    description:
      'Case studies in SaaS, fintech, healthcare, and mobile design — from 0-to-1 platforms to enterprise dashboards.',
    path: '/projects',
  });

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const visible = projects.filter((p) => p.category === activeCategory);

  // Cards fade and rise in one after another when the tab changes. Skipped on
  // first load (so the above-the-fold cover isn't delayed) and for reduced motion.
  const gridRef = useRef(null);
  const hasMounted = useRef(false);
  const prevIndex = useRef(0);
  const tabsRef = useRef(null);
  const tabRefs = useRef([]);
  const [pill, setPill] = useState(null);

  // The active underline slides between tabs: measure the active button and move one
  // shared indicator to it, instead of each button painting its own underline.
  useLayoutEffect(() => {
    const measure = () => {
      const el = tabRefs.current[categories.indexOf(activeCategory)];
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, [activeCategory]);

  useEffect(() => {
    const index = categories.indexOf(activeCategory);
    const direction = index >= prevIndex.current ? 1 : -1;
    prevIndex.current = index;
    if (!hasMounted.current) {
      hasMounted.current = true;
      return undefined;
    }
    if (!gridRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const tween = gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, x: 40 * direction },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', stagger: 0.08, clearProps: 'opacity,transform' }
    );
    return () => tween.kill();
  }, [activeCategory]);

  return (
    <main id="main-content" className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-40">
        <DotsBackground />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col gap-6">
          <h1 className="font-grotesk font-medium text-[26px] sm:text-5xl text-text-primary tracking-tight">
            Things I&rsquo;ve Worked On
          </h1>
          <p className="font-grotesk text-lg sm:text-xl text-text-primary leading-relaxed">
            This is where ideas meet execution &mdash; a space that brings together the projects,
            experiments, and collaborations that define how I create and what I value.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-surface-default py-16 min-h-[60vh] overflow-x-clip">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category filter */}
          <div className="mb-12 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div ref={tabsRef} className="relative flex w-max min-w-full items-center gap-8 border-b border-border-subtle">
              {pill && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 bg-text-brand motion-safe:transition-[transform,width] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ width: pill.width, transform: `translateX(${pill.left}px)` }}
                />
              )}
              {categories.map((category, i) => {
                const isEmpty = !projects.some((p) => p.category === category);
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    ref={(el) => (tabRefs.current[i] = el)}
                    aria-pressed={isActive}
                    onClick={() => !isEmpty && setActiveCategory(category)}
                    aria-disabled={isEmpty}
                    className={`flex items-center gap-3 whitespace-nowrap pb-4 font-grotesk font-medium text-base transition-colors duration-300 ${
                      isActive
                        ? 'text-text-brand'
                        : isEmpty
                          ? 'text-text-secondary cursor-not-allowed'
                          : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {category}
                    {isEmpty && (
                      <span className="font-mono-bold text-[11px] uppercase tracking-wider text-text-secondary border border-border-subtle rounded-pill px-2.5 py-1">
                        Coming soon
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards */}
          {visible.length === 0 ? (
            <p className="text-center font-grotesk text-lg text-text-secondary py-20">
              Cases in this category are coming soon.
            </p>
          ) : (
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {visible.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
