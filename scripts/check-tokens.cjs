// Fails when a raw colour (#hex, rgb(), rgba(), hsl(), hsla()) appears in src/ or index.html outside the
// token files and the allowlist below. Colours belong in src/styles/globals.css as tokens.
const { readFileSync, readdirSync, statSync } = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// Files that may hold raw colours, and why.
const ALLOW = [
  [/^src\/styles\/globals\.css$/, 'the tokens file'],
  [/^src\/pages\/\w+Case\.jsx$/, 'client product palettes in the case pages'],
  [/^src\/components\/ContactSection\.jsx$/, 'third-party brand logo colours (Google, Upwork, LinkedIn, GitHub) and the sticky-note illustration'],
  [/^src\/components\/IATree\.jsx$/, 'information-architecture diagram palette'],
];

const COLOR = /#[0-9a-fA-F]{3,8}\b|\b(?:rgba?|hsla?)\(/g;
const EXT = /\.(jsx?|css|html)$/;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (EXT.test(name)) out.push(full);
  }
  return out;
}

const files = [...walk(path.join(ROOT, 'src')), path.join(ROOT, 'index.html')];
let failures = 0;
for (const file of files) {
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  if (ALLOW.some(([re]) => re.test(rel))) continue;
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    for (const m of line.matchAll(COLOR)) {
      console.error(`${rel}:${i + 1}  ${m[0]}  (use a token from src/styles/globals.css)`);
      failures += 1;
    }
  });
}

if (failures) {
  console.error(`\ncheck:tokens: ${failures} raw colour value(s) outside the token files.`);
  process.exit(1);
}
console.log('check:tokens: no raw colours outside the token files and allowlist.');
