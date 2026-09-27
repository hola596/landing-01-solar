'use client';

import React from 'react';
import { MapPin, Home, Zap, ShieldAlert, Award, CheckCircle } from 'lucide-react';

interface NicheValueProps {
  onOpenModal: () => void;
}

export default function NicheValueSection({ onOpenModal }: NicheValueProps) {
  const steps = [
    {
      icon: MapPin,
      title: '1. Filtro por Código Postal y Radiación',
      desc: 'Descartas zonas fuera de tu radio de cobertura o con restricciones de tejado antes de invertir tiempo de ingeniería.',
    },
    {
      icon: Home,
      title: '2. Tipología de Vivienda o Nave Industrial',
      desc: 'Asegura que el contacto sea propietario de vivienda unifamiliar o nave con tejado apto para instalación de placas.',
    },
    {
      icon: Zap,
      title: '3. Estimación por Factura Eléctrica',
      desc: 'El lead declara su consumo mensual (>€120/mes), garantizando un retorno de inversión claro y ticket de €5.000 a €15.000.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900/40 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>El Caso del Nicho Fotovoltaico</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Por qué aislar tu servicio estrella multiplica el retorno de tu red de instaladores
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              En el sector del autoconsumo fotovoltaico residencial e industrial, el coste por lead en Google Ads y Meta Ads se ha triplicado en los últimos 24 meses. Las empresas que envían tráfico a un sitio web generalista pierden miles de euros atendiendo inquilinos sin tejado propio o curiosos buscando subvenciones sin capital inicial.
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              Al aislar tu <strong>producto estrella</strong> en una landing monoproducto ultrarrápida, cada clic pasa por un proceso de pre-cotización matemática estructurado que eleva el ticket promedio a entre <strong>€5.000 y €15.000</strong>. Tu equipo comercial solo recibe llamadas de propietarios pre-cualificados listos para firmar la instalación.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenModal}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-solar-500 to-amber-500 hover:from-solar-600 hover:to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <span>Calcular viabilidad para mi empresa</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3 Pillars Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>La Fórmula de Conversión en Autoconsumo</span>
              </h3>

              <div className="space-y-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div 
                      key={index}
                      className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-4 transition-all hover:border-slate-700"
                    >
                      <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-100 text-sm mb-1">{step.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/30 flex items-center justify-between text-xs text-emerald-300">
                <span>Resultado habitual comprobado:</span>
                <strong className="text-white text-sm font-bold">+280% ROAS en 30 días</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
