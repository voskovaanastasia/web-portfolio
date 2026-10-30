import { memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import seed from '../data/buildLog.seed.json';
import { DAY_MS, MONTHS, WEEKDAYS, buildLogStats, capitalize, formatDay, numberWord, parseDate, plural, toIso } from '../lib/buildLogStats';

// "Build log" block of the Built with Claude case: a dark terminal window with a GitHub contribution heatmap.
//
// Data, in order of freshness: the committed seed, the snapshot written at build time by
// scripts/fetch-build-log.mjs (when GITHUB_TOKEN was set), then one live fetch of /api/contributions once the
// block is near the viewport. "Live" means within about five minutes, and GitHub's own calendar lags behind.
// GitHub counts default-branch commits only, so work on another branch does not move the numbers until it is merged.
const generated = import.meta.glob('../data/buildLog.generated.json', { eager: true, import: 'default' });
const built = Object.values(generated)[0];
const snapshot = built && built.asOf >= seed.asOf ? built : seed;

const LOGIN = 'voskovaanastasia';
const REPO_URL = 'https://github.com/voskovaanastasia/web-portfolio';
const WEEKS = 53;
const REFETCH_AFTER_MS = 5 * 60 * 1000;

// Static, NOT computed: it comes from the git commit times as of 30 Oct 2026 and is not derived from the data.
const AFTERNOON_SENTENCE = 'Most of the work happened in the afternoon.';

const LEVEL_CLASS = ['bg-heat-0', 'bg-heat-1', 'bg-heat-2', 'bg-heat-3', 'bg-heat-4'];

function level(count, max) {
  if (!count) return 0;
  const ratio = count / max;
  return ratio >= 0.75 ? 4 : ratio >= 0.45 ? 3 : ratio >= 0.2 ? 2 : 1;
}

function isValid(d) {
  return (
    d &&
    typeof d.asOf === 'string' &&
    Number.isFinite(d.totalContributions) &&
    (d.repoCommits === null || Number.isFinite(d.repoCommits)) &&
    Array.isArray(d.days) &&
    d.days.every((x) => x && typeof x.date === 'string' && Number.isFinite(x.count))
  );
}

// One cell per day, Sunday-first columns, ending on the as-of date (the last 53 weeks).
function buildCells(data, max) {
  const end = parseDate(data.asOf);
  const start = new Date(end.getTime() - (end.getUTCDay() + (WEEKS - 1) * 7) * DAY_MS);
  const counts = new Map(data.days.map((d) => [d.date, d.count]));
  const total = (WEEKS - 1) * 7 + end.getUTCDay() + 1;
  return Array.from({ length: total }, (_, i) => {
    const date = toIso(new Date(start.getTime() + i * DAY_MS));
    const count = counts.get(date) || 0;
    return { date, count, level: level(count, max) };
  });
}

function monthLabels(cells) {
  const labels = [];
  let previous = null;
  for (let col = 0; col * 7 < cells.length; col += 1) {
    const month = Number(cells[col * 7].date.slice(5, 7)) - 1;
    if (previous !== null && month !== previous) labels.push({ col, text: MONTHS[month].slice(0, 3) });
    previous = month;
  }
  return labels;
}

function tooltipText({ date, count }) {
  const d = parseDate(date);
  const what = count === 0 ? 'No contributions' : plural(count, 'contribution');
  return `${what} · ${WEEKDAYS[d.getUTCDay()].slice(0, 3)} ${d.getUTCDate()} ${MONTHS[d.getUTCMonth()].slice(0, 3)}`;
}

function describe(stats) {
  if (!stats.activeDays) return 'No contributions yet.';
  const period =
    stats.firstActiveMonth === stats.lastActiveMonth
      ? `in ${stats.firstActiveMonth}`
      : `between ${stats.firstActiveMonth} and ${stats.lastActiveMonth}`;
  const first = `${capitalize(numberWord(stats.activeDays))} ${stats.activeDays === 1 ? 'day' : 'days'} ${period}.`;

  const clauses = [];
  if (stats.activeDays > 1 && stats.singleDays > 0) {
    clauses.push(`${capitalize(numberWord(stats.singleDays))} of them ${stats.singleDays === 1 ? 'was' : 'were'} a single contribution`);
  }
  if (stats.maxDay > 1) {
    const k = stats.maxDayCount;
    clauses.push(`${k === 1 ? 'one was' : `${numberWord(k)} were`} ${numberWord(stats.maxDay)}`);
  }
  let second = '';
  if (clauses.length === 2) second = ` ${clauses[0]}, and ${clauses[1]}.`;
  else if (clauses.length === 1) second = ` ${capitalize(clauses[0])}.`;
  return `${first}${second} ${AFTERNOON_SENTENCE}`;
}

function ariaLabel(stats) {
  const sameYear = stats.firstDate.slice(0, 4) === stats.lastDate.slice(0, 4);
  const range = sameYear
    ? `${formatDay(stats.firstDate)} and ${formatDay(stats.lastDate, true)}`
    : `${formatDay(stats.firstDate, true)} and ${formatDay(stats.lastDate, true)}`;
  return `Contribution calendar for github.com/${LOGIN}: ${plural(stats.totalContributions, 'contribution')} on ${plural(stats.activeDays, 'day')} between ${range}.`;
}

// Fetches /api/contributions once when the block is near the viewport, and again when the tab regains focus
// (at most every five minutes). Any failure keeps what is on screen.
function useLiveData(rootRef, setData) {
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    let lastFetch = 0;
    let started = false;
    const controller = new AbortController();

    const refresh = async () => {
      lastFetch = Date.now();
      try {
        const res = await fetch('/api/contributions', { signal: controller.signal, headers: { Accept: 'application/json' } });
        if (!res.ok || !(res.headers.get('content-type') || '').includes('json')) return;
        const next = await res.json();
        if (!isValid(next)) return;
        setData((current) => (next.asOf >= current.asOf && JSON.stringify(next) !== JSON.stringify(current) ? next : current));
      } catch {
        /* keep the snapshot */
      }
    };
    const onFocus = () => {
      if (started && document.visibilityState === 'visible' && Date.now() - lastFetch > REFETCH_AFTER_MS) refresh();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        observer.disconnect();
        refresh();
        document.addEventListener('visibilitychange', onFocus);
        window.addEventListener('focus', onFocus);
      },
      { rootMargin: '600px 0px' },
    );
    observer.observe(el);
    return () => {
      controller.abort();
      observer.disconnect();
      document.removeEventListener('visibilitychange', onFocus);
      window.removeEventListener('focus', onFocus);
    };
  }, [rootRef, setData]);
}

