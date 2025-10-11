"use client";
import React, { useState, useEffect } from "react";
import { LoaderCircle } from "lucide-react";
const FeedbackPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: ""
  })
  const [submitted, setSubmitted] = useState(false);
  const [loading, setloading] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [visible, setVisible] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "name": form.name,
      "email": form.email,
      "feedback": form.feedback
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/feedback", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setloading(false)
          setVisible(true);
          setMessage(result.message)
          setForm({
            name: "",
            email: "",
            feedback: ""
          })
        } else {
          setloading(false)
          setVisible(true);
          setError(result.message)
        }
        console.log(result)

      })
      .catch((error) => {
        setloading(false)
        setVisible(true);
        console.error(error)
        setError(error)
      });
  }
  useEffect(() => {
    if (error || message) {
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setError("");
          setMessage("");
        }, 500); // fade-out duration
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [error, message]);
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-black p-6">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-4">We Value Your Feedback</h2>
        <p className="text-gray-200 mb-6">
          Help us improve Urlixa by sharing your thoughts. Your feedback means a lot!
        </p>

        {submitted && (
          <p className="text-green-400 mb-4 font-semibold text-center animate-fade-in">
            🎉 Thank you! Your feedback has been submitted.
          </p>
        )}

        <form onSubmit={handleSubmit} method="POST" className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            required
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            value={form.feedback}
            name="feedback"
            onChange={handleChange}
            placeholder="Your Feedback"
            required
            rows={5}
            className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-green-400 via-slate-600 to-purple-500 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {loading ? (
              <div className="flex gap-2 justify-center items-center">
                <LoaderCircle className="bg-transparent w-5 h-5 animate-spin" />
                <span>Submitting...</span>
              </div>
            ) : (
              "Submit Feedback"
            )}
          </button>

          {/* Error / Success Messages */}
          <div className="mt-4 text-center">
            {error && (
              <p
                className={`text-red-400 font-medium bg-red-400/10 px-4 py-2 rounded-xl inline-block shadow-md backdrop-blur-md border border-red-400/30 transform transition-all duration-500 ${visible ? "opacity-100 scale-100 animate-in fade-in zoom-in" : "opacity-0 scale-95 animate-out fade-out zoom-out"
                  }`}
              >
                ❌ {error}
              </p>
            )}
            {message && (
              <p
                className={`text-green-400 font-medium bg-green-400/10 px-4 py-2 rounded-xl inline-block shadow-md backdrop-blur-md border border-green-400/30 transform transition-all duration-500 ${visible ? "opacity-100 scale-100 animate-in fade-in zoom-in" : "opacity-0 scale-95 animate-out fade-out zoom-out"
                  }`}
              >
                ✅ {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </main>

  );
};

export default FeedbackPage;
