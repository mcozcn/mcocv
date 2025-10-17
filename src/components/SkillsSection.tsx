import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface SkillsSectionProps {
  language: 'tr' | 'en';
}

const SkillsSection = ({ language }: SkillsSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const content = {
    tr: {
      title: 'YETENEKLER',
      subtitle: 'TEKNİK HÂKİMİYET',
      cta: 'PROJE FİKRİNİZ Mİ VAR?',
      skillLevel: 'Yetkinlik',
      skills: [
        {
          name: 'Stratejik Pazarlama',
          description: 'Dijital strateji, marka konumlandırma',
          level: 90,
          icon: '🎯',
          color: 'from-red-500 to-orange-500'
        },
        {
          name: 'Dijital Analitik ve CRM',
          description: 'Veri analizi, müşteri ilişkileri yönetimi',
          level: 95,
          icon: '📊',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          name: 'Proje Yönetimi',
          description: 'Süreç yönetimi, proje planlama',
          level: 88,
          icon: '📋',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Grafik ve Web Tasarımı',
          description: 'UI/UX, görsel iletişim',
          level: 85,
          icon: '🎨',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'SEO ve Performans Reklamcılığı',
          description: 'Google Ads, içerik stratejisi',
          level: 92,
          icon: '🔍',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          name: 'Ekip Yönetimi ve Eğitim',
          description: 'Liderlik, mentorluk',
          level: 90,
          icon: '👥',
          color: 'from-indigo-500 to-purple-500'
        }
      ]
    },
    en: {
      title: 'SKILLS',
      subtitle: 'TECHNICAL MASTERY',
      cta: 'HAVE A PROJECT IDEA?',
      skillLevel: 'Proficiency',
      skills: [
        {
          name: 'Strategic Marketing',
          description: 'Digital strategy, brand positioning',
          level: 90,
          icon: '🎯',
          color: 'from-red-500 to-orange-500'
        },
        {
          name: 'Digital Analytics & CRM',
          description: 'Data analysis, customer relationship management',
          level: 95,
          icon: '📊',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          name: 'Project Management',
          description: 'Process management, project planning',
          level: 88,
          icon: '📋',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Graphic & Web Design',
          description: 'UI/UX, visual communication',
          level: 85,
          icon: '🎨',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'SEO & Performance Advertising',
          description: 'Google Ads, content strategy',
          level: 92,
          icon: '🔍',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          name: 'Team Management & Training',
          description: 'Leadership, mentoring',
          level: 90,
          icon: '👥',
          color: 'from-indigo-500 to-purple-500'
        }
      ]
    }
  };

  useEffect(() => {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="relative py-40 bg-gradient-to-br from-black via-gray-900 to-orange-900/30 overflow-hidden font-display">
      {/* Neural Network Effect */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 rounded-full border border-orange-400/20 animate-pulse"
            style={{
              left: `${5 + (i % 5) * 20}%`,
              top: `${10 + Math.floor(i / 5) * 20}%`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Interactive Mouse Follower */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out'
        }}
      />

      {/* Geometric Elements */}
      <div className="absolute top-20 right-20 w-48 h-48 border-2 border-orange-400/30 rotate-45 animate-spin"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-r from-red-500/20 to-transparent rotate-12 animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-32 relative">
          <div className="inline-block mb-8 relative">
            <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-300 to-pink-400 tracking-tighter transform hover:scale-105 transition-transform duration-500">
              {content[language].title}
            </h2>
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-orange-400/30 transform blur-sm animate-pulse">
              {content[language].title}
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 blur-sm"></div>
          </div>
          <p className="text-3xl md:text-4xl font-light text-orange-300 tracking-widest">
            {content[language].subtitle}
          </p>
        </div>
        
        {/* Skills Grid with Unique Hover Effects */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {content[language].skills.map((skill, index) => (
              <Card 
                key={index} 
                className={`
                  glass border-2 border-orange-500/30 backdrop-blur-xl 
                  transition-all duration-700 ease-out
                  group cursor-pointer 
                  relative overflow-hidden
                  hover:border-orange-400/60
                  hover:shadow-[0_20px_80px_rgba(251,146,60,0.3)]
                  hover:-translate-y-4
                  hover:rotate-1
                  hover:scale-[1.02]
                  ${index % 2 === 0 ? 'lg:-mt-8' : 'lg:mt-8'}
                `}
              >
                {/* Morphing Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20 animate-pulse"></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-orange-400 rounded-full animate-bounce"
                      style={{
                        left: `${10 + (i % 4) * 25}%`,
                        top: `${20 + Math.floor(i / 4) * 40}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>

                <CardContent className="p-10 text-center relative z-10">
                  {/* Skill Icon with Magnetic Effect */}
                  <div className="relative mb-8">
                    <div className={`
                      w-24 h-24 mx-auto bg-gradient-to-r ${skill.color} rounded-full 
                      flex items-center justify-center text-4xl 
                      transition-all duration-1000 ease-out
                      shadow-2xl
                      group-hover:shadow-[0_0_60px_rgba(251,146,60,0.8)]
                      group-hover:rotate-[720deg]
                      group-hover:scale-125
                      relative overflow-hidden
                    `}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1500"></div>
                      <span className="relative z-10 filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">{skill.icon}</span>
                    </div>
                    
                    {/* Electric Ring Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-orange-400/50 rounded-full animate-spin"></div>
                      <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 border border-red-400/30 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  
                  {/* Skill Name with Glitch Effect */}
                  <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-500 group-hover:text-orange-300 group-hover:tracking-[0.3em] relative">
                    <span className="relative z-10">{skill.name}</span>
                    <span className="absolute inset-0 text-orange-500/50 transform translate-x-0.5 translate-y-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{skill.name}</span>
                  </h3>
                  
                  {/* Description with Wave Animation */}
                  <p className="text-gray-300 text-sm mb-8 leading-relaxed transition-all duration-700 group-hover:text-white group-hover:transform group-hover:scale-105">
                    {skill.description}
                  </p>
                  
                  {/* Skill Level with Enhanced Progress Bar */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 font-mono">{content[language].skillLevel}</span>
                      <span className={`text-lg font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-display group-hover:animate-pulse`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Liquid Progress Bar */}
                    <div className="relative w-full h-4 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/50 group-hover:border-orange-400/50 transition-all duration-500">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out relative group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-full"></div>
                        
                        {/* Flowing Effect */}
                        <div className="absolute top-0 left-0 w-full h-full">
                          <div className="w-3 h-3 bg-white/60 rounded-full absolute top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ left: `${skill.level - 5}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Dynamic Corner Elements */}
                <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-orange-400/0 group-hover:border-orange-400/80 transition-all duration-700 transform group-hover:scale-110"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-orange-400/0 group-hover:border-orange-400/80 transition-all duration-700 transform group-hover:scale-110"></div>
                
                {/* Energy Lines */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500/60 transition-all duration-700 transform -translate-y-1/2"></div>
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500/60 transition-all duration-700 transform -translate-x-1/2"></div>
              </Card>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-24">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-16 py-8 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold text-2xl transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-orange-500/50 overflow-hidden"
            >
              <span className="relative z-10">{content[language].cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Section Transition Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
    </section>
  );
};

export default SkillsSection;
