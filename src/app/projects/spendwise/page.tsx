import Link from "next/link";
import { getProjectBySlug } from "@/../content/projects";
import { notFound } from "next/navigation";
import { GithubIcon } from "@/components/ui/Icons";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { DemoVideo } from "@/components/projects/DemoVideo";
import { DeviceFrame } from "@/components/projects/DeviceFrame";
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Database,
  Lock,
  Layers,
  ArrowRight,
  TrendingUp,
  FileText,
  AlertCircle,
} from "lucide-react";

export const metadata = {
  title: "SpendWise Case Study | Makrand Ghodke",
  description:
    "Household finance tracker installable as a PWA. Multi-tenant PostgreSQL schema with Row Level Security, Next.js API routes, and OCR receipt ingestion.",
};

export default function SpendWisePage() {
  const project = getProjectBySlug("spendwise");

  if (!project) {
    notFound();
  }

  return (
    <article className="py-6 sm:py-10 space-y-12 sm:space-y-16 max-w-4xl mx-auto">
      {/* Top Breadcrumb & Back Link */}
      <div className="flex items-center justify-between">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 font-mono text-xs text-cyan-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>Shipped to Production</span>
        </span>
      </div>

      {/* Header Info */}
      <header className="space-y-6 border-b border-border pb-8">
        <div className="space-y-2">
          <p className="font-mono text-xs text-accent font-semibold tracking-wider">
            CASE STUDY // FULL_STACK_&_PWA_ENGINEERING
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text">
            {project.title}
          </h1>
          <p className="text-base sm:text-xl text-accent font-mono">
            {project.tagline}
          </p>
        </div>

        <p className="text-base sm:text-lg text-muted leading-relaxed">
          {project.oneLiner}
        </p>

        {/* Project Metadata Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-border/80 text-xs font-mono">
          <div className="p-3 rounded-lg border border-border bg-surface/60">
            <span className="text-muted block text-[10px] uppercase">Project Scope</span>
            <span className="text-text font-medium flex items-center gap-1.5 mt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>Solo Engineering Project</span>
            </span>
            <span className="text-[11px] text-muted block mt-0.5">
              Mar 2026 – May 2026 · Shipped
            </span>
          </div>

          <div className="p-3 rounded-lg border border-border bg-surface/60">
            <span className="text-muted block text-[10px] uppercase">Production App</span>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent hover:text-text font-semibold mt-1 transition-colors"
            >
              <span>fintrack-black.vercel.app</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[10px] text-muted block mt-0.5">
              (Live deployment alias)
            </span>
          </div>

          <div className="p-3 rounded-lg border border-border bg-surface/60 sm:col-span-2 md:col-span-1">
            <span className="text-muted block text-[10px] uppercase">Repository</span>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent hover:text-text font-semibold mt-1 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>MakrandGhodke/SpendWise</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[10px] text-muted block mt-0.5">Public Open Source</span>
          </div>
        </div>

        {/* Stack Chips */}
        <div className="space-y-2 pt-2">
          <span className="font-mono text-[11px] text-muted uppercase">Tech Stack</span>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded-md border border-border bg-surface font-mono text-xs text-text"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Visual Demo / Interface Mockup */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-text">
            PWA Mobile Shell & Dashboard Walkthrough
          </h2>
          <span className="font-mono text-xs text-muted">Next.js + Supabase</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <DeviceFrame badge="SpendWise PWA (iOS / Android)">
              <div className="flex-1 flex flex-col justify-between text-left p-2 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="text-accent font-bold text-[11px]">SpendWise</span>
                  <span className="text-emerald-400 text-[10px]">RLS Verified</span>
                </div>

                <div className="rounded-lg border border-border bg-surface/80 p-2.5 space-y-1">
                  <span className="text-[10px] text-muted block">Monthly Net Outflow</span>
                  <p className="font-bold text-text text-sm">€ 1,248.50</p>
                  <div className="w-full bg-border rounded-full h-1 mt-1">
                    <div className="bg-accent h-full w-[65%]" />
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface/80 p-2 space-y-1 text-[11px]">
                  <span className="text-[10px] text-muted block">Recent Transaction</span>
                  <div className="flex items-center justify-between">
                    <span className="text-text">Rewe City Market</span>
                    <span className="text-accent font-bold">-€ 34.20</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">OCR Ingested</span>
                </div>

                <div className="rounded-lg border border-accent/40 bg-accent/10 p-2 text-center text-accent text-[11px] font-semibold">
                  + Add Receipt via Camera
                </div>
              </div>
            </DeviceFrame>
          </div>

          <div className="lg:col-span-7">
            <DemoVideo
              videoUrl={project.links.demoVideo}
              posterUrl={project.links.demoPoster}
              projectTitle={project.title}
              tagline={project.tagline}
            />
          </div>
        </div>
      </section>

      {/* 1. Problem */}
      <section className="space-y-4 rounded-xl border border-border bg-surface/50 p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-text flex items-center gap-2">
          <span className="font-mono text-accent text-sm">01 //</span>
          <span>The Problem</span>
        </h2>
        <p className="text-sm sm:text-base text-muted leading-relaxed">
          {project.overview.problem}
        </p>
      </section>

      {/* 2. Architecture & Security */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-text flex items-center gap-2">
          <span className="font-mono text-accent text-sm">02 //</span>
          <span>System Architecture & Row Level Security</span>
        </h2>
        <p className="text-sm sm:text-base text-muted leading-relaxed">
          {project.overview.architecture}
        </p>
        <ArchitectureDiagram />
      </section>

      {/* 3. Highlights */}
      <section className="space-y-4 rounded-xl border border-border bg-surface/50 p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-text flex items-center gap-2">
          <span className="font-mono text-accent text-sm">03 //</span>
          <span>Key Implementation Highlights</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {project.highlights?.map((highlight, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 p-3 rounded-lg border border-border bg-surface text-xs leading-relaxed text-muted"
            >
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. What I'd Improve */}
      <section className="space-y-4 rounded-xl border border-border bg-surface/50 p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-text flex items-center gap-2">
            <span className="font-mono text-accent text-sm">04 //</span>
            <span>Planned Architectural Improvements</span>
          </h2>
          <span className="font-mono text-xs text-muted">Engineering Roadmap</span>
        </div>
        <p className="text-xs sm:text-sm text-muted">
          Identified technical optimizations targeted for subsequent release cycles:
        </p>
        <div className="space-y-2 pt-2">
          {project.improvements?.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg border border-border bg-surface text-xs font-mono text-muted"
            >
              <span className="text-accent font-bold">0{i + 1}</span>
              <span className="text-text">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border font-mono text-xs">
        <Link
          href="/projects/digiguide"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Previous Case Study: DigiGuide</span>
        </Link>

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-accent hover:text-text font-semibold transition-colors"
        >
          <span>Back to All Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
