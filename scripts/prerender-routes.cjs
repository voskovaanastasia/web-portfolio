// Runs after `vite build` (see package.json "postbuild"). The app is a client-rendered SPA, so every
// URL would otherwise ship the home page's <head>. Link-preview bots (LinkedIn, Slack, X) and
// non-rendering crawlers don't run JS, so this writes dist/<route>/index.html with that route's own
// title, description, canonical, OG/Twitter tags and JSON-LD, plus dist/sitemap.xml from the same list.
// Vercel serves these static files before applying the catch-all rewrite. React still hydrates over them.
//
// Keep titles/descriptions in sync with the page components (useDocumentMeta / buildCaseMeta).
const { readFileSync, writeFileSync, mkdirSync, existsSync } = require('fs');
const path = require('path');

const ORIGIN = 'https://www.anastasiiavoskova.com';
const PERSON_ID = `${ORIGIN}/#person`;
const DIST = path.join(__dirname, '..', 'dist');
const SUFFIX = 'Case Study | Anastasiia Voskova';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const pages = [
  { path: '/about', title: 'About — Anastasiia Voskova', description: 'Product designer with a Computer Science background, based in Granada, Spain — six years across SaaS, fintech, and healthcare products.' },
  { path: '/projects', title: 'Portfolio — Anastasiia Voskova', description: 'Case studies in SaaS, fintech, healthcare, and mobile design — from 0-to-1 platforms to enterprise dashboards.' },
];

const cases = [
  ['farsafe', 'Farsafe', 'Monitoring tools hide pricing and overwhelm users with complex setup flows.'],
  ['bart', 'bART Solutions', 'A brand-strong site that people could not navigate — services were unreadable at a glance and the structure had outgrown itself.'],
  ['cryptowallet', 'CryptoWallet', 'Crypto apps overwhelm first-time users and bury the actions that matter.'],
  ['online-doctor', 'Online Doctor', 'Getting medical help online still feels slow, confusing, and impersonal.'],
  ['crm-platform', 'Enterprise CRM', 'Client data, sales operations, inventory, and marketing lived in separate places at large-company scale.', 'Enterprise CRM: B2B Operations Platform'],
  ['fitness-app', 'Fitness App', 'Tracking and training live in separate apps, so daily health data never turns into the right workout.', 'Fitness App: Mobile Health & Training Platform'],
  ['online-payments', 'Online Payments', 'Money moves, but the app goes quiet — people cannot tell whether a payment actually went through.', 'Online Payments: Mobile Wallet'],
  ['shoot', 'SHOOT', 'Talent, studios, and gear live on separate platforms with unclear pricing and availability.', 'SHOOT: Creative-Services Marketplace'],
  ['tax-compliance', 'Tax Compliance Platform', 'A US tax filing that non-resident owners cannot read, on a deadline where the mistake costs more than the delay.', 'Tax Compliance Platform: IRS Filing for Non-Resident Owners', false],
];
const ogSlugs = new Set(['farsafe', 'bart', 'cryptowallet', 'online-doctor', 'crm-platform', 'fitness-app', 'online-payments', 'shoot']);

for (const [slug, name, description, headline, hasOg] of cases) {
  const image = ogSlugs.has(slug) && hasOg !== false ? `/og/${slug}.png` : undefined;
  pages.push({
    path: `/project/${slug}`,
    title: `${name} — ${SUFFIX}`,
    description,
    image,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name,
      headline: headline ?? name,
      description,
      url: `${ORIGIN}/project/${slug}`,
      ...(image ? { image: `${ORIGIN}${image}` } : {}),
      author: { '@id': PERSON_ID },
      creator: { '@id': PERSON_ID },
    },
  });
}

// "Built with Claude" is shown only outside production (see src/config/publishedCases.js), so its page is
// prerendered only then; otherwise a refresh of /project/built-with-claude on a Vercel preview would 404.
// It is noindex in every environment and never goes into sitemap.xml (llms.txt is a static file without it).
if (process.env.VERCEL_ENV !== 'production') {
  const description = 'I needed a portfolio that shows how I work from research to code, not another template.';
  pages.push({
    path: '/project/built-with-claude',
    title: `Built with Claude — ${SUFFIX}`,
    description,
    noindex: true,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'Built with Claude',
      headline: 'From Research to Production: Designing and Shipping My Portfolio with Claude Code',
      description,
      url: `${ORIGIN}/project/built-with-claude`,
      author: { '@id': PERSON_ID },
      creator: { '@id': PERSON_ID },
    },
  });
}

const template = readFileSync(path.join(DIST, 'index.html'), 'utf8');

function render(page) {
  const url = `${ORIGIN}${page.path}`;
  const image = `${ORIGIN}${page.image ?? '/og-cover.png'}`;
  const title = esc(page.title);
  const description = esc(page.description);
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${description}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${title}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${description}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:image" content=")[^"]*"/, `$1${image}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${title}"`)
    .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${description}"`)
    .replace(/(<meta name="twitter:image" content=")[^"]*"/, `$1${image}"`);
  if (page.noindex) {
    html = html.replace('</head>', '    <meta name="robots" content="noindex, nofollow" />\n  </head>');
  }
  if (page.jsonLd) {
    // Appended after the Person block so the "@id" references below resolve.
    html = html.replace('</head>', `    <script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>\n  </head>`);
  }
  return html;
}

for (const page of pages) {
  const dir = path.join(DIST, page.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, 'index.html'), render(page));
}

// Unknown URLs: Vercel serves dist/404.html with a real 404 status (vercel.json has no catch-all rewrite).
// The React app still boots from this shell and renders its own "Page not found" screen. noindex, no canonical.
const notFoundTitle = 'Page not found — Anastasiia Voskova';
writeFileSync(
  path.join(DIST, '404.html'),
  template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(notFoundTitle)}</title>`)
    .replace(/\s*<link rel="canonical"[^>]*>/, '')
    .replace(/\s*<meta property="og:url"[^>]*>/, '')
    .replace('</head>', '    <meta name="robots" content="noindex, nofollow" />\n  </head>')
);

const urls = ['/', ...pages.filter((p) => !p.noindex).map((p) => p.path)];
writeFileSync(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${ORIGIN}${u === '/' ? '/' : u}</loc></url>`)
    .join('\n')}\n</urlset>\n`
);
console.log(`prerender-routes: wrote ${pages.length} route pages + sitemap.xml (${urls.length} URLs)`);
