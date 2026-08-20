import React from 'react';
import { ASSETS } from '../constants/assets';
import { Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
  onOpenZppModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenZppModal }) => {
  return (
    <footer className="bg-pilates-darker text-pilates-sand border-t border-pilates-gold/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={ASSETS.logo}
                alt="Sarah Iken SalutoSI Logo"
                className="h-10 w-auto filter brightness-110"
              />
              <div>
                <span className="font-serif text-xl font-bold text-white block">Sarah Iken</span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-pilates-gold">Pilates & Salutogenese</span>
              </div>
            </div>
            <p className="text-xs text-pilates-sand/70 leading-relaxed">
              „There is no body B.“ Individuelle Schmerz- und Bewegungstherapie mit über 30 Jahren Erfahrung in Hatten & Oldenburg.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="mailto:info@SarahIkenPilates.com"
                className="p-2 rounded-full bg-white/10 text-pilates-gold hover:bg-pilates-gold hover:text-pilates-dark transition-all"
                aria-label="E-Mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Standorte */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">Standorte</h4>
            <ul className="space-y-3 text-xs text-pilates-sand/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pilates-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">.im STALL</strong>
                  Astruper Str. 42, 26209 Hatten/Sandkrug
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pilates-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">.im PAUSENRAUM</strong>
                  Maria-von-Jever-Str. 3, 26125 Oldenburg
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Quick Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">Angebote</h4>
            <ul className="space-y-2 text-xs text-pilates-sand/80">
              <li><a href="#kurse" className="hover:text-pilates-gold transition-colors">Präventionskurse § 20 SGB V</a></li>
              <li><a href="#personal" className="hover:text-pilates-gold transition-colors">1:1 Personal Training & Reformer</a></li>
              <li><a href="#workshops" className="hover:text-pilates-gold transition-colors">Workshops & DPV-Fortbildungen</a></li>
              <li><a href="#retreats" className="hover:text-pilates-gold transition-colors">Retreats Baltrum & Pitztal</a></li>
              <li><button onClick={onOpenZppModal} className="text-pilates-gold hover:underline text-left">Krankenkassen-Rechner</button></li>
            </ul>
          </div>

          {/* Col 4: Kontakt & Sprechzeiten */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">Kontakt</h4>
            <div className="space-y-2 text-xs text-pilates-sand/80 mb-4">
              <div>Tel: <a href="tel:01724456525" className="text-white font-bold hover:text-pilates-gold">0172 4456525</a></div>
              <div>E-Mail: <a href="mailto:info@SarahIkenPilates.com" className="text-white font-bold hover:text-pilates-gold">info@SarahIkenPilates.com</a></div>
            </div>
            <div className="text-[11px] text-pilates-sand/60">
              Mo 10–21 Uhr | Fr 10–19 Uhr<br />
              Sa 09–18 Uhr | So 07–15 Uhr
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pilates-sand/60">
          <div>
            © {new Date().getFullYear()} Sarah Iken – SalutoSI. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onOpenLegal('impressum')} className="hover:text-white transition-colors">Impressum</button>
            <button onClick={() => onOpenLegal('datenschutz')} className="hover:text-white transition-colors">Datenschutz</button>
            <span className="text-pilates-gold text-[11px]">Design by Scholz & Friese</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
