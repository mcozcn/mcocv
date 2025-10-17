
import { useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');

  return (
    <main className="min-h-screen bg-background">
      <Navigation language={language} setLanguage={setLanguage} />
      <HeroSection language={language} setLanguage={setLanguage} />
      <AboutSection language={language} />
      <ExperienceSection language={language} />
      <ProjectsSection language={language} />
      <SkillsSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </main>
  );
};

export default Index;
