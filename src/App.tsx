import React from 'react';
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
import AiChat from './components/AiChat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Industries />
      <Features />
      <LeadGeneration />
      <AiManagement />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Footer />
      <AiChat />
    </div>
  );
}