// SEO-friendly plain HTML version of content (visually hidden with sr-only)
// This component is rendered server-side for search engines

interface SEOContentProps {
  language: 'tr' | 'en';
}

export const SEOContent = ({ language }: SEOContentProps) => {
  const content = {
    tr: {
      hero: {
        title: 'DİJİTAL GÜÇLE STRATEJİK DÖNÜŞÜM',
        description: '13+ yıllık deneyimle, işletmeleri dijital çağda yeniden konumlandıran bir yol arkadaşı.',
        stats: [
          { number: '13+', label: 'Yıl Deneyim' },
          { number: '50+', label: 'Proje' },
          { number: '100%', label: 'Sürekli İyileştirme' }
        ]
      },
      about: {
        title: 'HAKKIMDA',
        subtitle: 'DİJİTAL STRATEJİ UZMANI',
        description1: 'Dijital strateji, proje yönetimi ve yaratıcı çözümler alanında 13+ yıllık deneyime sahip bir uzmanım. Teknoloji ile insan odaklı yaklaşımları harmanlayarak, işletmelerin dijital dönüşüm süreçlerinde güvenilir bir rehber olmayı amaçlıyorum.',
        description2: 'CRM sistemlerinden dijital pazarlama stratejilerine, mobil uygulamalardan web tasarımına kadar geniş bir yelpazede hizmet veriyorum. Her projede ölçülebilir sonuçlar elde etmeye ve müşteri memnuniyetini en üst düzeyde tutmaya odaklanırım.',
        description3: 'Sürekli öğrenme ve gelişim felsefesiyle, sektördeki en güncel trendleri takip ederek müşterilerime en iyi çözümleri sunmaya devam ediyorum.',
        stats: [
          { number: '13+', label: 'Yıl Deneyim' },
          { number: '50+', label: 'Proje' },
          { number: '95%', label: 'Müşteri Memnuniyeti' },
          { number: '∞', label: 'Sürekli İyileştirme' }
        ],
        strengths: {
          strategic: { title: 'Stratejik Vizyon', description: 'Veri odaklı karar alma ve uzun vadeli planlama ile işletmelerin geleceğini şekillendirme' },
          leadership: { title: 'Liderlik', description: 'Çevik metodolojiler ve ekip motivasyonu ile projeleri başarıya ulaştırma' },
          technical: { title: 'Teknik Uzmanlık', description: 'Dijital platformlar ve modern teknolojilerde derin bilgi ve deneyim' },
          customer: { title: 'Müşteri Odaklılık', description: 'Kullanıcı deneyimi ve memnuniyet odaklı çözümler geliştirme' }
        }
      },
      experience: {
        title: 'DENEYİMLER',
        subtitle: 'PROFESYONEL YOLCULUK',
        experiences: [
          {
            title: 'Freelance Dijital Pazarlama Yöneticisi',
            period: '2020 – Günümüz',
            achievements: [
              'Çeşitli sektörlerdeki KOBİ\'ler için dijital pazarlama stratejileri geliştirme',
              'E-ticaret platformlarında %30 satış artışı sağlama',
              'SEO optimizasyonu ile organik erişimde %50 büyüme',
              'Sosyal medya ve içerik stratejileriyle marka bilinirliğini artırma'
            ]
          },
          {
            title: 'GSK – Kıdemli Müşteri Yönetimi Uzmanı',
            period: '2015 – 2018',
            achievements: [
              'CRM optimizasyonu ile müşteri şikayetlerinde %20 azalma',
              'Yıllık hedeflerde %95 başarı oranı',
              'Müşteri veri analitiği ile pazarlama stratejilerini yönlendirme',
              '180 eczanenin yönetimi ve performans değerlendirmesi'
            ]
          },
          {
            title: 'Turkcell – Teknoloji Uzmanı',
            period: '2009 – 2011',
            achievements: [
              'Akıllı cihaz satışlarında %15 artış',
              'Ekip eğitimleriyle mağaza performansını iyileştirme',
              'Müşteri deneyimini iyileştiren süreç optimizasyonları',
              'Yeni ürün lansmanlarında teknik eğitim koordinasyonu'
            ]
          },
          {
            title: 'Teknosa – Mağaza Yöneticisi',
            period: '2005 – 2008',
            achievements: [
              'Operasyonel verimlilik ve stok optimizasyonu',
              'Ziyaretçi dönüşüm oranında artış',
              'Sürekli satış hedefi başarısı ve bölge birincilikleri',
              'Müşteri odaklı mağaza kültürü oluşturma'
            ]
          }
        ]
      },
      projects: {
        title: 'PROJELER',
        subtitle: 'DİJİTAL BAŞYAPITLAR',
        projects: [
          {
            name: 'Beautiq – Güzellik Salonu Yönetimi',
            year: '2024–2025',
            description: 'Güzellik salonları için randevu, müşteri ve envanter yönetimi sunan mobil uygulama ve yönetim sistemi.',
            result: 'Randevu ve müşteri memnuniyetinde %40 artış',
            category: 'App'
          },
          {
            name: 'Core – Spor Salonu Yönetimi',
            year: '2024–2025',
            description: 'Spor Salonları için üye takibi, ödeme ve antreman grup programları yönetimi sunan sistem.',
            result: 'Üye ve Ödeme Takip sistemi ile verimlilik %50 artış',
            category: 'App'
          },
          {
            name: 'Antalya Turkuaz Web Sitesi',
            year: '2025',
            description: 'Güvenlik kamera sistemleri ve bilişim çözümleri için SEO uyumlu, duyarlı kurumsal web sitesi.',
            result: '%60 organik trafik artışı, %30 müşteri talebi artışı',
            category: 'Web Development'
          },
          {
            name: 'Hanedan Konakları Dijital Katalog',
            year: '2024',
            description: '3D görselleştirmeler, sanal turlar ve dinamik fiyatlandırma özellikli interaktif dijital katalog.',
            result: 'Satış temsilcilerinin işini kolaylaştıran yaratıcı ve prestijli katalog',
            category: 'Digital Catalog'
          },
          {
            name: 'Değirmen Fabrika Üretim Kılavuzu',
            year: '2024',
            description: 'Fabrika üretim süreçleri için dijital kılavuz ve eğitim sistemi.',
            result: 'Öğrenme süresinde %35 azalma, sınav başarı oranında %90 artış',
            category: 'Education System'
          }
        ]
      },
      skills: {
        title: 'YETENEKLER',
        subtitle: 'TEKNİK HÂKİMİYET',
        skills: [
          { name: 'Stratejik Pazarlama', description: 'Dijital strateji, marka konumlandırma', level: 90 },
          { name: 'Dijital Analitik ve CRM', description: 'Veri analizi, müşteri ilişkileri yönetimi', level: 95 },
          { name: 'Proje Yönetimi', description: 'Süreç yönetimi, proje planlama', level: 88 },
          { name: 'Grafik ve Web Tasarımı', description: 'UI/UX, görsel iletişim', level: 85 },
          { name: 'SEO ve Performans Reklamcılığı', description: 'Google Ads, içerik stratejisi', level: 92 },
          { name: 'Ekip Yönetimi ve Eğitim', description: 'Liderlik, mentorluk', level: 90 }
        ]
      }
    },
    en: {
      hero: {
        title: 'DIGITAL POWER STRATEGIC TRANSFORMATION',
        description: 'With 13+ years of experience, a companion who repositions businesses in the digital age.',
        stats: [
          { number: '13+', label: 'Years Experience' },
          { number: '50+', label: 'Projects' },
          { number: '100%', label: 'Continuous Improvement' }
        ]
      },
      about: {
        title: 'ABOUT ME',
        subtitle: 'DIGITAL STRATEGY EXPERT',
        description1: 'I am an expert with 13+ years of experience in digital strategy, project management, and creative solutions. I aim to be a trusted guide for businesses in their digital transformation processes by blending technology with human-centered approaches.',
        description2: 'I provide services across a wide range, from CRM systems to digital marketing strategies, from mobile applications to web design. In every project, I focus on achieving measurable results and maintaining the highest level of customer satisfaction.',
        description3: 'With a philosophy of continuous learning and development, I follow the latest trends in the industry and continue to provide the best solutions to my clients.',
        stats: [
          { number: '13+', label: 'Years Experience' },
          { number: '50+', label: 'Projects' },
          { number: '95%', label: 'Client Satisfaction' },
          { number: '∞', label: 'Continuous Improvement' }
        ],
        strengths: {
          strategic: { title: 'Strategic Vision', description: 'Shaping the future of businesses with data-driven decision making and long-term planning' },
          leadership: { title: 'Leadership', description: 'Leading projects to success with agile methodologies and team motivation' },
          technical: { title: 'Technical Expertise', description: 'Deep knowledge and experience in digital platforms and modern technologies' },
          customer: { title: 'Customer Focus', description: 'Developing user experience and satisfaction-oriented solutions' }
        }
      },
      experience: {
        title: 'EXPERIENCE',
        subtitle: 'PROFESSIONAL JOURNEY',
        experiences: [
          {
            title: 'Freelance Digital Marketing Manager',
            period: '2020 – Present',
            achievements: [
              'Developing digital marketing strategies for SMEs across various sectors',
              'Achieving 30% sales increase on e-commerce platforms',
              '50% growth in organic reach through SEO optimization',
              'Increasing brand awareness through social media and content strategies'
            ]
          },
          {
            title: 'GSK – Senior Customer Management Specialist',
            period: '2015 – 2018',
            achievements: [
              '20% reduction in customer complaints through CRM optimization',
              '95% success rate in annual targets',
              'Directing marketing strategies through customer data analytics',
              'Management and performance evaluation of 180 pharmacies'
            ]
          },
          {
            title: 'Turkcell – Technology Specialist',
            period: '2009 – 2011',
            achievements: [
              '15% increase in smart device sales',
              'Improving store performance through team training',
              'Process optimizations improving customer experience',
              'Technical training coordination for new product launches'
            ]
          },
          {
            title: 'Teknosa – Store Manager',
            period: '2005 – 2008',
            achievements: [
              'Operational efficiency and inventory optimization',
              'Increase in visitor conversion rate',
              'Continuous sales target achievement and regional championships',
              'Creating customer-focused store culture'
            ]
          }
        ]
      },
      projects: {
        title: 'PROJECTS',
        subtitle: 'DIGITAL MASTERPIECES',
        projects: [
          {
            name: 'Beautiq – Beauty Salon Management',
            year: '2024–2025',
            description: 'Mobile application and management system offering appointment, customer and inventory management for beauty salons.',
            result: '40% increase in appointments and customer satisfaction',
            category: 'App'
          },
          {
            name: 'Core – Gym Management',
            year: '2024–2025',
            description: 'System offering member tracking, payment and training group program management for gyms.',
            result: '50% efficiency increase with Member and Payment Tracking system',
            category: 'App'
          },
          {
            name: 'Antalya Turkuaz Website',
            year: '2025',
            description: 'SEO-friendly, responsive corporate website for security camera systems and IT solutions.',
            result: '60% organic traffic increase, 30% customer inquiry increase',
            category: 'Web Development'
          },
          {
            name: 'Hanedan Residences Digital Catalog',
            year: '2024',
            description: 'Interactive digital catalog with 3D visualizations, virtual tours and dynamic pricing features.',
            result: 'Creative and prestigious catalog facilitating sales representatives\' work',
            category: 'Digital Catalog'
          },
          {
            name: 'Mill Factory Production Guide',
            year: '2024',
            description: 'Digital guide and training system for factory production processes.',
            result: '35% reduction in learning time, 90% increase in exam success rate',
            category: 'Education System'
          }
        ]
      },
      skills: {
        title: 'SKILLS',
        subtitle: 'TECHNICAL MASTERY',
        skills: [
          { name: 'Strategic Marketing', description: 'Digital strategy, brand positioning', level: 90 },
          { name: 'Digital Analytics & CRM', description: 'Data analysis, customer relationship management', level: 95 },
          { name: 'Project Management', description: 'Process management, project planning', level: 88 },
          { name: 'Graphic & Web Design', description: 'UI/UX, visual communication', level: 85 },
          { name: 'SEO & Performance Advertising', description: 'Google Ads, content strategy', level: 92 },
          { name: 'Team Management & Training', description: 'Leadership, mentoring', level: 90 }
        ]
      }
    }
  };

  const data = content[language];

  return (
    <div className="sr-only" aria-hidden="true">
      {/* Hero Section */}
      <section id="seo-hero">
        <h1>{data.hero.title}</h1>
        <p>{data.hero.description}</p>
        <ul>
          {data.hero.stats.map((stat, i) => (
            <li key={i}>{stat.number} {stat.label}</li>
          ))}
        </ul>
      </section>

      {/* About Section */}
      <section id="seo-about">
        <h2>{data.about.title}</h2>
        <h3>{data.about.subtitle}</h3>
        <p>{data.about.description1}</p>
        <p>{data.about.description2}</p>
        <p>{data.about.description3}</p>
        <ul>
          {data.about.stats.map((stat, i) => (
            <li key={i}>{stat.number} {stat.label}</li>
          ))}
        </ul>
        <ul>
          {Object.entries(data.about.strengths).map(([key, strength]) => (
            <li key={key}>
              <h4>{strength.title}</h4>
              <p>{strength.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience Section */}
      <section id="seo-experience">
        <h2>{data.experience.title}</h2>
        <h3>{data.experience.subtitle}</h3>
        {data.experience.experiences.map((exp, i) => (
          <article key={i}>
            <h4>{exp.title}</h4>
            <time>{exp.period}</time>
            <ul>
              {exp.achievements.map((achievement, j) => (
                <li key={j}>{achievement}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* Projects Section */}
      <section id="seo-projects">
        <h2>{data.projects.title}</h2>
        <h3>{data.projects.subtitle}</h3>
        {data.projects.projects.map((project, i) => (
          <article key={i}>
            <h4>{project.name}</h4>
            <time>{project.year}</time>
            <p>{project.description}</p>
            <p>{project.result}</p>
            <span>{project.category}</span>
          </article>
        ))}
      </section>

      {/* Skills Section */}
      <section id="seo-skills">
        <h2>{data.skills.title}</h2>
        <h3>{data.skills.subtitle}</h3>
        {data.skills.skills.map((skill, i) => (
          <article key={i}>
            <h4>{skill.name}</h4>
            <p>{skill.description}</p>
            <span>{skill.level}% proficiency</span>
          </article>
        ))}
      </section>
    </div>
  );
};

