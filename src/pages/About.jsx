import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
const EducationSection = lazy(() => import('../components/EducationSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));

// Placeholder heights ≈ each section's rendered height at 375 / 768 / 1440 px, so the page keeps
// its length (and scroll position) while a section chunk is still loading.
const sections = [
  { id: 'how-i-work', Component: HowIWorkSection, space: 'min-h-[2430px] md:min-h-[2100px] lg:min-h-[1390px]' },
  { id: 'recommendations', Component: RecommendationsSection, space: 'min-h-[720px] md:min-h-[620px] lg:min-h-[530px]' },
  { id: 'toolkit', Component: MyToolkitSection, space: 'min-h-[1320px] md:min-h-[1020px] lg:min-h-[890px]' },
  { id: 'impact', Component: ImpactSection, space: 'min-h-[1180px] md:min-h-[950px] lg:min-h-[570px]' },
  { id: 'ai-designer', Component: AiDesignerSection, space: 'min-h-[1900px] md:min-h-[1400px] lg:min-h-[900px]' },
  { id: 'experience', Component: ExperienceSection, space: 'min-h-[3540px] md:min-h-[2750px] lg:min-h-[2250px]' },
  { id: 'education', Component: EducationSection, space: 'min-h-[1440px] md:min-h-[1240px] lg:min-h-[1010px]' },
  { id: 'contact', Component: ContactSection, space: 'min-h-[2170px] md:min-h-[1520px] lg:min-h-[1230px]' },
];

// Tells the page a lazy section has mounted, so the section menu can start observing it.
function Loaded({ onLoaded }) {
  useEffect(onLoaded, [onLoaded]);
  return null;
}

import useDocumentMeta from '../hooks/useDocumentMeta';

// "/" and "/about" share this component but now carry distinct titles,
// descriptions, and canonicals — each is its own indexable page rather than
// one canonicalized to the other.
export default function About() {
  const { pathname } = useLocation();
  const isAboutRoute = pathname === '/about';
  const [renderRest, setRenderRest] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const onLoaded = useCallback(() => setLoadedCount((n) => n + 1), []);

  // Hold the lazy sections back until the hero and featured case have painted.
  useEffect(() => {
    const id = requestAnimationFrame(() => setRenderRest(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useDocumentMeta(
    isAboutRoute
      ? {
          title: 'About — Anastasiia Voskova',
          description:
            'Product designer with a Computer Science background, based in Granada, Spain — six years across SaaS, fintech, and healthcare products.',
          path: '/about',
        }
      : {
          title: 'Anastasiia Voskova — UX/UI & Product Designer',
          description:
            'A product designer who makes complex, data-dense products feel simple and grounds every decision in research.',
          path: '/',
        }
  );

  return (
    <main id="main-content" className="flex flex-col">
      <SectionMenu refreshKey={loadedCount} />
      <HeroSection />
      <SelectedWork />
      {sections.map(({ id, Component, space }) => (
        <Suspense key={id} fallback={<div id={id} aria-hidden="true" className={space} />}>
          {renderRest ? (
            <>
              <Component />
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
