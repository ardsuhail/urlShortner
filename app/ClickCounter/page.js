"use client"
import React from "react";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";


const Page = () => {
  const [shortUrl, setShortUrl] = useState("")
  const [clicks, setClicks] = useState(null)
  const [error, setError] = useState("")
  const [loading, setloading] = useState(false)

  const handleclick = () => {
    if (!shortUrl.trim()) {
      setError("Please write your short URL");
      setClicks(null);
      return; 
    }
    setloading(true)
    let short = shortUrl.trim();

    try {
      const urlObj = new URL(short); // agar valid URL hai
      short = urlObj.pathname.replace(/^\/+/, ""); // remove starting slash
    } catch (e) {
      // agar user ne sirf shortURL diya (shopovix) to koi problem nahi
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "shortUrl": short
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/clicks", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          // alert(result.message)
          setloading(false)
          setClicks(result.clicks),
            setError("")
        }
        else {
          setloading(false)
          setError(result.error && "Short Url Not found"),
            setClicks(null)
          // alert((result.message))
        }
      })
      .catch((error) => {
        setloading(false)
        setError("Server error, please try again later."),
          console.error(error)
      });

  }


  return (
    <div className="flex pb-20 items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-6">
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-lg border border-white/20">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-white mb-3 text-center">
          Total URL Clicks
        </h1>
        <p className="text-gray-300 text-sm text-center mb-6">
          The number of clicks from the shortened URL that redirected the user
          to the destination page.
        </p>

        {/* Input Section */}
        <label
          htmlFor="shorturl"
          className="block text-gray-200 font-medium mb-2"
        >
          Type Your Short <b className="text-yellow-300">URL</b> below
        </label>
        <input value={shortUrl} onChange={(e) => setShortUrl(e.target.value)} type="text"
          id="shorturl"
          className="w-full bg-white/20 text-white placeholder-gray-400 p-3 rounded-xl border border-white/30 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none mb-5"
          placeholder="Your Short URL"
        />

        {/* Button */}
        <button onClick={() => handleclick()} className="w-full cursor-pointer bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          {loading? <span  className="flex gap-2 justify-center items-center" ><LoaderCircle  className="animate-spin  w-5 h-5 text-white" /><p>Counting...</p></span>:"Count Your Clicks"}
        </button>
        {clicks !== null && (
          <p className="text-white text-center mt-4">
            ✅ Total Clicks: <b>{clicks}</b>
          </p>
        )}
        {error && (
          <p className="text-red-400 text-center mt-4">❌ {error}</p>
        )}
      </div>
    </div>
  );
};

export default Page;
