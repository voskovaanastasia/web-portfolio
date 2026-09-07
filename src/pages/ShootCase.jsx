import CaseLayout, { ProcessColumns, StyleGuide } from '../components/CaseLayout';
import IATree from '../components/IATree';
import toolFigma from '../assets/icon-figma.svg';
import toolPhotoshop from '../assets/toolkit/photoshop.svg';
import toolLightroom from '../assets/toolkit/lightroom.svg';
import toolIllustrator from '../assets/toolkit/illustrator.svg';

const project = {
  name: 'SHOOT',
  title: 'SHOOT: Creative-Services Marketplace',
  heroImage: 'case-shoot.png',
  tags: ['Marketplace', 'Web & Mobile', 'Booking Flow', 'Payments'],
  meta: [
    { label: 'Role', value: 'Product Designer' },
    { label: 'Service', value: 'UX/UI Design' },
    { label: 'My Team', value: 'Product Manager, Developers' },
    { label: 'Timeline', value: '4 months' },
  ],
  tools: [
    { icon: toolFigma, label: 'Figma' },
    { icon: toolPhotoshop, label: 'Photoshop' },
    { icon: toolLightroom, label: 'Lightroom' },
    { icon: toolIllustrator, label: 'Illustrator' },
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
      text: 'Talent, space, and gear share one booking flow and one calendar, instead of three services that never talk to each other.',
    },
  ],
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

const processColumns = [
  {
    heading: 'Who',
    items: [
      'Renters booking a shoot: photographers, small brands, agencies',
      'Photographers listing a portfolio and availability',
      'Studio and gear owners renting out space and equipment',
    ],
  },
  {
    heading: 'What',
    items: [
      'One marketplace for talent, studios, and camera gear',
      'A single booking flow and calendar across all three',
      'Transparent, all-in pricing shown before checkout',
    ],
  },
  {
    heading: 'When',
    items: [
      '4-month build, from research to a booking-ready flow',
      'Discovery and IA first, then catalog, portfolio, and checkout',
      'Style guide and screens finalised last, against real flows',
    ],
  },
  {
    heading: 'Where',
    highlight: true,
    items: [
      'Web and mobile, same flow across breakpoints',
      'Landing and catalog optimised for fast browsing',
      'Checkout and payment built mobile-first for on-location use',
    ],
  },
  {
    heading: 'How',
    body: 'By treating talent, space, and gear as one bookable inventory instead of three separate products — verified profiles and up-front pricing build trust, while one calendar and one checkout carry the booking from discovery to payment without switching tools.',
  },
];

const iaTree = {
  label: 'SHOOT',
  children: [
    {
      label: 'Auth',
      children: [
        { label: 'Sign In' },
        {
          label: 'Sign Up',
          children: [
            { label: 'Social (Google / Facebook)' },
            { label: 'Email & Password' },
          ],
        },
        { label: 'Forgot / Reset Password' },
      ],
    },
    {
      label: 'Home',
      children: [
        { label: 'Rental Categories' },
        { label: 'Top Camera Rentals' },
        { label: 'Top Studio Rentals' },
        { label: 'Workshop / Events' },
        { label: 'Client Reviews' },
      ],
    },
    {
      label: 'Portfolio',
      children: [
        { label: 'Photo Gallery' },
        { label: 'Video Gallery' },
        { label: 'Project Detail' },
        { label: 'Ratings & Reviews' },
      ],
    },
    {
      label: 'Rent',
      children: [
        {
          label: 'Catalog',
          children: [
            { label: 'Brand Filter' },
            { label: 'Type Filter' },
            { label: 'Date Range' },
          ],
        },
        { label: 'Gear Detail' },
        { label: 'Studio Detail' },
      ],
    },
    {
      label: 'Book',
      children: [
        { label: 'Photographer Selection' },
        { label: 'Schedule (Date & Hours)' },
        { label: 'Checkout' },
        { label: 'Payment Confirmation' },
      ],
    },
    {
      label: 'Account',
      children: [
        { label: 'Profile' },
        { label: 'My Bookings' },
        { label: 'Saved Gear' },
        { label: 'Notifications' },
      ],
    },
  ],
};

function InformationArchitecture() {
  return (
    <>
      <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
        Six Sections, One Booking Path
      </h2>
      <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl [&>strong]:font-bold [&>strong]:text-black">
        <strong>Portfolio and Rent sit side by side</strong> rather than nested under one another,
        because a visitor arrives wanting to judge either talent or gear first &mdash; not to dig
        for it. Both funnel into the same <strong>Book</strong> branch, so whether the trigger was
        a photographer&rsquo;s work or a camera&rsquo;s spec sheet, checkout is identical from that
        point on. <strong>Account</strong> stays flat and administrative, kept out of the browsing
        tree entirely.
      </p>
      <div className="bg-[#f7f7f7] rounded-[24px] p-5 overflow-x-auto">
        <IATree data={iaTree} defaultOpenIndex={3} />
        <p className="font-grotesk text-sm text-[#b3b2af] mt-4">
          Click a node to expand or collapse its branch.
        </p>
      </div>
    </>
  );
}

