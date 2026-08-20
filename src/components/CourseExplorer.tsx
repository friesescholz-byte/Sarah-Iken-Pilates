import React, { useState } from 'react';
import { MapPin, ShieldCheck, Calendar, CheckCircle2, Calculator } from 'lucide-react';
import { ASSETS } from '../constants/assets';

interface CourseExplorerProps {
  onOpenBooking: (courseName: string, category?: string) => void;
  onOpenZppModal: () => void;
}

export const CourseExplorer: React.FC<CourseExplorerProps> = ({ onOpenBooking, onOpenZppModal }) => {
  const [activeLocation, setActiveLocation] = useState<'hatten' | 'oldenburg' | 'online'>('hatten');

  return (
    <section id="kurse" className="py-20 md:py-28 bg-pilates-sandLight relative border-b border-pilates-sandDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-pilates-sage/20 text-pilates-sage px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-pilates-sage/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Präventionskurse § 20 SGB V</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-pilates-dark">
              Reguläre Gruppenkurse
            </h2>
            <p className="text-xs sm:text-sm text-pilates-goldDark font-semibold mt-1">
              ZPP-Zertifiziert nach § 20 SGB V – bis zu 100% Erstattung durch deine gesetzliche Krankenkasse
            </p>
          </div>

          <button
            onClick={onOpenZppModal}
            className="inline-flex items-center gap-2 bg-white text-pilates-dark border-2 border-pilates-gold/50 hover:border-pilates-gold px-6 py-3.5 rounded-full text-xs font-bold transition-all shadow-md hover:shadow-gold-glow shrink-0 cursor-pointer group"
          >
            <Calculator className="w-4 h-4 text-pilates-gold transition-transform group-hover:scale-110" />
            <span>Krankenkassen-Ersparnis berechnen →</span>
          </button>
        </div>

        {/* Location Switcher Buttons */}
        <div className="flex flex-wrap items-center gap-3 p-1.5 bg-pilates-sandDark/60 rounded-2xl max-w-2xl mb-10">
          <button
            onClick={() => setActiveLocation('hatten')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeLocation === 'hatten'
                ? 'bg-pilates-dark text-white shadow-luxury'
                : 'text-pilates-dark/80 hover:text-pilates-dark hover:bg-white/50'
            }`}
          >
            1. Hatten / Sandkrug (.im STALL)
          </button>
          <button
            onClick={() => setActiveLocation('oldenburg')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeLocation === 'oldenburg'
                ? 'bg-pilates-dark text-white shadow-luxury'
                : 'text-pilates-dark/80 hover:text-pilates-dark hover:bg-white/50'
            }`}
          >
            2. Oldenburg Etzhorn (.im PAUSENRAUM)
          </button>
          <button
            onClick={() => setActiveLocation('online')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeLocation === 'online'
                ? 'bg-pilates-dark text-white shadow-luxury'
                : 'text-pilates-dark/80 hover:text-pilates-dark hover:bg-white/50'
            }`}
          >
            3. Online (Pre-Brunch)
          </button>
        </div>

        {/* Location 1: Hatten */}
        {activeLocation === 'hatten' && (
          <div className="bg-white rounded-3xl border border-pilates-sandDark overflow-hidden shadow-luxury grid grid-cols-1 lg:grid-cols-12 animate-fadeIn">
            <div className="p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-pilates-dark">
                    Studio .im STALL (Hatten / Sandkrug)
                  </h3>
                  <span className="bg-pilates-sage/15 text-pilates-sage border border-pilates-sage/30 text-[10px] uppercase font-extrabold px-3 py-1 rounded-full">
                    Krankenkassen-Zuschuss
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5 text-xs text-pilates-muted mb-6">
                  <MapPin className="w-4 h-4 text-pilates-gold" />
                  <span>Astruper Str. 42, 26209 Hatten/Sandkrug • Max. 8 Teilnehmer pro Kurs</span>
                </div>

                <p className="text-xs sm:text-sm text-pilates-dark/80 leading-relaxed mb-6">
                  Rustikal-ländliche, warme Atmosphäre mit viel Herzblut und anatomischer Präzision. 
                  Pilates-Training mit Geräten in einer geschützten Kleingruppe. Du bringst deine Matte mit – Sarah den Rest!
                </p>

                {/* Kurszeiten */}
                <div className="bg-pilates-sandLight rounded-2xl p-5 border border-pilates-sandDark/70 mb-6 space-y-3">
                  <div className="text-xs font-bold text-pilates-dark uppercase tracking-wider">
                    Freitags-Kurszeiten (Wähle deine Uhrzeit):
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['14:00 Uhr', '15:15 Uhr', '16:30 Uhr', '17:45 Uhr'].map((time, idx) => (
                      <div key={idx} className="bg-white p-2.5 rounded-xl text-center border border-pilates-sandDark text-xs font-bold text-pilates-dark shadow-sm">
                        {time}
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-pilates-muted pt-1">
                    Kursumfang: 10 Einheiten à 60 Minuten • ZPP-Kurs-ID: <code className="font-bold bg-white px-1.5 py-0.5 rounded border border-pilates-sandDark">KU-BE-YLTZ4GQ1</code>
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-pilates-dark/80 mb-6">
                  <CheckCircle2 className="w-4 h-4 text-pilates-gold shrink-0" />
                  <span>Hansefit Partner • Für alle Altersgruppen (14 bis 104 Jahre)</span>
                </div>
              </div>

              {/* Prominent Pricing & Savings Box */}
              <div className="pt-6 border-t border-pilates-sandDark space-y-4">
                
                {/* Visual Savings Highlight Strip */}
                <div className="bg-gradient-to-r from-pilates-sageLight to-pilates-sand p-4 rounded-2xl border border-pilates-sage/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-pilates-sage text-white flex items-center justify-center shrink-0 shadow-sm">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-pilates-dark">
                        Gesetzliche Krankenkasse übernimmt 75 € bis 210 €
                      </div>
                      <div className="text-[11px] text-pilates-sage font-semibold">
                        Dein effektiver Eigenanteil: oft nur <strong>0 € bis 60 €</strong>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={onOpenZppModal}
                    className="text-xs font-bold text-pilates-sage hover:underline whitespace-nowrap self-start sm:self-center"
                  >
                    Kassen-Zuschuss berechnen →
                  </button>
                </div>

                {/* Price & Booking Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div>
                    <span className="text-[11px] text-pilates-muted uppercase font-bold block">Gesamtpreis vor Erstattung:</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-3xl font-bold text-pilates-dark">210 €</span>
                      <span className="text-xs text-pilates-muted font-medium">/ 10 Einheiten à 60 Min.</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenBooking('Präventionskurs .im STALL (Hatten)', 'kurse')}
                    className="bg-pilates-dark hover:bg-pilates-darker text-white px-8 py-3.5 rounded-full text-xs font-bold transition-all shadow-luxury hover:shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-pilates-gold" />
                    <span>Platz in Hatten reservieren</span>
                  </button>
                </div>

              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[280px] bg-pilates-dark">
              <img src={ASSETS.precisionExercise} alt="Pilates im Stall Hatten" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-pilates-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                <span className="text-pilates-gold uppercase font-bold text-[10px] block mb-1">Standort Hatten</span>
                <p className="font-serif text-base italic text-pilates-sand">„Familiär, ländlich & intensiv betreut.“</p>
              </div>
            </div>
          </div>
        )}

        {/* Location 2: Oldenburg */}
        {activeLocation === 'oldenburg' && (
          <div className="bg-white rounded-3xl border border-pilates-sandDark overflow-hidden shadow-luxury grid grid-cols-1 lg:grid-cols-12 animate-fadeIn">
            <div className="p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-pilates-dark">
                    Studio .im PAUSENRAUM (Oldenburg Etzhorn)
                  </h3>
                  <span className="bg-pilates-sage/15 text-pilates-sage border border-pilates-sage/30 text-[10px] uppercase font-extrabold px-3 py-1 rounded-full">
                    Krankenkassen-Zuschuss
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5 text-xs text-pilates-muted mb-6">
                  <MapPin className="w-4 h-4 text-pilates-gold" />
                  <span>Maria-von-Jever-Str. 3, 26125 Oldenburg • 75qm moderner, ruhiger Raum</span>
                </div>

                <p className="text-xs sm:text-sm text-pilates-dark/80 leading-relaxed mb-6">
                  Ein heller, warmer Raum für achtsames Training. Hier finden sowohl aktive Pilates-Kräftigungskurse als auch tiefenentspannendes Yin-lates statt.
                </p>

                {/* Kursformate */}
                <div className="space-y-3 mb-6">
                  <div className="bg-pilates-sandLight p-4 rounded-2xl border border-pilates-sandDark/70">
                    <div className="flex justify-between items-center mb-1">
                      <strong className="text-xs text-pilates-dark">Sonntags-Kurse:</strong>
                      <span className="text-xs font-bold text-pilates-gold">10:15 Uhr & 11:30 Uhr</span>
                    </div>
                    <p className="text-[11px] text-pilates-muted">Pilates mit Kleingeräten in Kleingruppe (1:8)</p>
                  </div>

                  <div className="bg-pilates-sandLight p-4 rounded-2xl border border-pilates-sandDark/70">
                    <div className="flex justify-between items-center mb-1">
                      <strong className="text-xs text-pilates-dark">Montags-Kurse:</strong>
                      <span className="text-xs font-bold text-pilates-gold">17:45 Uhr & 19:00 Uhr</span>
                    </div>
                    <p className="text-[11px] text-pilates-muted">Pilates mit Kleingeräten in Kleingruppe (1:8)</p>
                  </div>

                  <div className="bg-pilates-sandLight p-4 rounded-2xl border border-pilates-gold/30">
                    <div className="flex justify-between items-center mb-1">
                      <strong className="text-xs text-pilates-dark">Yin-lates & Faszienentspannung:</strong>
                      <span className="text-xs font-bold text-pilates-gold">Montags 20:15 Uhr</span>
                    </div>
                    <p className="text-[11px] text-pilates-muted">Fokus auf Atmung, Faszien-Dehnung & Loslassen (Deep Stretch)</p>
                  </div>
                </div>
              </div>

              {/* Prominent Pricing & Savings Box */}
              <div className="pt-6 border-t border-pilates-sandDark space-y-4">
                
                {/* Visual Savings Highlight Strip */}
                <div className="bg-gradient-to-r from-pilates-sageLight to-pilates-sand p-4 rounded-2xl border border-pilates-sage/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-pilates-sage text-white flex items-center justify-center shrink-0 shadow-sm">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-pilates-dark">
                        Krankenkassen-Zertifikat § 20 SGB V (ID: KU-BE-YLTZ4GQ1)
                      </div>
                      <div className="text-[11px] text-pilates-sage font-semibold">
                        Kassen erstatten <strong>75 € bis 210 €</strong> • Hansefit Partner
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={onOpenZppModal}
                    className="text-xs font-bold text-pilates-sage hover:underline whitespace-nowrap self-start sm:self-center"
                  >
                    Ersparnis prüfen →
                  </button>
                </div>

                {/* Price & Booking Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div>
                    <span className="text-[11px] text-pilates-muted uppercase font-bold block">Gesamtpreis vor Erstattung:</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-3xl font-bold text-pilates-dark">210 €</span>
                      <span className="text-xs text-pilates-muted font-medium">/ 10 Einheiten à 60 Min.</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenBooking('Präventionskurs .im PAUSENRAUM (Oldenburg)', 'kurse')}
                    className="bg-pilates-dark hover:bg-pilates-darker text-white px-8 py-3.5 rounded-full text-xs font-bold transition-all shadow-luxury hover:shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-pilates-gold" />
                    <span>Platz in Oldenburg reservieren</span>
                  </button>
                </div>

              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[280px] bg-pilates-dark">
              <img src={ASSETS.yinlates} alt="Studio im Pausenraum Oldenburg" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-pilates-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                <span className="text-pilates-gold uppercase font-bold text-[10px] block mb-1">Standort Oldenburg</span>
                <p className="font-serif text-base italic text-pilates-sand">„Hell, ruhig & optimal zum Abschalten.“</p>
              </div>
            </div>
          </div>
        )}

        {/* Location 3: Online */}
        {activeLocation === 'online' && (
          <div className="bg-white rounded-3xl border border-pilates-sandDark overflow-hidden shadow-luxury grid grid-cols-1 lg:grid-cols-12 animate-fadeIn">
            <div className="p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-pilates-dark">
                    Pre-Brunch Pilates (Online Live & On-Demand)
                  </h3>
                  <span className="bg-pilates-sage/15 text-pilates-sage border border-pilates-sage/30 text-[10px] uppercase font-extrabold px-3 py-1 rounded-full">
                    Krankenkassen-Zuschuss
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5 text-xs text-pilates-muted mb-6">
                  <Calendar className="w-4 h-4 text-pilates-gold" />
                  <span>Sonntags 08:00 – 09:00 Uhr MEZ live via Zoom (oder flexibel als Video-Aufzeichnung)</span>
                </div>

                <p className="text-xs sm:text-sm text-pilates-dark/80 leading-relaxed mb-6">
                  Der perfekte Start in den Sonntagmorgen. Trainiere bequem von zuhause aus. 
                  Auch dieser Online-Kurs ist nach § 20 SGB V zertifiziert (Kurs-ID: <code className="font-bold">KU-BE-TAD7E3</code>) und wird von deiner Krankenkasse bezuschusst.
                </p>

                <div className="bg-pilates-sandLight p-4 rounded-2xl border border-pilates-sandDark/70 mb-6 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-pilates-dark">
                    <CheckCircle2 className="w-4 h-4 text-pilates-gold" />
                    <span>Live-Korrektur über Zoom oder Aufzeichnung im Nachgang ansehen</span>
                  </div>
                  <div className="flex items-center gap-2 text-pilates-dark">
                    <CheckCircle2 className="w-4 h-4 text-pilates-gold" />
                    <span>Keine Anfahrt – flexibel in deinen Wochenablauf integrierbar</span>
                  </div>
                </div>
              </div>

              {/* Prominent Pricing & Savings Box */}
              <div className="pt-6 border-t border-pilates-sandDark space-y-4">
                
                {/* Visual Savings Highlight Strip */}
                <div className="bg-gradient-to-r from-pilates-sageLight to-pilates-sand p-4 rounded-2xl border border-pilates-sage/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-pilates-sage text-white flex items-center justify-center shrink-0 shadow-sm">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-pilates-dark">
                        Online-Präventionskurs § 20 SGB V (ZPP-ID: KU-BE-TAD7E3)
                      </div>
                      <div className="text-[11px] text-pilates-sage font-semibold">
                        Wird von gesetzlichen Krankenkassen bis zu 100% erstattet
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={onOpenZppModal}
                    className="text-xs font-bold text-pilates-sage hover:underline whitespace-nowrap self-start sm:self-center"
                  >
                    Kassen-Ersparnis prüfen →
                  </button>
                </div>

                {/* Price & Booking Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div>
                    <span className="text-[11px] text-pilates-muted uppercase font-bold block">Investition:</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-3xl font-bold text-pilates-dark">175 €</span>
                      <span className="text-xs text-pilates-muted font-medium">/ 10 Einheiten (Krankenkassen-fähig)</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenBooking('Pre-Brunch Pilates Online', 'kurse')}
                    className="bg-pilates-dark hover:bg-pilates-darker text-white px-8 py-3.5 rounded-full text-xs font-bold transition-all shadow-luxury hover:shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-pilates-gold" />
                    <span>Online-Platz anfragen</span>
                  </button>
                </div>

              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[280px] bg-pilates-dark">
              <img src={ASSETS.preBrunch} alt="Pre Brunch Pilates Online" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-pilates-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                <span className="text-pilates-gold uppercase font-bold text-[10px] block mb-1">Online & Mediathek</span>
                <p className="font-serif text-base italic text-pilates-sand">„Dein gesunder Start in den Sonntag.“</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
