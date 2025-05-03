// src/components/Navbar.js
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur z-50 shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3">
        {/* logo / name */}
        <a href="#home" className="text-xl font-semibold">
          Arjun<span className="text-purple-600">.</span>
        </a>

        {/* hamburger (mobile) */}
        <button
          className="sm:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-gray-800" />
            <span className="block h-0.5 w-5 bg-gray-800" />
            <span className="block h-0.5 w-5 bg-gray-800" />
          </div>
        </button>

        {/* link list */}
        <ul
          className={`${
            open ? "flex" : "hidden"
          } flex-col sm:flex sm:flex-row gap-4 sm:gap-6 text-sm font-medium`}
        >
          <li>
            <a href="#home" className="hover:text-purple-600">
              Home
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-purple-600">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
