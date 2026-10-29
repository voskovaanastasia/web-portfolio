import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { openContactModal } from '../contactModalStore';
import { CONTACT_EMAIL } from '../config/contact';
import iconLinkedin from '../assets/contact/linkedin.svg';
import iconTelegram from '../assets/contact/telegram.svg';
import iconBehance from '../assets/contact/behance.svg';
import iconInstagram from '../assets/contact/instagram.svg';
import iconUpwork from '../assets/contact/upwork.svg';
import iconGithub from '../assets/contact/github.svg';
import avatar from '../assets/avatar.webp';

// Site-wide footer (rendered by App under every page): contact call-to-action, link columns and the big wordmark.
const columns = [
  {
    title: 'Pages',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About me', to: '/about' },
      { label: 'Portfolio', to: '/projects' },
    ],
  },
  {
    title: 'Work',
    links: [
      { label: 'Farsafe', to: '/project/farsafe' },
      { label: 'bART Solutions', to: '/project/bart' },
      { label: 'CryptoWallet', to: '/project/cryptowallet' },
      { label: 'All work →', to: '/projects' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/anastasiia-voskova', icon: iconLinkedin, whiteIcon: true, external: true },
      { label: 'Telegram', href: 'https://t.me/Anastasiia_wax', icon: iconTelegram, external: true },
      { label: 'Behance', href: 'https://www.behance.net/0dd9826d', icon: iconBehance, whiteIcon: true, external: true },
      { label: 'Instagram', href: 'https://www.instagram.com/anastazja_v/', icon: iconInstagram, whiteIcon: true, external: true },
      { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0160de67b81721f9ab', icon: iconUpwork, external: true },
      { label: 'GitHub', href: 'https://github.com/voskovaanastasia', icon: iconGithub, whiteIcon: true, external: true },
    ],
  },
];

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4BA6E6]';
const linkClass = `font-grotesk text-[15px] text-[#E5E7EB] no-underline transition-colors hover:text-[#4BA6E6] rounded-sm ${focusRing}`;

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch {
      return; // Clipboard API unavailable: the Contact me dialog still lists the address.
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <footer
      id="contact"
      className="mt-auto overflow-hidden bg-[#111827] text-white font-grotesk"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.09) 1.4px, transparent 1.5px)',
        backgroundSize: '22px 22px',
      }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-12 sm:pt-[72px]">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-[#1F7AB8] px-6 py-6 sm:px-8 sm:py-7">
          <div className="flex items-center gap-3.5">
            <img src={avatar} alt="" width={52} height={52} loading="lazy" className="h-[52px] w-[52px] rounded-full border-2 border-white object-cover" />
            <span className="flex flex-col gap-0.5">
              <span className="font-medium text-[22px] sm:text-[28px] lg:text-[32px] tracking-[-0.02em] leading-tight">Have a project in mind?</span>
              <span className="text-[15px] text-white">I&rsquo;m open to new projects &mdash; let&rsquo;s make it simple.</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={openContactModal}
              className={`inline-flex min-h-[52px] items-center gap-3 rounded-pill bg-white py-1.5 pl-[22px] pr-1.5 font-grotesk font-bold text-base text-[#155E8C] transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer ${focusRing}`}
            >
              Contact me
              <span aria-hidden="true" className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#1F7AB8] text-white">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3.5 10.5L10.5 3.5M4.5 3.5h6v6" />
                </svg>
              </span>
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className={`min-h-[52px] rounded-pill border-[1.5px] border-white/60 bg-transparent px-5 font-grotesk font-medium text-[15px] text-white transition-colors hover:bg-white/10 cursor-pointer ${focusRing}`}
            >
              {copied ? 'Copied ✓' : 'Copy'} email
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 pt-14 pb-10">
          <div className="flex min-w-0 basis-[280px] flex-[2_1_280px] flex-col gap-3.5">
            <svg role="img" aria-label="AV logo" width="44" height="36" viewBox="0 0 37 30">
              <path d="M0 30L7.81574 0H17.5854L25.4012 30H19.6243L18.0102 23.4H7.39097L5.77685 30H0ZM8.70776 18.1714H16.6934L13.0829 3.55714H12.3183L8.70776 18.1714Z" fill="#4BA6E6" />
              <path d="M19.8393 30L12.2785 0H18.0553L24.3419 26.3571H24.9366L31.2231 0H37L29.4391 30H19.8393Z" fill="#4BA6E6" />
            </svg>
            <p className="m-0 max-w-[300px] text-[15px] leading-relaxed text-[#C9CED6]">
              Product designer who makes complex, data-dense products feel simple.
            </p>
            <a
              href="/Anastasiia-Voskova-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Anastasiia-Voskova-Resume.pdf"
              className={`mt-1.5 inline-flex min-h-[44px] w-fit items-center gap-2.5 rounded-pill bg-[#4BA6E6] px-5 font-grotesk font-bold text-[15px] text-[#111827] no-underline transition-colors hover:bg-[#7DC0F0] ${focusRing}`}
            >
              Download CV
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 1.5v8m0 0L3.8 6.3M7 9.5l3.2-3.2M2 12.5h10" />
              </svg>
            </a>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="min-w-0 basis-[150px] flex-[1_1_150px]">
              <p className="m-0 mb-3.5 font-mono text-xs uppercase text-[#9CA3AF]">{col.title}</p>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link to={link.to} className={linkClass}>
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className={`${linkClass} ${link.icon ? 'inline-flex items-center gap-2.5' : ''}`}
                      >
                        {link.icon && (
                          <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#374151] bg-[#1F2937]">
                            <img src={link.icon} alt="" width={16} height={16} loading="lazy" className={`h-4 w-4 object-contain ${link.whiteIcon ? 'brightness-0 invert' : ''}`} />
                          </span>
                        )}
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-[#374151] py-[22px] text-sm text-[#9CA3AF]">
          <span>&copy; {new Date().getFullYear()} Anastasiia Voskova</span>
          <span>Granada, Spain &middot; working remotely</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`bg-transparent p-0 text-inherit hover:text-white cursor-pointer rounded-sm ${focusRing}`}
          >
            Back to top &uarr;
          </button>
        </div>

        <p
          aria-hidden="true"
          className="m-0 -mb-[0.18em] select-none whitespace-nowrap text-center font-bold leading-[0.9] tracking-[-0.065em] text-[#F3F4F6] text-[clamp(22px,7.6vw,106px)]"
        >
          anastasiiavoskova<span className="text-[#288FD6]">.</span>com
        </p>
      </div>
    </footer>
  );
}
