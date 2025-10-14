"use client";
import React from "react";
import { Link as LinkIcon, QrCode, Download, Database } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "URL Shortening",
      desc: "Instantly create short links stored in our database. Clean, fast, and ready to share.",
      icon: LinkIcon,
    },
    {
      title: "QR Code Generation",
      desc: "Generate high-resolution QR codes for your short URLs. Currently stored locally for simplicity.",
      icon: QrCode,
    },
    {
      title: "Download QR Codes",
      desc: "Download your generated QR codes immediately for use anywhere.",
      icon: Download,
    },
    {
      title: "Dashboard UI Preview",
      desc: "Organized view of your short URLs and locally stored QR codes. Currently shows UI placeholder.",
      icon: Database,
    },
  ];

  const futurePlans = [
    "Authentication (Gmail/OAuth) for cross-device access",
    "Advanced analytics: device, city, state, country-level click counts",
    "Custom domains & vanity links",
    "Team accounts & shared link libraries",
    "API access for developers",
    "Automated export/reports",
    "Integration with tools like Slack, Google Sheets, Zapier"
  ];

  return (
    <main className="max-w-7xl mx-auto py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold leading-tight">Powerful Link & QR Tools</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Shorten links, generate QR codes, and manage everything neatly in one place. Simple, free, and professional.
        </p>
      </header>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 gap-12">
        {services.map((s) => (
          <div key={s.title} className="flex gap-6 items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <div className="flex-none w-16 h-16 rounded-xl bg-gray-100 grid place-items-center">
              <s.icon className="w-8 h-8 text-gray-700" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Future Plans Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center">What’s Coming Next</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          We have exciting plans to enhance your experience. Here’s what we are planning to add in the future:
        </p>
        <ul className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 list-disc list-inside text-gray-700">
          {futurePlans.map((plan) => (
            <li key={plan} className="text-lg">{plan}</li>
          ))}
        </ul>
      </section>

      {/* Dashboard UI Preview Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Dashboard Preview</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          View your short URLs and locally-stored QR codes neatly organized. Currently shows UI placeholder.
        </p>
        <div className="w-full border border-dashed border-gray-200 rounded-2xl p-8">
          <p className="text-gray-500 text-center">Dashboard table placeholder — short URLs from DB, QR codes from localStorage.</p>
        </div>
      </section>
    </main>
  );
}