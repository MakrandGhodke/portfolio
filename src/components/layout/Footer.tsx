import Link from "next/link";
import { siteConfig } from "@/../content/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-border bg-surface/40 transition-colors duration-200 mt-auto">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border/60">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Werkstudent / HiWi roles (20h/wk)</span>
            </div>
            <p className="text-sm font-mono text-muted">
              {siteConfig.name} — {siteConfig.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm font-mono">
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors py-1"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors py-1"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors py-1"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <p>© {currentYear} {siteConfig.name}. Designed & built for production.</p>
          <div className="flex items-center gap-4">
            <Link href="/changelog" className="hover:text-accent transition-colors">
              Changelog
            </Link>
            <span>·</span>
            <span>Next.js 15 + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
