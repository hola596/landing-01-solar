'use client';

import React from 'react';
import { PlayCircle } from 'lucide-react';

export default function VideoDemo() {
  return (
    <section className="py-16 md:py-24 bg-slate-950/70 border-y border-brand-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-solar-400 text-sm font-semibold tracking-wide uppercase mb-3">
            <PlayCircle className="w-5 h-5" />
            <span>Demostración en Video</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Descubre cómo funciona la estructura de una landing de alta conversión en acción
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Observa el desglose del embudo directo diseñado para captar clientes que buscan instalaciones fotovoltaicas y autoconsumo sin perder dinero en clics rebotados.
          </p>
        </div>

        {/* Video Container with luminous amber shadow */}
        <div className="relative mx-auto max-w-4xl rounded-2xl p-1 bg-gradient-to-b from-amber-500/30 via-slate-800 to-slate-900 glow-amber">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/M5_QicGRh-s?si=_0gkgpp51W2mA-NQ"
              title="Demostración de Landing Page Monoproducto B2B - Servicio de Marketing Digital"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
