import React from 'react';
import { Check, X } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="overflow-x-auto rounded-lg bg-gray-50/50">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-5 px-6 text-left text-[18px] font-semibold">Feature</th>
              <th className="py-5 px-6 text-left text-[18px] font-semibold">Traditional Agencies</th>
              <th className="py-5 px-6 text-left text-[18px] font-semibold text-[#2563EB]">Funnel Ventures</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((item, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="py-5 px-6 text-[16px] font-medium text-gray-900">{item.category}</td>
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center bg-red-100 rounded">
                      <X className="h-3.5 w-3.5 text-red-500 flex-shrink-0" />
                    </div>
                    <span className="text-[16px] text-gray-500">{item.traditional}</span>
                  </div>
                </td>
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center bg-green-100 rounded">
                      <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-[16px] text-gray-900">{item.funnel}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}