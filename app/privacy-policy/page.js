"use client";
import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 py-16 px-6">
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 opacity-10 animate-gradient-x -z-10"></div>

      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 space-y-10">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-6">
          Privacy Policy
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold">Urlixa</span>. Your privacy is extremely important to us. This privacy policy explains how we collect, use, and protect your information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">2. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect personal information like your email address when you subscribe or provide feedback. We also collect analytics to improve your experience.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">3. How We Use Information</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>To improve our services and provide personalized experiences.</li>
            <li>To send newsletters or updates if you opt-in.</li>
            <li>To ensure the security and integrity of our platform.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">4. Third-Party Services</h2>
          <p className="text-gray-700 leading-relaxed">
            We may use third-party services for analytics, email, and hosting. These services adhere to their own privacy policies, and we ensure they protect your data responsibly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">5. Your Rights</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt-out of marketing emails at any time.</li>
            <li>Request information about how your data is used.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">6. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            For any questions regarding this Privacy Policy, contact us at{" "}
            <a href="mailto:support@Urlixa.com" className="text-blue-600 font-semibold hover:underline">support@Urlixa.com</a>.
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

export default PrivacyPolicy;
