import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import CalendlyButton from './CalendlyButton';

const comparisonData = [
  {
    category: 'Payment Model',
    traditional: 'Monthly Fees',
    funnel: 'Pay-for-Results Only',
  },
  {
    category: 'Contract Terms',
    traditional: 'Long-Term Contracts',
    funnel: 'Flexible, No Lock-in',
  },
  {
    category: 'Lead Quality',
    traditional: 'Mixed Results',
    funnel: 'Pre-qualified, Ready to Book',
  },
  {
    category: 'Follow-up Process',
    traditional: 'Manual Follow-up',
    funnel: 'AI-Powered Automation',
  },
  {
    category: 'Performance Tracking',
    traditional: 'Monthly Reports',
    funnel: 'Real-Time Updates via Slack',
  },
];

export default function Comparison() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">How Do We Compare?</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          See why our approach delivers better results for home service businesses
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-4 px-6 text-left text-lg font-semibold text-gray-900">Feature</th>
                <th className="py-4 px-6 text-center text-lg font-semibold text-gray-900">Traditional Agencies</th>
                <th className="py-4 px-6 text-center text-lg font-semibold text-blue-600">Funnel Ventures</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-900">{item.category}</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="h-5 w-5 text-red-500" />
                      <span className="text-gray-600">{item.traditional}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-900 font-medium">{item.funnel}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the difference?
          </p>
          <CalendlyButton className="btn btn-primary">
            Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
          </CalendlyButton>
        </div>
      </div>
    </div>
  );
}