const cellClass =
  'aspect-square rounded-[3px] transition-transform hover:scale-125 hover:outline hover:outline-2 hover:outline-offset-1 hover:outline-terminal-command motion-reduce:transition-none motion-reduce:hover:scale-100';

const Cells = memo(function Cells({ cells }) {
  return cells.map((cell, i) => <span key={cell.date} data-i={i} className={`${cellClass} ${LEVEL_CLASS[cell.level]}`} />);
});

const WEEKDAY_ROWS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
const GRID_COLUMNS = { gridTemplateColumns: `28px repeat(${WEEKS}, minmax(0, 1fr))` };

function Heatmap({ cells, labels, stats }) {
  const scrollRef = useRef(null);
  const wrapRef = useRef(null);
  const [tip, setTip] = useState(null);

  // Start at the latest weeks when the graph is wider than the screen.
  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, []);

  // A tap elsewhere closes the tooltip (touch has no pointer-leave).
  useEffect(() => {
    if (!tip) return undefined;
    const close = (e) => {
      if (!wrapRef.current?.contains(e.target)) setTip(null);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [tip]);

  const show = (e, toggle) => {
    const target = e.target.closest?.('[data-i]');
    if (!target) return;
    const i = Number(target.dataset.i);
    if (toggle && tip?.i === i) {
      setTip(null);
      return;
    }
    const wrap = wrapRef.current.getBoundingClientRect();
    const box = target.getBoundingClientRect();
    const half = 80; // keeps the tooltip inside the graph at both edges
    setTip({
      i,
      x: Math.min(Math.max(box.left - wrap.left + box.width / 2, half), wrap.width - half),
      y: box.top - wrap.top,
      h: box.height,
      below: i % 7 < 2, // the top rows have no room above them
    });
  };

  return (
    <div ref={scrollRef} className="overflow-x-auto pb-1">
      <div
        ref={wrapRef}
        role="img"
        aria-label={ariaLabel(stats)}
        className="relative mx-auto min-w-[676px] max-w-[900px]"
        onPointerOver={(e) => e.pointerType === 'mouse' && show(e, false)}
        onPointerLeave={(e) => e.pointerType === 'mouse' && setTip(null)}
        onClick={(e) => show(e, true)}
      >
        <div className="grid h-[26px] gap-[3px]" style={GRID_COLUMNS} aria-hidden="true">
          {labels.map(({ col, text }) => (
            <span key={text + col} className="whitespace-nowrap font-mono text-caption leading-[26px] text-terminal-muted" style={{ gridColumn: col + 2, gridRow: 1 }}>
              {text}
            </span>
          ))}
        </div>
        <div className="grid grid-flow-col grid-rows-7 gap-[3px]" style={GRID_COLUMNS}>
          {WEEKDAY_ROWS.map((text, row) => (
            <span key={row} className="relative" aria-hidden="true">
              <span className="absolute inset-y-0 left-0 flex items-center font-mono text-caption-xs text-terminal-muted">{text}</span>
            </span>
          ))}
          <Cells cells={cells} />
        </div>
        {tip && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute z-10 whitespace-nowrap rounded-control border border-terminal-border bg-surface-inverse px-2.5 py-1.5 font-grotesk text-caption font-medium text-text-inverse"
            style={{ left: tip.x, top: tip.below ? tip.y + tip.h + 8 : tip.y - 8, transform: `translate(-50%, ${tip.below ? '0' : '-100%'})` }}
          >
            {tooltipText(cells[tip.i])}
          </span>
        )}
      </div>
    </div>
  );
}

