
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MÜCAHİT ÖZCAN</h3>
            <p className="text-gray-300 leading-relaxed">
              {language === 'tr' 
                ? 'Dijital dönüşüm uzmanı olarak işletmelerin teknoloji ile büyümesine yardımcı oluyorum.'
                : 'As a digital transformation expert, I help businesses grow with technology.'
              }
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'tr' ? 'Hızlı Erişim' : 'Quick Links'}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(content[language].links).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="text-left text-gray-300 hover:text-white transition-colors"
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">{content[language].copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
