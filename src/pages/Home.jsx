import HeroSection from '../components/HeroSection';
import HowIWorkSection from '../components/HowIWorkSection';
import SelectedWork from '../components/SelectedWork';
import MyToolkitSection from '../components/MyToolkitSection';
import SideProjectsSection from '../components/SideProjectsSection';
import AboutSection from '../components/AboutSection';
import ImpactSection from '../components/ImpactSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <HowIWorkSection />
      <SelectedWork />
      <MyToolkitSection />
      <SideProjectsSection />
      <AboutSection />
      <ImpactSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
