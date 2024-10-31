import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Features from './components/Features';
import LeadGeneration from './components/LeadGeneration';
import AiManagement from './components/AiManagement';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';
import AiChat from './components/AiChat';

export default function App() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBookCall={() => setIsCalendlyOpen(true)} />
      <Hero onBookCall={() => setIsCalendlyOpen(true)} />
      <Industries />
      <Features />
      <LeadGeneration />
      <AiManagement />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Footer onBookCall={() => setIsCalendlyOpen(true)} />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
      <AiChat />
    </div>
  );
}