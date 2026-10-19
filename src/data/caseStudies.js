// Title and tags of the case studies listed on the Portfolio page, in display order. Projects.jsx adds the
// cover images and descriptions; the 404 page reads the first few for its "jump into a case study" list.
// The route for each is /project/<id>.
export const caseStudies = [
  {
    id: 'farsafe',
    tags: ['0-to-1 SaaS', 'Web App', 'Marketing Site', 'Design System'],
    title: 'Farsafe: Uptime Monitoring Platform',
  },
  {
    id: 'bart',
    tags: ['Enterprise', 'Web & Mobile', 'Design Tokens'],
    title: 'bART Solutions: Enterprise Web Products',
  },
  {
    id: 'cryptowallet',
    tags: ['Fintech', 'Mobile', 'iOS & Android', 'Crypto'],
    title: 'CryptoWallet: Mobile Crypto App',
  },
  {
    id: 'online-doctor',
    tags: ['Healthcare', 'Web & Mobile', 'Telemedicine'],
    title: 'Online Doctor: Telemedicine Platform',
  },
  {
    id: 'crm-platform',
    tags: ['B2B SaaS', 'Web App', 'Data-Dense UI', 'Marketing Automation'],
    title: 'Enterprise CRM: B2B Operations Platform',
  },
  {
    id: 'fitness-app',
    tags: ['Mobile', 'iOS & Android', 'Health & Wellness', 'AI Personalization'],
    title: 'Fitness App: Mobile Health & Training Platform',
  },
  {
    id: 'online-payments',
    tags: ['Fintech', 'Web', 'Checkout', 'Compliance'],
    title: 'Online Payment Solutions: Checkout & Merchant Console',
  },
  {
    id: 'shoot',
    tags: ['Marketplace', 'Web & Mobile', 'Booking Flow', 'Payments'],
    title: 'SHOOT: Creative-Services Marketplace',
  },
];

export const caseStudy = (id) => caseStudies.find((c) => c.id === id);
