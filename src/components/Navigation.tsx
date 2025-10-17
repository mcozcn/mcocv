
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
        ? 'bg-black/80 backdrop-blur-2xl border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo with Fixed Text */}
          <div className="relative group">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 tracking-wider">
              MÜCAHİT ÖZCAN
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
          </div>
          
          {/* Desktop Navigation - Minimal & Modern */}
          <div className="hidden lg:flex items-center space-x-12">
            {Object.entries(content[language]).slice(0, 6).map(([key, value]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`relative text-sm font-medium tracking-wider uppercase transition-all duration-300 group ${
                  activeSection === key ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {value}
                <span className={`absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full ${
                  activeSection === key ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            {/* Language Switcher - Redesigned */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('tr')}
                className={`px-3 py-1 text-xs font-bold tracking-wider transition-all duration-300 ${
                  language === 'tr' 
                    ? 'text-cyan-400 border-b border-cyan-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                TR
              </button>
              <div className="w-px h-4 bg-gray-600"></div>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-bold tracking-wider transition-all duration-300 ${
                  language === 'en' 
                    ? 'text-cyan-400 border-b border-cyan-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
            
            {/* CTA Button - Unique Design */}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="relative px-6 py-2 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold text-sm tracking-wider uppercase transition-all duration-300 transform hover:scale-105 skew-x-[-12deg]"
            >
              <span className="skew-x-[12deg] block">{content[language].cta}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
