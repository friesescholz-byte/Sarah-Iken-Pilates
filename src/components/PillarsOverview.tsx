import React from 'react';
import { Users, User, Calendar, Compass, ArrowRight } from 'lucide-react';

interface PillarsOverviewProps {
  onSelectPillar: (pillar: string) => void;
}

export const PillarsOverview: React.FC<PillarsOverviewProps> = ({ onSelectPillar }) => {
  const pillars = [
    {
      id: 'kurse',
      icon: Users,
      title: 'Pilates-Kurse',
      locations: 'Hatten • Oldenburg • Online',
      highlight: 'Bis zu 100% Krankenkassen-Zuschuss',
      href: '#kurse',
    },
    {
      id: 'personal',
      icon: User,
      title: '1:1 Personal Training',
      locations: 'Studio-Reformer & Mobiles Pilates',
      highlight: 'Individuelle Schmerz- & Haltungstherapie',
      href: '#personal',
    },
    {
      id: 'workshops',
      icon: Calendar,
      title: 'Workshops & Fortbildung',
      locations: 'Themen-Events & DPV-Punkte',
      highlight: 'Für Teilnehmer & Pilates-Lehrende',
      href: '#workshops',
    },
    {
      id: 'retreats',
      icon: Compass,
      title: 'Retreats & Reisen',
      locations: 'Baltrum • Pitztal • Fasten',
      highlight: '5 Tage bewusste Auszeit in der Natur',
      href: '#retreats',
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-pilates-sand border-b border-pilates-sandDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Clean Minimalist Cards directly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((p) => (
            <a
              key={p.id}
              href={p.href}
              onClick={() => onSelectPillar(p.id)}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-pilates-sandDark hover:border-pilates-gold transition-all duration-300 shadow-sm hover:shadow-luxury hover:-translate-y-0.5 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-pilates-sand flex items-center justify-center text-pilates-dark group-hover:bg-pilates-dark group-hover:text-pilates-gold transition-colors shadow-sm">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-pilates-muted group-hover:text-pilates-gold group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="font-serif text-lg font-bold text-pilates-dark group-hover:text-pilates-gold transition-colors mb-1">
                  {p.title}
                </h3>
                <div className="text-xs text-pilates-goldDark font-semibold mb-2">
                  {p.locations}
                </div>
              </div>

              <div className="pt-3 border-t border-pilates-sandDark/60 text-[11px] text-pilates-muted font-medium">
                {p.highlight}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
