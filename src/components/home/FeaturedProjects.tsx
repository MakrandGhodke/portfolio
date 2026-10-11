import Link from "next/link";
import { projects } from "@/../content/projects";
import { GithubIcon } from "@/components/ui/Icons";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  Eye,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 space-y-12 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-4">
        <div className="space-y-1">
          <p className="font-mono text-xs text-accent font-semibold tracking-wider">
            01 // FEATURED_PROJECTS
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
            Production Systems & Case Studies
          </h2>
        </div>
        <p className="text-xs font-mono text-muted max-w-sm">
          Real deployments with measurable metrics, clean vector retrieval, and multi-tenant isolation.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-10">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group relative rounded-2xl border border-border bg-surface/75 backdrop-blur-xl p-6 sm:p-8 hover:border-accent/60 transition-all duration-300 hover:shadow-[0_16px_48px_-12px_rgba(34,211,238,0.12)]"
          >
            {/* Top row: Status & Context */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border/60">
              <div className="flex items-center gap-2.5">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[11px] font-semibold tracking-wide border ${
                    project.status === "Active"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      : "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      project.status === "Active" ? "bg-emerald-400 animate-pulse" : "bg-cyan-400"
                    }`}
                  />
                  <span>{project.status}</span>
                </span>

                <span className="text-xs font-mono text-muted">
                  {project.context}
                </span>
              </div>

              {/* External Links */}
              <div className="flex items-center gap-3 text-xs font-mono">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-md border border-border bg-surface hover:border-accent hover:text-accent transition-colors text-muted"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-md border border-border bg-surface hover:border-accent hover:text-accent transition-colors text-muted"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Main content body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              {/* Left Column: Description & Stack */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text group-hover:text-accent transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="font-mono text-xs text-accent mt-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {project.oneLiner}
                </p>

                {/* Technical highlights summary */}
                <div className="rounded-xl border border-border/80 bg-surface-raised/50 p-4 space-y-2 text-xs">
                  <div className="font-mono text-accent font-semibold flex items-center gap-1.5">
                    {project.slug === "digiguide" ? (
                      <Eye className="w-3.5 h-3.5" />
                    ) : (
                      <ShieldCheck className="w-3.5 h-3.5" />
                    )}
                    <span>
                      {project.slug === "digiguide"
                        ? "Vector Search & Preprocessing Breakthrough"
                        : "PostgreSQL Multi-Tenant Security & PWA"}
                    </span>
                  </div>
                  <p className="text-muted leading-relaxed">
                    {project.slug === "digiguide"
                      ? "Resolved 30% → 100% classification accuracy on 5 baseline classes by fixing RGB channel conversions before CLIP. 512-dim FAISS IndexFlatL2 matching with similarity ≥ 0.85."
                      : "Multi-tenant PostgreSQL schema protected by Supabase Row Level Security (RLS) policies. Installable PWA with fast transaction CRUD and 6-month spending analytics."}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="space-y-2 pt-2">
                  <p className="font-mono text-[11px] text-muted uppercase tracking-wider">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md border border-border bg-surface font-mono text-xs text-muted hover:border-accent/40 hover:text-text transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA to Case Study */}
                <div className="pt-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent hover:text-text transition-colors group/link"
                  >
                    <span>Read in-depth case study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Tech Teaser Box */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-border bg-surface-raised/80 p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-border/70 pb-3 font-mono text-xs text-muted">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>TECHNICAL_SPEC</span>
                  </div>
                  <span className="text-[10px] text-accent">
                    {project.slug === "digiguide" ? "CLIP_VIT_B32" : "SUPABASE_RLS"}
                  </span>
                </div>

                {project.slug === "digiguide" ? (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-surface border border-border space-y-1.5">
                      <div className="text-[11px] text-muted">Vector Similarity Threshold:</div>
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-400 font-bold">Cosine Sim ≥ 0.85</span>
                        <span className="text-[10px] text-muted">FAISS IndexFlatL2</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
                        <div className="bg-accent h-full w-[85%]" />
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-surface border border-border space-y-1">
                      <div className="text-[11px] text-muted">RGB Pipeline Improvement:</div>
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-red-400">30% (raw)</span>
                        <span className="text-muted">→</span>
                        <span className="text-emerald-400">100% (RGB fixed)</span>
                      </div>
                      <div className="text-[10px] text-muted">
                        Measured across 5 initial target classes
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-surface border border-border text-[11px] text-muted flex items-center justify-between">
                      <span>Darmstadt Coverage:</span>
                      <span className="text-text font-bold">11 Curated Sites</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-surface border border-border space-y-1.5">
                      <div className="text-[11px] text-muted">Data Isolation:</div>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-bold">PostgreSQL RLS</span>
                        <span className="text-[10px] text-emerald-400">Enforced</span>
                      </div>
                      <p className="text-[10px] text-muted">
                        Zero data leakage between tenant accounts
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-surface border border-border space-y-1.5">
                      <div className="text-[11px] text-muted">Transaction Engine:</div>
                      <div className="flex items-center justify-between">
                        <span className="text-text font-bold">CRUD API Routes</span>
                        <span className="text-[10px] text-accent">PWA Native</span>
                      </div>
                      <p className="text-[10px] text-muted">
                        Server-side filtering, sorting & pagination
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-surface border border-border text-[11px] text-muted flex items-center justify-between">
                      <span>Deployment:</span>
                      <span className="text-emerald-400 font-bold">Vercel Edge</span>
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-border bg-surface hover:border-accent hover:text-accent font-mono text-xs text-muted transition-colors"
                  >
                    <span>View Architecture & Metrics</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
