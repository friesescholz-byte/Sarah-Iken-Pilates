import React, { useState, useEffect } from 'react';
import { ASSETS } from '../constants/assets';
import { Menu, X, Phone, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenBookingModal: (initialService?: string) => void;
  onOpenZppModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal, onOpenZppModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Präventionskurse', href: '#kurse' },
    { label: '1:1 Personal & Reformer', href: '#personal' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Retreats & Reisen', href: '#retreats' },
    { label: 'Über Sarah', href: '#ueber-mich' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-luxury border-b border-pilates-sandDark/80 py-3.5'
          : 'bg-pilates-sand/90 backdrop-blur-md py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3.5 group">
          <img
            src={ASSETS.logo}
            alt="Sarah Iken SalutoSI Logo"
            className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-pilates-dark leading-none">
              Sarah Iken
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-pilates-gold mt-1">
              Pilates & Salutogenese
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-pilates-dark/85 hover:text-pilates-gold transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pilates-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Group */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:01724456525"
            className="flex items-center gap-2 text-xs font-semibold text-pilates-dark/80 hover:text-pilates-gold transition-colors px-3 py-2 rounded-full border border-pilates-sandDark hover:border-pilates-gold"
          >
            <Phone className="w-3.5 h-3.5 text-pilates-gold" />
            <span>0172 4456525</span>
          </a>
          <button
            onClick={() => onOpenBookingModal()}
            className="inline-flex items-center gap-2 bg-pilates-dark hover:bg-pilates-darker text-pilates-sand px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-gold-glow cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-pilates-gold" />
            <span>Platz anfragen</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-pilates-dark hover:text-pilates-gold transition-colors rounded-lg"
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-pilates-sandDark px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-pilates-dark hover:text-pilates-gold py-1 border-b border-pilates-sandDark/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenZppModal();
                }}
                className="w-full text-center py-2.5 rounded-full text-xs font-semibold border border-pilates-gold text-pilates-gold hover:bg-pilates-gold/10 transition-colors"
              >
                Krankenkassen-Zuschuss berechnen
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full text-center bg-pilates-dark text-white py-3 rounded-full text-sm font-semibold hover:bg-pilates-darker transition-colors shadow-luxury"
              >
                Jetzt Platz anfragen
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
