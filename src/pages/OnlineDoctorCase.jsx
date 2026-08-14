import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionMenu from '../components/SectionMenu';
import { ProblemSolution, StyleGuide } from '../components/CaseLayout';
import toolFigma from '../assets/icon-figma.svg';
import toolJira from '../assets/icon-jira.svg';
import toolNotion from '../assets/icon-notion.svg';

const caseSections = [
  { id: 'case-hero', label: 'Back to Top' },
  { id: 'intro', label: 'Project Intro' },
  { id: 'problem', label: 'Problem & Solution' },
  { id: 'style', label: 'Colors & Typography' },
  { id: 'screens', label: 'App Screens' },
];

const styleGuide = {
  heading: 'A calm, clinical palette built on one trusted blue',
  body: (
    <>
      Ukraine Blue carries the brand and every primary action, softened by Seashell Blue for
      surfaces so a compliance-heavy product still reads as calm.{' '}
      <strong>Vermillion and Orange are reserved strictly for alerts and pending states</strong>{' '}
      &mdash; scarce by design, so urgency is never ambiguous. Roboto keeps dense medical and
      billing information legible at small sizes across web and mobile.
    </>
  ),
  colors: [
    { name: 'Ukraine Blue', hex: '#2455C4', text: '#ffffff' },
    { name: 'Seashell Blue', hex: '#DDE4F8', text: '#22292f' },
    { name: 'White', hex: '#F8F9FA', text: '#22292f' },
    { name: 'Vermillion', hex: '#CD4847', text: '#ffffff' },
    { name: 'Orange', hex: '#EC8F38', text: '#22292f' },
  ],
  // Tint ramp built from Ukraine Blue — surfaces, states, and chart fills.
  scale: [
    '#12275C',
    '#1C3A7F',
    '#2450B5',
    '#2E62CD',
    '#4A79D6',
    '#7396E0',
    '#93AFE8',
    '#B5C8F0',
    '#D7E1F8',
  ],
  typeface: {
    name: 'Roboto',
    hex: '#2455C4',
    weights: ['Regular', 'Medium', 'Semi Bold', 'Bold', 'Extra Bold'],
  },
  image: 'case-onlinedoctor-style.png',
};

