import vitaliiAvatar from '../assets/rec-vitalii.webp';

const recommendations = [
  {
    quote:
      'Anastasia was part of my team for over a year, and during that time she consistently demonstrated the ability to solve non-standard challenges with creativity while staying aligned with project requirements. She led UX/UI design across multiple projects, delivering high-quality work on time and with great attention to detail. Anastasia is highly proficient with modern design tools including Figma and Adobe Suite, and collaborates effectively with both developers and stakeholders. She would be a valuable asset to any team.',
    name: 'Vitalii Chetak',
    role: 'CMO & CBDO',
    avatar: vitaliiAvatar,
  },
];

export default function RecommendationsSection() {
  return (
    <section id="recommendations" className="relative overflow-hidden bg-white py-12 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2.5">
          <p className="font-mono-bold text-[14px] text-black">Recommendations</p>
          <h2 className="font-grotesk font-medium text-[26px] sm:text-4xl text-black tracking-tight">
            What colleagues say
          </h2>
        </div>

        <div className="grid gap-5">
          {recommendations.map((rec) => (
            <figure
              key={rec.name}
              className="rounded-[15px] bg-[#f7f7f7] p-5 sm:p-8 flex flex-col justify-between gap-6"
            >
              <blockquote className="font-grotesk text-[16px] sm:text-lg text-black leading-relaxed">
                &ldquo;{rec.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <img
                  src={rec.avatar}
                  alt={rec.name}
                  width="48"
                  height="48"
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-grotesk font-bold text-[15px] text-black">{rec.name}</span>
                  <span className="font-grotesk text-sm text-[#4a4a48]">{rec.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
