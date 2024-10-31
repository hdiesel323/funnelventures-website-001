import React from 'react';
import {
  Wrench, Thermometer, Bug, Home, Droplets, Shield, Paintbrush, Sun,
  LayoutGrid, ShieldCheck, Cloud, Store, Umbrella, Wallet, HardHat, Flower2,
  Building2, Stethoscope, Heart, Activity, ScrollText, Calculator, FileText,
  Briefcase, LineChart, MessageSquare
} from 'lucide-react';

const industries = [
  {
    category: 'Home Services',
    items: [
      { name: 'Plumbing', icon: Wrench },
      { name: 'HVAC', icon: Thermometer },
      { name: 'Roofing', icon: Home },
      { name: 'Gutters Install', icon: Droplets },
      { name: 'Gutter Protection', icon: Shield },
      { name: 'Kitchen & Bath Remodel', icon: Paintbrush },
      { name: 'Solar', icon: Sun },
      { name: 'Flooring', icon: LayoutGrid },
      { name: 'Home Warranty', icon: ShieldCheck },
      { name: 'Mold Remediation', icon: Cloud },
      { name: 'Siding', icon: Store },
      { name: 'Pest Control', icon: Bug },
    ]
  },
  {
    category: 'Professional Services',
    items: [
      { name: 'Insurance', icon: Umbrella },
      { name: 'Mortgage', icon: Wallet },
      { name: 'Legal', icon: ScrollText },
      { name: 'Accounting', icon: Calculator },
      { name: 'Medical', icon: Stethoscope },
      { name: 'Dental', icon: Heart },
      { name: 'Chiropractic', icon: Activity },
      { name: 'Real Estate', icon: Building2 },
      { name: 'Financial Services', icon: LineChart },
      { name: 'Business Consulting', icon: Briefcase },
      { name: 'Wealth Management', icon: MessageSquare },
      { name: 'Tax Services', icon: FileText },
    ]
  }
];

export default function Industries() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Industries We Serve</h2>
          <p className="text-gray-600">Specialized lead generation for your industry</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.category}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-50 border border-blue-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">
                {industry.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {industry.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center p-2 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <div className="p-1.5 bg-blue-100 rounded-md mr-2">
                      <item.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}