"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";

const FeedbackPage = () => {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(form);

    fetch("/api/feedback", { method: "POST", headers: myHeaders, body: raw })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        if (result.success) {
          setMessage(result.message);
          setForm({ name: "", email: "", feedback: "" });
        } else {
          setError(result.message);
        }
        setVisible(true);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        setVisible(true);
      });
  };

  useEffect(() => {
    if (error || message) {
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setError("");
          setMessage("");
        }, 500);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [error, message]);

  return (
    <main className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-20 overflow-hidden">
      
      {/* Floating Background Elements */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-300/20 rounded-full top-10 left-10 blur-3xl animate-spin-slow"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-56 h-56 bg-purple-300/20 rounded-full bottom-20 right-16 blur-2xl animate-spin-slow"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      {/* Feedback Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
        className="relative z-10 bg-white/30 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-3xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-gray-900 text-center mb-6 drop-shadow-md"
        >
          We Value Your Feedback
        </motion.h2>
        <p className="text-gray-700 text-lg mb-8 text-center">
          Help us improve <span className="font-semibold text-blue-600">Urlixa</span> by sharing your thoughts!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-white/30 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-white/30 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <textarea
            name="feedback"
            value={form.feedback}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Your Feedback"
            className="w-full px-4 py-3 rounded-xl bg-white/30 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:scale-105 hover:shadow-xl transition-all duration-300 flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <LoaderCircle className="w-5 h-5 animate-spin" /> Submitting...
              </>
            ) : (
              "Submit Feedback"
            )}
          </button>

          {/* Messages */}
          <div className="mt-4 text-center">
            {error && visible && (
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-red-500 font-medium bg-red-200/20 px-4 py-2 rounded-xl inline-block shadow-md backdrop-blur-md border border-red-300/30"
              >
                ❌ {error}
              </motion.p>
            )}
            {message && visible && (
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-green-500 font-medium bg-green-200/20 px-4 py-2 rounded-xl inline-block shadow-md backdrop-blur-md border border-green-300/30"
              >
                ✅ {message}
              </motion.p>
            )}
          </div>
        </form>
      </motion.div>
    </main>
  );
};

export default FeedbackPage;
