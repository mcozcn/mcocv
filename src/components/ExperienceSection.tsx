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
  return <section id="experience" className="relative py-40 bg-gradient-to-br from-black via-gray-900 to-indigo-900/30 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Dynamic Floating Orbs */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => <div key={i} className={`absolute w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl animate-float`} style={{
        left: `${5 + i * 6}%`,
        top: `${10 + i % 4 * 25}%`,
        animationDelay: `${i * 0.3}s`,
        transform: `translateY(${scrollY * 0.05 * (i + 1)}px)`
      }}></div>)}
      </div>

      {/* Interactive Mouse Follower */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" style={{
      left: `${mousePosition.x}%`,
      top: `${mousePosition.y}%`,
      transform: 'translate(-50%, -50%)',
      transition: 'all 0.3s ease-out'
    }}></div>

      {/* Geometric Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-indigo-400/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-transparent rotate-12 animate-bounce-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with 3D Effect */}
        <div className="text-center mb-32 relative">
          <div className="inline-block mb-8 relative">
            <h2 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-purple-400 tracking-tighter transform hover:scale-105 transition-transform duration-500 animate-hologram py-[19px] md:text-9xl">
              {content[language].title}
            </h2>
            {/* 3D Shadow */}
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-gray-800/30 transform translate-x-4 translate-y-4 -z-10">
              {content[language].title}
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-shift blur-sm"></div>
          </div>
          <p className="text-3xl md:text-4xl font-light text-indigo-300 tracking-widest animate-fade-in delay-200 neon-purple">
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
                <Card className="glass border-2 border-indigo-500/30 backdrop-blur-xl hover:border-indigo-500/60 transition-all duration-700 group cursor-pointer transform hover:scale-110 hover:-translate-y-8 hover:rotate-2 modern-card perspective-1000">
                  <CardContent className="p-10 relative z-10">
                    {/* Period Badge */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl animate-bounce-slow transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      {exp.period}
                    </div>
                    
                    {/* Job Title */}
                    <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-300 mb-8 group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-500 transform group-hover:scale-110">
                      {exp.title}
                    </h3>
                    
                    {/* Achievements */}
                    <div className="space-y-4">
                      {exp.achievements.map((achievement, achIndex) => <div key={achIndex} className="flex items-start group-hover:translate-x-4 transition-transform duration-500" style={{
                    transitionDelay: `${achIndex * 100}ms`
                  }}>
                          <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0 animate-neural-pulse"></div>
                          <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-500">{achievement}</span>
                        </div>)}
                    </div>

                    {/* Animated Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500 delay-200"></div>
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
          <Button onClick={() => scrollToSection('projects')} className="group relative px-16 py-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-black text-2xl skew-x-[-15deg] transform hover:scale-125 hover:rotate-2 transition-all duration-700 shadow-2xl hover:shadow-indigo-500/50 overflow-hidden animate-pulse-glow">
            <span className="skew-x-[15deg] block relative z-10">{content[language].cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            
            {/* Particle Effects */}
            {[...Array(8)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-particle-float" style={{
            left: `${10 + i * 10}%`,
            top: `${20 + i % 3 * 30}%`,
            animationDelay: `${i * 0.1}s`
          }}></div>)}
          </Button>
        </div>
      </div>

      {/* Section Transition Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse"></div>
    </section>;
};
export default ExperienceSection;