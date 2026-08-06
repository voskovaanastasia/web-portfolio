import CaseLayout, { ImagePlaceholder } from '../components/CaseLayout';
import IATree from '../components/IATree';
import toolFigma from '../assets/icon-figma.svg';
import toolJira from '../assets/icon-jira.svg';
import toolNotion from '../assets/icon-notion.svg';

const project = {
  name: 'Fitness App',
  title: 'Fitness App: Mobile Health & Training Platform',
  heroImage: 'case-fitness.png',
  tags: ['Mobile', 'iOS & Android', 'Health & Wellness', 'AI Personalization'],
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
      text: 'Tracking and training live in separate apps, so daily health data never turns into the right workout.',
    },
    {
      label: 'MY ROLE',
      text: 'Product Designer — metrics dashboard, workout discovery, guided player, progress analytics.',
    },
    {
      label: 'KEY DECISION',
      text: 'AI recommends from readiness, but manual browsing stays a first-class path.',
    },
  ],
  outcome: { value: 'TBD', label: 'Key outcome metric' },
  intro: {
    heading: 'Train on what your body’s actually telling you.',
    image: 'case-fitness-intro.png',
    body: (
      <>
        <strong>Fitness App</strong> is a <strong>mobile health-and-fitness platform</strong> that
        helps people reach their goals with personalized workout plans,{' '}
        <strong>AI-driven customization,</strong> and real-time health tracking. It integrates with
        wearables to turn daily signals into clear training decisions. I designed the end-to-end
        experience &mdash; from a metrics-first dashboard to a guided in-session player &mdash; so
        the product adapts to the user: AI-personalized when they want it, manual when they need
        it. <strong>The core challenge was</strong> turning dense health data into one simple,
        daily decision about how to train.
      </>
    ),
  },
  problem: {
    image: 'case-fitness-problem.png',
    heading: 'Health data and training live in separate apps',
    body: 'Fitness tracking and workout guidance are usually split across multiple apps and screens, forcing users to hop between them to understand their health, pick the right session, and stay consistent. It’s hard to translate daily metrics (HRV, heart rate, sleep, steps, water) into a workout decision; plans are generic and don’t adapt to readiness or recovery; choosing the right level, duration, and intensity is confusing; in-workout controls break flow; and progress is scattered across views.',
    why: 'When effort, recovery, and results never meet in one place, people end up training against their bodies instead of with them — they lose motivation, miss real progress, and eventually stop.',
  },
  solution: {
    image: 'case-fitness-solution.png',
    heading: 'Metrics, decisions, and training in one experience',
    body: 'The app brings wellness metrics and training into a single flow. A metrics-first dashboard (HRV, average heart rate, sleep, steps, water) gives a quick daily snapshot; AI recommends workouts based on readiness, with the option to browse and pick manually; clear discovery with filters (Yoga / Pilates / HIIT) shows level, duration, and calorie range up front; a smooth guided flow with a warm-up toggle and an in-session player (timer, progress, next-exercise preview) keeps users in rhythm; and progress analytics across day, week, month, and year reinforce consistency.',
    scenario: 'My aim was that a user could open the app in the morning, read their readiness at a glance, and start the right workout in seconds — then see how today’s effort connects to their habits and long-term trends.',
  },
};

// ---- 4W+H ----------------------------------------------------------------

const fourWPlusH = [
  {
    title: 'What Problem?',
    body: 'Staying consistent is hard — users must track health metrics, pick the right workout for their condition, and jump between disconnected tracking and workout apps.',
  },
  {
    title: 'Why?',
    body: 'Tracking apps don’t turn health data into action, and workout apps push one-size-fits-all plans that ignore daily readiness — leading to inefficient training and drop-off.',
  },
  {
    title: 'Who is the target?',
    highlight: true,
    items: [
      'Beginners and people returning after a break',
      'Users wanting structured Yoga, Pilates & HIIT',
      'Health-focused users tracking HRV, heart rate, sleep, steps',
      'Busy users needing quick, day-matched workouts',
    ],
  },
  {
    title: 'What’s the Goal?',
    body: 'An all-in-one mobile experience that turns daily wellness metrics into the right training choice — AI-recommended, with manual pick always available.',
  },
  {
    title: 'How?',
    body: 'An intuitive web app: metrics-first dashboard, AI workout recommendations, filterable library (level/duration/calories), guided player, simple progress analytics.',
  },
];

