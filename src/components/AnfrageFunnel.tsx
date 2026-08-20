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
  // Step state: 1 = Problem / Ziel (5 Kategorien), 2 = Formate (filtered/all), 3 = Kontaktdaten
  const [step, setStep] = useState<number>(1);
  
  // Selected category IDs (multi-select)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Selected formats (multi-select)
  const [selectedFormats, setSelectedFormats] = useState<string[]>(['Präventionskurs .im STALL (Hatten)']);

  // Direct Selection Override Mode
  const [directBookingItem, setDirectBookingItem] = useState<string | null>(null);

  // Form inputs
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // 4 Top Categories (2x2 Grid)
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
      subtitle: 'Nervensystem beruhigen, Faszien dehnnen & Loslassen',
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

  // 5th Category: Elongated bottom bar for Journeys & Retreats
  const reisenCategory = {
    id: 'reisen',
    title: 'Gesundheitsreisen & Retreats (Auszeiten in der Natur)',
    subtitle: '5 Tage Meeresluft auf Baltrum, Fasten, Bergwandern im Pitztal & Hunte Bike Tour',
    icon: '🌊',
    matchedFormats: ['baltrum-meer', 'fasten', 'pitztal', 'baltrum-runner', 'hunte-bike'],
  };

  const allCategories = [...topCategories, reisenCategory];

  // Complete List of All Offerings
  const allFormats = [
    // 1. Kurse
    { id: 'stall', title: 'Präventionskurs .im STALL (Hatten)', pillar: 'Kurse vor Ort', badge: '§ 20 SGB V Kasse', desc: 'Freitags in Hatten/Sandkrug, Kleingruppe (max. 8 TN)' },
    { id: 'pausenraum', title: 'Präventionskurs .im PAUSENRAUM (Oldenburg)', pillar: 'Kurse vor Ort', badge: '§ 20 SGB V Kasse', desc: 'Sonntags & Montags in Etzhorn, 75qm moderner Raum' },
    { id: 'yinlates', title: 'Yin-lates & Faszienentspannung (Oldenburg)', pillar: 'Kurse vor Ort', badge: 'Deep Stretch', desc: 'Montags 20:15 Uhr, Tiefenentspannung & Atmung' },
    { id: 'online', title: 'Pre-Brunch Pilates Online', pillar: 'Kurse Online', badge: '§ 20 SGB V Kasse', desc: 'Sonntagmorgens 08:00 Uhr via Zoom & Mediathek' },
    // 1:1 Personal
    { id: 'personal', title: '1:1 Studio-Geräte Training (Reformer & Cadillac)', pillar: '1:1 Personal', badge: 'Kennenlerngespräch', desc: 'Individuelle Schmerztherapie, Neuroathletik & Sport' },
    { id: 'mobile', title: 'Mobiles Pilates vor Ort (Hausbesuch / Büro)', pillar: '1:1 Personal', badge: 'Hausbesuch', desc: '„Rollt die Matte aus: Ich komme!“ inkl. Equipment' },
    // Workshops
    { id: 'longevity-ws', title: 'Workshop: Longevity PILATES (27. Sep 2026)', pillar: 'Workshops', badge: 'Für Teilnehmer', desc: 'Gesund altern ab 40/50/60 – Schlüsselübungen' },
    { id: 'decomp-ws', title: 'Workshop: DECOMPRESSION Pilates (11. Okt 2026)', pillar: 'Workshops', badge: 'Für Teilnehmer', desc: 'Bandscheiben- & Gelenkentlastung' },
    { id: 'breath-ws', title: 'Workshop: Atem-Special Bremen (14. Nov 2026)', pillar: 'Workshops', badge: 'Für Teilnehmer', desc: '„Japst du noch oder atmest du schon?“' },
    { id: 'boundaries-ws', title: 'Coworkshop: „Grenzen“ mit Dr. Jimenez (18. Okt 2026)', pillar: 'Workshops', badge: 'Körper & Psyche', desc: 'Präsenz & Raum wahrnehmen lernen' },
    { id: 'balanceboard-ws', title: 'Workshop: Pilates auf dem BalanceBoard', pillar: 'Workshops', badge: 'Tiefenstabilität', desc: 'Sturzprophylaxe & Sprunggelenke' },
    { id: 'handson-ws', title: 'Fortbildung: HANDS ON / OFF (28. Nov 2026)', pillar: 'Fortbildung', badge: '5 DPV Punkte', desc: 'Taktiles Anleiten für Pilates-Lehrende' },
    { id: 'rollup-ws', title: 'Masterclass: The Roll Up (18. Okt 2026)', pillar: 'Fortbildung', badge: 'Didaktik & Cues', desc: 'Biomechanik & anatomisch korrektes Unterrichten' },
    { id: 'mentee', title: '1:1 Mentee-Begleitung für Trainer:innen', pillar: 'Fortbildung', badge: 'Mentoring', desc: 'Begleitung während/nach der Trainerausbildung' },
    { id: 'kleingeraete-ws', title: 'Workshop: Sinnvoller Einsatz von Kleingeräten', pillar: 'Fortbildung', badge: 'Praxis-Event', desc: 'Bänder, Bälle & Rollen gezielt einsetzen' },
    // Retreats & Reisen
    { id: 'baltrum-meer', title: '5 Tage PILATES & MEER SEIN (Baltrum, 29.09.–03.10.2026)', pillar: 'Retreats', badge: 'Warteliste', desc: 'Meeresrauschen, autofreie Inselruhe & Strandtraining' },
    { id: 'fasten', title: '5 Tage PILATES & FASTEN (12.–18.10.2026)', pillar: 'Retreats', badge: 'Warteliste', desc: 'Ganzheitliche Entschlackung & sanfte Faszienpflege' },
    { id: 'pitztal', title: '5 Tage PILATES & BERGWANDERN (Pitztal, 15.–19.06.2027)', pillar: 'Retreats', badge: 'Max. 8 Plätze', desc: 'Alpen-Panorama, Bergluft & gelenkschonendes Training' },
    { id: 'baltrum-runner', title: '3 Tage PILATES for RUNNER (Baltrum, 01.–04.05.2027)', pillar: 'Retreats', badge: 'Läufer Retreat', desc: 'Laufökonomie, Fußstatik & Strandregeneration' },
    { id: 'hunte-bike', title: '3 Tage PILATES & BIKE HUNTE TOUR (16.–18.04.2027)', pillar: 'Retreats', badge: 'Aktiv im Grünen', desc: 'Flussradeln entlang der Hunte & Outdoor-Pilates' },
  ];

  // Handle direct jump from external cards
  useEffect(() => {
    if (directSelection && directSelection.title) {
      setDirectBookingItem(directSelection.title);
      setSelectedFormats([directSelection.title]);
      setStep(3); // Jump straight to step 3 (Contact details)
    }
  }, [directSelection]);

  // Compute recommended formats based on selected categories
  const getRecommendedFormats = () => {
    if (selectedCategories.length === 0 || selectedCategories.length === allCategories.length) {
      return allFormats; // Show all
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
      {/* Background Glow */}
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-pilates-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-[500px] h-[500px] bg-pilates-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-pilates-gold/20 text-pilates-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-pilates-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Schick & Intuitiv anfragen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Dein Platz bei Sarah Iken
          </h2>
          <p className="text-pilates-sand/80 text-sm sm:text-base leading-relaxed">
            In wenigen Klicks unverbindlich anfragen – oder klicke oben bei einem Angebot direkt auf „Platz reservieren“.
          </p>
        </div>

        {/* SUCCESS STATE */}
        {isSubmitted ? (
          <div className="bg-pilates-card rounded-3xl p-8 sm:p-14 border border-pilates-gold/40 shadow-2xl text-center max-w-2xl mx-auto animate-fadeIn">
            <div className="w-20 h-20 bg-pilates-gold/20 text-pilates-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
              Anfrage erfolgreich versendet!
            </h3>
            <p className="text-pilates-sand/85 text-sm leading-relaxed max-w-lg mx-auto mb-8">
              Vielen Dank, {name || 'lieber Gast'}! Sarah Iken hat deine Anfrage erhalten und meldet sich innerhalb von 24 Stunden persönlich bei dir.
            </p>

            <div className="bg-pilates-darker p-5 rounded-2xl border border-white/10 text-left mb-8 space-y-2 text-xs">
              <div className="text-pilates-gold font-bold uppercase text-[10px] tracking-wider mb-1">
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
                className="inline-flex items-center gap-2 text-xs font-bold text-pilates-gold bg-white/5 hover:bg-white/10 px-5 py-3 rounded-full border border-pilates-gold/30 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Direkt anrufen: 0172 4456525</span>
              </a>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setDirectBookingItem(null);
                }}
                className="text-xs text-pilates-sand/60 hover:text-white underline cursor-pointer"
              >
                Neue Anfrage starten
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-pilates-card rounded-3xl p-6 sm:p-10 border border-pilates-gold/30 shadow-2xl">
            
            {/* Direct Booking Notification Banner (if jumped from a card) */}
            {directBookingItem && (
              <div className="bg-pilates-dark border border-pilates-gold/50 p-4 rounded-2xl mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-pilates-gold/20 text-pilates-gold shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-extrabold tracking-wider text-pilates-gold">
                      Direkt-Auswahl aktiv (Express-Anfrage):
                    </div>
                    <div className="text-sm font-bold text-white">
                      {directBookingItem}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleResetToStep1}
                  className="inline-flex items-center gap-1.5 text-xs text-pilates-sand/70 hover:text-white underline cursor-pointer shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Anderes Angebot wählen</span>
                </button>
              </div>
            )}

            {/* Stepper Progress Bar (Only visible if not in direct jump) */}
            {!directBookingItem && (
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`flex items-center gap-2 font-bold transition-colors cursor-pointer ${
                    step === 1 ? 'text-pilates-gold' : 'text-pilates-sand/60'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">1</span>
                  <span>1. Dein Vorhaben (Optional)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className={`flex items-center gap-2 font-bold transition-colors cursor-pointer ${
                    step === 2 ? 'text-pilates-gold' : 'text-pilates-sand/60'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">2</span>
                  <span>2. Passende Angebote</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (selectedFormats.length > 0) setStep(3);
                  }}
                  className={`flex items-center gap-2 font-bold transition-colors cursor-pointer ${
                    step === 3 ? 'text-pilates-gold' : 'text-pilates-sand/60'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">3</span>
                  <span>3. Kontaktdaten</span>
                </button>
              </div>
            )}

            {/* STEP 1: 2x2 GRID + ELONGATED REISEN BAR (OPTIONAL) */}
            {step === 1 && !directBookingItem && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Worum geht es bei dir?
                  </h3>
                  <p className="text-xs text-pilates-sand/70">
                    Wähle gerne dein persönliches Ziel aus (Mehrfachauswahl möglich). 
                    Wir schlagen dir automatisch alle optimal passenden Angebote vor.
                  </p>
                </div>

                {/* 2x2 Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {topCategories.map((item) => {
                    const isChecked = selectedCategories.includes(item.id);
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => toggleCategory(item.id)}
                        className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-start justify-between gap-3 cursor-pointer ${
                          isChecked
                            ? 'bg-pilates-gold/25 border-pilates-gold text-white shadow-sm'
                            : 'bg-pilates-darker/60 border-white/10 text-pilates-sand/80 hover:border-white/25 hover:text-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-xl mt-0.5">{item.icon}</span>
                          <div>
                            <span className="font-bold text-xs sm:text-sm text-white block mb-0.5">{item.title}</span>
                            <span className="text-[11px] text-pilates-sand/65 block leading-tight">{item.subtitle}</span>
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

                {/* 5th Category: Elongated Bottom Bar for Reisen */}
                {(() => {
                  const isChecked = selectedCategories.includes(reisenCategory.id);
                  return (
                    <button
                      type="button"
                      onClick={() => toggleCategory(reisenCategory.id)}
                      className={`w-full p-4.5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer ${
                        isChecked
                          ? 'bg-pilates-gold/25 border-pilates-gold text-white shadow-gold-glow'
                          : 'bg-pilates-darker/80 border-pilates-gold/30 text-pilates-sand/90 hover:border-pilates-gold/60 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-pilates-gold/20 text-pilates-gold flex items-center justify-center shrink-0 text-xl">
                          {reisenCategory.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs sm:text-sm text-white">{reisenCategory.title}</span>
                            <span className="bg-pilates-gold/20 text-pilates-gold text-[9px] uppercase font-extrabold px-2 py-0.5 rounded-full border border-pilates-gold/30">
                              Baltrum • Pitztal • Fasten
                            </span>
                          </div>
                          <span className="text-[11px] text-pilates-sand/70 block leading-tight mt-0.5">
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
                    className="text-xs text-pilates-sand/70 hover:text-white underline cursor-pointer"
                  >
                    Kein bestimmtes Anliegen – Alle Angebote anzeigen →
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto bg-pilates-gold hover:bg-pilates-goldLight text-pilates-dark px-8 py-3.5 rounded-full text-xs font-bold transition-all shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>
                      {selectedCategories.length > 0 ? `${selectedCategories.length} Bereich(e) gewählt – Weiter` : 'Weiter zur Angebotsauswahl'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: FORMAT RECOMMENDATIONS */}
            {step === 2 && !directBookingItem && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Passende Angebote für dich
                    </h3>
                    <span className="text-xs text-pilates-gold font-bold">
                      {selectedFormats.length} gewählt
                    </span>
                  </div>
                  <p className="text-xs text-pilates-sand/70">
                    {selectedCategories.length > 0
                      ? 'Basierend auf deinen Vorlieben empfehlen wir folgende Angebote (Mehrfachauswahl möglich):'
                      : 'Wähle dein gewünschtes Angebot aus:'}
                  </p>
                </div>

                <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                  {recommendedFormats.map((f) => {
                    const isChecked = selectedFormats.includes(f.title);
                    return (
                      <button
                        type="button"
                        key={f.id}
                        onClick={() => toggleFormat(f.title)}
                        className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-start justify-between gap-4 cursor-pointer ${
                          isChecked
                            ? 'bg-pilates-gold/25 border-pilates-gold text-white shadow-sm'
                            : 'bg-pilates-darker/60 border-white/10 text-pilates-sand/80 hover:border-white/25 hover:text-white'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-sm text-white">{f.title}</span>
                            <span className="bg-pilates-gold/20 text-pilates-gold border border-pilates-gold/30 text-[9px] uppercase font-extrabold px-2 py-0.5 rounded-full">
                              {f.badge}
                            </span>
                          </div>
                          <p className="text-xs text-pilates-sand/70">{f.desc}</p>
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
                    className="text-xs text-pilates-sand/70 hover:text-white cursor-pointer"
                  >
                    ← Zurück zur Bereichsauswahl
                  </button>

                  <button
                    type="button"
                    disabled={selectedFormats.length === 0}
                    onClick={() => setStep(3)}
                    className="bg-pilates-gold hover:bg-pilates-goldLight disabled:opacity-40 text-pilates-dark px-8 py-3.5 rounded-full text-xs font-bold transition-all shadow-gold-glow flex items-center gap-2 cursor-pointer"
                  >
                    <span>Weiter zu den Kontaktdaten ({selectedFormats.length} gewählt)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: CONTACT DETAILS & SUBMIT */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <HeartHandshake className="w-5 h-5 text-pilates-gold" />
                    <h3 className="font-serif text-2xl font-bold text-white">Deine Kontaktdaten</h3>
                  </div>
                  <p className="text-xs text-pilates-sand/70">
                    Sarah meldet sich unverbindlich bei dir, um freie Plätze und Termine persönlich abzustimmen.
                  </p>
                </div>

                {/* Summary Pill */}
                {selectedFormats.length > 0 && !directBookingItem && (
                  <div className="bg-pilates-darker p-3 rounded-xl border border-white/10 text-xs flex items-center justify-between">
                    <span className="text-pilates-sand/80">
                      <strong>Ausgewählt:</strong> {selectedFormats.join(', ')}
                    </span>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-pilates-gold hover:underline text-[11px] shrink-0 ml-2 cursor-pointer"
                    >
                      Ändern
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-pilates-sand/90 font-bold block mb-1">
                      Dein vollständiger Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="z. B. Sabine Müller"
                      className="w-full bg-pilates-darker border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-pilates-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-pilates-sand/90 font-bold block mb-1">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sabine@beispiel.de"
                      className="w-full bg-pilates-darker border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-pilates-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-pilates-sand/90 font-bold block mb-1">
                    Telefonnummer (für Rückfragen)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0170 1234567"
                    className="w-full bg-pilates-darker border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-pilates-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs text-pilates-sand/90 font-bold block mb-1">
                    Deine Nachricht oder Wunschtermin (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Gibt es bestimmte Beschwerden, Vorerfahrungen oder Fragen?"
                    className="w-full bg-pilates-darker border border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-pilates-gold transition-colors resize-none"
                  />
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {!directBookingItem ? (
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs text-pilates-sand/70 hover:text-white cursor-pointer"
                    >
                      ← Zurück zur Angebotsauswahl
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResetToStep1}
                      className="text-xs text-pilates-sand/70 hover:text-white underline cursor-pointer"
                    >
                      ← Gesamte Übersicht öffnen
                    </button>
                  )}

                  <button
                    type="submit"
                    className="w-full sm:w-auto py-4 px-10 rounded-full bg-pilates-gold hover:bg-pilates-goldLight text-pilates-dark font-bold text-sm tracking-wide transition-all shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Unverbindliche Anfrage absenden</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-pilates-sand/60 text-center">
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
