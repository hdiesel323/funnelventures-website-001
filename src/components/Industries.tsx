import React from 'react';
import { Building2, Home, Stethoscope, Briefcase, Wallet, HardHat } from 'lucide-react';

const industries = [
  {
    title: 'Financial Services',
    items: ['Insurance', 'Mortgage', 'Investment Advisory', 'Wealth Management'],
    icon: Wallet,
  },
  {
    title: 'Real Estate',
    items: ['Residential', 'Commercial', 'Property Management'],
    icon: Building2,
  },
  {
    title: 'Home Services',
    items: ['HVAC', 'Plumbing', 'Electrical', 'Roofing'],
    icon: Home,
  },
  {
    title: 'Construction',
    items: ['Renovation', 'Landscaping', 'Pest Control', 'Cleaning'],
    icon: HardHat,
  },
  {
    title: 'Healthcare',
    items: ['Medical', 'Dental', 'Chiropractic', 'Wellness'],
    icon: Stethoscope,
  },
  {
    title: 'Professional',
    items: ['Legal', 'Accounting', 'Consulting', 'Marketing'],
    icon: Briefcase,
  },
];

export default function Industries() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Industries We Serve</h2>
          <p className="text-xl text-gray-600">Specialized lead generation for your industry</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div key={industry.title} className="bg-gray-50 p-5 rounded-xl hover:bg-gray-100 transition-all duration-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-blue-100 rounded-lg">
                  <industry.icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{industry.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {industry.items.map((item) => (
                  <li key={item} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}