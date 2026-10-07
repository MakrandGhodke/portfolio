import Link from "next/link";
import { getLatestChangelogEntries } from "@/../content/changelog";
import { GitCommit, ArrowRight, Activity, Calendar } from "lucide-react";

export function NowBuilding() {
  const latestEntries = getLatestChangelogEntries(3);

  return (
    <section id="now-building" className="py-14 space-y-8 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="font-mono text-xs text-accent font-semibold tracking-wider">
              02 // NOW_BUILDING
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
            Active Engineering Stream
          </h2>
        </div>
        <Link
          href="/changelog"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-text transition-colors group"
        >
          <span>View all updates</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Changelog Cards Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {latestEntries.map((entry) => (
          <div
            key={entry.id}
            className="rounded-xl border border-border bg-surface/70 backdrop-blur-md p-5 flex flex-col justify-between hover:border-accent/50 transition-all duration-200 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded border border-border bg-surface text-accent font-medium">
                  {entry.project}
                </span>
                <span className="text-muted flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {entry.date}
                </span>
              </div>

              <h3 className="font-semibold text-sm text-text group-hover:text-accent transition-colors leading-snug">
                {entry.title}
              </h3>

              <p className="text-xs text-muted leading-relaxed line-clamp-3">
                {entry.summary}
              </p>
            </div>

            <div className="pt-4 mt-2 border-t border-border/60 flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface border border-border/70 text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
