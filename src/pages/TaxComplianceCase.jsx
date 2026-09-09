import CaseLayout, { StyleGuide } from '../components/CaseLayout';
import IATree from '../components/IATree';
import toolFigma from '../assets/icon-figma.svg';

const project = {
  name: 'Tax Compliance Platform',
  title: 'Tax Compliance Platform: IRS Filing for Non-Resident Owners',
  heroImage: 'case-tax.png',
  tags: ['FinTech', 'Cross-Platform', 'Compliance Workflow', 'Guided Flow'],
  meta: [
    { label: 'Role', value: 'Product Designer (sole designer)' },
    { label: 'Service', value: 'UX/UI Design' },
    { label: 'My Team', value: 'Product Manager, Developers, QA, Tax Advisors' },
    { label: 'Timeline', value: '8 months' },
  ],
  tools: [{ icon: toolFigma, label: 'Figma' }],
  summary: [
    {
      label: 'PROBLEM',
      text: 'A US tax filing that non-resident owners cannot read, on a deadline where the mistake costs more than the delay.',
    },
    {
      label: 'MY ROLE',
      text: 'Product Designer, sole designer on the product — user research, information architecture, the filing flow, multi-entity management, and the UI system across mobile and web.',
    },
    {
      label: 'KEY DECISION',
      text: 'The product opens on the state of every filing, not on a blank form — because a tax return is something people leave and come back to.',
    },
    {
      label: 'OUTCOME',
      text: 'Self-service filing — a process that previously required an accountant, completed by the owner.',
    },
  ],
  intro: {
    heading: 'Tax filing that explains itself as you go',
    image: 'case-tax-intro.png',
    body: (
      <>
        <strong>Automated Tax Compliance Platform</strong> is a cross-platform product that lets
        non-resident owners of US businesses prepare and submit their IRS filings themselves. I was
        the sole designer on it, working with a product manager, engineers, QA, and tax advisors
        &mdash; running the research, the information architecture, the filing flow, and the
        interface system across mobile and web. The core challenge:{' '}
        <strong>making a filing that carries legal consequence feel manageable to someone who has
        never seen the form before</strong> &mdash; without simplifying away the record that has to
        hold up years later.
      </>
    ),
  },
  problem: {
    image: 'case-tax-problem.png',
    heading: 'A form written for the tax code, not for the person filing it',
    body: 'IRS forms are written to be legally exact, not to be read. A non-resident owner opening one has to decide which forms apply to their entity, what each field is actually asking, and what happens after they send it — none of which the document answers. Most respond by hiring an accountant: expensive, slow, and starting from zero every year. Those who file alone work inside a static document that confirms nothing — no validation while typing, no saved progress, and no proof afterwards of what was submitted or when.',
    why: 'A mis-filed return is not a usability problem with a small, delayed cost. Penalties attach to the filing itself, and the burden of proving what was submitted lands on the business years later — when nobody remembers the answer or where it came from.',
  },
  solution: {
    image: 'case-tax-solution.png',
    heading: 'The dashboard shows what stage every filing is at',
    body: (
      <>
        The product opens on a dashboard of every entity and every filing tied to it &mdash;{' '}
        <strong>not started, in progress, submitted, accepted</strong> &mdash; because a tax return
        is rarely finished in one sitting and an owner needs to know exactly where they left off.
        The filing itself is broken into a guided, question-led flow that determines which forms
        apply before asking for a single figure, translates each field into plain language at the
        point it is asked, and validates as the owner types rather than after submission. Every
        completed filing produces a permanent record &mdash; what was submitted, when, and by whom
        &mdash; so the proof a business needs years later already exists.
      </>
    ),
    scenario:
      'My aim was that an owner filing alone, on a device in a different time zone from the deadline, could always answer two questions from the dashboard alone: what still needs to be done, and is anything at risk of being late.',
  },
};

