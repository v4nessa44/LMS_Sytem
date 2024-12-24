import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <header className="py-6 border-b border-gray-200">
        <div className=" mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <section className="space-y-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Welcome to EduCourses. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="space-y-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-600 max-w-3xl mx-auto text-left">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Payment details for processing transactions.</li>
            <li>Usage data, including IP address and browsing activity.</li>
          </ul>
        </section>

        <section className="space-y-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-600 max-w-3xl mx-auto text-left">
            <li>To provide and maintain our services.</li>
            <li>To process payments and transactions.</li>
            <li>To send newsletters, updates, and promotional materials.</li>
            <li>To improve our website and user experience.</li>
          </ul>
        </section>

        <section className="space-y-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Sharing Your Information</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We do not sell your personal information. However, we may share your information with third-party service providers to facilitate our services, comply with legal obligations, or protect our rights.
          </p>
        </section>

        <section className="space-y-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
          <ul className="list-disc pl-6 text-gray-600 max-w-3xl mx-auto text-left">
            <li>Access and update your personal information.</li>
            <li>Request deletion of your data.</li>
            <li>Opt-out of marketing communications.</li>
          </ul>
        </section>

        <section className="space-y-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Security</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We implement reasonable security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Changes to This Policy</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section className="space-y-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            If you have any questions about this Privacy Policy, please contact us at privacy@educourses.com.
          </p>
        </section>
      </main>
      <footer className="py-6 border-t border-gray-200">
        <div className=" mx-auto px-4 md:px-6 text-center text-gray-500 text-sm">
          © 2024 EduCourses. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
