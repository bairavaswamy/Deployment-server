import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FooterBottom: React.FC = () => {
  return (
    <section aria-label="Footer bottom section">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Servanisafety Nets. All Rights Reserved.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/share/177w7231SD/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-white w-4 h-4" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gray-800 hover:bg-sky-500 transition"
            aria-label="Twitter"
          >
            <FaTwitter className="text-white w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/servanisafetynets?igsh=MTljMjNrdWw2dXo4aA=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram className="text-white w-4 h-4" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-700 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-white w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
