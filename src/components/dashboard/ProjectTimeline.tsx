import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Clock } from "lucide-react";

interface TimelineStep {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "pending";
  date?: string;
}

interface ProjectTimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export function ProjectTimeline({ steps, className }: ProjectTimelineProps) {
  return (
    <div className={cn("space-y-0", className)}>
      {steps.map((step, index) => (
        <div key={step.id} className="relative flex gap-4">
          {/* Line */}
          {index < steps.length - 1 && (
            <div
              className={cn(
                "absolute left-[15px] top-10 w-0.5 h-full -translate-x-1/2",
                step.status === "completed" ? "bg-success" : "bg-border"
              )}
            />
          )}

          {/* Icon */}
          <div className="relative z-10 flex-shrink-0">
            {step.status === "completed" ? (
              <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
            ) : step.status === "in-progress" ? (
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center animate-pulse-glow">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <Circle className="w-5 h-5 text-muted-foreground" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="glass-card rounded-lg p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4
                    className={cn(
                      "font-semibold",
                      step.status === "pending"
                        ? "text-muted-foreground"
                        : "text-foreground"
                    )}
                  >
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {step.description}
                  </p>
                </div>
                {step.date && (
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {step.date}
                  </span>
                )}
              </div>
              {step.status === "in-progress" && (
                <div className="mt-3">
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: "65%" }} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">65% complete</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
