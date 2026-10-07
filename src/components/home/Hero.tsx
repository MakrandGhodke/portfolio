"use client";

import Image from "next/image";
import { siteConfig } from "@/../content/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import {
  ArrowDown,
  FileDown,
  Mail,
  ArrowUpRight,
  MapPin,
  Cpu,
  GraduationCap,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-2 pb-14 sm:pt-6 sm:pb-20 md:pt-10 md:pb-24">
      {/* Zero-flow Ambient Background Glows */}
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

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Main Hero Copy (8 cols on desktop) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 order-2 lg:order-1">
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

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-text leading-[1.15]">
                I build machine learning systems that work{" "}
                <span className="text-gradient">outside the notebook</span>
                <span className="inline-block text-accent font-mono ml-1 cursor-blink">_</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-muted max-w-2xl leading-relaxed">
                {siteConfig.subheadline}
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-text text-background font-mono text-xs font-semibold hover:bg-accent hover:text-background transition-all duration-200 shadow-md hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] cursor-pointer group"
              >
                <span>View projects</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface/90 hover:border-accent hover:text-accent font-mono text-xs font-medium text-text transition-all duration-200 hover:shadow-[0_0_16px_rgba(34,211,238,0.15)]"
              >
                <FileDown className="w-3.5 h-3.5 text-accent" />
                <span>Download CV</span>
              </a>

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

          {/* User Profile Photo Card (4 cols on desktop, centered on mobile/tablet) */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Soft Ambient Radial Backlight behind portrait */}
              <div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-accent/20 to-secondary/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500 -z-10"
                aria-hidden="true"
              />

              {/* Portrait Container */}
              <div className="relative rounded-2xl border-2 border-border/80 bg-surface/90 p-2 shadow-2xl backdrop-blur-md overflow-hidden max-w-[240px] sm:max-w-[270px] lg:max-w-[280px]">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-surface-raised">
                  <Image
                    src="/makrand.jpg"
                    alt="Makrand Ghodke - M.Sc. ICE Student at TU Darmstadt"
                    fill
                    sizes="(max-width: 768px) 240px, (max-width: 1024px) 270px, 280px"
                    priority
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Bio Chip */}
                <div className="pt-2.5 pb-1 px-1 flex items-center justify-between font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-text font-semibold">
                    <GraduationCap className="w-3.5 h-3.5 text-accent" />
                    <span>TU Darmstadt</span>
                  </div>
                  <span className="text-[10px] text-accent font-medium">
                    M.Sc. ICE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
