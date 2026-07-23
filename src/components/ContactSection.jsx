import contactProjects from '../assets/contact-projects.png';
import contactPhone from '../assets/contact-phone.png';

const EMAIL = 'anastazjav22@gmail.com';

const skillRows = [
  [
    { label: 'UX', rotate: '-rotate-6', offset: '-ml-10' },
    { label: 'UX/UI Design', rotate: 'rotate-2' },
    { label: 'Framer', rotate: '-rotate-3' },
    { label: 'Design Handoff', rotate: 'rotate-6', offset: '-mr-10' },
  ],
  [
    { label: 'Design Thinking', rotate: '-rotate-2', offset: '-ml-8' },
    { label: 'Design Tokens', rotate: 'rotate-3' },
    { label: 'Design Systems', rotate: '-rotate-6', offset: '-mr-12' },
  ],
  [
    { label: 'Figma', rotate: 'rotate-6', offset: '-ml-8' },
    { label: 'Mobile Design', rotate: '-rotate-2' },
    { label: 'Product Thinking', rotate: 'rotate-2' },
  ],
];

const socials = [
  {
    label: 'Behance',
    href: 'https://www.behance.net/anastasiiavoskova',
    bg: 'bg-[#0057ff]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M8.84 6.55c.87 0 1.66.08 2.37.23.71.15 1.31.4 1.82.74.5.34.89.8 1.17 1.37.27.57.41 1.27.41 2.11 0 .9-.2 1.66-.62 2.26-.41.6-1.02 1.1-1.83 1.48 1.11.32 1.93.88 2.48 1.68.55.8.82 1.77.82 2.9 0 .91-.18 1.7-.53 2.36a4.6 4.6 0 0 1-1.42 1.63c-.6.42-1.28.73-2.05.93-.77.2-1.56.3-2.37.3H0V6.55h8.84zm-.53 6.7c.72 0 1.31-.17 1.77-.51.46-.34.69-.9.69-1.67 0-.43-.08-.78-.23-1.05a1.7 1.7 0 0 0-.62-.64 2.6 2.6 0 0 0-.89-.32 5.8 5.8 0 0 0-1.05-.09H4.1v4.28h4.21zm.24 7.03c.4 0 .78-.04 1.13-.12.36-.08.68-.21.95-.4.27-.19.49-.44.65-.76.16-.32.24-.73.24-1.23 0-.98-.28-1.68-.83-2.1-.55-.42-1.28-.63-2.19-.63H4.1v5.24h4.45zM17.98 8.6h5.86v1.68h-5.86V8.6zM24 17.13c0 .1 0 .2-.01.31h-8.35c0 .95.32 1.85.85 2.34.53.48 1.29.73 2.28.73.71 0 1.32-.18 1.83-.53.51-.36.82-.73.94-1.13h3.28c-.53 1.63-1.33 2.8-2.42 3.5-1.08.7-2.4 1.05-3.94 1.05a7.7 7.7 0 0 1-2.89-.52 6 6 0 0 1-2.18-1.47 6.6 6.6 0 0 1-1.38-2.28 8.4 8.4 0 0 1-.48-2.92c0-1.03.17-1.98.5-2.87a6.7 6.7 0 0 1 1.42-2.3 6.5 6.5 0 0 1 2.18-1.52 7 7 0 0 1 2.83-.56c1.14 0 2.13.22 2.98.66a5.9 5.9 0 0 1 2.09 1.77c.55.74.94 1.58 1.18 2.53.17.66.25 1.4.29 2.21zm-3.73-2.02a3.06 3.06 0 0 0-.97-1.98c-.5-.43-1.14-.65-1.9-.65-.5 0-.92.09-1.26.25a2.7 2.7 0 0 0-.84.64 2.5 2.5 0 0 0-.48.81c-.11.29-.17.6-.19.93h5.64z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/anastazjav22',
    bg: 'bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fd5949_45%,#d6249f_60%,#285aeb_90%)]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/anastasiia-voskova',
    bg: 'bg-[#0a66c2]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
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

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* My Projects */}
          <div className="bg-[#f6f6f5] border border-[#ececec] rounded-[24px] p-7 overflow-hidden flex flex-col">
            <h3 className="font-grotesk font-bold text-lg text-black mb-4">My Projects</h3>
            <img
              src={contactProjects}
              alt="Laptop showing the Farsafe dashboard project"
              className="w-full flex-1 object-contain translate-x-4 translate-y-2 scale-110"
            />
          </div>

          {/* Resume */}
          <div className="bg-[#f6f6f5] border border-[#ececec] rounded-[24px] p-7">
            <h3 className="font-grotesk font-bold text-lg text-black mb-6">Checkout my Resume</h3>
            <a href="#resume" className="block group">
              <div className="bg-[#f0f0ee] rounded-[8px] px-6 py-8 flex justify-center">
                <div className="bg-[#fdf6d8] shadow-md px-10 py-7 rotate-[-4deg] group-hover:rotate-0 transition-transform">
                  <svg viewBox="0 0 40 8" className="w-10 h-2 mb-3 text-[#e8b931]">
                    <path
                      d="M1 5 Q4 1 7 5 T13 5 T19 5 T25 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <p className="font-grotesk font-bold text-xl text-black">My Resume</p>
                  <div className="h-1 bg-[#e8b931] mt-3 w-24" />
                </div>
              </div>
            </a>
          </div>

          {/* Phone mockup */}
          <div className="rounded-[24px] overflow-hidden md:row-span-2 min-h-[320px]">
            <img
              src={contactPhone}
              alt="Phone showing a crypto wallet app design"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Skills */}
          <div className="bg-[#6d3fc4] rounded-[24px] p-7 overflow-hidden">
            <h3 className="font-grotesk font-bold text-lg text-white mb-6">Skills</h3>
            <div className="flex flex-col gap-5 items-center">
              {skillRows.map((row, i) => (
                <div key={i} className="flex gap-4 justify-center">
                  {row.map((skill) => (
                    <span
                      key={skill.label}
                      className={`px-5 py-2.5 bg-[#4c2c8a] rounded-full font-grotesk font-medium text-sm text-white whitespace-nowrap ${skill.rotate} ${skill.offset ?? ''}`}
                    >
                      {skill.label}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Email card */}
          <div className="bg-[#f6f6f5] border border-[#ececec] rounded-[24px] p-7 flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="font-grotesk font-bold text-xl text-black">Anastasiia Voskova</h3>
                <p className="font-grotesk text-sm text-[#6b6a67] mt-1">{EMAIL}</p>
              </div>
              <div className="bg-white rounded-[12px] w-12 h-12 flex items-center justify-center shadow-sm shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
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
                <span className="text-[#6b6a67]">To</span>&nbsp;&nbsp;
                <span className="font-medium">{EMAIL}</span>
              </p>
              <p className="font-grotesk font-medium text-sm text-black mb-3">Let's Chat</p>
              <p className="font-grotesk text-sm text-[#b3b2af]">Say Hello</p>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="block text-center bg-[#288fd6] rounded-full py-4 mt-auto font-grotesk font-bold text-base text-white hover:bg-[#1f7bbd] transition-colors"
            >
              Email Me
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-12 flex flex-col items-center gap-5">
          <p className="font-mono-bold text-base text-black">My Social</p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="bg-white border border-[#ececec] shadow-sm w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span
                  className={`${social.bg} w-9 h-9 rounded-full flex items-center justify-center`}
                >
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        <p className="text-center font-grotesk text-sm text-[#6b6a67] mt-10">
          Based in Granada, Spain 🇪🇸 · Open to new opportunities and exciting design challenges.
        </p>
      </div>
    </section>
  );
}
