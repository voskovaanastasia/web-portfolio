import CaseLayout, { ProcessColumns } from '../components/CaseLayout';
import toolFigma from '../assets/icon-figma.svg';
import toolPhotoshop from '../assets/toolkit/photoshop.svg';
import toolLightroom from '../assets/toolkit/lightroom.svg';

const project = {
  name: 'SHOOT',
  title: 'SHOOT: Creative-Services Marketplace',
  heroImage: 'case-shoot.png',
  tags: ['Marketplace', 'Web & Mobile', 'Booking Flow', 'Payments'],
  meta: [
    { label: 'Participation', value: 'Product Designer' },
    { label: 'Service', value: 'UX/UI Design' },
    { label: 'My Team', value: 'Product Manager, Developers' },
    { label: 'Timeline', value: 'TBD' },
  ],
  tools: [
    { icon: toolFigma, label: 'Figma' },
    { icon: toolPhotoshop, label: 'Photoshop' },
    { icon: toolLightroom, label: 'Lightroom' },
  ],
  summary: [
    {
      label: 'PROBLEM',
      text: 'Talent, studios, and gear live on separate platforms with unclear pricing and availability.',
    },
    {
      label: 'MY ROLE',
      text: 'Product Designer — portfolio feed, booking flow, studio and equipment rental, payments.',
    },
    {
      label: 'KEY DECISION',
      text: 'To be written — the core creative decision of the case.',
    },
  ],
  outcome: { value: 'TBD', label: 'Key outcome metric' },
  intro: {
    heading: 'One platform for the whole shoot.',
    image: 'case-shoot-intro.png',
    body: (
      <>
        <strong>SHOOT</strong> is a creative-services marketplace that connects individuals and
        businesses with <strong>professional photographers, rentable high-quality cameras, and
        bookable studios.</strong> I designed the end-to-end experience &mdash; from a browsable
        portfolio feed to a transparent booking flow and an equipment-and-studio rental system.{' '}
        <strong>The core challenge was</strong> unifying three fragmented markets &mdash; talent,
        space, and gear &mdash; into one flow simple enough to book in minutes, yet rich enough to
        compare on.
      </>
    ),
  },
  problem: {
    image: 'case-shoot-problem.png',
    heading: 'Creative bookings are scattered across too many tools',
    body: 'Photographers, studios, and equipment rentals live on separate sites and apps, so users hop between platforms just to discover and compare portfolios, spaces, and gear. Booking flows are confusing, with unclear steps and missing availability. Pricing isn’t transparent — hidden fees and custom quotes frustrate people. And with no unified calendar, users juggle messages, emails, and spreadsheets to pull a single shoot together.',
    why: 'Every extra tool adds friction, cost, and doubt: users overpay through hidden fees, lose bookings to unclear availability, and abandon the process before it’s finished — while creators lose work they never even see.',
  },
  solution: {
    image: 'case-shoot-solution.png',
    heading: 'One booking journey, from portfolio to payment',
    body: 'SHOOT unifies photographers, studios, and gear into a single searchable platform, sorted by location and availability. Verified portfolios and reviews with a “Pro-Badge” build trust, pricing is shown up front with a full fee breakdown on every profile, and a step-by-step flow — calendar picker, progress indicators, confirmation emails — keeps booking legible from the first tap. Real-time updates, reminders, and secure in-app payments keep the entire shoot in one place.',
    scenario: 'My aim was that someone planning a shoot could find talent, a studio, and gear, compare them on real prices and availability, and confirm the booking in a single sitting — confident that what they saw is exactly what they’d pay.',
  },
};

const screens = [
  {
    title: 'Concept & Moodboard',
    image: 'case-shoot-moodboard.png',
    blocks: [
      {
        heading: 'Direction before logistics',
        text: (
          <>
            <strong>Palette, light, and framing were agreed on a moodboard first,</strong> so
            production decisions had a reference to answer to rather than taste debates on set.
          </>
        ),
      },
      {
        heading: 'Shot list tied to placements',
        text: (
          <>
            <strong>Every planned frame mapped to a real slot</strong> &mdash; site hero, card
            crop, vertical social &mdash; which set aspect ratios and safe areas before the shoot
            day.
          </>
        ),
      },
    ],
  },
  {
    title: 'On Set',
    image: 'case-shoot-onset.png',
    blocks: [
      {
        heading: 'Consistent light setup',
        text: (
          <>
            <strong>One lighting scheme across the day</strong> keeps the library coherent when
            images later sit side by side in a grid.
          </>
        ),
      },
      {
        heading: 'Shooting for the crop',
        text: (
          <>
            Frames were composed with{' '}
            <strong>headroom for overlaid type and multiple crop ratios,</strong> so one capture
            serves several placements.
          </>
        ),
      },
    ],
  },
  {
    title: 'Selection & Retouch',
    image: 'case-shoot-retouch.png',
    blocks: [
      {
        heading: 'Selects against the shot list',
        text: (
          <>
            <strong>Selection was scored against the original placements,</strong> not favourites
            &mdash; the set ships complete rather than pretty but partial.
          </>
        ),
      },
      {
        heading: 'One grade across the set',
        text: (
          <>
            <strong>A single colour grade applied to every image</strong> makes the library read as
            one brand voice wherever the photos appear.
          </>
        ),
      },
    ],
  },
];

const processColumns = [
  {
    heading: 'What Problem?',
    body: 'Finding, comparing, and booking photographers, studios, and gear is scattered across too many places.',
  },
  {
    heading: 'Why?',
    body: 'Users juggle portfolio sites, rental apps, chats, and calendars — wasting time and losing trust.',
  },
  {
    heading: 'Who is the target?',
    highlight: true,
    items: [
      'Brides & grooms',
      'Event planners',
      'Influencers',
      'Small businesses',
      'Families needing on-demand photo/video',
    ],
  },
  {
    heading: 'What’s the Goal?',
    body: 'One platform to discover portfolios, rent gear, book studios, and reserve — all in a single flow.',
  },
  {
    heading: 'How?',
    body: 'An intuitive web app: smart search & filters, verified reviews, transparent pricing, calendar booking, secure payments.',
  },
];

const caseSections = [
  {
    id: 'process',
    label: '4W+H Process',
    content: <ProcessColumns columns={processColumns} />,
  },
];

export default function ShootCase() {
  return (
    <CaseLayout
      project={project}
      sections={caseSections}
      screens={screens}
      screensLabel="Process"
    />
  );
}
