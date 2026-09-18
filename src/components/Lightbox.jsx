import { useEffect } from 'react';
import { closeLightbox, useLightboxState } from '../lightboxStore';

export default function Lightbox() {
  const state = useLightboxState();

  useEffect(() => {
    if (!state) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [state]);

  if (!state) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 sm:p-8"
      onClick={closeLightbox}
    >
      <button
        type="button"
        onClick={closeLightbox}
        aria-label="Close image preview"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <img
        src={state.src}
        alt={state.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full object-contain rounded-lg"
      />
    </div>
  );
}
