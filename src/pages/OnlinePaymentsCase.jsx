import CaseLayout, { StyleGuide } from '../components/CaseLayout';
import IATree from '../components/IATree';
import toolFigma from '../assets/icon-figma.svg';
import toolJira from '../assets/icon-jira.svg';
import toolNotion from '../assets/icon-notion.svg';

const project = {
  name: 'Online Payments',
  title: 'Online Payments: Mobile Wallet',
  heroImage: 'case-payments.png',
  tags: ['Fintech', 'Mobile', 'Payments', 'Wallet'],
  meta: [
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Service', value: 'UX/UI Design' },
    { label: 'My Team', value: 'Product Manager, Developers' },
    { label: 'Timeline', value: '8 months' },
  ],
  tools: [
    { icon: toolFigma, label: 'Figma' },
    { icon: toolJira, label: 'Jira' },
    { icon: toolNotion, label: 'Notion' },
  ],
  summary: [
    {
      label: 'PROBLEM',
      text: 'Money moves, but the app goes quiet — people cannot tell whether a payment actually went through.',
    },
    {
      label: 'MY ROLE',
      text: 'UX/UI Designer — wallet home, transfer and payment flows, transaction states, and compliance screens.',
    },
    {
      label: 'KEY DECISION',
      text: 'Every transaction names its own state — initiated, processing, completed, failed — so no one has to guess whether the money moved.',
    },
  ],
  intro: {
    heading: 'Money you can follow, not just send.',
    image: 'case-payments-intro.png',
    body: (
      <>
        <strong>Online Payments</strong> is a mobile wallet built around one thing people do
        constantly and understand rarely: moving money and knowing what happened to it. I owned
        the product end to end &mdash; from the first sketch of the balance screen to the
        compliance flows that decide whether a payment goes through at all. The core challenge:{' '}
        <strong>making a heavily regulated product feel effortless without hiding the safeguards
        that make it trustworthy.</strong>
      </>
    ),
  },
  problem: {
    image: 'case-payments-problem.png',
    heading: 'A payment you send and then stop seeing',
    body: 'Sending money online is fast to start and slow to understand. A transfer leaves the account and the app goes quiet — no state, no timing, no fee breakdown until it is over. Security steps arrive without explanation, so verification, 3-D Secure, and KYC read as obstacles rather than protection. And when a payment sits in “pending” or fails outright, nothing on screen says whether the money left, is on its way, or is coming back.',
    why: 'In a wallet, silence is the most expensive state. A user who cannot tell whether a payment succeeded will either repeat it or abandon the app — and both outcomes cost the platform more than the transaction was worth.',
  },
  solution: {
    image: 'case-payments-solution.png',
    heading: 'Every step of the money says where it is',
    body: (
      <>
        The home screen leads with the balance and the card it belongs to, and the three actions
        people actually open a wallet for &mdash; <strong>transfer to a card, IBAN payment, QR
        payment</strong> &mdash; sit directly under it. Each transaction carries a named state
        from start to finish: <strong>initiated, processing, completed, failed</strong> &mdash;
        with fees and timing shown before the user commits, not after. The feed groups by day
        with merchant logos, so spend is recognised by shape before it is read. Verification and
        compliance steps explain themselves in plain language at the moment they interrupt, and
        secure access (PIN plus biometrics) protects the account without adding friction to every
        session.
      </>
    ),
    scenario:
      'My aim was that someone could send money and know exactly where it is at every moment — before they confirm, while it processes, and after it lands — without opening support or checking their bank to find out.',
  },
};

