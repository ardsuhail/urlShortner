"use client"
import { useState, useEffect } from "react"
import { QRCodeCanvas } from "qrcode.react"
import { Download, Pencil, Check, X, Trash2, QrCode } from "lucide-react"
import Link from "next/link"

export default function MyQRCodesPage() {
  const [qrCodes, setQrCodes] = useState([])
  const [titles, setTitles] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)
  const [editValue, setEditValue] = useState("")

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("qrCode")) || []
    const storedTitles = JSON.parse(localStorage.getItem("qrTitles")) || []
    setQrCodes(stored)
    setTitles(stored.map((_, i) => storedTitles[i] || `QR Code ${i + 1}`))
  }, [])

  const saveTitles = (updated) => {
    setTitles(updated)
    localStorage.setItem("qrTitles", JSON.stringify(updated))
  }

  const handleEditStart = (index) => {
    setEditingIndex(index)
    setEditValue(titles[index])
  }

  const handleEditSave = (index) => {
    const updated = [...titles]
    updated[index] = editValue.trim() || `QR Code ${index + 1}`
    saveTitles(updated)
    setEditingIndex(null)
  }

  const handleDelete = (index) => {
    const updatedCodes = qrCodes.filter((_, i) => i !== index)
    const updatedTitles = titles.filter((_, i) => i !== index)
    localStorage.setItem("qrCode", JSON.stringify(updatedCodes))
    saveTitles(updatedTitles)
    setQrCodes(updatedCodes)
  }

  const handleDownload = (index) => {
    const canvas = document.getElementById(`qr-canvas-${index}`)
    if (!canvas) return

    const padding = 24
    const size = canvas.width + padding * 2
    const paddedCanvas = document.createElement("canvas")
    paddedCanvas.width = size
    paddedCanvas.height = size
    const ctx = paddedCanvas.getContext("2d")
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, size, size)
    ctx.drawImage(canvas, padding, padding)

    const link = document.createElement("a")
    link.href = paddedCanvas.toDataURL("image/png")
    link.download = `${titles[index] || "qrcode"}.png`
    link.click()
  }

  return (
    <main className="min-h-screen bg-[#080812] px-4 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d2b] via-[#0f0a20] to-[#080812] -z-10" />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-white">My QR Codes</h1>
            <p className="text-gray-500 text-sm mt-1">{qrCodes.length} QR code{qrCodes.length !== 1 ? "s" : ""} generated</p>
          </div>
          <Link href="/qrCode-generator">
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-xl transition-all duration-200">
              + New QR
            </button>
          </Link>
        </div>

        {/* Empty State */}
        {qrCodes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <QrCode className="w-7 h-7 text-gray-600" />
            </div>
            <p className="text-gray-400 font-medium mb-1">No QR codes yet</p>
            <p className="text-gray-600 text-sm mb-6">Generate your first QR code to see it here</p>
            <Link href="/qrCode-generator">
              <button className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-xl transition-all">
                Generate QR Code
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {qrCodes.map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-4 hover:bg-white/8 transition-all duration-200 group">

                {/* QR Code */}
                <div className="flex items-center justify-center bg-white rounded-xl p-4">
                  <QRCodeCanvas
                    id={`qr-canvas-${index}`}
                    value={item.qrcode}
                    size={140}
                    bgColor="#ffffff"
                    fgColor="#0d0d2b"
                    level="H"
                  />
                </div>

                {/* Title Edit */}
                <div className="flex items-center gap-2">
                  {editingIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleEditSave(index)}
                        autoFocus
                        className="flex-1 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm outline-none focus:border-purple-500 transition-colors"
                      />
                      <button onClick={() => handleEditSave(index)} className="p-1.5 rounded-lg text-green-400 hover:bg-green-500/10 transition-all">
                        <Check className="w-4 h-4" />
                      </button>
                      <button onClick={() => setEditingIndex(null)} className="p-1.5 rounded-lg text-gray-500 hover:bg-white/10 transition-all">
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="flex-1 text-white text-sm font-medium truncate">{titles[index]}</span>
                      <button onClick={() => handleEditStart(index)} className="p-1.5 rounded-lg text-gray-600 hover:text-gray-300 hover:bg-white/8 transition-all opacity-0 group-hover:opacity-100">
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}
                </div>

                {/* URL */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 text-xs truncate hover:text-gray-300 transition-colors"
                >
                  {item.url}
                </a>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDownload(index)}
                    className="flex-1 py-2 rounded-lg bg-purple-600/80 hover:bg-purple-600 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}