import CaseLayout, { StyleGuide } from '../components/CaseLayout';
import toolFigma from '../assets/icon-figma.svg';
import toolJira from '../assets/icon-jira.svg';
import toolNotion from '../assets/icon-notion.svg';

const project = {
  name: 'Online Payments',
  title: 'Online Payment Solutions: Checkout & Merchant Console',
  heroImage: 'case-payments.png',
  tags: ['Fintech', 'Web', 'Checkout', 'Compliance'],
  meta: [
    { label: 'Role', value: 'Product Designer' },
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
      text: 'Payments fail for reasons no one can see — buyers abandon and merchants cannot diagnose why.',
    },
    {
      label: 'MY ROLE',
      text: 'Product Designer — checkout flow, merchant console, error and compliance states.',
    },
    {
      label: 'KEY DECISION',
      text: 'Every transaction state is named out loud — initiated, processing, completed, failed — so no one has to guess whether the money moved.',
    },
  ],
  outcome: { value: 'TBD', label: 'Key outcome metric' },
  intro: {
    heading: 'Secure payments, without the friction.',
    image: 'case-payments-intro.png',
    body: (
      <>
        <strong>Online Payment Solution</strong> is a fintech platform that gives businesses and
        individuals a <strong>secure, compliant way to accept and send money online.</strong> I
        designed the experience around fast, trustworthy transactions &mdash; a clear checkout,
        transparent status, and compliance that stays out of the user&rsquo;s way.{' '}
        <strong>The core challenge was</strong> making a heavily regulated, security-critical
        product feel effortless without hiding the safeguards that make it trustworthy.
      </>
    ),
  },
  problem: {
    image: 'case-payments-problem.png',
    heading: 'Online payments make people choose between safe and simple',
    body: 'Businesses and individuals need to move money online quickly, but most tools force a trade-off: checkout is long and confusing, fees and settlement times are unclear, and security steps — verification, 3-D Secure, KYC — interrupt the flow with little explanation. When a transaction sits in “pending” or fails, users can’t tell whether their money actually moved.',
    why: 'When people can’t tell whether a payment succeeded, or the process feels unsafe, they abandon it — businesses lose revenue at the very last step, and both sides lose trust in the platform meant to protect them.',
  },
  solution: {
    image: 'case-payments-solution.png',
    heading: 'One clear, compliant flow from checkout to confirmation',
    body: 'I designed a streamlined payment flow with transparent fees, a short and legible checkout, and real-time transaction states — initiated, processing, completed, or failed — so users always know where their money is. Security and compliance are built into the flow with plain-language explanations and progress states, and secure access (PIN plus biometrics) protects accounts without overwhelming the user.',
    scenario: 'My aim was that a first-time user could complete a payment in seconds and trust it, while a business owner could rely on clear statuses and compliance in production — the same confidence from checkout to confirmation.',
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
        heading: 'One account switcher, many currencies',
        text: (
          <>
            &ldquo;Main Account&rdquo; collapses cards and currencies into a single control, which{' '}
            <strong>keeps a multi-currency wallet unified instead of fragmented</strong> across
            separate tabs.
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

const sections = [
  { id: 'style', label: 'Colors & Typography', content: <StyleGuide {...styleGuide} /> },
];

export default function OnlinePaymentsCase() {
  return (
    <CaseLayout
      project={project}
      sections={sections}
      screens={screens}
      screensLabel="Product Screens"
    />
  );
}
