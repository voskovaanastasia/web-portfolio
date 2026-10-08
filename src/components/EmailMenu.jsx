import { useEffect, useRef, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { CONTACT_EMAIL } from '../config/contact';

const SUBJECT = encodeURIComponent('Hello from your portfolio');
const TO = encodeURIComponent(CONTACT_EMAIL);

const links = [
  { label: 'Open in mail app', href: `mailto:${CONTACT_EMAIL}?subject=${SUBJECT}`, external: false },
  {
    label: 'Gmail',
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${TO}&su=${SUBJECT}`,
    external: true,
  },
  {
    label: 'Outlook',
    href: `https://outlook.live.com/mail/0/deeplink/compose?to=${TO}&subject=${SUBJECT}`,
    external: true,
  },
];

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring';
const itemClass =
  'block w-full text-left px-4 py-2 font-grotesk text-sm text-text-primary data-[focus]:bg-surface-brand-tint outline-none cursor-pointer';

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fall through to the legacy path
    }
  }
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
  document.body.appendChild(area);
  area.select();
  area.setSelectionRange(0, text.length);
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch {
    ok = false;
  }
  document.body.removeChild(area);
  return ok;
}

export default function EmailMenu() {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async (e) => {
    e.preventDefault(); // keep the menu open so "Copied!" is visible
    if (await copyText(CONTACT_EMAIL)) {
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Menu as="div" className="relative w-full max-w-[280px] min-[480px]:w-auto min-[480px]:max-w-none">
      <MenuButton
        className={`w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-surface-brand-tint text-action-primary border-[1.5px] border-action-primary font-grotesk font-medium text-base px-5 py-2.5 rounded-pill transition-colors ${focusRing}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Email me
      </MenuButton>
      <MenuItems
        modal={false}
        anchor={{ to: 'bottom', gap: 8, padding: 12 }}
        className="z-50 w-64 rounded-card bg-white py-2 shadow-lg ring-1 ring-black/10 outline-none [--anchor-max-height:20rem]"
      >
        <p className="px-4 py-2 font-grotesk text-sm text-text-secondary select-text break-all">{CONTACT_EMAIL}</p>
        <div className="my-1 h-px bg-black/10" role="separator" />
        {links.map((l) => (
          <MenuItem key={l.label}>
            <a
              href={l.href}
              className={itemClass}
              {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {l.label}
            </a>
          </MenuItem>
        ))}
        <MenuItem>
          <button type="button" onClick={handleCopy} className={itemClass}>
            {copied ? 'Copied!' : 'Copy email address'}
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
