"use client";
import React from "react";
import Link from "next/link";

const TermsPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 py-16 px-6">
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 opacity-10 animate-gradient-x -z-10"></div>

      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 space-y-10">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-6">
          Terms of Service
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By using <span className="font-semibold">Urlixa</span>, you agree to these Terms of Service. If you do not agree, please do not use our platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">2. Service Usage</h2>
          <p className="text-gray-700 leading-relaxed">
            Urlixa provides a URL shortening service. You may use our services only for lawful purposes and in accordance with these terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">3. User Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>You must not use the service for illegal activities.</li>
            <li>Do not share harmful, abusive, or malicious content.</li>
            <li>You are responsible for maintaining confidentiality of any login or access credentials.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">4. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content on Urlixa, including text, graphics, and logos, is our property or used with permission. You may not copy or distribute content without our consent.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">5. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            Urlixa is provided “as is” without warranties. We are not responsible for damages resulting from the use of our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">6. Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            We may suspend or terminate access to the service at any time for violations of these terms or misuse of the platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">7. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions regarding these Terms of Service, contact us at{" "}
            <a href="mailto:support@Urlixa.com" className="text-blue-600 font-semibold hover:underline">
              support@Urlixa.com
            </a>.
          </p>
        </section>

        <section className="text-center mt-10">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Back to Home
          </Link>
        </section>
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 20s ease infinite;
        }
      `}</style>
    </main>
  );
};

export default TermsPage;