const screens = [
  {
    title: 'Sign In',
    image: 'case-shoot-signin.png',
    blocks: [
      {
        heading: 'A door, not a gate',
        text: (
          <>
            Email and password sit beside social sign-in with equal weight, so{' '}
            <strong>the returning renter reaches saved gear and bookings without choosing a
            method first.</strong>
          </>
        ),
      },
      {
        heading: 'Recovery in the same breath',
        text: (
          <>
            &ldquo;Remember me&rdquo; and &ldquo;Forgot password?&rdquo; share a line under the
            fields, because{' '}
            <strong>the two things a stuck user needs belong where they got stuck</strong> &mdash;
            not on a later screen.
          </>
        ),
      },
      {
        heading: 'The craft is the background',
        text: (
          <>
            A full-bleed image of someone working a rig fills half the frame, so{' '}
            <strong>the login already says what the platform is for</strong> before a single field
            is filled.
          </>
        ),
      },
    ],
  },
  {
    title: 'Sign Up',
    image: 'case-shoot-signup.png',
    blocks: [
      {
        heading: 'Fastest path on top',
        text: (
          <>
            <strong>Google and Facebook lead, with the manual form below an &ldquo;or&rdquo;
            divider</strong> &mdash; new renters can be browsing in two taps, and the long form
            stays available for those who prefer it.
          </>
        ),
      },
      {
        heading: 'Four fields, no more',
        text: (
          <>
            Name, email, password, confirm. <strong>Nothing is asked at signup that the booking
            flow can ask later,</strong> when the user has a reason to answer it.
          </>
        ),
      },
      {
        heading: 'Rules stated, then checked',
        text: (
          <>
            The character minimum is shown under the field and the match is confirmed with an
            inline tick, so{' '}
            <strong>the user knows the password is valid before pressing anything.</strong>
          </>
        ),
      },
      {
        heading: 'Consent tied to the action',
        text: (
          <>
            Terms and privacy sit directly above the button that accepts them, which{' '}
            <strong>puts the agreement where the decision actually happens.</strong>
          </>
        ),
      },
    ],
  },
  {
    title: 'Landing',
    image: 'case-shoot-landing.png',
    blocks: [
      {
        heading: 'Three doors, one decision',
        text: (
          <>
            Cameras &amp; Lenses, Studios, Accessories are the first thing under the hero, because{' '}
            <strong>renters arrive knowing which of the three they need</strong> and the page should
            not make them scroll to say so.
          </>
        ),
      },
      {
        heading: 'Top rentals as a shortcut',
        text: (
          <>
            Curated camera and studio picks carry specs and day rates on the card, so{' '}
            <strong>the most common bookings can be compared without entering the catalog.</strong>
          </>
        ),
      },
      {
        heading: 'A reason to return between shoots',
        text: (
          <>
            Workshops and events give the platform a pulse beyond transactions &mdash;{' '}
            <strong>a countdown and a notify field turn a browse into a reason to come back.</strong>
          </>
        ),
      },
      {
        heading: 'Proof where the doubt is',
        text: (
          <>
            Testimonials and real client work sit near the end of the scroll, answering{' '}
            <strong>the first-time renter&rsquo;s question of whether the gear and the people can be
            trusted.</strong>
          </>
        ),
      },
    ],
  },
  {
    title: 'Catalog',
    image: 'case-shoot-catalog.png',
    blocks: [
      {
        heading: 'Filters shaped like the decision',
        text: (
          <>
            Brand, then type, then dates &mdash;{' '}
            <strong>the order renters actually think in,</strong> starting from the ecosystem their
            lenses already fit.
          </>
        ),
      },
      {
        heading: 'Brands as marks, not text',
        text: (
          <>
            Canon, Sony, Fujifilm, Leica, Nikon, Lumix, GoPro appear as logo chips, so{' '}
            <strong>the row is scanned rather than read</strong> by an audience that recognises
            these marks instantly.
          </>
        ),
      },
      {
        heading: 'Dates change the answer',
        text: (
          <>
            Start and end dates drive live availability and price, which{' '}
            <strong>keeps the catalog from showing gear that cannot be booked</strong> for the
            user&rsquo;s shoot.
          </>
        ),
      },
      {
        heading: 'Enough spec to decide',
        text: (
          <>
            Each card carries sensor, resolution, video, and stabilisation beside the day rate, so{' '}
            <strong>a body can be ruled in or out from the grid</strong> without opening it.
          </>
        ),
      },
    ],
  },
  {
    title: 'Portfolio',
    image: 'case-shoot-portfolio.png',
    blocks: [
      {
        heading: 'Two entrances: photo and video',
        text: (
          <>
            The split lets the visitor{' '}
            <strong>self-select by the medium they are hiring for</strong> rather than scroll a
            mixed feed hoping to find their genre.
          </>
        ),
      },
      {
        heading: 'A masonry grid built for scanning',
        text: (
          <>
            Varied crops keep the eye moving and{' '}
            <strong>let each image keep its native ratio</strong> instead of being squared into a
            uniform tile.
          </>
        ),
      },
      {
        heading: 'Credit on every frame',
        text: (
          <>
            The photographer&rsquo;s name and avatar sit under each work, so{' '}
            <strong>browsing the portfolio doubles as browsing the talent</strong> a client can
            book.
          </>
        ),
      },
      {
        heading: 'Ratings and a way back',
        text: (
          <>
            An aggregate score with a review form builds trust, while a breadcrumb{' '}
            <strong>returns the user to the grid at the point they left it.</strong>
          </>
        ),
      },
    ],
  },
  {
    title: 'Checkout',
    image: 'case-shoot-checkout.png',
    blocks: [
      {
        heading: 'The booking as a receipt',
        text: (
          <>
            Studio and photographer are listed as separate line items with date, hours, and price,
            so{' '}
            <strong>the user verifies a multi-part booking the way they would read an
            invoice.</strong>
          </>
        ),
      },
      {
        heading: 'Editable to the last moment',
        text: (
          <>
            Edit and remove stay on every row up to payment, which{' '}
            <strong>removes the fear that reaching checkout locks the plan in.</strong>
          </>
        ),
      },
      {
        heading: 'Address and total together',
        text: (
          <>
            Where to turn up and what it costs share the final band, because{' '}
            <strong>those are the two facts a renter checks before paying</strong> &mdash; and the
            two they screenshot afterwards.
          </>
        ),
      },
      {
        heading: 'One way forward, one way back',
        text: (
          <>
            Pay is the only filled button on the page and &ldquo;Continue booking&rdquo; is the only
            alternative, so{' '}
            <strong>the last screen has no ambiguity about what happens next.</strong>
          </>
        ),
      },
    ],
  },
];

