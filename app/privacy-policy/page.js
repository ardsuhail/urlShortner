"use client"
import Link from "next/link"

const sections = [
  {
    title: "1. Information We Collect",
    content: "We collect minimal data: shortened URLs you create, click counts on those URLs, and email addresses if you subscribe to updates. We do not collect personal identification information without your consent.",
  },
  {
    title: "2. How We Use Your Data",
    content: "Your data is used solely to provide the service — storing short URLs, tracking click counts, and sending update emails to subscribers. We never sell or share your data with third parties.",
  },
  {
    title: "3. Local Storage",
    content: "Urlixa stores your generated links and QR codes in your browser's localStorage. This data stays on your device and is not uploaded to our servers unless required for the core service.",
  },
  {
    title: "4. Cookies",
    content: "We may use minimal cookies for performance and analytics. No advertising or tracking cookies are used. You can clear cookies at any time through your browser settings.",
  },
  {
    title: "5. Third-Party Services",
    content: "We use MongoDB for database storage and may use analytics tools. These services have their own privacy policies. We recommend reviewing them independently.",
  },
  {
    title: "6. Data Security",
    content: "All data is transmitted over HTTPS. We take reasonable security measures to protect your information, though no system is 100% secure.",
  },
  {
    title: "7. Your Rights",
    content: "You can request deletion of any data associated with your email by contacting us. Since most data is stored locally on your device, you can clear it anytime via your browser.",
  },
  {
    title: "8. Policy Updates",
    content: "We may update this policy periodically. Continued use of Urlixa after changes implies acceptance of the updated policy.",
  },
  {
    title: "9. Contact",
    content: null,
    contact: true,
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#080812] px-4 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d2b] via-[#0f0a20] to-[#080812] -z-10" />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: {new Date().getFullYear()}</p>
        </div>

        <div className="space-y-4">
          {sections.map((section, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-base font-bold text-white mb-2">{section.title}</h2>
              {section.contact ? (
                <p className="text-gray-400 text-sm leading-relaxed">
                  Questions about our privacy practices? Email us at{" "}
                  <a href="mailto:support@urlixa.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    support@urlixa.com
                  </a>
                </p>
              ) : (
                <p className="text-gray-400 text-sm leading-relaxed">{section.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}