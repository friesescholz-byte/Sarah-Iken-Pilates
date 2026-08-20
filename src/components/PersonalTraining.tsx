import React from 'react';
import { User, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

interface PersonalTrainingProps {
  onOpenBooking: (pkg: string, category?: string) => void;
}

export const PersonalTraining: React.FC<PersonalTrainingProps> = ({ onOpenBooking }) => {
  return (
    <section id="personal" className="py-20 md:py-28 bg-pilates-dark text-pilates-sand relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pilates-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2.5 bg-pilates-gold/20 text-pilates-gold px-4 py-2 rounded-full text-sm font-extrabold tracking-wide mb-4 border border-pilates-gold/30">
            <User className="w-4 h-4" />
            <span>1:1 Personal & Reformer Training</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            1:1 Personal Training & Exklusive Sessions
          </h2>
          <p className="text-pilates-sand/85 text-base sm:text-xl leading-relaxed">
            Keine Massenabfertigung, sondern 100% Fokus auf deinen Körper. 
            An Studio-Geräten (Reformer, Cadillac, Spine Corrector) oder als mobiles Training bei dir vor Ort.
          </p>
        </div>

        {/* 2 Cards Grid: Studio Geräte vs Mobiles Pilates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Studio Geräte & Neuroathletik */}
          <div className="bg-pilates-card rounded-3xl p-8 sm:p-10 border border-pilates-gold/30 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-extrabold text-pilates-gold uppercase tracking-wider">Im Studio</span>
                <span className="bg-pilates-gold/20 text-pilates-gold text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-pilates-gold/30">
                  Reformer & Cadillac
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mb-4">
                1:1 Studio-Geräte Training & Schmerztherapie
              </h3>

              <p className="text-sm sm:text-base text-pilates-sand/85 leading-relaxed mb-8">
                Maßgeschneiderte Einzelstunden abgestimmt auf deine Haltung, Schmerzursachen (Bandscheibe, Nacken, LWS) 
                oder sportliche Leistungssteigerung (Triathlon, Marathon-Vorbereitung).
              </p>

              <div className="space-y-3.5 mb-10 text-sm sm:text-base text-pilates-sand/90 font-medium">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pilates-gold shrink-0" />
                  <span>Training an Reformer, Cadillac, Chair, Spine Corrector & Balanceboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pilates-gold shrink-0" />
                  <span>Integration von Neuroathletik, Spiraldynamik & Faszientherapie</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pilates-gold shrink-0" />
                  <span>Ersttermin (Anamnese + Training): 119 € • Folgetermine ab 75 €</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking('1:1 Personal Training (Studio)', 'personal')}
              className="w-full py-4.5 rounded-full bg-pilates-gold hover:bg-pilates-goldLight text-pilates-dark font-extrabold text-sm sm:text-base transition-all shadow-gold-glow flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>1:1 Kennenlerngespräch anfragen</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Card 2: Mobiles Pilates */}
          <div className="bg-pilates-card rounded-3xl p-8 sm:p-10 border border-white/20 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-extrabold text-pilates-sand/80 uppercase tracking-wider">Bei dir vor Ort</span>
                <span className="bg-white/15 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-white/25">
                  Hausbesuch & Firma
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Mobiles Pilates: „Rollt die Matte aus: Ich komme!“
              </h3>

              <p className="text-sm sm:text-base text-pilates-sand/85 leading-relaxed mb-8">
                Du hast einen Raum zuhause oder im Büro und Lust auf Pilates? 
                Sarah kommt direkt zu dir und bringt Expertise und Equipment (Matten & Kleingeräte) mit.
              </p>

              <div className="space-y-3.5 mb-10 text-sm sm:text-base text-pilates-sand/90 font-medium">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pilates-gold shrink-0" />
                  <span>1:1 Einzelstunde: ab 100 €</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pilates-gold shrink-0" />
                  <span>Duo & Kleingruppe (2–4 Personen): ab 42,50 € p.P.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pilates-gold shrink-0" />
                  <span>Gruppe (5–8 Personen): ab ca. 18,00 € p.P.</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking('Mobiles Pilates vor Ort', 'personal')}
              className="w-full py-4.5 rounded-full bg-white hover:bg-pilates-sand text-pilates-dark font-extrabold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Mobiles Pilates anfragen</span>
              <ArrowRight className="w-5 h-5 text-pilates-dark" />
            </button>
          </div>

        </div>

        {/* Bottom Trust Banner */}
        <div className="bg-pilates-darker p-7 rounded-2xl border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-pilates-gold/20 text-pilates-gold rounded-xl shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white block text-base sm:text-lg">Unsicher, welches 1:1 Format zu dir passt?</strong>
              <span className="text-pilates-sand/75 text-sm sm:text-base">Sarah berät dich gerne telefonisch und unverbindlich.</span>
            </div>
          </div>
          <a
            href="tel:01724456525"
            className="text-pilates-gold hover:underline font-extrabold text-base whitespace-nowrap"
          >
            Direkt anrufen: 0172 4456525 →
          </a>
        </div>

      </div>
    </section>
  );
};