const styleGuide = {
  heading: 'A dark frame that lets the photography speak',
  body: (
    <>
      Dark Jungle Green and Gunmetal do almost all the work here, and that is the point &mdash;{' '}
      <strong>in a product built around browsing photographers&rsquo; portfolios, the interface
      has to recede so the work itself carries the colour</strong>. Neutral surfaces keep every
      shot looking the way its author graded it, rather than tinted by the page around it. Sweet
      Blue is the single accent, spent on booking and primary actions so it stays unmistakable
      against the dark. Poppins gives listings and pricing a clean, confident read.
    </>
  ),
  colors: [
    { name: 'Dark Jungle Green', hex: '#1A1C1E', text: '#ffffff' },
    { name: 'Gunmetal', hex: '#535557', text: '#ffffff' },
    { name: 'White', hex: '#FFFFFF', text: '#22292f' },
    { name: 'Sweet Blue', hex: '#74ABFF', text: '#22292f' },
  ],
  // Neutral ramp from the dark base up to near-white — panel depth and gallery chrome.
  scale: [
    '#2B2A45',
    '#3A3A5C',
    '#4B4B72',
    '#5F5F8C',
    '#7C7CA3',
    '#9C9CBB',
    '#BEBECF',
    '#DCDCE2',
    '#EDEDED',
  ],
  typeface: {
    name: 'Poppins',
    hex: '#242628',
    weights: ['Regular', 'Medium', 'Semi Bold', 'Bold', 'Extra Bold'],
  },
  image: 'case-shoot-style.png',
};

const caseSections = [
  {
    id: 'process',
    label: '4W+H Process',
    content: <ProcessColumns columns={processColumns} />,
  },
  {
    id: 'ia',
    label: 'Information Architecture',
    content: <InformationArchitecture />,
  },
  {
    id: 'style',
    label: 'Colours & Typography',
    content: <StyleGuide {...styleGuide} />,
  },
];

const keyTakeaway = {
  heading: 'Unifying three markets meant unifying one calendar',
  body: (
    <>
      On the surface this was a design problem about three catalogues that needed to look like
      one. It was actually a scheduling problem:{' '}
      <strong>a photographer, a studio, and a camera each have their own availability, and a
      shoot only exists when all three overlap.</strong>
      <br />
      <br />
      Once availability was modelled as one shared calendar rather than three, the booking flow
      almost designed itself. Most marketplace fragmentation is not a navigation problem wearing
      a data costume &mdash; <strong>it is a data problem wearing a navigation costume.</strong>
    </>
  ),
};

export default function ShootCase() {
  return (
    <CaseLayout
      project={project}
      sections={caseSections}
      screens={screens}
      screensLabel="App Screens"
      keyTakeaway={keyTakeaway}
      caseId="shoot"
    />
  );
}
