'use client';

import React, { useEffect } from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: 'privacy' | 'terms' | 'legal';
  onClose: () => void;
  onTabChange: (tab: 'privacy' | 'terms' | 'legal') => void;
}

export default function LegalModal({ isOpen, activeTab, onClose, onTabChange }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl max-h-[85vh] rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 flex flex-col text-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-amber-400" />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => onTabChange('privacy')}
                className={`text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'privacy' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Privacidad
              </button>
              <button
                type="button"
                onClick={() => onTabChange('terms')}
                className={`text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'terms' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Términos
              </button>
              <button
                type="button"
                onClick={() => onTabChange('legal')}
                className={`text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'legal' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Aviso Legal
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal legal"
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 pr-2 leading-relaxed">
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Política de Privacidad y Protección de Datos</h3>
              <p>
                <strong>1. Responsable del Tratamiento:</strong> Servicio de Marketing Digital, con correo oficial de contacto:{' '}
                <a href="mailto:hola@serviciodemarketingdigital.com" className="text-amber-400 underline">
                  hola@serviciodemarketingdigital.com
                </a>.
              </p>
              <p>
                <strong>2. Finalidad del Tratamiento:</strong> Los datos proporcionados mediante los formularios de filtrado o contacto serán tratados con la exclusiva finalidad de valorar la viabilidad comercial y técnica de la implementación de landings monoproducto para su empresa, y establecer comunicación directa solicitada por el usuario.
              </p>
              <p>
                <strong>3. Legitimación y Conservación:</strong> El tratamiento se basa en el consentimiento explícito del interesado al remitir sus datos. Los datos se conservarán mientras exista interés comercial mutuo o durante los plazos legalmente exigibles.
              </p>
              <p>
                <strong>4. Derechos ARCO / RGPD:</strong> El usuario puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, limitación y oposición enviando un correo a <code>hola@serviciodemarketingdigital.com</code>.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Términos y Condiciones de Uso</h3>
              <p>
                <strong>1. Objeto del Servicio:</strong> Servicio de Marketing Digital ofrece servicios profesionales de consultoría, diseño y desarrollo de páginas de aterrizaje monoproducto orientadas a empresas del sector energético y afines.
              </p>
              <p>
                <strong>2. Propiedad Intelectual:</strong> Todos los elementos estructurales, textos, metodologías de filtrado y código fuente expuestos en esta landing son propiedad exclusiva de Servicio de Marketing Digital o de sus respectivos licenciantes.
              </p>
              <p>
                <strong>3. Limitación de Responsabilidad:</strong> Las proyecciones de retorno de inversión y porcentajes de conversión constituyen estimaciones basadas en casos de estudio reales, pero los resultados específicos pueden variar según el mercado, estacionalidad y calidad del tráfico publicitario de cada anunciante.
              </p>
            </div>
          )}

          {activeTab === 'legal' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Aviso Legal</h3>
              <p>
                En cumplimiento de las directivas europeas de comercio electrónico y servicios de la sociedad de la información, se informa que este sitio web es administrado por Servicio de Marketing Digital.
              </p>
              <p>
                Para cualquier requerimiento legal o notificación institucional, el canal oficial y vinculante es el correo electrónico:{' '}
                <a href="mailto:hola@serviciodemarketingdigital.com" className="text-amber-400 underline">
                  hola@serviciodemarketingdigital.com
                </a>.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 pt-4 mt-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
