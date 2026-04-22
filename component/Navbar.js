"use client"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, ChevronUp, SidebarOpen, Link2, BarChart2, QrCode, Grid2X2 } from "lucide-react"
import { useSidebarContext } from "./Context"

const dashboardLinks = [
  { href: "/shortner", label: "Shortener", icon: <Link2 className="w-4 h-4" /> },
  { href: "/ClickCounter", label: "Link Activity", icon: <BarChart2 className="w-4 h-4" /> },
  { href: "/my-links", label: "My Links", icon: <Grid2X2 className="w-4 h-4" /> },
  { href: "/qrCode-generator", label: "QR Generator", icon: <QrCode className="w-4 h-4" /> },
  { href: "/my-QrCodes", label: "My QR Codes", icon: <Grid2X2 className="w-4 h-4" /> },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shortener", href: "/shortner" },
  { name: "About", href: "/about-urlixa" },
  { name: "Features", href: "/features" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { setSidebarOpen } = useSidebarContext()

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080812]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* Mobile sidebar toggle */}
        <button onClick={() => setSidebarOpen(true)} className="md:hidden text-gray-400 hover:text-white transition-colors">
          <SidebarOpen className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 hover:opacity-80 transition-opacity">
          Urlixa
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/8 transition-all duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dashboard Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            onBlur={() => setTimeout(() => setOpen(false), 200)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 
                       text-white text-sm font-semibold transition-all duration-200"
          >
            Dashboard
            {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {open && (
            <div className="absolute right-0 top-12 w-48 bg-[#0f0f1e] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50">
              {dashboardLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-150"
                >
                  <span className="text-gray-500">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}