import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onBookCall: () => void;
}

export default function Footer({ onBookCall }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
            <p className="text-gray-400 mb-6">
              Start today with a 30-minute intro call to see how we can drive growth for your home services business — risk-free.
            </p>
            <button onClick={onBookCall} className="btn btn-primary">
              Book intro call <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <p className="mt-4 text-sm text-gray-400">No credit card required</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold mb-4">Funnel Ventures</div>
            <div className="text-gray-400 text-sm">
              <p>© 2024 Funnel Ventures. All rights reserved.</p>
              <div className="mt-2">
                <a href="#" className="hover:text-white">Terms</a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-white">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}