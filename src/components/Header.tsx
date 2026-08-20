import React, { useState } from 'react';
import { ASSETS } from '../constants/assets';
import { Phone, Calendar, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBookingModal: () => void;
  onOpenZppModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal, onOpenZppModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-pilates-sandDark/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3.5 group">
            <img
              src={ASSETS.logo}
              alt="Sarah Iken Pilates & Salutogenese Logo"
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-extrabold text-pilates-dark tracking-tight leading-none">
                Sarah Iken
              </span>
              <span className="text-xs sm:text-sm tracking-widest uppercase font-bold text-pilates-gold mt-1">
                Pilates & Salutogenese
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-base font-bold text-pilates-dark">
            <a href="#kurse" className="hover:text-pilates-gold transition-colors py-1">Kurse & Standorte</a>
            <a href="#personal" className="hover:text-pilates-gold transition-colors py-1">1:1 Training</a>
            <a href="#workshops" className="hover:text-pilates-gold transition-colors py-1">Workshops & Fortbildung</a>
            <a href="#retreats" className="hover:text-pilates-gold transition-colors py-1">Reisen & Retreats</a>
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:01724456525"
              className="inline-flex items-center gap-2 text-sm font-bold text-pilates-dark hover:text-pilates-gold px-3.5 py-2.5 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4 text-pilates-gold" />
              <span>0172 4456525</span>
            </a>

            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-2 bg-pilates-dark hover:bg-pilates-darker text-white text-sm sm:text-base font-bold px-6 py-3.5 rounded-full transition-all duration-300 shadow-luxury hover:shadow-gold-glow cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-pilates-gold" />
              <span>Platz anfragen</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-pilates-dark hover:bg-pilates-sandDark/50 transition-colors"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-pilates-sandDark px-6 py-8 space-y-5 shadow-2xl">
          <nav className="flex flex-col space-y-4 text-lg font-bold text-pilates-dark">
            <a href="#kurse" onClick={() => setMobileMenuOpen(false)} className="hover:text-pilates-gold py-1">Kurse & Standorte</a>
            <a href="#personal" onClick={() => setMobileMenuOpen(false)} className="hover:text-pilates-gold py-1">1:1 Personal Training</a>
            <a href="#workshops" onClick={() => setMobileMenuOpen(false)} className="hover:text-pilates-gold py-1">Workshops & Fortbildung</a>
            <a href="#retreats" onClick={() => setMobileMenuOpen(false)} className="hover:text-pilates-gold py-1">Reisen & Retreats</a>
          </nav>
          <div className="pt-6 border-t border-pilates-sandDark flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenZppModal(); }}
              className="w-full text-center py-3.5 rounded-full border border-pilates-sandDark text-sm font-bold text-pilates-dark"
            >
              Krankenkassen-Ersparnis berechnen
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBookingModal(); }}
              className="w-full text-center py-4 rounded-full bg-pilates-dark text-white text-base font-bold shadow-luxury"
            >
              Unverbindlich anfragen
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
