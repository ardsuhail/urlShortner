"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Copy, Check, Trash2, BarChart2, ExternalLink, LinkIcon } from "lucide-react"

export default function MyLinksPage() {
  const [myLinks, setMyLinks] = useState([])
  const [copiedIndex, setCopiedIndex] = useState(null)
  const domain = process.env.NEXT_PUBLIC_URL

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem("links")) || []
    setMyLinks(storedLinks)
  }, [])

  const handleCopy = (link, index) => {
    navigator.clipboard.writeText(`${domain}/${link.shortUrl}`)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const handleDelete = (index) => {
    const updated = myLinks.filter((_, i) => i !== index)
    localStorage.setItem("links", JSON.stringify(updated))
    setMyLinks(updated)
  }

  return (
    <main className="min-h-screen bg-[#080812] px-4 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d2b] via-[#0f0a20] to-[#080812] -z-10" />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-white">My Links</h1>
            <p className="text-gray-500 text-sm mt-1">{myLinks.length} link{myLinks.length !== 1 ? "s" : ""} created</p>
          </div>
          <Link
            href="/shortner"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl transition-all duration-200"
          >
            + New Link
          </Link>
        </div>

        {/* Empty State */}
        {myLinks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <LinkIcon className="w-7 h-7 text-gray-600" />
            </div>
            <p className="text-gray-400 font-medium mb-1">No links yet</p>
            <p className="text-gray-600 text-sm mb-6">Shorten your first URL to see it here</p>
            <Link href="/shortner">
              <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl transition-all">
                Shorten a URL
              </button>
            </Link>
          </div>
        ) : (
          // Desktop Table
          <>
            <div className="hidden sm:block overflow-hidden rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left px-5 py-3.5 text-gray-500 font-medium w-10">#</th>
                    <th className="text-left px-5 py-3.5 text-gray-500 font-medium">Short URL</th>
                    <th className="text-left px-5 py-3.5 text-gray-500 font-medium">Original URL</th>
                    <th className="text-right px-5 py-3.5 text-gray-500 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myLinks.map((link, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/3 transition-colors group">
                      <td className="px-5 py-4 text-gray-600">{index + 1}</td>
                      <td className="px-5 py-4">
                        <a
                          href={`${domain}/${link.shortUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-400 hover:text-indigo-300 font-mono flex items-center gap-1"
                        >
                          {domain}/{link.shortUrl}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </td>
                      <td className="px-5 py-4 text-gray-400 max-w-xs truncate">{link.url}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleCopy(link, index)}
                            title="Copy"
                            className={`p-2 rounded-lg transition-all duration-200 ${
                              copiedIndex === index
                                ? "bg-green-500/15 text-green-400"
                                : "bg-white/5 text-gray-500 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            {copiedIndex === index ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                          <Link href="/ClickCounter">
                            <button title="Click stats" className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-200">
                              <BarChart2 className="w-4 h-4" />
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(index)}
                            title="Delete"
                            className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="sm:hidden space-y-3">
              {myLinks.map((link, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-2">
                    <a
                      href={`${domain}/${link.shortUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 font-mono text-sm"
                    >
                      {domain}/{link.shortUrl}
                    </a>
                    <span className="text-gray-600 text-xs">#{index + 1}</span>
                  </div>
                  <p className="text-gray-500 text-xs truncate mb-3">{link.url}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopy(link, index)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-all ${
                        copiedIndex === index
                          ? "bg-green-500/15 text-green-400"
                          : "bg-white/8 text-gray-400 hover:text-white"
                      }`}
                    >
                      {copiedIndex === index ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {copiedIndex === index ? "Copied" : "Copy"}
                    </button>
                    <Link href="/ClickCounter" className="flex-1">
                      <button className="w-full py-1.5 rounded-lg bg-white/8 text-gray-400 hover:text-white text-xs font-medium flex items-center justify-center gap-1 transition-all">
                        <BarChart2 className="w-3 h-3" /> Stats
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(index)}
                      className="py-1.5 px-3 rounded-lg bg-white/8 text-gray-500 hover:text-red-400 transition-all"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}