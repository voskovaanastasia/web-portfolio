import caseFarsafe from '../assets/case-farsafe.png';
import caseFintech from '../assets/case-fintech.png';

const EMAIL = 'anastazjav22@gmail.com';

const skills = [
  { label: 'UX/UI Design', rotate: '-rotate-3' },
  { label: 'Figma', rotate: 'rotate-2' },
  { label: 'User Research', rotate: '-rotate-2' },
  { label: 'Design Systems', rotate: 'rotate-1' },
  { label: 'Prototyping', rotate: '-rotate-1' },
  { label: 'Visual Design', rotate: 'rotate-3' },
  { label: 'Webflow', rotate: '-rotate-2' },
  { label: 'AI Tools', rotate: 'rotate-2' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/anastasiia-voskova',
    bg: 'bg-[#0a66c2]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/anastazjav22',
    bg: 'bg-[#229ed9]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M21.95 4.27 18.7 19.61c-.24 1.08-.88 1.35-1.79.84l-4.95-3.65-2.39 2.3c-.26.26-.49.49-1 .49l.36-5.05 9.18-8.3c.4-.35-.09-.55-.62-.2L6.14 13.2 1.25 11.67c-1.06-.33-1.08-1.06.22-1.57L20.58 2.7c.88-.33 1.65.2 1.37 1.57z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/34600078171',
    bg: 'bg-[#25d366]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.16L2.05 22l4.98-1.55A9.9 9.9 0 1 0 12.04 2zm5.77 14.06c-.24.68-1.4 1.3-1.93 1.35-.52.05-1.01.24-3.4-.71-2.87-1.13-4.68-4.06-4.82-4.25-.14-.19-1.15-1.53-1.15-2.92s.73-2.07.99-2.35c.26-.28.56-.35.75-.35h.54c.17 0 .41-.06.64.49.24.57.8 1.96.87 2.1.07.14.12.31.02.5-.09.19-.14.3-.28.47l-.42.5c-.14.14-.29.29-.13.57.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.29 1.41.28.14.45.12.61-.07.17-.19.7-.82.89-1.1.19-.28.38-.24.64-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.37z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: `mailto:${EMAIL}`,
    bg: 'bg-[#ea4335]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 bg-white">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-2.5 mb-10">
          <p className="font-mono-bold text-base text-black">Get in Touch</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            Let's Work Together
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {/* Selected work preview */}
          <div className="bg-[#f6f6f5] border border-[#ececec] rounded-[24px] p-7 overflow-hidden">
            <h3 className="font-grotesk font-bold text-lg text-black mb-6">Selected Work</h3>
            <img
              src={caseFarsafe}
              alt="Farsafe case study preview"
              className="rounded-[16px] rotate-[-3deg] translate-y-2 shadow-lg w-full object-cover"
            />
          </div>

          {/* Skills */}
          <div className="bg-[#f6f6f5] border border-[#ececec] rounded-[24px] p-7">
            <h3 className="font-grotesk font-bold text-lg text-black mb-6">Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              {skills.map((skill) => (
                <span
                  key={skill.label}
                  className={`px-4 py-2 bg-white rounded-full shadow-sm font-grotesk font-medium text-sm text-black ${skill.rotate}`}
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Second work preview */}
          <div className="bg-[#f6f6f5] border border-[#ececec] rounded-[24px] p-7 overflow-hidden md:row-span-2">
            <img
              src={caseFintech}
              alt="Fintech app preview"
              className="rounded-[16px] rotate-[6deg] translate-x-4 translate-y-6 shadow-xl w-full h-full object-cover"
            />
          </div>

          {/* Email card */}
          <div className="bg-[#f6f6f5] border border-[#ececec] rounded-[24px] p-7 md:row-span-2">
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="font-grotesk font-bold text-xl text-black">Anastasiia Voskova</h3>
                <p className="font-grotesk text-sm text-[#6b6a67] mt-1">{EMAIL}</p>
              </div>
              <div className="bg-white rounded-[12px] w-12 h-12 flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="#ea4335" d="M5 5h3v6.5L12 9l4 2.5V5h3" opacity="0" />
                  <path fill="#4285f4" d="M20 18h1.5A1.5 1.5 0 0 0 23 16.5v-9l-3 2.25V18z" />
                  <path fill="#34a853" d="M1 7.5v9A1.5 1.5 0 0 0 2.5 18H4V9.75L1 7.5z" />
                  <path fill="#ea4335" d="M4 18h16V9.75L12 15.5 4 9.75V18z" opacity=".9" />
                  <path fill="#fbbc04" d="M1 7.5 4 9.75V6L2.65 5.1A1.5 1.5 0 0 0 1 6.6v.9z" />
                  <path fill="#c5221f" d="M23 7.5V6.6a1.5 1.5 0 0 0-1.65-1.5L20 6v3.75l3-2.25z" />
                  <path fill="#ea4335" d="M4 6v3.75l8 5.75 8-5.75V6l-8 5.75L4 6z" />
                </svg>
              </div>
            </div>

            <div className="bg-white rounded-[16px] p-5 mb-5 shadow-sm">
              <p className="font-grotesk text-sm text-black border-b border-[#ececec] pb-3 mb-3">
                <span className="text-[#6b6a67]">To</span>&nbsp;&nbsp;{EMAIL}
              </p>
              <p className="font-grotesk font-medium text-sm text-black mb-3">Let's Chat</p>
              <p className="font-grotesk text-sm text-[#b3b2af]">Say hello</p>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="block text-center bg-white border border-[#ececec] rounded-[12px] py-3.5 font-grotesk font-bold text-base text-black hover:border-[#288fd6] hover:text-[#288fd6] transition-colors"
            >
              Email Me
            </a>
          </div>

          {/* Resume */}
          <div className="bg-[#f6f6f5] border border-[#ececec] rounded-[24px] p-7">
            <h3 className="font-grotesk font-bold text-lg text-black mb-6">Checkout my resume</h3>
            <a href="#resume" className="inline-block group">
              <div className="bg-[#fdf6d8] shadow-md px-8 py-6 rotate-[-2deg] group-hover:rotate-0 transition-transform">
                <svg viewBox="0 0 40 8" className="w-10 h-2 mb-2 text-[#e8b931]">
                  <path
                    d="M1 5 Q4 1 7 5 T13 5 T19 5 T25 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                <p className="font-grotesk font-bold text-base text-black">My Resume</p>
                <div className="h-1 bg-[#e8b931] mt-3 w-16" />
              </div>
            </a>
          </div>

          {/* Socials */}
          <div className="bg-[#f6f6f5] border border-[#ececec] rounded-[24px] p-7 md:col-span-3">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className={`${social.bg} text-white w-16 h-16 rounded-[16px] flex items-center justify-center shadow-md hover:scale-110 transition-transform`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center font-grotesk text-sm text-[#6b6a67] mt-10">
          Based in Granada, Spain 🇪🇸 · Open to new opportunities and exciting design challenges.
        </p>
      </div>
    </section>
  );
}
