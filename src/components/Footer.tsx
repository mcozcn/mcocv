interface FooterProps {
  language: 'tr' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    tr: {
      copyright: '© 2025 Mücahit Özcan. Tüm hakları saklıdır.',
      links: {
        home: 'Anasayfa',
        about: 'Hakkımda',
        experience: 'Deneyimler',
        projects: 'Projeler',
        skills: 'Yetenekler',
        contact: 'İletişim'
      }
    },
    en: {
      copyright: '© 2025 Mücahit Özcan. All rights reserved.',
      links: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact'
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-transparent text-white py-8 sm:py-12 border-t border-white/10 overflow-hidden">
      <div className="relative z-20 container mx-auto px-4">
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-extralight mb-3 sm:mb-4 tracking-tight">MÜCAHİT ÖZCAN</h3>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed font-light">
              {language === 'tr' 
                ? 'Dijital dönüşüm uzmanı olarak işletmelerin teknoloji ile büyümesine yardımcı oluyorum.'
                : 'As a digital transformation expert, I help businesses grow with technology.'
              }
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-extralight mb-3 sm:mb-4 tracking-tight">
              {language === 'tr' ? 'Hızlı Erişim' : 'Quick Links'}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(content[language].links).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="text-left text-sm sm:text-base text-white/60 hover:text-white/80 transition-colors font-light tracking-tight"
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-white/60 text-xs sm:text-sm font-light tracking-tight">{content[language].copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
