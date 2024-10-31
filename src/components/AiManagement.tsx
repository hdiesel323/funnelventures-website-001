import React from 'react';
import { Bot, MessageCircle, BarChart3, Clock } from 'lucide-react';

const features = [
  {
    title: 'Automated Lead Nurturing',
    description: 'AI-powered follow-up sequences keep leads engaged and moving through your pipeline.',
    icon: Bot
  },
  {
    title: 'Smart Communication',
    description: 'Intelligent response handling ensures every inquiry gets immediate attention.',
    icon: MessageCircle
  },
  {
    title: 'Performance Analytics',
    description: 'Real-time insights into your lead conversion funnel and optimization opportunities.',
    icon: BarChart3
  },
  {
    title: '24/7 Availability',
    description: 'Never miss an opportunity with round-the-clock lead management and response.',
    icon: Clock
  }
];

export default function AiManagement() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Lead Management</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let our advanced AI system handle the heavy lifting of lead management,
            so your team can focus on what they do best - closing deals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}