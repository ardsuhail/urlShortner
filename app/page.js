"use client"
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");

  const handlesubmit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ email });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/subscriber", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.message) {
          alert(result.message);
        } else if (result.error) {
          alert(result.error);
        }
        setEmail("");
        console.log(result);
      })
      .catch((error) => {
        alert("Something went wrong, please try again");
        console.error(error);
      });
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-[100vh] text-center px-6 overflow-hidden">
      {/* 🔵 Floating gradient bubbles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-purple-800 to-black"
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl top-10 left-10"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl bottom-10 right-10"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-60 h-60 bg-pink-500/30 rounded-full blur-3xl top-1/3 right-1/3"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content Section */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sm:text-5xl text-3xl font-extrabold text-white mb-4 drop-shadow-lg"
      >
        Shorten Your Links with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Urlixa
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg text-gray-200 max-w-2xl mb-6 leading-relaxed"
      >
        Transform long, messy URLs into clean and shareable short links
        instantly. Fast, reliable, and free to use.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="z-10"
      >
        <Link
          className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          href={"/shortner"}
        >
          Get Started
        </Link>
      </motion.div>

      {/* Subscribe Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-10 w-full max-w-md bg-white/10 backdrop-blur-xl overflow-hidden rounded-2xl shadow-2xl px-2   sm:px-4 py-6 border border-white/20"
      >
        <h2 className="text-xl font-semibold text-white mb-3">
          Join our community –{" "}
          <span className="text-blue-400">Subscribe now</span>
        </h2>

        <div className="flex items-center gap-1 sm:gap-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="flex-1 px-2 sm:w-full w-[10vw] sm:px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handlesubmit}
            className=" px-2  sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-all duration-300"
          >
            Subscribe
          </button>
        </div>
      </motion.div>
    </main>
  );
}
