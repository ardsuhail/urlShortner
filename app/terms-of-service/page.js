"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16 px-6 flex flex-col items-center">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-gray-900 mb-10 text-center drop-shadow-lg"
      >
        Terms of <span className="text-blue-600">Service</span>
      </motion.h1>

      {/* Section 1 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          1. Acceptance of Terms
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          By accessing or using{" "}
          <span className="font-semibold text-blue-600">Urlixa</span>, you agree
          to be bound by these Terms of Service. If you do not agree with any
          part of these terms, please discontinue using our platform.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mt-3">
          These terms govern your use of Urlixa’s website, tools, and related
          services, ensuring a fair and transparent experience for all users.
        </p>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          2. Service Usage
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Urlixa provides a reliable and secure URL shortening service. You may
          use our services only for lawful purposes and in accordance with these
          terms. Misuse of the platform in any form may lead to suspension or
          permanent ban.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li>No sharing of malicious, phishing, or misleading links.</li>
          <li>No spamming or mass automation without consent.</li>
          <li>Do not impersonate others or use false identities.</li>
        </ul>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          3. User Responsibilities
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-3">
          As a user, you are responsible for the content and links you create or
          share using Urlixa. You must:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li>Ensure that your shortened links comply with all applicable laws.</li>
          <li>Keep your login credentials private and secure.</li>
          <li>Report any unauthorized activity immediately.</li>
        </ul>
      </motion.section>

      {/* Section 4 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          4. Intellectual Property
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          All content on Urlixa, including branding, design, source code, and
          graphics, is the intellectual property of Urlixa and its creator,
          <span className="font-semibold text-blue-600"> Suhail</span>.  
          You may not copy, reproduce, or distribute our material without prior written permission.
        </p>
      </motion.section>

      {/* Section 5 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          5. Limitation of Liability
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Urlixa is provided “as is” without any warranties. We strive for
          maximum uptime and performance, but we are not responsible for any
          loss of data, downtime, or indirect damages arising from service use.
        </p>
      </motion.section>

      {/* Section 6 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Termination</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          We reserve the right to suspend or terminate your access to Urlixa if
          we believe you have violated our Terms or engaged in activity harmful
          to the platform or its users. You may stop using the service anytime.
        </p>
      </motion.section>

      {/* Section 7 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Contact Us</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Have questions about our Terms of Service? Contact us at{" "}
          <a
            href="mailto:support@Urlixa.com"
            className="text-blue-600 font-semibold hover:underline"
          >
            support@Urlixa.com
          </a>
          . Our support team will assist you as soon as possible.
        </p>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-8"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Thank you for trusting <span className="text-blue-600">Urlixa</span>
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          We’re committed to providing you a smooth, secure, and innovative
          experience every time you shorten or manage a link.
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Back to Home
        </Link>
      </motion.section>
    </main>
  );
};

export default TermsPage;