function FourWPlusH() {
  return (
    <>
      <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
        4W+H Process
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {fourWPlusH.map((column) => (
          <div
            key={column.title}
            className={`rounded-[24px] p-5 flex flex-col gap-4 ${ column.highlight ? 'bg-[#e9f3fa]' : 'bg-[#f7f7f7]' }`}
          >
            <p className="font-grotesk font-medium text-lg text-black">{column.title}</p>
            <span className="h-0.5 w-full bg-[#288fd6] rounded-full" />
            {column.body && (
              <p className="font-grotesk text-base text-[#393939] leading-relaxed">{column.body}</p>
            )}
            {column.items && (
              <ul className="flex flex-col gap-2">
                {column.items.map((item) => (
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
    </>
  );
}

// ---- User Persona --------------------------------------------------------

const persona = {
  name: 'Emma Johnson',
  role: '29, Product Designer',
  location: 'Barcelona, Spain',
  bio: 'Emma works a demanding job and tries to stay consistent with workouts, but her energy levels vary day to day. She tracks basic health stats (sleep, steps, heart rate) and wants a simple way to turn that data into the “right workout today” without overthinking. She likes having options, but she doesn’t want to waste time planning.',
  motivations: [
    <>
      I want workouts that match my <strong>readiness</strong> (sleep/HRV/heart rate), not generic
      plans.
    </>,
    <>
      I want to <strong>feel better overall</strong> (energy, mood, stress) while still improving
      fitness.
    </>,
    <>
      I like <strong>clear structure:</strong> level, duration, and expected intensity before I
      start.
    </>,
  ],
  goals: [
    <>
      Get a personalized workout recommendation in <strong>under 1 minute</strong> and start
      immediately.
    </>,
    <>
      Maintain consistency: <strong>4 workouts/week</strong> without burnout.
    </>,
    <>
      Improve wellness habits (steps, water, sleep) and see{' '}
      <strong>weekly progress trends.</strong>
    </>,
    <>Mix training types (Yoga/Pilates/HIIT) based on how she feels and her schedule.</>,
  ],
  frustrations: [
    <>
      Workout apps that <strong>ignore recovery signals and push intensity</strong> even when
      I&rsquo;m tired.
    </>,
    <>
      <strong>Too many apps:</strong> one for tracking, another for workouts, and no clear connection
      between them.
    </>,
    <>
      <strong>Confusing workout choices</strong> &mdash; unclear difficulty, intensity, or
      what&rsquo;s &ldquo;right for today.&rdquo;
    </>,
    <>
      In-session experiences that <strong>break flow</strong> (messy controls, unclear progression,
      no next-step guidance).
    </>,
  ],
};

const bulletClass =
  'font-grotesk text-base text-[#393939] leading-relaxed pl-5 relative before:content-[\'\'] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-[#1552d8] before:rounded-[1px] [&_strong]:font-normal [&_strong]:text-[#1552d8]';

function PersonaCard({ title, points }) {
  return (
    <div className="bg-[#f2f6ff] rounded-[24px] p-5 flex flex-col gap-4">
      <h3 className="font-grotesk font-medium text-2xl text-black">{title}</h3>
      <ul className="flex flex-col gap-3">
        {points.map((point, i) => (
          <li key={i} className={bulletClass}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserPersona() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="flex flex-col gap-5">
        <ImagePlaceholder filename="case-fitness-persona.png" className="min-h-[480px]" />
        <div className="bg-[#f2f6ff] rounded-[24px] p-5 flex flex-col gap-3">
          <h3 className="font-grotesk font-medium text-3xl text-[#1552d8]">{persona.name}</h3>
          <p className="font-grotesk font-medium text-base text-[#1552d8]">{persona.role}</p>
          <p className="font-grotesk font-medium text-base text-[#1552d8]">{persona.location}</p>
          <p className="font-grotesk text-base text-black leading-relaxed mt-1">{persona.bio}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <PersonaCard title="Motivations" points={persona.motivations} />
        <PersonaCard title="Goals" points={persona.goals} />
        <PersonaCard title="Frustrations" points={persona.frustrations} />
      </div>
    </div>
  );
}

// ---- Information Architecture -------------------------------------------

const iaData = {
  label: 'Fitness App',
  children: [
    {
      label: 'Onboarding & Auth',
      children: [
        { label: 'Onboarding' },
        {
          label: 'Sign In / Sign Up',
          children: [
            { label: 'Social Login (Apple / Google)' },
            { label: 'Forgot / Reset Password' },
          ],
        },
        { label: 'Email / OTP Verification' },
        { label: 'Permissions (Health, Push, Motion)' },
        { label: 'Goal Questionnaire' },
        { label: 'Connect Wearables' },
      ],
    },
    {
      label: 'Dashboard',
      children: [
        { label: 'Steps detail' },
        { label: 'Recommendations' },
        { label: 'HRV detail' },
        { label: 'Heart Rate detail' },
        { label: 'Calories detail' },
        { label: 'Sleep detail' },
        { label: 'Water' },
        { label: 'Search' },
      ],
    },
    {
      label: 'Workouts',
      children: [
        { label: 'Categories' },
        { label: 'Filters' },
        { label: 'Workout' },
        { label: 'Exercise Detail' },
      ],
    },
    {
      label: 'Analytics',
      children: [
        { label: 'Overview' },
        { label: 'Graphs & Charts' },
        { label: 'Trends' },
        { label: 'Metric Deep-Dive' },
        { label: 'Reports / Export' },
      ],
    },
    {
      label: 'Settings',
      children: [
        { label: 'User Profile' },
        { label: 'Notifications' },
        { label: 'Data & Sync' },
        { label: 'Edit Profile' },
        {
          label: 'Subscription',
          children: [
            { label: 'Paywall' },
            { label: 'Plans / Pricing' },
            { label: 'Manage Subscription' },
            { label: 'Restore Purchase' },
          ],
        },
        { label: 'Units & Preferences' },
        { label: 'Connected Devices' },
        { label: 'Appearance / Theme' },
        { label: 'Language' },
        { label: 'Privacy & Security' },
        { label: 'Help / FAQ' },
        { label: 'About' },
        { label: 'Logout' },
        { label: 'Delete Account' },
      ],
    },
  ],
};

function InformationArchitecture() {
  return (
    <>
      <h2 className="font-grotesk font-medium text-3xl sm:text-4xl text-black tracking-tight">
        Mobile App
      </h2>
      <p className="font-grotesk text-base text-[#393939] leading-relaxed max-w-2xl [&>strong]:font-bold [&>strong]:text-black">
        Setup is separated from daily use: <strong>Onboarding &amp; Auth</strong> runs once, front
        loading permissions, goals, and wearable pairing so the app has real data from day one.
        After that the structure follows how the day is actually spent &mdash;{' '}
        <strong>Dashboard</strong> to read today&rsquo;s signals, <strong>Workouts</strong> to act
        on them, <strong>Analytics</strong> to see the trend, and <strong>Settings</strong> for
        everything administrative. Each metric on the dashboard opens its own detail view, so depth
        is available without crowding the daily glance.
      </p>
      <div className="bg-[#f7f7f7] rounded-[24px] p-5 overflow-x-auto">
        <IATree data={iaData} defaultOpenIndex={1} />
        <p className="font-grotesk text-sm text-[#b3b2af] mt-4">
          Click a node to expand or collapse its branch.
        </p>
      </div>
    </>
  );
}

// ---- App screens ---------------------------------------------------------

const screens = [
  {
    title: 'Main Screen',
    image: 'case-fitness-main.png',
    blocks: [
      {
        heading: 'Metrics at a glance (HRV & Avg Heart Rate)',
        text: (
          <>
            <strong>HRV and resting heart rate surface cardio readiness in seconds</strong> so the
            user knows whether to push or recover. Clear badges flag when numbers drift, guiding
            safer training for the user.
          </>
        ),
      },
      {
        heading: 'Daily activity & energy (Steps, Calories)',
        text: (
          <>
            <strong>Steps and active calories show how much the user has already burned</strong> and
            what&rsquo;s left to hit today&rsquo;s goal. Simple progress cues turn small walks into
            big wins for the user.
          </>
        ),
      },
      {
        heading: 'Hydration & recovery (Water, Sleep)',
        text: (
          <>
            <strong>Water intake and last night&rsquo;s sleep remind the user to fuel and recharge</strong>{' '}
            &mdash; not just move. Gentle nudges help the user avoid fatigue-driven cravings and
            stalled progress.
          </>
        ),
      },
      {
        heading: 'Personalized Recommendations',
        text: (
          <>
            <strong>Cards suggest time-boxed, level-tagged sessions tailored to today&rsquo;s readiness.</strong>{' '}
            One tap starts a routine that fits the user&rsquo;s schedule and energy.
          </>
        ),
      },
    ],
  },
  {
    title: 'Steps',
    image: 'case-fitness-steps.png',
    blocks: [
      {
        heading: 'Daily total with date range',
        text: (
          <>
            Clear context{' '}
            <strong>
              keeps motivation high and makes it easy for the user to decide whether a short walk
              will close the gap.
            </strong>{' '}
            Progress feels tangible, so the user keeps moving.
          </>
        ),
      },
      {
        heading: 'Timeframe tabs',
        text: (
          <>
            <strong>Weekly and monthly views reveal trends that drive smarter goal setting for the user.</strong>{' '}
            Long-term tracking turns small habits into compounding results.
          </>
        ),
      },
      {
        heading: 'Weekly bar chart',
        text: (
          <>
            <strong>Visual feedback reduces guesswork and helps the user plan walks around real life.</strong>{' '}
            Insights arrive at a glance&mdash;no spreadsheets, no effort.
          </>
        ),
      },
      {
        heading: 'Highlights: Distance & Kcal burned',
        text: (
          <>
            <strong>Weekly and monthly views reveal trends that drive smarter goal setting for the user.</strong>{' '}
            Long-term tracking turns small habits into compounding results.
          </>
        ),
      },
      {
        heading: 'Educational tips',
        text: (
          <>
            <strong>Actionable advice turns data into next steps the user can take today.</strong>{' '}
            Confidence rises because the user knows exactly what to do next.
          </>
        ),
      },
    ],
  },
  {
    title: 'Workouts',
    image: 'case-fitness-workouts.png',
    blocks: [
      {
        heading: 'Quick filters',
        text: (
          <>
            Chips help the user land on the right session in seconds &mdash; no endless scrolling.{' '}
            <strong>
              &ldquo;Recommended&rdquo; adapts to the user&rsquo;s level and recent activity for
              smarter picks.
            </strong>{' '}
            The funnel icon adds extra filters when the user wants to fine-tune time, impact, or
            equipment.
          </>
        ),
      },
      {
        heading: 'Trust-at-a-glance labels (time · difficulty)',
        text: (
          <>
            Clear badges tell the user exactly{' '}
            <strong>what commitment and skill are needed.</strong> No surprises mid-workout. The user
            chooses sessions that fit today&rsquo;s energy and schedule.
          </>
        ),
      },
      {
        heading: 'Calorie burn estimate',
        text: (
          <>
            <strong>Each card shows a realistic kcal range</strong> (e.g., 500&ndash;600 kcal) so the
            user can match sessions to weight and nutrition goals.
          </>
        ),
      },
      {
        heading: 'Program tags',
        text: (
          <>
            <strong>Category tags like HIIT signal training style instantly, helping the user target fat loss, mobility, or strength.</strong>{' '}
            The user builds variety without losing focus. Better targeting = faster results.
          </>
        ),
      },
    ],
  },
  {
    title: 'Pre-Workout',
    image: 'case-fitness-pre-workout.png',
    blocks: [
      {
        heading: 'Program header + clear tags',
        text: (
          <>
            The header tells the user exactly what the session delivers &mdash;{' '}
            <strong>style, duration, difficulty, and burn.</strong> No surprises, just the right dose
            for today&rsquo;s energy and goals.
          </>
        ),
      },
      {
        heading: 'Warm-up toggle',
        text: (
          <>
            <strong>A single switch lets the user include or skip the warm-up based on time and readiness.</strong>{' '}
            Turning it on reduces injury risk and improves performance; turning it off keeps the
            session tight when the user is in a rush. Flexibility keeps the habit alive for the user.
          </>
        ),
      },
      {
        heading: 'Move-by-move breakdown with previews',
        text: (
          <>
            <strong>Each exercise shows a thumbnail, name, and time/reps so the user knows what&rsquo;s coming.</strong>{' '}
            Visuals boost confidence and cut second-guessing mid-set. The user enters the workout
            prepared&mdash;and finishes stronger.
          </>
        ),
      },
    ],
  },
  {
    title: 'Workout',
    image: 'case-fitness-workout.png',
    blocks: [
      {
        heading: '“Next exercise” preview',
        text: (
          <>
            <strong>A corner preview tells the user what&rsquo;s coming up, so transitions are smooth and no time is wasted.</strong>{' '}
            The user mentally preps form and setup before the timer hits zero. Faster switches =
            higher intensity and better results.
          </>
        ),
      },
      {
        heading: 'Exercise title + live demo',
        text: (
          <>
            <strong>A full-screen demo shows the exact form while the user moves, removing guesswork.</strong>{' '}
            The clear title keeps the user oriented in the sequence. Seeing the move boosts confidence
            and helps the user finish every rep with good technique.
          </>
        ),
      },
      {
        heading: 'Giant countdown timer',
        text: (
          <>
            <strong>A bold, screen-filling timer makes pacing effortless &mdash; no squinting, no missed cues.</strong>{' '}
            The user focuses on breathing and form while the clock drives intensity. Finishing
            intervals feels motivating because progress is visible every second.
          </>
        ),
      },
      {
        heading: 'Progress bar',
        text: (
          <>
            A slim scrub line shows how far the user is through the current interval.{' '}
            <strong>Quick glances keep the user pushing to the end of the set.</strong> Visual
            progress reduces early drop-offs and keeps effort consistent.
          </>
        ),
      },
    ],
  },
];

const sections = [
  { id: 'process', label: '4W+H Process', content: <FourWPlusH /> },
  { id: 'persona', label: 'User Persona', content: <UserPersona /> },
  { id: 'ia', label: 'Information Architecture', content: <InformationArchitecture /> },
];

export default function FitnessAppCase() {
  return (
    <CaseLayout
      project={project}
      sections={sections}
      screens={screens}
      screensLabel="App Screens"
    />
  );
}
