import { useEffect, useRef } from 'react';

// Dot-grid overlay revealed around the cursor. Attaches its mouse listeners to
// the parent element, which must be `relative` (and usually `overflow-hidden`).
export default function DotsBackground() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const section = overlay?.parentElement;
    if (!section || !overlay) return;

    const syncGridOffset = () => {
      const rect = section.getBoundingClientRect();
      const docTop = rect.top + window.scrollY;
      const offsetY = ((docTop % 24) + 24) % 24;
      overlay.style.backgroundPosition = `0 ${-offsetY}px`;
    };

    const handleMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const mask = `radial-gradient(circle 120px at ${x}px ${y}px, black 0%, black 55%, transparent 100%)`;
      overlay.style.maskImage = mask;
      overlay.style.webkitMaskImage = mask;
      overlay.style.opacity = '1';
    };

    const handleLeave = () => {
      overlay.style.opacity = '0';
    };

    syncGridOffset();
    window.addEventListener('resize', syncGridOffset);
    section.addEventListener('mousemove', handleMove);
    section.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('resize', syncGridOffset);
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
        backgroundImage: 'radial-gradient(circle, #288FD6 2.5px, transparent 2.5px)',
        backgroundSize: '24px 24px',
      }}
    />
  );
}
