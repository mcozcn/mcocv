// SEO-friendly content data for server-side rendering
export type Language = 'tr' | 'en';

export interface SEOContent {
  title: string;
  description: string;
  keywords: string;
}

export const getSEOContent = (lang: Language = 'tr'): SEOContent => {
  const content = {
    tr: {
      title: 'Mücahit Özcan - Dijital Dönüşüm ve Strateji Uzmanı | 13+ Yıl Deneyim',
      description: '13+ yıllık deneyimle işletmeleri dijital çağda yeniden konumlandıran dijital dönüşüm ve strateji uzmanı. E-ticaret, dijital pazarlama ve stratejik danışmanlık hizmetleri.',
      keywords: 'dijital dönüşüm, dijital strateji, e-ticaret danışmanlığı, dijital pazarlama, stratejik danışmanlık, Mücahit Özcan'
    },
    en: {
      title: 'Mücahit Özcan - Digital Transformation and Strategy Expert | 13+ Years Experience',
      description: 'Digital transformation and strategy expert with 13+ years of experience repositioning businesses in the digital age. E-commerce, digital marketing and strategic consulting services.',
      keywords: 'digital transformation, digital strategy, e-commerce consulting, digital marketing, strategic consulting, Mücahit Özcan'
    }
  };
  return content[lang];
};

// Get language from URL query parameter
export const getLanguageFromRequest = (url: string): Language => {
  const params = new URLSearchParams(url.split('?')[1]);
  const lang = params.get('lang');
  return (lang === 'en' ? 'en' : 'tr') as Language;
};

