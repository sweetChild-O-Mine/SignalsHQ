import React from "react";
import { CheckCircle2, Clock, Loader2, AlertTriangle, TrendingUp } from "lucide-react";
import { PreviewBadge } from "./Badge";

interface TaskRow {
  label: string;
  detail: string;
  value?: string;
  status: "complete" | "review" | "running" | "flagged";
}

const statusConfig = {
  complete: {
    icon: CheckCircle2,
    badge: <PreviewBadge variant="green">Done ✓</PreviewBadge>,
    iconClass: "text-green-500",
  },
  review: {
    icon: Clock,
    badge: <PreviewBadge variant="amber">In Review</PreviewBadge>,
    iconClass: "text-amber-500",
  },
  running: {
    icon: Loader2,
    badge: <PreviewBadge variant="purple">Running</PreviewBadge>,
    iconClass: "text-purple-500 animate-spin",
  },
  flagged: {
    icon: AlertTriangle,
    badge: <PreviewBadge variant="red">Flagged</PreviewBadge>,
    iconClass: "text-red-500",
  },
};

// Real SignalsHQ product tasks
const defaultTasks: TaskRow[] = [
  {
    label: "Tax Assist",
    detail: "IRS §199A QBI deduction — Federal & SALT reference",
    status: "complete",
  },
  {
    label: "Client Organizer",
    detail: "K-1, 1099s, W-2s — auto-extracted at 95%+ accuracy",
    status: "complete",
  },
  {
    label: "Client Review",
    detail: "Workpapers — 1040, 1065, 1120-S · first-pass draft",
    status: "running",
  },
  {
    label: "Time Saved This Session",
    detail: "Prep automation · redirect to advisory",
    value: "4+ hrs",
    status: "complete",
  },
];

interface AppPreviewCardProps {
  tasks?: TaskRow[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function AppPreviewCard({
  tasks = defaultTasks,
  title = "Active Agent Tasks",
  subtitle = "Tax Season 2024",
  className = "",
}: AppPreviewCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        background: "linear-gradient(135deg, #FFF1F2 0%, #FAF5FF 50%, #EEF2FF 100%)",
        boxShadow: "0 24px 64px -12px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.08)",
      }}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between border-b border-preview-border bg-white/70 px-5 py-4 backdrop-blur-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">SignalsHQ</p>
          <p className="mt-0.5 text-sm font-semibold text-preview-text">{title}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400 status-dot-active" />
          <span className="text-xs text-preview-muted">{subtitle}</span>
        </div>
      </div>

      {/* Task Rows */}
      <div className="divide-y divide-preview-border/60 bg-white/40 backdrop-blur-sm">
        {tasks.map((task, i) => {
          const config = statusConfig[task.status];
          const Icon = config.icon;
          return (
            <div key={i} className="flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-white/50">
              <div className="flex items-center gap-3">
                <Icon size={15} className={`flex-shrink-0 ${config.iconClass}`} />
                <div>
                  <p className="text-sm font-medium text-preview-text">{task.label}</p>
                  <p className="text-[11px] text-preview-muted">{task.detail}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {task.value && (
                  <span className="font-financial text-sm font-semibold text-preview-text">{task.value}</span>
                )}
                {config.badge}
              </div>
            </div>
          );
        })}
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between bg-white/30 px-5 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-1.5 text-xs text-preview-muted">
          <TrendingUp size={12} className="text-green-600" />
          <span>All agents operating normally</span>
        </div>
        <span className="font-financial text-[10px] text-preview-muted">Updated 0:32 ago</span>
      </div>
    </div>
  );
}
