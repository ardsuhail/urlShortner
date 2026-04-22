"use client"
import { useState, useEffect } from "react"
import { LoaderCircle, MessageSquare } from "lucide-react"

export default function FeedbackPage() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // null | "success" | "error"
  const [statusMsg, setStatusMsg] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const result = await res.json()
      setLoading(false)

      if (result.success) {
        setStatus("success")
        setStatusMsg(result.message || "Feedback submitted! Thank you.")
        setForm({ name: "", email: "", feedback: "" })
      } else {
        setStatus("error")
        setStatusMsg(result.message || "Something went wrong.")
      }
    } catch (err) {
      setLoading(false)
      setStatus("error")
      setStatusMsg("Server error. Please try again.")
    }
  }

  // Auto clear status after 6s
  useEffect(() => {
    if (!status) return
    const t = setTimeout(() => setStatus(null), 6000)
    return () => clearTimeout(t)
  }, [status])

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#080812] px-4 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d2b] via-[#0f0a20] to-[#080812] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-indigo-600/8 rounded-full blur-3xl -z-10" />

      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-7 h-7 text-indigo-400" />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">Share Your Feedback</h1>
          <p className="text-gray-400 text-sm">
            Help improve <span className="text-indigo-400 font-medium">Urlixa</span> — your thoughts matter
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-gray-600
                           outline-none focus:border-indigo-500 focus:bg-white/10 transition-all duration-200 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-gray-600
                           outline-none focus:border-indigo-500 focus:bg-white/10 transition-all duration-200 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Feedback</label>
              <textarea
                name="feedback"
                value={form.feedback}
                onChange={handleChange}
                required
                rows={5}
                placeholder="What do you think about Urlixa? Any bugs, suggestions, or praise?"
                className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-gray-600
                           outline-none focus:border-indigo-500 focus:bg-white/10 transition-all duration-200 text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200
                         bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed
                         flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              {loading ? (
                <>
                  <LoaderCircle className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Feedback"
              )}
            </button>

            {/* Status messages */}
            {status === "success" && (
              <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
                ✓ {statusMsg}
              </div>
            )}
            {status === "error" && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                ⚠ {statusMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  )
}