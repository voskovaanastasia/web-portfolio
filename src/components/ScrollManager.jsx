import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Reloads and Back/Forward must start at the top too, so the browser must not restore positions itself.
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';

const HASH_WAIT_MS = 3000;

// Single place that owns scroll position on navigation. Runs on pathname changes only (not hash or query
// changes, so in-page anchors keep their native smooth scroll): resets to the top instantly, then, if the URL
// carries a hash whose element exists (it may still be mounting, lazy routes), scrolls to it using the
// element's scroll-margin-top to clear the sticky header.
export default function ScrollManager() {
  const { pathname } = useLocation();

  // Layout effect: runs before the new page's passive effects, so ScrollTriggers created on mount start from 0.
  useLayoutEffect(() => {
    // ScrollTrigger remembers the previous page's scroll position and re-applies it on refresh; forget it first.
    ScrollTrigger.clearScrollMemory();
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Let the new page lay out, then recompute every ScrollTrigger's start/end.
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => ScrollTrigger.refresh()));

    const id = decodeURIComponent(window.location.hash.slice(1));
    let observer;
    let timer;
    if (id) {
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (!el) return false;
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
        ScrollTrigger.refresh();
        return true;
      };
      if (!scrollToHash()) {
        observer = new MutationObserver(() => {
          if (scrollToHash()) observer.disconnect();
        });
        observer.observe(document.getElementById('root') ?? document.body, { childList: true, subtree: true });
        timer = setTimeout(() => observer.disconnect(), HASH_WAIT_MS); // target never appeared: stay at the top
      }
    }

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
