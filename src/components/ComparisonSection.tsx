'use client';

import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ComparisonProps {
  onOpenModal: () => void;
}

export default function ComparisonSection({ onOpenModal }: ComparisonProps) {
  const comparisonData = [
    {
      metric: 'Fricción de navegación',
      traditional: '10+ páginas, menú saturado, servicios secundarios y fuga de atención',
      monoproduct: 'Embudo lineal enfocado 100% en la instalación de placas solares',
      winner: true,
    },
    {
      metric: 'Tiempo de carga (LCP móvil)',
      traditional: '> 4.5 segundos (pesada por temas multipropósito)',
      monoproduct: '< 0.8 a 1.1 segundos (Core Web Vitals 100/100 ultra optimizado)',
      winner: true,
    },
    {
      metric: 'Tasa de rebote en Google/Meta Ads',
      traditional: '65% - 82% de rebote por falta de relevancia directa',
      monoproduct: '< 25% gracias a mensaje y promesa alineados con el anuncio',
      winner: true,
    },
    {
      metric: 'Tasa de conversión a cotización',
      traditional: '1.2% - 2.5% (contactos dispersos o de baja intención)',
      monoproduct: '8.4% - 14.8% hacia cotizaciones comerciales viables',
      winner: true,
    },
    {
      metric: 'Filtrado de clientes curiosos',
      traditional: 'Inexistente: entran particulares sin propiedad o sin presupuesto',
      monoproduct: 'Filtro anti-curiosos que descarta no cualificados antes de contactar',
      winner: true,
    },
  ];

  return (
    <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-amber-400 text-xs sm:text-sm font-bold tracking-widest uppercase">
          Análisis Comparativo Técnico y Comercial
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Web Corporativa Tradicional vs. Landing Monoproducto
        </h2>
        <p className="mt-4 text-base text-slate-300">
          Descubre por qué invertir en anuncios hacia tu web generalista está quemando hasta el 70% de tu presupuesto publicitario sin generar cotizaciones reales.
        </p>
      </div>

      {/* Desktop / Tablet Table */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-2xl backdrop-blur-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/80">
              <th className="p-5 text-sm font-semibold text-slate-400 w-1/4">Variable Estratégica</th>
              <th className="p-5 text-sm font-semibold text-red-400 w-3/8">Web Corporativa Tradicional</th>
              <th className="p-5 text-sm font-bold text-emerald-400 bg-emerald-950/20 w-3/8">
                Landing Monoproducto Fotovoltaica
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70 text-sm">
            {comparisonData.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-5 font-semibold text-slate-200">{row.metric}</td>
                <td className="p-5 text-slate-400">
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>
                </td>
                <td className="p-5 text-slate-100 bg-emerald-950/10 font-medium">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{row.monoproduct}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Grid */}
      <div className="md:hidden space-y-4">
        {comparisonData.map((item, idx) => (
          <div key={idx} className="p-5 rounded-xl border border-slate-800 bg-slate-900/70 space-y-3">
            <h3 className="font-bold text-amber-300 text-sm">{item.metric}</h3>
            <div className="p-3 rounded-lg bg-red-950/20 border border-red-900/30 flex items-start gap-2 text-xs text-slate-300">
              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-red-300 block mb-0.5">Web Corporativa:</span>
                {item.traditional}
              </div>
            </div>
            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 flex items-start gap-2 text-xs text-white">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-emerald-300 block mb-0.5">Landing Monoproducto:</span>
                {item.monoproduct}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={onOpenModal}
          className="inline-flex items-center gap-2 text-solar-400 hover:text-solar-300 font-semibold text-sm sm:text-base transition-colors group"
        >
          <span>Quiero dejar de quemar presupuesto y cualificar mis visitas</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
