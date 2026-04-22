"use client"
import { useState } from "react"
import { LoaderCircle, MousePointerClick } from "lucide-react"

// Smart parser - handles full URL, with/without https, or just slug
const extractSlug = (input) => {
  const trimmed = input.trim()
  try {
    // If it's a valid URL (with or without protocol)
    const withProtocol = trimmed.startsWith("http") ? trimmed : `https://${trimmed}`
    const urlObj = new URL(withProtocol)
    // pathname gives "/neat-web-384" -> strip the slash
    const slug = urlObj.pathname.replace(/^\/+/, "")
    return slug || trimmed
  } catch {
    // Not a URL — treat as raw slug
    return trimmed
  }
}

export default function Page() {
  const [shortUrl, setShortUrl] = useState("")
  const [clicks, setClicks] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleCheck = async () => {
    if (!shortUrl.trim()) {
      setError("Please enter a short URL or slug")
      setClicks(null)
      return
    }

    const slug = extractSlug(shortUrl)
    setLoading(true)
    setError("")
    setClicks(null)

    try {
      const res = await fetch("/api/clicks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shortUrl: slug }),
      })
      const result = await res.json()

      if (result.success) {
        setClicks(result.clicks)
      } else {
        setError("Short URL not found. Please check and try again.")
      }
    } catch {
      setError("Server error. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#080812] px-4 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d2b] via-[#0f0a20] to-[#080812] -z-10" />
   

      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-yellow-500/15 border border-yellow-500/25 flex items-center justify-center mx-auto mb-4">
            <MousePointerClick className="w-7 h-7 text-yellow-400" />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">Click Counter</h1>
          <p className="text-gray-400 text-sm">
            Check how many times your short URL has been clicked
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">

          <label className="block text-sm text-gray-400 mb-2">
            Short URL or Slug
          </label>
          <input
            value={shortUrl}
            onChange={(e) => {
              setShortUrl(e.target.value)
              if (error) setError("")
              if (clicks !== null) setClicks(null)
            }}
            onKeyDown={(e) => e.key === "Enter" && handleCheck()}
            type="text"
            placeholder="neat-web-384 or https://urlixa.com/neat-web-384"
            className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-gray-600
                       outline-none focus:border-yellow-500 focus:bg-white/10 transition-all duration-200 text-sm mb-4"
          />

          <button
            onClick={handleCheck}
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200
                       bg-yellow-500 hover:bg-yellow-400 text-black disabled:opacity-60 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <LoaderCircle className="w-4 h-4 animate-spin" />
                Checking...
              </>
            ) : (
              "Check Clicks"
            )}
          </button>

          {/* Result */}
          {clicks !== null && (
            <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
              <p className="text-green-400 text-sm mb-1">Total Clicks</p>
              <p className="text-4xl font-black text-white">{clicks}</p>
            </div>
          )}

          {error && (
            <p className="text-red-400 text-sm mt-4 flex items-center gap-2">
              <span>⚠</span> {error}
            </p>
          )}
        </div>

        {/* Hint */}
        <p className="text-gray-600 text-xs text-center mt-4">
          Works with slugs like <span className="text-gray-500 font-mono">neat-web-384</span> or full URLs
        </p>
      </div>
    </main>
  )
}