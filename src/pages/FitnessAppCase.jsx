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
    heading: 'About',
    image: 'case-fitness-intro.png',
    body: (
      <>
        <strong>Fitness App</strong> is an advanced{' '}
        <strong>mobile health and fitness platform</strong> designed{' '}
        <strong>to support individuals in reaching their fitness goals.</strong> With personalized
        workout plans, <strong>AI-driven customization</strong>, and real-time health tracking, it
        seamlessly integrates with wearable devices{' '}
        <strong>to deliver comprehensive wellness insights</strong> and enhance the user&rsquo;s
        health journey.
      </>
    ),
  },
};

// ---- 4W+H ----------------------------------------------------------------

const fourWPlusH = [
  {
    title: 'What Problem?',
    body: 'Users struggle to stay consistent with fitness because they need to track health metrics, pick the right workout for their current condition and goals, and follow sessions smoothly — often switching between disconnected tracking and workout apps.',
  },
  {
    title: 'Why?',
    body: 'Most solutions are fragmented or generic: tracking apps don’t translate health data into actionable training, and workout apps offer one-size-fits-all plans that ignore daily readiness (sleep, HRV, heart rate, activity). This leads to inefficient training, higher drop-off, and lower confidence in the routine.',
  },
  {
    title: 'Who is the target?',
    items: [
      'Beginners and people returning after a break',
      'Users who want structured Yoga, Pilates, and HIIT sessions',
      'Health-focused users tracking HRV, heart rate, sleep, steps, water',
      'Busy users who need quick, guided workouts matched to their day',
      'Users who want clear progress views (day/week/month/year)',
    ],
  },
  {
    title: 'What’s the Goal?',
    body: 'Build an all-in-one mobile experience that turns daily wellness metrics into the right training choice — using AI to recommend workouts based on readiness and goals, while still allowing users to browse and pick workouts manually.',
  },
  {
    title: 'How?',
    body: 'Design an intuitive web app with:',
    items: [
      'A metrics-first dashboard',
      'AI-based workout recommendations from health metrics, plus manual workout selection',
      'A filterable workout library with clear level, duration, and calories',
      'Guided workout player',
      'Simple progress analytics with charts and highlights',
    ],
  },
];