const screens = [
  {
    title: 'Filings Dashboard',
    image: 'case-tax-dashboard.png',
    blocks: [
      {
        heading: 'Every entity, one screen',
        text: (
          <>
            Each business the owner has registered sits as its own card with its filing status
            visible without a click, so{' '}
            <strong>an owner managing several entities never has to open one to check on it.</strong>
          </>
        ),
      },
      {
        heading: 'Status as the primary language',
        text: (
          <>
            Not Started, In Progress, Submitted, and Accepted are the first thing named on every
            card, because{' '}
            <strong>the question an owner opens the app to answer is always &ldquo;where does this
            stand.&rdquo;</strong>
          </>
        ),
      },
      {
        heading: 'Deadlines surface before they are urgent',
        text: (
          <>
            Filings approaching their due date are called out on the dashboard itself, so{' '}
            <strong>a missed deadline requires ignoring a warning, not failing to notice
            one.</strong>
          </>
        ),
      },
    ],
  },
  {
    title: 'Entity Setup',
    image: 'case-tax-entity.png',
    blocks: [
      {
        heading: 'The right forms, decided for you',
        text: (
          <>
            A short set of questions about the entity &mdash; structure, ownership, activity
            &mdash; determines which IRS forms apply, so{' '}
            <strong>the owner is never asked to know something only an accountant would
            know.</strong>
          </>
        ),
      },
      {
        heading: 'One entity record, reused every year',
        text: (
          <>
            Ownership and structure details are saved to the entity, not the filing, which means{' '}
            <strong>next year&rsquo;s return starts from what is already true</strong> instead of a
            blank intake form.
          </>
        ),
      },
    ],
  },
  {
    title: 'Guided Filing Flow',
    image: 'case-tax-flow.png',
    blocks: [
      {
        heading: 'One question at a time',
        text: (
          <>
            The form is split into short, single-topic steps rather than one long document, so{' '}
            <strong>an owner always knows what the current step is actually asking</strong> before
            they answer it.
          </>
        ),
      },
      {
        heading: 'Plain language beside the legal term',
        text: (
          <>
            Every field carries a short explanation of what it means and why it is asked, so{' '}
            <strong>the IRS terminology is translated at the moment it would otherwise cause a
            wrong answer.</strong>
          </>
        ),
      },
      {
        heading: 'Validation while typing, not after submitting',
        text: (
          <>
            Figures and identifiers are checked against their expected format immediately, which{' '}
            <strong>surfaces a mistake while it is still cheap to fix</strong> instead of at
            submission.
          </>
        ),
      },
      {
        heading: 'Progress that survives leaving',
        text: (
          <>
            Every answer is saved as it is entered, so{' '}
            <strong>closing the app mid-filing costs nothing</strong> &mdash; the owner returns to
            exactly the step they left.
          </>
        ),
      },
    ],
  },
  {
    title: 'Review & Submit',
    image: 'case-tax-review.png',
    blocks: [
      {
        heading: 'The whole filing, in the same plain language',
        text: (
          <>
            Review restates every answer with its explanation still attached, so{' '}
            <strong>the last check before submission is read in the same language the filing was
            built in,</strong> not legal shorthand.
          </>
        ),
      },
      {
        heading: 'A record that outlives the filing',
        text: (
          <>
            Submission produces a timestamped confirmation with the exact data sent, so{' '}
            <strong>the proof a business needs if questioned years later already exists</strong> the
            moment the filing is accepted.
          </>
        ),
      },
    ],
  },
];

