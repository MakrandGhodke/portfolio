import Link from "next/link";
import { getProjectBySlug } from "@/../content/projects";
import { notFound } from "next/navigation";
import { GithubIcon } from "@/components/ui/Icons";
import { PipelineDiagram } from "@/components/projects/PipelineDiagram";
import { AccuracyMetric } from "@/components/projects/AccuracyMetric";
import { DemoVideo } from "@/components/projects/DemoVideo";
import { DeviceFrame } from "@/components/projects/DeviceFrame";
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  Users,
  CheckCircle2,
  Sparkles,
  Calendar,
  Compass,
  Cpu,
  Layers,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "DigiGuide Case Study | Makrand Ghodke",
  description:
    "AI landmark recognition and audio tour guide for Darmstadt. CLIP embeddings, FAISS vector search, and FastAPI real-time inference.",
};

export default function DigiGuidePage() {
  const project = getProjectBySlug("digiguide");

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

        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 font-mono text-xs text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Active Development</span>
        </span>
      </div>

      {/* Header Info */}
      <header className="space-y-6 border-b border-border pb-8">
        <div className="space-y-2">
          <p className="font-mono text-xs text-accent font-semibold tracking-wider">
            CASE STUDY // COMPUTER_VISION_&_VECTOR_SEARCH
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
            <span className="text-muted block text-[10px] uppercase">Academic Context</span>
            <span className="text-text font-medium flex items-center gap-1.5 mt-0.5">
              <Users className="w-3.5 h-3.5 text-accent" />
              <span>TU Darmstadt INNODATA</span>
            </span>
            <span className="text-[11px] text-muted block mt-0.5">
              Team of 4 · Oct 2025 – Feb 2026
            </span>
          </div>

          <div className="p-3 rounded-lg border border-border bg-surface/60">
            <span className="text-muted block text-[10px] uppercase">My Contribution</span>
            <span className="text-text font-medium flex items-center gap-1.5 mt-0.5">
              <Cpu className="w-3.5 h-3.5 text-accent" />
              <span>Inference & Preprocessing Lead</span>
            </span>
            <span className="text-[11px] text-muted block mt-0.5">
              POST /predict endpoint + RGB pipeline
            </span>
          </div>

          <div className="p-3 rounded-lg border border-border bg-surface/60 sm:col-span-2 md:col-span-1 flex flex-col justify-between">
            <span className="text-muted block text-[10px] uppercase">Repository</span>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent hover:text-text font-semibold mt-1 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>MakrandGhodke/digiguide</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[10px] text-muted block mt-0.5">Personal repo ongoing</span>
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

      {/* Demo Video Frame / Mockup */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-text">
            Walkthrough & Visual Interface
          </h2>
          <span className="font-mono text-xs text-muted">Flutter + FastAPI</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <DeviceFrame badge="DigiGuide Mobile Client (Material 3)">
              <div className="flex-1 flex flex-col justify-between text-left p-2 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="text-accent font-bold text-[11px]">DigiGuide AI</span>
                  <span className="text-emerald-400 text-[10px]">GPS Active</span>
                </div>

                <div className="rounded-lg border border-border bg-surface/80 p-2.5 space-y-1">
                  <span className="text-[10px] text-muted block">Identified Landmark</span>
                  <p className="font-bold text-text text-xs">Mathildenhöhe Darmstadt</p>
                  <p className="text-[10px] text-accent">UNESCO World Heritage Site</p>
                  <div className="flex items-center justify-between text-[10px] text-muted pt-1">
                    <span>Similarity:</span>
                    <span className="text-emerald-400 font-bold">0.93 ≥ 0.85</span>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface/80 p-2.5 space-y-1">
                  <span className="text-[10px] text-muted block">Live Open-Meteo Weather</span>
                  <p className="text-text text-[11px]">18°C · Clear Sky</p>
                  <p className="text-[10px] text-muted">Optimal visiting conditions</p>
                </div>

                <div className="rounded-lg border border-accent/40 bg-accent/10 p-2 text-center text-accent text-[11px] font-semibold">
                  Audio Guide Playing (TTS)
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

      {/* 2. Approach */}
      <section className="space-y-4 rounded-xl border border-border bg-surface/50 p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-text flex items-center gap-2">
          <span className="font-mono text-accent text-sm">02 //</span>
          <span>The Vector Search Approach</span>
        </h2>
        <p className="text-sm sm:text-base text-muted leading-relaxed">
          {project.overview.approach}
        </p>
      </section>

      {/* 3. Interactive Pipeline Diagram */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-text flex items-center gap-2">
          <span className="font-mono text-accent text-sm">03 //</span>
          <span>End-to-End System Pipeline</span>
        </h2>
        <PipelineDiagram />
      </section>

      {/* 4. Features */}
      <section className="space-y-4 rounded-xl border border-border bg-surface/50 p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-text flex items-center gap-2">
          <span className="font-mono text-accent text-sm">04 //</span>
          <span>Engineered Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {project.features?.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 p-3 rounded-lg border border-border bg-surface text-xs leading-relaxed text-muted"
            >
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Key Challenge Solved */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-text flex items-center gap-2">
          <span className="font-mono text-accent text-sm">05 //</span>
          <span>Engineering Challenge: The RGB Pipeline Bug</span>
        </h2>
        <AccuracyMetric />
      </section>

      {/* 6. My Role & Team Context */}
      <section className="space-y-4 rounded-xl border border-border bg-surface/50 p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-text flex items-center gap-2">
          <span className="font-mono text-accent text-sm">06 //</span>
          <span>My Role & Team Collaboration</span>
        </h2>
        <p className="text-sm sm:text-base text-muted leading-relaxed">
          {project.role}
        </p>
        <p className="text-xs text-muted leading-relaxed font-mono pt-1">
          Developed collaboratively within a team of 4 student engineers for the TU Darmstadt INNODATA project. Following the official semester conclusion in Feb 2026, ongoing architectural improvements and expanded landmark registries continue on my personal repository.
        </p>
      </section>

      {/* 7. Coverage Today */}
      <section className="space-y-4 rounded-xl border border-border bg-surface/50 p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-text flex items-center gap-2">
          <span className="font-mono text-accent text-sm">07 //</span>
          <span>Current Landmark Coverage (11 Sites)</span>
        </h2>
        <p className="text-xs sm:text-sm text-muted">
          Reference vector embeddings are currently populated for 11 historical and cultural sites across Darmstadt:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 font-mono text-xs">
          {project.coverage?.map((landmark, i) => (
            <div
              key={i}
              className="p-2.5 rounded-lg border border-border bg-surface flex items-center gap-2 text-text"
            >
              <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>{landmark}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Roadmap */}
      <section className="space-y-4 rounded-xl border border-border bg-surface/50 p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-text flex items-center gap-2">
            <span className="font-mono text-accent text-sm">08 //</span>
            <span>Next Milestones & Roadmap</span>
          </h2>
          <span className="font-mono text-xs text-accent">Active Roadmap</span>
        </div>
        <div className="space-y-2 pt-2">
          {project.roadmap?.map((item, i) => (
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
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>

        <Link
          href="/projects/spendwise"
          className="inline-flex items-center gap-2 text-accent hover:text-text font-semibold transition-colors"
        >
          <span>Next Case Study: SpendWise</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
