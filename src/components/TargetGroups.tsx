import React from 'react';
import { Activity, Zap, Compass, Sparkles, ArrowRight, UserCheck } from 'lucide-react';
import { ASSETS } from '../constants/assets';

interface TargetGroupsProps {
  onSelectTarget: (target: string) => void;
}

export const TargetGroups: React.FC<TargetGroupsProps> = ({ onSelectTarget }) => {
  const groups = [
    {
      id: 'schmerz',
      icon: Activity,
      tag: 'Prävention & Schmerztherapie',
      title: 'Schmerz- & Verspannungsgeplagte',
      subtitle: 'Rücken, Nacken, Bandscheiben & Haltung',
      problem: '„Du wachst morgens schon mit einem verspannten Nacken auf und der untere Rücken zwickt nach jedem langen Tag? Du spürst, dass dein Körper dir Warnsignale sendet – hast aber keine Lust auf anonyme Fitnessstudios, in denen niemand auf deine Haltung achtet? Dein Körper hat keinen Ersatz. Lass uns gemeinsam dafür sorgen, dass du dich wieder leicht, kraftvoll und schmerzfrei bewegst – bis zu 100 % bezuschusst von deiner Krankenkasse.“',
      solution: 'Präventionskurse § 20 SGB V in Hatten & Oldenburg',
      image: ASSETS.precisionExercise,
      actionText: 'Zu den Präventionskursen',
      anchor: '#kurse',
    },
    {
      id: 'sport',
      icon: Zap,
      tag: 'Performance & 1:1 Coaching',
      title: 'Sportler, Läufer & Ambitionierte',
      subtitle: 'Core-Stabilität, Reformer & Triathlon',
      problem: '„Du trainierst diszipliniert, doch irgendwann meldet sich immer dieselbe Schwachstelle – das Knie, die Hüfte oder der untere Rücken? Du weißt: Rohe Kraft nützt nichts, wenn die tiefe Stützmuskulatur und neuronale Ansteuerung nicht stimmen. Im maßgeschneiderten 1:1 Training an Reformer, Cadillac & Chair decken wir deine Dysbalancen auf – für maximale Effizienz, verletzungsfreie Höchstleistung und ein völlig neues Laufgefühl.“',
      solution: '1:1 Personal Training & Reformer Sessions',
      image: ASSETS.running,
      actionText: 'Zum 1:1 Personal Training',
      anchor: '#personal',
    },
    {
      id: 'retreat',
      icon: Compass,
      tag: 'Regeneration & Auszeit',
      title: 'Gestresste & Sinnsuchende',
      subtitle: 'Retreats auf Baltrum, Pitztal & Fasten',
      problem: '„Fühlst du dich oft wie im Dauer-Funktionsmodus, während dein Nervensystem auf Hochtouren läuft? Dein Kopf ist voll, dein Atem flach und du funktionierst nur noch für andere? Gönn dir den Raum zum Durchatmen. Auf unseren exklusiven Retreats am Meer (Baltrum), in den Bergen (Pitztal) oder beim Fasten verbinden wir tiefenwirksames Pilates mit purer Natur und Entschleunigung – damit du wieder bei dir selbst ankommst.“',
      solution: '5-Tage Gesundheitsreisen in Kleingruppen (max. 8 TN)',
      image: ASSETS.baltrumRetreat,
      actionText: 'Zu den Retreats & Reisen',
      anchor: '#retreats',
    },
    {
      id: 'trainer',
      icon: Sparkles,
      tag: 'Weiterbildung & Mentoring',
      title: 'Pilateslehrer & Therapeuten',
      subtitle: 'Didaktik, Biomechanik & Hands-on Cues',
      problem: '„Du hast deine Ausbildung abgeschlossen, stehst vor deiner Gruppe und merkst: Das reine Aneinanderreihen von Übungen führt bei deinen Klienten nicht zum Ziel? Du suchst nach didaktischer Klarheit, fundierter Biomechanik und dem Feingefühl für gezielte Hands-on Korrekturen? Profitiere von 30 Jahren pädagogischer und therapeutischer Praxiserfahrung – anerkannt mit offiziellen DPV-Fortbildungspunkten.“',
      solution: 'DPV-Fachfortbildungen & Mentee-Begleitung',
      image: ASSETS.handsOn,
      actionText: 'Zu den Fortbildungen',
      anchor: '#workshops',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-pilates-sand relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-pilates-gold/15 text-pilates-goldDark px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Finde deinen persönlichen Einstieg</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-pilates-dark mb-4">
            Wo stehst du gerade mit deinem Körper?
          </h2>
          <p className="text-pilates-dark/75 text-base sm:text-lg">
            Jeder Mensch hat eine einzigartige Geschichte. Wähle deine aktuelle Situation und erfahre, 
            wie wir gemeinsam die beste Lösung für deine Gesundheit und Lebensqualität finden.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {groups.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-pilates-sandDark hover:border-pilates-gold/50 transition-all duration-300 shadow-luxury hover:shadow-luxury-hover flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-pilates-gold mb-1">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-pilates-dark group-hover:text-pilates-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-pilates-muted font-medium mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="p-3 bg-pilates-sand rounded-2xl text-pilates-dark group-hover:bg-pilates-dark group-hover:text-pilates-gold transition-all duration-300 shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Problem des Kunden Callout */}
                <div className="bg-pilates-sandLight border-l-4 border-pilates-gold p-4 sm:p-5 rounded-r-2xl mb-6">
                  <div className="text-[10px] uppercase font-extrabold tracking-wider text-pilates-gold mb-1.5 flex items-center gap-1.5">
                    <span>Problem des Kunden:</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-pilates-dark/90 italic leading-relaxed">
                    {item.problem}
                  </p>
                </div>
              </div>

              {/* Bottom Solution & CTA */}
              <div className="pt-4 border-t border-pilates-sandDark flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase font-bold text-pilates-muted block">Empfohlene Lösung:</span>
                  <span className="text-xs sm:text-sm font-semibold text-pilates-dark">{item.solution}</span>
                </div>
                <a
                  href={item.anchor}
                  onClick={() => onSelectTarget(item.id)}
                  className="inline-flex items-center justify-center gap-2 bg-pilates-dark hover:bg-pilates-darker text-pilates-sand px-5 py-2.5 rounded-full text-xs font-semibold transition-all group-hover:shadow-gold-glow shrink-0 cursor-pointer"
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-pilates-gold transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
