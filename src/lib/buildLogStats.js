// Derived numbers for the "Build log" block. One function, used by scripts/fetch-build-log.mjs and by
// src/components/BuildLog.jsx, so the page and the build can never disagree.
// Input: [{ date: 'YYYY-MM-DD', count }]. Days with no contributions may be left out. All dates are calendar
// dates handled in UTC, so the visitor's time zone cannot move a day.

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// Ties between weekdays are won by the one earlier in a Monday-first week.
const WEEKDAY_TIE_ORDER = [1, 2, 3, 4, 5, 6, 0];

export const DAY_MS = 86400000;

export function parseDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

export function toIso(date) {
  return date.toISOString().slice(0, 10);
}

/** "12 October" (or "12 October 2026" with withYear). */
export function formatDay(iso, withYear = false) {
  const d = parseDate(iso);
  const text = `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`;
  return withYear ? `${text} ${d.getUTCFullYear()}` : text;
}

const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

/** 32 -> "thirty-two". Above 99 the digits are used instead. */
export function numberWord(n) {
  if (!Number.isInteger(n) || n < 0 || n > 99) return String(n);
  if (n < 20) return ONES[n];
  return TENS[Math.floor(n / 10)] + (n % 10 ? `-${ONES[n % 10]}` : '');
}

export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/** plural(1, 'day') -> "1 day"; plural(2, 'day') -> "2 days". */
export function plural(n, noun) {
  return `${n} ${noun}${n === 1 ? '' : 's'}`;
}

function topKey(totals, tieOrder) {
  let best = null;
  for (const key of tieOrder) {
    if (totals.has(key) && (best === null || totals.get(key) > totals.get(best))) best = key;
  }
  return best;
}

export function buildLogStats(days) {
  const active = (days || [])
    .filter((d) => d && /^\d{4}-\d{2}-\d{2}$/.test(d.date) && Number.isFinite(d.count) && d.count > 0)
    .sort((a, b) => (a.date < b.date ? -1 : 1));

  if (!active.length) {
    return {
      totalContributions: 0, activeDays: 0, singleDays: 0, maxDay: 0, maxDayCount: 0, longestStreak: 0,
      firstDate: null, lastDate: null, firstActiveMonth: null, lastActiveMonth: null,
      busiestWeekday: null, busiestMonth: null, busiestDay: null,
    };
  }

  const weekdayTotals = new Map();
  const monthTotals = new Map(); // keyed "YYYY-MM", inserted in date order so ties go to the earlier month
  let total = 0;
  let singleDays = 0;
  let busiestDay = active[0];
  let longestStreak = 0;
  let run = 0;
  let previous = null;

  for (const day of active) {
    const date = parseDate(day.date);
    total += day.count;
    if (day.count === 1) singleDays += 1;
    if (day.count > busiestDay.count) busiestDay = day; // strict: ties keep the earliest date
    const wd = date.getUTCDay();
    weekdayTotals.set(wd, (weekdayTotals.get(wd) || 0) + day.count);
    const ym = day.date.slice(0, 7);
    monthTotals.set(ym, (monthTotals.get(ym) || 0) + day.count);
    run = previous !== null && date.getTime() - previous === DAY_MS ? run + 1 : 1;
    longestStreak = Math.max(longestStreak, run);
    previous = date.getTime();
  }

  const monthName = (iso) => MONTHS[Number(iso.slice(5, 7)) - 1];
  const busiestYm = topKey(monthTotals, [...monthTotals.keys()]);

  return {
    totalContributions: total,
    activeDays: active.length,
    singleDays,
    maxDay: busiestDay.count,
    // how many days share the maximum ("one was thirty-two" vs "two were thirty-two")
    maxDayCount: active.filter((d) => d.count === busiestDay.count).length,
    longestStreak,
    firstDate: active[0].date,
    lastDate: active[active.length - 1].date,
    firstActiveMonth: monthName(active[0].date),
    lastActiveMonth: monthName(active[active.length - 1].date),
    busiestWeekday: WEEKDAYS[topKey(weekdayTotals, WEEKDAY_TIE_ORDER)],
    busiestMonth: monthName(busiestYm),
    busiestDay: { date: busiestDay.date, count: busiestDay.count },
  };
}