const screens = [
  {
    title: 'Main Screen',
    image: 'case-payments-main.png',
    blocks: [
      {
        heading: 'Balance first, always',
        text: (
          <>
            The card sits at the top with a large, legible amount and a masked PAN, so{' '}
            <strong>the first thing the user sees is the number they came for</strong> &mdash; with
            tap-to-reveal held back until privacy allows it.
          </>
        ),
      },
      {
        heading: 'One switcher, every card',
        text: (
          <>
            &ldquo;Main Account&rdquo; collapses the cards behind a single control, so the balance
            stays one number instead of one per tab &mdash; and switching context never means
            losing sight of the total.
          </>
        ),
      },
      {
        heading: 'Money moves in one tap',
        text: (
          <>
            Transfer to a card, IBAN payment, and QR payment sit directly under the balance, so{' '}
            <strong>the three things people actually open the app to do are never more than one tap
            away.</strong>
          </>
        ),
      },
      {
        heading: 'A feed you can read at a glance',
        text: (
          <>
            Merchant logos, dates, and amounts are grouped by day, which{' '}
            <strong>lets the user recognise spend by shape rather than by reading</strong> &mdash;
            and makes an unfamiliar charge stand out immediately.
          </>
        ),
      },
    ],
  },
  {
    title: 'Cards',
    image: 'case-payments-cards.png',
    blocks: [
      {
        heading: 'The wallet as a shelf',
        text: (
          <>
            Cards are laid out horizontally with the active one forward, so{' '}
            <strong>switching cards is a gesture, not a menu,</strong> and the next card is always
            visible at the edge as an invitation to swipe.
          </>
        ),
      },
      {
        heading: 'Issuing a card is a primary action',
        text: (
          <>
            <strong>&ldquo;New Card&rdquo; is promoted to the header rather than buried in
            settings,</strong> because a virtual card issued in seconds is the feature that makes
            the wallet worth keeping.
          </>
        ),
      },
      {
        heading: 'Maintenance without a submenu',
        text: (
          <>
            Details, Apple Wallet, PIN, block, conversion, and statement are one flat list, so{' '}
            <strong>every card action is a single tap</strong> &mdash; including the urgent one,
            blocking a card, which no one should have to search for.
          </>
        ),
      },
    ],
  },
  {
    title: 'Send Money — Recipient',
    image: 'case-payments-send-recipient.png',
    blocks: [
      {
        heading: 'One field, three identifiers',
        text: (
          <>
            Email, card number, or phone all go into the same input, so{' '}
            <strong>the user never has to decide which kind of transfer they are making</strong>{' '}
            before they can start typing.
          </>
        ),
      },
      {
        heading: 'Repeat transfers as a row of faces',
        text: (
          <>
            Recent recipients sit above the full list with avatars and first names, because{' '}
            <strong>most payments go to someone you have already paid</strong> &mdash; and those
            should cost one tap, not a search.
          </>
        ),
      },
      {
        heading: 'A contact list, not a form',
        text: (
          <>
            Alphabetised names with avatars or fallback initials pre-fill the field on tap, which{' '}
            <strong>removes the most common source of a failed transfer: a mistyped
            number.</strong>
          </>
        ),
      },
      {
        heading: 'QR as a shortcut, not a detour',
        text: (
          <>
            The scanner stays in the header throughout, so{' '}
            <strong>a code can populate the recipient at any point in the flow</strong> rather than
            only at the start.
          </>
        ),
      },
    ],
  },
  {
    title: 'Send Money — Amount',
    image: 'case-payments-send-amount.png',
    blocks: [
      {
        heading: 'Destination and funds in one capsule',
        text: (
          <>
            The recipient and the available balance are pinned together above the input, so{' '}
            <strong>the user confirms who and how much before a single digit is entered</strong>{' '}
            &mdash; the two facts a wrong transfer usually gets wrong.
          </>
        ),
      },
      {
        heading: 'The amount owns the screen',
        text: (
          <>
            A large centred field with a live currency mask means{' '}
            <strong>the figure stays readable at arm&rsquo;s length,</strong> formatted as it is
            typed rather than validated after the fact.
          </>
        ),
      },
      {
        heading: 'A keypad built for money',
        text: (
          <>
            The custom pad drops every key that cannot appear in an amount, so{' '}
            <strong>invalid input is impossible rather than merely rejected,</strong> and the keys
            sit in comfortable reach for one hand.
          </>
        ),
      },
    ],
  },
  {
    title: 'Transaction Details',
    image: 'case-payments-transaction.png',
    blocks: [
      {
        heading: 'Merchant before amount',
        text: (
          <>
            A category badge and the merchant name open the screen, because{' '}
            <strong>the user is here to answer &ldquo;what was this?&rdquo;</strong> before anything
            else.
          </>
        ),
      },
      {
        heading: 'One number, unmistakable',
        text: (
          <>
            The total is the largest and highest-contrast element on the screen, so{' '}
            <strong>a charge can be verified in a glance</strong> without reading a table.
          </>
        ),
      },
      {
        heading: 'Enough context to settle a doubt',
        text: (
          <>
            Time, date, full address, and the last four of the card sit directly beneath, which{' '}
            <strong>lets the user recognise a transaction they had forgotten</strong> instead of
            reporting it as fraud.
          </>
        ),
      },
      {
        heading: 'A single next step',
        text: (
          <>
            The action list holds one entry &mdash; transaction report &mdash; so{' '}
            <strong>the route to a dispute is obvious and uncrowded</strong> at the moment the user
            needs it.
          </>
        ),
      },
    ],
  },
];

