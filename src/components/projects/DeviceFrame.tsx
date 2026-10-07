"use client";

import React from "react";

interface DeviceFrameProps {
  children: React.ReactNode;
  className?: string;
  badge?: string;
}

export function DeviceFrame({
  children,
  className = "",
  badge = "Mobile Viewport",
}: DeviceFrameProps) {
  return (
    <div className={`relative mx-auto max-w-[300px] sm:max-w-[320px] ${className}`}>
      {/* Outer Phone Bezel */}
      <div className="relative rounded-[44px] p-3 border-2 border-border/80 bg-surface-raised shadow-2xl shadow-accent/5 backdrop-blur-md">
        {/* Bezel inner rim */}
        <div className="relative rounded-[36px] overflow-hidden border border-border/60 bg-background aspect-[9/19] flex flex-col justify-between">
          {/* Top Notch / Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
            <div className="w-24 h-4 rounded-full bg-surface border border-border/50 flex items-center justify-between px-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-text-muted/30" />
              <span className="w-2 h-2 rounded-full bg-accent/40" />
            </div>
          </div>

          {/* Screen Content */}
          <div className="relative w-full h-full flex flex-col pt-8 pb-4 px-3 overflow-hidden">
            {children}
          </div>

          {/* Home indicator bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 w-28 h-1 rounded-full bg-muted/40" />
        </div>
      </div>

      {/* Frame label */}
      {badge && (
        <div className="text-center mt-3">
          <span className="font-mono text-[11px] text-muted tracking-wide">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
}