function FourWPlusH() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#e2e2e2] rounded-[24px] overflow-hidden">
      {fourWPlusH.map((column, i) => (
        <div
          key={column.title}
          className={`p-6 flex flex-col gap-4 ${i % 2 === 0 ? 'bg-white' : 'bg-[#f2f6ff]'}`}
        >
          <div className="flex flex-col gap-3">
            <p className="font-grotesk font-medium text-lg text-black">{column.title}</p>
            <span className="h-[3px] w-full bg-[#1552d8] rounded-full" />
          </div>
          {column.body && (
            <p className="font-grotesk text-sm text-[#393939] leading-relaxed">{column.body}</p>
          )}
          {column.items && (
            <ul className="flex flex-col gap-2">
              {column.items.map((item) => (
                <li
                  key={item}
                  className="font-grotesk text-sm text-[#393939] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.5em] before:w-1.5 before:h-1.5 before:bg-[#1552d8] before:rounded-[1px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

// ---- Problem & Solution --------------------------------------------------

const problemPoints = [
  <>
    It&rsquo;s hard to translate daily metrics (HRV, heart rate, sleep, steps, water) into a{' '}
    <strong>clear workout decision</strong>
  </>,
  <>
    Workouts are often <strong>generic</strong> and don&rsquo;t adapt to readiness, recovery, or
    overall health signals
  </>,
  <>
    Choosing the &ldquo;right&rdquo; plan is confusing: level, duration, and intensity aren&rsquo;t
    always <strong>clear or comparable</strong>
  </>,
  <>
    In-workout guidance can be <strong>clunky</strong> breaking flow with poor controls and unclear
    progression
  </>,
  <>
    Progress is scattered: users can&rsquo;t easily connect{' '}
    <strong>workout effort + daily habits + trends</strong> in one view
  </>,
];

const solutionPoints = [
  <>
    <strong>Metrics-first dashboard</strong> (HRV, avg heart rate, sleep, steps, water) for a quick
    daily snapshot
  </>,
  <>
    <strong>AI-based workout recommendations</strong> using health metrics and overall readiness,
    with the option to browse and pick manually
  </>,
  <>
    <strong>Clear workout discovery with filters</strong> (Yoga / Pilates / HIIT) and visible level,
    duration, and calorie range
  </>,
  <>
    <strong>Smooth guided workout flow:</strong> exercise list, warm-up toggle, and a simple Start
    Workout entry point
  </>,
  <>
    <strong>In-session player</strong> with timer, progress, and next-exercise preview to keep users
    in rhythm
  </>,
  <>
    <strong>Progress analytics</strong> (day/week/month/year) with charts and highlights to reinforce
    consistency
  </>,
];

const bulletClass =
  'font-grotesk text-base text-[#393939] leading-relaxed pl-5 relative before:content-[\'\'] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-[#1552d8] before:rounded-[1px] [&_strong]:font-normal [&_strong]:text-[#1552d8]';

function ProblemSolution() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="flex flex-col gap-6">
        <div className="bg-[#f2f6ff] rounded-[24px] p-8 flex flex-col gap-6">
          <h3 className="font-grotesk font-medium text-3xl text-black">Problem</h3>
          <p className="font-grotesk text-base text-black leading-relaxed">
            Fitness tracking and workout guidance are often split across multiple apps and screens,
            forcing users to <span className="text-[#1552d8]">hop between platforms</span>, to
            understand their health, choose the right session, and stay consistent.
          </p>
          <ul className="flex flex-col gap-4">
            {problemPoints.map((point, i) => (
              <li key={i} className={bulletClass}>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <ImagePlaceholder filename="case-fitness-problem.png" className="min-h-[320px]" />
      </div>

      <div className="flex flex-col gap-6">
        <ImagePlaceholder filename="case-fitness-solution.png" className="min-h-[320px]" />
        <div className="bg-[#f2f6ff] rounded-[24px] p-8 flex flex-col gap-6">
          <h3 className="font-grotesk font-medium text-3xl text-black">Solution</h3>
          <p className="font-grotesk text-base text-black leading-relaxed">
            Fitness tracking and workout guidance brings wellness metrics and training into a single,
            all-in-one experience that helps users train smarter{' '}
            <span className="text-[#1552d8]">
              &mdash;AI-personalized when they want it, manual when they need it:
            </span>
          </p>
          <ul className="flex flex-col gap-4">
            {solutionPoints.map((point, i) => (
              <li key={i} className={bulletClass}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
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

function PersonaCard({ title, points }) {
  return (
    <div className="bg-[#f2f6ff] rounded-[24px] p-7 flex flex-col gap-4">
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="flex flex-col gap-6">
        <ImagePlaceholder filename="case-fitness-persona.png" className="min-h-[480px]" />
        <div className="bg-[#f2f6ff] rounded-[24px] p-7 flex flex-col gap-3">
          <h3 className="font-grotesk font-medium text-3xl text-[#1552d8]">{persona.name}</h3>
          <p className="font-grotesk font-medium text-base text-[#1552d8]">{persona.role}</p>
          <p className="font-grotesk font-medium text-base text-[#1552d8]">{persona.location}</p>
          <p className="font-grotesk text-base text-black leading-relaxed mt-1">{persona.bio}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
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
      label: 'Splash',
      children: [{ label: 'Onboarding', children: [{ label: 'Authorization' }] }],
    },
    { label: 'Dashboard' },
    { label: 'Exercises', children: [{ label: 'Categories' }, { label: 'Filters' }] },
    {
      label: 'Analytics',
      children: [
        { label: 'Overview' },
        { label: 'Graphs and Charts' },
        { label: 'Achievements' },
        { label: 'Trends' },
      ],
    },
    {
      label: 'Settings',
      children: [{ label: 'User Profile' }, { label: 'Notifications' }, { label: 'Data & Sync' }],
    },
  ],
};

function InformationArchitecture() {
  return (
    <div className="flex flex-col gap-8">
      <p className="font-grotesk text-base text-black leading-relaxed max-w-4xl">
        <span className="text-[#1552d8]">Mobile app architecture</span> is designed to provide{' '}
        <span className="text-[#1552d8]">a seamless and engaging experience,</span> built upon user
        behavior analysis and best practices in <span className="text-[#1552d8]">usability.</span> By
        structuring the app into four core sections&mdash;
        <span className="text-[#1552d8]">Dashboard, Exercises, Analytics, and Settings</span>&mdash;we
        ensure intuitive navigation and streamlined access to key features.
      </p>
      <div className="bg-[#f7f7f7] rounded-[24px] p-6 overflow-x-auto">
        <IATree data={iaData} defaultOpenIndex={3} />
      </div>
    </div>
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
  { id: 'problem-solution', label: 'Problem & Solution', content: <ProblemSolution /> },
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
