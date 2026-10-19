import { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { caseStudies } from '../data/caseStudies';

// Rendered for every URL no route matches (the catch-all in App.jsx), including /project/<unknown slug>.
// The host answers those URLs with a real 404 and dist/404.html (see scripts/prerender-routes.cjs).

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring';

const mapNode = 'inline-flex items-center min-h-11 rounded-control border-[1.5px] px-4 py-2.5 font-mono text-body whitespace-nowrap';
const mapChip = `inline-flex items-center min-h-11 rounded-control border border-border-subtle bg-surface-default px-3.5 py-2.5 font-mono text-body text-text-primary no-underline transition-colors hover:bg-surface-subtle motion-reduce:transition-none ${focusRing}`;

// Three nearest cases from the Portfolio page, so the list never goes stale.
const jumpTo = caseStudies.slice(0, 3);

export default function NotFound() {
  useDocumentMeta({ title: 'Page not found — Anastasiia Voskova', robots: 'noindex, nofollow' });

  // Lets globals.css put the page on the dot grid (the layout wrapper is white on other routes).
  useLayoutEffect(() => {
    document.body.dataset.page = 'not-found';
    return () => {
      delete document.body.dataset.page;
    };
  }, []);

  // After a client-side navigation, screen readers announce the new page by landing on its heading.
  const headingRef = useRef(null);
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <>
      <main id="main-content" className="flex-1 flex flex-col items-center px-6 pt-14 pb-16">
        <div className="w-full max-w-3xl flex flex-col items-center gap-5 text-center">
          {/* Status pill */}
          <p className="inline-flex items-center gap-2.5 rounded-pill border border-border-subtle bg-glass-panel py-1.5 pl-2 pr-3.5 font-mono text-caption tracking-wider text-text-secondary">
            <span
              aria-hidden="true"
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-brand-tint text-text-brand"
            >
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="h-3 w-3">
                <path d="M6 1.5v5.5" />
                <path d="M6 10.3h.01" />
              </svg>
            </span>
            ERROR 404 · PAGE NOT FOUND
          </p>

          {/* Display "404": decorative, the heading below carries the meaning. One-off display size, not a type token. */}
          <p
            aria-hidden="true"
            className="font-sans font-bold text-text-primary"
            style={{ fontSize: 'clamp(120px, 22vw, 220px)', lineHeight: 0.9, letterSpacing: '-0.04em' }}
          >
            4
            <span
              className="inline-block -rotate-6 font-hand font-bold text-blue-500"
              style={{ fontSize: '1.05em', margin: '0 0.02em' }}
            >
              0
            </span>
            4
          </p>

          <h1
            ref={headingRef}
            tabIndex={-1}
            className="font-sans font-medium text-title leading-snug tracking-tight text-text-primary focus:outline-none"
          >
            This page fell outside the{' '}
            <span className="font-hand font-bold leading-none" style={{ fontSize: '1.18em' }}>
              information architecture.
            </span>
          </h1>

          <p className="max-w-xl font-sans text-body-lg leading-relaxed text-text-secondary">
            The link may be broken, or the page was moved during a redesign. Everything that matters is still here
            &mdash; let me route you back.
          </p>

          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-pill border-[1.5px] border-transparent bg-action-primary px-6 py-2.5 font-sans text-body-lg font-medium text-text-inverse transition-colors hover:bg-action-primary-hover motion-reduce:transition-none ${focusRing}`}
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
                <path d="M13 8H3M7.5 3.5 3 8l4.5 4.5" />
              </svg>
              Back to home
            </Link>
            <Link
              to="/projects"
              className={`inline-flex min-h-11 items-center justify-center rounded-pill border-[1.5px] border-action-primary bg-surface-default px-6 py-2.5 font-sans text-body-lg font-medium text-action-primary transition-colors hover:bg-surface-brand-tint hover:text-text-brand motion-reduce:transition-none ${focusRing}`}
            >
              See my portfolio
            </Link>
          </div>
        </div>

        {/* Sitemap card */}
        <section
          aria-labelledby="not-found-sitemap"
          className="mt-16 flex w-full max-w-4xl flex-col gap-5 rounded-card border border-border-subtle bg-surface-default p-7 shadow-sm"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div className="flex flex-col gap-1">
              <p className="font-mono text-body font-bold text-text-primary">Sitemap</p>
              <h2 id="not-found-sitemap" className="font-sans text-title-md font-medium tracking-tight text-text-primary">
                Where you can go from here
              </h2>
            </div>
            <p aria-hidden="true" className="font-hand text-title-md font-bold text-accent-handwritten">
              you are here ↓
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-0">
            <span aria-hidden="true" className={`${mapNode} border-dashed border-grey-300 bg-surface-subtle text-text-secondary`}>
              /???&nbsp;<span className="text-accent-handwritten">· 404</span>
            </span>
            <span aria-hidden="true" className="mx-1 hidden min-w-8 flex-1 border-t-[1.5px] border-dashed border-grey-300 md:block" />
            <Link
              to="/"
              className={`${mapNode} border-blue-500 bg-surface-brand-tint font-bold text-text-brand transition-colors hover:bg-surface-subtle motion-reduce:transition-none ${focusRing}`}
            >
              / home
            </Link>
            <span aria-hidden="true" className="mx-1 hidden min-w-8 flex-1 border-t-[1.5px] border-blue-500 md:block" />
            <div className="flex flex-wrap gap-2">
              <Link to="/about" className={mapChip}>/about</Link>
              <Link to="/projects" className={mapChip}>/projects</Link>
              <Link to="/#contact" className={mapChip}>/#contact</Link>
            </div>
          </div>

          <div className="border-t border-border-subtle">
            <p id="not-found-cases" className="mb-1 mt-4 font-mono text-caption tracking-wider text-text-secondary">
              OR JUMP STRAIGHT INTO A CASE STUDY
            </p>
            <ul aria-labelledby="not-found-cases">
              {jumpTo.map((study, i) => (
                <li key={study.id}>
                  <Link
                    to={`/project/${study.id}`}
                    className={`group -mx-3 flex items-center gap-3 rounded-sm px-3 py-4 transition-colors hover:bg-surface-subtle motion-reduce:transition-none ${
                      i < jumpTo.length - 1 ? 'border-b border-border-subtle' : ''
                    } ${focusRing}`}
                  >
                    <span className="w-10 shrink-0 font-mono text-body text-text-secondary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-sans text-title-sm font-medium tracking-tight text-text-primary">
                        {study.title}
                      </span>
                      <span className="mt-1 block font-mono text-caption-xs uppercase tracking-wider text-text-secondary">
                        {study.tags.slice(0, 2).join(' · ')}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-title-md text-text-secondary transition duration-200 group-hover:translate-x-1 group-hover:text-action-primary motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <ContactSection />
    </>
  );
}
