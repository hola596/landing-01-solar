import React from 'react';
import { faqs } from './FAQSection';

export default function SEOHead() {
  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Servicio de Marketing Digital - Landing Pages Monoproducto Fotovoltaicas',
    description: 'Desarrollo de páginas de aterrizaje individuales y ultrarrápidas para empresas e instaladores de energía solar y autoconsumo fotovoltaico (ticket €5.000 a €15.000).',
    url: 'https://landing-01-solar.vercel.app',
    email: 'hola@serviciodemarketingdigital.com',
    priceRange: '€€€',
    areaServed: 'ES',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landing Pages Monoproducto B2B',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Page Monoproducto para Autoconsumo Fotovoltaico',
            description: 'Embudo de conversión optimizado para campañas de Google Ads y Meta Ads para instaladores de placas solares.',
          },
        },
      ],
    },
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const jsonLdVideo = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Demostración de Landing Page Monoproducto de Alta Conversión',
    description: 'Video explicativo de la arquitectura de una landing page monoproducto para energía solar y filtrado anti-curiosos.',
    thumbnailUrl: 'https://img.youtube.com/vi/M5_QicGRh-s/maxresdefault.jpg',
    uploadDate: '2026-09-01T08:00:00+02:00',
    embedUrl: 'https://www.youtube.com/embed/M5_QicGRh-s',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
      />
    </>
  );
}
