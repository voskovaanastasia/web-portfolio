import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import SelectedWork from '../components/SelectedWork';
import SectionMenu from '../components/SectionMenu';
// Below the first screen and the featured case: loaded as separate chunks after first paint.
const HowIWorkSection = lazy(() => import('../components/HowIWorkSection'));
const RecommendationsSection = lazy(() => import('../components/RecommendationsSection'));
const MyToolkitSection = lazy(() => import('../components/MyToolkitSection'));
const ImpactSection = lazy(() => import('../components/ImpactSection'));
const AiDesignerSection = lazy(() => import('../components/AiDesignerSection'));
const ExperienceSection = lazy(() => import('../components/ExperienceSection'));

// Placeholder heights ≈ each section's rendered height at 375 / 768 / 1440 px, so the page keeps
// its length (and scroll position) while a section chunk is still loading.
const sections = [
  { id: 'impact', Component: ImpactSection, space: 'min-h-[1180px] md:min-h-[950px] lg:min-h-[570px]' },
  { id: 'how-i-work', Component: HowIWorkSection, space: 'min-h-[1500px] md:min-h-[900px] lg:min-h-[640px]', props: { compact: true } },
  { id: 'toolkit', Component: MyToolkitSection, space: 'min-h-[900px] md:min-h-[720px] lg:min-h-[580px]', props: { compact: true } },
  { id: 'recommendations', Component: RecommendationsSection, space: 'min-h-[720px] md:min-h-[620px] lg:min-h-[530px]' },
  { id: 'ai-designer', Component: AiDesignerSection, space: 'min-h-[1850px] md:min-h-[1350px] lg:min-h-[850px]' },
  { id: 'experience', Component: ExperienceSection, space: 'min-h-[940px] md:min-h-[780px] lg:min-h-[700px]', props: { compact: true } },
];

// Tells the page a lazy section has mounted, so the section menu can start observing it.
function Loaded({ onLoaded }) {
  useEffect(onLoaded, [onLoaded]);
  return null;
}

import useDocumentMeta from '../hooks/useDocumentMeta';

export default function Home() {
  const [renderRest, setRenderRest] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const onLoaded = useCallback(() => setLoadedCount((n) => n + 1), []);

  // Hold the lazy sections back until the hero and featured case have painted.
  useEffect(() => {
    const id = requestAnimationFrame(() => setRenderRest(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useDocumentMeta({
    title: 'Anastasiia Voskova — UX/UI & Product Designer',
    description:
      'A product designer who makes complex, data-dense products feel simple and grounds every decision in research.',
    path: '/',
  });

  return (
    <main id="main-content" data-route="/" className="flex flex-col">
      <SectionMenu refreshKey={loadedCount} />
      <HeroSection />
      <SelectedWork />
      {sections.map(({ id, Component, space, props }) => (
        <Suspense key={id} fallback={<div id={id} aria-hidden="true" className={space} />}>
          {renderRest ? (
            <>
              <Component {...props} />
              <Loaded onLoaded={onLoaded} />
            </>
          ) : (
            <div id={id} aria-hidden="true" className={space} />
          )}
        </Suspense>
      ))}
    </main>
  );
}
