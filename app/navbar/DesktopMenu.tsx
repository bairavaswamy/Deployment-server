"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/bookOnline", label: "BOOK ONLINE" },
  { href: "/contactUs", label: "CONTACT US" },
];

const serviceLinks = [
  { href: "/services/balcony", text: "Balcony Safety Nets" },
  { href: "/services/invisible", text: "Invisible Grills" },
  { href: "/services/pigeon", text: "Pigeon Safety Nets" },
  { href: "/services/residential", text: "Residential Safety Nets" },
  { href: "/services/sports", text: "Sports Safety Nets" },
  { href: "/services/construction", text: "Construction Safety Nets" },
];

export default function DesktopMenu() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <ul className="hidden md:flex space-x-6 items-center font-medium relative">
      {links.map((link) => (
        <li key={link.href} className="relative">
          <Link
            href={link.href}
            className={`px-2 py-1 transition-colors ${
              isActive(link.href)
                ? "text-yellow-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-yellow-300 after:rounded-full after:transition-all"
                : "hover:text-yellow-300"
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}

      <li
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button
          className={`px-2 py-1 transition-colors ${
            pathname.startsWith("/services")
              ? "text-yellow-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-yellow-300 after:rounded-full"
              : "hover:text-yellow-300"
          }`}
        >
          SERVICES
        </button>
        {isDropdownOpen && (
          <ul className="absolute left-0 mt-2 w-60 shadow-lg rounded-md overflow-hidden bg-white text-gray-800">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 transition ${
                    pathname === item.href
                      ? "bg-yellow-100 text-teal-700"
                      : "hover:bg-yellow-100 hover:text-teal-700"
                  }`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
}
