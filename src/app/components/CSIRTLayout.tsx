import React from 'react';
import { CSIRTHeader } from './CSIRTHeader';
import { CSIRTHero } from './CSIRTHero';
import { CSIRTAbout } from './CSIRTAbout';
import { CSIRTCalendar } from './CSIRTCalendar';
import EventosYRepresentantes from './EventosYRepresentantes';

export const CSIRTLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <CSIRTHeader />
      <CSIRTHero />
      <CSIRTAbout />
      <CSIRTCalendar />
      <EventosYRepresentantes />
      <footer className="bg-gray-800 text-white text-center py-6">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} CSIRT. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default CSIRTLayout;