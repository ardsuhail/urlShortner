"use client"
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Copy, Check, ExternalLink, MousePointerClick, Plus, BarChart2 } from 'lucide-react'

export default function YourShortUrlPage() {
  const [myLinks, setMyLinks] = useState([])
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)
  const domain = process.env.NEXT_PUBLIC_URL

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem("links")) || []
    setMyLinks(storedLinks)
  }, [])

  const latestLink = myLinks[myLinks.length - 1]
  const shortUrl = latestLink ? `${domain}/${latestLink.shortUrl}` : ""

  const handleCopy = () => {
    if (!shortUrl) return
    navigator.clipboard.writeText(shortUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#080812] px-4 py-12">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d2b] via-[#0f0a20] to-[#080812] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-green-600/8 rounded-full blur-3xl -z-10" />

      <div className="w-full max-w-lg">

        {/* Success icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-green-500/15 border border-green-500/25 flex items-center justify-center">
            <Check className="w-7 h-7 text-green-400" />
          </div>
        </div>

        <h1 className="text-3xl font-black text-white text-center mb-2">Link Created!</h1>
        <p className="text-gray-400 text-center text-sm mb-8">Your short URL is ready to share</p>

        {/* Short URL Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-4 backdrop-blur-sm">

          <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Your Short URL</label>

          {/* URL Copy Row */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 px-4 py-3 rounded-xl bg-white/8 border border-indigo-500/30 text-indigo-300 font-mono text-sm truncate">
              {shortUrl || "Loading..."}
            </div>
            <button
              onClick={handleCopy}
              className={`p-3 rounded-xl border transition-all duration-200 flex items-center gap-2
                ${copied
                  ? "bg-green-500/15 border-green-500/30 text-green-400"
                  : "bg-white/8 border-white/15 text-gray-400 hover:text-white hover:bg-white/12"
                }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Original URL */}
          {latestLink && (
            <div className="flex items-start gap-2 text-sm">
              <span className="text-gray-600 whitespace-nowrap mt-0.5">Original:</span>
              <a
                href={latestLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors truncate flex items-center gap-1"
              >
                {latestLink.url}
                <ExternalLink className="w-3 h-3 flex-shrink-0" />
              </a>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/ClickCounter">
            <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/8 hover:text-white transition-all duration-200 text-sm font-medium flex items-center justify-center gap-2">
              <BarChart2 className="w-4 h-4" />
              Click Stats
            </button>
          </Link>
          <Link href="/shortner">
            <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-200 text-sm font-medium flex items-center justify-center gap-2">
              <Plus className="w-4 h-4" />
              Shorten More
            </button>
          </Link>
          <Link href="/my-links">
            <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/8 hover:text-white transition-all duration-200 text-sm font-medium flex items-center justify-center gap-2">
              <MousePointerClick className="w-4 h-4" />
              My Links
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}