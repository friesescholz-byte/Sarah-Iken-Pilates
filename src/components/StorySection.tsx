import React from 'react';
import { Heart, Check } from 'lucide-react';
import { ASSETS } from '../constants/assets';

export const StorySection: React.FC = () => {
  return (
    <section id="ueber-mich" className="py-20 md:py-28 bg-pilates-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Highlights */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury border-4 border-white aspect-[4/5] bg-pilates-dark">
              <img
                src={ASSETS.aboutPortrait}
                alt="Sarah Iken Vita & Geschichte"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pilates-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-pilates-gold block mb-1">
                  Advokat deines inneren Arztes
                </span>
                <p className="font-serif text-lg italic text-pilates-sand">
                  „Wer sich selbst finden will, darf andere nicht nach dem Weg fragen.“
                </p>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-pilates-sandDark max-w-[210px] hidden sm:block">
              <div className="font-serif text-3xl font-bold text-pilates-dark leading-none mb-1">30+ Jahre</div>
              <p className="text-xs text-pilates-muted font-medium">Praxiserfahrung in Sport, Therapie & Pädagogik</p>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-pilates-gold/15 text-pilates-goldDark px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Heart className="w-3.5 h-3.5" />
              <span>Die Geschichte hinter SalutoSI</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-pilates-dark mb-6 leading-tight">
              „Als ich aufhörte, gegen meinen Körper zu kämpfen...“
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-pilates-dark/85 leading-relaxed mb-8">
              <p>
                Themen rund um Gesundheit sind seit über drei Jahrzehnten meine Passion. 
                Vor 30 Jahren studierte ich <strong>Humanmedizin, Sport- und Ernährungswissenschaften, Pädagogik</strong> und 
                psychologische Beratung. Nach vielen Jahren als Rektorin und Regionalbeauftragte für Prävention und Gesundheitsförderung 
                führte mich mein eigener Lebensweg – einschließlich der Bewältigung einer Krebserkrankung – zu einer tiefen Erkenntnis:
              </p>
              
              <blockquote className="border-l-4 border-pilates-gold pl-4 py-1 italic font-medium text-pilates-dark bg-pilates-sandLight rounded-r-xl">
                „95% deiner Gesundheit liegen in deiner eigenen Eigenverantwortung. Krankheiten fliegen einem nicht einfach über Nacht zu – 
                und dein Körper hat keinen Ersatzteil-Plan B.“
              </blockquote>

              <p>
                Regelmäßige Fortbildungen an der <strong>Charité in Berlin</strong> (funktionelle Anatomie) und tiefe Einblicke in die 
                Faszienforschung (Plastinationswerkstatt Guben) prägen meinen Unterricht. Ob Mattentraining, Reformer, Neuroathletik 
                oder achtsame Entspannung: Ich begleite dich auf Augenhöhe, mit Verstand und mit ganzem Herzen.
              </p>
            </div>

            {/* Competence Matrix Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-pilates-sandDark text-xs font-semibold text-pilates-dark">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-pilates-gold shrink-0" />
                <span>1. & 2. Staatsexamen Sportpädagogik</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-pilates-gold shrink-0" />
                <span>DPV & ZPP Zertifizierte Dozentin</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-pilates-gold shrink-0" />
                <span>Dozentin Personal Trainer Akademie</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-pilates-gold shrink-0" />
                <span>Ehem. Marathon- & Triathletin (B-Lizenz)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
