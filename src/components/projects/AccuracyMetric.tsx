import { AlertTriangle, CheckCircle, TrendingUp, Info } from "lucide-react";

export function AccuracyMetric() {
  return (
    <div className="rounded-2xl border border-border bg-surface/75 backdrop-blur-xl p-5 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/80 pb-4">
        <div>
          <div className="font-mono text-xs text-accent font-semibold flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span>KEY CHALLENGE & PREPROCESSING OPTIMIZATION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-text">
            Fixing Color Inversion Bug (30% → 100% Baseline Accuracy)
          </h3>
        </div>

        <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface border border-border text-muted">
          5 initial classes
        </span>
      </div>

      <p className="text-sm text-muted leading-relaxed">
        During initial evaluation, recognition accuracy plateaued at an unacceptable 30% across our 5 baseline target classes.
        Upon inspecting feature embeddings, I discovered the root cause: image tensors were being fed to CLIP without an explicit BGR-to-RGB conversion, distorting the learned visual tokens. Correcting the color space and rebuilding the FAISS index raised accuracy to 100% on the baseline set.
      </p>

      {/* Before / After Visual Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Before Card */}
        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-red-400 font-semibold flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              <span>BEFORE (Raw Pipeline)</span>
            </span>
            <span className="text-2xl font-extrabold font-mono text-red-400">
              30%
            </span>
          </div>

          <div className="w-full bg-surface rounded-full h-2 overflow-hidden border border-red-500/20">
            <div className="bg-red-400 h-full w-[30%]" />
          </div>

          <div className="space-y-1 font-mono text-[11px] text-muted">
            <p>• Color Space: BGR / Unnormalized</p>
            <p>• CLIP Tokenizer: Inverted semantic vectors</p>
            <p>• FAISS Cosine: High false-negative rate</p>
          </div>
        </div>

        {/* After Card */}
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" />
              <span>AFTER (RGB Preprocessing)</span>
            </span>
            <span className="text-2xl font-extrabold font-mono text-emerald-400">
              100%
            </span>
          </div>

          <div className="w-full bg-surface rounded-full h-2 overflow-hidden border border-emerald-500/20">
            <div className="bg-emerald-400 h-full w-[100%]" />
          </div>

          <div className="space-y-1 font-mono text-[11px] text-muted">
            <p>• Color Space: Strict RGB transpose & unit L2 norm</p>
            <p>• CLIP Tokenizer: Accurate ViT-B/32 representations</p>
            <p>• FAISS Cosine: 100% match on 5 baseline classes</p>
          </div>
        </div>
      </div>

      {/* Explicit Disclaimer Notice as instructed */}
      <div className="rounded-lg border border-border bg-surface-raised p-3.5 flex items-start gap-2.5 text-xs text-muted">
        <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
        <p>
          <strong className="text-text font-medium">Evaluation Note:</strong> The 100% metric was measured strictly across the initial 5 baseline test classes (Mathildenhöhe, Residenzschloss, Waldspirale, Darmstadtium, Staatstheater). It reflects the resolution of the color-space preprocessing failure, not an overall 100% claim for arbitrary unconstrained outdoor conditions.
        </p>
      </div>
    </div>
  );
}
