import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import SectionMenu from '../components/SectionMenu';
import IATree from '../components/IATree';
import { ProblemSolution, ImagePlaceholder, StyleGuide } from '../components/CaseLayout';
import toolFigma from '../assets/icon-figma.svg';
import toolJira from '../assets/icon-jira.svg';
import toolNotion from '../assets/icon-notion.svg';

const caseSections = [
  { id: 'case-hero', label: 'Back to Top' },
  { id: 'intro', label: 'Project Intro' },
  { id: 'problem', label: 'Problem & Solution' },
  { id: 'goals', label: 'Project Goals' },
  { id: 'process', label: '4W+H Process' },
  { id: 'research', label: 'User Research' },
  { id: 'poll', label: 'The Poll' },
  { id: 'persona', label: 'User Persona' },
  { id: 'empathy', label: 'Empathy Map' },
  { id: 'flow', label: 'User Flow' },
  { id: 'ia', label: 'Information Architecture' },
  { id: 'style', label: 'Colors & Typography' },
  { id: 'screens', label: 'App Screens' },
];

const styleGuide = {
  heading: 'A restrained palette that keeps money legible',
  body: (
    <>
      Lochmara anchors the brand and every primary action, with Pattens Blue carrying the calm
      surfaces a portfolio screen needs when the market is not calm.{' '}
      <strong>Basic Green and Sporty Red are reserved exclusively for gains and losses</strong>{' '}
      &mdash; never for decoration &mdash; so a price movement is readable before a single number
      is parsed, and Metal Grey holds secondary data back from competing with it. Nunito Sans keeps
      long balances, tickers, and wallet addresses legible at small sizes.
    </>
  ),
  colors: [
    { name: 'Lochmara', hex: '#0083BF', text: '#ffffff' },
    { name: 'Pattens Blue', hex: '#E0F3FE', text: '#22292f' },
    { name: 'White', hex: '#FFFFFF', text: '#22292f' },
    { name: 'Basic Green', hex: '#2AA716', text: '#ffffff' },
    { name: 'Sporty Red', hex: '#FF1436', text: '#ffffff' },
    { name: 'Metal Grey', hex: '#737077', text: '#ffffff' },
  ],
  // Tint ramp built from Lochmara — surfaces, states, and chart fills.
  scale: [
    '#123B54',
    '#1B5478',
    '#236E9C',
    '#2E87BC',
    '#4C9ECC',
    '#74B6DA',
    '#9BCDE7',
    '#C2E1F2',
    '#E4F2FB',
  ],
  typeface: {
    name: 'Nunito Sans',
    hex: '#3D8DC4',
    weights: ['Regular', 'Medium', 'Semi Bold', 'Bold', 'Extra Bold'],
  },
  image: 'case-cryptowallet-style.png',
};

