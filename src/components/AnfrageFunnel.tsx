import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ShieldCheck, Sparkles, Check, Phone, ArrowRight, RotateCcw, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AnfrageFunnelProps {
  directSelection?: { title: string; category?: string } | null;
  onResetDirectSelection?: () => void;
}

export const AnfrageFunnel: React.FC<AnfrageFunnelProps> = ({
  directSelection,
  onResetDirectSelection,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>(['Präventionskurs .im STALL (Hatten)']);
  const [directBookingItem, setDirectBookingItem] = useState<string | null>(null);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const topCategories = [
    {
      id: 'schmerz',
      title: 'Schmerzen lindern & Haltung stärken',
      subtitle: 'Rücken, Nacken, Bandscheibe, Beckenboden & Reha',
      icon: '🦴',
      matchedFormats: ['stall', 'pausenraum', 'yinlates', 'personal', 'mobile', 'online', 'decomp-ws', 'longevity-ws'],
    },
    {
      id: 'stress',
      title: 'Stress abbauen, Tiefenentspannung & Atmung',
      subtitle: 'Nervensystem beruhigen, Faszien dehnen & Loslassen',
      icon: '🌿',
      matchedFormats: ['yinlates', 'breath-ws', 'boundaries-ws', 'online', 'stall', 'pausenraum'],
    },
    {
      id: 'sport',
      title: 'Sport- & Laufperformance / Aktive Fitness',
      subtitle: 'Laufökonomie, Marathon, Rumpfstabilität & Athletik',
      icon: '🏃',
      matchedFormats: ['personal', 'runner-retreat', 'balanceboard-ws', 'stall', 'pausenraum', 'longevity-ws'],
    },
    {
      id: 'trainer',
      title: 'Für Pilates-Trainer:innen & Fortbildung',
      subtitle: 'DPV-Fortbildungen, Cues, Didaktik & Mentoring',
      icon: '🎓',
      matchedFormats: ['handson-ws', 'rollup-ws', 'mentee', 'kleingeraete-ws'],
    },
  ];

  const reisenCategory = {
    id: 'reisen',
    title: 'Gesundheitsreisen & Retreats (Auszeiten in der Natur)',
    subtitle: '5 Tage Meeresluft auf Baltrum, Fasten, Bergwandern im Pitztal & Hunte Bike Tour',
    icon: '🌊',
    matchedFormats: ['baltrum-meer', 'fasten', 'pitztal', 'baltrum-runner', 'hunte-bike'],
  };

  const allCategories = [...topCategories, reisenCategory];

  const allFormats = [
    { id: 'stall', title: 'Präventionskurs .im STALL (Hatten)', badge: '§ 20 SGB V Kasse', desc: 'Freitags in Hatten/Sandkrug, Kleingruppe (max. 8 TN)' },
    { id: 'pausenraum', title: 'Präventionskurs .im PAUSENRAUM (Oldenburg)', badge: '§ 20 SGB V Kasse', desc: 'Sonntags & Montags in Etzhorn, 75qm moderner Raum' },
    { id: 'yinlates', title: 'Yin-lates & Faszienentspannung (Oldenburg)', badge: 'Deep Stretch', desc: 'Montags 20:15 Uhr, Tiefenentspannung & Atmung' },
    { id: 'online', title: 'Pre-Brunch Pilates Online', badge: '§ 20 SGB V Kasse', desc: 'Sonntagmorgens 08:00 Uhr via Zoom & Mediathek' },
    { id: 'personal', title: '1:1 Studio-Geräte Training (Reformer & Cadillac)', badge: 'Kennenlerngespräch', desc: 'Individuelle Schmerztherapie, Neuroathletik & Sport' },
    { id: 'mobile', title: 'Mobiles Pilates vor Ort (Hausbesuch / Büro)', badge: 'Hausbesuch', desc: '„Rollt die Matte aus: Ich komme!“ inkl. Equipment' },
    { id: 'longevity-ws', title: 'Workshop: Longevity PILATES (27. Sep 2026)', badge: 'Für Teilnehmer', desc: 'Gesund altern ab 40/50/60 – Schlüsselübungen' },
    { id: 'decomp-ws', title: 'Workshop: DECOMPRESSION Pilates (11. Okt 2026)', badge: 'Für Teilnehmer', desc: 'Bandscheiben- & Gelenkentlastung' },
    { id: 'breath-ws', title: 'Workshop: Atem-Special Bremen (14. Nov 2026)', badge: 'Für Teilnehmer', desc: '„Japst du noch oder atmest du schon?“' },
    { id: 'boundaries-ws', title: 'Coworkshop: „Grenzen“ mit Dr. Jimenez (18. Okt 2026)', badge: 'Körper & Psyche', desc: 'Präsenz & Raum wahrnehmen lernen' },
    { id: 'balanceboard-ws', title: 'Workshop: Pilates auf dem BalanceBoard', badge: 'Tiefenstabilität', desc: 'Sturzprophylaxe & Sprunggelenke' },
    { id: 'handson-ws', title: 'Fortbildung: HANDS ON / OFF (28. Nov 2026)', badge: '5 DPV Punkte', desc: 'Taktiles Anleiten für Pilates-Lehrende' },
    { id: 'rollup-ws', title: 'Masterclass: The Roll Up (18. Okt 2026)', badge: 'Didaktik & Cues', desc: 'Biomechanik & anatomisch korrektes Unterrichten' },
    { id: 'mentee', title: '1:1 Mentee-Begleitung für Trainer:innen', badge: 'Mentoring', desc: 'Begleitung während/nach der Trainerausbildung' },
    { id: 'kleingeraete-ws', title: 'Workshop: Sinnvoller Einsatz von Kleingeräten', badge: 'Praxis-Event', desc: 'Bänder, Bälle & Rollen gezielt einsetzen' },
    { id: 'baltrum-meer', title: '5 Tage PILATES & MEER SEIN (Baltrum, 29.09.–03.10.2026)', badge: 'Warteliste', desc: 'Meeresrauschen, autofreie Inselruhe & Strandtraining' },
    { id: 'fasten', title: '5 Tage PILATES & FASTEN (12.–18.10.2026)', badge: 'Warteliste', desc: 'Ganzheitliche Entschlackung & sanfte Faszienpflege' },
    { id: 'pitztal', title: '5 Tage PILATES & BERGWANDERN (Pitztal, 15.–19.06.2027)', badge: 'Max. 8 Plätze', desc: 'Alpen-Panorama, Bergluft & gelenkschonendes Training' },
    { id: 'baltrum-runner', title: '3 Tage PILATES for RUNNER (Baltrum, 01.–04.05.2027)', badge: 'Läufer Retreat', desc: 'Laufökonomie, Fußstatik & Strandregeneration' },
    { id: 'hunte-bike', title: '3 Tage PILATES & BIKE HUNTE TOUR (16.–18.04.2027)', badge: 'Aktiv im Grünen', desc: 'Flussradeln entlang der Hunte & Outdoor-Pilates' },
  ];

  useEffect(() => {
    if (directSelection && directSelection.title) {
      setDirectBookingItem(directSelection.title);
      setSelectedFormats([directSelection.title]);
      setStep(3);
    }
  }, [directSelection]);

  const getRecommendedFormats = () => {
    if (selectedCategories.length === 0 || selectedCategories.length === allCategories.length) {
      return allFormats;
    }
    const matchedIds = new Set<string>();
    selectedCategories.forEach((catId) => {
      const found = allCategories.find((c) => c.id === catId);
      if (found) {
        found.matchedFormats.forEach((fId) => matchedIds.add(fId));
      }
    });

    if (matchedIds.size === 0) return allFormats;
    return allFormats.filter((f) => matchedIds.has(f.id));
  };

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleFormat = (title: string) => {
    setSelectedFormats((prev) =>
      prev.includes(title)
        ? (prev.length > 1 ? prev.filter((item) => item !== title) : prev)
        : [...prev, title]
    );
  };

  const handleResetToStep1 = () => {
    setDirectBookingItem(null);
    if (onResetDirectSelection) onResetDirectSelection();
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#C98E56', '#142017', '#FAF7F2'],
      });
    } catch (_) {}
  };

  const recommendedFormats = getRecommendedFormats();

  return (
    <section id="anfrage" className="py-20 md:py-28 bg-pilates-dark text-pilates-sand relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-pilates-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-[500px] h-[500px] bg-pilates-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2.5 bg-pilates-gold/20 text-pilates-gold px-4 py-2 rounded-full text-sm font-extrabold uppercase tracking-wider mb-4 border border-pilates-gold/30">
            <Sparkles className="w-4 h-4" />
            <span>Einfach & Direkt anfragen</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Dein Platz bei Sarah Iken
          </h2>
          <p className="text-pilates-sand/85 text-base sm:text-xl leading-relaxed">
            In wenigen Klicks unverbindlich anfragen – oder klicke oben bei einem Angebot direkt auf „Platz reservieren“.
          </p>
        </div>

        {/* SUCCESS */}
        {isSubmitted ? (
          <div className="bg-pilates-card rounded-3xl p-10 sm:p-16 border border-pilates-gold/40 shadow-2xl text-center max-w-2xl mx-auto animate-fadeIn">
            <div className="w-20 h-20 bg-pilates-gold/20 text-pilates-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Anfrage erfolgreich versendet!
            </h3>
            <p className="text-pilates-sand/85 text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-8">
              Vielen Dank, {name || 'lieber Gast'}! Sarah Iken hat deine Anfrage erhalten und meldet sich innerhalb von 24 Stunden persönlich bei dir.
            </p>

            <div className="bg-pilates-darker p-6 rounded-2xl border border-white/10 text-left mb-8 space-y-2.5 text-sm">
              <div className="text-pilates-gold font-bold uppercase text-xs tracking-wider mb-1">
                Zusammenfassung deiner Auswahl:
              </div>
              <div className="text-pilates-sand">
                <strong>Gewähltes Angebot:</strong> {selectedFormats.join(', ')}
              </div>
              {selectedCategories.length > 0 && (
                <div className="text-pilates-sand">
                  <strong>Gewählte Schwerpunkte:</strong> {selectedCategories.map(id => allCategories.find(c => c.id === id)?.title).join(', ')}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:01724456525"
                className="inline-flex items-center gap-2.5 text-sm sm:text-base font-extrabold text-pilates-gold bg-white/5 hover:bg-white/10 px-6 py-3.5 rounded-full border border-pilates-gold/30 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Direkt anrufen: 0172 4456525</span>
              </a>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setDirectBookingItem(null);
                }}
                className="text-sm text-pilates-sand/70 hover:text-white underline cursor-pointer"
              >
                Neue Anfrage starten
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-pilates-card rounded-3xl p-6 sm:p-12 border border-pilates-gold/30 shadow-2xl">
            
            {/* Direct Booking Pill */}
            {directBookingItem && (
              <div className="bg-pilates-dark border border-pilates-gold/50 p-5 rounded-2xl mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-pilates-gold/20 text-pilates-gold shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-extrabold tracking-wider text-pilates-gold">
                      Direkt-Auswahl aktiv (Express-Anfrage):
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white">
                      {directBookingItem}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleResetToStep1}
                  className="inline-flex items-center gap-1.5 text-sm text-pilates-sand/75 hover:text-white underline cursor-pointer shrink-0"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Anderes Angebot wählen</span>
                </button>
              </div>
            )}

            {/* Stepper Progress */}
            {!directBookingItem && (
              <div className="flex items-center justify-between mb-10 pb-5 border-b border-white/10 text-sm sm:text-base font-bold">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`flex items-center gap-2.5 transition-colors cursor-pointer ${
                    step === 1 ? 'text-pilates-gold' : 'text-pilates-sand/60'
                  }`}
                >
                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-extrabold">1</span>
                  <span>1. Dein Vorhaben</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className={`flex items-center gap-2.5 transition-colors cursor-pointer ${
                    step === 2 ? 'text-pilates-gold' : 'text-pilates-sand/60'
                  }`}
                >
                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-extrabold">2</span>
                  <span>2. Angebote</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (selectedFormats.length > 0) setStep(3);
                  }}
                  className={`flex items-center gap-2.5 transition-colors cursor-pointer ${
                    step === 3 ? 'text-pilates-gold' : 'text-pilates-sand/60'
                  }`}
                >
                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-extrabold">3</span>
                  <span>3. Kontakt</span>
                </button>
              </div>
            )}

            {/* STEP 1 */}
            {step === 1 && !directBookingItem && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-3xl font-extrabold text-white mb-2">
                    Worum geht es bei dir?
                  </h3>
                  <p className="text-sm sm:text-base text-pilates-sand/75">
                    Wähle gerne dein persönliches Ziel aus (Mehrfachauswahl möglich). 
                    Wir schlagen dir automatisch alle optimal passenden Angebote vor.
                  </p>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {topCategories.map((item) => {
                    const isChecked = selectedCategories.includes(item.id);
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => toggleCategory(item.id)}
                        className={`p-5 rounded-2xl border text-left transition-all duration-200 flex items-start justify-between gap-4 cursor-pointer ${
                          isChecked
                            ? 'bg-pilates-gold/25 border-pilates-gold text-white shadow-sm'
                            : 'bg-pilates-darker/60 border-white/15 text-pilates-sand/80 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <div className="flex items-start gap-3.5">
                          <span className="text-2xl mt-0.5">{item.icon}</span>
                          <div>
                            <span className="font-bold text-sm sm:text-base text-white block mb-1">{item.title}</span>
                            <span className="text-xs sm:text-sm text-pilates-sand/70 block leading-snug">{item.subtitle}</span>
                          </div>
                        </div>
                        <span className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border mt-0.5 ${
                          isChecked ? 'bg-pilates-gold border-pilates-gold text-pilates-dark' : 'border-white/30'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* 5th Category: Reisen */}
                {(() => {
                  const isChecked = selectedCategories.includes(reisenCategory.id);
                  return (
                    <button
                      type="button"
                      onClick={() => toggleCategory(reisenCategory.id)}
                      className={`w-full p-5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer ${
                        isChecked
                          ? 'bg-pilates-gold/25 border-pilates-gold text-white shadow-gold-glow'
                          : 'bg-pilates-darker/80 border-pilates-gold/35 text-pilates-sand/90 hover:border-pilates-gold/70 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-pilates-gold/20 text-pilates-gold flex items-center justify-center shrink-0 text-2xl">
                          {reisenCategory.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2.5">
                            <span className="font-bold text-sm sm:text-base text-white">{reisenCategory.title}</span>
                            <span className="bg-pilates-gold/20 text-pilates-gold text-xs uppercase font-extrabold px-2.5 py-0.5 rounded-full border border-pilates-gold/30">
                              Baltrum • Pitztal • Fasten
                            </span>
                          </div>
                          <span className="text-xs sm:text-sm text-pilates-sand/75 block leading-snug mt-1">
                            {reisenCategory.subtitle}
                          </span>
                        </div>
                      </div>

                      <span className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-pilates-gold border-pilates-gold text-pilates-dark' : 'border-white/30'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </span>
                    </button>
                  );
                })()}

                {/* Step 1 Actions */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategories([]);
                      setStep(2);
                    }}
                    className="text-sm text-pilates-sand/75 hover:text-white underline cursor-pointer"
                  >
                    Kein bestimmtes Anliegen – Alle Angebote anzeigen →
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto bg-pilates-gold hover:bg-pilates-goldLight text-pilates-dark px-9 py-4 rounded-full text-sm sm:text-base font-extrabold transition-all shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>
                      {selectedCategories.length > 0 ? `${selectedCategories.length} Bereich(e) gewählt – Weiter` : 'Weiter zur Angebotsauswahl'}
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && !directBookingItem && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-3xl font-extrabold text-white">
                      Passende Angebote für dich
                    </h3>
                    <span className="text-sm text-pilates-gold font-extrabold">
                      {selectedFormats.length} gewählt
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-pilates-sand/75">
                    {selectedCategories.length > 0
                      ? 'Basierend auf deinen Vorlieben empfehlen wir folgende Angebote (Mehrfachauswahl möglich):'
                      : 'Wähle dein gewünschtes Angebot aus:'}
                  </p>
                </div>

                <div className="space-y-3.5 max-h-[460px] overflow-y-auto pr-2">
                  {recommendedFormats.map((f) => {
                    const isChecked = selectedFormats.includes(f.title);
                    return (
                      <button
                        type="button"
                        key={f.id}
                        onClick={() => toggleFormat(f.title)}
                        className={`w-full p-5 rounded-2xl border text-left transition-all duration-200 flex items-start justify-between gap-4 cursor-pointer ${
                          isChecked
                            ? 'bg-pilates-gold/25 border-pilates-gold text-white shadow-sm'
                            : 'bg-pilates-darker/60 border-white/15 text-pilates-sand/80 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2.5 mb-1.5">
                            <span className="font-bold text-sm sm:text-base text-white">{f.title}</span>
                            <span className="bg-pilates-gold/20 text-pilates-gold border border-pilates-gold/30 text-xs uppercase font-extrabold px-2.5 py-0.5 rounded-full">
                              {f.badge}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-pilates-sand/75">{f.desc}</p>
                        </div>

                        <span className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border mt-0.5 ${
                          isChecked ? 'bg-pilates-gold border-pilates-gold text-pilates-dark' : 'border-white/30'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm font-semibold text-pilates-sand/75 hover:text-white cursor-pointer"
                  >
                    ← Zurück zur Bereichsauswahl
                  </button>

                  <button
                    type="button"
                    disabled={selectedFormats.length === 0}
                    onClick={() => setStep(3)}
                    className="bg-pilates-gold hover:bg-pilates-goldLight disabled:opacity-40 text-pilates-dark px-9 py-4 rounded-full text-sm sm:text-base font-extrabold transition-all shadow-gold-glow flex items-center gap-2.5 cursor-pointer"
                  >
                    <span>Weiter zu den Kontaktdaten ({selectedFormats.length} gewählt)</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <HeartHandshake className="w-6 h-6 text-pilates-gold" />
                    <h3 className="font-serif text-3xl font-extrabold text-white">Deine Kontaktdaten</h3>
                  </div>
                  <p className="text-sm sm:text-base text-pilates-sand/75">
                    Sarah meldet sich unverbindlich bei dir, um freie Plätze und Termine persönlich abzustimmen.
                  </p>
                </div>

                {/* Summary Pill */}
                {selectedFormats.length > 0 && !directBookingItem && (
                  <div className="bg-pilates-darker p-4 rounded-xl border border-white/15 text-sm flex items-center justify-between">
                    <span className="text-pilates-sand/85">
                      <strong>Ausgewählt:</strong> {selectedFormats.join(', ')}
                    </span>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-pilates-gold hover:underline text-xs font-bold shrink-0 ml-3 cursor-pointer"
                    >
                      Ändern
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-pilates-sand/90 font-bold block mb-1.5">
                      Dein vollständiger Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="z. B. Sabine Müller"
                      className="w-full bg-pilates-darker border border-white/20 rounded-xl px-5 py-4 text-base text-white placeholder-white/30 focus:outline-none focus:border-pilates-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-pilates-sand/90 font-bold block mb-1.5">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sabine@beispiel.de"
                      className="w-full bg-pilates-darker border border-white/20 rounded-xl px-5 py-4 text-base text-white placeholder-white/30 focus:outline-none focus:border-pilates-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-pilates-sand/90 font-bold block mb-1.5">
                    Telefonnummer (für Rückfragen)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0170 1234567"
                    className="w-full bg-pilates-darker border border-white/20 rounded-xl px-5 py-4 text-base text-white placeholder-white/30 focus:outline-none focus:border-pilates-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm text-pilates-sand/90 font-bold block mb-1.5">
                    Deine Notiz oder Wunschtermin (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Gibt es bestimmte Beschwerden, Vorerfahrungen oder Fragen?"
                    className="w-full bg-pilates-darker border border-white/20 rounded-xl px-5 py-3 text-base text-white placeholder-white/30 focus:outline-none focus:border-pilates-gold transition-colors resize-none"
                  />
                </div>

                {/* Bottom Action */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {!directBookingItem ? (
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-sm font-semibold text-pilates-sand/75 hover:text-white cursor-pointer"
                    >
                      ← Zurück zur Angebotsauswahl
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResetToStep1}
                      className="text-sm font-semibold text-pilates-sand/75 hover:text-white underline cursor-pointer"
                    >
                      ← Gesamte Übersicht öffnen
                    </button>
                  )}

                  <button
                    type="submit"
                    className="w-full sm:w-auto py-4.5 px-11 rounded-full bg-pilates-gold hover:bg-pilates-goldLight text-pilates-dark font-extrabold text-base tracking-wide transition-all shadow-gold-glow flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Unverbindliche Anfrage absenden</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-pilates-sand/65 text-center pt-2">
                  <ShieldCheck className="w-4 h-4 text-pilates-gold shrink-0" />
                  <span>100% unverbindlich • Keine Weitergabe deiner Daten</span>
                </div>
              </form>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
