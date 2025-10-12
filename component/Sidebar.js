"use client";
import React from "react";
import Link from "next/link";
import { SidebarClose, Home, Info, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebarContext } from "./Context";

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebarContext();

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <>
          {/* 🖤 Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />

          {/* 🌈 Sidebar */}
          <motion.div
            initial={{ x: "-100%", opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0.5 }}
            transition={{
              duration: 0.35,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="fixed top-0 left-0 h-screen w-[75vw] sm:w-[45vw] md:w-[25vw]
              bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700
              backdrop-blur-xl border-r border-white/10 shadow-2xl z-50 flex flex-col"
          >
            {/* ❌ Close Button */}
            <div className="absolute top-4 right-4 cursor-pointer">
              <motion.div
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <SidebarClose
                  onClick={() => setSidebarOpen(false)}
                  className="w-8 h-8 text-white hover:text-red-400 transition-colors"
                />
              </motion.div>
            </div>

            {/* 🧠 Header */}
            <div className="text-center mt-14 mb-6">
              <h2 className="text-3xl font-extrabold text-white tracking-wide">
                URLIX
              </h2>
              <p className="text-gray-300 text-sm mt-1">
                Smart Short Links for Everyone 🚀
              </p>
            </div>

            {/* 🌐 Links */}
            <ul className="flex flex-col relative px-5 gap-3 text-white font-semibold">
              {[
                { href: "/", label: "Home", icon: <Home className="w-6 h-6" /> },
                { href: "/about", label: "About Urlix", icon: <Info className="w-6 h-6" /> },
                { href: "/feedback", label: "Feedback", icon: <MessageCircle className="w-6 h-6" /> },
                { href: "/shortner", label: "Shortner", icon: <span className="text-xl">🔗</span> },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="list-none text-lg px-4 py-3 rounded-xl bg-white/10 
                  hover:bg-white/20 hover:shadow-md hover:shadow-white/10 
                  transition-all duration-300 cursor-pointer"
                >
                  <Link className="flex items-center gap-3" href={item.href}>
                    <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center">
                      {item.icon}
                    </div>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* ⚡ Footer */}
            <div className="mt-auto mb-8 text-center text-gray-400 text-sm">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
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
