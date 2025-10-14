"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16 px-6 flex flex-col items-center">
      
      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-gray-900 mb-10 text-center drop-shadow-lg"
      >
        About <span className="text-blue-600">Urlixa</span>
      </motion.h1>

      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100 max-w-4xl mb-10"
      >
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Welcome to{" "}
          <span className="font-semibold text-blue-600">Urlixa</span> — a
          modern, fast, and reliable URL shortener designed to make your digital
          presence smarter and more effective. Whether you are a content
          creator, entrepreneur, student, or professional, Urlixa helps you
          share links in a cleaner, professional, and memorable way.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Every link you create with Urlixa is customizable, easy to track, and
          secure. Our mission is simple — to simplify link management while
          giving you powerful insights about your clicks and engagement.
        </p>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100 max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Choose <span className="text-blue-600">Urlixa?</span>
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-relaxed">
          <li>
            <strong>Custom Short URLs:</strong> Create branded short links that represent your identity.
          </li>
          <li>
            <strong>Analytics:</strong> Track clicks, visits, and engagement in real-time.
          </li>
          <li>
            <strong>Fast & Reliable:</strong> Lightning-fast redirects with 99.9% uptime.
          </li>
          <li>
            <strong>Secure & Private:</strong> We respect your privacy — always encrypted, always safe.
          </li>
          <li>
            <strong>Easy Management:</strong> Manage, edit, and organize your links effortlessly.
          </li>
        </ul>
      </motion.section>

      {/* Creator Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100 max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          About the Creator
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Urlixa is built by{" "}
          <span className="font-semibold text-blue-600">Suhail</span>, a
          passionate B.Tech Computer Science student and tech enthusiast.
          Follow me on{" "}
          <Link
            href="https://instagram.com/ardsuhail"
            target="_blank"
            className="text-blue-500 font-semibold hover:underline"
          >
            @ardsuhail
          </Link>{" "}
          where I share insights about technology, AI, coding, and content
          creation.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          I created Urlixa to solve a real-world problem — messy, long, and
          unreadable URLs. With Urlixa, you can shorten, track, and share links
          professionally to create smarter digital experiences.
        </p>
      </motion.section>

      {/* Ventures Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100 max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Beyond <span className="text-blue-600">Urlixa</span>
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Apart from Urlixa, I also manage{" "}
          <Link
            href="https://shopovix.store"
            target="_blank"
            className="text-blue-500 font-semibold hover:underline"
          >
            Shopovix.store
          </Link>
          — an online store offering top-quality products at affordable prices.
          Innovation and creativity lie at the heart of everything I do.
        </p>
      </motion.section>

      {/* Future Vision Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100 max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Our Future Vision
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          In the coming updates, Urlixa will introduce &quot;user authentication&quot;,
         &quot;cloud-synced data&quot;, and &quot;advanced analytics&quot; — including device type,
          location-based stats, and engagement trends. Our goal is to make Urlixa
          not just a shortener, but a complete smart link management platform.
        </p>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-8"
      >
        <p className="text-gray-500 mb-2 uppercase tracking-wide font-medium">
          Take the next step
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Urlixa is your go-to platform for clean, memorable, and trackable
          links. Join thousands of users making their digital sharing smarter.
        </p>
        <Link
          href="/shortner"
          className="inline-block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Start Shortening
        </Link>
      </motion.section>
    </main>
  );
};

export default AboutPage;

