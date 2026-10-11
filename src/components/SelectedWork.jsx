import { Link } from 'react-router-dom';
import caseFarsafe from '../assets/case-farsafe.webp';
import caseBart480 from '../assets/case-bart-480w.webp';
import caseCrypto480 from '../assets/case-cryptowallet-480w.webp';
import caseCrm480 from '../assets/case-crm-480w.webp';
import casePayments480 from '../assets/case-payments-480w.webp';
import caseDoctor480 from '../assets/case-onlinedoctor-480w.webp';
import caseFitness480 from '../assets/case-fitness-480w.webp';
import caseShoot480 from '../assets/case-shoot-480w.webp';

const featured = {
  id: 'farsafe',
  title: 'Farsafe: Uptime Monitoring Platform',
  image: caseFarsafe,
  tags: ['0-to-1 SaaS', 'Web App', 'Marketing Site', 'Design System'],
  description:
    "Sole designer on a 0-to-1 uptime-monitoring platform, spanning the marketing website and in-app monitoring dashboard. Led discovery research that defined the product's design targets — pricing clarity, alert reliability, and tool consolidation.",
  problem: 'Monitoring tools hide pricing and overwhelm users with complex setup flows.',
  role: 'Sole Product Designer — research, strategy, marketing site, and dashboard.',
  keyDecision: 'Made pricing transparency the centerpiece of the conversion strategy.',
  outcomeMetric: '92%',
  outcomeLabel: 'Dashboard Task Success',
};

// More work, numbered after the featured project. `highlight` renders the metric in bold.
const moreWork = [
  { id: 'bart', title: 'bART Solutions — Corporate Website Redesign', tags: ['Web', 'UX Research', 'Design System'], metric: '68→41% bounce', highlight: true, preview: caseBart480 },
  { id: 'cryptowallet', title: 'CryptoWallet — Mobile Crypto App', tags: ['Fintech', 'iOS & Android'], metric: 'iOS & Android', preview: caseCrypto480 },
  { id: 'crm-platform', title: 'Enterprise CRM — B2B Operations Platform', tags: ['B2B SaaS', 'Data-Dense UI'], metric: '13 modules', preview: caseCrm480 },
  { id: 'online-payments', title: 'Online Payments — Mobile Wallet', tags: ['Fintech', 'Mobile'], metric: '8 months', preview: casePayments480 },
  { id: 'online-doctor', title: 'Online Doctor — Telemedicine Platform', tags: ['Healthcare', 'Web & Mobile'], metric: '11 months', preview: caseDoctor480 },
  { id: 'fitness-app', title: 'Fitness App — Health & Training', tags: ['Mobile', 'AI Personalization'], metric: 'iOS & Android', preview: caseFitness480 },
  { id: 'shoot', title: 'SHOOT — Creative-Services Marketplace', tags: ['Marketplace', 'Booking Flow'], metric: 'Web & Mobile', preview: caseShoot480 },
];

const dotted = (items) =>
  items.map((item, i) => (
    <span key={item}>
      {item}
      {i < items.length - 1 && (
        <span aria-hidden="true" className="mx-2">
          ·
        </span>
      )}
    </span>
  ));

