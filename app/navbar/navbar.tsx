"use client";

import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Logo />

        <DesktopMenu />

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}
