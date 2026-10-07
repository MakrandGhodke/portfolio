"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Video, Film, Sparkles, AlertCircle } from "lucide-react";

interface DemoVideoProps {
  videoUrl?: string;
  posterUrl?: string;
  projectTitle: string;
  tagline?: string;
  aspectRatio?: "video" | "mobile";
}

export function DemoVideo({
  videoUrl,
  posterUrl,
  projectTitle,
  tagline,
  aspectRatio = "video",
}: DemoVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const isYouTube =
    videoUrl &&
    (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be"));

  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v=")) {
      return url.replace("watch?v=", "embed/") + "?autoplay=1&rel=0";
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    return url;
  };

  // If no video URL is provided yet, show the high-end "Demo coming soon" placeholder frame
  if (!videoUrl) {
    return (
      <div className="relative rounded-2xl border border-border bg-surface-raised/90 overflow-hidden shadow-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[280px]">
        {/* Ambient subtle light */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at center, rgba(34, 211, 238, 0.08) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="w-12 h-12 rounded-xl border border-accent/40 bg-accent/10 flex items-center justify-center text-accent shadow-xs">
          <Film className="w-6 h-6" />
        </div>

        <div className="space-y-1.5 max-w-md">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-border bg-surface font-mono text-[11px] text-accent font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Interactive Demo Stream</span>
          </div>

          <h4 className="text-base sm:text-lg font-bold text-text">
            {projectTitle} Demo Walkthrough
          </h4>

          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            {tagline || "High-resolution recorded application demo and latency benchmark walkthrough."}
          </p>
        </div>

        <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-muted border-t border-border/70">
          <AlertCircle className="w-3.5 h-3.5 text-accent" />
          <span>Demo video asset coming soon (specified in TODO.md)</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-2xl border border-border overflow-hidden bg-surface-raised shadow-xl ${
        aspectRatio === "mobile" ? "aspect-[9/16] max-w-[340px] mx-auto" : "aspect-video w-full"
      }`}
    >
      {!isPlaying ? (
        <div className="relative w-full h-full flex items-center justify-center group cursor-pointer">
          {posterUrl ? (
            <Image
              src={posterUrl}
              alt={`${projectTitle} Demo Poster`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-surface flex flex-col items-center justify-center p-6 text-center">
              <Video className="w-10 h-10 text-muted mb-2" />
              <p className="font-mono text-xs text-muted">{projectTitle} Demo</p>
            </div>
          )}

          {/* Dark Overlay on Hover */}
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />

          {/* Play Button Trigger */}
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="relative z-10 w-16 h-16 rounded-full border border-accent/60 bg-surface/90 text-accent flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-accent transition-all duration-200 cursor-pointer"
            aria-label={`Play ${projectTitle} Demo`}
          >
            <Play className="w-7 h-7 ml-1 fill-accent/20 text-accent" />
          </button>
        </div>
      ) : (
        <div className="w-full h-full">
          {isYouTube ? (
            <iframe
              src={getYouTubeEmbedUrl(videoUrl)}
              title={`${projectTitle} Demo Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <video
              src={videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
}
