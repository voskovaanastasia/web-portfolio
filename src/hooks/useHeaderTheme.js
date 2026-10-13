import { useEffect } from 'react';
import { luminance, measureBehind } from '../lib/backdropLuminance';

// Drives --header-t-left / --header-t-right on the header (0 = dark text, 1 = white text) from the real
// luminance behind its logo zone ([data-header-zone="left"]) and nav zone ([data-header-zone="right"]).
// The CSS in globals.css turns those two numbers into text colours and the glass tint.

const MIN_CONTRAST = 4.75; // WCAG AA is 4.5; the extra margin covers blur / sampling error
const RAMP = 0.025; // width (in luminance) of the smoothstep ramp, placed where the current colour is failing anyway
const EASE_MS = 110; // lerp time constant
const SETTLE_MS = 200; // backdrop holding still inside the ramp for this long -> snap to a valid colour

const smoothstep = (e0, e1, x) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

function parseHex(value, fallback) {
  const m = /^#?([0-9a-f]{6})$/i.exec(value.trim());
  if (!m) return fallback;
  const n = parseInt(m[1], 16);
  return luminance((n >> 16) & 255, (n >> 8) & 255, n & 255);
}

// Luminance of the header ink. Resolved in JS (hex, or any CSS colour via a canvas) so start-up never appends a
// probe element and forces a layout. Falls back to the --color-text-primary token.
function inkLuminance(value) {
  const fallback = getComputedStyle(document.documentElement).getPropertyValue('--color-text-primary').trim();
  const raw = value.trim() || fallback;
  const hex = /^#?([0-9a-f]{6})$/i.exec(raw);
  if (hex) return parseHex(raw, 0);
  const ctx = document.createElement('canvas').getContext('2d');
  ctx.fillStyle = fallback;
  ctx.fillStyle = raw; // ignored if unparseable, so the fallback stays
  const norm = ctx.fillStyle;
  if (norm.startsWith('#')) return parseHex(norm, 0);
  const [r, g, b] = norm.match(/\d+(\.\d+)?/g).map(Number);
  return luminance(r, g, b);
}

// The glass tints are the --glass-light / --glass-dark tokens in globals.css, read here as { a, L }:
// alpha and relative luminance of the tint colour.
function readTint(name) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name);
  const [r, g, b, a = 1] = raw.match(/[\d.]+/g).map(Number);
  return { a, L: luminance(r, g, b) };
}

// Backdrop luminance limits: white text (over the dark tint) keeps >= MIN_CONTRAST up to `white`, dark text (over the
// light tint) reaches MIN_CONTRAST from `dark`. Where dark < white both colours pass, which is the hysteresis band:
// the header keeps its current colour inside it, so it can't flicker. If the ink is too light for a band to
// exist, both limits collapse to the contrast crossover.
function contrastLimits(inkL, TINT_LIGHT, TINT_DARK) {
  const contrastWhite = (L) => 1.05 / ((1 - TINT_DARK.a) * L + TINT_DARK.a * TINT_DARK.L + 0.05);
  const contrastInk = (L) => ((1 - TINT_LIGHT.a) * L + TINT_LIGHT.a * TINT_LIGHT.L + 0.05) / (inkL + 0.05);
  const solve = (f, increasing, target) => {
    let lo = 0;
    let hi = 1;
    for (let i = 0; i < 30; i++) {
      const mid = (lo + hi) / 2;
      if (f(mid) < target === increasing) lo = mid;
      else hi = mid;
    }
    return (lo + hi) / 2;
  };
  const white = solve(contrastWhite, false, MIN_CONTRAST);
  const dark = solve(contrastInk, true, MIN_CONTRAST);
  if (white >= dark) return { white, dark };
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 30; i++) {
    const mid = (lo + hi) / 2;
    if (contrastWhite(mid) > contrastInk(mid)) lo = mid;
    else hi = mid;
  }
  const cross = (lo + hi) / 2;
  return { white: cross, dark: cross };
}