function InfoColumn({ label, highlight, children }) {
  return (
    <div className={`flex flex-col gap-2 pt-4 border-t ${highlight ? 'border-action-primary' : 'border-border-subtle'}`}>
      <p className="font-mono-bold text-[11px] uppercase tracking-wider text-text-secondary">{label}</p>
      {children}
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="relative overflow-hidden pt-5 pb-12 sm:pt-10 sm:pb-24 bg-surface-default">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2.5">
            <p className="font-mono-bold text-[12px] uppercase tracking-wider text-text-secondary">Selected work</p>
            <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-text-primary tracking-tight">
              Featured Project
            </h2>
          </div>
          <Link
            to="/projects"
            className="shrink-0 pb-1.5 font-grotesk font-medium text-sm text-text-brand hover:text-action-primary-hover underline underline-offset-4 transition-colors"
          >
            All work →
          </Link>
        </div>

        {/* Featured project */}
        <article className="flex flex-col gap-6">
          <Link
            to={`/project/${featured.id}`}
            className="block group bg-[#d9d9d9] overflow-hidden rounded-card"
          >
            <img
              src={featured.image}
              alt={featured.title}
              width={2116}
              height={1200}
              loading="lazy"
              decoding="async"
              className="w-full h-auto aspect-[2116/1200] object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
          </Link>

          <div className="flex flex-col gap-3">
            <p className="font-mono-bold text-[12px] text-text-secondary">{dotted(featured.tags)}</p>
            <h3 className="font-grotesk font-medium text-[22px] sm:text-[26px] tracking-tight leading-tight">
              <Link
                to={`/project/${featured.id}`}
                className="text-text-primary hover:text-text-brand transition-colors"
              >
                {featured.title}
              </Link>
            </h3>
            <p className="font-grotesk text-[15px] sm:text-base text-text-primary leading-relaxed max-w-3xl">
              {featured.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
            <InfoColumn label="Problem">
              <p className="font-grotesk text-sm text-text-primary leading-relaxed">{featured.problem}</p>
            </InfoColumn>
            <InfoColumn label="My role">
              <p className="font-grotesk text-sm text-text-primary leading-relaxed">{featured.role}</p>
            </InfoColumn>
            <InfoColumn label="Key decision">
              <p className="font-grotesk text-sm text-text-primary leading-relaxed">{featured.keyDecision}</p>
            </InfoColumn>
            <InfoColumn label="Outcome" highlight>
              <p className="font-grotesk font-bold text-[32px] leading-none text-text-brand whitespace-nowrap">
                {featured.outcomeMetric}
              </p>
              <p className="font-grotesk text-sm text-text-primary">{featured.outcomeLabel}</p>
            </InfoColumn>
          </div>

          <div>
            <Link
              to={`/project/${featured.id}`}
              className="inline-flex bg-action-primary hover:bg-action-primary-hover text-white font-grotesk font-medium text-sm px-5 py-2.5 rounded-pill transition-colors"
            >
              Read case study
            </Link>
          </div>
        </article>

        {/* More work */}
        <ol className="mt-10 border-b border-border-subtle">
          {moreWork.map((item, index) => (
            <li key={item.id} className="border-t border-border-subtle">
              <Link
                to={`/project/${item.id}`}
                className="group -mx-3 px-3 py-6 grid grid-cols-[32px_minmax(0,1fr)_auto] sm:grid-cols-[48px_minmax(0,1fr)_auto_28px] items-center gap-x-4 hover:bg-surface-subtle focus-visible:bg-surface-subtle transition-colors rounded-sm"
              >
                <span className="font-mono-bold text-[12px] text-text-secondary group-hover:text-text-brand transition-colors">
                  {String(index + 2).padStart(2, '0')}
                </span>
                <span className="flex flex-col gap-1.5 min-w-0">
                  <span className="font-grotesk font-medium text-[17px] sm:text-[22px] leading-tight text-text-primary group-hover:text-text-brand transition-colors">
                    {item.title}
                  </span>
                  <span className="font-mono-bold text-[12px] uppercase tracking-wide text-text-secondary">
                    {dotted(item.tags)}
                  </span>
                </span>
                <span className="hidden sm:flex justify-end items-center min-w-[160px]">
                  <span
                    className={`font-mono-bold text-sm text-right group-hover:hidden group-focus-visible:hidden ${
                      item.highlight ? 'font-bold text-text-primary' : 'text-text-secondary'
                    }`}
                  >
                    {item.metric}
                  </span>
                  <img
                    src={item.preview}
                    alt=""
                    width={160}
                    height={90}
                    loading="lazy"
                    decoding="async"
                    className="hidden group-hover:block group-focus-visible:block w-40 h-[90px] rounded-control object-cover"
                  />
                </span>
                <span aria-hidden="true" className="text-action-primary text-xl justify-self-end">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
