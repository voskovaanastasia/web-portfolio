import { Link } from 'react-router-dom';

// Short version of the Experience and Education sections for the home page: one row per entry and a link
// to the full text on the About page.
export function CompactJourney({ id, eyebrow, title, linkLabel, linkTo, rows }) {
  return (
    <section id={id} className="relative overflow-hidden py-12 sm:py-24 bg-surface-default">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div className="flex flex-col gap-2.5">
            <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">{eyebrow}</p>
            <h2 className="font-grotesk font-medium text-heading text-text-primary tracking-tight">{title}</h2>
          </div>
          <Link
            to={linkTo}
            className="pb-1.5 font-grotesk font-medium text-body text-text-brand hover:text-action-primary-hover rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            {linkLabel} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="border-b border-border-subtle">
          {rows.map(({ key, dateRange, title: rowTitle, logo, logoW, logoH, org, details }) => (
            <article
              key={key}
              className="border-t border-border-subtle py-6 grid gap-3 md:grid-cols-[200px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] md:gap-10 md:items-center"
            >
              <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">{dateRange}</p>
              <div className="flex items-center gap-4 min-w-0">
                <div className="bg-surface-default border border-border-subtle rounded-control w-[54px] h-[54px] flex items-center justify-center shrink-0 p-2">
                  <img
                    src={logo}
                    alt=""
                    width={logoW}
                    height={logoH}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="font-grotesk font-medium text-[20px] sm:text-2xl leading-tight text-text-primary">
                    {rowTitle}
                  </h3>
                  <p className="font-grotesk text-sm text-text-primary">
                    <span className="font-medium text-text-brand">{org}</span>
                    {details.map((part, i) => (
                      <span key={i}>
                        <span aria-hidden="true" className="mx-1.5 text-text-secondary">·</span>
                        {part}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