const styleGuide = {
  heading: 'A calm surface for a stressful task',
  body: (
    <>
      Deep navy and slate carry the structural chrome, keeping status and navigation quiet against
      dense text.{' '}
      <strong>A single confident blue is reserved for progress and the primary action</strong> so
      an owner mid-filing always knows what to press next, while a warm amber is spent narrowly on
      deadlines and required fields &mdash; the two things in a tax filing worth interrupting for.
      Inter carries the interface, chosen for how legibly it renders numbers, dates, and identifiers
      at small sizes.
    </>
  ),
  colors: [
    { name: 'Midnight Navy', hex: '#1B2440', text: '#ffffff' },
    { name: 'Slate', hex: '#3C4566', text: '#ffffff' },
    { name: 'White', hex: '#FFFFFF', text: '#22292f' },
    { name: 'Filing Amber', hex: '#E8A33D', text: '#22292f' },
    { name: 'Confidence Blue', hex: '#2D6FE8', text: '#ffffff' },
  ],
  scale: [
    '#1B2440',
    '#2A3355',
    '#3C4566',
    '#535C7C',
    '#6E7796',
    '#8D96B2',
    '#B0B7CC',
    '#D6DAE6',
    '#EEF0F5',
  ],
  typeface: {
    name: 'Inter',
    hex: '#1B2440',
    weights: ['Regular', 'Medium', 'Semi Bold', 'Bold', 'Extra Bold'],
  },
  image: 'case-tax-style.png',
};

const iaTree = {
  label: 'Tax Compliance Platform',
  children: [
    {
      label: 'Dashboard',
      children: [
        { label: 'Entities Overview' },
        { label: 'Filing Status per Entity (Not Started · In Progress · Submitted · Accepted)' },
        { label: 'Upcoming Deadlines' },
        { label: 'Notifications' },
      ],
    },
    {
      label: 'Entities',
      children: [
        { label: 'Entity List' },
        {
          label: 'Entity Profile',
          children: [
            { label: 'Structure & Ownership' },
            { label: 'Registered Address' },
            { label: 'Filing History' },
          ],
        },
        { label: 'Add New Entity' },
      ],
    },
    {
      label: 'Filing Flow',
      children: [
        { label: 'Form Determination (Q&A)' },
        { label: 'Guided Steps (one topic per step)' },
        { label: 'Document Upload' },
        { label: 'Review & Submit' },
        { label: 'Confirmation & Record' },
      ],
    },
    {
      label: 'Advisor Support',
      children: [
        { label: 'Ask a Tax Advisor' },
        { label: 'Flagged Items Requiring Review' },
      ],
    },
    {
      label: 'Settings',
      children: [
        { label: 'Profile & Verification' },
        { label: 'Notifications' },
        { label: 'Billing' },
        { label: 'Support' },
      ],
    },
  ],
};

function InformationArchitecture() {
  return (
    <>
      <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
        One Dashboard, One Guided Flow
      </h2>
      <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl [&>strong]:font-bold [&>strong]:text-black">
        <strong>Every entity funnels into the same filing flow</strong>, so learning to file once
        means knowing how to file for any entity added later. The dashboard is deliberately the
        entry point rather than a menu item &mdash;{' '}
        <strong>status lives at the top of the hierarchy</strong> because it is the fact an owner
        needs most often, and Advisor Support sits one level away from the flow itself so a stuck
        owner is never more than a tap from a human.
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
  heading: 'Filing is not a session',
  body: (
    <>
      The obvious way to design a tax form is as a flow: start, move forward, finish. Real filings
      do not behave like that. People stop to find a document, wait on an answer from a partner,
      and come back four days later on a different device &mdash; the pause is the normal state,
      not the failure state.
      <br />
      <br />
      Designing for the return rather than the run changed what the product had to hold onto: not
      only the answers, but the position, the reasoning behind each one, and the record of what
      was already correct.{' '}
      <strong>A guided flow is judged on how easily you can move forward. A filing is judged on
      how safely you can stop.</strong>
    </>
  ),
};

export default function TaxComplianceCase() {
  return (
    <CaseLayout
      project={project}
      sections={sections}
      screens={screens}
      screensLabel="App Screens"
      keyTakeaway={keyTakeaway}
      caseId="tax-compliance"
    />
  );
}
