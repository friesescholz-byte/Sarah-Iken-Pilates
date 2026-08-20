import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: 'Nach zwei Bandscheibenvorfällen hatte ich ständige Angst vor Bewegung. Sarah hat mit ihrer anatomischen Genauigkeit und Ruhe dafür gesorgt, dass ich heute völlig schmerzfrei durch den Tag gehe. Ein echter Segen!',
      author: 'Martina K.',
      role: 'Teilnehmerin Präventionskurs Hatten',
      stars: 5,
    },
    {
      quote: 'Als ambitionierter Marathonläufer hatte ich chronische ISG-Blockaden. Das 1:1 Reformer-Training bei Sarah hat meine Core-Stabilität und Laufökonomie auf ein neues Level gehoben – verletzungsfrei durch die Saison!',
      author: 'Dr. Michael B.',
      role: '1:1 Personal Training Klient',
      stars: 5,
    },
    {
      quote: 'Das Mentee-Training bei Sarah war die beste Entscheidung nach meiner Pilates-Ausbildung. Endlich habe ich echte didaktische Sicherheit und weiß genau, wie ich taktil korrigiere, ohne Klienten zu überfordern.',
      author: 'Elena S.',
      role: 'Zertifizierte Pilates-Trainerin',
      stars: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-pilates-sandLight border-t border-pilates-sandDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-pilates-gold mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-pilates-gold" />
            ))}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pilates-dark mb-3">
            Was Klienten & Mentees berichten
          </h2>
          <p className="text-sm text-pilates-muted">
            Echte Erfahrungen aus über 30 Jahren Begleitung auf der Matte und an den Geräten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-pilates-sandDark shadow-luxury flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-pilates-gold/25 absolute top-6 right-6" />
              <div>
                <div className="flex items-center gap-1 text-pilates-gold mb-4">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-pilates-gold" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-pilates-dark/85 italic leading-relaxed mb-6">
                  „{r.quote}“
                </p>
              </div>
              <div className="pt-4 border-t border-pilates-sandDark">
                <div className="font-bold text-sm text-pilates-dark">{r.author}</div>
                <div className="text-xs text-pilates-muted">{r.role}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
