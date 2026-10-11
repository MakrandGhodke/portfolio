"use client";

import { useState } from "react";
import {
  Smartphone,
  Server,
  Database,
  Lock,
  ScanText,
  ShieldCheck,
  ArrowRight,
  Layers,
} from "lucide-react";

export function ArchitectureDiagram() {
  const [selectedLayer, setSelectedLayer] = useState<string>("rls");

  return (
    <div className="rounded-2xl border border-border bg-surface/75 backdrop-blur-xl p-5 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/80 pb-4">
        <div>
          <div className="font-mono text-xs text-accent font-semibold flex items-center gap-1.5">
            <Layers className="w-4 h-4" />
            <span>FULL-STACK ARCHITECTURE SPECIFICATION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-text">
            SpendWise Multi-Tenant & Ingestion Architecture
          </h3>
        </div>

        <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface border border-border text-muted">
          PWA · Supabase RLS · Next.js
        </span>
      </div>

      <p className="text-sm text-muted leading-relaxed">
        SpendWise isolates household data at the database layer through PostgreSQL Row Level Security (RLS). Every query automatically binds to the authenticated user's tenant token, preventing data leakage across households.
      </p>

      {/* Visual Flow Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        {/* Layer 1: Client */}
        <div
          onClick={() => setSelectedLayer("client")}
          className={`rounded-xl border p-5 space-y-3 cursor-pointer transition-all ${
            selectedLayer === "client"
              ? "border-accent bg-surface-raised shadow-[0_0_20px_rgba(34,211,238,0.15)]"
              : "border-border bg-surface hover:border-accent/40"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-muted">LAYER 01</span>
            <Smartphone className="w-4 h-4 text-accent" />
          </div>

          <h4 className="font-bold text-base text-text">Client (PWA)</h4>
          <p className="text-xs text-muted leading-relaxed">
            Next.js App Router frontend with Tailwind CSS. Installable PWA cached on iOS Safari & Android Chrome.
          </p>

          <div className="pt-2 font-mono text-[11px] text-accent flex items-center gap-1">
            <span>Client State & Offline Shell</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>

        {/* Layer 2: API & Data Engine */}
        <div
          onClick={() => setSelectedLayer("api")}
          className={`rounded-xl border p-5 space-y-3 cursor-pointer transition-all ${
            selectedLayer === "api"
              ? "border-accent bg-surface-raised shadow-[0_0_20px_rgba(34,211,238,0.15)]"
              : "border-border bg-surface hover:border-accent/40"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-muted">LAYER 02</span>
            <Server className="w-4 h-4 text-accent" />
          </div>

          <h4 className="font-bold text-base text-text">Next.js API Routes</h4>
          <p className="text-xs text-muted leading-relaxed">
            REST routes for transactions with server-side filtering, sorting, cursor pagination, and real-time category aggregation.
          </p>

          <div className="pt-2 font-mono text-[11px] text-accent flex items-center gap-1">
            <span>JWT Auth Header Verified</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>

        {/* Layer 3: Database & Security */}
        <div
          onClick={() => setSelectedLayer("rls")}
          className={`rounded-xl border p-5 space-y-3 cursor-pointer transition-all ${
            selectedLayer === "rls"
              ? "border-accent bg-surface-raised shadow-[0_0_20px_rgba(34,211,238,0.15)]"
              : "border-border bg-surface hover:border-accent/40"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-emerald-400 font-bold">SECURITY GATE</span>
            <Lock className="w-4 h-4 text-emerald-400" />
          </div>

          <h4 className="font-bold text-base text-text">Postgres + RLS</h4>
          <p className="text-xs text-muted leading-relaxed">
            Supabase PostgreSQL with strict Row Level Security (RLS) policies. Database restricts reads and writes strictly to <code className="text-accent font-mono">auth.uid()</code>.
          </p>

          <div className="pt-2 font-mono text-[11px] text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Multi-Tenant Enforced</span>
          </div>
        </div>
      </div>

      {/* Layer Detail Focus Box */}
      <div className="rounded-xl border border-border bg-surface-raised p-4 sm:p-5 space-y-2 text-xs font-mono">
        <div className="flex items-center justify-between text-muted border-b border-border/80 pb-2">
          <span>SELECTED_COMPONENT_SPEC:</span>
          <span className="text-accent font-bold uppercase">{selectedLayer}</span>
        </div>

        {selectedLayer === "rls" && (
          <div className="space-y-1.5 pt-1 text-muted">
            <p className="text-text font-semibold">Row Level Security Policy Definition:</p>
            <pre className="p-2.5 rounded bg-surface border border-border text-[11px] text-emerald-400 overflow-x-auto">
{`CREATE POLICY "user_tenant_isolation" ON transactions
FOR ALL USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);`}
            </pre>
            <p className="text-[11px]">Even if an API parameter is manipulated, database-level security strictly rejects records outside the active user's session.</p>
          </div>
        )}

        {selectedLayer === "api" && (
          <div className="space-y-1.5 pt-1 text-muted">
            <p className="text-text font-semibold">Server-Side Endpoints & Data Engine:</p>
            <p>• <code className="text-accent">GET /api/transactions</code>: Server-side cursor pagination, date range slicing, and monthly category breakdown.</p>
            <p>• <code className="text-accent">POST /api/transactions</code>: Validates transaction payload, handles structured expense categorization, and triggers optimistic client update.</p>
          </div>
        )}

        {selectedLayer === "client" && (
          <div className="space-y-1.5 pt-1 text-muted">
            <p className="text-text font-semibold">Progressive Web App Shell:</p>
            <p>• Manifest configured with standalone display mode, dynamic maskable app icons, and offline fallback.</p>
            <p>• Fast optimistic updates on transaction additions for zero perceived latency.</p>
          </div>
        )}
      </div>
    </div>
  );
}
