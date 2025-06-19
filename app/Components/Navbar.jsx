"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Problem Statements", href: "#problems" },
  { name: "Prizes", href: "#prizes" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black font-oswald text-white px-6 py-4 shadow-md fixed w-full top-0 z-50">
      <div className="flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-[#9B59B6]">
          Techno-<span className="text-white">Quest 3.O</span>
        </a>

        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="text-[#9B59B6]" /> : <Menu className="text-[#9B59B6]" />}
          </button>
        </div>

        <ul className="hidden lg:flex space-x-6 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-[#9B59B6] transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/Register"
              className="ml-4 rounded bg-[#9B59B6] px-4 py-1 text-black font-semibold hover:bg-purple-600 transition"
            >
              Register Now
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="lg:hidden mt-4 flex flex-col space-y-4 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block hover:text-green-400"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/register"
              className="mt-2 inline-block rounded bg-[#9B59B6] px-4 py-2 text-black font-semibold hover:bg-purple-600"
              onClick={() => setOpen(false)}
            >
              Register Now
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
