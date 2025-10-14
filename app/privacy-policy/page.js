"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16 px-6 flex flex-col items-center">

      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-gray-900 mb-4 text-center drop-shadow-lg"
      >
        Terms & <span className="text-blue-600">Conditions</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-600 text-lg text-center mb-12 max-w-2xl"
      >
        Please read these terms carefully before using <span className="font-semibold text-blue-600">Urlixa</span>.
      </motion.p>

      {/* Sections Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-8 w-full max-w-4xl"
      >
        {[
          {
            title: "1. Introduction",
            content: `Welcome to Urlixa — a platform for generating and managing short URLs and QR codes. By accessing or using our services, you agree to comply with the following Terms and Conditions. If you disagree with any part, please refrain from using our services.`,
          },
          {
            title: "2. Eligibility & Account Responsibility",
            content: `You must be at least 13 years old to use Urlixa. All information provided must be accurate, and you are responsible for maintaining the confidentiality of your account credentials.`,
          },
          {
            title: "3. Use of Services",
            content: (
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                <li>Generate short URLs and QR codes for personal or business use.</li>
                <li>Do not use the services for spamming, phishing, or distributing malicious content.</li>
                <li>Urls violating policies or laws may be removed or blocked.</li>
              </ul>
            ),
          },
          {
            title: "4. Intellectual Property Rights",
            content: `All content, graphics, logos, and software on Urlixa are owned by us or our licensors. No copying, modifying, or distribution without permission.`,
          },
          {
            title: "5. Data & Privacy",
            content: (
              <p className="text-gray-700">
                Any personal or analytics data is handled according to our{" "}
                <Link href="/privacy-policy" className="text-blue-600 font-semibold hover:underline">
                  Privacy Policy
                </Link>. We never sell your information.
              </p>
            ),
          },
          {
            title: "6. Third-Party Services",
            content: `Urlixa may use or link to third-party services (analytics, hosting). We do not control these services. Review their terms before use.`,
          },
          {
            title: "7. Limitation of Liability",
            content: `Urlixa is provided "as is". We are not liable for damages resulting from using the platform, including loss of data or profits.`,
          },
          {
            title: "8. Updates to Terms",
            content: `We may update these Terms periodically. Continued use after changes implies acceptance of the updated Terms.`,
          },
          {
            title: "9. Termination of Access",
            content: `We can suspend or terminate your access without notice for violations or harmful activity.`,
          },
          {
            title: "10. Contact Information",
            content: (
              <p className="text-gray-700">
                For questions, contact <a href="mailto:support@urlixa.com" className="text-blue-600 font-semibold hover:underline">support@urlixa.com</a>.
              </p>
            ),
          },
        ].map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-3">{section.title}</h2>
            <div className="text-gray-800 leading-relaxed">{section.content}</div>
          </motion.section>
        ))}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="text-center mt-8"
        >
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default TermsAndConditions;
