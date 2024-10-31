import React from 'react';
import { ArrowRight } from 'lucide-react';
import CalendlyButton from './CalendlyButton';

interface NavbarProps {
  onBookCall?: () => void;
}

export default function Navbar({ onBookCall }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
            <span className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">Funnel</span>
              <span className="text-gray-900">Ventures</span>
            </span>
          </a>
          <div className="flex items-center gap-6">
            <CalendlyButton>
              Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </CalendlyButton>
          </div>
        </div>
      </div>
    </nav>
  );
}