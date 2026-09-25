import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionMenu from './SectionMenu';
import ContactSection from './ContactSection';
import { openLightbox } from '../lightboxStore';
import useDocumentMeta from '../hooks/useDocumentMeta';

// Any image dropped into src/assets is picked up by filename — no import needed.
const assetUrls = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});
const assetByName = Object.fromEntries(
  Object.entries(assetUrls).map(([path, url]) => [path.split('/').pop(), url]),
);

// Reserved-space utilities only matter while a slot is empty — once the real
// image is in, the slot takes the image's own height instead of a grey box.
const dropSizing = (cls) =>
  cls
    .replace(/(?:\w+:)?min-h-(?:\[[^\]]*\]|[\w./-]+)/g, '')
    .replace(/(?:\w+:)?aspect-(?:\[[^\]]*\]|[\w./-]+)/g, '')
    .replace(/\s+/g, ' ')
    .trim();

// Measures the empty slot so the placeholder can name the image size that
// fits it best: the slot's own CSS pixels, doubled for retina.
function useSlotSize(enabled) {
  const ref = useRef(null);
  const [size, setSize] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el || typeof ResizeObserver === 'undefined') return undefined;

    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width > 0 && height > 0) {
        setSize({ w: Math.round(width), h: Math.round(height) });
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled]);

  return [ref, size];
}

