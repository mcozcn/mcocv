
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface ProjectsSectionProps {
  language: 'tr' | 'en';
}

const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const content = {
    tr: {
      title: 'PROJELER',
      subtitle: 'DİJİTAL BAŞYAPITLAR',
      result: 'SONUÇ',
      projects: [
        {
          name: 'Beautiq – Güzellik Salonu Yönetimi',
          year: '2024–2025',
          description: 'Güzellik salonları için randevu, müşteri ve envanter yönetimi sunan mobil uygulama ve yönetim sistemi.',
          result: 'Randevu ve müşteri memnuniyetinde %40 artış',
          cta: 'Uygulamayı İncele',
          image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
          category: 'Mobile App',
          link: 'https://beautiq.lovable.app'
        },
        {
          name: 'Antalya Turkuaz Web Sitesi',
          year: '2025',
          description: 'Güvenlik kamera sistemleri ve bilişim çözümleri için SEO uyumlu, duyarlı kurumsal web sitesi.',
          result: '%60 organik trafik artışı, %30 müşteri talebi artışı',
          cta: 'Web Sitesini İncele',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
          category: 'Web Development',
          link: 'https://www.antalyaturkuaz.com'
        },
        {
          name: 'Hanedan Konakları Dijital Katalog',
          year: '2024',
          description: '3D görselleştirmeler, sanal turlar ve dinamik fiyatlandırma özellikli interaktif dijital katalog.',
          result: 'Satış temsilcilerinin işini kolaylaştıran yaratıcı ve prestijli katalog',
          cta: 'Kataloğu İncele',
          image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop',
          category: 'Digital Catalog',
          link: 'https://mcozcn.github.io/mucahitozcan/documents/hanedan-konaklari-katalog.pdf'
        },
        {
          name: 'Değirmen Fabrika Üretim Kılavuzu',
          year: '2024',
          description: 'Fabrika üretim süreçleri için dijital kılavuz ve eğitim sistemi.',
          result: 'Öğrenme süresinde %35 azalma, sınav başarı oranında %90 artış',
          cta: 'Sistemi İncele',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
          category: 'Education System',
          link: 'https://mcozcn.github.io/mucahitozcan/documents/degirmen-kilavuz-sistemi.pdf'
        }
      ]
    },
    en: {
      title: 'PROJECTS',
      subtitle: 'DIGITAL MASTERPIECES',
      result: 'RESULT',
      projects: [
        {
          name: 'Beautiq – Beauty Salon Management',
          year: '2024–2025',
          description: 'Mobile application and management system offering appointment, customer and inventory management for beauty salons.',
          result: '40% increase in appointments and customer satisfaction',
          cta: 'View Application',
          image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
          category: 'Mobile App',
          link: 'https://beautiq.lovable.app'
        },
        {
          name: 'Antalya Turkuaz Website',
          year: '2025',
          description: 'SEO-friendly, responsive corporate website for security camera systems and IT solutions.',
          result: '60% organic traffic increase, 30% customer inquiry increase',
          cta: 'View Website',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
          category: 'Web Development',
          link: 'https://www.antalyaturkuaz.com'
        },
        {
          name: 'Hanedan Residences Digital Catalog',
          year: '2024',
          description: 'Interactive digital catalog with 3D visualizations, virtual tours and dynamic pricing features.',
          result: 'Creative and prestigious catalog facilitating sales representatives\' work',
          cta: 'View Catalog',
          image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3298-04dcbce3278c?w=400&h=300&fit=crop',
          category: 'Digital Catalog',
          link: 'https://mcozcn.github.io/mucahitozcan/documents/hanedan-konaklari-katalog.pdf'
        },
        {
          name: 'Mill Factory Production Guide',
          year: '2024',
          description: 'Digital guide and training system for factory production processes.',
          result: '35% reduction in learning time, 90% increase in exam success rate',
          cta: 'View System',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
          category: 'Education System',
          link: 'https://mcozcn.github.io/mucahitozcan/documents/degirmen-kilavuz-sistemi.pdf'
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

  return (
    <section id="projects" className="relative py-40 bg-gradient-to-br from-black via-gray-900 to-emerald-900/30 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-32 bg-gradient-to-b from-emerald-400/60 to-transparent animate-matrix-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          ></div>
        ))}
      </div>

      {/* Interactive Mouse Follower */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out'
        }}
      ></div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 border-2 border-emerald-400/30 transform rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-transparent rotate-12 animate-bounce-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Holographic Effect */}
        <div className="text-center mb-32 relative">
          <div className="inline-block mb-8 relative">
            <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 tracking-tighter transform hover:scale-105 transition-transform duration-500 animate-hologram">
              {content[language].title}
            </h2>
            {/* Glitch Effect */}
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-emerald-400/20 transform translate-x-2 translate-y-2 -z-10 animate-glitch">
              {content[language].title}
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-3 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 animate-gradient-shift blur-sm"></div>
          </div>
          <p className="text-3xl md:text-4xl font-light text-emerald-300 tracking-widest animate-fade-in delay-200 neon-cyan">
            {content[language].subtitle}
          </p>
        </div>

        {/* Projects Grid with Links */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {content[language].projects.map((project, index) => (
              <Card key={index} className="glass border-2 border-emerald-500/30 backdrop-blur-xl hover:border-emerald-500/60 transition-all duration-700 group cursor-pointer transform hover:scale-110 hover:-translate-y-8 modern-card perspective-1000 overflow-hidden">
                {/* Project Image with Advanced Effects */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-3 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl animate-bounce-slow transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {project.category}
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl animate-pulse-glow">
                    {project.year}
                  </div>

                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Floating Particles */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 animate-particle-float"
                      style={{
                        left: `${10 + i * 15}%`,
                        top: `${20 + (i % 3) * 30}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                <CardContent className="p-10 relative z-10">
                  {/* Project Title */}
                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-300 mb-6 group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-500 transform group-hover:scale-110">
                    {project.name}
                  </h3>
                  
                  {/* Description with Typewriter Effect */}
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-500 transform group-hover:translate-x-2">
                    {project.description}
                  </p>
                  
                  {/* Result Badge */}
                  <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 p-4 rounded-xl mb-6 group-hover:border-emerald-500/60 transition-all duration-500">
                    <p className="text-emerald-400 font-bold text-sm neon-cyan">
                      <span className="font-black">{content[language].result}:</span> {project.result}
                    </p>
                  </div>
                  
                  {/* CTA Button with Link */}
                  <Button 
                    onClick={() => window.open(project.link, '_blank')}
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-bold py-4 text-lg transform hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-2xl hover:shadow-emerald-500/50 overflow-hidden group/btn"
                  >
                    <span className="relative z-10">{project.cta}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded blur opacity-0 group-hover/btn:opacity-75 transition duration-500"></div>
                  </Button>

                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500 delay-200"></div>
                </CardContent>

                {/* Data Stream Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 animate-data-stream transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Section Transition Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse"></div>
    </section>
  );
};

export default ProjectsSection;
