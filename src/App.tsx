import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { PageTransition } from './components/PageTransition';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFA] text-[#101C2C]">
      <ScrollToTop />
      
      {/* Global Navigation */}
      <Navbar onOpenQuote={openQuoteModal} />

      {/* Main Page Routing */}
      <main className="flex-grow">
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage onOpenQuote={openQuoteModal} />} />
            <Route path="/services" element={<ServicesPage onOpenQuote={openQuoteModal} />} />
            <Route path="/about" element={<AboutPage onOpenQuote={openQuoteModal} />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route back to home */}
            <Route path="*" element={<HomePage onOpenQuote={openQuoteModal} />} />
          </Routes>
        </PageTransition>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick Quote / Lesson Inquiry Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
      />
    </div>
  );
};
