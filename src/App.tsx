import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { PillarsOverview } from './components/PillarsOverview';
import { CourseExplorer } from './components/CourseExplorer';
import { PersonalTraining } from './components/PersonalTraining';
import { Workshops } from './components/Workshops';
import { Retreats } from './components/Retreats';
import { AnfrageFunnel } from './components/AnfrageFunnel';
import { Footer } from './components/Footer';
import { ZppCalculatorModal } from './components/ZppCalculatorModal';
import { LegalModal } from './components/LegalModal';

export const App: React.FC = () => {
  const [isZppModalOpen, setIsZppModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'impressum' | 'datenschutz' | null>(null);
  
  // Direct booking state
  const [directBooking, setDirectBooking] = useState<{ title: string; category?: string } | null>(null);

  const handleDirectBooking = (title: string, category?: string) => {
    setDirectBooking({ title, category });
    const element = document.getElementById('anfrage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-pilates-sand">
      {/* 1. Top Notification Bar */}
      <TopBar onOpenZppModal={() => setIsZppModalOpen(true)} />

      {/* 2. Glassmorphism Sticky Header */}
      <Header
        onOpenBookingModal={() => handleDirectBooking('Allgemeine Kurs- & Platzanfrage', 'kurse')}
        onOpenZppModal={() => setIsZppModalOpen(true)}
      />

      <main className="flex-1">
        {/* 4. Die 4 Säulen auf einen Blick (Orientierungs-Leiste) */}
        <PillarsOverview onSelectPillar={(pillarId) => {
          const el = document.getElementById(pillarId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* 6. Säule 1: Reguläre Pilates-Kurse für Jeden (Hatten, Oldenburg, Online) */}
        <CourseExplorer
          onOpenBooking={handleDirectBooking}
          onOpenZppModal={() => setIsZppModalOpen(true)}
        />

        {/* 7. Säule 2: 1:1 Personal & Reformer Training (Erstgespräch / Mobiles Training) */}
        <PersonalTraining onOpenBooking={handleDirectBooking} />

        {/* 8. Säule 3: Workshops & Fortbildungen (Getrennt: Für Teilnehmer vs Für Trainer) */}
        <Workshops onOpenBooking={handleDirectBooking} />

        {/* 9. Säule 4: Sehnsuchts-Retreats & Reisen */}
        <Retreats onOpenBooking={handleDirectBooking} />

        {/* 10. Schickes Flow Anfrage-Formular */}
        <AnfrageFunnel
          directSelection={directBooking}
          onResetDirectSelection={() => setDirectBooking(null)}
        />
      </main>

      {/* 11. Local SEO & Trust Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenZppModal={() => setIsZppModalOpen(true)}
      />

      {/* Modals */}
      <ZppCalculatorModal
        isOpen={isZppModalOpen}
        onClose={() => setIsZppModalOpen(false)}
        onSelectCourse={(cName) => handleDirectBooking(cName, 'kurse')}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
};

export default App;
