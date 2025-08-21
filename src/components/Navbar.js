// src/components/Navbar.js
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const lockedHidden = useRef(false); // after click, stay hidden until next upward scroll
  const THRESH = 10; // px to ignore tiny scrolls

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // Always show near top
      if (y < 8) {
        setVisible(true);
        lockedHidden.current = false;
        lastY.current = y;
        return;
      }

      const goingDown = y - lastY.current > THRESH;
      const goingUp = lastY.current - y > THRESH;

      if (goingDown) {
        setVisible(false);
      } else if (goingUp) {
        // Only allow showing again when user scrolls UP
        setVisible(true);
        lockedHidden.current = false;
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => {
    // close mobile menu, hide bar, require next upward scroll to show again
    setOpen(false);
    setVisible(false);
    lockedHidden.current = true;
    // record current Y so the next *upward* movement will reveal it
    lastY.current = window.scrollY;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white/70 backdrop-blur z-50 shadow-sm transition-transform duration-300 ${
        visible && !lockedHidden.current ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3">
        {/* logo / name */}
        <a href="#home" onClick={handleNavClick} className="text-xl font-semibold">
          Arjun<span className="text-purple-600"></span>
        </a>

        {/* hamburger (mobile) */}
        <button
          className="sm:hidden p-2"
          onClick={() => setOpen((v) => !v)}
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
          {[
            ["Home", "#home"],
            ["Experience", "#experience"],
            ["Projects", "#projects"],
            ["Certifications", "#certifications"],
            ["Awards", "#awards"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={handleNavClick} className="hover:text-purple-600">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
