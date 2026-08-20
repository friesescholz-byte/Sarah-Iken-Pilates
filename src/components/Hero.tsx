import React from 'react';
import { ASSETS } from '../constants/assets';
import { ShieldCheck, ArrowRight, Heart, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenBookingModal: () => void;
  onOpenZppModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onOpenZppModal }) => {
  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-pilates-sandLight via-pilates-sand to-pilates-sandDark/40">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-pilates-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pilates-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & High-Conversion CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-pilates-sandDark/80 border border-pilates-gold/40 text-pilates-dark px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-pilates-gold animate-pulse" />
              <span className="tracking-wide uppercase text-[11px]">Salutogenese & Präzisions-Pilates in Oldenburg & Hatten</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-pilates-dark leading-[1.12] mb-6">
              Dein Körper hat keinen Ersatz.{' '}
              <span className="italic font-normal text-pilates-gold block sm:inline">
                Trainiere mit Verstand & Herz.
              </span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg text-pilates-dark/80 leading-relaxed max-w-2xl mb-8">
              Individuelle Schmerz- und Bewegungstherapie mit über 30 Jahren Erfahrung als examinierte Sportpädagogin & Faszienexpertin. 
              Spüre den Unterschied zwischen bloßem Training und echter, regenerierender Körperintelligenz.
            </p>

            {/* Dual CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBookingModal}
                className="inline-flex items-center justify-center gap-3 bg-pilates-dark hover:bg-pilates-darker text-white px-7 py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-luxury hover:shadow-gold-glow group cursor-pointer"
              >
                <span>Passenden Kurs finden</span>
                <ArrowRight className="w-4 h-4 text-pilates-gold transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenZppModal}
                className="inline-flex items-center justify-center gap-2.5 bg-white/90 hover:bg-white text-pilates-dark border border-pilates-sandDark hover:border-pilates-gold px-6 py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                <ShieldCheck className="w-5 h-5 text-pilates-gold" />
                <span>Krankenkassen-Zuschuss</span>
              </button>
            </div>

            {/* Trust Mini-Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-6 border-t border-pilates-sandDark w-full text-xs text-pilates-dark/80 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pilates-gold shrink-0" />
                <span>Bis 100% ZPP-Zuschuss</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pilates-gold shrink-0" />
                <span>Kleine Gruppen (max. 8)</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-pilates-gold shrink-0" />
                <span>30+ Jahre Fachexpertise</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Hierarchy & Layering */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Portrait Frame with Luxury Border */}
              <div className="relative rounded-3xl overflow-hidden shadow-luxury border-4 border-white aspect-[4/5] bg-pilates-dark">
                <img
                  src={ASSETS.heroPortrait}
                  alt="Sarah Iken Pilates Trainerin & Therapeutin"
                  className="w-full h-full object-cover object-top filter brightness-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pilates-dark/70 via-transparent to-transparent" />
                
                {/* Floating Bottom Nameplate */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-pilates-dark leading-tight">
                        Sarah Iken
                      </h3>
                      <p className="text-xs text-pilates-muted">
                        Sportpädagogin & Dozentin (DPV/ZPP)
                      </p>
                    </div>
                    <div className="bg-pilates-gold/15 text-pilates-goldDark p-2 rounded-xl">
                      <Heart className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Atmosphere Card (Top Left) */}
              <div className="hidden sm:flex absolute -top-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-pilates-sandDark max-w-[210px] items-center gap-3">
                <img
                  src={ASSETS.stegAtmosphere}
                  alt="Natur & Pilates Atmosphäre"
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div className="text-[11px] leading-tight">
                  <span className="font-bold text-pilates-dark block">„There is no body B“</span>
                  <span className="text-pilates-muted">Salutogenese & Achtsamkeit</span>
                </div>
              </div>

              {/* Floating ZPP Guarantee Badge (Bottom Right) */}
              <div className="absolute -bottom-6 -right-4 bg-pilates-dark text-white rounded-2xl p-4 shadow-2xl border border-pilates-gold/30 max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-pilates-gold" />
                  <span className="text-xs font-bold uppercase tracking-wider text-pilates-gold">ZPP Zertifiziert</span>
                </div>
                <p className="text-[11px] text-pilates-sand/80 leading-snug">
                  Krankenkassen-Erstattung nach § 20 SGB V
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
