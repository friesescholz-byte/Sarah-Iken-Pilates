import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pilates-darker/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-pilates-sandDark relative">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-pilates-dark/60 hover:text-pilates-dark hover:bg-pilates-sand transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'impressum' ? (
          <div>
            <h3 className="font-serif text-2xl font-bold text-pilates-dark mb-4">Impressum</h3>
            <div className="text-xs sm:text-sm text-pilates-dark/80 space-y-4 leading-relaxed">
              <p><strong>Angaben gemäß § 5 DDG:</strong><br />
                Sarah Iken – SalutoSI<br />
                Astruper Str. 42<br />
                26209 Hatten / Sandkrug
              </p>

              <p><strong>Kontakt:</strong><br />
                Telefon: 0172 4456525<br />
                E-Mail: info@SarahIkenPilates.com
              </p>

              <p><strong>Steuerliche Angaben:</strong><br />
                Finanzamt Oldenburg<br />
                Steuernummer: 64/120/28440-2014<br />
                Es erfolgt kein Ausweis der Umsatzsteuer aufgrund der Anwendung der Kleinunternehmerregelung gem. § 19 UStG.
              </p>

              <p><strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong><br />
                Sarah Iken (Anschrift wie oben)
              </p>

              <p><strong>EU-Streitschlichtung:</strong><br />
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer" className="text-pilates-gold underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-serif text-2xl font-bold text-pilates-dark mb-4">Datenschutzerklärung</h3>
            <div className="text-xs sm:text-sm text-pilates-dark/80 space-y-4 leading-relaxed">
              <p><strong>1. Datenschutz auf einen Blick</strong><br />
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
              </p>
              <p><strong>2. Verantwortliche Stelle:</strong><br />
                Sarah Iken, Astruper Str. 42, 26209 Hatten / Sandkrug, E-Mail: info@SarahIkenPilates.com
              </p>
              <p><strong>3. Datenerfassung auf dieser Website:</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p><strong>4. Ihre Rechte:</strong><br />
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
