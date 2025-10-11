"use client"
import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

const Page = () => {
//   const [shortUrl, setshortUrl] = useState("")
//   const [url, setUrl] = useState("")
    const [myLinks, setMyLinks] = useState([])
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
      const storedLinks = JSON.parse(sessionStorage.getItem("links")) || [];
     if(storedLinks)setMyLinks(storedLinks);
  }, [])

  const handleCopy = () => {
    if (ref.current) {
      navigator.clipboard.writeText(ref.current.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-black px-4">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 drop-shadow-lg">
          Your Shortened URL
        </h1>
        <p className="text-gray-300 mt-2 max-w-xl text-sm md:text-base">
          Copy the short link and share it anywhere — messages, posts, or your website.
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 flex flex-col items-center space-y-6 transition-all hover:shadow-purple-700/30 hover:scale-[1.01]">
        {/* Short Link Box */}
        <label htmlFor="short" className="flex w-full justify-center items-center">
          <input
            ref={ref}
            type="text"
            id="short"
            readOnly
            className="bg-white/90 p-3 w-[60%] md:w-[70%] text-black rounded-l-lg outline-none font-medium"
            value={`http://localhost:3000/${myLinks.length > 0 ? myLinks[myLinks.length - 1].shortUrl : ''}`}
          />
          <button
            onClick={handleCopy}
            className={`${
              copied ? 'bg-green-500' : 'bg-blue-600'
            } text-white  cursor-pointer  px-4 py-3 rounded-r-lg font-semibold hover:opacity-90 transition-all active:scale-95`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </label>

        {/* Original URL */}
        <p className="text-gray-200 text-center text-sm md:text-base">
          Original URL:{' '}
          <Link
            href={`/${myLinks.length > 0 ? myLinks[myLinks.length - 1].url : ''}`}
            className="text-blue-400 hover:text-blue-500 underline transition-all"
          >
            {myLinks.length > 0 ? myLinks[myLinks.length - 1].url : 'No URL found'}
          </Link>
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
          <Link href="/ClickCounter">
            <button className="  cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl py-2 px-6 font-semibold shadow-lg hover:shadow-indigo-600/40 hover:scale-105 transition-all">
              Total Clicks Of Your URL
            </button>
          </Link>
          <Link href="/shortner">
            <button className="  cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl py-2 px-6 font-semibold shadow-lg hover:shadow-emerald-600/40 hover:scale-105 transition-all">
              Short Another URL
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
