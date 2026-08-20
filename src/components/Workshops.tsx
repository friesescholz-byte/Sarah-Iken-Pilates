import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Award, ArrowRight, UserCheck, GraduationCap } from 'lucide-react';
import { ASSETS } from '../constants/assets';

interface WorkshopsProps {
  onOpenBooking: (title: string, category?: string) => void;
}

export const Workshops: React.FC<WorkshopsProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'teilnehmer' | 'trainer'>('teilnehmer');

  // Workshops for Normal Participants & Pilates Fans
  const generalWorkshops = [
    {
      id: 'longevity',
      title: 'Longevity PILATES – Heute für Morgen',
      date: 'Sonntag, 27. September 2026',
      time: '12:30 – 15:00 Uhr',
      location: 'Pausenraum Oldenburg Etzhorn',
      price: '50 €',
      desc: 'Funktionale Muskelgruppen als Indikatoren für ein gesundes und unabhängiges Leben. Kein hartes Workout, sondern gezielte Übungen für die kommenden 20 Jahre.',
      tag: 'Für Alle (Ü40/50/60)',
      image: ASSETS.treePose,
    },
    {
      id: 'decompression',
      title: 'DECOMPRESSION Pilates & Faszien',
      date: 'Sonntag, 11. Oktober 2026',
      time: '12:30 – 14:00 Uhr',
      location: 'Pausenraum Oldenburg Etzhorn',
      price: '40 €',
      desc: 'Deep work & Faszienpilates für geschmeidige Gelenke, Bänder und Bandscheiben. Kompression und Dekompression zur optimalen Disken-Ernährung.',
      tag: 'Gelenk- & Wirbelsäulenfokus',
      image: ASSETS.wildthingPose,
    },
    {
      id: 'breath',
      title: '„Japst Du noch oder atmest Du schon?“',
      date: 'Samstag, 14. November 2026',
      time: '13:30 – 16:30 Uhr',
      location: 'Studio am Stern, Wachmannstr. 5-7, Bremen',
      price: 'Preis auf Anfrage',
      desc: 'Der Atem als Fernbedienung für dein Nervensystem. Bringe deinen Körper innerhalb von 60 Sekunden aus Stress in tiefe Sicherheit.',
      tag: 'Atem- & Stress-Special',
      image: ASSETS.yinlates,
    },
    {
      id: 'boundaries',
      title: 'Coworkshop „Grenzen“ – Präsenz & Raum',
      date: 'Sonntag, 18. Oktober 2026',
      time: '13:30 – 18:00 Uhr',
      location: 'Pausenraum Oldenburg Etzhorn',
      price: '149 € (inkl. Snacks)',
      desc: 'Mit Psychotherapeutin Dr. Barbara Jimenez & Sarah Iken. Körperliche und seelische Grenzen wahrnehmen lernen und Präsenz gewinnen.',
      tag: 'Körper & Psyche',
      image: ASSETS.workshops,
    },
    {
      id: 'balanceboard',
      title: 'Pilates auf dem BALANCEBOARD',
      date: 'Fortlaufende Termine 2026',
      time: '14:00 – 15:30 Uhr',
      location: 'Pausenraum Oldenburg Etzhorn',
      price: '40 €',
      desc: 'Sturzprophylaxe, Schwindelreduktion, Trittsicherheit & Bandscheibenentlastung. Spielerische Tiefenstabilität auf dem Balanceboard.',
      tag: 'Inkl. 10% Rabattcode',
      image: ASSETS.mcPrep,
    },
    {
      id: 'muttertag',
      title: 'Muttertag Spezial (MAMA – TOCHTER / SOHN)',
      date: 'Samstag, 08. Mai 2027',
      time: '14:30 – 17:00 Uhr',
      location: 'Pausenraum Oldenburg Etzhorn',
      price: '75 € Double Ticket',
      desc: 'Gönnt euch eine gemeinsame Pilates-Auszeit der besonderen Art. Einen Tag vor Muttertag – inklusive Blümchen :)',
      tag: 'Partner-Event',
      image: ASSETS.aboutPortrait,
    },
  ];

  // Professional Continued Education for Teachers / Instructors
  const proWorkshops = [
    {
      id: 'handson',
      title: 'Weiterbildung „HANDS ON / OFF“ – Taktiles Anleiten',
      date: 'Samstag, 28. November 2026',
      time: '13:30 – 18:30 Uhr',
      location: 'Studio am Stern, Wachmannstr. 5-7, Bremen',
      price: '189 €',
      badge: '5 DPV-Fortbildungspunkte',
      desc: 'Fortbildung für Pilateslehrende: Taktiles Begleiten, gezielte Handgriffe, Orientierung und Sicherheit beim Ausrichten der Klienten.',
      image: ASSETS.handsOn,
    },
    {
      id: 'rollup',
      title: 'Masterclass „The Roll Up“ – Benefit, Cues & Biomechanik',
      date: 'Sonntag, 18. Oktober 2026',
      time: '12:30 – 15:00 Uhr',
      location: 'Pausenraum Oldenburg Etzhorn',
      price: '150 € (max. 6 TN)',
      badge: 'Didaktik & Anatomie',
      desc: 'Biomechanik des Atmens, funktionale Ketten & Neuroathletik. Verstehe, warum Standard-Cues scheitern und wie jede(r) den Roll Up lernt.',
      image: ASSETS.precisionExercise,
    },
    {
      id: 'mentee',
      title: 'Mentee-Begleitung für Pilates-Trainer:innen',
      date: 'Individuelle Terminabsprache',
      time: 'Präsenz oder Online',
      location: 'Studio & Online möglich',
      price: 'Auf Anfrage',
      badge: '1:1 Mentoring',
      desc: 'Professionelle Begleitung während oder nach deiner Ausbildung. Praxisfokus auf Methodik, Didaktik und wirksames Unterrichten.',
      image: ASSETS.personalTrainerCoach,
    },
    {
      id: 'kleingeraete',
      title: 'Sinnvoller Einsatz von KLEINGERÄTEN (Bänder, Bälle, Rollen)',
      date: 'Samstag, 21. November 2026',
      time: 'Uhrzeit nach Absprache',
      location: 'Oldenburg & Bremen',
      price: 'Auf Anfrage (6–12 TN)',
      badge: 'Praxis-Workshop',
      desc: '„Feel the difference“ – wie du Kleingeräte funktionell einsetzt, um gezielte Bewegungsmuster zu schulen.',
      image: ASSETS.mcPrep,
    },
  ];

  return (
    <section id="workshops" className="py-20 md:py-28 bg-pilates-sand relative border-b border-pilates-sandDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-pilates-gold/15 text-pilates-goldDark px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Workshops & Fach-Fortbildungen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-pilates-dark mb-4">
            Workshops & Fortbildungen
          </h2>
          <p className="text-pilates-dark/75 text-sm sm:text-base">
            Klar getrennt: Wähle zwischen spannenden Themen-Workshops für Jeden oder offiziellen Fortbildungen für Trainer.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="inline-flex p-1.5 bg-pilates-sandDark/70 rounded-2xl max-w-md w-full">
            <button
              onClick={() => setActiveTab('teilnehmer')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'teilnehmer'
                  ? 'bg-pilates-dark text-white shadow-luxury'
                  : 'text-pilates-dark/80 hover:text-pilates-dark'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Für Teilnehmer & Neugierige</span>
            </button>
            <button
              onClick={() => setActiveTab('trainer')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'trainer'
                  ? 'bg-pilates-dark text-white shadow-luxury'
                  : 'text-pilates-dark/80 hover:text-pilates-dark'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Für Pilates-Trainer:innen (DPV)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: General Workshops */}
        {activeTab === 'teilnehmer' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
            {generalWorkshops.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-3xl overflow-hidden border border-pilates-sandDark hover:border-pilates-gold/50 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] bg-pilates-dark overflow-hidden">
                  <img src={evt.image} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pilates-dark/85 backdrop-blur-md text-pilates-gold border border-pilates-gold/30 text-[10px] uppercase font-extrabold px-3 py-1.5 rounded-full">
                      {evt.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-pilates-dark font-serif font-bold text-base px-3 py-1 rounded-xl shadow-md">
                    {evt.price}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-pilates-dark mb-2 group-hover:text-pilates-gold transition-colors">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-pilates-dark/80 line-clamp-3 mb-4 leading-relaxed">
                      {evt.desc}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-4 border-t border-pilates-sandDark text-xs text-pilates-muted mb-5">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-pilates-gold shrink-0" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-pilates-gold shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-pilates-gold shrink-0" />
                      <span className="truncate">{evt.location}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking(`Workshop: ${evt.title}`, 'workshop')}
                    className="w-full py-3 rounded-full bg-pilates-sand hover:bg-pilates-dark hover:text-white text-pilates-dark font-bold text-xs transition-all flex items-center justify-center gap-2 border border-pilates-sandDark cursor-pointer"
                  >
                    <span>Platz anfragen</span>
                    <ArrowRight className="w-3.5 h-3.5 text-pilates-gold" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Trainer Workshops */}
        {activeTab === 'trainer' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            {proWorkshops.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-3xl overflow-hidden border border-pilates-gold/40 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/9] bg-pilates-dark overflow-hidden">
                  <img src={evt.image} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pilates-dark/90 backdrop-blur-md text-pilates-gold border border-pilates-gold/30 text-[10px] uppercase font-extrabold px-3 py-1.5 rounded-full">
                      {evt.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-pilates-dark font-serif font-bold text-base px-3 py-1 rounded-xl shadow-md">
                    {evt.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-pilates-dark mb-2 group-hover:text-pilates-gold transition-colors">
                      {evt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-pilates-dark/80 mb-4 leading-relaxed">
                      {evt.desc}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-4 border-t border-pilates-sandDark text-xs text-pilates-muted mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-pilates-gold shrink-0" />
                      <span>{evt.date} • {evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-pilates-gold shrink-0" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking(`Trainer-Fortbildung: ${evt.title}`, 'trainer')}
                    className="w-full py-3.5 rounded-full bg-pilates-dark hover:bg-pilates-darker text-white font-bold text-xs transition-all shadow-luxury flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Fortbildungsplatz reservieren</span>
                    <ArrowRight className="w-3.5 h-3.5 text-pilates-gold" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
