import bali from '../assets/photo-bali.webp';
import kualaLumpur from '../assets/photo-kuala-lumpur.webp';
import london from '../assets/photo-london.webp';
import klTower from '../assets/photo-kl-tower.webp';
import steps from '../assets/photo-steps.webp';
import deer from '../assets/photo-deer.webp';
import sagrada from '../assets/photo-sagrada.webp';

// `span` sets the tile's size in the 4-column grid on wide screens; `position` is the image's focal point.
const photos = [
  { src: bali, alt: 'Anastasiia overlooking rice terraces in Bali', span: 'col-span-2 row-span-2', position: '50% 50%' },
  { src: kualaLumpur, alt: 'Kuala Lumpur skyline with Menara KL and the Petronas Towers', span: '', position: '70% 50%' },
  { src: london, alt: 'City of London street with the Gherkin between skyscrapers', span: 'row-span-2', position: '50% 45%' },
  { src: klTower, alt: 'KL Tower seen through tree branches, Kuala Lumpur', span: '', position: '70% 38%' },
  { src: steps, alt: 'Front steps decorated with greenery and red ribbons', span: '', position: '55% 45%' },
  { src: deer, alt: 'Fallow deer grazing in a park', span: 'col-span-2', position: '50% 60%' },
  { src: sagrada, alt: 'Sagrada Família towers framed by trees, Barcelona', span: '', position: '55% 50%' },
];

export default function PhotographySection() {
  return (
    <section id="photography" className="relative overflow-hidden py-12 sm:py-24 bg-surface-default">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-2.5 mb-10">
          <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">Through my lens</p>
          <h2 className="font-grotesk font-medium text-heading text-text-primary tracking-tight">Photography</h2>
        </div>

        {/* Preview-style window */}
        <div className="overflow-hidden rounded-[14px] border border-border-subtle bg-surface-default shadow-[0_30px_70px_rgba(17,24,39,0.10)]">
          <div className="relative flex items-center min-h-11 px-3.5 bg-surface-subtle border-b border-border-subtle">
            <span aria-hidden="true" className="flex gap-[7px]">
              <span className="w-3 h-3 rounded-pill bg-[var(--color-traffic-red)]" />
              <span className="w-3 h-3 rounded-pill bg-[var(--color-traffic-yellow)]" />
              <span className="w-3 h-3 rounded-pill bg-[var(--color-traffic-green)]" />
            </span>
            <p className="absolute inset-x-16 text-center truncate font-grotesk font-medium text-body text-text-primary">
              Photos — Through my lens · {photos.length} items
            </p>
          </div>
          <div className="p-4">
            <ul className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] grid-flow-dense gap-3 sm:gap-5">
              {photos.map(({ src, alt, span, position }) => (
                <li key={src} className={`relative rounded-[10px] overflow-hidden bg-surface-subtle border border-border-subtle ${span}`}>
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: position }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
