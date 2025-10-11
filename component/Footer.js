"use client"
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-gray-300 w-full py-10">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradient-x opacity-90 -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 relative z-10">

        {/* Customer Support Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#00F5A0] mb-3 tracking-wide">
            Support
          </h2>
          <ul className="space-y-2 text-sm">
            {["privacy-policy", "Feedback", "Terms-of-Service"].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="relative group hover:text-[#00D9F5] transition-colors duration-300"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00D9F5] group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      {/* Social Links Section */}
<div className="space-y-6">
  <h2 className="text-xl font-bold text-[#00F5A0] mb-3 tracking-wide">
    Connect with Me
  </h2>
  <ul className="space-y-3 text-sm">
    {/* Instagram */}
    <li className="flex items-center gap-3">
      <img className="w-8 h-8 rounded-full shadow-lg" src="/instagram.png" alt="Instagram" />
      <Link
        href="https://www.instagram.com/ardsuhail"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group font-medium hover:text-[#00D9F5] transition-colors duration-300"
      >
        Instagram
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00D9F5] group-hover:w-full transition-all duration-300 rounded-full"></span>
      </Link>
    </li>

    {/* GitHub */}
    <li className="flex items-center gap-3">
      <img className="w-8 h-8 rounded-full shadow-lg" src="/github.png" alt="GitHub" />
      <Link
        href="https://github.com/suhail134"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group font-medium hover:text-[#00D9F5] transition-colors duration-300"
      >
        GitHub
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00D9F5] group-hover:w-full transition-all duration-300 rounded-full"></span>
      </Link>
    </li>

    {/* LinkedIn */}
    <li className="flex items-center gap-3">
      <img className="w-8 h-8 rounded-full shadow-lg" src="/linkedin.webp" alt="LinkedIn" />
      <Link
        href="https://www.linkedin.com/in/suhail-ahmed-566a60315/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group font-medium hover:text-[#00D9F5] transition-colors duration-300"
      >
        LinkedIn
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00D9F5] group-hover:w-full transition-all duration-300 rounded-full"></span>
      </Link>
    </li>
  </ul>
</div>

      </div>

      {/* Divider Line */}
      <div className="flex justify-center mt-8 relative z-10">
        <hr className="border-t border-gray-700 w-1/2 md:w-1/3" />
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-400 mt-4 text-center relative z-10">
        © {new Date().getFullYear()} Urlixa | All Rights Reserved
      </p>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
