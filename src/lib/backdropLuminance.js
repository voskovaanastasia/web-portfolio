// Measures how light or dark the page is behind a rectangle (the site header's left/right zones).
// Everything returned is WCAG relative luminance (0 = black, 1 = white).
//
// - Images are downscaled ONCE into a small luminance grid (cached by src); scroll-time lookups only read
//   that grid, never getImageData on a large region.
// - <video> / <canvas> are resampled into a tiny canvas at most every VIDEO_INTERVAL ms.
// - A tainted canvas (cross-origin without CORS) falls back to the nearest data-header-theme="dark|light",
//   or to "light".
// - Plain elements use their computed background-color; semi-transparent layers are composited.

const GRID = 32;
const VIDEO_W = 16;
const VIDEO_H = 8;
const VIDEO_INTERVAL = 200;
const BLUR_RADIUS = 12; // backdrop-blur-md: the glass averages this far around each point

const LIN = new Float32Array(256);
for (let i = 0; i < 256; i++) {
  const c = i / 255;
  LIN[i] = c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
export const luminance = (r, g, b) => 0.2126 * LIN[r] + 0.7152 * LIN[g] + 0.0722 * LIN[b];

// Browsers blur and composite in gamma-encoded sRGB, so a half-black / half-white area renders as mid-grey
// (relative luminance ~0.21), not 0.5. Averaging is therefore done on the encoded value, then decoded.
const encode = (L) => (L <= 0.0031308 ? L * 12.92 : 1.055 * L ** (1 / 2.4) - 0.055);
const decode = (v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);

const OVERRIDE_L = { dark: 0.01, light: 0.95 };

// ---------- grids (cached) ----------

const gridCache = new Map(); // key -> { L, A, w, h } | 'tainted'
const scratch = document.createElement('canvas');

// Note: draws the WHOLE source. For srcset images naturalWidth is density-corrected, so cropping to it would
// sample only part of the real pixels.
function gridFromSource(source, gw, gh) {
  scratch.width = gw;
  scratch.height = gh;
  const ctx = scratch.getContext('2d', { willReadFrequently: true });
  ctx.clearRect(0, 0, gw, gh);
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(source, 0, 0, gw, gh);
  let data;
  try {
    data = ctx.getImageData(0, 0, gw, gh).data;
  } catch {
    return 'tainted'; // SecurityError: canvas tainted by a cross-origin source
  }
  const L = new Float32Array(gw * gh);
  const A = new Float32Array(gw * gh);
  for (let i = 0; i < gw * gh; i++) {
    L[i] = encode(luminance(data[i * 4], data[i * 4 + 1], data[i * 4 + 2])); // encoded
    A[i] = data[i * 4 + 3] / 255;
  }
  return { L, A, w: gw, h: gh };
}

// Returns a grid, 'tainted', or null when the image isn't decoded yet (the caller's load listener re-runs us).
function imageGrid(img) {
  const key = img.currentSrc || img.src;
  if (!key) return null;
  if (gridCache.has(key)) return gridCache.get(key);
  if (!img.complete || !img.naturalWidth) return null;
  const grid = gridFromSource(img, GRID, GRID);
  gridCache.set(key, grid);
  if (grid === 'tainted') retryWithCors(key);
  return grid;
}

// A cross-origin image can still be read if the server sends CORS headers: reload it with crossOrigin=anonymous.
function retryWithCors(key) {
  let sameOrigin = false;
  try {
    sameOrigin = new URL(key, location.href).origin === location.origin;
  } catch {
    /* ignore */
  }
  if (sameOrigin) return;
  const probe = new Image();
  probe.crossOrigin = 'anonymous';
  probe.onload = () => {
    const grid = gridFromSource(probe, GRID, GRID);
    if (grid !== 'tainted') {
      gridCache.set(key, grid);
      window.dispatchEvent(new Event('header-theme-refresh'));
    }
  };
  probe.src = key;
}

const bgImages = new Map(); // url -> HTMLImageElement
function backgroundImageEl(url) {
  let img = bgImages.get(url);
  if (!img) {
    img = new Image();
    img.onload = () => window.dispatchEvent(new Event('header-theme-refresh'));
    img.src = url;
    bgImages.set(url, img);
  }
  return img;
}

const liveSamples = new WeakMap(); // video/canvas -> { at, grid }
function liveGrid(el, now) {
  const prev = liveSamples.get(el);
  const playing = el instanceof HTMLVideoElement ? !el.paused && !el.ended : el instanceof HTMLCanvasElement;
  if (prev && (now - prev.at < VIDEO_INTERVAL || (!playing && prev.grid !== null))) return prev.grid;
  if (el instanceof HTMLVideoElement && el.readyState < 2) return null;
  const sw = el instanceof HTMLVideoElement ? el.videoWidth : el.width;
  const sh = el instanceof HTMLVideoElement ? el.videoHeight : el.height;
  if (!sw || !sh) return null;
  const grid = gridFromSource(el, VIDEO_W, VIDEO_H);
  liveSamples.set(el, { at: now, grid });
  return grid;
}

// ---------- geometry ----------

const keywordFraction = { left: 0, top: 0, center: 0.5, right: 1, bottom: 1 };

function parsePosition(value, free) {
  // value like "50% 50%", "left top", "10px 20px" -> fractions of the free space
  const parts = (value || '50% 50%').split(/\s+/);
  const frac = (token, space) => {
    if (token in keywordFraction) return keywordFraction[token];
    if (token.endsWith('%')) return parseFloat(token) / 100;
    if (token.endsWith('px') && space > 0) return parseFloat(token) / space;
    return 0.5;
  };
  return [frac(parts[0], free[0]), frac(parts[1] ?? parts[0], free[1])];
}

// Where the source (nw x nh) is painted inside box, for object-fit / background-size.
function fitRect(box, nw, nh, mode, position) {
  let dw = box.width;
  let dh = box.height;
  const contain = Math.min(box.width / nw, box.height / nh);
  const cover = Math.max(box.width / nw, box.height / nh);
  const scale = { contain, cover, none: 1, 'scale-down': Math.min(1, contain) }[mode];
  if (scale !== undefined) {
    dw = nw * scale;
    dh = nh * scale;
  }
  const [fx, fy] = parsePosition(position, [box.width - dw, box.height - dh]);
  return { left: box.left + (box.width - dw) * fx, top: box.top + (box.height - dh) * fy, width: dw, height: dh };
}

// Mean luminance + alpha of a viewport rect (zone) over a grid painted at `drawn`.
function readGrid(grid, drawn, zone) {
  const x0 = Math.max(zone.left, drawn.left);
  const x1 = Math.min(zone.right, drawn.left + drawn.width);
  const y0 = Math.max(zone.top, drawn.top);
  const y1 = Math.min(zone.bottom, drawn.top + drawn.height);
  if (x1 <= x0 || y1 <= y0) return null;
  const cx0 = Math.min(grid.w - 1, Math.max(0, Math.floor(((x0 - drawn.left) / drawn.width) * grid.w)));
  const cx1 = Math.min(grid.w - 1, Math.max(cx0, Math.ceil(((x1 - drawn.left) / drawn.width) * grid.w) - 1));
  const cy0 = Math.min(grid.h - 1, Math.max(0, Math.floor(((y0 - drawn.top) / drawn.height) * grid.h)));
  const cy1 = Math.min(grid.h - 1, Math.max(cy0, Math.ceil(((y1 - drawn.top) / drawn.height) * grid.h) - 1));
  let sumL = 0;
  let sumA = 0;
  let n = 0;
  for (let y = cy0; y <= cy1; y++) {
    for (let x = cx0; x <= cx1; x++) {
      const i = y * grid.w + x;
      sumL += grid.L[i] * grid.A[i];
      sumA += grid.A[i];
      n++;
    }
  }
  return sumA > 0 ? { L: decode(sumL / sumA), a: sumA / n } : { L: 0, a: 0 };
}

// ---------- layers ----------

function parseColor(value) {
  const nums = value.match(/-?[\d.]+/g);
  if (!nums || nums.length < 3) return null;
  const scale = value.startsWith('color(') ? 255 : 1;
  const rgb = nums.slice(0, 3).map((n) => Math.max(0, Math.min(255, Math.round(parseFloat(n) * scale))));
  const alpha = nums.length > 3 ? parseFloat(nums[3]) : 1;
  return { L: luminance(rgb[0], rgb[1], rgb[2]), a: alpha };
}

const fallbackTheme = (el) => {
  const theme = el.closest('[data-header-theme]')?.getAttribute('data-header-theme');
  return OVERRIDE_L[theme] ?? OVERRIDE_L.light;
};

// One painted layer for `el` over `zone`: { L, a } or null if it paints nothing there.
function layerFor(el, zone, now, cs) {
  const opacity = parseFloat(cs.opacity);
  if (opacity < 0.02) return null;

  const isImg = el instanceof HTMLImageElement;
  const isLive = el instanceof HTMLVideoElement || el instanceof HTMLCanvasElement;
  if (isImg || isLive) {
    const grid = isImg ? imageGrid(el) : liveGrid(el, now);
    if (grid === 'tainted') return { L: fallbackTheme(el), a: opacity };
    if (grid) {
      const nw = isImg ? el.naturalWidth : el instanceof HTMLVideoElement ? el.videoWidth : el.width;
      const nh = isImg ? el.naturalHeight : el instanceof HTMLVideoElement ? el.videoHeight : el.height;
      const box = el.getBoundingClientRect();
      const drawn = fitRect(box, nw || 1, nh || 1, cs.objectFit, cs.objectPosition);
      const read = readGrid(grid, drawn, zone);
      if (read && read.a > 0) return { L: read.L, a: read.a * opacity };
    }
    return null;
  }

  // Plain background colour, then an optional url() background drawn above it.
  const layers = [];
  const bgUrl = /url\(["']?([^"')]+)["']?\)/.exec(cs.backgroundImage)?.[1];
  if (bgUrl) {
    const img = backgroundImageEl(bgUrl);
    const grid = imageGrid(img);
    if (grid === 'tainted') layers.push({ L: fallbackTheme(el), a: 1 });
    else if (grid) {
      const box = el.getBoundingClientRect();
      const size = cs.backgroundSize.split(/\s+/)[0];
      const mode = size === 'cover' || size === 'contain' ? size : size === 'auto' ? 'none' : 'cover';
      const drawn = fitRect(box, img.naturalWidth, img.naturalHeight, mode, cs.backgroundPosition);
      const read = readGrid(grid, drawn, zone);
      if (read && read.a > 0) layers.push(read);
    }
  }
  const bg = parseColor(cs.backgroundColor);
  if (bg && bg.a > 0) layers.push(bg);
  if (!layers.length) return null;

  // composite top (url image) over bottom (colour)
  let L = 0;
  let trans = 1;
  for (const layer of layers) {
    L += trans * layer.a * layer.L;
    trans *= 1 - layer.a;
  }
  const a = 1 - trans;
  return { L: a > 0 ? L / a : 0, a: a * opacity };
}

// Encoded luminance behind one point/slice, ignoring everything inside `headerEl`.
function measureSlice(slice, headerEl, now) {
  const x = (slice.left + slice.right) / 2;
  const y = (slice.top + slice.bottom) / 2;
  const stack = document.elementsFromPoint(x, y);
  // Optional manual override: the topmost element carrying data-header-theme decides for this point.
  const tagged = stack.find((el) => !headerEl.contains(el) && el.getAttribute('data-header-theme') in OVERRIDE_L);
  if (tagged) return { E: encode(OVERRIDE_L[tagged.getAttribute('data-header-theme')]), live: false };
  const region = {
    left: slice.left - BLUR_RADIUS,
    right: slice.right + BLUR_RADIUS,
    top: slice.top - BLUR_RADIUS,
    bottom: slice.bottom + BLUR_RADIUS,
  };
  let acc = 0;
  let trans = 1;
  let live = false;
  for (const el of stack) {
    if (headerEl.contains(el)) continue;
    if (el instanceof HTMLVideoElement || el instanceof HTMLCanvasElement) live = true;
    const layer = layerFor(el, region, now, getComputedStyle(el));
    if (!layer) continue;
    acc += trans * layer.a * encode(layer.L);
    trans *= 1 - layer.a;
    if (trans < 0.02) break;
  }
  acc += trans; // anything left shows the white page (encoded 1)
  return { E: acc, live };
}

// Luminance behind `zone` (a DOMRect-like). Wide zones are sliced so a dark/light split inside them
// averages out the way the blurred glass does. Returns { L, live } where live=true if a video/canvas was
// involved (the caller keeps re-sampling).
export function measureBehind(zone, headerEl, now = performance.now()) {
  const n = Math.min(6, Math.max(1, Math.round((zone.right - zone.left) / 60)));
  const w = (zone.right - zone.left) / n;
  let sum = 0;
  let live = false;
  for (let k = 0; k < n; k++) {
    const res = measureSlice({ left: zone.left + k * w, right: zone.left + (k + 1) * w, top: zone.top, bottom: zone.bottom }, headerEl, now);
    sum += res.E;
    live ||= res.live;
  }
  return { L: decode(sum / n), live };
}
