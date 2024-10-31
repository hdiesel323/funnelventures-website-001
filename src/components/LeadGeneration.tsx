import React from 'react';
import { Phone, Users, Target, Zap } from 'lucide-react';

const benefits = [
  {
    title: 'High-Quality Inbound Calls',
    description: 'Receive calls from prospects actively seeking your services, pre-qualified and ready to convert.',
    icon: Phone
  },
  {
    title: 'Targeted Campaigns',
    description: 'Reach your ideal customers through data-driven targeting and optimization.',
    icon: Target
  },
  {
    title: 'Qualified Prospects',
    description: 'Every lead is pre-screened to ensure they match your ideal customer profile.',
    icon: Users
  },
  {
    title: 'Instant Deployment',
    description: 'Get your lead generation campaigns up and running within 24 hours.',
    icon: Zap
  }
];

export default function LeadGeneration() {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Full-Service Lead Generation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop chasing leads and let them come to you. Our proven system delivers qualified, 
            inbound prospects ready to engage with your services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl mb-4">
                <benefit.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">93%</div>
              <div className="text-gray-600">Contact Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Lead Quality Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24h</div>
              <div className="text-gray-600">Average Setup Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}