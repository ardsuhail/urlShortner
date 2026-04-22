"use client"
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { QRCodeCanvas } from 'qrcode.react'
import { Download, Plus, Grid2X2, Home } from 'lucide-react'

export default function QRResultPage() {
  const router = useRouter()
  const [latestQR, setLatestQR] = useState(null)
  const qrRef = useRef(null)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("qrCode")) || []
    setLatestQR(stored[stored.length - 1] || null)
  }, [])

  const handleDownload = () => {
    const canvas = qrRef.current
    if (!canvas) return
    const url = canvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.href = url
    link.download = "qrcode.png"
    link.click()
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#080812] px-4 py-12">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d2b] via-[#0f0a20] to-[#080812] -z-10" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-3xl -z-10" />

      <div className="w-full max-w-sm">

        <h1 className="text-3xl font-black text-white text-center mb-2">Your QR Code</h1>
        <p className="text-gray-400 text-center text-sm mb-8">Scan or download to share</p>

        {/* QR Card */}
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center mb-4 shadow-2xl shadow-purple-500/10">
          {latestQR ? (
            <QRCodeCanvas
              ref={qrRef}
              value={latestQR.qrcode}
              size={200}
              bgColor="#ffffff"
              fgColor="#0d0d2b"
              level="H"
            />
          ) : (
            <div className="w-[200px] h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">No QR found</p>
            </div>
          )}

          {latestQR && (
            <p className="text-gray-500 text-xs mt-4 break-all text-center max-w-[200px]">
              {latestQR.url}
            </p>
          )}
        </div>

        {/* Download */}
        <button
          onClick={handleDownload}
          className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm
                     transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 
                     flex items-center justify-center gap-2 mb-4"
        >
          <Download className="w-4 h-4" />
          Download PNG
        </button>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => router.push("/")}
            className="py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/8 
                       transition-all duration-200 text-xs font-medium flex flex-col items-center gap-1"
          >
            <Home className="w-4 h-4" />
            Home
          </button>
          <button
            onClick={() => router.push("/qrCode-generator")}
            className="py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/8 
                       transition-all duration-200 text-xs font-medium flex flex-col items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            New QR
          </button>
          <button
            onClick={() => router.push("/my-QrCodes")}
            className="py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/8 
                       transition-all duration-200 text-xs font-medium flex flex-col items-center gap-1"
          >
            <Grid2X2 className="w-4 h-4" />
            My QRs
          </button>
        </div>
      </div>
    </main>
  )
}