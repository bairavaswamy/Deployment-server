"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
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

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
      </button>

      <div
        className={`fixed inset-y-0 left-0 w-64 shadow-md px-6 py-6 space-y-3 transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white text-gray-800`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2 rounded-md ${
              isActive(link.href)
                ? "bg-yellow-100 text-teal-700"
                : "hover:text-teal-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        <div>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-full text-left py-2 font-medium ${
              pathname.startsWith("/services")
                ? "text-teal-700 font-semibold"
                : ""
            }`}
          >
            Services
          </button>
          {isDropdownOpen && (
            <ul className="ml-4 mt-2 space-y-1">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md ${
                      isActive(item.href)
                        ? "bg-yellow-100 text-teal-700"
                        : "hover:text-teal-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
