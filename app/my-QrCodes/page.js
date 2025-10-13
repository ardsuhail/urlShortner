"use client";
import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";
const Page = () => {
  const [qrCodes, setQrCodes] = useState([]);

  useEffect(() => {
    const storedQrCode = JSON.parse(localStorage.getItem("qrCode")) || [];
    setQrCodes(storedQrCode);
  }, []);

  return (
      <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 p-6 sm:p-12 flex flex-col items-center justify-start">
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold text-white mb-8 tracking-tight"
      >
        My Generated QR Codes
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl my-4 sm:text-4xl font-extrabold text-white mb-8 tracking-tight"
      >
       You have total {qrCodes.length} QrCodes
      </motion.h2>
       
      {qrCodes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {qrCodes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center gap-4 hover:scale-105 hover:shadow-3xl transition-transform duration-300"
            >
              <QRCodeCanvas
                value={item.qrcode}
                size={180}
                className="rounded-xl border border-white/20 p-3 bg-white/10 shadow-lg"
              />
              <p className="text-sm text-gray-300 text-center break-all">{item.url}</p>
              <p className="text-xs text-gray-400 mt-1">Scan to visit</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-300 text-lg mt-12"
        >
          You haven’t generated any QR code yet 😅
        </motion.div>
      )}
    </main>
  );
};

export default Page;

