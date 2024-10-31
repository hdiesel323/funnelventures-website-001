import React from 'react';
import { Target, Bot, Zap, MessageCircle, Clock, BarChart3, Users, Phone } from 'lucide-react';

const features = [
  {
    title: '24/7 AI-Powered Response',
    description: 'Never miss a lead with our AI system that handles calls and inquiries round-the-clock, providing instant support and qualification.',
    icon: Clock,
  },
  {
    title: 'Smart Lead Routing',
    description: 'Our AI automatically directs leads to the most qualified representative based on intent and expertise, improving conversion rates.',
    icon: Users,
  },
  {
    title: 'Multi-Channel Integration',
    description: 'Seamlessly integrate with your existing CRM, communication platforms, and business intelligence tools like Salesforce, Twilio, and more.',
    icon: Phone,
  },
  {
    title: 'Real-Time Analytics',
    description: 'Get detailed insights into your lead conversion funnel with real-time reporting and AI-powered optimization suggestions.',
    icon: BarChart3,
  },
];

const results = [
  { label: 'Faster Response Time', value: '24/7' },
  { label: 'Lead Conversion Increase', value: '40%' },
  { label: 'Revenue Growth', value: '2-3x' },
  { label: 'Setup Time', value: '24hrs' },
];

export default function Features() {
  return (
    <div id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Lead-Dependent Businesses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're in insurance, real estate, solar, mortgage, or home services, our AI-powered platform helps you convert more leads with less effort
          </p>
        </div>

        {/* Results Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {results.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="group p-6 rounded-2xl transition-all duration-300 hover:bg-blue-50">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}