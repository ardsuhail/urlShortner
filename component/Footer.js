"use client"
import Link from "next/link"

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/ardsuhail",
    icon: "/instagram.png",
    handle: "@ardsuhail",
  },
  {
    label: "GitHub",
    href: "https://github.com/suhail134",
    icon: "/github.png",
    handle: "suhail134",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/suhail-ahmed-566a60315/",
    icon: "/linkedin.webp",
    handle: "Suhail Ahmed",
  },
  {
    label: "Website",
    href: "https://www.ardsuhail.com",
    icon: null,
    handle: "ardsuhail.com",
  },
]

const supportLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Features", href: "/features" },
  { label: "Feedback", href: "/feedback" },
  { label: "About", href: "/about-urlixa" },
]

export default function Footer() {
  return (
    <footer className="bg-[#080812] border-t border-white/8 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-10 grid sm:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <Link href="/" className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 block mb-3">
            Urlixa
          </Link>
          <p className="text-sm leading-relaxed text-gray-500">
            Fast, reliable URL shortener and QR code generator. Built by Suhail.
          </p>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4">Support</h3>
          <ul className="space-y-2">
            {supportLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4">Connect</h3>
          <ul className="space-y-3">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 group"
                >
                  {s.icon ? (
                    <img src={s.icon} alt={s.label} className="w-5 h-5 rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-400">🌐</span>
                  )}
                  <span className="text-sm text-gray-500 group-hover:text-white transition-colors duration-200">
                    {s.handle}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8 py-4 text-center">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Urlixa. All rights reserved.
        </p>
      </div>
    </footer>
  )
}