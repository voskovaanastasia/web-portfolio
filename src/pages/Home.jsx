import HeroSection from '../components/HeroSection';
import HowIWorkSection from '../components/HowIWorkSection';
import SelectedWork from '../components/SelectedWork';
import MyToolkitSection from '../components/MyToolkitSection';
import ImpactSection from '../components/ImpactSection';
import ExperienceSection from '../components/ExperienceSection';
import AiDesignerSection from '../components/AiDesignerSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="flex flex-col">
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
