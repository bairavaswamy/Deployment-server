// components/StickyContactIcons.tsx
"use client";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function StickyContactIcons() {
  return (
    <div className="fixed top-1/3 right-4 flex flex-col items-center gap-4 z-50">
      {/* Phone */}
      <a
        href="tel:+917995792953" // Replace with your number
        className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 shadow-lg transition-transform hover:scale-110"
      >
        <FaPhoneAlt className="text-white text-lg" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/7995792953" // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-transform hover:scale-110"
      >
        <FaWhatsapp className="text-white text-xl" />
      </a>

      {/* Email */}
      <a
        href="mailto:servanienterprise@gmail.com" // Replace with your email
        className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg transition-transform hover:scale-110"
      >
        <FaEnvelope className="text-white text-lg" />
      </a>
    </div>
  );
}