export function ImagePlaceholder({ filename, className = '', alt = '', priority = false }) {
  // Cases may pass an already-imported URL instead of a bare filename.
  const src = assetByName[filename] || (filename?.includes('/') ? filename : undefined);
  const [slotRef, slotSize] = useSlotSize(!src);

  if (src) {
    const resolvedAlt = alt || String(filename).replace(/\.\w+$/, '').replace(/-/g, ' ');
    const hasCustomRounding = /(?:^|\s)(?:[\w-]+:)?rounded(?:-[\w[\].,/]+)?(?=\s|$)/.test(className);

    // Some assets ship 480w/960w variants alongside the full-size original —
    // when present, serve them via srcset instead of the full-size file.
    const nameMatch = typeof filename === 'string' && filename.match(/^(.*)\.(\w+)$/);
    let srcSet;
    if (nameMatch) {
      const [, base, ext] = nameMatch;
      const variants = [
        assetByName[`${base}-480w.${ext}`] && `${assetByName[`${base}-480w.${ext}`]} 480w`,
        assetByName[`${base}-960w.${ext}`] && `${assetByName[`${base}-960w.${ext}`]} 960w`,
      ].filter(Boolean);
      if (variants.length) srcSet = [...variants, `${src} 1200w`].join(', ');
    }

    return (
      <img
        src={src}
        srcSet={srcSet}
        sizes={srcSet ? '(max-width: 640px) 480px, (max-width: 1024px) 960px, 1200px' : undefined}
        alt={resolvedAlt}
        loading={priority ? undefined : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        onClick={() => openLightbox(src, resolvedAlt)}
        className={`w-auto h-auto max-h-[45vh] max-w-full mx-auto sm:w-full sm:max-h-none block ${
          hasCustomRounding ? '' : 'rounded-[24px]'
        } cursor-zoom-in ${dropSizing(className)}`}
      />
    );
  }

  return (
    <div
      ref={slotRef}
      className={`bg-[#f7f7f7] rounded-[24px] flex flex-col gap-2 items-center justify-center overflow-hidden ${className}`}
    >
      <p className="font-grotesk text-sm text-[#6b6a67] px-8 text-center">
        Add {filename} to src/assets
      </p>
      {slotSize && (
        <p className="font-grotesk text-xs text-[#c9c8c5] px-8 text-center tabular-nums">
          Best size {slotSize.w * 2} × {slotSize.h * 2} px
          <span className="block">(slot is {slotSize.w} × {slotSize.h} @2x)</span>
        </p>
      )}
    </div>
  );
}

/**
 * Farsafe-style Problem / Solution pair: two alternating text+image rows.
 * `problem` = { heading, body, why, image }, `solution` = { heading, body, scenario, image }.
 */
/**
 * Shared before/after bar chart used by every case study's results section.
 * `bars` = [{ label, value, before? }] — the bar without `before` is the
 * highlighted (current/after) value, rendered in `color`; `before` bars are grey.
 */
export function MetricBars({ bars, color }) {
  const max = Math.max(...bars.map((b) => b.value));
  return (
    <div className="flex items-end justify-center gap-4 h-44">
      {bars.map((bar) => (
        <div
          key={bar.label}
          className="w-16 rounded-[14px] flex items-end justify-center pb-3"
          style={{
            height: `${(bar.value / max) * 100}%`,
            backgroundColor: bar.before ? '#e3e3e3' : color,
          }}
        >
          <span className="font-grotesk font-bold text-sm text-black">{bar.label}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * Standard result-card wrapper: bars on top, title, optional subtitle, body text.
 */
export function MetricCard({ title, subtitle, bars, color, text }) {
  return (
    <div className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-4">
      <MetricBars bars={bars} color={color} />
      <p className="font-grotesk font-bold text-[14px] text-black">{title}</p>
      {subtitle && <p className="font-grotesk text-sm text-[#6b6a67] -mt-2">{subtitle}</p>}
      <p className="font-grotesk text-[14px] text-[#393939] leading-relaxed [&>strong]:font-bold [&>strong]:text-black">
        {text}
      </p>
    </div>
  );
}

export function ProblemSolution({ problem, solution, id = 'problem' }) {
  return (
    <>
      {problem && (
        <section id={id} className="pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <ImagePlaceholder
            filename={problem.image}
            className={`min-h-[420px] ${problem.imageClassName ?? ''}`}
          />
          <div className="flex flex-col gap-5 lg:col-span-2">
            <p className="font-mono-bold text-[14px] text-black">PROBLEM</p>
            <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-black tracking-tight">
              {problem.heading}
            </h2>
            <p className="font-grotesk text-[14px] text-[#393939] leading-relaxed">{problem.body}</p>
            <p className="font-mono-bold text-[14px] text-black">WHY IS THIS IMPORTANT?</p>
            <p className="font-grotesk text-[14px] text-[#393939] leading-relaxed">{problem.why}</p>
          </div>
        </section>
      )}

      {solution && (
        <section className="pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="flex flex-col gap-5 lg:col-span-2">
            <p className="font-mono-bold text-[14px] text-black">SOLUTION</p>
            <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-black tracking-tight">
              {solution.heading}
            </h2>
            <p className="font-grotesk text-[14px] text-[#393939] leading-relaxed">{solution.body}</p>
            <p className="font-mono-bold text-[14px] text-black">USER SCENARIO CONSIDERATION</p>
            <p className="font-grotesk text-[14px] text-[#393939] leading-relaxed">
              {solution.scenario}
            </p>
          </div>
          <ImagePlaceholder filename={solution.image} className="min-h-[420px] order-first lg:order-none" />
        </section>
      )}
    </>
  );
}

/**
 * 4W+H process grid. Each column = { heading, body } or { heading, items[], highlight }.
 */
export function ProcessColumns({ columns }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
      {columns.map((col) => (
        <div
          key={col.heading}
          className={`rounded-[24px] p-5 flex flex-col gap-4 ${ col.highlight ? 'bg-[#e9f3fa]' : 'bg-[#f7f7f7]' }`}
        >
          <p className="font-grotesk font-medium text-lg text-black">{col.heading}</p>
          <span className="h-0.5 w-full bg-[#288fd6] rounded-full" />
          {col.body ? (
            <p className="font-grotesk text-[14px] text-[#393939] leading-relaxed">{col.body}</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {col.items.map((item) => (
                <li
                  key={item}
                  className="font-grotesk text-[14px] text-[#393939] leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-1 break-words"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

// Click-to-copy swatch: click copies the hex to the clipboard and shows a
// brief "Copied!" confirmation in place of the label under the cursor.
function ColorSwatch({ hex, name, text, className = '', labelClassName = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently.
      return;
    }
    setCopied(true);
    window.clearTimeout(handleCopy._t);
    handleCopy._t = window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={`Click to copy ${hex}`}
      aria-label={`Copy color code ${hex}`}
      className={`group relative cursor-pointer text-left transition-[filter] hover:brightness-95 active:brightness-90 ${className}`}
      style={{ backgroundColor: hex, color: text }}
    >
      {name && <p className="font-grotesk font-bold text-[14px]">{name}</p>}
      <p className={`font-grotesk text-[14px] opacity-80 ${labelClassName}`}>
        {copied ? 'Copied!' : hex}
      </p>
    </button>
  );
}

// Style tile for a case: named palette, tint ramp, typeface card, and a mood image.
// `colors` entries are { name, hex, text }; `text` is the label colour laid over the swatch.
export function StyleGuide({ heading, body, colors, scale, typeface, image }) {
  return (
    <>
      <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-black tracking-tight">
        {heading}
      </h2>
      <p className="font-grotesk text-[14px] text-[#393939] leading-relaxed max-w-3xl [&_strong]:font-bold [&_strong]:text-black">
        {body}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
        <div className="flex flex-col rounded-[24px] overflow-hidden">
          {colors.map((color) => (
            <ColorSwatch
              key={color.name}
              hex={color.hex}
              name={color.name}
              text={color.text}
              className="flex flex-col gap-1 px-6 py-5 flex-1"
            />
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col rounded-[24px] overflow-hidden flex-1 min-h-[280px]">
            {scale.map((hex) => (
              <div key={hex} className="flex-1" style={{ backgroundColor: hex }} />
            ))}
          </div>
          <div
            className="rounded-[24px] p-6 flex flex-col justify-between min-h-[280px]"
            style={{ backgroundColor: typeface.hex, color: typeface.text ?? '#ffffff' }}
          >
            <div className="flex flex-col items-end gap-1">
              {typeface.weights.map((weight) => (
                <p key={weight} className="font-grotesk text-[14px] opacity-85">
                  {weight}
                </p>
              ))}
            </div>
            <p className="font-grotesk font-bold text-3xl text-right">{typeface.name}</p>
          </div>
        </div>

        <ImagePlaceholder filename={image} className="min-h-[420px] lg:min-h-full" />
      </div>
    </>
  );
}

export function ScreensSlider({ screens }) {
  const [index, setIndex] = useState(0);
  const screen = screens[index];
  const prev = () => setIndex((index - 1 + screens.length) % screens.length);
  const next = () => setIndex((index + 1) % screens.length);

  const arrowClass =
    'w-11 h-11 rounded-full border border-[#e2e2e2] flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-colors';

  return (
    <>
      <div className="flex items-center justify-between gap-6 flex-wrap">
        <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-black tracking-tight">
          {screen.title}
        </h2>
        <div className="flex items-center gap-3">
          <span className="font-grotesk text-sm text-[#6b6a67] mr-1">
            {index + 1} / {screens.length}
          </span>
          <button type="button" onClick={prev} aria-label="Previous screen" className={arrowClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="m14 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" onClick={next} aria-label="Next screen" className={arrowClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="m10 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-4">
        <div className="flex flex-col gap-7">
          {screen.blocks.map((block) => (
            <div key={block.heading} className="flex flex-col gap-2">
              <p className="font-grotesk font-bold text-[14px] text-black">{block.heading}</p>
              <p className="font-grotesk text-[14px] text-[#393939] leading-relaxed [&_strong]:font-bold [&_strong]:text-[#1552d8]">
                {block.text}
              </p>
            </div>
          ))}
        </div>
        <ImagePlaceholder filename={screen.image} className="min-h-[560px] lg:min-h-[680px] order-first lg:order-none" />
      </div>
    </>
  );
}
// Case order as listed on the Work page — drives the "Next Case" link so it
// always points at whichever case comes after the current one, wrapping
// back to the first case after the last.
const CASE_ORDER = [
  { id: 'farsafe', path: '/project/farsafe', title: 'Farsafe' },
  { id: 'bart', path: '/project/bart', title: 'bART Solutions' },
  { id: 'cryptowallet', path: '/project/cryptowallet', title: 'CryptoWallet' },
  { id: 'online-doctor', path: '/project/online-doctor', title: 'Online Doctor' },
  { id: 'crm-platform', path: '/project/crm-platform', title: 'Enterprise CRM' },
  { id: 'fitness-app', path: '/project/fitness-app', title: 'Fitness App' },
  { id: 'online-payments', path: '/project/online-payments', title: 'Online Payments' },
  { id: 'shoot', path: '/project/shoot', title: 'SHOOT' },
];

// Matches the Person's "@id" in index.html's JSON-LD — kept as the same
// literal placeholder so both update together once the real domain is set.
const PERSON_ID = 'https://[PASTE YOUR PRODUCTION URL]/#person';
const SITE_ORIGIN = 'https://[PASTE YOUR PRODUCTION URL]';

// Builds the useDocumentMeta props (title, description, canonical path,
// share image, and CreativeWork JSON-LD linked to the Person entity) for a
// case-study route. Shared by CaseLayout and the 4 hand-built case pages so
// the title format and structured data only need to be defined once.
export function buildCaseMeta({ project, caseId }) {
  const description = project.summary?.[0]?.text ?? project.title;
  const path = `/project/${caseId}`;
  const hasOgImage = CASE_ORDER.some((c) => c.id === caseId);
  const image = hasOgImage ? `/og/${caseId}.png` : undefined;

  return {
    title: `${project.name} — Case Study | Anastasiia Voskova`,
    description,
    path,
    image,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.name,
      headline: project.title,
      description,
      url: `${SITE_ORIGIN}${path}`,
      ...(image ? { image: `${SITE_ORIGIN}${image}` } : {}),
      author: { '@id': PERSON_ID },
      creator: { '@id': PERSON_ID },
    },
  };
}

function CaseNavArrow({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`w-5 h-5 ${direction === 'next' ? '-scale-x-100' : ''}`}
    >
      <path d="M9 14 4 9l5-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 9h11a5 5 0 0 1 5 5v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Same style as the "Back to Work" link, mirrored: previous case on the left,
// next case on the right, both cycling through CASE_ORDER from `caseId`.
export function CaseNav({ caseId }) {
  const index = CASE_ORDER.findIndex((c) => c.id === caseId);
  if (index === -1) return null;
  const prev = CASE_ORDER[(index - 1 + CASE_ORDER.length) % CASE_ORDER.length];
  const next = CASE_ORDER[(index + 1) % CASE_ORDER.length];

  return (
    <div className="pt-10 pb-4 flex items-center justify-between gap-4 flex-wrap">
      <Link
        to={prev.path}
        className="inline-flex items-center gap-3 font-grotesk font-medium text-base text-black hover:text-[#288fd6] transition-colors"
      >
        <CaseNavArrow direction="prev" />
        Previous Case: {prev.title}
      </Link>
      <Link
        to={next.path}
        className="inline-flex items-center gap-3 font-grotesk font-medium text-base text-black hover:text-[#288fd6] transition-colors"
      >
        Next Case: {next.title}
        <CaseNavArrow direction="next" />
      </Link>
    </div>
  );
}

/**
 * Shared scaffold for case pages: hero image, meta bar, summary cards, intro,
 * and an optional screens slider. Matches the layout of the hand-built cases.
 */
export default function CaseLayout({
  project,
  screens,
  screensLabel = 'App Screens',
  sections = [],
  caseId,
  keyTakeaway,
}) {
  useDocumentMeta(buildCaseMeta({ project, caseId }));

  const menuSections = [
    { id: 'case-hero', label: 'Back to Top' },
    { id: 'intro', label: 'Project Intro' },
    ...(project.problem ? [{ id: 'problem', label: 'Problem & Solution' }] : []),
    ...sections.map((s) => ({ id: s.id, label: s.label })),
    ...(screens?.length ? [{ id: 'screens', label: screensLabel }] : []),
    ...(keyTakeaway ? [{ id: 'key-takeaway', label: 'Key Takeaway' }] : []),
    { id: 'contact', label: 'Get in Touch' },
  ];

  return (
    <main id="main-content" className="flex flex-col bg-white">
      <SectionMenu sections={menuSections} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* Hero image */}
        <div id="case-hero" className="pt-4">
          <ImagePlaceholder
            filename={project.heroImage}
            className="w-full max-w-[1058px] mx-auto aspect-[1058/600]"
            priority
          />
        </div>

        {/* Back link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-3 mt-10 font-grotesk font-medium text-base text-black hover:text-[#288fd6] transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M9 14 4 9l5-5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 9h11a5 5 0 0 1 5 5v6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Work
        </Link>

        {/* Title */}
        <h1 className="font-grotesk font-medium text-[26px] sm:text-5xl lg:text-[56px] text-black tracking-tight leading-tight mt-8 max-w-3xl">
          {project.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2.5 mt-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-[#f2f3f5] rounded-full font-grotesk font-medium text-sm text-[#22292f]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta bar */}
        <div className="bg-[#f7f7f7] rounded-[24px] p-5 mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {project.meta.map((item) => (
            <div key={item.label} className="flex flex-col gap-3">
              <p className="font-grotesk text-[14px] text-[#6b6a67]">{item.label}</p>
              <p className="font-grotesk font-medium text-[14px] text-black whitespace-pre-line">
                {item.value}
              </p>
            </div>
          ))}
          <div className="flex flex-col gap-3">
            <p className="font-grotesk text-[14px] text-[#6b6a67]">Tools</p>
            <div className="flex gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool.label}
                  title={tool.label}
                  className="bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-sm"
                >
                  <img src={tool.icon} alt={tool.label} className="w-5 h-5 object-contain" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Summary cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 ${
            project.outcome ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
          }`}
        >
          {project.summary.map((card) => (
            <div key={card.label} className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-4">
              <p className="font-grotesk text-sm text-[#6b6a67] uppercase tracking-wide">{card.label}</p>
              <p className="font-grotesk text-[14px] text-black leading-relaxed">{card.text}</p>
            </div>
          ))}
          {project.outcome && (
            <div className="bg-[#e9f3fa] rounded-[24px] p-5 flex flex-col gap-3">
              <p className="font-grotesk text-sm text-[#6b6a67] uppercase tracking-wide">OUTCOME</p>
              <p className="font-grotesk font-bold text-[30px] text-black">{project.outcome.value}</p>
              <p className="font-grotesk text-[14px] text-black">{project.outcome.label}</p>
            </div>
          )}
        </div>

        {/* Project intro */}
        <section id="intro" className="py-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <p className="font-mono-bold text-[14px] text-black">PROJECT INTRO</p>
            <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-black tracking-tight">
              {project.intro.heading}
            </h2>
            <p className="font-grotesk text-[14px] text-[#393939] leading-relaxed [&>strong]:text-black [&>strong]:font-bold">
              {project.intro.body}
            </p>
          </div>
          <ImagePlaceholder filename={project.intro.image} className="min-h-[420px] order-first lg:order-none" />
        </section>

        {/* Problem & solution */}
        <ProblemSolution problem={project.problem} solution={project.solution} />

        {/* Case-specific sections */}
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="pb-20 flex flex-col gap-6">
            <p className="font-mono-bold text-[14px] text-black">{section.label}</p>
            {section.content}
          </section>
        ))}

        {/* Screens */}
        {screens?.length > 0 && (
          <section id="screens" className="pb-24 flex flex-col gap-6">
            <p className="font-mono-bold text-[14px] text-black">{screensLabel}</p>
            <ScreensSlider screens={screens} />
          </section>
        )}

        {/* Key takeaway */}
        {keyTakeaway && (
          <section id="key-takeaway" className="pb-24 flex flex-col gap-6">
            <p className="font-mono-bold text-[14px] text-black">Key Takeaway</p>
            <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-black tracking-tight">
              {keyTakeaway.heading}
            </h2>
            <p className="font-grotesk text-[14px] text-[#393939] leading-relaxed max-w-3xl [&>strong]:font-bold [&>strong]:text-black">
              {keyTakeaway.body}
            </p>
          </section>
        )}

        {/* Next case */}
        {caseId && <CaseNav caseId={caseId} />}
      </div>

      <ContactSection />
    </main>
  );
}
