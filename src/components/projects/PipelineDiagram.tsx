"use client";

import { useState } from "react";
import {
  Camera,
  Send,
  RotateCw,
  Cpu,
  Search,
  CheckCircle,
  Volume2,
  ArrowRight,
  ChevronRight,
  Zap,
} from "lucide-react";

interface PipelineStepInfo {
  step: number;
  name: string;
  sub: string;
  icon: typeof Camera;
  detail: string;
  input: string;
  output: string;
  stack: string;
}

const pipelineSteps: PipelineStepInfo[] = [
  {
    step: 1,
    name: "Capture",
    sub: "Device Input + GPS",
    icon: Camera,
    detail:
      "Captures high-resolution frame via Flutter Camera or user Photo Gallery. Concurrently reads high-precision device GPS coordinates via Geolocator plugin.",
    input: "Raw JPEG/PNG + Lat/Lon Coordinates",
    output: "Binary Image Stream + (lat, lon)",
    stack: "Flutter · Geolocator Plugin",
  },
  {
    step: 2,
    name: "Transport",
    sub: "FastAPI Ingestion",
    icon: Send,
    detail:
      "Asynchronous multipart HTTP POST /predict to the FastAPI backend. Streamlined payload serialization with validation checks.",
    input: "Multipart form payload",
    output: "Validated backend memory buffer",
    stack: "HTTP/2 · FastAPI · Pydantic",
  },
  {
    step: 3,
    name: "Rotation Fix",
    sub: "EXIF & Quad-Angle Normalization",
    icon: RotateCw,
    detail:
      "Normalizes orientation using Pillow EXIF transpose. Generates test evaluations across 0°, 90°, 180°, and 270° to safeguard against phone gyroscope inversion errors.",
    input: "Raw buffer with variable EXIF orientation",
    output: "Upright RGB Image Canvas (224x224)",
    stack: "Pillow (PIL) · NumPy",
  },
  {
    step: 4,
    name: "Embedding",
    sub: "CLIP ViT-B/32 Inference",
    icon: Cpu,
    detail:
      "Passes normalized RGB image to OpenAI CLIP (clip-vit-base-patch32). Computes 512-dimensional dense semantic embedding and applies L2-normalization for unit hypersphere projection.",
    input: "Normalized RGB Tensor [1, 3, 224, 224]",
    output: "512-dim Unit Vector (||v||₂ = 1.0)",
    stack: "PyTorch · OpenAI CLIP",
  },
  {
    step: 5,
    name: "Vector Search",
    sub: "FAISS Nearest-Neighbor Index",
    icon: Search,
    detail:
      "Executes k-nearest neighbor query against precomputed FAISS IndexFlatL2 index. Converts L2 Euclidean distance directly to cosine similarity (cos = 1 - d²/2).",
    input: "512-dim query vector",
    output: "Top-k Landmark IDs + Cosine Similarities",
    stack: "FAISS (IndexFlatL2) · C++ backend",
  },
  {
    step: 6,
    name: "Validation",
    sub: "Similarity Gating & Haversine",
    icon: CheckCircle,
    detail:
      "Enforces similarity threshold ≥ 0.85 for definite match. If similarity falls below 0.85 and GPS is present, computes Haversine distances to rank landmarks within 50 km as candidates.",
    input: "Cosine similarity + GPS fix",
    output: "Confirmed Landmark ID or Proximity Suggestions",
    stack: "Haversine Formula · SQLite Geospatial",
  },
  {
    step: 7,
    name: "Narration",
    sub: "Dossier, Weather & TTS Synthesis",
    icon: Volume2,
    detail:
      "Retrieves curated architectural and historical dossiers, pulls real-time weather from Open-Meteo API, and synthesizes spoken audio guide on client.",
    input: "Landmark ID + Coordinates",
    output: "Historical Dossier, Live Weather, Spoken Audio",
    stack: "Open-Meteo API · Text-to-Speech",
  },
];

export function PipelineDiagram() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const current = pipelineSteps.find((s) => s.step === activeStep) || pipelineSteps[0];

  return (
    <div className="rounded-2xl border border-border bg-surface/75 backdrop-blur-xl p-5 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/80 pb-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-accent">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE ARCHITECTURE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-text">
            7-Step Vision & Vector Pipeline
          </h3>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-xs text-muted">
          <span>Click any step to inspect</span>
        </div>
      </div>

      {/* Step Indicators Bar (Horizontal scroll on mobile/tablet) */}
      <div className="overflow-x-auto pb-2 -mx-2 px-2 scrollbar-thin">
        <div className="flex items-center min-w-[700px] justify-between relative py-2">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-border -translate-y-1/2 -z-0" />

          {pipelineSteps.map((s) => {
            const Icon = s.icon;
            const isActive = s.step === activeStep;
            const isCompleted = s.step < activeStep;

            return (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStep(s.step)}
                className={`relative z-10 flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all cursor-pointer group ${
                  isActive
                    ? "scale-105"
                    : "hover:scale-102 opacity-80 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                    isActive
                      ? "border-accent bg-accent text-background shadow-[0_0_16px_rgba(34,211,238,0.4)]"
                      : isCompleted
                      ? "border-accent/40 bg-surface text-accent"
                      : "border-border bg-surface text-muted group-hover:border-accent/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="text-center">
                  <div
                    className={`font-mono text-[10px] font-bold ${
                      isActive ? "text-accent" : "text-muted"
                    }`}
                  >
                    0{s.step}
                  </div>
                  <div
                    className={`text-xs font-semibold whitespace-nowrap ${
                      isActive ? "text-text" : "text-muted"
                    }`}
                  >
                    {s.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Deep Inspection Panel for Active Step */}
      <div className="rounded-xl border border-accent/30 bg-surface-raised/90 p-5 sm:p-6 space-y-4 animate-in fade-in duration-200">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent/15 border border-accent/40 text-accent font-bold">
              Step 0{current.step} of 07
            </span>
            <h4 className="text-lg font-bold text-text">{current.name}</h4>
            <span className="text-xs font-mono text-muted hidden sm:inline">
              — {current.sub}
            </span>
          </div>

          <span className="font-mono text-xs text-muted">
            Tech: <span className="text-text font-semibold">{current.stack}</span>
          </span>
        </div>

        <p className="text-sm text-text/90 leading-relaxed">
          {current.detail}
        </p>

        {/* Input & Output Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs font-mono">
          <div className="p-3 rounded-lg border border-border bg-surface">
            <span className="text-muted block text-[10px] uppercase">Input Data</span>
            <span className="text-text font-medium">{current.input}</span>
          </div>
          <div className="p-3 rounded-lg border border-border bg-surface">
            <span className="text-muted block text-[10px] uppercase">Output Transformation</span>
            <span className="text-accent font-medium">{current.output}</span>
          </div>
        </div>

        {/* Scrubber Navigation */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            disabled={activeStep === 1}
            onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
            className="px-3 py-1.5 rounded-lg border border-border text-xs font-mono text-muted hover:text-text hover:border-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous Stage
          </button>

          <span className="font-mono text-[11px] text-muted">
            {activeStep} / 7
          </span>

          <button
            type="button"
            disabled={activeStep === 7}
            onClick={() => setActiveStep((prev) => Math.min(7, prev + 1))}
            className="px-3 py-1.5 rounded-lg border border-accent/40 bg-accent/10 text-xs font-mono text-accent hover:bg-accent/20 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next Stage →
          </button>
        </div>
      </div>
    </div>
  );
}
