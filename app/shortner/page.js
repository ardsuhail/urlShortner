"use client"
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { LoaderCircle, Shuffle, ChevronDown, ChevronUp } from 'lucide-react'

// Random short URL generator
const generateRandomSlug = () => {
  const adjectives = ["swift", "clean", "cool", "neat", "tiny", "mini", "fast", "slim"]
  const nouns = ["link", "url", "path", "web", "site", "page", "hub", "go"]
  const randomNum = Math.floor(Math.random() * 900) + 100
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]
  return `${adj}-${noun}-${randomNum}`
}

export default function ShortnerPage() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [useCustom, setUseCustom] = useState(false)
  const focusRef = useRef(null)
  const router = useRouter()
  const domain = process.env.NEXT_PUBLIC_URL

  const handleGenerate = async () => {
    if (!url.trim()) {
      setError("Please enter the original URL")
      return
    }

    // Auto-generate slug if user didn't provide one
    const finalShortUrl = shortUrl.trim() || generateRandomSlug()

    if (!shortUrl.trim()) {
      setShortUrl(finalShortUrl)
    }

    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shortUrl: finalShortUrl }),
      })
      const result = await res.json()

      if (result.success) {
        const newLink = { shortUrl: finalShortUrl, url }
        const existingLinks = JSON.parse(localStorage.getItem("links")) || []
        const alreadyExists = existingLinks.some((link) => link.shortUrl === finalShortUrl)
        if (!alreadyExists) {
          existingLinks.push(newLink)
          localStorage.setItem("links", JSON.stringify(existingLinks))
        }
        router.push("/shortner/your-shortUrl")
      } else {
        setError(result.message || "Something went wrong")
        setLoading(false)
        setUrl("")
        setShortUrl("")
      }
    } catch {
      setError("Network error. Please try again.")
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#080812] px-4 py-12">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d2b] via-[#0f0a20] to-[#080812] -z-10" />
     

      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">URL Shortener</h1>
          <p className="text-gray-400 text-sm">Paste your long URL — we will handle the rest</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">

          {/* Original URL Input */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-2">Original URL</label>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              type="url"
              placeholder="https://example.com/very-long-url..."
              className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-gray-600 
                         outline-none focus:border-indigo-500 focus:bg-white/10 transition-all duration-200 text-sm"
            />
          </div>

          {/* Short URL Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm text-gray-400">Short URL</label>
              <button
                onClick={() => setUseCustom(!useCustom)}
                className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
              >
                {useCustom ? "Use random" : "Customize"}
                {useCustom ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
            </div>

            {useCustom ? (
              // Custom slug input
              <div className="flex items-center rounded-xl bg-white/8 border border-white/15 focus-within:border-indigo-500 transition-all duration-200 overflow-hidden">
                <span
                  onClick={() => focusRef.current?.focus()}
                  className="px-3 py-3 text-gray-500 text-sm whitespace-nowrap border-r border-white/10 select-none cursor-text bg-white/5"
                >
                  {domain}/
                </span>
                <input
                  ref={focusRef}
                  value={shortUrl}
                  onChange={(e) => setShortUrl(e.target.value)}
                  type="text"
                  placeholder="my-custom-slug"
                  className="flex-1 px-3 py-3 bg-transparent text-white placeholder-gray-600 outline-none text-sm"
                />
              </div>
            ) : (
              // Random slug display + regenerate
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center rounded-xl bg-white/5 border border-white/10 px-3 py-3 gap-2">
                  <span className="text-gray-500 text-sm">{domain}/</span>
                  <span className="text-gray-300 text-sm font-mono">
                    {shortUrl || <span className="text-gray-600 italic">auto-generated on submit</span>}
                  </span>
                </div>
                <button
                  onClick={() => setShortUrl(generateRandomSlug())}
                  title="Generate random slug"
                  className="p-3 rounded-xl bg-white/8 border border-white/15 text-gray-400 hover:text-white hover:bg-white/12 transition-all duration-200"
                >
                  <Shuffle className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm mb-4 flex items-center gap-2">
              <span>⚠</span> {error}
            </p>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200
                       bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed
                       hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <LoaderCircle className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Short URL"
            )}
          </button>
        </div>

        {/* How it works */}
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            { step: "1", text: "Paste your long URL" },
            { step: "2", text: "Customize or auto-generate slug" },
            { step: "3", text: "Copy & share your link" },
          ].map((item) => (
            <div key={item.step} className="bg-white/3 border border-white/8 rounded-xl p-3">
              <div className="w-6 h-6 rounded-full bg-indigo-600/30 text-indigo-400 text-xs font-bold flex items-center justify-center mx-auto mb-2">
                {item.step}
              </div>
              <p className="text-gray-500 text-xs">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}