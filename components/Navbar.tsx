"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT ME", href: "/about" },
  { name: "BLOG", href: "/blogs" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CAREER", href: "/career" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full z-50 px-6 md:px-16 py-6 font-bebas text-lg tracking-wider text-white/80">
      <div className="flex justify-between items-center w-full">
        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden hover:text-white transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Left Navigation (Desktop) */}
        <div className="hidden lg:flex gap-4 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-6 py-1.5 rounded-full border border-gray-500/50 hover:bg-gray-500 hover:text-dark transition-all duration-300 backdrop-blur-sm"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Navigation */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="px-6 py-1.5 rounded-full border border-gray-500/50 hover:bg-gray-500 hover:text-dark transition-all duration-300 backdrop-blur-sm"
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-6 right-6 bg-[#111111]/95 backdrop-blur-md rounded-2xl border border-gray-800 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-6 py-3 rounded-full border border-gray-500/50 hover:bg-gray-500 hover:text-dark transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-6 py-3 mt-4 rounded-full border border-sage text-sage hover:bg-sage hover:text-dark transition-all duration-300"
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
}
