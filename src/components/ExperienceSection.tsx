import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
interface ExperienceSectionProps {
  language: 'tr' | 'en';
}
const ExperienceSection = ({
  language
}: ExperienceSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const content = {
    tr: {
      title: 'DENEYİMLER',
      subtitle: 'PROFESYONEL YOLCULUK',
      cta: 'PROJELERİMİ GÖR',
      experiences: [{
        title: 'Freelance Dijital Pazarlama Yöneticisi',
        period: '2020 – Günümüz',
        achievements: ['Çeşitli sektörlerdeki KOBİ\'ler için dijital pazarlama stratejileri geliştirme', 'E-ticaret platformlarında %30 satış artışı sağlama', 'SEO optimizasyonu ile organik erişimde %50 büyüme', 'Sosyal medya ve içerik stratejileriyle marka bilinirliğini artırma']
      }, {
        title: 'GSK – Kıdemli Müşteri Yönetimi Uzmanı',
        period: '2015 – 2018',
        achievements: ['CRM optimizasyonu ile müşteri şikayetlerinde %20 azalma', 'Yıllık hedeflerde %95 başarı oranı', 'Müşteri veri analitiği ile pazarlama stratejilerini yönlendirme', '180 eczanenin yönetimi ve performans değerlendirmesi']
      }, {
        title: 'Turkcell – Teknoloji Uzmanı',
        period: '2009 – 2011',
        achievements: ['Akıllı cihaz satışlarında %15 artış', 'Ekip eğitimleriyle mağaza performansını iyileştirme', 'Müşteri deneyimini iyileştiren süreç optimizasyonları', 'Yeni ürün lansmanlarında teknik eğitim koordinasyonu']
      }, {
        title: 'Teknosa – Mağaza Yöneticisi',
        period: '2005 – 2008',
        achievements: ['Operasyonel verimlilik ve stok optimizasyonu', 'Ziyaretçi dönüşüm oranında artış', 'Sürekli satış hedefi başarısı ve bölge birincilikleri', 'Müşteri odaklı mağaza kültürü oluşturma']
      }]
    },
    en: {
      title: 'EXPERIENCE',
      subtitle: 'PROFESSIONAL JOURNEY',
      cta: 'VIEW MY PROJECTS',
      experiences: [{
        title: 'Freelance Digital Marketing Manager',
        period: '2020 – Present',
        achievements: ['Developing digital marketing strategies for SMEs across various sectors', 'Achieving 30% sales increase on e-commerce platforms', '50% growth in organic reach through SEO optimization', 'Increasing brand awareness through social media and content strategies']
      }, {
        title: 'GSK – Senior Customer Management Specialist',
        period: '2015 – 2018',
        achievements: ['20% reduction in customer complaints through CRM optimization', '95% success rate in annual targets', 'Directing marketing strategies through customer data analytics', 'Management and performance evaluation of 180 pharmacies']
      }, {
        title: 'Turkcell – Technology Specialist',
        period: '2009 – 2011',
        achievements: ['15% increase in smart device sales', 'Improving store performance through team training', 'Process optimizations improving customer experience', 'Technical training coordination for new product launches']
      }, {
        title: 'Teknosa – Store Manager',
        period: '2005 – 2008',
        achievements: ['Operational efficiency and inventory optimization', 'Increase in visitor conversion rate', 'Continuous sales target achievement and regional championships', 'Creating customer-focused store culture']
      }]
    }
  };
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth * 100,
        y: e.clientY / window.innerHeight * 100
      });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="experience" className="relative py-40 bg-transparent overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Section Header with 3D Effect */}
        <div className="text-center mb-32 relative">
          <div className="inline-block mb-8 relative">
            <h2 className="text-8xl font-extralight text-white tracking-tight py-[19px] md:text-9xl">
              {content[language].title}
            </h2>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-px bg-white/20"></div>
          </div>
          <p className="text-3xl md:text-4xl font-extralight text-white/75 tracking-tight mt-8">
            {content[language].subtitle}
          </p>
        </div>

        {/* Experience Timeline with Advanced 3D Cards */}
        <div className="max-w-6xl mx-auto space-y-16">
          {content[language].experiences.map((exp, index) => <div key={index} className={`relative group ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-16`}>
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden lg:block animate-pulse-glow"></div>
              
              {/* Experience Card */}
              <div className="lg:w-1/2 relative">
                <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group cursor-pointer transform hover:scale-105">
                  <CardContent className="p-10 relative z-10">
                    {/* Period Badge */}
                    <div className="absolute -top-4 -right-4 border border-white/10 bg-white/10 text-white px-6 py-3 rounded-full text-sm font-light tracking-tight backdrop-blur-sm">
                      {exp.period}
                    </div>
                    
                    {/* Job Title */}
                    <h3 className="text-3xl font-extralight text-white mb-8 transition-all duration-300">
                      {exp.title}
                    </h3>
                    
                    {/* Achievements */}
                    <div className="space-y-4">
                      {exp.achievements.map((achievement, achIndex) => <div key={achIndex} className="flex items-start transition-transform duration-300">
                          <div className="w-1 h-1 bg-white/40 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-white/75 leading-relaxed font-light">{achievement}</span>
                        </div>)}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Visual Element */}
              <div className="lg:w-1/2 relative flex justify-center">
                <div className="relative group">
                  <div className="w-48 h-48 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
                  <div className="absolute inset-0 w-32 h-32 m-auto border-2 border-indigo-400/50 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-0 w-24 h-24 m-auto bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl animate-bounce-slow">
                    {index + 1}
                  </div>
                  
                  {/* Orbiting Elements */}
                  {[...Array(3)].map((_, i) => <div key={i} className={`absolute w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-spin-slow`} style={{
                top: '50%',
                left: '50%',
                transformOrigin: `${40 + i * 10}px`,
                animationDelay: `${i * 0.5}s`
              }}></div>)}
                </div>
              </div>
            </div>)}
        </div>
        
        {/* Enhanced CTA Button */}
        <div className="text-center mt-24">
          <button onClick={() => scrollToSection('projects')} className="group relative px-16 py-8 border border-white/10 bg-white/10 text-white font-light text-2xl tracking-tight transition-all duration-300 hover:bg-white/20 backdrop-blur-sm">
            {content[language].cta}
          </button>
        </div>
      </div>

      {/* Section Transition Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>;
};
export default ExperienceSection;