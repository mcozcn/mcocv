
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface AboutSectionProps {
  language: 'tr' | 'en';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const content = {
    tr: {
      title: 'HAKKIMDA',
      subtitle: 'DİJİTAL STRATEJİ UZMANI',
      description1: 'Dijital strateji, proje yönetimi ve yaratıcı çözümler alanında 13+ yıllık deneyime sahip bir uzmanım. Teknoloji ile insan odaklı yaklaşımları harmanlayarak, işletmelerin dijital dönüşüm süreçlerinde güvenilir bir rehber olmayı amaçlıyorum.',
      description2: 'CRM sistemlerinden dijital pazarlama stratejilerine, mobil uygulamalardan web tasarımına kadar geniş bir yelpazede hizmet veriyorum. Her projede ölçülebilir sonuçlar elde etmeye ve müşteri memnuniyetini en üst düzeyde tutmaya odaklanırım.',
      description3: 'Sürekli öğrenme ve gelişim felsefesiyle, sektördeki en güncel trendleri takip ederek müşterilerime en iyi çözümleri sunmaya devam ediyorum.',
      cta: 'DENEYİMLER',
      stats: [
        { number: '13+', label: 'Yıl Deneyim' },
        { number: '50+', label: 'Proje' },
        { number: '95%', label: 'Müşteri Memnuniyeti' },
        { number: '∞', label: 'Sürekli İyileştirme' }
      ],
      strengths: {
        strategic: {
          title: 'Stratejik Vizyon',
          description: 'Veri odaklı karar alma ve uzun vadeli planlama ile işletmelerin geleceğini şekillendirme',
          icon: '🎯'
        },
        leadership: {
          title: 'Liderlik',
          description: 'Çevik metodolojiler ve ekip motivasyonu ile projeleri başarıya ulaştırma',
          icon: '⚡'
        },
        technical: {
          title: 'Teknik Uzmanlık',
          description: 'Dijital platformlar ve modern teknolojilerde derin bilgi ve deneyim',
          icon: '🚀'
        },
        customer: {
          title: 'Müşteri Odaklılık',
          description: 'Kullanıcı deneyimi ve memnuniyet odaklı çözümler geliştirme',
          icon: '💎'
        }
      }
    },
    en: {
      title: 'ABOUT ME',
      subtitle: 'DIGITAL STRATEGY EXPERT',
      description1: 'I am an expert with 13+ years of experience in digital strategy, project management, and creative solutions. I aim to be a trusted guide for businesses in their digital transformation processes by blending technology with human-centered approaches.',
      description2: 'I provide services across a wide range, from CRM systems to digital marketing strategies, from mobile applications to web design. In every project, I focus on achieving measurable results and maintaining the highest level of customer satisfaction.',
      description3: 'With a philosophy of continuous learning and development, I follow the latest trends in the industry and continue to provide the best solutions to my clients.',
      cta: 'EXPERIENCE',
      stats: [
        { number: '13+', label: 'Years Experience' },
        { number: '50+', label: 'Projects' },
        { number: '95%', label: 'Client Satisfaction' },
        { number: '∞', label: 'Continuous Improvement' }
      ],
      strengths: {
        strategic: {
          title: 'Strategic Vision',
          description: 'Shaping the future of businesses with data-driven decision making and long-term planning',
          icon: '🎯'
        },
        leadership: {
          title: 'Leadership',
          description: 'Leading projects to success with agile methodologies and team motivation',
          icon: '⚡'
        },
        technical: {
          title: 'Technical Expertise',
          description: 'Deep knowledge and experience in digital platforms and modern technologies',
          icon: '🚀'
        },
        customer: {
          title: 'Customer Focus',
          description: 'Developing user experience and satisfaction-oriented solutions',
          icon: '💎'
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
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
    <section id="about" className="relative py-40 bg-transparent overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Section Header with 3D Effect */}
        <div className="text-center mb-32 relative">
          <div className="inline-block mb-8 relative">
            <h2 className="text-8xl md:text-9xl font-extralight text-white tracking-tight">
              {content[language].title}
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-px bg-white/20"></div>
          </div>
          <p className="text-3xl md:text-4xl font-extralight text-white/75 tracking-tight mt-8">
            {content[language].subtitle}
          </p>
        </div>

        {/* Stats Row with Enhanced Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {content[language].stats.map((stat, index) => (
            <div key={index} className="text-center group relative">
                <div className="relative rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="relative z-10">
                  <div className="text-5xl md:text-7xl font-extralight text-white mb-4">
                    {stat.number}
                  </div>
                  <p className="text-white/60 text-sm font-light tracking-tight uppercase">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid with Parallax */}
        <div className="grid lg:grid-cols-2 gap-32 items-center mb-32">
          {/* Text Content with Advanced Typography */}
          <div className="space-y-10 relative">
            <div className="space-y-8 text-white/75">
              <p className="text-xl leading-relaxed border-l border-white/10 pl-8 font-light">
                {content[language].description1}
              </p>
              <p className="text-xl leading-relaxed border-l border-white/10 pl-8 font-light">
                {content[language].description2}
              </p>
              <p className="text-xl leading-relaxed border-l border-white/10 pl-8 font-light">
                {content[language].description3}
              </p>
            </div>
            
            <button 
              onClick={() => scrollToSection('experience')}
              className="group relative px-12 py-6 border border-white/10 bg-white/10 text-white font-light text-xl tracking-tight transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
            >
              {content[language].cta}
            </button>
          </div>
          
          {/* Interactive Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700 animate-pulse-glow"></div>
            <div className="relative overflow-hidden rounded-3xl border-2 border-cyan-500/30 transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                alt="Digital transformation"
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Floating Tech Icons */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-cyan-500/80 rounded-full flex items-center justify-center text-white font-bold animate-bounce-slow">
                AI
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-500/80 rounded-full flex items-center justify-center text-white font-bold animate-bounce-slow delay-300">
                UX
              </div>
            </div>
            
            {/* Geometric Accents */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-2 border-cyan-400 rotate-45 animate-spin-slow"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border border-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Strengths Grid with Advanced Hover Effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(content[language].strengths).map(([key, strength], index) => (
            <Card key={key} className={`relative border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group cursor-pointer transform hover:scale-105 ${
              index % 2 === 0 ? 'lg:-mt-12' : 'lg:mt-12'
            }`}>
              <CardContent className="p-10 text-center relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-all duration-300">
                  {strength.icon}
                </div>
                <h3 className="text-2xl font-extralight text-white mb-4 transition-colors duration-300">
                  {strength.title}
                </h3>
                <p className="text-white/60 leading-relaxed font-light transition-colors duration-300">
                  {strength.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Section Transition Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      
      {/* Minimal Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default AboutSection;
