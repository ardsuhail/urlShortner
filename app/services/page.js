import React from 'react'

const page = () => {
  return (
      <main className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Our Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-3">URL Shortening</h3>
            <p className="text-gray-600">
              Convert long links into short, shareable URLs. Perfect for social media, business, and personal use.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-3">Analytics</h3>
            <p className="text-gray-600">
              Track how many clicks your short links get and analyze traffic sources in real-time.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-3">Shopovix Store</h3>
            <p className="text-gray-600">
              Visit our online store{" "}
              <a href="https://shopovix.store" target="_blank" className="text-blue-500 font-semibold">
                Shopovix.store
              </a>{" "}
              for quality products at the best prices.
            </p>
          </div>
        </div>
      </main>
  )
}

export default page
