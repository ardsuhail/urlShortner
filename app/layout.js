import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Context from "@/component/Context";
import Sidebar from "@/component/Sidebar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.js metadata export
// Replace your existing metadata in layout.js with this:

export const metadata = {
  title: {
    default: "Urlixa — Fast URL Shortener & QR Code Generator",
    template: "%s | Urlixa",
  },
  description:
    "Urlixa is a free, fast URL shortener and QR code generator. Create custom short links, track click counts, and generate downloadable QR codes — no signup needed.",
  keywords: [
    "url shortener",
    "short link",
    "qr code generator",
    "custom short url",
    "link tracker",
    "free url shortener",
    "urlixa",
  ],
  authors: [
    {
      name: "Suhail",
      url: "https://www.ardsuhail.com",
    },
  ],
  creator: "Suhail (ArdSuhail)",
  metadataBase: new URL("https://urlixa.com"), // replace with your actual domain
  openGraph: {
    title: "Urlixa — Fast URL Shortener & QR Code Generator",
    description:
      "Create custom short links and QR codes instantly. Track clicks, manage your links, all for free.",
    url: "https://urlixa.com",
    siteName: "Urlixa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urlixa — URL Shortener & QR Generator",
    description: "Free URL shortener with click tracking and QR code generation.",
    creator: "@ardsuhail",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

// Per-page metadata example (add to any page file):
// export const metadata = {
//   title: "Shorten URL",        -> renders as "Shorten URL | Urlixa"
//   description: "...",
// }
{/* <div className=" bg-gradient-to-br from-indigo-900 via-purple-800 to-black min-h-screen " > */ }
// </div>
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-x-hidden */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-screen overflow-x-hidden `}
      >
        <Context>
          <Navbar />
          <Sidebar />
          {children}
          <Footer />
        </Context>
      </body>
    </html>
  );
}
