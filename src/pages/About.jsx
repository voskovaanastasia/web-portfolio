import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import HowIWorkSection from '../components/HowIWorkSection';
import SelectedWork from '../components/SelectedWork';
import MyToolkitSection from '../components/MyToolkitSection';
import ImpactSection from '../components/ImpactSection';
import ExperienceSection from '../components/ExperienceSection';
import AiDesignerSection from '../components/AiDesignerSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';
import SectionMenu from '../components/SectionMenu';
import useDocumentMeta from '../hooks/useDocumentMeta';

// "/" and "/about" share this component but now carry distinct titles,
// descriptions, and canonicals — each is its own indexable page rather than
// one canonicalized to the other.
export default function About() {
  const { pathname } = useLocation();
  const isAboutRoute = pathname === '/about';

  useDocumentMeta(
    isAboutRoute
      ? {
          title: 'About — Anastasiia Voskova',
          description:
            'Product designer with a Computer Science background, based in Granada, Spain — six years across SaaS, fintech, and healthcare products.',
          path: '/about',
        }
      : {
          title: 'Anastasiia Voskova — Product Designer',
          description:
            'A product designer who makes complex, data-dense products feel simple and grounds every decision in research.',
          path: '/',
        }
  );

  return (
    <main id="main-content" className="flex flex-col">
      <SectionMenu />
      <HeroSection />
      <HowIWorkSection />
      <SelectedWork />
      <MyToolkitSection />
      <ImpactSection />
      <ExperienceSection />
      <AiDesignerSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
