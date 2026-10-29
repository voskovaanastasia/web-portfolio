import { useSyncExternalStore } from 'react';

let open = false;
const listeners = new Set();

function emit() {
  listeners.forEach((listener) => listener());
}

export function openContactModal() {
  open = true;
  emit();
}

export function closeContactModal() {
  open = false;
  emit();
}

export function useContactModalOpen() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => open,
  );
}
