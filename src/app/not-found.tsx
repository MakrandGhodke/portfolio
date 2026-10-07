import Link from "next/link";
import { Terminal, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 space-y-6">
      <div className="w-14 h-14 rounded-2xl border border-accent/40 bg-accent/10 flex items-center justify-center text-accent shadow-lg shadow-accent/10">
        <Terminal className="w-7 h-7" />
      </div>

      <div className="space-y-2 max-w-md">
        <p className="font-mono text-xs text-accent font-semibold tracking-wider">
          ERROR 404 // ROUTE_NOT_FOUND
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text">
          Coordinate Missing
        </h1>
        <p className="text-sm text-muted leading-relaxed">
          The requested path does not map to an indexed route or asset in this deployment.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-text text-background font-mono text-xs font-semibold hover:bg-accent hover:text-background transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface font-mono text-xs font-medium text-text hover:border-accent hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Explore Projects</span>
        </Link>
      </div>
    </div>
  );
}
