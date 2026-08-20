import React from 'react';
import { Compass, Calendar, MapPin, Users, ArrowRight, FileText } from 'lucide-react';
import { ASSETS } from '../constants/assets';

interface RetreatsProps {
  onOpenBooking: (title: string, category?: string) => void;
}

export const Retreats: React.FC<RetreatsProps> = ({ onOpenBooking }) => {
  const journeys = [
    {
      id: 'baltrum-meer',
      title: '5 Tage PILATES & MEER SEIN auf Baltrum',
      date: '29. September – 03. Oktober 2026',
      location: 'Nordseeinsel Baltrum',
      spots: 'Max. 8 Plätze',
      status: 'Warteliste eröffnet',
      badge: 'Bestseller Retreat',
      desc: 'Meeresrauschen, autofreie Inselruhe & Pilates direkt am Strand. Tiefes Durchatmen und Regeneration für Körper und Geist.',
      image: ASSETS.baltrumFeet,
      features: ['Tägliche Pilates- & Atemeinheiten', 'Nordsee-Klima & Strandwanderungen', 'Kleine, geschützte Gruppe'],
      ausschreibungInfo: 'Ausschreibung verfügbar',
    },
    {
      id: 'fasten',
      title: '5 Tage PILATES & FASTEN',
      date: '12. – 18. Oktober 2026',
      location: 'Naturidylle Norddeutschland',
      spots: 'Kleine Gruppe',
      status: 'Warteliste eröffnet',
      badge: 'Herbst-Edition',
      desc: 'Ganzheitliche Entschlackung nach fundierten ernährungswissenschaftlichen Standards kombiniert mit schonender Bewegung & Faszienpflege.',
      image: ASSETS.reisenHero,
      features: ['Fachliche Fastenbegleitung', 'Sanftes Bewegungstraining', 'Zellerneuerung & Energie'],
      ausschreibungInfo: 'Ausschreibung ab Mitte September 2026',
    },
    {
      id: 'hunte-bike',
      title: '3-tägige PILATES & BIKE HUNTE TOUR',
      date: '16. – 18. April 2027',
      location: 'Hunte-Flusslandschaft / Oldenburger Land',
      spots: 'Begrenzte Teilnehmerzahl',
      status: 'Save the Date',
      badge: 'Aktiv & Natur',
      desc: 'Flussradeln entlang der malerischen Hunte kombiniert mit morgendlichem und abendlichem Faszien- und Pilates-Training.',
      image: ASSETS.stegAtmosphere,
      features: ['Radeln durch Flusslandschaften', 'Pilates im Grünen', 'Gemeinsame Genuss-Stopps'],
      ausschreibungInfo: 'Weil nach der Tour vor der Tour ist :-)',
    },
    {
      id: 'baltrum-runner',
      title: '3 Tage PILATES for RUNNER auf Baltrum',
      date: '01. – 04. Mai 2027',
      location: 'Nordseeinsel Baltrum',
      spots: 'Warteliste eröffnet',
      status: 'Save the Date',
      badge: 'Läufer Spezial',
      desc: 'Für Läufer, Triathleten und ambitionierte Geher: Laufökonomie, Fuß- & Sprunggelenks-Stabilität und Regeneration am Meeresstrand.',
      image: ASSETS.running,
      features: ['Laufanalyse & Fußstatik', 'Strandläufe & Faszien-Release', 'Insel-Regeneration'],
      ausschreibungInfo: 'Warteliste ist eröffnet',
    },
    {
      id: 'pitztal',
      title: '5 Tage PILATES & BERGWANDERN im Pitztal',
      date: '15. – 19. Juni 2027',
      location: 'Pitztal / Tiroler Alpen',
      spots: 'Max. 8 Plätze verfügbar',
      status: 'Save the Date',
      badge: 'Alpen-Panorama',
      desc: 'Majestätische Bergpanoramen, klare Höhenluft und funktionelles Training für vitale Gelenke und ausgleichende Ruhe.',
      image: ASSETS.treePose,
      features: ['Geführte Bergwanderungen', 'Morgen- & Abend-Pilates', 'Alpen-Panorama & Entspannung'],
      ausschreibungInfo: 'Nur 8 Plätze verfügbar',
    },
  ];

  return (
    <section id="retreats" className="py-20 md:py-28 bg-pilates-sandLight relative border-t border-pilates-sandDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-pilates-gold/15 text-pilates-goldDark px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Mehr LEBEN in dein LEBEN bringen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-pilates-dark mb-4">
            Gesundheitsreisen & Retreats
          </h2>
          <p className="text-pilates-dark/75 text-base sm:text-lg">
            Pilates lässt sich wunderbar mit kraftvollen Naturerlebnissen verbinden. 
            Am Meer, in den Bergen oder beim Fasten – finde deinen Raum zur echten Regeneration.
          </p>
        </div>

        {/* Retreats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeys.map((j) => (
            <div
              key={j.id}
              className="bg-white rounded-3xl overflow-hidden border border-pilates-sandDark hover:border-pilates-gold/50 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Status Badge */}
              <div className="relative aspect-[16/11] bg-pilates-dark overflow-hidden">
                <img
                  src={j.image}
                  alt={j.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <span className="bg-pilates-dark/90 backdrop-blur-md text-pilates-gold border border-pilates-gold/30 text-[10px] uppercase font-extrabold px-3 py-1 rounded-full">
                    {j.status}
                  </span>
                  <span className="bg-white/90 backdrop-blur-md text-pilates-dark text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm w-fit">
                    {j.badge}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-pilates-dark mb-3 group-hover:text-pilates-gold transition-colors">
                    {j.title}
                  </h3>
                  
                  <div className="flex flex-col gap-1.5 text-xs text-pilates-muted mb-4 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-pilates-gold" />
                      <span>{j.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-pilates-gold" />
                      <span>{j.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-pilates-gold" />
                      <span>{j.spots}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-pilates-dark/80 mb-5 leading-relaxed">
                    {j.desc}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {j.features.map((f, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-pilates-dark/90 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-pilates-gold" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-pilates-sandDark space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-pilates-muted mb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-pilates-goldDark">
                      <FileText className="w-3.5 h-3.5 text-pilates-gold" />
                      <span>{j.ausschreibungInfo}</span>
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(`Retreat: ${j.title}`, 'retreat')}
                    className="w-full py-3.5 rounded-full bg-pilates-dark hover:bg-pilates-darker text-white font-bold text-xs transition-all shadow-luxury hover:shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Platz reservieren / Info anfordern</span>
                    <ArrowRight className="w-3.5 h-3.5 text-pilates-gold" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
