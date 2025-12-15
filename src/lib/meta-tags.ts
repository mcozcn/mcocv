import { SEOContent } from './seo-content';
import type { Language } from './seo-content';

const baseUrl = 'https://mucahitozcan.com';
const imageUrl = 'https://mucahitozcan.com/lovable-uploads/1e6e526d-3c76-4238-b838-097368cf673b.png';

export interface MetaTags {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  twitterCard: string;
  lang: string;
  alternateLangs: Array<{ lang: string; url: string }>;
}

export const generateMetaTags = (seoContent: SEOContent, lang: Language): MetaTags => {
  const url = lang === 'en' ? `${baseUrl}?lang=en` : baseUrl;
  
  return {
    title: seoContent.title,
    description: seoContent.description,
    keywords: seoContent.keywords,
    canonical: baseUrl,
    ogTitle: seoContent.title.split('|')[0].trim(),
    ogDescription: seoContent.description,
    ogImage: imageUrl,
    ogUrl: url,
    twitterTitle: seoContent.title.split('|')[0].trim(),
    twitterDescription: seoContent.description,
    twitterImage: imageUrl,
    twitterCard: 'summary_large_image',
    lang: lang === 'en' ? 'en' : 'tr',
    alternateLangs: [
      { lang: 'tr', url: baseUrl },
      { lang: 'en', url: `${baseUrl}?lang=en` }
    ]
  };
};

export const renderMetaTags = (meta: MetaTags): string => {
  return `
    <!-- Primary Meta Tags -->
    <title>${escapeHtml(meta.title)}</title>
    <meta name="title" content="${escapeHtml(meta.ogTitle)}" />
    <meta name="description" content="${escapeHtml(meta.description)}" />
    <meta name="keywords" content="${escapeHtml(meta.keywords)}" />
    <meta name="author" content="Mücahit Özcan" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="theme-color" content="#000000" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="canonical" href="${escapeHtml(meta.canonical)}" />
    
    <!-- Language Alternates -->
    ${meta.alternateLangs.map(alt => 
      `<link rel="alternate" hreflang="${alt.lang}" href="${escapeHtml(alt.url)}" />`
    ).join('\n    ')}
    <link rel="alternate" hreflang="x-default" href="${escapeHtml(meta.canonical)}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(meta.ogUrl)}" />
    <meta property="og:title" content="${escapeHtml(meta.ogTitle)}" />
    <meta property="og:description" content="${escapeHtml(meta.ogDescription)}" />
    <meta property="og:image" content="${escapeHtml(meta.ogImage)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(meta.ogTitle)}" />
    <meta property="og:locale" content="${meta.lang === 'en' ? 'en_US' : 'tr_TR'}" />
    <meta property="og:locale:alternate" content="${meta.lang === 'en' ? 'tr_TR' : 'en_US'}" />
    <meta property="og:site_name" content="Mücahit Özcan" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="${escapeHtml(meta.twitterCard)}" />
    <meta name="twitter:url" content="${escapeHtml(meta.ogUrl)}" />
    <meta name="twitter:title" content="${escapeHtml(meta.twitterTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.twitterDescription)}" />
    <meta name="twitter:image" content="${escapeHtml(meta.twitterImage)}" />
    <meta name="twitter:image:alt" content="${escapeHtml(meta.twitterTitle)}" />
    <meta name="twitter:creator" content="@mucahitozcan" />
  `.trim();
};

export const generateJSONLD = (lang: Language): string => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mücahit Özcan',
    jobTitle: lang === 'en' ? 'Digital Transformation and Strategy Expert' : 'Dijital Dönüşüm ve Strateji Uzmanı',
    description: lang === 'en' 
      ? 'Digital transformation and strategy expert with 13+ years of experience repositioning businesses in the digital age'
      : '13+ yıllık deneyimle işletmeleri dijital çağda yeniden konumlandıran dijital dönüşüm ve strateji uzmanı',
    url: 'https://mucahitozcan.com',
    image: imageUrl,
    sameAs: [
      'https://www.linkedin.com/in/mucahitozcan',
      'https://twitter.com/mucahitozcan'
    ],
    knowsAbout: lang === 'en' 
      ? ['Digital Transformation', 'Digital Strategy', 'E-Commerce', 'Digital Marketing', 'Strategic Consulting']
      : ['Dijital Dönüşüm', 'Dijital Strateji', 'E-Ticaret', 'Dijital Pazarlama', 'Stratejik Danışmanlık'],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TR'
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mücahit Özcan',
    url: 'https://mucahitozcan.com',
    description: lang === 'en'
      ? "Digital transformation and strategy expert Mücahit Özcan's personal website"
      : "Dijital dönüşüm ve strateji uzmanı Mücahit Özcan'ın kişisel web sitesi",
    inLanguage: ['tr', 'en'],
    author: {
      '@type': 'Person',
      name: 'Mücahit Özcan'
    }
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: lang === 'en' 
      ? 'Mücahit Özcan - Digital Transformation Consulting'
      : 'Mücahit Özcan - Dijital Dönüşüm Danışmanlığı',
    description: lang === 'en'
      ? 'Digital transformation, e-commerce and strategic consulting services'
      : 'Dijital dönüşüm, e-ticaret ve stratejik danışmanlık hizmetleri',
    url: 'https://mucahitozcan.com',
    serviceType: lang === 'en'
      ? ['Digital Transformation', 'E-Commerce Consulting', 'Digital Strategy', 'Digital Marketing']
      : ['Dijital Dönüşüm', 'E-Ticaret Danışmanlığı', 'Dijital Strateji', 'Dijital Pazarlama'],
    provider: {
      '@type': 'Person',
      name: 'Mücahit Özcan',
      jobTitle: lang === 'en' ? 'Digital Transformation and Strategy Expert' : 'Dijital Dönüşüm ve Strateji Uzmanı'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Turkey'
    }
  };

  const schemas = [baseSchema, websiteSchema, professionalServiceSchema];
  return JSON.stringify(schemas, null, 2);
};

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

