// First screen of the home page (header + hero), rendered to static HTML at build time by
// scripts/inject-shell.mjs and written into dist/index.html. The visitor sees the headline as soon as the CSS
// arrives instead of waiting for the JS bundle; React then replaces the shell with the real page.
// Keep the wrappers in step with Layout in App.jsx and the top of Home.jsx.
import { StaticRouter } from 'react-router-dom/server';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';

export default function Shell() {
  return (
    <StaticRouter location="/">
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main id="main-content" data-route="/" className="flex flex-col">
          <HeroSection />
        </main>
      </div>
    </StaticRouter>
  );
}
