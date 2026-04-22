"use client"
import Link from "next/link"
import { Link2, QrCode, Download, BarChart2, Shuffle, Smartphone, Zap, Shield } from "lucide-react"

const currentFeatures = [
  {
    icon: <Link2 className="w-6 h-6" />,
    title: "URL Shortening",
    desc: "Shorten any long URL into a clean, shareable link stored in our database. Custom slugs supported.",
  },
  {
    icon: <Shuffle className="w-6 h-6" />,
    title: "Random Slug Generator",
    desc: "Auto-generate a unique short slug in one click — no need to think of one yourself.",
  },
  {
    icon: <QrCode className="w-6 h-6" />,
    title: "QR Code Generator",
    desc: "Turn any URL into a high-quality scannable QR code. Download as PNG instantly.",
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Click Analytics",
    desc: "Check exactly how many times your short URL has been clicked, in real time.",
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Download QR Codes",
    desc: "Save your QR codes locally as PNG files with proper padding — print-ready quality.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Fully Responsive",
    desc: "Works seamlessly on mobile, tablet, and desktop. Optimized for all screen sizes.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "No Signup Required",
    desc: "Start shortening and generating QR codes immediately — no account or signup needed.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Fast",
    desc: "All links served over HTTPS with fast redirects. Your data is never sold.",
  },
]

const upcomingFeatures = [
  "User authentication (Google / GitHub OAuth)",
  "Cloud-synced link history across devices",
  "Advanced analytics: device, city, country-level click stats",
  "Custom domains & vanity links",
  "Team accounts with shared link libraries",
  "API access for developers",
  "Bulk URL shortening",
  "Auto-expiring links with custom TTL",
  "Integration with Slack, Zapier, Google Sheets",
  "Automated export & CSV reports",
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#080812] px-4 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d2b] via-[#0f0a20] to-[#080812] -z-10" />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Everything you need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              share smarter
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Urlixa gives you powerful link management tools — for free. Here is what is available today and what is coming next.
          </p>
        </div>

        {/* Current Features */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <h2 className="text-white font-bold text-lg">Available Now</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentFeatures.map((f) => (
              <div
                key={f.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500/20 transition-all">
                  {f.icon}
                </div>
                <h3 className="text-white font-semibold mb-1.5 text-sm">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Features */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <h2 className="text-white font-bold text-lg">Coming Soon</h2>
          </div>
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 grid sm:grid-cols-2 gap-3">
            {upcomingFeatures.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/60 mt-1.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-black text-white mb-2">Ready to get started?</h2>
          <p className="text-gray-400 text-sm mb-6">No signup needed. Start shortening in seconds.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/shortner"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 text-sm hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Shorten a URL →
            </Link>
            <Link
              href="/qrCode-generator"
              className="px-6 py-3 bg-white/8 border border-white/15 hover:bg-white/12 text-white font-semibold rounded-xl transition-all duration-200 text-sm"
            >
              Generate QR Code
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}