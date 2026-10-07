"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted bg-surface/50 opacity-70"
        disabled
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 rounded-md border border-border bg-surface/80 hover:border-accent hover:text-accent transition-all duration-200 flex items-center justify-center text-muted cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45 text-accent" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 -hover:rotate-12 text-slate-700" />
      )}
    </button>
  );
}
