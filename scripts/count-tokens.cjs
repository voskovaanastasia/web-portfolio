// Reproduces the design-token migration counts. Usage: node scripts/count-tokens.cjs [repoRoot]
// (repoRoot defaults to this repo; point it at another checkout, e.g. a worktree of main, to compare).
//
//   colours  raw #hex / rgb() / rgba() / hsl() / hsla() values in src/ and index.html, outside the
//            *Case.jsx case pages and the allowlisted files (scripts/token-allowlist.cjs)
//   sizes    arbitrary Tailwind text sizes (text-[14px], sm:text-[26px], ...) in src/, outside *Case.jsx
const { readFileSync, readdirSync, statSync, existsSync } = require('fs');
const path = require('path');

const ROOT = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const ALLOW = require('./token-allowlist.cjs');
const CASE_PAGE = /^src\/pages\/\w+Case\.jsx$/;
// (?<!&) skips HTML character references such as &#128449;. (?<![A-Za-z]) instead of \b so that Tailwind
// arbitrary values such as shadow-[0_8px_20px_rgba(...)] are caught too (an underscore is a word character).
const COLOR = /(?<!&)#[0-9a-fA-F]{3,8}\b|(?<![A-Za-z])(?:rgba?|hsla?)\(/g;
const SIZE = /(?<![\w\[-])(?:[a-z0-9]+:)?text-\[\d+(?:\.\d+)?px\]/g;
const EXT = /\.(jsx?|css|html)$/;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (EXT.test(name)) out.push(full);
  }
  return out;
}

const files = [...walk(path.join(ROOT, 'src'))];
if (existsSync(path.join(ROOT, 'index.html'))) files.push(path.join(ROOT, 'index.html'));

let colours = 0;
let sizes = 0;
for (const file of files) {
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  const text = readFileSync(file, 'utf8');
  if (!CASE_PAGE.test(rel)) sizes += (text.match(SIZE) || []).length;
  if (!ALLOW.some(([re]) => re.test(rel))) colours += (text.match(COLOR) || []).length;
}
console.log(`root: ${ROOT}`);
console.log(`raw colour values (outside *Case.jsx and allowlist): ${colours}`);
console.log(`arbitrary text-[Npx] sizes (outside *Case.jsx):      ${sizes}`);
