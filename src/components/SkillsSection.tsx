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
    <section id="skills" className="relative py-40 bg-transparent overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-32 relative">
          <div className="inline-block mb-8 relative">
            <h2 className="text-8xl md:text-9xl font-extralight text-white tracking-tight">
              {content[language].title}
            </h2>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-px bg-white/20"></div>
          </div>
          <p className="text-3xl md:text-4xl font-extralight text-white/75 tracking-tight mt-8">
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
                  border border-white/10 bg-white/5 backdrop-blur-sm
                  transition-all duration-300
                  group cursor-pointer 
                  relative overflow-hidden
                  hover:border-white/20
                  hover:scale-105
                  ${index % 2 === 0 ? 'lg:-mt-8' : 'lg:mt-8'}
                `}
              >
                <CardContent className="p-10 text-center relative z-10">
                  {/* Skill Icon */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto border border-white/10 bg-white/5 rounded-full flex items-center justify-center text-4xl transition-all duration-300 group-hover:scale-110 backdrop-blur-sm">
                      <span>{skill.icon}</span>
                    </div>
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-2xl font-extralight text-white mb-4 transition-all duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/60 text-sm mb-8 leading-relaxed font-light transition-all duration-300">
                    {skill.description}
                  </p>
                  
                  {/* Skill Level with Progress Bar */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-light text-white/60 tracking-tight">{content[language].skillLevel}</span>
                      <span className="text-lg font-extralight text-white">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white rounded-full transition-all duration-2000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>

              </Card>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-24">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-16 py-8 border border-white/10 bg-white/10 text-white font-light text-2xl tracking-tight transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
            >
              {content[language].cta}
            </button>
          </div>
        </div>
      </div>

      {/* Section Transition Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default SkillsSection;
