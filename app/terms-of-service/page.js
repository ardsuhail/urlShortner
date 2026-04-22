"use client"
import Link from "next/link"

const terms = [
  {
    title: "1. Acceptance of Terms",
    content: "By using Urlixa, you agree to these Terms of Service. If you disagree, please stop using the platform. These terms govern all use of Urlixa's website, tools, and services.",
  },
  {
    title: "2. Eligibility",
    content: "You must be at least 13 years old to use Urlixa. By using the service, you represent that you meet this requirement.",
  },
  {
    title: "3. Permitted Use",
    list: [
      "Generate short URLs and QR codes for personal or business use.",
      "Do not create links for spamming, phishing, or distributing malicious content.",
      "Do not impersonate others or use false identities.",
      "Do not use automated tools to abuse the service.",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: "All content, branding, design, and source code on Urlixa is owned by its creator Suhail. You may not copy, reproduce, or distribute any material without written permission.",
  },
  {
    title: "5. Data & Privacy",
    content: null,
    privacy: true,
  },
  {
    title: "6. Limitation of Liability",
    content: "Urlixa is provided \"as is\" without warranties. We are not liable for damages, data loss, or downtime resulting from service use.",
  },
  {
    title: "7. Termination",
    content: "We reserve the right to suspend or terminate access for violations or activity harmful to the platform or its users.",
  },
  {
    title: "8. Updates to Terms",
    content: "These terms may be updated periodically. Continued use after changes implies acceptance of the updated terms.",
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
          <h1 className="text-4xl font-black text-white mb-3">Terms of Service</h1>
          <p className="text-gray-500 text-sm">Last updated: {new Date().getFullYear()}</p>
        </div>

        <div className="space-y-4">
          {terms.map((section, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-base font-bold text-white mb-2">{section.title}</h2>

              {section.list ? (
                <ul className="space-y-2">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : section.privacy ? (
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your data is handled per our{" "}
                  <Link href="/privacy-policy" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    Privacy Policy
                  </Link>
                  . We never sell your information.
                </p>
              ) : section.contact ? (
                <p className="text-gray-400 text-sm leading-relaxed">
                  Questions? Email{" "}
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