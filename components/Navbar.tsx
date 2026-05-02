"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "glass-nav py-1" 
          : "bg-slate-950/30 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      <div className="flex justify-between items-center h-16 md:h-20 px-8 max-w-7xl mx-auto font-inter tracking-tight">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400"
        >
          Imtiaz.dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <Link
                key={href}
                href={href}
                className={`relative font-medium transition-all duration-200 ease-in-out active:scale-95 transform
                  ${
                    isActive
                      ? "text-white after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-indigo-500 after:rounded-full"
                      : "text-slate-400 hover:text-white"
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Resume + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all active:scale-95"
          >
            Resume
          </a>
          {/* Mobile Hamburger */}
          <button
            id="hamburger-btn"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 border-t border-white/5" : "max-h-0"}`}
      >
        <div className="flex flex-col px-8 py-4 space-y-4 glass-nav border-t border-white/5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-white font-medium transition-colors py-1"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
