import CaseLayout from '../components/CaseLayout';
import toolFigma from '../assets/icon-figma.svg';
import toolJira from '../assets/icon-jira.svg';
import toolNotion from '../assets/icon-notion.svg';

const project = {
  name: 'Enterprise CRM',
  title: 'Enterprise CRM: B2B Operations Platform',
  heroImage: 'case-crm.png',
  tags: ['B2B SaaS', 'Web App', 'Data-Dense UI', 'Marketing Automation'],
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
      text: 'Client data, sales operations, inventory, and marketing lived in separate places at large-company scale.',
    },
    {
      label: 'MY ROLE',
      text: 'Product Designer — UI redesign across the full sales cycle, marketing automation, and reporting.',
    },
    {
      label: 'KEY DECISION',
      text: 'To be written — the core design decision of the case.',
    },
  ],
  outcome: { value: 'TBD', label: 'Key outcome metric' },
  intro: {
    heading: 'About',
    image: 'case-crm-intro.png',
    body: (
      <>
        <strong>Enterprise CRM</strong> is a B2B operations platform designed to{' '}
        <strong>centralize client information,</strong> streamline sales operations, and optimize
        inventory and marketing workflows for a large-scale company. The UI was{' '}
        <strong>redesigned</strong> to make complex processes more{' '}
        <strong>intuitive and efficient</strong> supporting the full sales cycle from lead
        generation to deal closure and aligning marketing automation with sales data. The system
        provides <strong>time visibility</strong> into stock levels and order statuses, while{' '}
        <strong>Power BI dashboards</strong> and custom reports enable better decision-making and
        support long-term growth.
      </>
    ),
  },
};

const screens = [
  {
    title: 'Dashboard',
    image: 'case-crm-dashboard.png',
    blocks: [
      {
        heading: 'At-a-glance KPIs',
        text: (
          <>
            <strong>The top cards surface what drives revenue today</strong> so the user knows
            exactly where to act first. Counts update live as work gets done. Less noise, more
            focus, faster wins for the user.
          </>
        ),
      },
      {
        heading: 'Open Tasks table',
        text: (
          <>
            <strong>Every follow-up is lined up with deadlines and urgency</strong> so the user
            never misses a commitment. The list groups by &ldquo;Related To&rdquo; and contact,
            keeping context tight.
          </>
        ),
      },
      {
        heading: 'Meetings widget',
        text: (
          <>
            <strong>Today&rsquo;s schedule sits in the dashboard.</strong> Sync keeps invites and
            reminders in step with the user&rsquo;s calendar. Fewer no-shows, better day planning.
          </>
        ),
      },
      {
        heading: 'Today’s Leads',
        text: (
          <>
            <strong>Fresh leads land in one grid</strong> with email/phone and source, so the user
            calls the best prospects first. Ownership is clear, preventing double touches.
          </>
        ),
      },
      {
        heading: 'Deals Closing This Month',
        text: (
          <>
            <strong>The pipeline section highlights revenue on the line now.</strong> The user spots
            stuck stages and pulls closing actions forward. Forecasts get tighter because the right
            deals get attention.
          </>
        ),
      },
    ],
  },
  {
    title: 'New Campaign',
    image: 'case-crm-new-campaign.png',
    blocks: [
      {
        heading: 'Campaign info',
        text: (
          <>
            The builder lets the user name a campaign, pick the brand, and add channels like{' '}
            <strong>Google Ads</strong> and <strong>Instagram.</strong> Multi-channel tags make it
            clear where the campaign will run. The description fields capture the offer and creative
            angle so the whole team stays aligned.
          </>
        ),
      },
      {
        heading: 'Geographical area',
        text: (
          <>
            <strong>The user targets by region and country with flag selectors to avoid wasted spend.</strong>{' '}
            Geo targeting syncs with language and currency presets automatically. Compliance rules
            and delivery windows adjust to the selected market.
          </>
        ),
      },
      {
        heading: 'Time manage',
        text: (
          <>
            <strong>Every follow-up is lined up with deadlines and urgency</strong> so the user
            never misses a commitment. The list groups by &ldquo;Related To&rdquo; and contact,
            keeping context tight.
          </>
        ),
      },
      {
        heading: 'Rule-based automations',
        text: (
          <>
            <strong>The user adds new rules in one click to codify playbooks.</strong> Automation
            reacts in real time, even when the team is offline.
          </>
        ),
      },
    ],
  },
  {
    title: 'Campaigns',
    image: 'case-crm-campaigns.png',
    blocks: [
      {
        heading: 'Pro filters that find revenue fast',
        text: (
          <>
            Filters by <strong>Triggered by, Status, Tags, Creators, Sort, Period</strong> let the
            user slice campaigns in seconds. The user jumps straight to what&rsquo;s performing in
            Feb 2024 or who launched it last week.
          </>
        ),
      },
      {
        heading: 'Share & Export for stakeholders',
        text: (
          <>
            <strong>The user sends a clean share link or exports CSV/PDF for managers and field teams.</strong>{' '}
            Decisions happen faster because everyone sees the same truth.
          </>
        ),
      },
      {
        heading: 'One-card control for each campaign',
        text: (
          <>
            <strong>Every campaign tile packs a live Running toggle, channel badges, and a quick menu.</strong>{' '}
            The user can pause, duplicate, or edit without leaving the list. Control stays where the
            user needs it&mdash;right at the point of decision.
          </>
        ),
      },
      {
        heading: 'Conversion story at a glance',
        text: (
          <>
            <strong>Delivered, Opened, Clicked, Converted, ROI, Budget, Leads Generated, and Status tell the full journey.</strong>{' '}
            The user spots leaks instantly&mdash;great opens but weak clicks, or solid clicks with
            low conversions. Fix the weakest link and watch ROI climb.
          </>
        ),
      },
    ],
  },
];

export default function CrmPlatformCase() {
  return <CaseLayout project={project} screens={screens} screensLabel="Product Screens" />;
}
