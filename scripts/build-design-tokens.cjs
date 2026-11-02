// Regenerates src/data/designTokens.js, the data behind the "Variables" window of the Built with Claude case.
// Usage: node scripts/build-design-tokens.cjs [--report]
//
//   Figma side  scripts/figma-variables.json: a read-only snapshot of the Figma variables (names, values, aliases).
//               Refresh it by re-reading the Figma file and replacing the JSON.
//   Code side   src/styles/globals.css: the real code names and values (nothing is typed by hand here).
//
// Every count in the window (sidebar counts, total) is taken from the snapshot. The script exits with an error if the
// rows do not account for every variable, or if the collection counts do not add up to the total.
// --report also prints every mismatch between Figma and code. It never changes a token, a Figma variable or globals.css.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const css = fs.readFileSync(path.join(ROOT, 'src/styles/globals.css'), 'utf8');
const snapshot = JSON.parse(fs.readFileSync(path.join(__dirname, 'figma-variables.json'), 'utf8'));

// ---- code side ---------------------------------------------------------------------------------------------------
const mediaAt = css.indexOf('@media (min-width: 640px)');
const readVars = (text) => {
  const out = {};
  for (const m of text.matchAll(/^\s*(--[\w-]+):\s*([^;]+);/gm)) out[m[1]] = m[2].trim();
  return out;
};
const codeVars = readVars(css.slice(css.indexOf(':root {'), mediaAt));

const toHex = (r, g, b, a) => {
  const h = (n) => Math.round(n).toString(16).padStart(2, '0').toUpperCase();
  return `#${h(r)}${h(g)}${h(b)}${a < 1 ? h(a * 255) : ''}`;
};
// Resolves a code value to #RRGGBB or #RRGGBBAA. Returns null for anything that is not a colour.
function codeHex(value, depth = 0) {
  if (depth > 6 || value === undefined) return null;
  let m = value.match(/^var\((--[\w-]+)\)$/);
  if (m) return codeHex(codeVars[m[1]], depth + 1);
  m = value.match(/^#([0-9a-f]{6})$/i);
  if (m) return `#${m[1].toUpperCase()}`;
  m = value.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/i);
  if (m) return toHex(+m[1], +m[2], +m[3], +m[4]);
  m = value.match(/^color-mix\(in srgb,\s*var\((--[\w-]+)\)\s*(\d+)%,\s*transparent\)$/);
  if (m) {
    const base = codeHex(codeVars[m[1]], depth + 1);
    return base ? `${base.slice(0, 7)}${Math.floor((+m[2] / 100) * 255).toString(16).padStart(2, '0').toUpperCase()}` : null;
  }
  return null;
}

// ---- naming rule: Figma name -> code name ------------------------------------------------------------------------
function codeName(collection, fig) {
  if (collection === 'Primitives') return fig === 'white' ? '--color-white-primitive' : `--color-${fig.replace('/', '-')}`;
  if (collection === 'Semantic') {
    const [group, name] = fig.split('/');
    if (group === 'glass') return `--glass-${name}`;
    if (group === 'decor') return `--color-${name}`;
    return `--color-${group}-${name}`;
  }
  if (collection === 'Typography') {
    const [group, a, b] = fig.split('/');
    if (group === 'font-size') return `--font-size-${b}`;
    if (group === 'font-family') return `--font-${{ ui: 'sans', mono: 'mono', handwritten: 'hand' }[a]}`;
    return `--${group}-${a}`;
  }
  if (collection === 'Spacing') {
    if (fig.startsWith('focus/')) return `--focus-${fig.split('/')[1]}`;
    return `--space-${fig.split('/').pop()}`;
  }
  return `--${fig.replace('/', '-')}`;
}

const findCollection = (name) => snapshot.collections.find((c) => c.name === name);
const primitives = findCollection('Primitives').variables;
const primitiveHex = Object.fromEntries(primitives.map((v) => [v.name, v.value.toUpperCase()]));

