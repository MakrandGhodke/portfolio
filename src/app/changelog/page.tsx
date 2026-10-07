"use client";

import { useState } from "react";
import Link from "next/link";
import { changelogEntries, ChangelogEntry } from "@/../content/changelog";
import {
  Calendar,
  GitCommit,
  ArrowLeft,
  Filter,
  Tag,
  ArrowUpRight,
  Sparkles,
  Layers,
  Search,
} from "lucide-react";

export default function ChangelogPage() {
  const [selectedProject, setSelectedProject] = useState<string>("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const projects = ["All", "DigiGuide", "SpendWise"];

  // Extract all unique tags
  const allTags = Array.from(
    new Set(changelogEntries.flatMap((e) => e.tags))
  );

  const filteredEntries = changelogEntries.filter((entry) => {
    const projectMatches =
      selectedProject === "All" || entry.project === selectedProject;
    const tagMatches = !selectedTag || entry.tags.includes(selectedTag);
    return projectMatches && tagMatches;
  });

  return (
    <div className="py-6 sm:py-10 space-y-10 max-w-4xl mx-auto">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Overview</span>
        </Link>

        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>{changelogEntries.length} Milestones Recorded</span>
        </div>
      </div>

      {/* Header */}
      <header className="space-y-4 border-b border-border pb-8">
        <div className="space-y-1">
          <p className="font-mono text-xs text-accent font-semibold tracking-wider">
            SYSTEM_CHRONOLOGY // CONTINUOUS_DELIVERY
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text">
            Engineering Changelog
          </h1>
        </div>
        <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
          A granular history of architecture decisions, algorithmic breakthroughs, bug resolutions, and deployments across DigiGuide and SpendWise.
        </p>

        {/* Project Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          <span className="font-mono text-xs text-muted mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            <span>Project:</span>
          </span>
          {projects.map((proj) => (
            <button
              key={proj}
              type="button"
              onClick={() => setSelectedProject(proj)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                selectedProject === proj
                  ? "bg-accent text-background font-bold shadow-xs"
                  : "border border-border bg-surface text-muted hover:border-accent hover:text-text"
              }`}
            >
              {proj}
            </button>
          ))}

          {selectedTag && (
            <button
              type="button"
              onClick={() => setSelectedTag(null)}
              className="ml-auto inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-accent/40 bg-accent/10 font-mono text-[11px] text-accent hover:bg-accent/20 transition-colors"
            >
              <span>Tag: #{selectedTag}</span>
              <span>×</span>
            </button>
          )}
        </div>

        {/* Tag Pills Bar */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <span className="font-mono text-[11px] text-muted mr-1">Filter by tag:</span>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`font-mono text-[10px] px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                selectedTag === tag
                  ? "border-accent bg-accent/20 text-accent font-semibold"
                  : "border-border/70 bg-surface/80 text-muted hover:border-accent hover:text-text"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </header>

      {/* Timeline Entries */}
      <div className="relative border-l-2 border-border/80 pl-6 sm:pl-8 space-y-10 ml-3 sm:ml-4">
        {filteredEntries.length === 0 ? (
          <div className="py-12 text-center space-y-2">
            <p className="font-mono text-sm text-muted">
              No milestones found matching the selected filters.
            </p>
            <button
              onClick={() => {
                setSelectedProject("All");
                setSelectedTag(null);
              }}
              className="text-xs font-mono text-accent hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredEntries.map((entry) => (
            <article key={entry.id} className="relative group">
              {/* Glowing Node on Timeline */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent bg-background group-hover:bg-accent group-hover:shadow-[0_0_12px_rgba(34,211,238,0.5)] transition-all" />

              <div className="rounded-xl border border-border bg-surface/75 backdrop-blur-md p-5 sm:p-6 space-y-3 hover:border-accent/50 transition-colors">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded font-mono text-[11px] font-semibold border ${
                        entry.project === "DigiGuide"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                      }`}
                    >
                      {entry.project}
                    </span>

                    <span className="font-mono text-xs text-muted flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {entry.date}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-muted">
                    ID: {entry.id}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-base sm:text-lg font-bold text-text group-hover:text-accent transition-colors leading-snug">
                  {entry.title}
                </h2>

                {/* Summary */}
                <p className="text-sm text-muted leading-relaxed">
                  {entry.summary}
                </p>

                {/* Tags & Action Link */}
                <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-border/60">
                  <div className="flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setSelectedTag(tag)}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface border border-border/80 text-muted hover:border-accent hover:text-accent transition-colors cursor-pointer"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>

                  {entry.projectSlug !== "portfolio" && (
                    <Link
                      href={`/projects/${entry.projectSlug}`}
                      className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:text-text transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      {/* Back to Home CTA */}
      <div className="pt-8 border-t border-border text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface hover:border-accent hover:text-accent font-mono text-xs font-semibold text-text transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
