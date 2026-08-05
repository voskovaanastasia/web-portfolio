import CaseLayout from '../components/CaseLayout';
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
    heading: 'Two sides of one transaction, designed together.',
    image: 'case-payments-intro.png',
    body: (
      <>
        An <strong>online payment solution</strong> covering both ends of a transaction: a{' '}
        <strong>checkout that survives real-world failure</strong> &mdash; declines, 3-D Secure
        steps, retries &mdash; and a <strong>merchant console</strong> where those same events are
        legible enough to act on. The design treats{' '}
        <strong>error states as primary screens,</strong> not edge cases.
      </>
    ),
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

export default function OnlinePaymentsCase() {
  return <CaseLayout project={project} screens={screens} screensLabel="Product Screens" />;
}
