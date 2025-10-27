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
   
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
  {/* Background Gradient */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-purple-800 to-black"
  />

  {/* Smooth Animated Blobs */}
  <motion.div
    className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-3xl top-10 left-10"
    animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10"
    animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute w-48 h-48 sm:w-60 sm:h-60 bg-pink-500/20 rounded-full blur-3xl top-1/3 right-1/3"
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Heading */}
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="sm:text-5xl text-3xl font-extrabold text-white mb-4 drop-shadow-lg"
  >
    Shorten Your Links with{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
      Urlixa
    </span>
  </motion.h1>

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    className="text-lg text-gray-200 max-w-2xl mb-6 leading-relaxed"
  >
    Transform long, messy URLs into clean and shareable short links instantly.
    Fast, reliable, and free to use.
  </motion.p>

  {/* Get Started Button */}
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="z-10">
    <Link
      href={"/shortner"}
      className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      Get Started
    </Link>
  </motion.div>

  {/* Subscribe Box */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="mt-10 w-full max-w-md bg-white/10 backdrop-blur-xl overflow-hidden rounded-2xl shadow-2xl px-3 sm:px-4 py-6 border border-white/20"
  >
    <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
      Join our community –{" "}
      <span className="text-blue-400">Subscribe now</span>
    </h2>

    <div className="flex items-center gap-2">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="flex-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handlesubmit}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-all duration-300"
      >
        Subscribe
      </button>
    </div>
  </motion.div>
</main>

  );
}
