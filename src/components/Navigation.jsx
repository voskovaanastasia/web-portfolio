import { Link, useLocation } from 'react-router-dom';
import { useRef, useState } from 'react';
import useHeaderTheme from '../hooks/useHeaderTheme';
import logoAv from '../assets/logo-av.svg';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const { pathname } = useLocation();
  useHeaderTheme(headerRef, pathname);

  return (
    <header ref={headerRef} className="site-header sticky top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-surface-default focus:text-text-primary focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to content
      </a>
      <nav className="flex items-center justify-center py-4 px-4">
      <div className="header-glass backdrop-blur-md border border-white/30 rounded-[64px] px-5 py-2.5 flex items-center justify-between gap-6 w-full max-w-6xl">
        {/* Logo & Name */}
        <Link to="/" data-header-zone="left" className="flex items-center gap-2.5 flex-shrink-0 pl-1">
          <img
            src={logoAv}
            alt="AV logo"
            width={37}
            height={30}
            className="w-[37px] h-[30px]"
          />
          <span className="font-mono-bold font-bold text-xl whitespace-nowrap header-ink-left hidden sm:inline">
            ANASTASIIA VOSKOVA
          </span>
        </Link>

        {/* Desktop Menu */}
        <div data-header-zone="right" className="hidden md:flex items-center gap-[25px] font-grotesk">
          <Link
            to="/about"
            className="text-base font-medium header-ink-right"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="text-base font-medium header-ink-right"
          >
            Portfolio
          </Link>

          {/* Resume Button */}
          <a
            href="/Anastasiia-Voskova-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Anastasiia-Voskova-Resume.pdf"
            className="bg-action-primary hover:bg-action-primary-hover text-text-inverse font-medium px-5 py-2.5 rounded-[54px] text-base transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          data-header-zone="right"
          className="md:hidden p-2 ml-auto header-ink-right"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 mt-2 mx-4 bg-glass-panel backdrop-blur-md border border-white/30 rounded-panel p-4 flex flex-col gap-2 md:hidden font-grotesk"
        >
          <Link
            to="/about"
            className="block px-4 py-2 text-text-primary hover:text-text-primary rounded-lg transition-colors text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="block px-4 py-2 text-text-primary hover:text-text-primary rounded-lg transition-colors text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <a
            href="/Anastasiia-Voskova-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Anastasiia-Voskova-Resume.pdf"
            className="block px-4 py-2 bg-action-primary hover:bg-action-primary-hover text-text-inverse rounded-lg transition-colors text-base font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
      </nav>
    </header>
  );
}
