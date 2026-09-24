import { useState } from 'react';
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
import DotsBackground from '../components/DotsBackground';
import ContactSection from '../components/ContactSection';
import useDocumentMeta from '../hooks/useDocumentMeta';

const categories = ['Product & UX/UI Design', 'Logos & Branding', 'Built with Claude'];

// Card cover images are pre-cropped to the card's 4:3 display ratio at two
// widths so the browser never downloads more pixels than it will show.
// Only the first card (above the fold on desktop) loads eagerly at high
// priority; the second stays eager but default priority; the rest are lazy.
function ProjectCard({ project, index }) {
  const isFirst = index === 0;
  const isEager = index < 2;

  return (
    <article className="flex flex-col">
      <Link to={`/project/${project.id}`} className="block group overflow-hidden rounded-[24px] mb-6">
        <img
          src={project.image960}
          srcSet={`${project.image480} 480w, ${project.image960} 960w`}
          sizes="(min-width: 768px) 50vw, 100vw"
          alt={project.title}
          width={960}
          height={720}
          loading={isEager ? undefined : 'lazy'}
          decoding={isEager ? undefined : 'async'}
          fetchPriority={isFirst ? 'high' : undefined}
          className="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
      </Link>
      <div className="flex flex-wrap gap-2.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-[#f2f3f5] rounded-full font-grotesk font-medium text-sm text-[#22292f]"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="font-grotesk font-bold text-xl text-black mb-3">{project.title}</h2>
      <p className="font-grotesk text-base text-[#393939] leading-relaxed mb-6">
        {project.description}
      </p>
      <div className="mt-auto flex justify-end">
        <Link
          to={`/project/${project.id}`}
          className="bg-[#1f7ab8] hover:bg-[#186a9c] text-white font-grotesk font-medium px-6 py-3 rounded-full text-base transition-colors"
        >
          Read case study
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
];

export default function Projects() {
  useDocumentMeta({
    title: 'Work — Anastasiia Voskova',
    description:
      'Case studies in SaaS, fintech, healthcare, and mobile design — from 0-to-1 platforms to enterprise dashboards.',
    path: '/projects',
  });

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const visible = projects.filter((p) => p.category === activeCategory);

  return (
    <main id="main-content" className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-40">
        <DotsBackground />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col gap-6">
          <h1 className="font-grotesk font-medium text-4xl sm:text-5xl text-black tracking-tight">
            Things I&rsquo;ve Worked On
          </h1>
          <p className="font-grotesk text-lg sm:text-xl text-[#393939] leading-relaxed">
            This is where ideas meet execution &mdash; a space that brings together the projects,
            experiments, and collaborations that define how I create and what I value.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-white py-16 min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex justify-center mb-14">
            <div className="bg-[#f7f7f7] border border-[#ececec] rounded-2xl sm:rounded-full p-1.5 flex flex-wrap justify-center gap-1 w-fit max-w-full mx-auto">
              {categories.map((category) => {
                const isEmpty = !projects.some((p) => p.category === category);
                return (
                  <button
                    key={category}
                    onClick={() => !isEmpty && setActiveCategory(category)}
                    aria-disabled={isEmpty}
                    className={`relative group px-6 py-3 rounded-full font-grotesk font-medium text-base transition-colors ${
                      activeCategory === category
                        ? 'bg-[#1f7ab8] text-white'
                        : isEmpty
                          ? 'text-[#6b6a67] cursor-not-allowed'
                          : 'text-black hover:bg-white'
                    }`}
                  >
                    {category}
                    {isEmpty && (
                      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-11 whitespace-nowrap bg-black text-white font-grotesk font-medium text-sm px-3.5 py-2 rounded-[10px] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:border-transparent after:border-t-black">
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
            <p className="text-center font-grotesk text-lg text-[#6b6a67] py-20">
              Cases in this category are coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
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
