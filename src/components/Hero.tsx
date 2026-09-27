'use client';

import React from 'react';
import { Sun, Zap, CheckCircle2, TrendingUp, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Superior Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs sm:text-sm font-medium tracking-wide uppercase mb-6 shadow-sm">
          <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>EXCLUSIVO PARA EMPRESAS DE ENERGÍA SOLAR Y AUTOCONSUMO</span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Deja de enviar tráfico de anuncios a una web corporativa que no convierte: <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-400 via-amber-300 to-amber-500">
            Vende tu servicio de placas solares
          </span>{' '}
          con una landing monoproducto de alta velocidad.
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-10">
          Diseñamos la página de aterrizaje individual para tu servicio o instalación fotovoltaica más rentable. Sin menús dispersos, con carga instantánea y optimizada para convertir clics de Google y Meta Ads en proyectos reales de <strong>€5.000 a €15.000</strong>.
        </p>

        {/* Action Button & Trust Markers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base sm:text-lg bg-gradient-to-r from-amber-500 via-solar-500 to-amber-600 hover:from-amber-600 hover:to-solar-600 text-slate-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 focus:ring-4 focus:ring-amber-400/50"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>Solicitar Análisis de Factibilidad</span>
          </button>
        </div>

        {/* Key Metrics / Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-solar-400 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Carga Ultra Rápida</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">&lt; 0.8s LCP</p>
            <p className="text-xs text-slate-400">Cero fuga de tráfico móvil</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Ticket Alto</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">€5k - €15k</p>
            <p className="text-xs text-slate-400">Proyectos residenciales e industriales</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Enfoque Puro</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">100% Monoproducto</p>
            <p className="text-xs text-slate-400">Sin distracciones ni menús</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Filtro Inteligente</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">Anti-Curiosos</p>
            <p className="text-xs text-slate-400">Solo leads cualificados con presupuesto</p>
          </div>
        </div>
      </div>
    </section>
  );
}
