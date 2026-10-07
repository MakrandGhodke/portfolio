"use client";

import { useState } from "react";
import { siteConfig } from "@/../content/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Toast } from "@/components/ui/Toast";
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  MapPin,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      // Fallback
      window.location.href = `mailto:${siteConfig.contact.email}`;
    }
  };

  return (
    <section id="contact" className="py-16 space-y-10 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-4">
        <div className="space-y-1">
          <p className="font-mono text-xs text-accent font-semibold tracking-wider">
            05 // GET_IN_TOUCH
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
            Start a Conversation
          </h2>
        </div>
        <p className="text-xs font-mono text-muted max-w-sm">
          Available for Werkstudent and HiWi positions in Machine Learning, AI, or Data Science.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-surface/75 backdrop-blur-xl p-6 sm:p-10 space-y-8 relative overflow-hidden">
        {/* Subtle ambient light */}
        <div
          className="ambient-glow -top-10 -right-10 w-[300px] h-[300px] bg-accent/15"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-text">
            Interested in discussing an engineering role or research project?
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            I am currently based in Darmstadt and actively seeking Werkstudent (working student) or HiWi (research assistant) opportunities for up to 20 hours/week. Whether remote, hybrid, or on-site, let’s connect.
          </p>
        </div>

        {/* Email Copy Card */}
        <div className="relative z-10 rounded-xl border border-border bg-surface-raised p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg border border-accent/40 bg-accent/10 flex items-center justify-center text-accent">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-mono text-[11px] text-muted uppercase">Direct Email</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-mono text-sm sm:text-base font-semibold text-text hover:text-accent transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-surface hover:border-accent hover:text-accent font-mono text-xs font-medium text-text transition-all duration-200 cursor-pointer shadow-xs"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy email</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-text text-background font-mono text-xs font-semibold hover:bg-accent hover:text-background transition-colors"
            >
              <span>Mail</span>
            </a>
          </div>
        </div>

        {/* Channels & Location */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {/* LinkedIn */}
          <a
            href={siteConfig.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border bg-surface p-4 flex items-center justify-between hover:border-accent hover:text-accent transition-colors group"
          >
            <div className="flex items-center gap-3">
              <LinkedinIcon className="w-5 h-5 text-accent" />
              <div>
                <p className="font-bold text-xs text-text group-hover:text-accent">LinkedIn</p>
                <p className="font-mono text-[11px] text-muted">/in/makrand-ghodke</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
          </a>

          {/* GitHub */}
          <a
            href={siteConfig.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border bg-surface p-4 flex items-center justify-between hover:border-accent hover:text-accent transition-colors group"
          >
            <div className="flex items-center gap-3">
              <GithubIcon className="w-5 h-5 text-accent" />
              <div>
                <p className="font-bold text-xs text-text group-hover:text-accent">GitHub</p>
                <p className="font-mono text-[11px] text-muted">/MakrandGhodke</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
          </a>

          {/* Location & Timezone */}
          <div className="rounded-xl border border-border bg-surface p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-border bg-surface-raised flex items-center justify-center text-muted">
              <MapPin className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="font-bold text-xs text-text">Darmstadt, Germany</p>
              <p className="font-mono text-[11px] text-muted">Central European Time</p>
            </div>
          </div>
        </div>
      </div>

      <Toast
        message="Email address copied to clipboard"
        isOpen={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
}
