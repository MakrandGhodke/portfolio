import { siteConfig } from "@/../content/site";
import { projects } from "@/../content/projects";
import { changelogEntries } from "@/../content/changelog";

export default function Home() {
  return (
    <div className="py-12 space-y-12">
      {/* Shell verification for Phase 1 */}
      <div className="rounded-xl border border-border bg-surface/50 backdrop-blur-sm p-8 max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 font-mono text-xs text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>Phase 1 Foundation Operational</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          {siteConfig.name}
        </h1>

        <p className="font-mono text-sm text-accent">
          {siteConfig.eyebrow}
        </p>

        <p className="text-muted text-sm sm:text-base leading-relaxed">
          {siteConfig.headline}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-muted">
          <span className="px-2.5 py-1 rounded border border-border bg-surface">
            Next.js 15 App Router
          </span>
          <span className="px-2.5 py-1 rounded border border-border bg-surface">
            Tailwind CSS v4
          </span>
          <span className="px-2.5 py-1 rounded border border-border bg-surface">
            Geist Typography
          </span>
          <span className="px-2.5 py-1 rounded border border-border bg-surface">
            {projects.length} Projects Configured
          </span>
          <span className="px-2.5 py-1 rounded border border-border bg-surface">
            {changelogEntries.length} Changelog Milestones
          </span>
        </div>
      </div>
    </div>
  );
}
