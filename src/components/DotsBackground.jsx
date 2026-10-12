import { useEffect, useRef } from 'react';

// Dot-grid overlay revealed around the cursor. Attaches its mouse listeners to
// the parent element, which must be `relative` (and usually `overflow-hidden`).
export default function DotsBackground() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const section = overlay?.parentElement;
    if (!section || !overlay) return;

    // The section's box is measured once per layout change (ResizeObserver) and once per scrolled frame,
    // never inside mousemove, so moving the cursor does not force a layout after each style write.
    const box = { left: 0, top: 0 };
    let scrollQueued = false;
    const measure = () => {
      const rect = section.getBoundingClientRect();
      box.left = rect.left;
      box.top = rect.top;
      const docTop = rect.top + window.scrollY;
      const offsetY = ((docTop % 24) + 24) % 24;
      overlay.style.backgroundPosition = `0 ${-offsetY}px`;
    };

    const handleScroll = () => {
      if (scrollQueued) return;
      scrollQueued = true;
      requestAnimationFrame(() => {
        scrollQueued = false;
        const rect = section.getBoundingClientRect();
        box.left = rect.left;
        box.top = rect.top;
      });
    };

    const handleMove = (e) => {
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const mask = `radial-gradient(circle 120px at ${x}px ${y}px, black 0%, black 55%, transparent 100%)`;
      overlay.style.maskImage = mask;
      overlay.style.webkitMaskImage = mask;
      overlay.style.opacity = '1';
    };

    const handleLeave = () => {
      overlay.style.opacity = '0';
    };

    // Fires once on observe (initial measure) and on every size change; window resize can move the
    // section without resizing it, so it re-measures too.
    const resizes = new ResizeObserver(measure);
    resizes.observe(section);
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', handleScroll, { passive: true });
    section.addEventListener('mousemove', handleMove);
    section.addEventListener('mouseleave', handleLeave);

    return () => {
      resizes.disconnect();
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', handleScroll);
      section.removeEventListener('mousemove', handleMove);
      section.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-150 z-0"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(40, 143, 214, 0.25) 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
      }}
    />
  );
}
