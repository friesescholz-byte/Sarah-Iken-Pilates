import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface ZppCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (name: string) => void;
}

export const ZppCalculatorModal: React.FC<ZppCalculatorModalProps> = ({ isOpen, onClose, onSelectCourse }) => {
  const [insurance, setInsurance] = useState<string>('tk');
  const coursePrice = 210;

  const insuranceRates: Record<string, { name: string; refund: number; maxPerYear: number }> = {
    tk: { name: 'Techniker Krankenkasse (TK)', refund: 150, maxPerYear: 2 },
    barmer: { name: 'Barmer', refund: 150, maxPerYear: 2 },
    aok: { name: 'AOK Niedersachsen', refund: 210, maxPerYear: 2 },
    dak: { name: 'DAK Gesundheit', refund: 150, maxPerYear: 2 },
    ikk: { name: 'IKK classic', refund: 180, maxPerYear: 2 },
    hkk: { name: 'hkk Krankenkasse', refund: 210, maxPerYear: 2 },
    other: { name: 'Andere gesetzliche Kasse', refund: 150, maxPerYear: 2 },
  };

  if (!isOpen) return null;

  const currentRefund = insuranceRates[insurance].refund;
  const userShare = Math.max(0, coursePrice - currentRefund);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pilates-darker/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-pilates-sandDark relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-pilates-dark/60 hover:text-pilates-dark hover:bg-pilates-sand transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-pilates-sageLight text-pilates-sage rounded-2xl">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-pilates-dark">ZPP-Ersparnis-Rechner</h3>
            <p className="text-xs text-pilates-muted">§ 20 SGB V Präventionskurs-Bezuschussung</p>
          </div>
        </div>

        <p className="text-xs text-pilates-dark/80 mb-6 leading-relaxed">
          Gesetzliche Krankenkassen fördern Sarahs Präventionskurse (Hatten, Oldenburg & Online) bis zu 2-mal pro Kalenderjahr.
        </p>

        {/* Selector */}
        <div className="mb-6">
          <label className="text-xs font-bold text-pilates-dark uppercase block mb-2">Wähle deine Krankenkasse:</label>
          <select
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
            className="w-full bg-pilates-sandLight border border-pilates-sandDark rounded-xl p-3 text-xs sm:text-sm font-semibold text-pilates-dark focus:outline-none focus:border-pilates-gold"
          >
            {Object.entries(insuranceRates).map(([k, v]) => (
              <option key={k} value={k}>{v.name}</option>
            ))}
          </select>
        </div>

        {/* Calculation Summary Card */}
        <div className="bg-pilates-sandLight rounded-2xl p-5 border border-pilates-sandDark mb-6 space-y-3">
          <div className="flex justify-between text-xs text-pilates-dark/80">
            <span>Reguläre Kursgebühr (10 Einheiten):</span>
            <span className="font-bold">{coursePrice} €</span>
          </div>
          <div className="flex justify-between text-xs text-pilates-sage font-bold">
            <span>Erstattung durch deine Kasse:</span>
            <span>- {currentRefund} €</span>
          </div>
          <div className="pt-3 border-t border-pilates-sandDark flex justify-between items-baseline">
            <span className="font-bold text-sm text-pilates-dark">Dein tatsächlicher Eigenanteil:</span>
            <span className="font-serif text-3xl font-bold text-pilates-dark">{userShare} €</span>
          </div>
        </div>

        <div className="space-y-2 text-[11px] text-pilates-muted mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-pilates-sage shrink-0" />
            <span>ZPP-Zertifikats-ID: KU-BE-YLTZ4GQ1</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-pilates-sage shrink-0" />
            <span>Teilnahmebescheinigung wird nach Kursabschluss ausgestellt</span>
          </div>
        </div>

        <button
          onClick={() => {
            onClose();
            onSelectCourse('ZPP Präventionskurs');
          }}
          className="w-full py-3.5 rounded-full bg-pilates-dark hover:bg-pilates-darker text-white font-bold text-xs transition-all shadow-luxury flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Jetzt bezuschussten Kursplatz sichern</span>
          <ArrowRight className="w-3.5 h-3.5 text-pilates-gold" />
        </button>

      </div>
    </div>
  );
};
