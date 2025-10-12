"use client";
import React from "react";
import Link from "next/link";
import { SidebarClose,Home,Info,MessageCircle, } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebarContext } from "./Context";

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebarContext();

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <>
          {/* 🖤 Dimmed Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />

          {/* 🌈 Sidebar Container */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className={`fixed top-0 left-0 h-screen w-[75vw] sm:w-[45vw] md:w-[25vw] 
              bg-gradient-to-br from-indigo-900/90 via-purple-800/90 to-pink-700/90 
              backdrop-blur-2xl border-r border-white/20 shadow-2xl z-50 flex flex-col`}
          >
            {/* ❌ Close Button */}
            <div className="absolute top-4 right-4 cursor-pointer">
              <motion.div
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.6 }}
              >
                <SidebarClose
                  onClick={() => setSidebarOpen(false)}
                  className="w-8 h-8 text-white hover:text-red-400 transition-colors"
                />
              </motion.div>
            </div>

            {/* 🧠 Sidebar Header */}
            <div className="text-center mt-14 mb-6">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-extrabold text-white tracking-wide"
              >
                URLIX
              </motion.h2>
              <p className="text-gray-300 text-sm mt-1">
                Smart Short Links for Everyone 🚀
              </p>
            </div>

            {/* 🌐 Navigation Links */}
            <ul className="flex flex-col relative px-5 gap-3 text-white font-semibold">
              <motion.li
                whileHover={{ scale: 1.03, x: 8 }}
                transition={{ duration: 0.2 }}
                className="list-none text-lg px-4 py-3 active::bg-blue-400  rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer"
              >
                <Link className="flex items-center  gap-2 " href="/"><Home className="w-8 h-8 rounded-full text-white p-1.5 bg-black/30 " /> Home</Link>
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.03, x: 8 }}
                transition={{ duration: 0.2 }}
                className="list-none text-lg px-4 py-3 active:bg-blue-400  rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-green-500 hover:to-lime-400 hover:shadow-lg hover:shadow-green-500/30 transition-all cursor-pointer"
              >
                <Link className="flex items-center  gap-2 " href="/about"><Info className="w-8 h-8 rounded-full text-white p-1.5 bg-black/30 " /> About Urlix</Link>
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.03, x: 8 }}
                transition={{ duration: 0.2 }}
                className="list-none text-lg px-4 py-3  active:bg-blue-400 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-400 hover:shadow-lg hover:shadow-pink-500/30 transition-all cursor-pointer"
              >
                <Link className="flex items-center  gap-2 " href="/feedback"><MessageCircle className="w-8 h-8 rounded-full text-white p-1.5 bg-black/30 " />Feedback</Link>
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.03, x: 8 }}
                transition={{ duration: 0.2 }}
                className="list-none text-lg px-4 py-3 active:bg-blue-400  rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:shadow-lg hover:shadow-yellow-500/30 transition-all cursor-pointer"
              >
                <Link className="flex items-center  gap-2 " href="/shortner"><span   className="w-8 h-8 rounded-full text-white p-1.5 bg-black/30  flex justify-center  items-center" >🔗</span> Shortner</Link>
              </motion.li>
            </ul>

            {/* ⚡ Footer Section */}
            <div className="mt-auto mb-8 text-center text-gray-400 text-sm">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Made with ❤️ by <span className="text-purple-300">Urlix</span>
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
