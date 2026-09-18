import { useSyncExternalStore } from 'react';

let state = null;
const listeners = new Set();

function emit() {
  listeners.forEach((listener) => listener());
}

export function openLightbox(src, alt = '') {
  state = { src, alt };
  emit();
}

export function closeLightbox() {
  state = null;
  emit();
}

export function useLightboxState() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => state,
  );
}
