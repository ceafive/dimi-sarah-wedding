"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#our-story", label: "Our Story" },
  { href: "#wedding-day", label: "Wedding Day" },
  { href: "#venue", label: "Venue" },
  { href: "#rsvp", label: "RSVP" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl">
        {/* Masthead: date left, names centred */}
        <div className="relative flex items-center justify-center py-5 pr-12 md:py-6 md:pr-0">
          <span className="absolute left-0 hidden font-serif text-xs uppercase tracking-caps text-ink-soft sm:block">
            21 August 2027
          </span>

          <Link
            href="#home"
            className="font-display text-2xl font-medium tracking-wide text-ink transition-colors hover:text-cornflower sm:text-3xl md:text-4xl"
          >
            Sarah <span className="text-cornflower">&amp;</span> Dimitris
          </Link>

          {/* Mobile toggle */}
          <button
            className="absolute right-0 p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              <span
                className={`block h-px bg-ink transition-transform ${
                  isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px bg-ink transition-opacity ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-ink transition-transform ${
                  isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Ruled, letter-spaced nav — desktop */}
        <div className="hidden md:block">
          <div className="rule" />
          <ul className="flex items-center justify-center gap-9 py-3.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-serif text-[0.8rem] uppercase tracking-caps text-ink/75 transition-colors hover:text-cornflower"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="rule" />
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-line md:hidden">
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-[0.8rem] uppercase tracking-caps text-ink/75 transition-colors hover:text-cornflower"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
