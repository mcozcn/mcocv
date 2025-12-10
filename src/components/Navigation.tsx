
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  language: 'tr' | 'en';
  setLanguage: (lang: 'tr' | 'en') => void;
}

const Navigation = ({ language, setLanguage }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const content = {
    tr: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      experience: 'Deneyim',
      projects: 'Projeler',
      skills: 'Yetenekler',
      contact: 'İletişim',
      cta: 'BAĞLANTI'
    },
    en: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      cta: 'CONNECT'
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo with Fixed Text */}
          <div className="relative group">
            <div className="text-lg sm:text-xl md:text-2xl font-extralight text-white tracking-tight">
              MÜCAHİT ÖZCAN
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300"></div>
          </div>
          
          {/* Desktop Navigation - Minimal & Modern */}
          <div className="hidden lg:flex items-center space-x-12">
            {Object.entries(content[language]).slice(0, 6).map(([key, value]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`relative text-sm font-light tracking-tight uppercase transition-all duration-300 group ${
                  activeSection === key ? 'text-white' : 'text-white/60 hover:text-white/80'
                }`}
              >
                {value}
                <span className={`absolute -bottom-1 left-0 w-0 h-px bg-white/40 transition-all duration-300 group-hover:w-full ${
                  activeSection === key ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </div>

          {/* Language Switcher - Minimal */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage('tr')}
              className={`px-3 py-1 text-xs font-light tracking-tight transition-all duration-300 ${
                language === 'tr' 
                  ? 'text-white border-b border-white/40' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              TR
            </button>
            <div className="w-px h-4 bg-white/20"></div>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-xs font-light tracking-tight transition-all duration-300 ${
                language === 'en' 
                  ? 'text-white border-b border-white/40' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
