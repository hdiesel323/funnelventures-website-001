import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onBookCall: () => void;
}

export default function Navbar({ onBookCall }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">Funnel</span>
              <span className="text-gray-900">Ventures</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onBookCall} className="btn btn-primary">
              Book a Call <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}