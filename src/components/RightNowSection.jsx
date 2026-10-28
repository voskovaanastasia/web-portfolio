import bookCover from '../assets/rn-book.webp';
import himym from '../assets/rn-himym.webp';
import office from '../assets/rn-office.webp';
import whiteLotus from '../assets/rn-white-lotus.webp';
import bear from '../assets/rn-bear.webp';
import transportFever from '../assets/rn-transport-fever.webp';
import stardew from '../assets/rn-stardew.webp';
import wurdweb from '../assets/rn-wurdweb.webp';
import goodness from '../assets/rn-goodness.webp';

const SPOTIFY_EMBED =
  'https://open.spotify.com/embed/playlist/2BbSzdORgd3p1p9VyMzNDi?utm_source=generator&theme=0&si=69ff000613f34aea';

const shows = [
  { title: 'How I Met Your Mother', image: himym, tag: 'Sitcom', years: '2005–2014', note: 'legen—dary', tilt: '-rotate-2' },
  { title: 'The Office', image: office, tag: 'Mockumentary', years: '2005–2013', note: 'on loop', tilt: 'rotate-[1.5deg]' },
  { title: 'The White Lotus', image: whiteLotus, tag: 'Satirical drama', years: '2021–', note: 'plot twists!', tilt: '-rotate-1' },
  { title: 'The Bear', image: bear, tag: 'Comedy-drama', years: '2022–', note: 'yes, chef!', tilt: 'rotate-2' },
];

const games = [
  { title: 'Transport Fever 2', image: transportFever, tag: 'Tycoon · Simulation', note: 'one more train line…', tilt: '-rotate-2' },
  { title: 'Stardew Valley', image: stardew, tag: 'Farming · Life sim', note: 'just one more day', tilt: 'rotate-[1.5deg]' },
  { title: 'wurdweb', image: wurdweb, tag: 'Word puzzle', note: 'crosswords, but cosy', tilt: '-rotate-1' },
  { title: 'Thank Goodness You’re Here!', image: goodness, tag: 'Slapstick comedy', note: 'pure chaos', tilt: 'rotate-2' },
];

const cardShell = 'rounded-card border border-border-subtle bg-surface-subtle p-7 flex flex-col gap-6';
const mediaCard =
  'bg-surface-default rounded-panel p-2.5 shadow-icon flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 motion-reduce:transition-none';

function MediaCard({ title, image, tag, years, note, tilt, ratio }) {
  return (
    <li className={`${mediaCard} ${tilt}`}>
      <div className={`relative ${ratio} rounded-control overflow-hidden bg-track`}>
        <img src={image} alt={`${title} cover`} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <span className="px-1.5 font-grotesk font-medium text-body-lg text-text-primary">{title}</span>
      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5 px-1.5 pb-1 -mt-2">
        <span className="font-mono text-caption text-text-secondary">{years ? `${tag} · ${years}` : tag}</span>
        <span className="font-grotesk font-bold text-caption text-accent-handwritten">{note}</span>
      </div>
    </li>
  );
}

export default function RightNowSection() {
  return (
    <section id="right-now" className="relative overflow-hidden py-12 sm:py-24 bg-surface-default">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-2.5 mb-10">
          <p className="font-mono-bold text-caption uppercase tracking-wider text-text-secondary">Right now</p>
          <h2 className="font-grotesk font-medium text-heading text-text-primary tracking-tight">
            On repeat, on screen, on my nightstand
          </h2>
        </div>

        <div className="flex flex-wrap gap-5">
          {/* Playlist */}
          <div className="flex-[2_1_560px] min-w-0 rounded-card bg-accent-handwritten p-7 flex flex-col gap-4 overflow-hidden">
            <div className="w-full min-w-0 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-grotesk font-bold text-title-sm text-text-inverse">Now playing</h3>
                <span aria-hidden="true" className="inline-flex items-end gap-[3px] h-4">
                  {['0s', '0.2s', '0.4s', '0.1s'].map((delay) => (
                    <span key={delay} className="rn-eq-bar w-[3px] h-4 rounded-sm bg-data-1" style={{ animationDelay: delay }} />
                  ))}
                </span>
              </div>
              <iframe
                title="Job Playlist by Anastasiia on Spotify"
                src={SPOTIFY_EMBED}
                width="100%"
                height="352"
                className="rounded-panel border-0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Last read */}
          <div className={`flex-[1_1_300px] min-w-0 ${cardShell} gap-5`}>
            <h3 className="font-grotesk font-bold text-title-sm text-text-primary">Last read</h3>
            <div className="flex justify-center py-2">
              <img
                src={bookCover}
                alt="The Curious Incident of the Dog in the Night-Time cover"
                width={140}
                height={224}
                loading="lazy"
                decoding="async"
                className="w-[140px] h-[224px] object-cover -rotate-[4deg] rounded-[4px_10px_10px_4px] shadow-[4px_16px_24px_rgba(34,41,47,0.18)] transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 motion-reduce:transition-none"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between gap-3">
                <span className="font-grotesk font-medium text-body-lg text-text-primary">
                  The Curious Incident of the Dog in the Night-Time — Mark Haddon
                </span>
                <span className="font-mono text-caption text-text-secondary whitespace-nowrap">Finished</span>
              </div>
              <div className="h-1.5 rounded-pill bg-border-subtle overflow-hidden">
                <div className="w-full h-full rounded-pill bg-action-primary" />
              </div>
              <span className="font-mono text-caption text-text-secondary">Mystery · Novel</span>
            </div>
          </div>

          {/* On screen */}
          <div className={`flex-[1_1_100%] min-w-0 ${cardShell}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-grotesk font-bold text-title-sm text-text-primary">On screen</h3>
              <span className="font-grotesk font-bold text-title-sm text-text-brand">comfort rewatches &amp; guilty pleasures</span>
            </div>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 p-1">
              {shows.map((s) => (
                <MediaCard key={s.title} {...s} ratio="aspect-[16/10]" />
              ))}
            </ul>
          </div>

          {/* Playing */}
          <div className={`flex-[1_1_100%] min-w-0 ${cardShell}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-grotesk font-bold text-title-sm text-text-primary">Playing</h3>
              <span className="font-grotesk font-bold text-title-sm text-text-brand">save files I keep coming back to</span>
            </div>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 p-1">
              {games.map((g) => (
                <MediaCard key={g.title} {...g} ratio="aspect-video" />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
