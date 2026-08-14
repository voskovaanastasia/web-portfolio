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
      text: 'Payments fail for reasons no one can see — buyers abandon and merchants cannot diagnose why.',
    },
    {
      label: 'MY ROLE',
      text: 'Product Designer — checkout flow, merchant console, error and compliance states.',
    },
    {
      label: 'KEY DECISION',
      text: 'To be written — the core design decision of the case.',
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
    title: 'Checkout',
    image: 'case-payments-checkout.png',
    blocks: [
      {
        heading: 'Single-screen payment',
        text: (
          <>
            Amount, method, and confirmation live on one screen.{' '}
            <strong>Fewer steps means fewer places to abandon.</strong>
          </>
        ),
      },
      {
        heading: 'Method the buyer already trusts',
        text: (
          <>
            <strong>Wallets appear first when the device supports them,</strong> with card entry as
            the reliable fallback rather than the default.
          </>
        ),
      },
      {
        heading: 'Inline validation, no surprises',
        text: (
          <>
            Card errors surface at field level before submit, so{' '}
            <strong>the buyer never loses a full form to a typo.</strong>
          </>
        ),
      },
    ],
  },
  {
    title: 'Authentication & Declines',
    image: 'case-payments-3ds.png',
    blocks: [
      {
        heading: '3-D Secure without the dead end',
        text: (
          <>
            The step-up is framed as part of the flow, with{' '}
            <strong>a persistent way back to the order</strong> if the bank window fails.
          </>
        ),
      },
      {
        heading: 'Declines that say what to do next',
        text: (
          <>
            <strong>Each decline maps to a concrete recovery action</strong> &mdash; try another
            card, contact the bank, retry later &mdash; instead of a generic failure message.
          </>
        ),
      },
    ],
  },
  {
    title: 'Merchant Console',
    image: 'case-payments-console.png',
    blocks: [
      {
        heading: 'Transactions with reasons attached',
        text: (
          <>
            <strong>Every row carries its status and decline reason,</strong> so support answers a
            customer without opening a second tool.
          </>
        ),
      },
      {
        heading: 'Refunds and disputes in one place',
        text: (
          <>
            Partial refunds, evidence upload, and deadlines are grouped by case, which{' '}
            <strong>keeps time-limited actions from being missed.</strong>
          </>
        ),
      },
      {
        heading: 'Payouts reconciled',
        text: (
          <>
            <strong>Each payout expands into the transactions and fees behind it,</strong> making
            accounting reconciliation a read rather than an export.
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
