// Padlock + "Coming soon" tag for case studies that are listed but not open yet.
export function LockIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export default function ComingSoonBadge({ className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-pill border border-border-subtle bg-surface-default px-2.5 py-1 font-mono-bold text-caption-xs uppercase tracking-wider text-text-secondary ${className}`}
    >
      <LockIcon className="w-3 h-3" />
      Coming soon
    </span>
  );
}