const styleGuide = {
  heading: 'A dark base that lets one blue mean “act”',
  body: (
    <>
      Dark Jungle Green and Gunmetal form the base, layering panels and cards by depth rather than
      by borders, so a dense payments interface stays quiet.{' '}
      <strong>French Sky Blue is the only saturated colour in the system</strong> and it is spent
      exclusively on the primary action &mdash; against near-black, the button a user must press is
      never in question. Jordy Blue carries the softer supporting states, and Inter keeps amounts,
      card numbers, and transaction rows legible at small sizes.
    </>
  ),
  colors: [
    { name: 'Dark Jungle Green', hex: '#1C1C25', text: '#ffffff' },
    { name: 'Gunmetal', hex: '#2D2D39', text: '#ffffff' },
    { name: 'White', hex: '#FFFFFF', text: '#22292f' },
    { name: 'Jordy Blue', hex: '#9DA9FF', text: '#22292f' },
    { name: 'French Sky Blue', hex: '#2D47FF', text: '#ffffff' },
  ],
  // Neutral ramp from the dark base up to near-white — panel depth and table rows.
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
    name: 'Inter',
    hex: '#252529',
    weights: ['Regular', 'Medium', 'Semi Bold', 'Bold', 'Extra Bold'],
  },
  image: 'case-onlinepayments-style.png',
};

const iaTree = {
  label: 'Online Payments',
  children: [
    {
      label: 'Home',
      children: [
        { label: 'User Info' },
        { label: 'Account Switcher' },
        { label: 'QR Code (Show My Code / Scan)' },
        {
          label: 'Quick Actions',
          children: [
            { label: 'Transfer to a Card — Send Money flow (modal, 3 steps)' },
            { label: 'IBAN Payment — Send Money flow (modal, 3 steps)' },
            { label: 'QR-Code Payment — Send Money flow (modal, 3 steps)' },
          ],
        },
        { label: 'Transactions (Preview → History)' },
        { label: 'Account Settings' },
      ],
    },
    {
      label: 'Cards',
      children: [
        { label: 'My Cards (Carousel)' },
        { label: 'New Card' },
        {
          label: 'Selected Card',
          children: [
            { label: 'Card Details' },
            { label: 'Add to Wallet' },
            { label: 'PIN Code' },
            { label: 'Block Card' },
            { label: 'Currency Conversion Settings' },
            { label: 'Card Statement' },
          ],
        },
      ],
    },
    {
      label: 'History',
      children: [
        { label: 'Search' },
        { label: 'List of Transactions → Transaction Details' },
      ],
    },
    {
      label: 'Top Up',
      children: [
        { label: 'Source (Another Card · Bank Transfer · Apple Pay · Request from Contact)' },
        { label: 'Amount → Confirm → Result' },
        { label: 'Saved Sources' },
        { label: 'Auto Top-Up Rules' },
      ],
    },
    {
      label: 'Settings',
      children: [
        { label: 'Profile (Personal Data · KYC · Bank Details)' },
        { label: 'Security (Auth · Devices · Confirmation · Privacy · Alerts)' },
        { label: 'Accounts (My Accounts · Currencies)' },
        { label: 'Payments (Limits · Recurring · Saved Recipients · Auto Top-Up)' },
        { label: 'Notifications' },
        { label: 'Preferences' },
        { label: 'Support (Help · Chat · Disputes)' },
        { label: 'Legal & Data' },
        { label: 'Log Out' },
      ],
    },
  ],
};

function InformationArchitecture() {
  return (
    <>
      <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
        Five Tabs, One Send-Money Flow
      </h2>
      <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl [&>strong]:font-bold [&>strong]:text-black">
        <strong>Transfer, IBAN, and QR payment all open the same three-step modal</strong> rather
        than three separate flows, so learning to send money once means knowing all three ways to
        do it. Transactions live twice on purpose &mdash; a{' '}
        <strong>preview on Home for the daily glance, a searchable History for the actual
        lookup</strong> &mdash; and Settings is kept flat and administrative, out of the way of
        the four tabs someone touches every day.
      </p>
      <div className="bg-[#f7f7f7] rounded-[24px] p-5 overflow-x-auto">
        <IATree data={iaTree} defaultOpenIndex={0} />
        <p className="font-grotesk text-sm text-[#b3b2af] mt-4">
          Click a node to expand or collapse its branch.
        </p>
      </div>
    </>
  );
}

const sections = [
  { id: 'ia', label: 'Information Architecture', content: <InformationArchitecture /> },
  { id: 'style', label: 'Colours & Typography', content: <StyleGuide {...styleGuide} /> },
];

const keyTakeaway = {
  heading: 'Silence is a state',
  body: (
    <>
      A payment that is processing looks identical to a payment that has failed, if the screen
      says nothing about either. Designing the waiting moments &mdash; not the successful ones
      &mdash; is what made this product feel safe.{' '}
      <strong>In a regulated product, people do not resent the safeguards; they resent being
      kept in the dark about them.</strong>
    </>
  ),
};

export default function OnlinePaymentsCase() {
  return (
    <CaseLayout
      project={project}
      sections={sections}
      screens={screens}
      screensLabel="App Screens"
      keyTakeaway={keyTakeaway}
      caseId="online-payments"
    />
  );
}
