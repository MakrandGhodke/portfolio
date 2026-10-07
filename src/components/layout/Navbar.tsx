"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { FileDown, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "Now Building", href: "/#now-building" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
    { name: "Changelog", href: "/changelog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-xl transition-colors duration-200">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Monogram / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-sm tracking-tight text-text hover:text-accent transition-colors group shrink-0"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg border border-border bg-surface shadow-xs group-hover:border-accent/80 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.25)] transition-all">
            <span className="font-bold text-xs text-text group-hover:text-accent transition-colors">
              MG
            </span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent/80 ring-2 ring-background" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xs tracking-wider">
              makrand<span className="text-accent">.</span>ghodke
            </span>
            <span className="text-[10px] text-muted tracking-normal font-mono">
              tu darmstadt // ai
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (Laptops, Desktops, iPad Pro landscape 1024px+) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted hover:text-text hover:text-accent transition-colors duration-150 py-1 tracking-tight"
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20 hover:border-accent hover:shadow-[0_0_16px_rgba(34,211,238,0.2)] transition-all duration-200"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV.pdf</span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>

        {/* Mobile & Tablet controls (Phones, iPad Mini, iPad Air, iPad portrait < 1024px) */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Quick CV button visible on tablet/mobile header for instant recruiter access */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium rounded-lg border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20 transition-all"
            aria-label="Download CV"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-border text-muted hover:text-text hover:border-accent transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-surface/98 backdrop-blur-2xl px-5 py-5 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg border border-border/60 bg-surface text-xs font-mono text-text hover:border-accent hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-border/80">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono font-semibold rounded-lg border border-accent/50 bg-accent/15 text-accent hover:bg-accent/25 transition-colors"
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
