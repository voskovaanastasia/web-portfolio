import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Reveals the direct children of `ref` one after another as the element scrolls into view.
// Replays on re-entry; skipped when the visitor prefers reduced motion.
export default function useStaggerReveal(ref) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;
    const tween = gsap.from(el.children, {
      y: 30,
      opacity: 0,
      duration: 0.45,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'restart none restart reset' },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ref]);
}
