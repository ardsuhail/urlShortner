"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import ClickCount from '@/component/ClickCount'
import { LoaderCircle } from 'lucide-react'
import { motion } from "framer-motion";
import Router from 'next/router'
import { useRouter } from 'next/navigation'
const Page = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [Generated, setGenerated] = useState("")
  const [error, setError] = useState("")
  const [loading, setloading] = useState(false)
  const router = useRouter()
  const Generate = () => {
    if (!url.trim()) {
      setError("Please write your  Orignal URL");

      return; // yaha hi ruk jao, request mat bhejo
    } else if (!shortUrl.trim()) {
      setError("Please write your short URL");

      return;
    }
    setloading(true)
    // const fullShortUrl = `${domain}/${shortUrl}`;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shortUrl": shortUrl,
      "error": error
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const newLink = { shortUrl: shortUrl, url: url }
          const existingLinks = JSON.parse(localStorage.getItem("links")) || [];
          const alreadyExists = existingLinks.some((link) => link.shortUrl === shortUrl);
          if (!alreadyExists) {
            existingLinks.push(newLink);
            localStorage.setItem("links", JSON.stringify(existingLinks));
          }
          // existingLinks.push(newLink);
          router.push(`/your-shortUrl`)
          setGenerated(`${process.env.NEXT_PUBLIC_URL}/${shortUrl}`)
          // alert(result.message)
          // setUrl('')
          // setShortUrl('')
          setError("")
          console.log(result)
        }

      })
      .catch((error) => console.error(error));
  }
  const domain = process.env.NEXT_PUBLIC_URL

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 p-4 sm:p-6 relative overflow-hidden">
        {/* 🔵 Animated gradient orbs for background */}
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl top-10 left-10 -z-10"
          animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[50rem]  h-[50rem] sm:w-[30rem] sm:h-[30rem] bg-pink-500/20 rounded-full blur-3xl bottom-20 right-10 -z-10"
          animate={{ y: [0, -25, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl p-2 sm:p-8 rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row gap-6 border border-white/20"
        >



          {/* 🧩 Right Form */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-1 bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-yellow-400/10 backdrop-blur-md px-2 sm:px-6 py-6  rounded-xl shadow-lg"
          >
            <h2 className="text-[19px] flex justify-center items-center sm:text-2xl w-full font-bold text-white mb-6">
              Paste the URL to be shortened
            </h2>

            <div className="space-y-4">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                id="url"
                name="url"
                placeholder="Enter Your Long(Original) URL"
                className="w-[100%] px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              />
              <label
                htmlFor="shorturl"
                className="flex items-center w-full bg-white/20 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-purple-400 transition-all"
              >
                <span className="pl-3 py-2 text-gray-300 bg-white/10  select-none">
                  {domain}/
                </span>
                <input
                  value={shortUrl}
                  onChange={(e) => setShortUrl(e.target.value)}
                  type="text"
                  id="shorturl"
                  name="shortUrl"
                  placeholder="write-your-short-url"
                  className="flex-1 py-2  bg-white/10 text-white placeholder-gray-300 focus:outline-none"
                />
              </label>
            </div>

            <motion.button
              whileHover={!loading ? { scale: 1.05 } : {}}
              whileTap={!loading ? { scale: 0.95 } : {}}
              onClick={Generate}
              disabled={loading}
              className={`mt-6 w-full py-3 cursor-pointer rounded-xl text-white font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${loading
                ? "bg-gray-400 opacity-80 cursor-not-allowed"
                : "bg-gradient-to-r from-green-400 via-slate-600 to-purple-500 hover:shadow-2xl"
                }`}
            >
              {loading ? (
                <>
                  <LoaderCircle className="w-5 h-5 cursor-pointer animate-spin text-white" />
                  <span>Generating...</span>
                </>
              ) : (
                "Generate"
              )}
            </motion.button>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-center mt-4 font-medium"
              >
                ❌ {error}
              </motion.p>
            )}
          </motion.div>
          {/* 📘 Left Guide */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-1 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-yellow-500/20 p-6 rounded-xl shadow-lg text-left"
          >
            <h3 className="text-xl font-bold mb-3 text-white">How to use:</h3>
            <ul className="list-disc ml-5 space-y-2 text-sm text-gray-200">
              <li><strong>Original URL:</strong> Paste your full link here (e.g., {domain}).</li>
              <li><strong>Short URL:</strong> Write anything you want as a custom short link. Example: &quot;my-link&quot;.</li>
              <li>The final short URL will look like: <span className="text-purple-300 font-medium">{domain}/your-short-url</span>.</li>
              <li>Click <strong>Generate</strong> and your link will be ready to copy and share anywhere.</li>
              <li>You can create multiple short links and they will be stored for easy access later.</li>
              <li>Feel free to use letters, numbers, or hyphens for your short URL.</li>
            </ul>
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">
              This guide ensures you never get confused about where to paste the original link or what to write for your custom short URL.
            </p>
          </motion.div>
        </motion.div>
      </main>



    </>
  )
}

export default Page
