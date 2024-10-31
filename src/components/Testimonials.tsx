import React from 'react';

const testimonials = [
  {
    quote: "Funnel Ventures has been a game-changer for our business. They consistently provide high-quality leads, and their AI-driven management has doubled our conversion rate.",
    author: "Chris Daniels",
    title: "CEO, ClearView Services"
  },
  {
    quote: "With Funnel Ventures, we've seen a 40% boost in booked appointments and drastically reduced our time spent on lead follow-up. This has been a tremendous help to our team.",
    author: "Lily Rogers",
    title: "Head of Sales, HomeTech Solutions"
  }
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <blockquote className="text-xl text-gray-900 mb-6">{testimonial.quote}</blockquote>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}