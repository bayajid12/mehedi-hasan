"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT ME", href: "/about" },
  { name: "BLOG", href: "/blogs" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CAREER", href: "/career" },
];

export default function Navbar({ light = false }: { light?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const textColor = light ? "text-[#2B2B2F]" : "text-white/80";
  const borderColor = light ? "border-[#2B2B2F]/20" : "border-gray-500/50";
  const hoverBg = light ? "hover:bg-[#2B2B2F] hover:text-white" : "hover:bg-gray-500 hover:text-dark";
  const activeBg = light ? "bg-[#2B2B2F] text-white" : "bg-white text-dark";

  return (
    <nav className={`absolute top-0 w-full z-50 px-6 md:px-16 py-8 font-bebas text-lg tracking-wider ${textColor} ${light ? "bg-[#E3E3DF]" : ""}`}>
      <div className="flex justify-between items-center w-full max-w-[1400px] mx-auto">
        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden hover:opacity-70 transition-opacity" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Left Navigation (Desktop) */}
        <div className="hidden lg:flex gap-4 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-6 py-1.5 rounded-full border transition-all duration-300 backdrop-blur-sm ${isActive ? activeBg : `${borderColor} ${hoverBg}`}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right Navigation */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={`px-6 py-1.5 rounded-full border transition-all duration-300 backdrop-blur-sm ${pathname === "/contact" ? activeBg : `${borderColor} ${hoverBg}`}`}
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`lg:hidden absolute top-24 left-6 right-6 ${light ? "bg-[#E3E3DF]/95" : "bg-[#111111]/95"} backdrop-blur-md rounded-2xl border ${light ? "border-[#2B2B2F]/10" : "border-gray-800"} p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4`}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`w-full text-center px-6 py-3 rounded-full border transition-all duration-300 ${isActive ? activeBg : `${borderColor} ${hoverBg}`}`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`w-full text-center px-6 py-3 mt-4 rounded-full border transition-all duration-300 ${pathname === "/contact" ? activeBg : (light ? "border-[#2B2B2F] text-[#2B2B2F] hover:bg-[#2B2B2F] hover:text-white" : "border-sage text-sage hover:bg-sage hover:text-dark")}`}
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
}
