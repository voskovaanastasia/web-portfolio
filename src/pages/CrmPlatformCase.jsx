import CaseLayout, { StyleGuide } from '../components/CaseLayout';
import IATree from '../components/IATree';
import toolFigma from '../assets/icon-figma.svg';
import toolJira from '../assets/icon-jira.svg';
import toolNotion from '../assets/icon-notion.svg';

const project = {
  name: 'Enterprise CRM',
  title: 'Enterprise CRM: B2B Operations Platform',
  heroImage: 'case-crm.png',
  tags: ['B2B SaaS', 'Web App', 'Data-Dense UI', 'Marketing Automation'],
  meta: [
    { label: 'Role', value: 'Product Designer' },
    { label: 'Service', value: 'UX/UI Design' },
    { label: 'My Team', value: 'Product Manager, Developers' },
    { label: 'Timeline', value: '7 months' },
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
      text: 'Search, quick create, notifications, and calendar were lifted out of the module tree entirely — one action away from any screen.',
    },
  ],
  intro: {
    heading: 'One source of truth for the whole sales cycle.',
    image: 'case-crm-intro.png',
    body: (
      <>
        <strong>Enterprise CRM</strong> is a B2B operations platform that{' '}
        <strong>centralizes client information</strong> and streamlines sales, inventory, and
        marketing workflows for a large-scale company. I redesigned the UI to make complex
        processes intuitive across <strong>the full sales cycle</strong> &mdash; from lead
        generation to deal closure &mdash; while aligning marketing automation with sales data and
        giving teams real-time visibility into stock levels and order statuses, supported by{' '}
        <strong>Power BI dashboards</strong> and custom reports.{' '}
        <strong>The core challenge was</strong> making an enterprise system that spans many teams
        and huge amounts of data feel focused and usable for each person&rsquo;s daily job.
      </>
    ),
  },
  problem: {
    image: 'case-crm-problem.png',
    heading: 'Enterprise data that’s everywhere and nowhere',
    body: 'In a large company, client information, sales activity, inventory, and marketing all live in different tools and formats, so teams work from partial, out-of-date pictures. Complex workflows are buried in dense screens, the sales cycle isn’t visible end to end, stock and order status are hard to track in real time, and reporting is disconnected from the work — making confident, timely decisions difficult.',
    why: 'When sales, inventory, and marketing can’t see the same truth, deals slip, stock decisions lag, and leadership steers on stale data — costing revenue and slowing growth at scale.',
  },
  solution: {
    image: 'case-crm-solution.png',
    heading: 'A centralized, role-aware operations platform',
    body: 'I redesigned the CRM around one connected source of truth. Client data, the sales pipeline, inventory, and marketing share a consistent, learnable interface; the full sales cycle is visible from lead to closed deal; real-time stock and order statuses surface where teams need them; and marketing automation is aligned with live sales data. Power BI dashboards and custom reports turn that data into decisions, and a scalable design system keeps complex workflows clear as the company grows.',
    scenario: 'My aim was that each role — sales, operations, marketing, leadership — could open the CRM, immediately see the slice they need, act on it, and trust that everyone else is working from the same numbers.',
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
            <strong>The top cards surface what drives revenue today</strong> so a rep opening the CRM in the morning knows where to act first. Counts update live as work gets done.
          </>
        ),
      },
      {
        heading: 'Open Tasks table',
        text: (
          <>
            <strong>Every follow-up is lined up with deadlines and urgency</strong> so nothing slips between calls. The list groups by “Related To” and contact, keeping the context of each task attached to it.
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

// Shorthand for a run of leaf nodes — this tree has a lot of them.
const leaves = (...labels) => labels.map((label) => ({ label }));

const iaTree = {
  label: 'CRM Platform',
  children: [
    {
      label: 'Auth',
      children: [
        {
          label: 'Login',
          children: [{ label: '2FA / SSO', children: leaves('Home') }],
        },
        {
          label: 'Forgot password',
          children: [{ label: 'Reset link', children: leaves('Login') }],
        },
      ],
    },
    {
      label: 'Global Layer (persistent)',
      children: [
        {
          label: 'Global Search',
          children: leaves(
            'Leads', 'Contacts', 'Accounts', 'Deals', 'Products', 'Orders', 'Campaigns',
          ),
        },
        {
          label: 'Quick Create (+)',
          children: leaves(
            'Lead', 'Contact', 'Account', 'Deal', 'Task', 'Meeting', 'Campaign', 'Order',
          ),
        },
        {
          label: 'Notifications',
          children: leaves(
            'Mentions', 'Assignments', 'Approvals', 'Stock alerts', 'Campaign status',
          ),
        },
        { label: 'Calendar', children: leaves('Day', 'Week', 'Month') },
        { label: 'Notes' },
        { label: 'Settings', children: leaves('Admin & Setup') },
        { label: 'App Switcher' },
        {
          label: 'Profile',
          children: [
            {
              label: 'Preferences',
              children: leaves('Language', 'Currency', 'Timezone'),
            },
            { label: 'Logout' },
          ],
        },
      ],
    },
    {
      label: 'Home',
      children: [
        {
          label: 'Dashboard',
          children: [
            {
              label: 'KPI Strip',
              children: [
                {
                  label: 'Open Deals · Untouched Deals · Calls Today · Leads',
                  children: leaves('Drill-through to module'),
                },
              ],
            },
            {
              label: 'Open Tasks',
              children: [{ label: 'Task List', children: leaves('Task Details') }],
            },
            {
              label: 'Meetings',
              children: [
                {
                  label: "Today's Meetings",
                  children: leaves('Meeting Details', 'Empty state'),
                },
              ],
            },
            {
              label: 'Todays Leads',
              children: [{ label: 'Lead List', children: leaves('Lead Details') }],
            },
            {
              label: 'Deals Closing This Month',
              children: [{ label: 'Deal List', children: leaves('Deal Details') }],
            },
            {
              label: 'Inventory Alerts',
              children: leaves('Low stock', 'Delayed orders'),
            },
          ],
        },
        {
          label: 'Dashboard Management',
          children: [
            {
              label: 'Dashboard Switcher',
              children: leaves('My dashboards', 'Shared dashboards'),
            },
            {
              label: 'Builder',
              children: leaves('Add widget', 'Resize', 'Data source', 'Refresh'),
            },
            { label: 'Share', children: leaves('User', 'Team', 'Role') },
          ],
        },
      ],
    },
    {
      label: 'Leads',
      children: [
        {
          label: 'All Leads',
          children: leaves(
            'Search',
            'Filters (Status · Source · Owner · Score · Period)',
            'Table / Kanban',
            'Bulk actions',
          ),
        },
        {
          label: 'Lead Details',
          children: [
            { label: 'Overview' },
            { label: 'Activity Timeline' },
            {
              label: 'Related',
              children: leaves('Tasks', 'Meetings', 'Emails', 'Files'),
            },
            {
              label: 'Actions',
              children: leaves('Convert', 'Qualify', 'Disqualify', 'Merge', 'Change owner'),
            },
          ],
        },
        {
          label: 'Create Lead',
          children: leaves('Identity', 'Company', 'Channels', 'Source', 'Owner', 'Tags'),
        },
        {
          label: 'Import',
          children: [
            {
              label: 'Upload',
              children: [
                {
                  label: 'Field mapping',
                  children: [
                    {
                      label: 'Dedupe rule',
                      children: [{ label: 'Preview', children: leaves('Import log') }],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Routing & Scoring',
          children: leaves('Assignment rules', 'Scoring model', 'Web-to-Lead form'),
        },
      ],
    },
    {
      label: 'Contacts',
      children: [
        {
          label: 'All Contacts',
          children: leaves('Filters', 'Saved views', 'Bulk actions'),
        },
        {
          label: 'Contact Details',
          children: [
            { label: 'Overview' },
            { label: 'Timeline' },
            {
              label: 'Related',
              children: leaves(
                'Account', 'Deals', 'Tasks', 'Meetings', 'Orders', 'Campaigns',
              ),
            },
            {
              label: 'Actions',
              children: leaves(
                'Log call', 'Send email', 'Schedule meeting', 'Add to campaign', 'Merge',
              ),
            },
          ],
        },
        {
          label: 'Create Contact',
          children: leaves('Identity', 'Account link', 'Channels', 'Marketing consent'),
        },
        { label: 'Import & Dedupe' },
      ],
    },
    {
      label: 'Accounts',
      children: [
        {
          label: 'All Accounts',
          children: leaves('Filters (Industry · Owner · Region · Health)'),
        },
        {
          label: 'Account Details',
          children: [
            { label: 'Overview', children: leaves('Profile', 'Hierarchy', 'Addresses') },
            {
              label: 'Related',
              children: leaves('Contacts', 'Deals', 'Orders', 'Products', 'Documents'),
            },
            {
              label: 'Commercials',
              children: leaves(
                'Price list', 'Discount tier', 'Credit limit', 'Payment terms',
              ),
            },
            {
              label: 'Health',
              children: leaves('LTV', 'Open pipeline', 'Last touch', 'Renewal date'),
            },
          ],
        },
        { label: 'Create Account' },
        {
          label: 'Territories',
          children: leaves('Region assignment', 'Ownership rules'),
        },
      ],
    },
    {
      label: 'Deals',
      children: [
        {
          label: 'Pipeline (Kanban)',
          children: leaves(
            'Qualification',
            'Identity Decision Making',
            'Proposal Sent',
            'Negotiation',
            'Closed Won / Lost',
          ),
        },
        {
          label: 'Deal List',
          children: [
            { label: 'Filters (Stage · Owner · Amount · Closing period · Account)' },
            {
              label: 'Segments',
              children: leaves(
                'Open', 'Untouched', 'Closing this month', 'At-risk',
              ),
            },
          ],
        },
        {
          label: 'Deal Details',
          children: [
            {
              label: 'Overview',
              children: leaves(
                'Amount', 'Stage', 'Probability', 'Closing date', 'Source campaign',
              ),
            },
            {
              label: 'Line Items',
              children: leaves(
                'Product picker', 'Qty', 'Discount', 'Stock availability check',
              ),
            },
            {
              label: 'Quote & Documents',
              children: leaves('Generate quote', 'E-signature'),
            },
            {
              label: 'Related',
              children: leaves('Contacts', 'Tasks', 'Meetings', 'Emails', 'Order'),
            },
            {
              label: 'Stage History',
              children: leaves('Time-in-stage', 'Audit trail'),
            },
            {
              label: 'Actions',
              children: leaves(
                'Advance stage', 'Mark Won / Lost', 'Clone', 'Create Order',
              ),
            },
          ],
        },
        { label: 'Create Deal' },
        {
          label: 'Forecast',
          children: leaves(
            'By owner / team / period', 'Committed', 'Best case', 'Quota attainment',
          ),
        },
      ],
    },
    {
      label: 'Tasks',
      children: [
        {
          label: 'Task List',
          children: [
            { label: 'Filters (Status · Priority · Owner · Due date · Related to)' },
            {
              label: 'Views',
              children: leaves('My tasks', 'Team', 'Overdue', 'Due today'),
            },
          ],
        },
        {
          label: 'Task Details',
          children: leaves('Overview', 'Subtasks', 'Comments', 'Attachments'),
        },
        {
          label: 'Create Task',
          children: leaves(
            'Subject', 'Due date', 'Priority', 'Related record', 'Reminder', 'Recurrence',
          ),
        },
        { label: 'Templates', children: leaves('Cadence / playbook automation') },
      ],
    },
    {
      label: 'Meetings',
      children: [
        {
          label: 'Calendar',
          children: leaves('Day', 'Week', 'Month', 'Drag to reschedule'),
        },
        { label: 'Meetings List', children: leaves('Upcoming', 'Past') },
        {
          label: 'Meeting Details',
          children: [
            { label: 'Agenda' },
            { label: 'Participants' },
            { label: 'Related record' },
            { label: 'Link' },
            {
              label: 'Outcome',
              children: [
                { label: 'Notes' },
                { label: 'Recording' },
                { label: 'Next steps', children: leaves('Create Task') },
              ],
            },
          ],
        },
        {
          label: 'Schedule Meeting',
          children: leaves('Availability finder', 'Invite template'),
        },
        { label: 'Integrations', children: leaves('Google', 'Outlook sync') },
      ],
    },
    {
      label: 'Reports',
      children: [
        {
          label: 'Report Library',
          children: leaves(
            'Folders (Sales · Marketing · Inventory · Finance · Custom)', 'Favourites',
          ),
        },
        {
          label: 'Standard Reports',
          children: leaves(
            'Pipeline',
            'Win/Loss',
            'Sales cycle',
            'Lead conversion',
            'Campaign ROI',
            'Stock movement',
          ),
        },
        {
          label: 'Report Details',
          children: [
            { label: 'Table / Chart' },
            { label: 'Drill-through' },
            {
              label: 'Actions',
              children: leaves(
                'Export', 'Share', 'Schedule delivery', 'Add to dashboard',
              ),
            },
          ],
        },
        {
          label: 'Report Builder',
          children: [
            {
              label: 'Source',
              children: [
                {
                  label: 'Fields',
                  children: [
                    {
                      label: 'Filters',
                      children: [
                        { label: 'Visualization', children: leaves('Sharing') },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Analytics',
      children: [
        {
          label: 'Executive Overview',
          children: leaves(
            'Revenue vs target', 'Pipeline coverage', 'CAC', 'LTV', 'Margin',
          ),
        },
        {
          label: 'Sales Analytics',
          children: leaves('Funnel', 'Velocity', 'Stalled deals', 'Rep performance'),
        },
        {
          label: 'Marketing Analytics',
          children: leaves(
            'Attribution model', 'Channel contribution', 'Full funnel',
          ),
        },
        {
          label: 'Inventory Analytics',
          children: leaves(
            'Turnover', 'Days of cover', 'Stockouts', 'Demand forecast',
          ),
        },
        {
          label: 'Power BI Dashboards',
          children: leaves(
            'Workspace picker', 'Embedded canvas', 'Cross-filter', 'Refresh status',
          ),
        },
        {
          label: 'Custom Analytics',
          children: leaves('Saved analyses', 'Cohort & segment builder'),
        },
        {
          label: 'Data Governance',
          children: leaves('Sources', 'Sync status', 'Metric glossary'),
        },
      ],
    },
    {
      label: 'Products',
      children: [
        {
          label: 'Product Catalog',
          children: leaves(
            'Filters (Category · Brand · Price · Availability · Vendor)', 'Grid / List',
          ),
        },
        {
          label: 'Product Details',
          children: [
            { label: 'Overview', children: leaves('SKU', 'Media', 'Specifications') },
            {
              label: 'Pricing',
              children: leaves('Base price', 'Price lists', 'Volume tiers'),
            },
            {
              label: 'Inventory',
              children: leaves(
                'Stock per warehouse', 'Reserved / Available', 'Reorder point',
              ),
            },
            {
              label: 'Commercial',
              children: leaves('Vendors', 'Related deals', 'Sales history'),
            },
          ],
        },
        {
          label: 'Categories & Attributes',
          children: leaves('Category tree', 'Variant matrix'),
        },
        {
          label: 'Price Lists',
          children: leaves('Region', 'Segment', 'Account', 'Effective dates'),
        },
        { label: 'Create Product · Bulk Import' },
      ],
    },
    {
      label: 'Marketing Automation',
      children: [
        {
          label: 'Summary of Key Metrics',
          children: leaves(
            'Spend', 'Reach', 'Leads', 'CPL', 'Conversion', 'Blended ROI', 'Trends',
          ),
        },
        {
          label: 'Campaigns',
          children: [
            {
              label: 'Campaigns List',
              children: [
                {
                  label: 'Filters (Triggered by · Status · Tags · Creators · Sort by · Period)',
                },
                { label: 'Tabs', children: leaves('Active', 'Completed', 'Draft') },
                {
                  label: 'Campaign Card',
                  children: [
                    { label: 'Toggle' },
                    { label: 'Recipients' },
                    { label: 'Duration' },
                    { label: 'Status badge' },
                    {
                      label: 'Actions',
                      children: leaves('Edit', 'Duplicate', 'Pause', 'Archive'),
                    },
                  ],
                },
                {
                  label: 'Metrics',
                  children: leaves(
                    'Delivered',
                    'Opened',
                    'Clicked',
                    'Converted',
                    'ROI',
                    'Budget',
                    'Leads Generated',
                    'Status',
                  ),
                },
              ],
            },
            { label: 'Share · Export' },
            {
              label: 'Create Campaign',
              children: [
                {
                  label: 'Campaign Info',
                  children: leaves('Name', 'Brand', 'Channel', 'Description'),
                },
                { label: 'Geographical Area', children: leaves('Region', 'Country') },
                {
                  label: 'Audience',
                  children: leaves(
                    'Target customers', 'Email only', 'SMS only', 'Segment',
                  ),
                },
                {
                  label: 'Time Manage',
                  children: leaves('Check', 'Run length', 'Start now'),
                },
                {
                  label: 'Create Rules',
                  children: [
                    {
                      label: 'Condition',
                      children: [
                        {
                          label: 'Operator',
                          children: [{ label: 'Value', children: leaves('Add new rule') }],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'ROI',
                  children: leaves(
                    'Expected revenue', 'Budget allocation', 'Projected ROI',
                  ),
                },
              ],
            },
            {
              label: 'Campaign Details',
              children: leaves(
                'Performance',
                'Audience',
                'Content',
                'Rules',
                'Members',
                'Attribution',
                'Activity log',
              ),
            },
            {
              label: 'Journey Builder',
              children: [
                {
                  label: 'Trigger',
                  children: [
                    {
                      label: 'Condition',
                      children: [
                        {
                          label: 'Action',
                          children: leaves('Delay', 'A/B split', 'Goal'),
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: 'Templates',
              children: leaves('Email', 'SMS', 'Ad creatives'),
            },
          ],
        },
        {
          label: 'Performance Snapshot',
          children: leaves(
            'Cross-campaign comparison', 'Funnel drop-off', 'Channel breakdown',
          ),
        },
        {
          label: 'Ad Performance',
          children: leaves(
            'Ad accounts',
            'Ad sets',
            'Creatives (CTR · CPC · CPA · ROAS)',
            'Budget pacing',
          ),
        },
        {
          label: 'Affiliate Tracking',
          children: [
            { label: 'Affiliates', children: leaves('Affiliate Details') },
            { label: 'Programs & Commissions' },
            { label: 'Payouts' },
          ],
        },
        {
          label: 'Integration',
          children: [
            { label: 'Connected channels', children: leaves('Connection Details') },
            { label: 'Field mapping' },
            { label: 'API & Webhooks' },
          ],
        },
        {
          label: 'Social Media Metrics',
          children: leaves(
            'Accounts overview',
            'Post performance',
            'Content calendar',
            'Social listening',
          ),
        },
      ],
    },
    {
      label: 'Inventory & Order',
      children: [
        {
          label: 'Inventory Overview',
          children: leaves(
            'Stock value', 'Low stock', 'Out of stock', 'Incoming', 'Alerts',
          ),
        },
        {
          label: 'Stock Management',
          children: [
            {
              label: 'Stock by Product',
              children: leaves(
                'On hand', 'Reserved', 'Available', 'In transit', 'Reorder point',
              ),
            },
            {
              label: 'Stock by Warehouse',
              children: leaves('Location', 'Capacity', 'Utilization'),
            },
            {
              label: 'Stock Movements',
              children: leaves('Receipts', 'Transfers', 'Adjustments', 'Write-offs'),
            },
            {
              label: 'Stock Take',
              children: leaves('Cycle count', 'Variance', 'Approval'),
            },
          ],
        },
        {
          label: 'Orders',
          children: [
            {
              label: 'Orders List',
              children: leaves('Filters (Status · Account · Period · Payment)'),
            },
            {
              label: 'Order Details',
              children: leaves(
                'Line items',
                'Addresses',
                'Payment',
                'Shipping & tracking',
                'Documents',
                'Status timeline',
              ),
            },
            {
              label: 'Statuses',
              children: leaves(
                'Draft',
                'Confirmed',
                'Picking',
                'Packed',
                'Shipped',
                'Delivered',
                'Cancelled',
                'Returned',
              ),
            },
            {
              label: 'Create Order',
              children: leaves('From scratch', 'From won Deal'),
            },
          ],
        },
        {
          label: 'Purchase Orders',
          children: [
            {
              label: 'PO List',
              children: [
                { label: 'PO Details', children: leaves('Receive', 'Three-way match') },
              ],
            },
          ],
        },
        {
          label: 'Vendors',
          children: [
            {
              label: 'Vendor List',
              children: [
                {
                  label: 'Vendor Details',
                  children: leaves('Lead time', 'Price agreements', 'Performance'),
                },
              ],
            },
          ],
        },
        {
          label: 'Shipments & Returns',
          children: leaves('Shipments (Carrier · Tracking · ETA)', 'Returns / RMA'),
        },
        {
          label: 'Warehouses',
          children: leaves('Locations', 'Zones', 'Allocation strategy'),
        },
      ],
    },
    {
      label: 'More (⋯)',
      children: [
        {
          label: 'Documents',
          children: leaves('Repository', 'Versions', 'Templates', 'E-signature'),
        },
        {
          label: 'Quotes & Invoices',
          children: leaves(
            'Quotes (Builder · Approval · Expiry)',
            'Invoices (Payment status · Reminders · Credit notes)',
          ),
        },
        {
          label: 'Forecasts',
          children: leaves(
            'Quota', 'Committed', 'Best case', 'Adjustment history',
          ),
        },
        {
          label: 'Activities',
          children: leaves('Unified feed (Calls · Emails · Notes · Meetings)'),
        },
        {
          label: 'Admin & Setup',
          children: [
            {
              label: 'Users & Roles',
              children: leaves(
                'Users', 'Teams', 'Roles', 'Permission sets', 'Territories',
              ),
            },
            {
              label: 'Customization',
              children: leaves(
                'Custom fields', 'Layouts', 'Picklists', 'Validation rules',
              ),
            },
            {
              label: 'Automation',
              children: leaves(
                'Workflow rules', 'Approvals', 'Assignment rules', 'Scheduled jobs',
              ),
            },
            {
              label: 'Data Management',
              children: leaves(
                'Import / Export', 'Deduplication', 'Backup', 'Audit log',
              ),
            },
            {
              label: 'Organization',
              children: leaves(
                'Company profile', 'Currencies', 'Fiscal year', 'Branding',
              ),
            },
            {
              label: 'Security & Compliance',
              children: leaves('SSO', '2FA', 'IP restrictions', 'GDPR consent'),
            },
            {
              label: 'Billing & Subscription',
              children: leaves('Plan', 'Seats', 'Usage', 'Invoices'),
            },
          ],
        },
      ],
    },
  ],
};

const InformationArchitecture = () => (
  <>
    <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
      Thirteen Modules, One Persistent Layer
    </h2>
    <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl [&>strong]:font-bold [&>strong]:text-black">
      A CRM this broad only stays learnable if depth is predictable. Every record module follows the
      same three-part shape &mdash; <strong>list, details, create</strong> &mdash; so a rep who
      learns Leads already knows Contacts, Accounts, and Deals. The{' '}
      <strong>persistent global layer</strong> lifts search, quick create, notifications, and
      calendar out of the module tree entirely, keeping them one action away from any screen, and
      lower-frequency administrative work is deliberately pushed behind{' '}
      <strong>More</strong> rather than competing for top-level space.
    </p>
    <div className="bg-[#f7f7f7] rounded-[24px] p-5 overflow-x-auto">
      <IATree data={iaTree} defaultOpenIndex={3} />
      <p className="font-grotesk text-sm text-[#b3b2af] mt-4">
        Click a node to expand or collapse its branch.
      </p>
    </div>
  </>
);

const styleGuide = {
  heading: 'A muted green system built for all-day use',
  body: (
    <>
      Alpine Green and Natural Jade carry the brand and every primary action, kept deliberately
      desaturated because this is a tool people sit inside for a full shift &mdash; saturation that
      flatters a landing page becomes fatigue in a CRM.{' '}
      <strong>Pastel Light Turquoise, Authentic White, and Gainsboro do the real work</strong>,
      separating table rows, panels, and disabled states without adding visual noise. Nobel Azure
      is the one high-contrast accent, reserved for links and selection so it always means the same
      thing. Inter keeps dense record and pipeline data legible at small sizes.
    </>
  ),
  colors: [
    { name: 'Alpine Green', hex: '#205343', text: '#ffffff' },
    { name: 'Natural Jade', hex: '#3A7261', text: '#ffffff' },
    { name: 'Pastel Light Turquoise', hex: '#D2ECE4', text: '#22292f' },
    { name: 'Authentic White', hex: '#F7F9FB', text: '#22292f' },
    { name: 'White', hex: '#FFFFFF', text: '#22292f' },
    { name: 'Gainsboro', hex: '#DCDCDC', text: '#22292f' },
    { name: 'Nobel Azure', hex: '#2978D0', text: '#ffffff' },
  ],
  // Tint ramp built from Alpine Green — surfaces, table rows, and chart fills.
  scale: [
    '#2A4E42',
    '#31584A',
    '#456B5B',
    '#5C8175',
    '#7A9990',
    '#98B0A8',
    '#B6C7C1',
    '#D3DEDA',
    '#EDF2F0',
  ],
  typeface: {
    name: 'Inter',
    hex: '#2F5245',
    weights: ['Regular', 'Medium', 'Semi Bold', 'Bold', 'Extra Bold'],
  },
  image: 'case-crm-style.png',
};

const sections = [
  { id: 'ia', label: 'Information Architecture', content: <InformationArchitecture /> },
  { id: 'style', label: 'Colours & Typography', content: <StyleGuide {...styleGuide} /> },
];

const keyTakeaway = {
  heading: 'What I took out of the navigation mattered more than how I arranged it',
  body: (
    <>
      Thirteen modules is the kind of number that invites months of argument about hierarchy
      &mdash; what nests under what, which department owns which branch. The useful move was
      orthogonal to that argument:{' '}
      <strong>four things people do constantly regardless of where they are &mdash; search,
      quick create, notifications, calendar &mdash; do not belong in a tree at all.</strong>
      <br />
      <br />
      Once those were lifted into a persistent layer, the hierarchy stopped being load-bearing.
      An enterprise system is not made usable by a better tree.{' '}
      <strong>It is made usable by the actions that never require you to be in the right
      place.</strong>
    </>
  ),
};

export default function CrmPlatformCase() {
  return (
    <CaseLayout
      project={project}
      sections={sections}
      screens={screens}
      screensLabel="Product Screens"
      keyTakeaway={keyTakeaway}
      caseId="crm-platform"
    />
  );
}