const appScreens = [
  {
    title: 'Home',
    image: 'case-onlinedoctor-home.png',
    blocks: [
      {
        heading: 'My Appointments',
        text: (
          <>
            <strong>Quick snapshot of what&rsquo;s coming next, with clear visual anchors</strong>{' '}
            (doctor photo + time chip) for instant orientation. Inline actions surface what
            matters before a visit&mdash;start a chat or open more options to manage the
            booking&mdash;without drilling into a detail screen.{' '}
            <strong>Horizontal cards make it easy to skim multiple bookings</strong>
          </>
        ),
      },
      {
        heading: 'My Insurance',
        text: (
          <>
            Surfaces the user&rsquo;s active plan in a dedicated card so coverage{' '}
            <strong>is easy to confirm during booking.</strong> A lightweight
            &ldquo;Details&rdquo; action keeps deeper info one tap away without cluttering the
            feed.
          </>
        ),
      },
      {
        heading: 'Doctors',
        text: (
          <>
            <strong>Category chips</strong> let the user narrow the list with a single tap, while
            each card <strong>highlights photo, credentials,</strong> and{' '}
            <strong>hospital for fast credibility checks.</strong>
          </>
        ),
      },
    ],
  },
  {
    title: 'Profile',
    image: 'case-onlinedoctor-profile.png',
    blocks: [
      {
        heading: 'Member card',
        text: (
          <>
            A clear profile card shows who the user is and how close the setup is to 100%.
            Finishing the bar unlocks faster check-ins,{' '}
            <strong>
              one-tap bookings, and fewer form repeats for the user. Strong identification also
              speeds support and prescription approvals for the user.
            </strong>
          </>
        ),
      },
      {
        heading: 'E-Prescription',
        text: (
          <>
            <strong>The user requests, receives, and refills prescriptions without clinic lines.</strong>{' '}
            Doctors send digital scripts instantly, and the user forwards them to a preferred
            pharmacy in one tap. Reminders prevent missed doses and refill gaps for the user.
          </>
        ),
      },
      {
        heading: 'Payment',
        text: (
          <>
            <strong>Saved cards and wallets let the user pay deductibles or visit fees in seconds.</strong>{' '}
            Receipts land in one place for reimbursement and taxes. Fewer failed payments and
            faster checkout for the user.
          </>
        ),
      },
      {
        heading: 'Support',
        text: (
          <>
            <strong>Live help, FAQs, and issue tracking are one tap away so the user resolves problems quickly.</strong>{' '}
            Agents see context from the profile, shortening back-and-forth.
          </>
        ),
      },
    ],
  },
  {
    title: 'Doctors',
    image: 'case-onlinedoctor-doctors.png',
    blocks: [
      {
        heading: 'Hospital selector + Filters',
        text: (
          <>
            Picking a facility focuses{' '}
            <strong>results on doctors who practice where the user wants to visit.</strong>{' '}
            Filters narrow by specialty, price, rating, or experience so the user sees only strong
            fits
          </>
        ),
      },
      {
        heading: 'Trust-rich doctor cards',
        text: (
          <>
            <strong>
              Each card shows degrees, specialty, and hospital so the user knows exactly who
              they&rsquo;re booking.
            </strong>{' '}
            Real ratings and review counts add social proof the user can rely on. A clear headshot
            builds recognition for in-clinic visits.
          </>
        ),
      },
      {
        heading: 'Transparent pricing',
        text: (
          <>
            <strong>Upfront visit fees</strong> (e.g., $45, $50){' '}
            <strong>remove surprises before the user taps book.</strong> Clear costs make
            budgeting easy and reduce checkout drop-off.
          </>
        ),
      },
      {
        heading: 'Book Online or Book Offline',
        text: (
          <>
            <strong>
              Two buttons match how the user wants to be seen&mdash;instant tele-visit or an
              in-person slot.
            </strong>{' '}
            Both flows are streamlined, with confirmations and reminders included. Flexibility
            means the user never postpones care.
          </>
        ),
      },
    ],
  },
  {
    title: 'Online Appointment',
    image: 'case-onlinedoctor-appointment.png',
    blocks: [
      {
        heading: 'Doctor snapshot with proven trust',
        text: (
          <>
            <strong>
              The card shows specialty, hospital, rating, and experience so the user books with
              confidence.
            </strong>{' '}
            A clear photo and upfront fee remove guesswork for the user. Social proof (stars +
            reviews) helps the user choose quality fast.
          </>
        ),
      },
      {
        heading: 'Real-time calendar',
        text: (
          <>
            <strong>The calendar displays only dates with availability,</strong> so the user
            doesn&rsquo;t tap dead ends. Quick arrows jump months, finding the soonest workable
            day for the user.{' '}
            <strong>Time zone is handled automatically to keep the user on schedule.</strong>
          </>
        ),
      },
      {
        heading: 'Live time slots by part of day',
        text: (
          <>
            <strong>
              Morning/afternoon groups and chip-style times make selection effortless for the user.
            </strong>{' '}
            Disabled slots signal what&rsquo;s taken; green badges show how many are left, guiding
            the user to faster picks. A brief hold prevents double-booking while the user
            confirms.
          </>
        ),
      },
    ],
  },
  {
    title: 'Video Call',
    image: 'case-onlinedoctor-videocall.png',
    blocks: [
      {
        heading: 'Doctor card',
        text: (
          <>
            The header shows the <strong>doctor&rsquo;s name</strong> and a{' '}
            <strong>live call timer</strong> so the user knows exactly who is consulting and for
            how long. This builds trust and keeps billing transparent for the user.{' '}
            <strong>One tap opens messaging for quick links or notes mid-call.</strong>
          </>
        ),
      },
      {
        heading: 'HD video with picture-in-picture',
        text: (
          <>
            Crystal-clear video lets the doctor examine symptoms while the user stays hands-free.{' '}
            <strong>Picture-in-picture keeps the user visible</strong> so the doctor can check
            breathing, rash size, or movement.{' '}
            <strong>Better visuals mean faster, more accurate advice for the user.</strong>
          </>
        ),
      },
      {
        heading: 'One-tap controls',
        text: (
          <>
            Large, friendly buttons let the user{' '}
            <strong>adjust volume, flip camera, mute/unmute,</strong> or end the call instantly.
            No hunting in menus while describing symptoms. The user focuses on care, not controls.
          </>
        ),
      },
    ],
  },
];

