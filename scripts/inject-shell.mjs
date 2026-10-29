// Runs after `vite build` and prerender-routes (see package.json "postbuild"). Bundles src/shell.jsx for
// node, renders it to a string and puts it inside #root of dist/index.html (the home page only).
import { build } from 'vite';
import { readFileSync, writeFileSync, rmSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'node_modules', '.shell-ssr');

await build({
  root,
  logLevel: 'warn',
  build: { ssr: path.join(root, 'src/shell.jsx'), outDir, emptyOutDir: true, copyPublicDir: false, rollupOptions: { output: { format: 'esm', entryFileNames: 'shell.mjs' } } },
  ssr: { noExternal: ['react-router-dom'] },
});

const { default: Shell } = await import(pathToFileURL(path.join(outDir, 'shell.mjs')).href);
const html = renderToString(createElement(Shell));
rmSync(outDir, { recursive: true, force: true });

const file = path.join(root, 'dist', 'index.html');
const template = readFileSync(file, 'utf8');
if (!template.includes('<div id="root"></div>')) throw new Error('inject-shell: <div id="root"></div> not found in dist/index.html');
let out = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);


// Inline the stylesheet: the shell can then paint without a second round trip for the CSS (it was the only
// render-blocking request). Home page only; other routes keep the <link> and the shared cached file.
const css = out.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (!css) throw new Error('inject-shell: stylesheet link not found in dist/index.html');
out = out.replace(css[0], `<style>${readFileSync(path.join(root, 'dist', css[1]), 'utf8')}</style>`);

// The shell is already on screen. Start the bundle after the page has loaded (or after 3 s as a fallback) so the
// browser records the shell's headline as the LCP element before React swaps it, and the bundle no longer
// competes with the CSS and fonts for bandwidth.
const tag = out.match(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/);
if (!tag) throw new Error('inject-shell: module script tag not found in dist/index.html');
out = out.replace(
  tag[0],
  `<script>(function(){var d=0;function go(){if(d)return;d=1;var s=document.createElement('script');s.type='module';s.crossOrigin='';s.src='${tag[1]}';document.head.appendChild(s)}addEventListener('load',function(){setTimeout(go,150)});setTimeout(go,3000)})()</script>`
);
writeFileSync(file, out);
console.log(`inject-shell: wrote ${(html.length / 1024).toFixed(1)} KB of static hero into dist/index.html`);
