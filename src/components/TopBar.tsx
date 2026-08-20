import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface TopBarProps {
  onOpenZppModal: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenZppModal }) => {
  return (
    <div className="bg-pilates-dark text-pilates-sand py-2.5 px-4 text-xs sm:text-sm font-medium border-b border-pilates-gold/20 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center p-1 rounded-full bg-pilates-gold/20 text-pilates-gold">
            <ShieldCheck className="w-3.5 h-3.5" />
          </span>
          <span>
            <strong className="text-white font-semibold">ZPP-Zertifiziert nach § 20 SGB V:</strong> Gesetzliche Krankenkassen erstatten bis zu 100% der Kursgebühren.
          </span>
        </div>
        <button
          onClick={onOpenZppModal}
          className="inline-flex items-center gap-1.5 text-pilates-gold hover:text-pilates-goldLight transition-colors font-semibold underline underline-offset-4 cursor-pointer"
        >
          <span>Krankenkassen-Ersparnis berechnen</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
