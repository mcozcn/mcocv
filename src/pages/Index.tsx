
import { useState, Suspense, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import NeuralBackground from '../components/ui/neural-background';
import { SEOContent } from '../components/SEOContent';
import { getLanguageFromRequest } from '../lib/seo-content';

interface IndexProps {
  initialLanguage?: 'tr' | 'en';
}

const Index = ({ initialLanguage }: IndexProps = {}) => {
  // Detect language from URL on client-side, or use initial from SSR
  const [language, setLanguage] = useState<'tr' | 'en'>(() => {
    if (initialLanguage) return initialLanguage;
    if (typeof window !== 'undefined') {
      return getLanguageFromRequest(window.location.href);
    }
    return 'tr';
  });
  
  useEffect(() => {
    // Update language when URL changes
    if (typeof window !== 'undefined') {
      const lang = getLanguageFromRequest(window.location.href);
      setLanguage(lang);
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-transparent">
      {/* Global Neural Network Background */}
      <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
        <NeuralBackground />
      </Suspense>
      
      <div className="relative z-10">
        {/* SEO-friendly plain HTML content (visually hidden) */}
        <SEOContent language={language} />
        
        {/* Visual interactive content */}
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
