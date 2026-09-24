import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoAv from '../assets/logo-av.svg';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to content
      </a>
      <nav className="sticky top-0 z-50 flex items-center justify-center py-4 px-4">
      <div className="bg-[rgba(240,240,240,0.2)] backdrop-blur-md border border-white/30 rounded-[64px] px-5 py-2.5 flex items-center justify-between gap-6 w-full max-w-6xl">
        {/* Logo & Name */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 pl-1">
          <img
            src={logoAv}
            alt="AV logo"
            width={37}
            height={30}
            className="w-[37px] h-[30px]"
          />
          <span className="font-mono-bold font-bold text-xl whitespace-nowrap text-black hidden sm:inline">
            ANASTASIIA VOSKOVA
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-[25px] font-grotesk">
          <Link
            to="/about"
            className="text-base font-medium text-[#393939] hover:text-black transition-colors"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="text-base font-medium text-[#393939] hover:text-black transition-colors"
          >
            Work
          </Link>

          {/* Resume Button */}
          <a
            href="/Anastasiia-Voskova-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Anastasiia-Voskova-Resume.pdf"
            className="bg-[#288fd6] hover:bg-[#1f7ab8] text-white font-medium px-5 py-2.5 rounded-[54px] text-base transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 ml-auto"
        >
          <svg
            className="w-5 h-5 text-gray-700"
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
          className="absolute top-full left-0 right-0 mt-2 mx-4 bg-[rgba(240,240,240,0.6)] backdrop-blur-md border border-white/30 rounded-2xl p-4 flex flex-col gap-2 md:hidden font-grotesk"
        >
          <Link
            to="/about"
            className="block px-4 py-2 text-[#393939] hover:text-black rounded-lg transition-colors text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="block px-4 py-2 text-[#393939] hover:text-black rounded-lg transition-colors text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>
          <a
            href="/Anastasiia-Voskova-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Anastasiia-Voskova-Resume.pdf"
            className="block px-4 py-2 bg-[#288fd6] hover:bg-[#1f7ab8] text-white rounded-lg transition-colors text-base font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
      </nav>
    </header>
  );
}
