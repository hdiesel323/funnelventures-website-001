import React from 'react';

export default function Terms() {
    return (
        <div className="min-h-screen bg-white py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

                <div className="prose prose-lg">
                    <p className="text-gray-600 mb-8">Last updated: March 14, 2024</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                        <p>By accessing or using Funnel Ventures' services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Performance-Based Services</h2>
                        <p>Our services operate on a performance-based model. You only pay for successful leads that meet our agreed-upon criteria. Payment terms and success metrics will be defined in your service agreement.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. AI Technology Usage</h2>
                        <p>Our services utilize AI technology for lead generation and management. While we strive for optimal performance, we cannot guarantee specific results as they depend on various market factors and your business's ability to convert leads.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Data Usage and Privacy</h2>
                        <p>We collect and process data in accordance with our Privacy Policy. By using our services, you grant us permission to collect and analyze data related to your lead generation activities.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Service Modifications</h2>
                        <p>We reserve the right to modify or discontinue our services at any time. We will provide reasonable notice of any significant changes that affect your service.</p>
                    </section>
                </div>
            </div>
        </div>
    );
} 