// Swatch variable for a primitive: its own code variable, or (Figma-only primitives) the code variable that holds the
// same value. The swatch is only painted with it; it is never shown as the primitive's name.
function swatchVar(fig) {
  const own = codeName('Primitives', fig);
  if (codeVars[own] !== undefined) return own;
  const hex = primitiveHex[fig];
  return Object.keys(codeVars).find((k) => k !== own && codeHex(codeVars[k]) === hex) || null;
}

const px = (n) => `${n}px`;
const mismatches = [];
const codeOnly = new Set(Object.keys(codeVars));
const claim = (name) => codeOnly.delete(name);

// ---- build rows --------------------------------------------------------------------------------------------------
function groupRows(rows, groupOf) {
  const groups = [];
  for (const row of rows) {
    const label = groupOf(row);
    let g = groups.find((x) => x.label === label);
    if (!g) groups.push((g = { label, rows: [] }));
    g.rows.push(row);
  }
  return groups;
}

const collections = [];

// Primitives
{
  const rows = primitives.map((v) => {
    const own = codeName('Primitives', v.name);
    const has = codeVars[own] !== undefined;
    if (has) {
      claim(own);
      const ch = codeHex(codeVars[own]);
      if (ch !== v.value.toUpperCase()) mismatches.push(`Value: ${v.name} is ${v.value} in Figma but ${own} is ${codeVars[own]} in code`);
    } else {
      mismatches.push(`Figma only: primitive ${v.name} (${v.value}) has no code variable (${own})`);
    }
    const s = swatchVar(v.name);
    if (!has && !s) mismatches.push(`Figma only: primitive ${v.name} has no same-valued code variable either, so its code-name column stays an em dash`);
    // via: the same-valued code variable that paints the swatch, shown as "via <variable>" for a Figma-only primitive.
    return { f: v.name, c: has ? own : null, ...(!has && s ? { via: s } : {}), v: v.value.toUpperCase().slice(1), s, p: 'color', n: 1 };
  });
  collections.push({ id: 'primitives', label: 'Primitives', count: primitives.length, groups: groupRows(rows, (r) => r.f.split('/')[0]) });
}

// Semantic
{
  const sem = findCollection('Semantic').variables;
  const rows = sem.map((v) => {
    const c = codeName('Semantic', v.name);
    const aliasHex = primitiveHex[v.alias];
    if (codeVars[c] === undefined) {
      mismatches.push(`Figma only: semantic ${v.name} has no code variable (${c})`);
    } else {
      claim(c);
      const ch = codeHex(codeVars[c]);
      if (ch !== aliasHex) mismatches.push(`Value: ${v.name} is ->${v.alias} (${aliasHex}) in Figma but ${c} is ${codeVars[c]} in code`);
      const m = codeVars[c].match(/^var\((--[\w-]+)\)$/);
      if (!m) mismatches.push(`Alias: ${v.name} is an alias of ${v.alias} in Figma, but ${c} is a literal in code (${codeVars[c]})`);
      else if (m[1] !== codeName('Primitives', v.alias)) mismatches.push(`Alias: ${v.name} -> ${v.alias} in Figma, ${c} -> ${m[1]} in code`);
    }
    return { f: v.name, c: codeVars[c] !== undefined ? c : null, a: v.alias, as: swatchVar(v.alias), s: c, p: 'color', n: 1 };
  });
  collections.push({ id: 'semantic', label: 'Semantic', count: sem.length, groups: groupRows(rows, (r) => r.f.split('/')[0]) });
}

