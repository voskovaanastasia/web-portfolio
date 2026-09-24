// Generates OG/Twitter share images at build time:
//  - public/og-image.png        — temporary placeholder for the default (home) card.
//    Replace with a real design per docs/og-image-spec.md, then delete this
//    script's placeholder branch (or just overwrite the file and leave it).
//  - public/og/<slug>.png       — a 1200x630 crop of each case study's cover
//    image, so link previews for /project/:slug show that project's work
//    instead of the generic card.
//
// Runs automatically before `npm run build` (see package.json "prebuild").
const { mkdirSync, existsSync } = require('fs');
const path = require('path');
const sharp = require('sharp');

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const OG_DIR = path.join(PUBLIC_DIR, 'og');
const ASSETS_DIR = path.join(ROOT, 'src', 'assets');

// Case slugs (route id -> cover asset basename under src/assets). Asset
// basenames don't always match the route slug 1:1 (e.g. "online-doctor"'s
// cover is case-onlinedoctor.webp). tax-compliance has no cover asset yet,
// so it isn't listed here and the route falls back to the default
// /og-image.png.
const CASE_SLUGS = [
  { slug: 'farsafe', asset: 'case-farsafe' },
  { slug: 'bart', asset: 'case-bart' },
  { slug: 'cryptowallet', asset: 'case-cryptowallet' },
  { slug: 'online-doctor', asset: 'case-onlinedoctor' },
  { slug: 'crm-platform', asset: 'case-crm' },
  { slug: 'fitness-app', asset: 'case-fitness' },
  { slug: 'online-payments', asset: 'case-payments' },
  { slug: 'shoot', asset: 'case-shoot' },
];

const BRAND_BLUE = '#288fd6';
const AV_MARK_PATHS = [
  'M0 30L7.81574 0H17.5854L25.4012 30H19.6243L18.0102 23.4H7.39097L5.77685 30H0ZM8.70776 18.1714H16.6934L13.0829 3.55714H12.3183L8.70776 18.1714Z',
  'M19.8393 30L12.2785 0H18.0553L24.3419 26.3571H24.9366L31.2231 0H37L29.4391 30H19.8393Z',
];

function placeholderSvg() {
  const markScale = 5;
  const markW = 37 * markScale;
  const markH = 30 * markScale;
  const markX = (OG_WIDTH - markW) / 2;
  const markY = 220;

  return `
    <svg width="${OG_WIDTH}" height="${OG_HEIGHT}" viewBox="0 0 ${OG_WIDTH} ${OG_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="${BRAND_BLUE}" />
      <g transform="translate(${markX}, ${markY}) scale(${markScale})">
        ${AV_MARK_PATHS.map((d) => `<path d="${d}" fill="#ffffff" />`).join('')}
      </g>
      <text x="${OG_WIDTH / 2}" y="${markY + markH + 70}" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="44" fill="#ffffff">Anastasiia Voskova — Product Designer</text>
      <rect x="0" y="${OG_HEIGHT - 56}" width="${OG_WIDTH}" height="56" fill="#12202b" />
      <text x="${OG_WIDTH / 2}" y="${OG_HEIGHT - 20}" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="26" letter-spacing="2" fill="#ffe08a">PLACEHOLDER — REPLACE BEFORE LAUNCH</text>
    </svg>
  `;
}

async function generatePlaceholder() {
  const outPath = path.join(PUBLIC_DIR, 'og-image.png');
  await sharp(Buffer.from(placeholderSvg())).png().toFile(outPath);
  console.log('og-image.png (placeholder) ->', path.relative(ROOT, outPath));
}

async function generateCaseImages() {
  mkdirSync(OG_DIR, { recursive: true });
  for (const { slug, asset } of CASE_SLUGS) {
    const src = path.join(ASSETS_DIR, `${asset}.webp`);
    if (!existsSync(src)) {
      console.warn(`skip ${slug}: no cover image at ${path.relative(ROOT, src)}`);
      continue;
    }
    const outPath = path.join(OG_DIR, `${slug}.png`);
    await sharp(src)
      .resize(OG_WIDTH, OG_HEIGHT, { fit: 'cover' })
      .png({ quality: 80, palette: true })
      .toFile(outPath);
    console.log(`og/${slug}.png ->`, path.relative(ROOT, outPath));
  }
}

async function main() {
  await generatePlaceholder();
  await generateCaseImages();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