const appScreens = [
  {
    group: 'Onboarding & Authorization',
    title: 'Onboarding',
    image: 'case-cryptowallet-onboarding.png',
    blocks: [
      {
        heading: 'Onboarding',
        text: (
          <>
            <strong>Designed to onboard users with clarity and confidence,</strong> the experience
            introduces core wallet features through focused screens that explain value upfront,
            reduce uncertainty around fees and networks, and guide users step by step - helping
            them understand how the app works before taking their first action.
          </>
        ),
      },
    ],
  },
  {
    group: 'Onboarding & Authorization',
    title: 'Create Account',
    image: 'case-cryptowallet-signup.png',
    blocks: [
      {
        heading: 'Alternative Sign-Up Options',
        text: (
          <>
            Social sign-up options <strong>(Facebook, Google, Apple)</strong> provide faster
            registration paths and accommodate users who prefer not to create a password
            immediately.
          </>
        ),
      },
    ],
  },
  {
    group: 'Onboarding & Authorization',
    title: 'Login',
    image: 'case-cryptowallet-login.png',
    blocks: [
      {
        heading: 'Login Method Toggle',
        text: (
          <>
            Allows users to switch between <strong>phone number</strong> and{' '}
            <strong>email</strong> login, supporting different preferences while keeping the
            layout consistent and easy to understand.
          </>
        ),
      },
      {
        heading: 'Password Recovery',
        text: (
          <>
            A prominent <strong>&ldquo;Forgot your password?&rdquo;</strong> link provides a quick
            recovery path and reduces anxiety for returning users who can&rsquo;t log in.
          </>
        ),
      },
      {
        heading: 'Alternative Sign-In Options',
        text: (
          <>
            Social login options <strong>(Facebook, Google, Apple)</strong> offer faster access
            and reduce friction for users who prefer not to create or remember a password.
          </>
        ),
      },
    ],
  },
  {
    group: 'Verification',
    title: 'Country Code',
    image: 'case-cryptowallet-country.png',
    blocks: [
      {
        heading: 'Search Field',
        text: (
          <>
            A search input <strong>allows users to quickly find their country by typing</strong>{' '}
            reducing scrolling effort in a long list.
          </>
        ),
      },
      {
        heading: 'Location-Based Suggestion',
        text: (
          <>
            The <strong>Based on your location</strong> section surfaces a relevant country code
            first, enabling faster selection and minimizing friction during verification.
          </>
        ),
      },
      {
        heading: 'Country List',
        text: (
          <>
            <strong>An alphabetically ordered list with flags and dialing codes</strong> provides
            visual recognition and helps users confidently select the correct country.
          </>
        ),
      },
      {
        heading: 'Dial Code Visibility',
        text: (
          <>
            <strong>Displaying the country calling code alongside each country</strong> reduces
            ambiguity and prevents verification errors before moving to the next step.
          </>
        ),
      },
    ],
  },
  {
    group: 'Verification',
    title: 'Email Verification',
    image: 'case-cryptowallet-email.png',
    blocks: [
      {
        heading: 'Instruction Text',
        text: (
          <>
            Specifies that a <strong>4-digit verification code</strong> has been sent and displays
            the destination email, helping users confirm where to look and avoid confusion.
          </>
        ),
      },
      {
        heading: 'Code Input Fields',
        text: (
          <>
            <strong>Four individual input boxes</strong> visually represent the required code
            length and guide users through accurate entry.
          </>
        ),
      },
      {
        heading: 'Resend Timer',
        text: (
          <>
            <strong>A visible countdown communicates</strong> when the user can request a new
            code, setting clear expectations and preventing repeated requests.
          </>
        ),
      },
    ],
  },
  {
    group: 'Verification',
    title: 'Identity Verification',
    image: 'case-cryptowallet-verify.png',
    blocks: [
      {
        heading: 'Verification Explanation',
        text: (
          <>
            Supporting text explains <strong>why verification is required,</strong> how long it
            takes, and what it unlocks, helping users understand the value of completing the
            process.
          </>
        ),
      },
      {
        heading: 'Step Overview',
        text: (
          <>
            Verification is broken into <strong>two clear steps,</strong> reducing uncertainty and
            making the process feel structured and manageable.
          </>
        ),
      },
      {
        heading: 'Consent & Privacy Notice',
        text: (
          <>
            A consent statement at the bottom clarifies how personal data will be processed and
            links to the <strong>Privacy Policy</strong> supporting transparency and trust.
          </>
        ),
      },
    ],
  },
  {
    group: 'Verification',
    title: 'Document Verification',
    image: 'case-cryptowallet-document.png',
    blocks: [
      {
        heading: 'Country Selection',
        text: (
          <>
            The selected country is displayed at the top with <strong>a flag and label</strong>{' '}
            allowing users to confirm or change their country before proceeding.
          </>
        ),
      },
      {
        heading: 'Document Options',
        text: (
          <>
            Each document type <strong>(ID card, Passport, Driver&rsquo;s license)</strong> is
            presented as a selectable card with an icon, making the choices easy to scan and
            understand.
          </>
        ),
      },
      {
        heading: 'Scanning Guidance',
        text: (
          <>
            Each option includes a brief note (e.g., <strong>scan both sides, scan main page</strong>)
            to set clear expectations before the capture step begins.
          </>
        ),
      },
      {
        heading: 'Consent & Privacy Notice',
        text: (
          <>
            A consent message at the bottom reiterates data processing terms and links to the{' '}
            <strong>Privacy Policy</strong> supporting transparency during verification.
          </>
        ),
      },
    ],
  },
  {
    group: 'Security',
    title: 'PIN',
    image: 'case-cryptowallet-pin.png',
    blocks: [
      {
        heading: 'PIN Progress Indicator',
        text: (
          <>
            <strong>Filled and empty dots</strong> visually show how many digits have been
            entered, providing immediate feedback during input.
          </>
        ),
      },
      {
        heading: 'Numeric Keypad',
        text: (
          <>
            <strong>A large, well-spaced keypad</strong> supports fast and accurate PIN entry,
            optimized for one-handed use.
          </>
        ),
      },
      {
        heading: 'Biometric Login Option',
        text: (
          <>
            <strong>A biometric icon offers an alternative authentication method,</strong>{' '}
            enabling quicker access without entering the PIN manually.
          </>
        ),
      },
      {
        heading: 'PIN Recovery',
        text: (
          <>
            A visible <strong>&ldquo;Forgot your PIN code?&rdquo;</strong> link provides a clear
            recovery path and prevents lockout anxiety.
          </>
        ),
      },
    ],
  },
  {
    group: 'Core Screens',
    title: 'Main Screen',
    image: 'case-cryptowallet-main.png',
    blocks: [
      {
        heading: 'User Profile Summary',
        text: (
          <>
            The profile section displays the{' '}
            <strong>user&rsquo;s name, masked email, and avatar</strong> reinforcing account
            identity and ownership at a glance.
          </>
        ),
      },
      {
        heading: 'Wallets Section',
        text: (
          <>
            <strong>The Wallets section</strong> highlights the user&rsquo;s available accounts
            and encourages engagement with a short supporting description.{' '}
            <strong>Scrollable wallet cards</strong> surface key balances and performance metrics,
            allowing users to compare assets quickly without navigating away from the home screen.
          </>
        ),
      },
      {
        heading: 'Total Balance Card',
        text: (
          <>
            The primary wallet card emphasizes{' '}
            <strong>total balance with clear currency</strong> labeling and percentage change,
            helping users instantly understand overall portfolio performance.
          </>
        ),
      },
      {
        heading: 'Top PoS Tokens Section',
        text: (
          <>
            <strong>A dedicated section highlights popular proof-of-stake tokens,</strong> guiding
            users toward trending or high-interest assets.
          </>
        ),
      },
    ],
  },
  {
    group: 'Core Screens',
    title: 'Token Info',
    image: 'case-cryptowallet-token.png',
    blocks: [
      {
        heading: 'Refresh Action',
        text: (
          <>
            A refresh icon <strong>allows users to manually update price data</strong> reinforcing
            real-time accuracy and control.
          </>
        ),
      },
      {
        heading: 'Price Chart',
        text: (
          <>
            <strong>A candlestick chart visualizes price movement</strong> over time, supporting
            deeper market insight without leaving the screen.
          </>
        ),
      },
      {
        heading: 'Time Range Selector',
        text: (
          <>
            Quick-access filters{' '}
            <strong>allow users to adjust the chart timeframe and explore</strong> performance
            across different periods.
          </>
        ),
      },
      {
        heading: 'Performance Comparison',
        text: (
          <>
            A before-and-after value comparison highlights portfolio growth,{' '}
            <strong>helping users understand gains over the selected period.</strong>
          </>
        ),
      },
      {
        heading: 'Action Shortcuts',
        text: (
          <>
            Primary actions are grouped as icon buttons,{' '}
            <strong>enabling fast access to common asset interactions.</strong>
          </>
        ),
      },
    ],
  },
  {
    group: 'Core Screens',
    title: 'My Wallet',
    image: 'case-cryptowallet-wallet.png',
    blocks: [
      {
        heading: 'Wallet Actions',
        text: (
          <>
            Icons in the header{' '}
            <strong>provide quick access to additional wallet controls and settings</strong>{' '}
            without cluttering the main content area.
          </>
        ),
      },
      {
        heading: 'Primary Action Shortcuts',
        text: (
          <>
            A row of action buttons{' '}
            <strong>enables fast access to the most common wallet interactions</strong> directly
            from the portfolio view.
          </>
        ),
      },
      {
        heading: 'Portfolio / Transactions Tabs',
        text: (
          <>
            Tabs <strong>allow users to switch between asset holdings and transaction history</strong>{' '}
            while staying within the wallet context.
          </>
        ),
      },
      {
        heading: 'Network Filters',
        text: (
          <>
            Network filter chips{' '}
            <strong>help users narrow assets by blockchain and reduce list complexity.</strong>
          </>
        ),
      },
      {
        heading: 'Asset List',
        text: (
          <>
            Each asset row displays the token icon, name, current price, percentage change, and
            held amount, <strong>enabling easy comparison across assets.</strong>
          </>
        ),
      },
    ],
  },
  {
    group: 'Transactions',
    title: 'Transaction Details',
    image: 'case-cryptowallet-transaction.png',
    blocks: [
      {
        heading: 'Transaction Status',
        text: (
          <>
            A prominent <strong>Success</strong> badge communicates the final state of the
            transaction at a glance, reducing uncertainty.
          </>
        ),
      },
      {
        heading: 'Transaction Amount',
        text: (
          <>
            <strong>The amount of crypto</strong> involved is displayed prominently, reinforcing
            the primary outcome of the transaction.
          </>
        ),
      },
      {
        heading: 'Overview Section',
        text: (
          <>
            A structured Overview section organizes{' '}
            <strong>key transaction information into labeled rows for easy scanning.</strong>
          </>
        ),
      },
      {
        heading: 'Timeline',
        text: (
          <>
            A visual <strong>Timeline</strong> shows each stage of the transaction process in
            chronological order, <strong>confirming successful completion step by step.</strong>
          </>
        ),
      },
    ],
  },
  {
    group: 'Transactions',
    title: 'Send',
    image: 'case-cryptowallet-send.png',
    blocks: [
      {
        heading: 'Asset Selector',
        text: (
          <>
            An asset dropdown at the top{' '}
            <strong>allows users to confirm or change the cryptocurrency</strong> being sent
            before entering details.
          </>
        ),
      },
      {
        heading: 'Balance Display',
        text: (
          <>
            The available balance is shown in both crypto and fiat value,{' '}
            <strong>helping users understand how much they can send.</strong>
          </>
        ),
      },
      {
        heading: 'Amount Input',
        text: (
          <>
            A dedicated Amount field <strong>lets users enter the crypto quantity</strong>{' '}
            supporting precise control over the transfer.
          </>
        ),
      },
      {
        heading: 'Send by QR Code Action',
        text: (
          <>
            A visible <strong>QR code option enables fast and accurate address input</strong>{' '}
            reducing the risk of manual entry errors. A dedicated action button reinforces{' '}
            <strong>QR-based sending as a supported and safe input method.</strong>
          </>
        ),
      },
    ],
  },
  {
    group: 'Transactions',
    title: 'Swap',
    image: 'case-cryptowallet-swap.png',
    blocks: [
      {
        heading: 'Selling Section',
        text: (
          <>
            The Selling card shows the selected asset, its ticker, and the amount being swapped,{' '}
            <strong>making it clear what the user is giving up.</strong> A Max value is displayed
            to communicate the maximum amount available for swapping,{' '}
            <strong>helping prevent over-entry.</strong>
          </>
        ),
      },
      {
        heading: 'Asset Switch Control',
        text: (
          <>
            A central swap icon{' '}
            <strong>allows users to quickly reverse the selling and buying assets</strong> without
            re-entering values.
          </>
        ),
      },
      {
        heading: 'Buying Section',
        text: (
          <>
            The Buying card displays the target asset and the estimated amount the user will
            receive, <strong>providing immediate clarity on the swap outcome.</strong>
          </>
        ),
      },
      {
        heading: 'Exchange Rate & Fee',
        text: (
          <>
            The current exchange rate is shown in both crypto and approximate fiat value,{' '}
            <strong>supporting transparency before confirmation.</strong> A dedicated fee line
            clearly states the cost of the swap,{' '}
            <strong>reducing uncertainty around hidden charges.</strong>
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
        <div className="flex flex-col gap-1">
          <p className="font-grotesk text-sm text-[#6b6a67] uppercase tracking-wide">
            {screen.group}
          </p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            {screen.title}
          </h2>
        </div>
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
              <p className="font-grotesk text-base text-[#393939] leading-relaxed [&_strong]:font-bold [&_strong]:text-[#288fd6]">
                {block.text}
              </p>
            </div>
          ))}
        </div>
        <ImagePlaceholder
          filename={screen.image}
          alt={`${screen.title} screen`}
          className="w-full aspect-square"
        />
      </div>
    </>
  );
}