// Typography
{
  const typo = findCollection('Typography').variables;
  const byName = Object.fromEntries(typo.map((v) => [v.name, v]));
  const rows = [];
  const sizeNames = typo.filter((v) => v.name.startsWith('font-size/mobile/')).map((v) => v.name.split('/')[2]);
  for (const n of sizeNames) {
    const mo = byName[`font-size/mobile/${n}`];
    const de = byName[`font-size/desktop/${n}`];
    if (!de) mismatches.push(`Figma: font-size ${n} has no desktop variable`);
    const c = `--font-size-${n}`;
    if (codeVars[c] === undefined) mismatches.push(`Figma only: ${mo.name} has no code variable (${c})`);
    else {
      claim(c);
      if (codeVars[c] !== px(mo.value)) mismatches.push(`Value: ${mo.name} is ${mo.value} in Figma but ${c} is ${codeVars[c]} (mobile) in code`);
      const dv = readVars(css.slice(mediaAt))[c];
      if (de && dv !== undefined && dv !== px(de.value)) mismatches.push(`Value: ${de.name} is ${de.value} in Figma but ${c} is ${dv} (desktop) in code`);
    }
    rows.push({ f: `font-size/${n}`, c, v: mo.value === de.value ? px(mo.value) : `${px(mo.value)} → ${px(de.value)}`, p: 'size', pv: c, n: 2, g: 'font-size' });
  }
  const weightCode = { regular: '400', medium: '500', bold: '700' };
  for (const v of typo.filter((x) => !x.name.startsWith('font-size/'))) {
    const [group, name] = v.name.split('/');
    const c = codeName('Typography', v.name);
    if (codeVars[c] === undefined) mismatches.push(`Figma only: ${v.name} has no code variable (${c})`);
    else claim(c);
    let value = String(v.value);
    let p = 'none';
    if (group === 'font-family') p = 'family';
    if (group === 'font-weight') {
      p = 'weight';
      value = `${v.value} · ${weightCode[name]}`;
      if (codeVars[c] !== weightCode[name]) mismatches.push(`Value: ${v.name} is ${v.value} in Figma, ${c} is ${codeVars[c]} in code`);
    }
    if (group === 'letter-spacing') {
      value = `${v.value}%`;
      if (codeVars[c] !== `${v.value / 100}em`) mismatches.push(`Representation: ${v.name} is ${v.value} (percent) in Figma, ${c} is ${codeVars[c]} in code`);
    }
    if (group === 'line-height' && codeVars[c] !== undefined && Number(codeVars[c]) !== v.value) {
      mismatches.push(`Representation: ${v.name} is ${v.value} in Figma, ${c} is ${codeVars[c]} in code (rounded)`);
    }
    rows.push({ f: v.name, c: codeVars[c] !== undefined ? c : null, v: value, p, pv: p === 'none' ? undefined : c, n: 1, g: group });
  }
  const groups = groupRows(rows, (r) => r.g).map((g) => ({
    label: g.label,
    note: g.label === 'font-size' ? 'font-size · 13 sizes, mobile and desktop in Figma' : undefined,
    rows: g.rows.map(({ g: _g, ...r }) => r),
  }));
  collections.push({ id: 'typography', label: 'Typography', count: typo.length, groups });
}

// Spacing
{
  const sp = findCollection('Spacing').variables;
  const rows = sp.map((v) => {
    const c = codeName('Spacing', v.name);
    if (codeVars[c] === undefined) mismatches.push(`Figma only: ${v.name} has no code variable (${c})`);
    else {
      claim(c);
      const mobile = !v.name.includes('/desktop/');
      const expect = px(v.value);
      const actual = mobile ? codeVars[c] : readVars(css.slice(mediaAt))[c];
      if (actual !== undefined && actual !== expect) mismatches.push(`Value: ${v.name} is ${v.value} in Figma, ${c} is ${actual} in code`);
    }
    const isSpace = v.name.startsWith('space/');
    return { f: v.name, c: codeVars[c] !== undefined ? c : null, v: px(v.value), p: isSpace ? 'space' : 'none', pv: isSpace ? v.value : undefined, n: 1 };
  });
  collections.push({ id: 'spacing', label: 'Spacing', count: sp.length, groups: groupRows(rows, (r) => r.f.split('/')[0]) });
}

