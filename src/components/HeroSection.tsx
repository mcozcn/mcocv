
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/pictures/hero.png';
import { ArrowDown, Zap, Target, Globe } from 'lucide-react';

interface HeroSectionProps {
  language: 'tr' | 'en';
  setLanguage: (lang: 'tr' | 'en') => void;
}

const HeroSection = ({ language, setLanguage }: HeroSectionProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  const content = {
    tr: {
      title: 'DİJİTAL GÜÇLE',
      subtitle: 'STRATEJİK DÖNÜŞÜM',
      description: '13+ yıllık deneyimle, işletmeleri dijital çağda yeniden konumlandıran bir yol arkadaşı.',
      cta: 'BAŞLAYALIM',
      stats: [
        { number: '13+', label: 'Yıl Deneyim', icon: Target },
        { number: '50+', label: 'Proje', icon: Zap },
        { number: '100%', label: 'Sürekli İyileştirme', icon: Globe }
      ]
    },
    en: {
      title: 'DIGITAL POWER',
      subtitle: 'STRATEGIC TRANSFORMATION',
      description: 'With 13+ years of experience, a companion who repositions businesses in the digital age.',
      cta: "LET'S START",
      stats: [
        { number: '13+', label: 'Years Experience', icon: Target },
        { number: '50+', label: 'Projects', icon: Zap },
        { number: '100%', label: 'Continuous Improvement', icon: Globe }
      ]
    }
  };

  // Spherical blur effect for main title
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
      // Start subtitle glitch effect after title appears
      setTimeout(() => {
        setShowSubtitle(true);
        setGlitchActive(true);
        // Stop glitch after animation
        setTimeout(() => setGlitchActive(false), 2000);
      }, 1000);
    }, 500);

    return () => clearTimeout(timer);
  }, [language]);

  // Reset animations when language changes
  useEffect(() => {
    setShowTitle(false);
    setShowSubtitle(false);
    setGlitchActive(false);
  }, [language]);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-cyan-900/30 overflow-hidden flex items-center font-display">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Dynamic Starry Sky */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/50 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Interactive Mouse Follower */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out'
        }}
      ></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-10 left-20 w-32 h-32 border-2 border-cyan-400/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full animate-bounce-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Main Title with Spherical Blur Effect */}
            <div className="relative mb-6 h-28 md:h-32 overflow-hidden">
              <h1 className={`text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 tracking-tighter leading-none font-display transition-all duration-1000 ${
                showTitle 
                  ? 'opacity-100 blur-0 transform translate-y-0' 
                  : 'opacity-0 blur-2xl transform translate-y-8'
              }`}>
                {content[language].title}
              </h1>
              {/* Spherical blur shadow */}
              <div className={`absolute inset-0 text-5xl md:text-7xl font-black text-cyan-400/30 transform blur-md transition-all duration-1000 ${
                showTitle ? 'opacity-100' : 'opacity-0'
              }`}>
                {content[language].title}
              </div>
            </div>

            {/* Subtitle with Glitch Effect */}
            <div className="relative mb-10 h-24 md:h-28 overflow-hidden">
              {showSubtitle && (
                <>
                  <h2 
                    className={`text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 tracking-tighter leading-none font-display ${
                      glitchActive ? 'animate-pulse' : ''
                    }`}
                    style={{
                      textShadow: glitchActive ? '2px 0 0 #ff0000, -2px 0 0 #00ffff' : 'none',
                      animation: glitchActive ? 'glitch 0.3s infinite' : 'none'
                    }}
                  >
                    {content[language].subtitle}
                  </h2>
                  
                  {/* Glitch layers */}
                  {glitchActive && (
                    <>
                      <div className="absolute inset-0 text-3xl md:text-5xl font-black text-red-500/70 transform translate-x-1 animate-pulse font-display">
                        {content[language].subtitle}
                      </div>
                      <div className="absolute inset-0 text-3xl md:text-5xl font-black text-cyan-500/70 transform -translate-x-1 animate-pulse font-display">
                        {content[language].subtitle}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
            
            {/* Description */}
            <p className="text-lg text-gray-300 mb-12 animate-fade-in delay-200 max-w-xl font-sans font-light">
              {content[language].description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {content[language].stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3 animate-slide-in" style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-3xl font-bold text-white font-display">{stat.number}</div>
                    <div className="text-sm text-gray-400 uppercase font-mono font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <Button 
                onClick={scrollToAbout}
                className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl font-display"
              >
                {content[language].cta}
              </Button>
              <Button 
                onClick={scrollToAbout}
                variant="outline"
                className="group relative px-6 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold text-sm tracking-wider uppercase transition-all duration-300 transform hover:scale-105 overflow-hidden font-display"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Floating background elements */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl animate-float delay-1000"></div>
              
              {/* Profile Image Container */}
              <div className="relative">
                {/* Image */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <img 
                    src={heroImage}
                    alt="Mücahit Özcan"
                    className="w-full h-full object-cover rounded-full relative z-10 transform transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Name Below Image - Made Bigger */}
              <div className="relative group mt-8 text-center">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 tracking-wider font-display">
                  MÜCAHİT ÖZCAN
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </div>

              {/* Floating tech icons */}
              <div className="absolute top-1/4 -left-16 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center animate-float">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="absolute bottom-1/4 -right-16 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg backdrop-blur-sm border border-purple-400/30 flex items-center justify-center animate-float delay-500">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce-slow cursor-pointer" onClick={scrollToAbout}>
        <ArrowDown className="w-6 h-6" />
      </div>

      {/* Section Transition Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
