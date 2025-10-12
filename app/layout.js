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

export const metadata = {
  title: "Urlixa - Fast & Reliable URL Shortener",
  description: "Create custom, memorable, and trackable short URLs easily with Urlixa.",
};

{/* <div className=" bg-gradient-to-br from-indigo-900 via-purple-800 to-black min-h-screen " > */ }
// </div>
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
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
