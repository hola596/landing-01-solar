'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, ShieldCheck, Lock } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (tab: 'privacy' | 'terms' | 'legal') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-slate-800/80">
          {/* Brand & Logo */}
          <div className="space-y-3">
            <div className="relative h-12 w-48 sm:w-56">
              <Image
                src="/LOGO.png"
                alt="Servicio de Marketing Digital - Landing Pages Monoproducto"
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Ingeniería web de ultra alta velocidad y conversión especializada en empresas de energía solar y autoconsumo fotovoltaico.
            </p>
          </div>

          {/* Contact Direct */}
          <div className="space-y-2 text-left md:text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">Canal Oficial de Contacto</span>
            <div className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-colors">
              <Mail className="w-4 h-4 text-solar-400" />
              <a href="mailto:hola@serviciodemarketingdigital.com" className="focus:underline">
                hola@serviciodemarketingdigital.com
              </a>
            </div>
            <p className="text-[11px] text-slate-400">Atención técnica y comercial B2B</p>
          </div>

          {/* Security & Standards */}
          <div className="space-y-2 text-left md:text-right">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-800/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Estándar SSL 256-bit & CSP OWASP</span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center md:justify-end gap-1">
              <Lock className="w-3 h-3" /> Privacidad de datos protegida
            </p>
          </div>
        </div>

        {/* Bottom bar with legal links and copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Servicio de Marketing Digital. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-amber-400 transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidad
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-amber-400 transition-colors underline-offset-4 hover:underline"
            >
              Términos de Servicio
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('legal')}
              className="hover:text-amber-400 transition-colors underline-offset-4 hover:underline"
            >
              Aviso Legal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