const projectGoals = [
  {
    title: 'Keep Flows Short & Predictable',
    text: 'Standardize action patterns (input → review → confirm → status → receipt) across the app for a consistent experience.',
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" strokeLinejoin="round" />,
  },
  {
    title: 'Build Trust Through Transparency',
    text: 'Explain verification and security steps clearly, showing progress states and why each step is needed.',
    icon: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2.5" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <path d="M12 14v3M10.6 14.8h2.2a.9.9 0 0 1 0 1.8h-2.2a.9.9 0 0 0 0 1.8H13" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Make Performance Understandable',
    text: 'Turn complex portfolios into readable insights: value changes, asset contribution, and time-based charts.',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 16v-3M11 16v-5M15 16v-2" strokeLinecap="round" />
        <path d="m7 10 4-3 3 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Support Smarter Decisions',
    text: 'Provide market views, watchlists, and quick token comparisons to help users decide what to buy or swap.',
    icon: (
      <>
        <path d="M12 4.5a3 3 0 0 0-5.6 1.4A3 3 0 0 0 4.5 11a3 3 0 0 0 1 4.6A3 3 0 0 0 12 19.5z" strokeLinejoin="round" />
        <path d="M12 4.5a3 3 0 0 1 5.6 1.4A3 3 0 0 1 19.5 11a3 3 0 0 1-1 4.6A3 3 0 0 1 12 19.5z" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Prevent Costly Mistakes',
    text: 'Minimize wrong-network transfers with guided selection, confirmations, and validation before users submit transactions.',
    icon: (
      <>
        <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3z" strokeLinejoin="round" />
        <path d="M12 8v5M12 16.2v.1" strokeLinecap="round" />
      </>
    ),
  },
];

const processColumns = [
  {
    heading: 'What Problem?',
    body: 'Core actions (send/buy/swap) feel risky and unclear; cluttered navigation and hidden fees make users hesitate.',
  },
  {
    heading: 'Why?',
    body: 'Most wallets assume expert knowledge — causing confusion over networks, fees, and status, plus fear of costly mistakes.',
  },
  {
    heading: 'Who is the target?',
    highlight: true,
    body: 'New-to-intermediate users who want guided, safe-by-default flows; mobile-first investors; security-conscious users.',
  },
  {
    heading: 'What’s the Goal?',
    body: 'A clear, trustworthy mobile wallet that simplifies navigation, cuts errors, and makes every transaction easy to understand.',
  },
  {
    heading: 'How?',
    body: 'A consistent flow (input → review → confirm → status) with visible fees/ETA, guided network choice, and reassuring microcopy.',
  },
];

const researchStats = [
  {
    pct: 60,
    color: '#e8964a',
    text: (
      <>
        Users hesitate when <strong>fees are unclear</strong> — a transparent breakdown reduces
        drop-offs before confirmation.
      </>
    ),
  },
  {
    pct: 78,
    color: '#288fd6',
    text: (
      <>
        Clear <strong>status updates + verification steps</strong> increase trust and help users
        feel safe completing transactions.
      </>
    ),
  },
  {
    pct: 45,
    color: '#6d3fc4',
    text: (
      <>
        Choosing the <strong>right network</strong> (ERC20 / TRC20 / BEP20) is a top source of
        errors - users want guidance and warnings.
      </>
    ),
  },
];

const empathyQuadrants = [
  {
    label: 'Says',
    color: '#288fd6',
    items: [
      '“Is this the right network for this transfer?”',
      '“Why are the fees different every time?”',
      '“I want to double-check before confirming.”',
      '“I wish this explained what’s happening.”',
    ],
  },
  {
    label: 'Thinks',
    color: '#e8964a',
    items: [
      'Could one wrong choice cause me to lose funds?',
      'Is this transaction secure and irreversible?',
      'Why isn’t this step clearer?',
      'I want everything in one app, without guessing.',
    ],
  },
  {
    label: 'Does',
    color: '#6d3fc4',
    items: [
      'Compares fees and networks before sending.',
      'Reviews transaction details multiple times.',
      'Tracks portfolio value and recent activity daily.',
      'Avoids sending until the app feels clear and safe.',
    ],
  },
  {
    label: 'Feels',
    color: '#ee5f9b',
    items: [
      'Anxious when fees or networks aren’t explained.',
      'Frustrated by unclear confirmation steps.',
      'Relieved when progress and status are visible.',
      'Confident when the app guides each step clearly.',
    ],
  },
];

// Builds a linear chain of nodes, optionally ending in a branching tail.
const chain = (labels, tail) =>
  labels.reduceRight(
    (children, label) => [{ label, children }],
    tail,
  )[0];

const userFlows = [
  {
    number: '01',
    title: 'Buy',
    description:
      'A single, uninterrupted path from browsing a token to a confirmed purchase — with a review step before any money moves.',
    tree: chain(
      [
        'Home',
        'My Wallet',
        'Portfolio',
        'Token List',
        'Token Details',
        'Buy',
        'Select payment method',
        'Enter amount',
        'Review',
        'Confirm & Pay',
        'Transaction Details (success)',
      ],
      undefined,
    ),
  },
  {
    number: '02',
    title: 'Trade',
    description:
      'Trading splits into placing an order and monitoring it. Both live on one screen, so users never lose track of what is still open.',
    tree: chain(
      ['Home', 'My Wallet', 'Portfolio', 'Token List', 'Token Details', 'Trade'],
      [
        chain(['Place order', 'Order type (Market / Limit)', 'Order form', 'Review', 'Confirm', 'Order placed (success)']),
        {
          label: 'Views',
          children: [
            { label: 'Open orders (active / pending, cancelable)' },
            chain(['Order history (filled / cancelled)', 'Order', 'Review / details']),
          ],
        },
      ],
    ),
  },
];

const iaTree = {
  label: 'CryptoWallet',
  children: [
    {
      label: 'Onboarding',
      children: [
        { label: 'Sign Up', children: [{ label: 'Account Verification' }, { label: 'Home' }] },
        { label: 'Login', children: [{ label: 'Home' }] },
      ],
    },
    {
      label: 'Insight',
      children: [
        {
          label: 'Markets Overview',
          children: [
            { label: 'Search' },
            { label: 'Filters' },
            { label: 'Coin List', children: [{ label: 'Coin Details' }] },
            { label: 'Top Gainers' },
            { label: 'Top Losers' },
          ],
        },
      ],
    },
    {
      label: 'Analytics',
      children: [
        { label: 'Top Gainers / Losers', children: [{ label: 'Coin Details' }] },
        { label: 'Alerts', children: [{ label: 'Create alert' }] },
      ],
    },
    {
      label: 'My Wallet',
      children: [
        {
          label: 'Portfolio',
          children: [
            {
              label: 'Token List',
              children: [
                {
                  label: 'Token Details',
                  children: [
                    { label: 'Receive' },
                    { label: 'Buy' },
                    { label: 'Trade' },
                    { label: 'Send' },
                    { label: 'Swap' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Transaction',
          children: [
            { label: 'Transaction List', children: [{ label: 'Transaction Details' }] },
          ],
        },
      ],
    },
    {
      label: 'Account',
      children: [
        { label: 'Profile', children: [{ label: 'Personal Info' }] },
        {
          label: 'Security',
          children: [
            { label: 'Change password' },
            { label: 'Change PIN' },
            { label: 'Biometrics' },
            { label: '2FA' },
          ],
        },
        { label: 'Verification status', children: [{ label: 'KYC status' }] },
        { label: 'Payment methods', children: [{ label: 'Cards' }] },
        { label: 'Privacy' },
        { label: 'Support' },
        {
          label: 'App settings',
          children: [{ label: 'Language' }, { label: 'Currency' }, { label: 'Theme' }],
        },
        { label: 'About' },
        { label: 'Logout' },
      ],
    },
  ],
};

function FlowCard({ flow }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-baseline gap-4">
        <span className="font-mono-bold text-base text-[#288fd6]">{flow.number}</span>
        <h3 className="font-grotesk font-medium text-2xl sm:text-3xl text-black tracking-tight">
          {flow.title}
        </h3>
      </div>
      <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl">
        {flow.description}
      </p>
      <div className="bg-[#f7f7f7] rounded-[24px] p-5 overflow-x-auto">
        <IATree data={flow.tree} expandAll depthGap={36} />
        <p className="font-grotesk text-sm text-[#b3b2af] mt-4">
          Scroll sideways to follow the full path. Click a node to collapse or expand its branch.
        </p>
      </div>
    </div>
  );
}

function Donut({ segments, hollowSize = '32%' }) {
  const options = {
    colors: segments.map((s) => s.color),
    chart: { type: 'radialBar', sparkline: { enabled: true } },
    plotOptions: {
      radialBar: {
        track: { background: '#ececec' },
        dataLabels: { show: false },
        hollow: { margin: 0, size: hollowSize },
      },
    },
    grid: { show: false, padding: { left: 2, right: 2, top: -23, bottom: -20 } },
    labels: segments.map((s) => s.label),
    legend: { show: false },
    tooltip: { enabled: true, x: { show: false } },
    yaxis: { show: false, labels: { formatter: (value) => `${value}%` } },
  };

  return (
    <Chart
      options={options}
      series={segments.map((s) => s.value)}
      type="radialBar"
      height={350}
      width="100%"
    />
  );
}

function DonutStat({ pct, color }) {
  const r = 60;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 160 160" className="w-40 h-40">
      <circle cx="80" cy="80" r={r} fill="none" stroke="#e3e3e3" strokeWidth="26" />
      <circle
        cx="80"
        cy="80"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="26"
        strokeLinecap="round"
        strokeDasharray={`${(pct / 100) * c} ${c}`}
        transform="rotate(-90 80 80)"
      />
      <text
        x="80"
        y="80"
        textAnchor="middle"
        dominantBaseline="central"
        className="font-grotesk"
        fontSize="30"
        fontWeight="700"
        fill="#000"
      >
        {pct}%
      </text>
    </svg>
  );
}

const project = {
  name: 'CryptoWallet',
  title: 'CryptoWallet: Mobile Crypto App',
  tags: ['Fintech', 'Mobile', 'iOS & Android', 'Crypto'],
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
      text: 'Crypto apps overwhelm first-time users and bury the actions that matter.',
    },
    {
      label: 'MY ROLE',
      text: 'Product Designer — flows, mobile UI, and interaction design.',
    },
    {
      label: 'KEY DECISION',
      text: 'To be written — the core design decision of the case.',
    },
  ],
  outcome: { value: 'TBD', label: 'Key outcome metric' },
  intro: {
    heading: 'Everyday crypto, made legible.',
    body: (
      <>
        I led the UX/UI redesign of <strong>a mobile crypto wallet</strong> built to make everyday
        crypto &mdash; <strong>buying, selling, exchanging, portfolio tracking, and transaction
        management</strong> &mdash; faster, clearer, and more trustworthy.
        <br />
        <br />
        The redesign simplified <strong>complex financial flows,</strong> sharpened navigation and
        visual hierarchy, and <strong>removed friction at the riskiest moments:</strong> selecting
        assets, confirming rates, and reviewing transaction details. I built a consistent UI system
        of reusable components and states so the product scales as new coins and features are
        added. <strong>The core challenge was</strong> making high-stakes financial actions feel
        safe and simple &mdash; without dumbing down what users need to trust them.
      </>
    ),
  },
  problem: {
    image: 'case-cryptowallet-problem.png',
    heading: 'High-stakes actions with too little guidance',
    body: 'Everyday crypto asks users to make risky decisions with little support. Onboarding, verification, and security steps are unclear — especially when the app requests personal data (complexity). Choosing the right network and understanding fees (ERC20 / TRC20 / BEP20, confirmations, minimum deposit) feels confusing and risky, where one wrong choice can lose funds (trust). Portfolio performance is hard to read at a glance (clarity). And core actions like Send and Swap involve too many decisions, so users fear mistakes and abandon flows before confirming (friction).',
    why: 'In a wallet, a moment of confusion can mean lost money — and lost money means lost trust for good. If users don’t feel in control at the decisive step, they won’t complete it, and they won’t come back.',
  },
  solution: {
    image: 'case-cryptowallet-solution.png',
    heading: 'Guidance and confidence at every decisive step',
    body: 'A guided network selection spells out the rules — confirmations, minimum deposit, ETA, and fee previews — so users choose correctly with confidence (guidance). A transparent verification flow with step-by-step explanations, progress states, and secure access (PIN plus biometrics) builds trust without overwhelm (security). A clean portfolio view with clear value breakdowns, asset-level charts, and quick actions makes performance instantly readable (understanding). And streamlined Send / Swap flows add a review step, validation to prevent errors, and a real-time transaction timeline — received, placed, executed, success (confidence).',
    scenario: 'My aim was that a user could send, swap, or check their portfolio and always know exactly what would happen before they confirmed — turning the scariest moments in crypto into the most reassuring.',
  },
};

export default function CryptoWalletCase() {
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
            filename="case-cryptowallet.png"
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
          <ImagePlaceholder filename="case-cryptowallet-intro.png" className="min-h-[420px]" />
        </section>

        {/* Problem & solution */}
        <ProblemSolution problem={project.problem} solution={project.solution} />

        {/* Project goals */}
        <section id="goals" className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Project Goals</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectGoals.map((goal, i) => (
              <div
                key={goal.title}
                className={`rounded-[24px] p-5 flex flex-col gap-4 ${ i === 1 ? 'bg-[#288fd6] text-white' : 'bg-[#f7f7f7]' }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={i === 1 ? 'currentColor' : '#288fd6'}
                  strokeWidth="1.8"
                  className="w-8 h-8"
                >
                  {goal.icon}
                </svg>
                <p className={`font-grotesk font-bold text-base ${i === 1 ? '' : 'text-black'}`}>
                  {goal.title}
                </p>
                <p
                  className={`font-grotesk text-base leading-relaxed ${
                    i === 1 ? 'text-white/90' : 'text-[#393939]'
                  }`}
                >
                  {goal.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4W+H process */}
        <section id="process" className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">4W+H Process</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            4W+H Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {processColumns.map((col) => (
              <div
                key={col.heading}
                className={`rounded-[24px] p-5 flex flex-col gap-4 ${ col.highlight ? 'bg-[#e9f3fa]' : 'bg-[#f7f7f7]' }`}
              >
                <p className="font-grotesk font-medium text-lg text-black">{col.heading}</p>
                <span className="h-0.5 w-full bg-[#288fd6] rounded-full" />
                {col.body ? (
                  <p className="font-grotesk text-base text-[#393939] leading-relaxed">{col.body}</p>
                ) : (
                  <ul className="flex flex-col gap-2">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="font-grotesk text-base text-[#393939] leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-1 break-words"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* User research */}
        <section id="research" className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">User Research</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight max-w-3xl leading-snug">
            To validate the redesign direction, I ran user research through interviews and polls.
          </h2>
          <p className="font-grotesk text-base text-[#6b6a67] leading-relaxed max-w-2xl">
            Insights highlighted recurring friction around network choice, fee transparency, and
            transaction confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {researchStats.map((stat) => (
              <div key={stat.pct} className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col items-center gap-5">
                <DonutStat pct={stat.pct} color={stat.color} />
                <p className="font-grotesk text-base text-[#393939] leading-relaxed text-center [&>strong]:font-bold [&>strong]:text-black">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The poll */}
        <section id="poll" className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">The Poll</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-4">
              <p className="font-grotesk font-bold text-base text-black">
                Most Important Crypto Wallet Feature
              </p>
              <p className="font-grotesk text-base text-[#6b6a67]">
                What matters most when choosing a crypto wallet?
              </p>
              <div className="flex justify-center">
                <Donut
                  hollowSize="12%"
                  segments={[
                    { value: 35, color: '#288fd6', label: 'Security & self-custody' },
                    { value: 25, color: '#e8964a', label: 'Low network fees' },
                    { value: 20, color: '#6d3fc4', label: 'Multi-chain support' },
                    { value: 12, color: '#ee5f9b', label: 'Fast transfers / confirmations' },
                    { value: 8, color: '#2bb8a3', label: 'Simple UI & onboarding' },
                  ]}
                />
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  ['#288fd6', 'Security & self-custody'],
                  ['#e8964a', 'Low network fees'],
                  ['#6d3fc4', 'Multi-chain support'],
                  ['#ee5f9b', 'Fast transfers / confirmations'],
                  ['#2bb8a3', 'Simple UI & onboarding'],
                ].map(([color, label]) => (
                  <li key={label} className="flex items-center gap-3 font-grotesk text-base text-black">
                    <span className="w-3.5 h-3.5 rounded-md shrink-0" style={{ backgroundColor: color }} />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-4">
              <p className="font-grotesk font-bold text-base text-black">
                Interest in All-in-One Crypto Wallet
              </p>
              <p className="font-grotesk text-base text-[#6b6a67]">
                Would you use one app to store, swap, and track all your tokens across networks?
              </p>
              <div className="flex justify-center">
                <Donut
                  segments={[
                    { value: 70, color: '#288fd6', label: 'Yes' },
                    { value: 18, color: '#e8964a', label: 'No' },
                    { value: 12, color: '#6d3fc4', label: 'Not sure' },
                  ]}
                />
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  ['#288fd6', 'Yes'],
                  ['#e8964a', 'No'],
                  ['#6d3fc4', 'Not sure'],
                ].map(([color, label]) => (
                  <li key={label} className="flex items-center gap-3 font-grotesk text-base text-black">
                    <span className="w-3.5 h-3.5 rounded-md shrink-0" style={{ backgroundColor: color }} />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* User persona */}
        <section id="persona" className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">User Persona</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="flex flex-col gap-4">
              <ImagePlaceholder filename="persona-alex.png" className="aspect-square" />
              <h3 className="font-grotesk font-medium text-3xl text-[#288fd6] tracking-tight mt-2">
                Alex Carter
              </h3>
              <p className="font-grotesk font-bold text-base text-black">32, Product Manager</p>
              <p className="font-grotesk font-bold text-base text-black">Berlin, Germany</p>
              <p className="font-grotesk text-base text-[#393939] leading-relaxed">
                Alex actively uses crypto for investing and transfers but doesn&rsquo;t consider
                himself an expert. He checks prices daily, sends and swaps tokens regularly, and
                cares deeply about security. Alex wants confidence that every action is correct
                before confirming&mdash;without having to overthink networks, fees, or technical
                details.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-5">
              {[
                {
                  title: 'Motivations',
                  items: [
                    <>I want to <strong>send, swap,</strong> and <strong>buy crypto without fear of making irreversible mistakes.</strong></>,
                    <>I want <strong>clear explanations</strong> for fees, networks, and confirmation steps&mdash;not hidden logic.</>,
                    <>I want to <strong>feel in control and informed,</strong> especially during critical actions.</>,
                    <>I prefer <strong>predictable flows</strong> where I always know what happens next.</>,
                  ],
                },
                {
                  title: 'Goals',
                  items: [
                    <>Complete transactions <strong>quickly and confidently</strong> with clear review and confirmation steps.</>,
                    <>Track portfolio performance and value changes <strong>at a glance.</strong></>,
                    <>Use <strong>one app</strong> for storage, transfers, swaps, and monitoring across networks.</>,
                    <><strong>Understand transaction status</strong> (pending &rarr; confirmed &rarr; completed) without guessing.</>,
                  ],
                },
                {
                  title: 'Frustrations',
                  items: [
                    <>Wallets that <strong>assume advanced crypto knowledge</strong> and hide important details.</>,
                    <>Confusing network choices (ERC20 / TRC20 / BEP20) with <strong>no guidance or warnings.</strong></>,
                    <><strong>Unclear fees and delays</strong> that make transactions feel risky.</>,
                    <><strong>Overloaded interfaces</strong> that add friction during high-stress moments like sending or swapping.</>,
                  ],
                },
              ].map((group) => (
                <div key={group.title} className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-3">
                  <p className="font-grotesk font-bold text-base text-black">{group.title}</p>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item, i) => (
                      <li
                        key={i}
                        className="font-grotesk text-base text-[#393939] leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-1 break-words [&>strong]:font-bold [&>strong]:text-[#288fd6]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Empathy map */}
        <section id="empathy" className="pb-20 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Empathy Map</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            Empathy Map
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {empathyQuadrants.map((q) => (
              <div key={q.label} className="bg-[#f7f7f7] rounded-[24px] p-5 flex flex-col gap-4">
                <span
                  className="self-start px-5 py-2 rounded-full font-grotesk font-bold text-lg text-white"
                  style={{ backgroundColor: q.color }}
                >
                  {q.label}
                </span>
                <ul className="flex flex-col gap-2.5">
                  {q.items.map((item) => (
                    <li
                      key={item}
                      className="font-grotesk text-base text-[#393939] leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-1 break-words"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* User flow */}
        <section id="flow" className="pb-24 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">User Flow</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            Intuitive Navigation, Streamlined Flow
          </h2>
          <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl [&>strong]:font-bold [&>strong]:text-black">
            The two highest-stakes journeys follow the same spine &mdash;{' '}
            <strong>input &rarr; review &rarr; confirm &rarr; status</strong> &mdash; so the moment
            before money moves always looks and behaves the same, no matter which action the user
            started.
          </p>
          <div className="flex flex-col gap-12">
            {userFlows.map((flow) => (
              <FlowCard key={flow.title} flow={flow} />
            ))}
          </div>
        </section>

        {/* Information architecture */}
        <section id="ia" className="pb-24 flex flex-col gap-6">
          <p className="font-mono-bold text-base text-black">Information Architecture</p>
          <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
            One Tab Bar, Four Clear Jobs
          </h2>
          <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl [&>strong]:font-bold [&>strong]:text-black">
            Both entry points &mdash; <strong>Sign Up and Login</strong> &mdash; land on the same
            Home, so the app has a single mental starting point. From there the tab bar splits into
            four jobs: <strong>Insight</strong> to see the market,{' '}
            <strong>Analytics</strong> to track movement and set alerts,{' '}
            <strong>My Wallet</strong> to hold and move assets, and <strong>Account</strong> for
            identity, security, and settings. Transactional depth stays inside My Wallet; everything
            administrative stays inside Account.
          </p>
          <div className="bg-[#f7f7f7] rounded-[24px] p-5 overflow-x-auto">
            <IATree data={iaTree} defaultOpenIndex={3} />
            <p className="font-grotesk text-sm text-[#b3b2af] mt-4">
              Click a node to expand or collapse its branch.
            </p>
          </div>
        </section>

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