function Command({ command, children }) {
  return (
    <div className="mb-3.5 font-mono text-[13.5px] leading-[1.7]">
      <p>
        <span aria-hidden="true">
          <span className="text-terminal-prompt">~/portfolio</span> <span className="text-terminal-muted">$</span>{' '}
        </span>
        <span className="text-terminal-command">{command}</span>
      </p>
      <p className="text-terminal-muted">{children}</p>
    </div>
  );
}

const GITHUB_PATH =
  'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12';

function GithubIcon({ size }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d={GITHUB_PATH} />
    </svg>
  );
}

export default function BuildLog() {
  const rootRef = useRef(null);
  const [data, setData] = useState(snapshot);
  useLiveData(rootRef, setData);

  const stats = useMemo(() => buildLogStats(data.days), [data]);
  const cells = useMemo(() => buildCells(data, stats.maxDay || 1), [data, stats.maxDay]);
  const labels = useMemo(() => monthLabels(cells), [cells]);
  const empty = stats.activeDays === 0;

  return (
    <div ref={rootRef} className="flex flex-col gap-8">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div className="flex min-w-0 flex-col gap-4 sm:basis-[560px] sm:flex-1">
          <h2 className="max-w-3xl font-grotesk text-heading font-medium tracking-tight text-text-primary">
            Every lit square is a day I showed up
          </h2>
          <p className="max-w-3xl font-grotesk text-body leading-relaxed text-text-primary">{describe(stats)}</p>
        </div>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center gap-2.5 font-grotesk text-body-lg font-medium text-ink transition-colors hover:text-action-primary motion-reduce:transition-none"
        >
          <GithubIcon size={18} />
          See it on GitHub →
        </a>
      </div>

      <div className="overflow-hidden rounded-panel border border-terminal-border bg-terminal-surface text-text-inverse shadow-terminal">
        <div className="flex h-[52px] items-center gap-3 border-b border-terminal-bar-border bg-gradient-to-b from-terminal-bar-top to-terminal-bar-bottom px-[18px]">
          <div aria-hidden="true" className="flex w-[53px] shrink-0 gap-[7px]">
            <span className="h-[13px] w-[13px] rounded-full bg-traffic-red" />
            <span className="h-[13px] w-[13px] rounded-full bg-traffic-yellow" />
            <span className="h-[13px] w-[13px] rounded-full bg-traffic-green" />
          </div>
          <p className="flex min-w-0 flex-1 items-center justify-center gap-2 font-grotesk text-[13px] font-medium text-terminal-title">
            <span className="shrink-0"><GithubIcon size={14} /></span>
            <span className="truncate">github.com/{LOGIN} — contributions</span>
          </p>
          <div aria-hidden="true" className="w-[53px] shrink-0" />
        </div>

        <div className="flex flex-wrap">
          <div className="min-w-0 border-terminal-divider px-7 py-8 sm:basis-[340px] lg:border-r lg:basis-[300px] lg:shrink-0">
            <Command command="contributions --last-year">
              {empty ? '—' : (
                <>
                  <span className="text-[22px] font-bold text-terminal-prompt">{stats.totalContributions}</span>{' '}
                  {stats.totalContributions === 1 ? 'contribution' : 'contributions'}
                </>
              )}
            </Command>
            <Command command="active-days">
              {empty ? '—' : `${plural(stats.activeDays, 'day')} · first one in ${stats.firstActiveMonth}`}
            </Command>
            <Command command="streak --longest">{empty ? '—' : `${plural(stats.longestStreak, 'day')} in a row`}</Command>
            <Command command="busiest --weekday">{empty ? '—' : stats.busiestWeekday}</Command>
            <Command command="busiest --month">{empty ? '—' : `${stats.busiestMonth} 🔥`}</Command>
          </div>

          <div className="flex min-w-0 flex-1 basis-[420px] flex-col justify-center gap-[18px] px-7 py-8">
            <Heatmap cells={cells} labels={labels} stats={stats} />
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 font-grotesk text-[13px] text-terminal-muted">
              <span>
                <span className="[@media(hover:none)]:hidden">Hover a square to see the day</span>
                <span className="hidden [@media(hover:none)]:inline">Tap a square to see the day</span>
              </span>
              <span aria-hidden="true" className="inline-flex items-center gap-1.5">
                Less
                {LEVEL_CLASS.map((c) => (
                  <span key={c} className={`h-3.5 w-3.5 rounded ${c}`} />
                ))}
                More
              </span>
            </div>
            <span className="font-grotesk text-[13px] text-terminal-muted">
              As of {formatDay(data.asOf, true)}. GitHub counts {plural(stats.totalContributions, 'contribution')}
              {data.repoCommits === null ? '.' : `; the repository has ${plural(data.repoCommits, 'commit')}.`}
            </span>
          </div>
        </div>
      </div>

      {!empty && (
        <p className="sr-only">
          {plural(stats.totalContributions, 'contribution')} on {plural(stats.activeDays, 'day')}. Longest streak:{' '}
          {plural(stats.longestStreak, 'day')} in a row. Busiest weekday: {stats.busiestWeekday}. Busiest month:{' '}
          {stats.busiestMonth}. Busiest day: {formatDay(stats.busiestDay.date, true)} with{' '}
          {plural(stats.busiestDay.count, 'contribution')}.
        </p>
      )}
    </div>
  );
}
