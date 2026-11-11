import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ExternalRedirectModal } from './components/ExternalRedirectModal';
import { HomePage } from './pages/HomePage';
import { AssistantPage } from './pages/AssistantPage';
import { ServicesPage } from './pages/ServicesPage';
import { ChecklistPage } from './pages/ChecklistPage';
import { GuidePage } from './pages/GuidePage';
import { TrackerPage } from './pages/TrackerPage';

const AppContent: React.FC = () => {
  const { currentPage } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'assistant':
        return <AssistantPage />;
      case 'services':
        return <ServicesPage />;
      case 'checklist':
        return <ChecklistPage />;
      case 'guide':
        return <GuidePage />;
      case 'tracker':
        return <TrackerPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#183153] antialiased selection:bg-[#D98B36]/20 selection:text-[#183153] overflow-x-hidden w-full max-w-full">
      <Navbar />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {renderCurrentPage()}
      </main>
      <Footer />
      <ExternalRedirectModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
