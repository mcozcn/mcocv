
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
          category: 'App',
          link: 'https://beautiq-nine.vercel.app/'
        },
        {
          name: 'Core – Spor Salonu Yönetimi',
          year: '2024–2025',
          description: 'Spor Salonları için üye takibi, ödeme ve antreman grup programları yönetimi sunan sistem.',
          result: 'Üye ve Ödeme Takip sistemi ile verimlilik %50 artış',
          cta: 'Uygulamayı İncele',
          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
          category: 'App',
          link: 'https://core-ten-lake.vercel.app/'
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
          category: 'App',
          link: 'https://beautiq-nine.vercel.app/'
        },
        {
          name: 'Core – Gym Management',
          year: '2024–2025',
          description: 'System offering member tracking, payment and training group program management for gyms.',
          result: '50% efficiency increase with Member and Payment Tracking system',
          cta: 'View Application',
          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
          category: 'App',
          link: 'https://core-ten-lake.vercel.app/'
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
    <section id="projects" className="relative py-40 bg-transparent overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Section Header with Holographic Effect */}
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

        {/* Projects Grid with Links */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {content[language].projects.map((project, index) => (
              <Card key={index} className="border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group cursor-pointer transform hover:scale-105 overflow-hidden">
                {/* Project Image with Advanced Effects */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-3 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 border border-white/10 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-light tracking-tight backdrop-blur-sm">
                    {project.category}
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 border border-white/10 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-light tracking-tight backdrop-blur-sm">
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
                  <h3 className="text-2xl font-extralight text-white mb-6 transition-all duration-300">
                    {project.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/75 mb-6 leading-relaxed font-light transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Result Badge */}
                  <div className="border border-white/10 bg-white/5 p-4 rounded-xl mb-6 backdrop-blur-sm">
                    <p className="text-white/80 font-light text-sm tracking-tight">
                      <span className="font-extralight">{content[language].result}:</span> {project.result}
                    </p>
                  </div>
                  
                  {/* CTA Button with Link */}
                  <button 
                    onClick={() => window.open(project.link, '_blank')}
                    className="w-full border border-white/10 bg-white/10 text-white font-light py-4 text-lg tracking-tight transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
                  >
                    {project.cta}
                  </button>

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
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default ProjectsSection;
