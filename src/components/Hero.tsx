import React from 'react';
import { ArrowRight } from 'lucide-react';
import CalendlyButton from './CalendlyButton';

interface HeroProps {
  onBookCall?: () => void;
}

export default function Hero({ onBookCall }: HeroProps) {
  return (
    <div className="min-h-[70vh] flex items-center pt-16 pb-12 bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-4 inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-600">
            <span className="text-sm font-medium">Average 40% increase in lead conversion rates</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-4 leading-tight">
            AI-Powered Lead Generation &
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text"> Conversion</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Get qualified leads and automated follow-ups with no upfront cost.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <CalendlyButton className="btn btn-primary w-full sm:w-auto">
              Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </CalendlyButton>
            <p className="text-sm text-gray-500">No credit card required • Start converting leads in 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}