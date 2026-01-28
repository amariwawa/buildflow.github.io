import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({ icon: Icon, value, label, trend, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 card-hover",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        {trend && (
          <span
            className={cn(
              "text-xs font-medium px-2 py-1 rounded-full",
              trend.isPositive
                ? "bg-success/10 text-success"
                : "bg-destructive/10 text-destructive"
            )}
          >
            {trend.isPositive ? "+" : "-"}{trend.value}%
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground mt-1">{label}</p>
      </div>
    </div>
  );
}
