"use client";

import { useEffect,useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { BsMoonStars, BsSun } from "react-icons/bs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Set dark class based on persisted state
    const userPref = localStorage.getItem("theme");
    const prefersDark = userPref === "dark" || (!userPref && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

   const handleToggle = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    document.documentElement.classList.toggle('dark', nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
  };
  // check active path
  const isActive = (path: string) => pathname === path;

  // navigation links
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

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 shadow-md transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-wide">SERVANISAFETY</span>
          <span className="text-base opacity-80">NETS</span>
        </div>

        {/* Desktop Menu */}
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

          {/* Services Dropdown */}
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
              <ul
                className={`absolute left-0 mt-2 w-60 shadow-lg rounded-md overflow-hidden ${
                  darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
                }`}
              >
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 transition ${
                        pathname === item.href
                          ? darkMode
                            ? "bg-yellow-300 text-black"
                            : "bg-yellow-100 text-teal-700"
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

          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={handleToggle}
              className="p-2 rounded-full hover:scale-110 transition-transform"
            >
              {darkMode ? <BsSun size={20} /> : <BsMoonStars size={20} />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:scale-110 transition-transform"
          >
            {darkMode ? <BsSun size={20} /> : <BsMoonStars size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 shadow-md px-6 py-6 space-y-3 transform transition-transform duration-300 ease-in-out md:hidden z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"}`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2 rounded-md ${
              isActive(link.href)
                ? darkMode
                  ? "bg-yellow-300 text-black"
                  : "bg-yellow-100 text-teal-700"
                : "hover:text-teal-600"
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* Dropdown inside mobile */}
        <div>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-full text-left py-2 font-medium ${
              pathname.startsWith("/services")
                ? darkMode
                  ? "text-yellow-300"
                  : "text-teal-700 font-semibold"
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
                      pathname === item.href
                        ? darkMode
                          ? "bg-yellow-300 text-black"
                          : "bg-yellow-100 text-teal-700"
                        : "hover:text-teal-600"
                    }`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
