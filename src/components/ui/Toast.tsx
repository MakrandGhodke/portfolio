"use client";

import { useEffect } from "react";
import { Check, X } from "lucide-react";

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Toast({ message, isOpen, onClose }: ToastProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-lg border border-accent/40 bg-surface/95 backdrop-blur-md shadow-lg shadow-accent/10 text-xs font-mono text-text animate-in fade-in slide-in-from-bottom-3 duration-200">
      <span className="w-5 h-5 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent">
        <Check className="w-3 h-3" />
      </span>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-muted hover:text-text transition-colors cursor-pointer"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
