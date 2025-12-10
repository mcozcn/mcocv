
import NeuralNetworkHero from '@/components/ui/neural-network-hero';
import heroImage from '@/pictures/hero.png';
import { ArrowDown, Target, Zap, Globe } from 'lucide-react';

interface HeroSectionProps {
  language: 'tr' | 'en';
  setLanguage: (lang: 'tr' | 'en') => void;
}

const HeroSection = ({ language, setLanguage }: HeroSectionProps) => {

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


  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Prepare micro details from stats
  const microDetails = content[language].stats.map(stat => `${stat.number} ${stat.label}`);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Neural Network Hero with Original Minimal Design */}
      <NeuralNetworkHero
        title={`${content[language].title} ${content[language].subtitle}`}
        description={content[language].description}
        ctaButtons={[
          { 
            text: content[language].cta, 
            href: '#about', 
            primary: true,
            onClick: scrollToAbout
          },
          { 
            text: language === 'tr' ? 'Daha Fazla' : 'Learn More', 
            href: '#about',
            onClick: scrollToAbout
          }
        ]}
        microDetails={microDetails}
      />

      {/* Profile Image - Mobile: Below Content, Desktop: Right Side Overlay */}
      {/* Mobile Layout */}
      <div className="lg:hidden relative z-10 mt-8 sm:mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="relative group">
              {/* Profile Image Container */}
              <div className="relative">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                  <img 
                    src={heroImage}
                    alt="Mücahit Özcan"
                    className="w-full h-full object-cover rounded-full relative z-10 transform transition-all duration-700 group-hover:scale-105 border border-white/10"
                  />
                  
                  {/* Minimal glow effect */}
                  <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              </div>

              {/* Name Below Image - Minimal Style */}
              <div className="relative group mt-4 sm:mt-6 text-center">
                <div className="text-xl sm:text-2xl font-light tracking-tight text-white/90">
                  MÜCAHİT ÖZCAN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Right Side Overlay */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
        <div className="container mx-auto px-4 h-full">
          <div className="max-w-7xl mx-auto h-full flex items-start pt-44 md:px-10 lg:px-16">
            <div className="w-full flex justify-end">
              <div className="w-1/2 flex justify-end pointer-events-auto">
                <div className="relative group">
                  {/* Profile Image Container */}
                  <div className="relative">
                    <div className="relative w-96 lg:h-96 xl:w-[500px] xl:h-[500px]">
                      <img 
                        src={heroImage}
                        alt="Mücahit Özcan"
                        className="w-full h-full object-cover rounded-full relative z-10 transform transition-all duration-700 group-hover:scale-105 border border-white/10"
                      />
                      
                      {/* Minimal glow effect */}
                      <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    </div>
                  </div>

                  {/* Name Below Image - Minimal Style */}
                  <div className="relative group mt-6 text-center">
                    <div className="text-3xl lg:text-4xl font-light tracking-tight text-white/90">
                      MÜCAHİT ÖZCAN
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Minimal Style */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce-slow cursor-pointer pointer-events-auto z-20 hover:text-white/80 transition-colors" onClick={scrollToAbout}>
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;