// Radius
{
  const rad = findCollection('Radius').variables;
  const rows = rad.map((v) => {
    const c = codeName('Radius', v.name);
    if (codeVars[c] === undefined) mismatches.push(`Figma only: ${v.name} has no code variable (${c})`);
    else {
      claim(c);
      if (codeVars[c] !== px(v.value)) mismatches.push(`Value: ${v.name} is ${v.value} in Figma, ${c} is ${codeVars[c]} in code`);
    }
    return { f: v.name, c: codeVars[c] !== undefined ? c : null, v: px(v.value), p: 'radius', pv: c, n: 1 };
  });
  collections.push({ id: 'radius', label: 'Radius', count: rad.length, groups: groupRows(rows, (r) => r.f.split('/')[0]) });
}

// ---- checks: every count comes from the snapshot and must add up --------------------------------------------------
const total = snapshot.collections.reduce((sum, c) => sum + c.variables.length, 0);
const errors = [];
for (const c of collections) {
  const rowVars = c.groups.reduce((s, g) => s + g.rows.reduce((t, r) => t + r.n, 0), 0);
  if (rowVars !== c.count) errors.push(`${c.label}: rows account for ${rowVars} variables, the snapshot has ${c.count}`);
  const rowCount = c.groups.reduce((s, g) => s + g.rows.length, 0);
  if (rowCount > 51) errors.push(`${c.label}: ${rowCount} rows, the window renders at most 51`);
}
const sumCounts = collections.reduce((s, c) => s + c.count, 0);
if (sumCounts !== total) errors.push(`Collection counts add up to ${sumCounts}, the snapshot total is ${total}`);
if (errors.length) {
  console.error(`build-design-tokens: counts do not add up\n  ${errors.join('\n  ')}`);
  process.exit(1);
}

// Code variables that Figma has no variable for (reported only).
const figmaCodeNames = new Set();
for (const c of collections) for (const g of c.groups) for (const r of g.rows) if (r.c) figmaCodeNames.add(r.c);
const colourOrLayout = [...codeOnly].filter((k) => !figmaCodeNames.has(k) && !k.startsWith('--shadow-'));

const header = `// GENERATED by scripts/build-design-tokens.cjs from scripts/figma-variables.json (Figma) and src/styles/globals.css (code).
// Do not edit by hand: change the sources and run \`node scripts/build-design-tokens.cjs\`.
// Row keys: f Figma name, c code name (null: Figma only), v value text, a alias (Figma name), as alias swatch variable,
// via same-valued code variable for a Figma-only primitive, s swatch variable, p preview kind, pv preview value, n Figma variables behind the row. Colour values (v) are the hex
// digits without the leading #, which the component adds, so the file holds no colour literal (check:tokens).
`;
// One row per line keeps the file small and the diffs readable.
const serialise = () => {
  const lines = collections.map((c) => {
    const groups = c.groups.map((g) => {
      const head = JSON.stringify({ label: g.label, ...(g.note ? { note: g.note } : {}) }).slice(0, -1);
      return `   ${head},"rows":[\n${g.rows.map((r) => `    ${JSON.stringify(r)}`).join(',\n')}\n   ]}`;
    });
    const head = JSON.stringify({ id: c.id, label: c.label, count: c.count }).slice(0, -1);
    return `  ${head},"groups":[\n${groups.join(',\n')}\n  ]}`;
  });
  return `[\n${lines.join(',\n')}\n]`;
};
const body = `export const variablesTotal = ${total};\n\nexport const variableCollections = ${serialise()};\n`;
fs.writeFileSync(path.join(ROOT, 'src/data/designTokens.js'), header + body);

console.log(`designTokens.js: ${collections.map((c) => `${c.label} ${c.count}`).join(', ')}; total ${total}`);
if (process.argv.includes('--report')) {
  console.log(`\nMismatches Figma vs code (${mismatches.length}):`);
  for (const m of mismatches) console.log(`  - ${m}`);
  console.log(`\nCode variables with no Figma variable (shadows left out):`);
  for (const k of colourOrLayout) console.log(`  - ${k}: ${codeVars[k]}`);
}
