import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
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
        {/* 6. Reguläre Pilates-Kurse (Hatten, Oldenburg, Online) */}
        <CourseExplorer
          onOpenBooking={handleDirectBooking}
          onOpenZppModal={() => setIsZppModalOpen(true)}
        />

        {/* 7. 1:1 Personal & Reformer Training (Erstgespräch / Mobiles Training) */}
        <PersonalTraining onOpenBooking={handleDirectBooking} />

        {/* 8. Workshops & Fortbildungen */}
        <Workshops onOpenBooking={handleDirectBooking} />

        {/* 9. Gesundheitsreisen & Retreats */}
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
