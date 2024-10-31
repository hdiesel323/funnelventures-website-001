import React from 'react';
import { Clock, Users, Phone, BarChart3, ArrowRight } from 'lucide-react';
import CalendlyButton from './CalendlyButton';

const features = [
  {
    title: '24/7 AI-Powered Response',
    description: 'Never miss a lead with our AI system that handles calls and inquiries round-the-clock, providing instant support and qualification.',
    icon: Clock
  },
  {
    title: 'Smart Lead Routing',
    description: 'Our AI automatically directs leads to the most qualified representative based on intent and expertise, improving conversion rates.',
    icon: Users
  },
  {
    title: 'Multi-Channel Integration',
    description: 'Seamlessly integrate with your existing CRM, communication platforms, and business intelligence tools like Salesforce, Twilio, and more.',
    icon: Phone
  },
  {
    title: 'Real-Time Analytics',
    description: 'Get detailed insights into your lead conversion funnel with real-time reporting and AI-powered optimization suggestions.',
    icon: BarChart3
  }
];

export default function Features() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Lead-Dependent Businesses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're in insurance, real estate, solar, mortgage, or home services, our AI-powered platform helps you convert more leads with less effort
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Faster Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
            <div className="text-gray-600">Lead Conversion Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">2-3x</div>
            <div className="text-gray-600">Revenue Growth</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24hrs</div>
            <div className="text-gray-600">Setup Time</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-lg mr-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to boost your lead conversion?</h3>
          <CalendlyButton className="btn btn-primary">
            Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
          </CalendlyButton>
        </div>
      </div>
    </div>
  );
}