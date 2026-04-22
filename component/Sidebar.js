"use client"
import Link from "next/link"
import { SidebarClose, Home, Info, MessageCircle, Link2, QrCode, BarChart2, Grid2X2 } from "lucide-react"
import { useSidebarContext } from "./Context"

const links = [
  { href: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
  { href: "/shortner", label: "Shortener", icon: <Link2 className="w-5 h-5" /> },
  { href: "/ClickCounter", label: "Link Activity", icon: <BarChart2 className="w-5 h-5" /> },
  { href: "/my-links", label: "My Links", icon: <Grid2X2 className="w-5 h-5" /> },
  { href: "/qrCode-generator", label: "QR Generator", icon: <QrCode className="w-5 h-5" /> },
  { href: "/my-QrCodes", label: "My QR Codes", icon: <Grid2X2 className="w-5 h-5" /> },
  { href: "/about-urlixa", label: "About", icon: <Info className="w-5 h-5" /> },
  { href: "/feedback", label: "Feedback", icon: <MessageCircle className="w-5 h-5" /> },
]

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useSidebarContext()

  if (!sidebarOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={() => setSidebarOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 left-0 h-screen w-72 bg-[#0a0a1a] border-r border-white/10 z-50 flex flex-col shadow-2xl
                      translate-x-0 transition-transform duration-300">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/8">
          <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Urlixa
          </span>
          <button onClick={() => setSidebarOpen(false)} className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/8 transition-all">
            <SidebarClose className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/8 transition-all duration-150 text-sm font-medium"
            >
              <span className="text-gray-600">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-white/8">
          <p className="text-gray-600 text-xs">Made with ❤️ by Suhail</p>
        </div>
      </div>
    </>
  )
}