export default function useHeaderTheme(headerRef, routeKey) {
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const limits = contrastLimits(
      inkLuminance(getComputedStyle(header).getPropertyValue('--header-ink-dark')),
      readTint('--glass-light'),
      readTint('--glass-dark')
    );

    const zones = {
      left: { t: 0, target: 0, white: false, rampL: null, rampAt: 0 },
      right: { t: 0, target: 0, white: false, rampL: null, rampAt: 0 },
    };
    let pending = false;
    let last = performance.now();
    let liveTimer = 0;

    // Zone rects are cached: the header is sticky at the top, so they only change when the header or its
    // contents resize or remount (ResizeObserver / MutationObserver / window resize mark them dirty).
    const rects = { left: null, right: null };
    let rectsDirty = true;
    const readZoneRects = () => {
      for (const name of ['left', 'right']) {
        const boxes = [...header.querySelectorAll(`[data-header-zone="${name}"]`)]
          .map((el) => el.getBoundingClientRect())
          .filter((rc) => rc.width > 0 && rc.height > 0);
        rects[name] = boxes.length
          ? {
              left: Math.min(...boxes.map((rc) => rc.left)),
              right: Math.max(...boxes.map((rc) => rc.right)),
              top: Math.min(...boxes.map((rc) => rc.top)),
              bottom: Math.max(...boxes.map((rc) => rc.bottom)),
            }
          : null;
      }
      rectsDirty = false;
    };

    const frame = (now) => {
      pending = false;
      const dt = Math.min(100, now - last);
      last = now;
      let animating = false;
      let live = false;
      let recheck = false;

      // Read phase: every layout read for both zones happens before any style is written.
      if (rectsDirty) readZoneRects();
      const measured = {};
      for (const name of ['left', 'right']) {
        if (rects[name]) measured[name] = measureBehind(rects[name], header, now);
      }

      // Write phase.
      for (const name of ['left', 'right']) {
        const z = zones[name];
        const res = measured[name];
        if (res) {
          live ||= res.live;
          // Each colour holds until the backdrop passes the point where it stops meeting 4.5:1; the smoothstep
          // ramp lies beyond that point, and the state flips when the ramp completes (so t stays continuous).
          if (z.white) {
            z.target = 1 - smoothstep(limits.white, limits.white + RAMP, res.L);
            if (z.target === 0) z.white = false;
          } else {
            z.target = 1 - smoothstep(limits.dark - RAMP, limits.dark, res.L);
            if (z.target === 1) z.white = true;
          }
          // The ramp is only for transitions. If the backdrop stays put inside it, both colours would look
          // half-way (grey on grey), so settle: either colour is valid on the far side of the ramp.
          if (z.target > 0 && z.target < 1) {
            if (z.rampL === null || Math.abs(res.L - z.rampL) > 0.004) {
              z.rampL = res.L;
              z.rampAt = now;
            }
            if (now - z.rampAt > SETTLE_MS) {
              z.white = !z.white;
              z.target = z.white ? 1 : 0;
              z.rampL = null;
            } else recheck = true;
          } else z.rampL = null;
        }
        if (reduced.matches) z.t = z.target;
        else z.t += (z.target - z.t) * (1 - Math.exp(-dt / EASE_MS));
        if (Math.abs(z.target - z.t) < 0.003) z.t = z.target;
        else animating = true;
        header.style.setProperty(`--header-t-${name}`, z.t.toFixed(3));
      }

      if (animating) schedule();
      if (recheck) setTimeout(schedule, SETTLE_MS / 2);
      if (live) {
        clearTimeout(liveTimer);
        liveTimer = setTimeout(schedule, 200);
      }
    };

    function schedule() {
      if (pending) return;
      pending = true;
      requestAnimationFrame(frame);
    }

    const opts = { passive: true };
    window.addEventListener('scroll', schedule, opts);
    const markDirty = () => {
      rectsDirty = true;
      schedule();
    };
    window.addEventListener('resize', markDirty, opts);
    window.addEventListener('header-theme-refresh', markDirty);
    document.addEventListener('visibilitychange', schedule);
    // images / videos finishing loading (load doesn't bubble, so capture)
    document.addEventListener('load', schedule, true);
    document.addEventListener('loadeddata', schedule, true);

    // route content mounting / unmounting
    const mutations = new MutationObserver(markDirty);
    const root = document.getElementById('root');
    if (root) mutations.observe(root, { childList: true, subtree: true });
    const resizes = new ResizeObserver(markDirty);
    resizes.observe(document.body);
    resizes.observe(header);
    header.querySelectorAll('[data-header-zone]').forEach((el) => resizes.observe(el));

    schedule();
    return () => {
      window.removeEventListener('scroll', schedule, opts);
      window.removeEventListener('resize', markDirty, opts);
      window.removeEventListener('header-theme-refresh', markDirty);
      document.removeEventListener('visibilitychange', schedule);
      document.removeEventListener('load', schedule, true);
      document.removeEventListener('loadeddata', schedule, true);
      mutations.disconnect();
      resizes.disconnect();
      clearTimeout(liveTimer);
    };
  }, [headerRef, routeKey]);
}
