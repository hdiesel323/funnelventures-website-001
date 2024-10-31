import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does the revenue-share model work?",
    answer: "Our revenue-share model means you only pay a portion of the revenue generated from closed deals. With no upfront costs or monthly fees, we focus on helping you close more deals. When a lead converts into a closed deal, we share in the revenue. This model aligns our goals with yours, driving us to maximize your deal closures."
  },
  {
    question: "What do you mean by AI-driven lead management?",
    answer: "AI-driven lead management uses artificial intelligence and automation to streamline every stage of the lead journey. Our AI system qualifies, nurtures, and prioritizes leads, managing tasks like follow-ups, lead scoring, and predicting which leads are most likely to convert. This helps your team stay focused on high-value opportunities."
  },
  {
    question: "How does your follow-up system improve lead conversion?",
    answer: "Our follow-up system uses AI to deliver consistent, personalized follow-ups for each lead. By tracking interactions and tailoring follow-up strategies based on responses, our system keeps leads engaged, builds trust, and guides them through the decision process, increasing conversion rates and revenue."
  },
  {
    question: "What's involved in getting started?",
    answer: "Book an intro call to discuss your goals and target areas. After we align on initial goals, our team will set up your lead management system and get started within 24 hours, handling all aspects of inbound calls and lead nurturing."
  },
  {
    question: "Can I adjust or pause the service?",
    answer: "Absolutely. Our revenue-share model is flexible to meet your evolving needs. Whether you need to adjust your target market, scale up for busy seasons, or take a break, our service adapts without long-term commitments."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">FAQ</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-white hover:bg-gray-50 rounded-lg shadow-sm transition-all duration-200 focus:outline-none border border-gray-100"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <div className="mt-4 text-gray-600 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}