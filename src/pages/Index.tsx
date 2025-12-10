
import { useState, Suspense } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import NeuralBackground from '../components/ui/neural-background';

const Index = () => {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');

  return (
    <main className="relative min-h-screen bg-transparent">
      {/* Global Neural Network Background */}
      <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
        <NeuralBackground />
      </Suspense>
      
      <div className="relative z-10">
        <Navigation language={language} setLanguage={setLanguage} />
        <HeroSection language={language} setLanguage={setLanguage} />
        <AboutSection language={language} />
        <ExperienceSection language={language} />
        <ProjectsSection language={language} />
        <SkillsSection language={language} />
        <ContactSection language={language} />
        <Footer language={language} />
      </div>
    </main>
  );
};

export default Index;
