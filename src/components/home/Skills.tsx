import { skillCategories } from "@/../content/site";
import {
  Brain,
  Code2,
  Server,
  Smartphone,
  Database,
  Wrench,
} from "lucide-react";

export function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "ML / AI":
        return <Brain className="w-4 h-4 text-accent" />;
      case "Languages":
        return <Code2 className="w-4 h-4 text-accent" />;
      case "Backend":
        return <Server className="w-4 h-4 text-accent" />;
      case "Frontend / Mobile":
        return <Smartphone className="w-4 h-4 text-accent" />;
      case "Data":
        return <Database className="w-4 h-4 text-accent" />;
      case "Tools":
        return <Wrench className="w-4 h-4 text-accent" />;
      default:
        return <Code2 className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <section id="skills" className="py-14 space-y-8 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-4">
        <div className="space-y-1">
          <p className="font-mono text-xs text-accent font-semibold tracking-wider">
            03 // TECHNICAL_ARSENAL
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
            Skills & Core Competencies
          </h2>
        </div>
        <p className="text-xs font-mono text-muted max-w-sm">
          Hands-on machine learning, vector architectures, systems development and production data pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-border bg-surface/75 backdrop-blur-md p-5 space-y-4 hover:border-accent/40 transition-colors"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-border/70">
              {getCategoryIcon(group.category)}
              <h3 className="font-mono text-xs font-semibold text-text uppercase tracking-wider">
                {group.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-2.5 py-1 rounded-md border border-border bg-surface text-muted hover:border-accent hover:text-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
