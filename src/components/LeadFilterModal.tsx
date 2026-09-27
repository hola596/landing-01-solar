'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, AlertTriangle, ArrowRight, ArrowLeft, Send, Sparkles, MessageSquare } from 'lucide-react';

interface LeadFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFilterModal({ isOpen, onClose }: LeadFilterModalProps) {
  const [step, setStep] = useState(1);
  const [rubro, setRubro] = useState('');
  const [inversion, setInversion] = useState('');
  const [cuelloBotella, setCuelloBotella] = useState('');
  const [nombre, setNombre] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [web, setWeb] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-bot honeypot
  const [isRejected, setIsRejected] = useState(false);
  const [isQualified, setIsQualified] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);

  // Esc key and background scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
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

  // Reset when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setRubro('');
      setInversion('');
      setCuelloBotella('');
      setNombre('');
      setEmpresa('');
      setWeb('');
      setHoneypot('');
      setIsRejected(false);
      setIsQualified(false);
      setRejectionReason('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Sanitizer
  const sanitize = (text: string) => {
    return text.replace(/[<>'"&]/g, '').trim();
  };

  const handleNextStep1 = (value: string) => {
    setRubro(value);
    if (value === 'Particular') {
      setIsRejected(true);
      setRejectionReason('Este servicio de ingeniería web y CRO de alta velocidad está diseñado exclusivamente para empresas, instaladores y proveedores B2B. Agradecemos tu interés.');
    } else {
      setStep(2);
    }
  };

  const handleNextStep2 = (value: string) => {
    setInversion(value);
    if (value === 'Menos de €300 / mes o sin inversión activa') {
      setIsRejected(true);
      setRejectionReason('Nuestras landings monoproducto maximizan el ROAS en campañas con presupuestos activos de pauta digital. Recomendamos consolidar primero tu inversión en publicidad antes de implementar este sistema.');
    } else {
      setStep(3);
    }
  };

  const handleNextStep3 = (value: string) => {
    setCuelloBotella(value);
    setStep(4);
  };

  const handleSubmitStep4 = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) {
      onClose();
      return;
    }

    const cleanNombre = sanitize(nombre);
    const cleanEmpresa = sanitize(empresa);
    const cleanWeb = sanitize(web);

    if (!cleanNombre || !cleanEmpresa) {
      return;
    }

    setIsQualified(true);
  };

  // Dynamic in-memory WhatsApp redirect (Phone strictly obfuscated)
  const handleConnectWhatsApp = () => {
    const cleanNombre = sanitize(nombre);
    const cleanEmpresa = sanitize(empresa);
    const p1 = '54911';
    const p2 = '2788';
    const p3 = '7093';
    const destination = `${p1}${p2}${p3}`;

    const rawMessage = `Hola, completé el filtro en la landing. Soy ${cleanNombre} de la empresa ${cleanEmpresa}. Invertimos ${inversion} en Ads y queremos evaluar una landing monoproducto.`;
    const targetUrl = `https://wa.me/${destination}?text=${encodeURIComponent(rawMessage)}`;

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 overflow-hidden text-slate-100"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar ventana emergente"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:ring-2 focus:ring-amber-400"
        >
          <X className="w-5 h-5" />
        </button>

        {/* REJECTED / DISQUALIFIED STATE */}
        {isRejected ? (
          <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white">
              Criterio de Calificación No Cumplido
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md mx-auto">
              {rejectionReason}
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-colors"
              >
                Entendido y cerrar
              </button>
            </div>
          </div>
        ) : isQualified ? (
          /* QUALIFIED STATE (WhatsApp in memory unlock) */
          <div className="py-6 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-9 h-9" />
            </div>
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Calificación Aprobada
              </span>
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                ¡Tu empresa cumple con el perfil!
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto">
                Hemos validado tus datos preliminares. Para coordinar la auditoría técnica de conversión y estructurar tu landing monoproducto, pulsa el botón oficial inferior:
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleConnectWhatsApp}
                className="w-full py-4 px-6 rounded-2xl font-bold text-base sm:text-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-6 h-6" />
                <span>Continuar a WhatsApp para coordinar auditoría técnica</span>
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Conexión directa, segura y confidencial. Sin intermediarios comerciales.
            </p>
          </div>
        ) : (
          /* MULTI-STEP FILTER FORM */
          <div>
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                <span>Paso {step} de 4</span>
                <span className="text-amber-400">{step * 25}% completado</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-solar-400 transition-all duration-300 rounded-full"
                  style={{ width: `${step * 25}%` }}
                />
              </div>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in duration-150">
                <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white">
                  Paso 1: ¿Cuál es el rubro y actividad de tu negocio?
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Selecciona la opción que mejor describe tu actividad comercial actual:
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Instalador / Empresa de energía solar fotovoltaica',
                    'Empresa de otro sector con ticket medio superior a €2.000',
                    'Particular / No tengo empresa ni presto servicios comerciales',
                  ].map((option, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleNextStep1(option === 'Particular / No tengo empresa ni presto servicios comerciales' ? 'Particular' : option)}
                      className="w-full p-4 rounded-xl text-left font-medium text-sm sm:text-base border border-slate-700 bg-slate-800/60 hover:bg-slate-800 hover:border-amber-400 transition-all flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <span className="text-slate-200 group-hover:text-white">{option}</span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-5 animate-in fade-in duration-150">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" /> Volver
                  </button>
                </div>
                <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white">
                  Paso 2: ¿Cuánto inviertes en publicidad digital?
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Gasto aproximado mensual en Meta Ads (Instagram/Facebook) o Google Ads:
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Más de €1.000 / mes en Meta Ads o Google Ads',
                    'Entre €300 y €1.000 / mes',
                    'Menos de €300 / mes o sin inversión activa',
                  ].map((option, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleNextStep2(option)}
                      className="w-full p-4 rounded-xl text-left font-medium text-sm sm:text-base border border-slate-700 bg-slate-800/60 hover:bg-slate-800 hover:border-amber-400 transition-all flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <span className="text-slate-200 group-hover:text-white">{option}</span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-5 animate-in fade-in duration-150">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" /> Volver
                  </button>
                </div>
                <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white">
                  Paso 3: ¿Cuál es el principal cuello de botella?
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Identifica el mayor obstáculo que frena la rentabilidad de tus campañas:
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Costo por cotización muy alto',
                    'Muchos contactos curiosos que no compran',
                    'Web actual lenta y desactualizada',
                  ].map((option, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleNextStep3(option)}
                      className="w-full p-4 rounded-xl text-left font-medium text-sm sm:text-base border border-slate-700 bg-slate-800/60 hover:bg-slate-800 hover:border-amber-400 transition-all flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <span className="text-slate-200 group-hover:text-white">{option}</span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <form onSubmit={handleSubmitStep4} className="space-y-4 animate-in fade-in duration-150">
                <div className="flex items-center gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" /> Volver
                  </button>
                </div>
                <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white">
                  Paso 4: Identificación Comercial
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Ingresa tus datos para generar tu ficha de análisis de factibilidad:
                </p>

                {/* Honeypot field (hidden from humans, catches automated spam bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hp_field">No llenar este campo:</label>
                  <input
                    type="text"
                    id="hp_field"
                    name="hp_field"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. Carlos Martínez"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nombre de la Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    placeholder="Ej. SolarTech Soluciones"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Sitio Web actual o Perfil Social
                  </label>
                  <input
                    type="text"
                    value={web}
                    onChange={(e) => setWeb(e.target.value)}
                    placeholder="Ej. www.solartech.com o instagram.com/solartech"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-amber-500 to-solar-500 hover:from-amber-600 hover:to-solar-600 text-slate-950 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Finalizar y Verificar Calificación</span>
                    <Sparkles className="w-4 h-4 text-slate-950" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
