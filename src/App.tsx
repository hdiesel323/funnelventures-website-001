import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LeadGeneration from './components/LeadGeneration';
import Industries from './components/Industries';
import AiManagement from './components/AiManagement';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AiChat from './components/AiChat';

const GradientSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative bg-gradient-to-b from-transparent via-blue-50/30 to-transparent ${className}`}>
    <div className="absolute inset-0 bg-white/80"></div>
    <div className="relative">{children}</div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <GradientSection className="pt-16">
        <Hero />
      </GradientSection>
      <GradientSection>
        <Features />
      </GradientSection>
      <GradientSection>
        <LeadGeneration />
      </GradientSection>
      <GradientSection>
        <Industries />
      </GradientSection>
      <GradientSection>
        <AiManagement />
      </GradientSection>
      <GradientSection>
        <Comparison />
      </GradientSection>
      <GradientSection>
        <Testimonials />
      </GradientSection>
      <GradientSection>
        <FAQ />
      </GradientSection>
      <Footer />
      <AiChat />
    </div>
  );
}