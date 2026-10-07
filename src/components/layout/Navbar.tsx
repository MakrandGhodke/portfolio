"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { FileDown, Menu, X, Terminal } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Changelog", href: "/changelog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Monogram / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-sm tracking-tight text-text hover:text-accent transition-colors group"
        >
          <div className="w-8 h-8 rounded border border-border bg-surface flex items-center justify-center font-bold text-xs text-accent group-hover:border-accent transition-colors shadow-sm">
            <Terminal className="w-4 h-4 text-accent" />
          </div>
          <span className="font-semibold tracking-wider">
            makrand<span className="text-accent">.</span>dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted hover:text-text hover:text-accent transition-colors duration-150 py-1"
            >
              {link.name}
            </Link>
          ))}

          <div className="h-4 w-[1px] bg-border" />

          {/* CV Button */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20 hover:border-accent transition-all duration-200"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV.pdf</span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md border border-border text-muted hover:text-text hover:border-accent transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface/95 backdrop-blur-lg px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base py-2 text-text hover:text-accent font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-border">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-mono font-medium rounded-md border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
