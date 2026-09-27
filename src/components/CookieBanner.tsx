'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenLegal: (tab: 'privacy' | 'terms' | 'legal') => void;
}

export default function CookieBanner({ onOpenLegal }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('smd_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('smd_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('smd_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Consentimiento de cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 p-5 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-md text-slate-200 text-xs sm:text-sm animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-2">
          <p className="leading-relaxed">
            Utilizamos cookies técnicas y analíticas para optimizar tu experiencia y analizar el rendimiento de la navegación de acuerdo con nuestra{' '}
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="text-amber-400 underline hover:text-amber-300 font-medium"
            >
              Política de Privacidad
            </button>.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors"
            >
              Aceptar todas
            </button>
            <button
              type="button"
              onClick={handleReject}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-colors"
            >
              Solo esenciales
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
