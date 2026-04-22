"use client"
import Link from "next/link"

const sections = [
  {
    title: "What is Urlixa?",
    content: `Urlixa is a fast, modern URL shortener and QR code generator. Whether you're a content creator, student, or professional — Urlixa helps you share links cleanly and track their performance. No clutter, no noise.`,
  },
  {
    title: "Why Urlixa?",
    list: [
      { label: "Custom Short URLs", desc: "Create branded slugs that represent your identity." },
      { label: "Click Analytics", desc: "See exactly how many times your link was clicked." },
      { label: "QR Code Generator", desc: "Turn any URL into a downloadable QR code instantly." },
      { label: "Fast & Reliable", desc: "99.9% uptime with lightning-fast redirects." },
      { label: "No Account Needed", desc: "Start shortening immediately — no signup required." },
    ],
  },
  {
    title: "About the Creator",
    content: `Urlixa is built by Suhail, a BCA student and full-stack developer. I built Urlixa to solve a real problem — messy, unreadable URLs. Follow me on Instagram`,
    instagram: true,
  },
  {
    title: "Future Vision",
    content: `Upcoming features include user authentication, cloud-synced link history, device & location analytics, and a full link management dashboard. Urlixa is just getting started.`,
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#080812] px-4 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d2b] via-[#0f0a20] to-[#080812] -z-10" />

      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-3">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Urlixa</span>
          </h1>
          <p className="text-gray-400 text-sm">The story behind the tool</p>
        </div>

        <div className="space-y-4">
          {sections.map((section, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">{section.title}</h2>

              {section.list ? (
                <ul className="space-y-3">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-400 text-sm">
                        <span className="text-gray-200 font-medium">{item.label}: </span>
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-sm leading-relaxed">
                  {section.content}
                  {section.instagram && (
                    <>
                      {" "}
                      <Link href="https://instagram.com/ardsuhail" target="_blank" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        @ardsuhail
                      </Link>
                      {" "}and check my website at{" "}
                      <Link href="https://www.ardsuhail.com" target="_blank" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        ardsuhail.com
                      </Link>
                    </>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/shortner"
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Start Shortening →
          </Link>
        </div>
      </div>
    </main>
  )
}