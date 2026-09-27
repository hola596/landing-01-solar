'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, ShieldCheck, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-brand-dark/85 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="Ir al inicio - Servicio de Marketing Digital"
        >
          <div className="relative h-12 w-48 sm:w-56">
            <Image
              src="/LOGO.png"
              alt="Servicio de Marketing Digital - Landing Pages Monoproducto"
              fill
              priority
              sizes="(max-width: 640px) 192px, 224px"
              className="object-contain object-left"
            />
          </div>
        </a>

        {/* Center / Email discretely */}
        <div className="hidden md:flex items-center gap-2 text-sm text-slate-300">
          <Mail className="w-4 h-4 text-solar-400" aria-hidden="true" />
          <a
            href="mailto:hola@serviciodemarketingdigital.com"
            className="hover:text-solar-400 transition-colors focus:outline-none focus:underline"
          >
            hola@serviciodemarketingdigital.com
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-solar-500 to-amber-500 hover:from-solar-600 hover:to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform active:scale-95 focus:ring-2 focus:ring-amber-400"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Verificar si mi negocio califica</span>
            <ArrowRight className="w-4 h-4 hidden sm:inline" />
          </button>
        </div>
      </div>
    </header>
  );
}
