export default function ContactSection() {
  const contactLinks = [
    {
      label: 'Email',
      value: 'anastazjav22@gmail.com',
      href: 'mailto:anastazjav22@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/anastasiia-voskova',
      href: 'https://linkedin.com/in/anastasiia-voskova',
    },
    {
      label: 'Telegram',
      value: '+380 93 75 43 734',
      href: 'https://t.me/anastazjav22',
    },
    {
      label: 'WhatsApp',
      value: '+34 600 07 81 71',
      href: 'https://wa.me/34600078171',
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-gray-600 mb-4 tracking-wider">GET IN TOUCH</p>
          <h2 className="text-5xl font-bold mb-6 text-blue-600">Let's Work Together</h2>
          <p className="text-xl text-gray-800">
            Open to new opportunities and exciting design challenges. Let's create something great.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all group"
            >
              <p className="text-sm font-mono text-gray-600 mb-3 tracking-wider">{link.label}</p>
              <p className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-700 font-semibold mb-8 text-lg">
            Based in Granada, Spain 🇪🇸
          </p>
          <a
            href="mailto:anastazjav22@gmail.com"
            className="inline-block rounded-full bg-blue-600 px-12 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-700 transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
