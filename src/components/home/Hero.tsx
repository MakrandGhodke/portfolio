"use client";

import { siteConfig } from "@/../content/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import {
  ArrowDown,
  FileDown,
  Mail,
  ArrowUpRight,
  MapPin,
  Cpu,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-2 pb-14 sm:pt-6 sm:pb-20 md:pt-10 md:pb-24">
      {/* Zero-flow Ambient Background Glows using smooth CSS radial gradients */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] max-w-[140vw] h-[400px] rounded-full opacity-60 dark:opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34, 211, 238, 0.15) 0%, rgba(34, 211, 238, 0) 70%)",
          }}
        />
        <div
          className="absolute top-28 right-[-15%] w-[500px] max-w-[100vw] h-[350px] rounded-full opacity-50 dark:opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0) 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur-md shadow-xs hover:border-accent/50 transition-colors">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] sm:text-xs text-text tracking-tight">
            {siteConfig.availability}
          </span>
        </div>

        {/* Eyebrow & Headline */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-accent font-medium tracking-wide">
            <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0" />
            <span className="truncate">{siteConfig.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text leading-[1.15] max-w-3xl">
            I build machine learning systems that work{" "}
            <span className="text-gradient">outside the notebook</span>
            <span className="inline-block text-accent font-mono ml-1 cursor-blink">_</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted max-w-2xl leading-relaxed">
            {siteConfig.subheadline}
          </p>
        </div>

        {/* Action CTAs: Responsive touch-friendly layout */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
          {/* Primary View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-text text-background font-mono text-xs font-semibold hover:bg-accent hover:text-background transition-all duration-200 shadow-md hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] cursor-pointer group"
          >
            <span>View projects</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary CV Download */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface/90 hover:border-accent hover:text-accent font-mono text-xs font-medium text-text transition-all duration-200 hover:shadow-[0_0_16px_rgba(34,211,238,0.15)]"
          >
            <FileDown className="w-3.5 h-3.5 text-accent" />
            <span>Download CV</span>
          </a>

          {/* Contact Jump */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border/70 hover:border-border bg-transparent hover:bg-surface font-mono text-xs font-medium text-muted hover:text-text transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>

        {/* Social Icons & Meta Row */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-t border-border/70 text-xs font-mono text-muted">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors py-1"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <span className="text-border hidden sm:inline">·</span>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors py-1"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <span className="text-border hidden sm:inline">·</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors py-1"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
              <span className="break-all">{siteConfig.contact.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-muted pt-1 sm:pt-0">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>Darmstadt, Germany (CET)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
