import { timelineItems, languageProficiencies } from "@/../content/site";
import { GraduationCap, Briefcase, Globe, Award } from "lucide-react";

export function ExperienceTimeline() {
  const educationItems = timelineItems.filter((i) => i.type === "education");
  const experienceItems = timelineItems.filter((i) => i.type === "experience");

  return (
    <section id="experience" className="py-14 space-y-10 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-4">
        <div className="space-y-1">
          <p className="font-mono text-xs text-accent font-semibold tracking-wider">
            04 // BACKGROUND
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
            Education & Industry Experience
          </h2>
        </div>
        <p className="text-xs font-mono text-muted max-w-sm">
          Academic foundations in Information & Communication Engineering combined with industry workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Column */}
        <div className="rounded-xl border border-border bg-surface/75 backdrop-blur-md p-6 space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-border/80 font-mono text-xs text-text font-semibold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span>Academic Qualifications</span>
          </div>

          <div className="relative border-l border-border/80 pl-6 space-y-8 ml-2">
            {educationItems.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Node dot */}
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-background group-hover:bg-accent transition-colors" />

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs text-accent font-medium">
                      {item.period}
                    </span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-accent/10 border border-accent/30 text-accent">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-base text-text">
                    {item.title}
                  </h3>

                  <p className="font-mono text-xs text-muted">
                    {item.organization} {item.location ? `· ${item.location}` : ""}
                  </p>

                  <p className="text-xs text-muted leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Languages Column */}
        <div className="space-y-8">
          {/* Experience card */}
          <div className="rounded-xl border border-border bg-surface/75 backdrop-blur-md p-6 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-border/80 font-mono text-xs text-text font-semibold uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-accent" />
              <span>Professional Experience</span>
            </div>

            <div className="relative border-l border-border/80 pl-6 space-y-8 ml-2">
              {experienceItems.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 border-secondary bg-background group-hover:bg-secondary transition-colors" />

                  <div className="space-y-1.5">
                    <span className="font-mono text-xs text-secondary font-medium">
                      {item.period}
                    </span>

                    <h3 className="font-bold text-base text-text">
                      {item.title}
                    </h3>

                    <p className="font-mono text-xs text-muted">
                      {item.organization}
                    </p>

                    <p className="text-xs text-muted leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages card */}
          <div className="rounded-xl border border-border bg-surface/75 backdrop-blur-md p-5 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-border/80 font-mono text-xs text-text font-semibold uppercase tracking-wider">
              <Globe className="w-4 h-4 text-accent" />
              <span>Language Proficiencies</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {languageProficiencies.map((lang) => (
                <div
                  key={lang.language}
                  className="rounded-lg border border-border bg-surface p-2.5 text-center space-y-1"
                >
                  <div className="font-semibold text-xs text-text">{lang.language}</div>
                  <div className="font-mono text-[11px] text-accent font-medium">
                    {lang.level}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] font-mono text-muted text-center pt-1">
              English C1 certified · German A2–B1 conversational
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
