"use client";

import Link from "next/link";
import { siteConfig } from "@/../content/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import {
  ArrowDown,
  FileDown,
  Mail,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Cpu,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-6 pb-20 md:pt-14 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="ambient-glow -top-24 left-1/2 -translate-x-1/2 w-[580px] h-[340px] bg-accent/25"
        aria-hidden="true"
      />
      <div
        className="ambient-glow top-36 right-0 w-[420px] h-[300px] bg-secondary/15"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur-md shadow-xs hover:border-accent/50 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs text-text tracking-tight">
            {siteConfig.availability}
          </span>
        </div>

        {/* Eyebrow & Headline */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs md:text-sm text-accent font-medium tracking-wide">
            <Cpu className="w-4 h-4 text-accent" />
            <span>{siteConfig.eyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text leading-[1.1] max-w-3xl">
            I build machine learning systems that work{" "}
            <span className="text-gradient">outside the notebook</span>
            <span className="inline-block text-accent font-mono ml-1 cursor-blink">_</span>
          </h1>

          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            {siteConfig.subheadline}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Primary View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-text text-background font-mono text-xs font-semibold hover:bg-accent hover:text-background transition-all duration-200 shadow-md hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] cursor-pointer group"
          >
            <span>View projects</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary CV Download */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface/90 hover:border-accent hover:text-accent font-mono text-xs font-medium text-text transition-all duration-200 hover:shadow-[0_0_16px_rgba(34,211,238,0.15)]"
          >
            <FileDown className="w-3.5 h-3.5 text-accent" />
            <span>Download CV</span>
          </a>

          {/* Contact Jump */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border/70 hover:border-border bg-transparent hover:bg-surface font-mono text-xs font-medium text-muted hover:text-text transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>

        {/* Social Icons & Meta Row */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 text-xs font-mono text-muted">
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <span className="text-border">·</span>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <span className="text-border">·</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-muted">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Darmstadt, Germany (CET)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
