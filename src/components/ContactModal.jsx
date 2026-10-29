import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { closeContactModal, useContactModalOpen } from '../contactModalStore';
import { CONTACT_EMAIL } from '../config/contact';
import avatar from '../assets/avatar.webp';
import iconMail from '../assets/contact/mail.svg';
import iconCopy from '../assets/contact/copy.svg';
import iconLinkedin from '../assets/contact/linkedin.svg';
import iconBehance from '../assets/contact/behance.svg';
import iconInstagram from '../assets/contact/instagram.svg';
import iconCv from '../assets/contact/cv.svg';

// "Contact me" dialog opened from the hero buttons (see contactModalStore). Channels listed in the order
// of the design: email first (highlighted), then copy, socials and the CV.
const channels = [
  { id: 'mail', name: 'Write an email', sub: CONTACT_EMAIL, icon: iconMail, href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Let's Chat")}` },
  { id: 'copy', name: 'Copy email address', sub: 'Paste it wherever you like', icon: iconCopy },
  { id: 'linkedin', name: 'LinkedIn', sub: 'in/anastasiia-voskova', icon: iconLinkedin, href: 'https://linkedin.com/in/anastasiia-voskova', external: true },
  { id: 'behance', name: 'Behance', sub: 'full case studies', icon: iconBehance, href: 'https://www.behance.net/0dd9826d', external: true },
  { id: 'instagram', name: 'Instagram', sub: '@anastazja_v', icon: iconInstagram, href: 'https://www.instagram.com/anastazja_v/', external: true },
  { id: 'cv', name: 'Download CV', sub: 'PDF · Anastasiia-Voskova-Resume', icon: iconCv, href: '/Anastasiia-Voskova-Resume.pdf', external: true },
];

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring';
const rowClass = `group flex w-full items-center gap-3 min-h-[52px] px-3 rounded-[10px] text-left no-underline text-text-primary transition-colors hover:bg-surface-brand-tint cursor-pointer ${focusRing}`;
const handle = 'absolute w-2 h-2 bg-surface-default border-[1.5px] border-action-primary';

function RowBody({ channel, copied }) {
  const isCopy = channel.id === 'copy';
  return (
    <>
      <span
        aria-hidden="true"
        className="w-10 h-10 shrink-0 flex items-center justify-center rounded-[10px] bg-surface-default shadow-[0_1px_2px_rgba(17,24,39,0.05),inset_0_0_0_0.5px_rgba(0,0,0,0.12)]"
      >
        <img src={channel.icon} alt="" width={24} height={24} className="w-6 h-6 object-contain" />
      </span>
      <span className="flex-1 min-w-0 flex flex-col leading-tight">
        <span className="font-grotesk font-semibold text-[15px]">{isCopy && copied ? 'Copied to clipboard ✓' : channel.name}</span>
        <span className="font-mono text-[11px] text-text-secondary break-all">{channel.sub}</span>
      </span>
      <span aria-hidden="true" className="shrink-0 text-text-secondary transition-colors group-hover:text-action-primary">
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3.5 10.5L10.5 3.5M4.5 3.5h6v6" />
        </svg>
      </span>
    </>
  );
}

export default function ContactModal() {
  const open = useContactModalOpen();
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    if (!(await copyText(CONTACT_EMAIL))) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <Dialog open={open} onClose={closeContactModal} className="relative z-[100]">
      <div aria-hidden="true" className="fixed inset-0 bg-black/50" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            className="relative flex w-full max-w-[560px] flex-col gap-[22px] rounded-3xl border border-border-subtle bg-surface-default p-5 sm:p-7 shadow-[0_40px_80px_rgba(17,24,39,0.16)]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.13) 1.4px, transparent 1.5px)',
              backgroundSize: '20px 20px',
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 rounded-pill border border-border-subtle bg-surface-default py-[5px] pl-[5px] pr-4">
                <img src={avatar} alt="" width={32} height={32} className="w-8 h-8 rounded-full object-cover" />
                <span className="font-mono-bold text-[13px] text-text-primary">
                  Hello, I&rsquo;m <span className="text-text-brand">Anastasiia</span>
                </span>
              </div>
              <button
                type="button"
                onClick={closeContactModal}
                aria-label="Close"
                className={`w-11 h-11 flex items-center justify-center rounded-full border border-border-subtle bg-surface-default hover:bg-surface-subtle cursor-pointer transition-colors ${focusRing}`}
              >
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
                </svg>
              </button>
            </div>

            <div className="relative pt-2">
              <DialogTitle className="m-0 font-grotesk font-medium text-[44px] sm:text-[56px] leading-none tracking-[-0.04em] text-text-primary">
                Let&rsquo;s{' '}
                <span className="relative inline-block px-1.5 font-caveat font-bold text-[1.12em] tracking-normal outline outline-[1.5px] outline-offset-2 outline-action-primary">
                  talk
                  <span aria-hidden="true" className={`${handle} -left-[5px] -top-[5px]`} />
                  <span aria-hidden="true" className={`${handle} -right-[5px] -top-[5px]`} />
                  <span aria-hidden="true" className={`${handle} -left-[5px] -bottom-[5px]`} />
                  <span aria-hidden="true" className={`${handle} -right-[5px] -bottom-[5px]`} />
                </span>
                <span className="text-action-primary">.</span>
              </DialogTitle>
              <p className="mt-3.5 max-w-[400px] font-grotesk text-base leading-normal text-text-primary">
                Tell me about your product — pick whichever channel works best for you.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface-default">
              <div className="border-b border-border-subtle bg-surface-subtle px-3.5 py-2.5">
                <span className="font-grotesk font-semibold text-xs text-text-primary">Ways to reach me</span>
              </div>
              <ul className="m-0 flex list-none flex-col gap-0.5 p-1.5">
                {channels.map((channel, i) => (
                  <li key={channel.id}>
                    {channel.id === 'copy' ? (
                      <button type="button" onClick={handleCopy} className={rowClass}>
                        <RowBody channel={channel} copied={copied} />
                      </button>
                    ) : (
                      <a
                        href={channel.href}
                        {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        {...(channel.id === 'cv' ? { download: 'Anastasiia-Voskova-Resume.pdf' } : {})}
                        className={`${rowClass} ${i === 0 ? 'bg-surface-brand-tint/60' : ''}`}
                      >
                        <RowBody channel={channel} />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
