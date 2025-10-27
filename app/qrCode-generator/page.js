"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { LoaderCircle } from 'lucide-react'
import { motion } from "framer-motion";
import { QRCodeCanvas } from 'qrcode.react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
const Page = () => {
    const [loading, setloading] = useState(false)
    const [url, setUrl] = useState("")
    const [error, setError] = useState(null)
    const [qrcode, setQrcode] = useState("")
    const [message, setMessage] = useState(null)
    const router=useRouter()
    const Generate = () => {
          setloading(true)
        if (!url.trim()) {
          setloading(false)
            setError("Please write your  URL");
            return;
        } else {
            setQrcode(url);
            
            const newqrcode = { qrcode: url, url: url }; // 👈 direct url use karo
            const existingqrCode = JSON.parse(localStorage.getItem("qrCode")) || [];
            const alreadyExists = existingqrCode.some((QrCode) => QrCode.url === url);

            if (!alreadyExists) {
                existingqrCode.push(newqrcode);
                localStorage.setItem("qrCode", JSON.stringify(existingqrCode));
            }

            setError(null); // error clear karna na bhule
          router.push("/qrCode-generator/result")
         
        }
    };

    return (
//   <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 p-4 sm:p-6 relative overflow-hidden">

//   <motion.div
//     className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/30 rounded-full blur-3xl top-10 left-10 -z-10"
//     animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
//     transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//   />
//   <motion.div
//     className="absolute w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-pink-500/20 rounded-full blur-3xl bottom-20 right-10 -z-10"
//     animate={{ y: [0, -25, 0], x: [0, -20, 0] }}
//     transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//   />

//   <motion.div
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.6 }}
//     className="bg-white/5 backdrop-blur-2xl p-4 sm:p-8 rounded-3xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 border border-white/10 hover:border-white/20 transition-all duration-500"
//   >
   
//     <motion.div
//       initial={{ x: 30, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ delay: 0.3, duration: 0.6 }}
//       className="w-full md:w-1/2 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-yellow-400/20 
//                  backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300"
//     >
//       <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 tracking-wide">
//         Paste your URL
//       </h2>

//       <input
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         type="text"
//         autoComplete='on'
//         autoCorrect='on'
//         placeholder="Enter your URL"
//         className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 
//                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/20 transition-all duration-300
//                    backdrop-blur-md border border-white/20 hover:bg-white/25"
//       />

//       <motion.button
//         whileHover={!loading ? { scale: 1.05 } : {}}
//         whileTap={!loading ? { scale: 0.95 } : {}}
//         onClick={Generate}
//         disabled={loading}
//         className={`mt-6 w-full py-3 cursor-pointer rounded-xl text-white font-semibold shadow-lg flex items-center justify-center gap-2 transition-all duration-300 ${
//           loading
//             ? "bg-gray-400 opacity-80 cursor-not-allowed"
//             : "bg-gradient-to-r from-green-400 via-slate-600 to-purple-500 hover:shadow-2xl"
//         }`}
//       >
//         {loading ? (
//           <>
//             <LoaderCircle className="w-5 h-5 animate-spin text-white" />
//             <span>Generating...</span>
//           </>
//         ) : (
//           "Generate"
//         )}
//       </motion.button>

//       {error && (
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-red-400 text-center mt-4 font-medium"
//         >
//           ❌ {error}
//         </motion.p>
//       )}
//     </motion.div>
  
//   </motion.div>
// </main>
<main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6">

  {/* Soft background orbs */}
  <motion.div
    className="absolute w-80 sm:w-96 h-80 sm:h-96 bg-purple-500/20 rounded-full blur-3xl top-20 left-10 -z-10"
    animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-pink-500/20 rounded-full blur-3xl bottom-10 right-10 -z-10"
    animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Main Card */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl w-full max-w-lg p-6 sm:p-8 relative overflow-hidden"
  >
    {/* Subtle gradient border glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-blue-400/20 opacity-30 rounded-3xl pointer-events-none" />

    <motion.h2
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 tracking-wide drop-shadow-md"
    >
      ✂️Generate Your QR Code Easily
    </motion.h2>

    <div className="space-y-4">
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        autoComplete="on"
        placeholder="Paste your URL here..."
        className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/20
                   border border-white/20 transition-all duration-300"
      />

      <motion.button
        whileHover={!loading ? { scale: 1.05 } : {}}
        whileTap={!loading ? { scale: 0.95 } : {}}
        onClick={Generate}
        disabled={loading}
        className={`w-full py-3 font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2 text-white transition-all duration-300 ${
          loading
            ? "bg-gray-400 opacity-80 cursor-not-allowed"
            : "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:shadow-pink-500/30"
        }`}
      >
        {loading ? (
          <>
            <LoaderCircle className="w-5 h-5 animate-spin text-white" />
            <span>Generating...</span>
          </>
        ) : (
          "Generate"
        )}
      </motion.button>
    </div>

    {error && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-400 text-center mt-4 font-medium"
      >
        ❌ {error}
      </motion.p>
    )}
  </motion.div>
</main>


    )
}

export default Page
