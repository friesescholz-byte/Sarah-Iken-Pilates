import React from 'react';
import { ShieldCheck, Award, GraduationCap, Clock } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'ZPP-Zertifiziert',
      desc: '§ 20 SGB V Krankenkassen-Erstattung',
    },
    {
      icon: Award,
      title: 'DPV Anerkannt',
      desc: 'Offizielle Fortbildungspunkte',
    },
    {
      icon: GraduationCap,
      title: 'Examinierte Pädagogin',
      desc: '1. & 2. Staatsexamen Sport',
    },
    {
      icon: Clock,
      title: 'Über 30 Jahre Praxis',
      desc: 'Fundierte Faszien- & Bewegungstherapie',
    },
  ];

  return (
    <section className="bg-pilates-dark text-pilates-sand py-10 border-y border-pilates-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3.5 group">
              <div className="p-3 rounded-2xl bg-pilates-card border border-pilates-gold/30 text-pilates-gold transition-all duration-300 group-hover:scale-110 group-hover:border-pilates-gold">
                <badge.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white tracking-wide">{badge.title}</h4>
                <p className="text-xs text-pilates-sand/70 mt-0.5">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