function ScreensSlider({ screens }) {
  const [index, setIndex] = useState(0);
  const screen = screens[index];
  const prev = () => setIndex((index - 1 + screens.length) % screens.length);
  const next = () => setIndex((index + 1) % screens.length);

  const arrowClass =
    'w-11 h-11 rounded-full border border-[#e2e2e2] flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-colors';

  return (
    <>
      <div className="flex items-center justify-between gap-6 flex-wrap">
        <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
          {screen.title}
        </h2>
        <div className="flex items-center gap-3">
          <span className="font-grotesk text-sm text-[#6b6a67] mr-1">
            {index + 1} / {screens.length}
          </span>
          <button type="button" onClick={prev} aria-label="Previous screen" className={arrowClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="m14 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" onClick={next} aria-label="Next screen" className={arrowClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="m10 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-4">
        <div className="flex flex-col gap-7">
          {screen.blocks.map((block) => (
            <div key={block.heading} className="flex flex-col gap-2">
              <p className="font-grotesk font-bold text-base text-black">{block.heading}</p>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed [&_strong]:font-bold [&_strong]:text-[#1552d8]">
                {block.text}
              </p>
            </div>
          ))}
        </div>
        <ImagePlaceholder filename={screen.image} className="min-h-[560px] lg:min-h-[680px]" />
      </div>
    </>
  );
}

function ImagePlaceholder({ filename, className = '' }) {
  return (
    <div
      className={`bg-[#f7f7f7] rounded-[24px] flex items-center justify-center overflow-hidden ${className}`}
    >
      <p className="font-grotesk text-sm text-[#b3b2af] px-8 text-center">
        Add {filename} to src/assets
      </p>
    </div>
  );
}

const project = {
  name: 'Online Doctor',
  title: 'Online Doctor: Telemedicine Platform',
  tags: ['Healthcare', 'Web & Mobile', 'Telemedicine'],
  meta: [
    { label: 'Participation', value: 'Product Designer' },
    { label: 'Service', value: 'UX/UI Design' },
    { label: 'My Team', value: 'Product Manager, Developers' },
    { label: 'Timeline', value: 'TBD' },
  ],
  tools: [
    { icon: toolFigma, label: 'Figma' },
    { icon: toolJira, label: 'Jira' },
    { icon: toolNotion, label: 'Notion' },
  ],
  summary: [
    {
      label: 'PROBLEM',
      text: 'Getting medical help online still feels slow, confusing, and impersonal.',
    },
    {
      label: 'MY ROLE',
      text: 'Product Designer — patient and doctor flows, web and mobile UI.',
    },
    {
      label: 'KEY DECISION',
      text: 'To be written — the core design decision of the case.',
    },
  ],
  outcome: { value: 'TBD', label: 'Key outcome metric' },
  intro: {
    heading: 'Care that reaches patients where they are.',
    body: (
      <>
        <strong>Online Doctor</strong> is a secure, HIPAA-compliant{' '}
        <strong>telehealth app</strong> that brings patients and doctors together for virtual care.
        Originally built as an MVP, it grew to include{' '}
        <strong>real-time consultations, appointment scheduling, and integrated billing.</strong> I
        designed the experience to make virtual visits feel as clear and reliable as in-person ones
        &mdash; trustworthy, well-paced, and easy for patients of any age.{' '}
        <strong>The core challenge was</strong> making a clinically sensitive, compliance-heavy
        product feel calm and simple at the exact moments patients feel most anxious.
      </>
    ),
  },
  problem: {
    image: 'case-onlinedoctor-problem.png',
    heading: 'Virtual care feels harder than it should',
    body: 'Patients need to reach a doctor quickly, but telehealth often adds friction instead of removing it: finding the right doctor and an open slot is confusing, joining a consultation is unreliable, and medical, scheduling, and billing information are scattered across disconnected steps. Sensitive data and payments raise trust concerns, and unclear appointment or billing states leave patients unsure what happens next.',
    why: 'In healthcare, confusion isn’t just friction — it delays care. When patients can’t easily book, connect, or understand what they’re paying for, they postpone visits and lose trust in the system meant to help them.',
  },
  solution: {
    image: 'case-onlinedoctor-solution.png',
    heading: 'One reliable flow from booking to bill',
    body: 'I designed a clear path from finding a doctor to finishing a visit: searchable profiles with availability, a simple scheduling flow with reminders, and a dependable real-time consultation with an obvious way to join. Billing is integrated and transparent, HIPAA-compliant handling is communicated in plain language, and appointment and payment states are visible at every step so patients always know what’s next.',
    scenario: 'My aim was that a patient could book, join a consultation, and settle the bill without ever feeling lost or exposed — the same reassurance of a good in-person visit, delivered remotely.',
  },
};

export default function OnlineDoctorCase() {
  useEffect(() => {
    document.title = `${project.name} — Anastasiia Voskova`;
    return () => {
      document.title = 'Anastasiia Voskova';
    };
  }, []);

  return (
    <main className="flex flex-col bg-white">
      <SectionMenu sections={caseSections} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* Hero image */}
        <div id="case-hero" className="pt-4">
          <ImagePlaceholder
            filename="case-onlinedoctor.png"
            className="w-full max-w-[1058px] mx-auto aspect-[1058/600]"
          />
        </div>

        {/* Back link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-3 mt-10 font-grotesk font-medium text-base text-black hover:text-[#288fd6] transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M9 14 4 9l5-5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 9h11a5 5 0 0 1 5 5v6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Works
        </Link>

        {/* Title */}
        <h1 className="font-grotesk font-medium text-4xl sm:text-5xl lg:text-[56px] text-black tracking-tight leading-tight mt-8 max-w-3xl">
          {project.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2.5 mt-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-[#f2f3f5] rounded-full font-grotesk font-medium text-sm text-[#22292f]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta bar */}
        <div className="bg-[#f7f7f7] rounded-[24px] p-5 mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {project.meta.map((item) => (
            <div key={item.label} className="flex flex-col gap-3">
              <p className="font-grotesk text-base text-[#6b6a67]">{item.label}</p>
              <p className="font-grotesk font-medium text-base text-black whitespace-pre-line">
                {item.value}
              </p>
            </div>
          ))}
          <div className="flex flex-col gap-3">
            <p className="font-grotesk text-base text-[#6b6a67]">Tools</p>
            <div className="flex gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool.label}
                  title={tool.label}
                  className="bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-sm"
                >
                  <img src={tool.icon} alt={tool.label} className="w-5 h-5 object-contain" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {project.summary.map((card) => (
            <div
              key={card.label}
              className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-4"
            >
              <p className="font-grotesk text-sm text-[#6b6a67] uppercase tracking-wide">{card.label}</p>
              <p className="font-grotesk text-base text-black leading-relaxed">{card.text}</p>
            </div>
          ))}
          <div className="bg-[#e9f3fa] rounded-[24px] p-5 flex flex-col gap-3">
            <p className="font-grotesk text-sm text-[#6b6a67] uppercase tracking-wide">OUTCOME</p>
            <p className="font-grotesk font-bold text-5xl text-black">{project.outcome.value}</p>
            <p className="font-grotesk text-base text-black">{project.outcome.label}</p>
          </div>
        </div>

        {/* Project intro */}
        <section id="intro" className="py-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <p className="font-mono-bold text-base text-black">PROJECT INTRO</p>
            <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
              {project.intro.heading}
            </h2>
            <p className="font-grotesk text-base text-[#393939] leading-relaxed [&>strong]:text-black [&>strong]:font-bold">
              {project.intro.body}
            </p>
          </div>
          <ImagePlaceholder filename="case-onlinedoctor-intro.png" className="min-h-[420px]" />
        </section>

        {/* Problem & solution */}
        <ProblemSolution problem={project.problem} solution={project.solution} />

        {/* Colors & typography */}
        <section id="style" className="pb-24 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Colors & Typography</p>
          <StyleGuide {...styleGuide} />
        </section>

        {/* App screens */}
        <section id="screens" className="pb-24 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">App Screens</p>
          <ScreensSlider screens={appScreens} />
        </section>
      </div>
    </main>
  );
}
