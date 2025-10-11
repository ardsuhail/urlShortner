"use client"
import React from "react";
import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  return (
    <nav className="relative w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#0f0c29]/90 via-[#302b63]/80 to-[#24243e]/90 border-b border-white/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#00B0F5] text-transparent bg-clip-text hover:scale-110 transition-transform duration-300 drop-shadow-lg"
        >
          Urlixa
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[1.1rem] font-medium text-gray-200">
          {[
            { name: "Home", href: "/" },
            { name: "Shortener", href: "/shortner" },
            { name: "About", href: "/about" },
            { name: "Feedback", href: "/feedback" },
          ].map((item) => (
            <li key={item.name} className="relative group cursor-pointer">
              <Link href={item.href} className="hover:text-[#00F5A0] transition-colors duration-300">
                {item.name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#00B0F5] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => setOpen(!open)} onBlur={()=>{
            setTimeout(() => {
              setOpen(false)
            }, 500);
          }}
          className="relative group right-12 cursor-pointer flex gap-2 items-center justify-center
                     px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600
                     text-white font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Dashboard <span className="text-white">{open ? <ChevronUp /> : <ChevronDown className="animate-bounce" />}</span>
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-15 top-16 z-50">
            <ul
              className="flex flex-col gap-2 bg-white/90 backdrop-blur-md shadow-2xl
                 items-start w-44 py-4 rounded-2xl border border-white/30
                 transition-all duration-300 ease-in-out animate-slideDown"
            >
              <li className="w-full">
                <Link
                  href="/shortner"
                  className="block w-full text-lg text-gray-800 font-medium px-3 py-2 rounded-lg
                     hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500
                     hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Shortner
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="/ClickCounter"
                  className="block w-full text-lg text-gray-800 font-medium px-3 py-2 rounded-lg
                     hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500
                     hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Links Activity
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="/my-links"
                  className="block w-full text-lg text-gray-800 font-medium px-3 py-2 rounded-lg
                     hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500
                     hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Your Links
                </Link>
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
