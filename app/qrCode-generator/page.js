"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LoaderCircle, QrCode } from 'lucide-react'

export default function QRGeneratorPage() {
  const [url, setUrl] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleGenerate = () => {
    if (!url.trim()) {
      setError("Please enter a URL")
      return
    }

    setLoading(true)
    setError("")

    const newQrCode = { qrcode: url, url }
    const existingQrCodes = JSON.parse(localStorage.getItem("qrCode")) || []
    const alreadyExists = existingQrCodes.some((qr) => qr.url === url)

    if (!alreadyExists) {
      existingQrCodes.push(newQrCode)
      localStorage.setItem("qrCode", JSON.stringify(existingQrCodes))
    }

    router.push("/qrCode-generator/result")
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#080812] px-4 py-12">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d2b] via-[#0f0a20] to-[#080812] -z-10" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-3xl -z-10" />

      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center mx-auto mb-4">
            <QrCode className="w-7 h-7 text-purple-400" />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">QR Code Generator</h1>
          <p className="text-gray-400 text-sm">Enter any URL to generate a scannable QR code</p>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">

          <label className="block text-sm text-gray-400 mb-2">Enter URL</label>
          <input
            value={url}
            onChange={(e) => {
              setUrl(e.target.value)
              if (error) setError("")
            }}
            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            type="url"
            autoComplete="on"
            placeholder="https://example.com"
            className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-gray-600
                       outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-200 text-sm mb-4"
          />

          {error && (
            <p className="text-red-400 text-sm mb-4 flex items-center gap-2">
              <span>⚠</span> {error}
            </p>
          )}

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200
                       bg-purple-600 hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed
                       hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <LoaderCircle className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate QR Code"
            )}
          </button>
        </div>

        {/* Info */}
        <div className="mt-6 bg-white/3 border border-white/8 rounded-xl p-4">
          <p className="text-gray-500 text-xs leading-relaxed">
            <span className="text-gray-400 font-medium">Tip:</span> You can generate QR codes for any URL — websites, social media profiles, payment links, or even shortened Urlixa links.
          </p>
        </div>
      </div>
    </main>
  )
}