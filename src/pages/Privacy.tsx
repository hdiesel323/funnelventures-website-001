import React from 'react';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-white py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

                <div className="prose prose-lg">
                    <p className="text-gray-600 mb-8">Last updated: March 14, 2024</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                        <p>We collect information necessary to provide our lead generation and management services, including:</p>
                        <ul className="list-disc pl-6 mt-4">
                            <li>Business contact information</li>
                            <li>Lead interaction data</li>
                            <li>Service usage statistics</li>
                            <li>Communication records</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                        <p>We use collected information to:</p>
                        <ul className="list-disc pl-6 mt-4">
                            <li>Provide and improve our lead generation services</li>
                            <li>Optimize AI-powered lead management</li>
                            <li>Generate performance analytics</li>
                            <li>Communicate service updates</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
                        <p>We implement industry-standard security measures to protect your data. Our AI systems are designed with privacy and security in mind.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
                        <p>We may use third-party services for CRM integration, communication, and analytics. These services have their own privacy policies and data handling practices.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 mt-4">
                            <li>Access your data</li>
                            <li>Request data correction</li>
                            <li>Request data deletion</li>
                            <li>Opt out of certain data processing</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
} 