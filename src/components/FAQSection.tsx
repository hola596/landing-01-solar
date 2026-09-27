'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const faqs = [
  {
    question: '¿Por qué una landing monoproducto supera a una web corporativa tradicional en energía solar?',
    answer: 'Una web corporativa contiene menús, páginas secundarias, quiénes somos, y múltiples servicios que dispersan la atención del usuario que hizo clic en un anuncio específico. La landing monoproducto tiene una sola misión: persuadir al prospecto interesado en placas solares y llevarlo directamente a solicitar presupuesto cualificado, reduciendo el coste de adquisición hasta un 65%.',
  },
  {
    question: '¿Qué tiempo de desarrollo y entrega tiene la landing page?',
    answer: 'El despliegue técnico completo se realiza en un plazo de 5 a 7 días hábiles, incluyendo integración de analítica (Google Tag Manager, Meta Pixel), optimización Core Web Vitals, pruebas de ciberseguridad y conexión al filtro cualificado.',
  },
  {
    question: '¿Cómo funciona el filtro anti-curiosos para evitar contactos no cualificados?',
    answer: 'Antes de permitir el contacto directo o la conexión a WhatsApp, el usuario debe validar que es propietario de inmueble, indicar su rango de inversión o factura eléctrica y definir su código postal. Quienes no cumplen con el perfil reciben un mensaje de descarte respetuoso, ahorrando decenas de horas a tu equipo comercial.',
  },
  {
    question: '¿Se puede conectar con nuestro dominio web corporativo actual?',
    answer: 'Sí, totalmente. Se puede conectar bajo un subdominio específico de tu marca (por ejemplo: solar.tuempresa.com o instalacion.tuempresa.com) sin alterar ni afectar tu sitio web institucional actual.',
  },
  {
    question: '¿Qué métricas de conversión y velocidad se garantizan?',
    answer: 'La infraestructura está programada para lograr un Largest Contentful Paint (LCP) inferior a 1.0 segundos y una puntuación de rendimiento de 95 a 100 en Google PageSpeed Insights móvil, logrando conversiones medias del 8% al 15% sobre tráfico pago de Google y Meta Ads.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 text-solar-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>Resolución de Dudas Frecuentes</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Preguntas Frecuentes sobre el Servicio
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base">
          Todo lo que necesitas saber sobre plazos, integración y retorno de inversión en tu infraestructura de captación.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-slate-800 rounded-2xl bg-slate-900/60 overflow-hidden backdrop-blur-sm transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-800/40"
              >
                <span className="font-bold text-base sm:text-lg text-slate-100">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
