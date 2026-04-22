// // app/page.js
// "use client"
// import { useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function Home() {
//   const [email, setEmail] = useState("");

//   const handlesubmit = () => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({ email });

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow"
//     };

//     fetch("/api/subscriber", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         if (result.message) {
//           alert(result.message);
//         } else if (result.error) {
//           alert(result.error);
//         }
//         setEmail("");
//         console.log(result);
//       })
//       .catch((error) => {
//         alert("Something went wrong, please try again");
//         console.error(error);
//       });
//   };

//   return (
   
//     <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
//   {/* Background Gradient */}
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 0.6 }}
//     className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-purple-800 to-black"
//   />

//   {/* Smooth Animated Blobs */}
//   <motion.div
//     className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-3xl top-10 left-10"
//     animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
//     transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//   />
//   <motion.div
//     className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10"
//     animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
//     transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//   />
//   <motion.div
//     className="absolute w-48 h-48 sm:w-60 sm:h-60 bg-pink-500/20 rounded-full blur-3xl top-1/3 right-1/3"
//     animate={{ scale: [1, 1.05, 1] }}
//     transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
//   />

//   {/* Heading */}
//   <motion.h1
//     initial={{ opacity: 0, y: -20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.7 }}
//     className="sm:text-5xl text-3xl font-extrabold text-white mb-4 drop-shadow-lg"
//   >
//     Shorten Your Links with{" "}
//     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
//       Urlixa
//     </span>
//   </motion.h1>

//   {/* Subtitle */}
//   <motion.p
//     initial={{ opacity: 0, y: 15 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.9 }}
//     className="text-lg text-gray-200 max-w-2xl mb-6 leading-relaxed"
//   >
//     Transform long, messy URLs into clean and shareable short links instantly.
//     Fast, reliable, and free to use.
//   </motion.p>

//   {/* Get Started Button */}
//   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="z-10">
//     <Link
//       href={"/shortner"}
//       className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
//     >
//       Get Started
//     </Link>
//   </motion.div>

//   {/* Subscribe Box */}
//  <motion.div
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 1 }}
//   className="mt-10 w-[90%] sm:w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl px-3 sm:px-4 py-6 border border-white/20"
// >
//   <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
//     Join our community –{" "}
//     <span className="text-blue-400">Subscribe now</span>
//   </h2>

//   <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
//     <input
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       type="email"
//       placeholder="Enter your email"
//       className="flex-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
//     />
//     <button
//       onClick={handlesubmit}
//       className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
//     >
//       Subscribe
//     </button>
//   </div>
// </motion.div>

// </main>

//   );
// }
"use client"
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubscribe = async () => {
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscriber", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await res.json();
      if (result.message) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden bg-[#080812]">

      {/* Static gradient background - no animation, fast load */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d2b] via-[#130d2e] to-[#080812] -z-10" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs - CSS only, no JS animation */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl -z-10" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6 animate-fade-in">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Free URL Shortener & QR Generator
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
        Shorten Links.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Share Smarter.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 max-w-lg mb-8 text-base sm:text-lg leading-relaxed">
        Transform long URLs into clean short links or QR codes — instantly. No signup needed.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        <Link
          href="/shortner"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
        >
          Shorten a URL →
        </Link>
        <Link
          href="/qrCode-generator"
          className="px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
        >
          Generate QR Code
        </Link>
      </div>

      {/* Stats row */}
      <div className="flex gap-8 mb-12 text-center">
        {[
          { label: "Links Created", value: "10K+" },
          { label: "QR Codes", value: "5K+" },
          { label: "Uptime", value: "99.9%" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Subscribe Box */}
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        <p className="text-white font-semibold mb-1">Stay updated</p>
        <p className="text-gray-400 text-sm mb-4">Get notified about new features and updates.</p>
        <div className="flex gap-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-gray-500 outline-none focus:border-indigo-500 transition-colors text-sm"
          />
          <button
            onClick={handleSubscribe}
            disabled={status === "loading"}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white rounded-lg font-medium text-sm transition-all duration-200 whitespace-nowrap"
          >
            {status === "loading" ? "..." : status === "success" ? "✓ Done" : "Subscribe"}
          </button>
        </div>
        {status === "error" && (
          <p className="text-red-400 text-xs mt-2">Something went wrong. Try again.</p>
        )}
      </div>
    </main>
  );
}