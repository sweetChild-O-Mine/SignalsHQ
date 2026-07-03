"use client";

import { AnimatedSection } from "../ui/AnimatedSection";

const stats = [
  {
    id: "stat-returns",
    value: "1,847",
    label: "Tax Returns Processed",
    sub: "Last 12 months",
    mono: true,
  },
  {
    id: "stat-accuracy",
    value: "99.7%",
    label: "Reconciliation Accuracy",
    sub: "Across all return types",
    mono: true,
  },
  {
    id: "stat-time-saved",
    value: "340+",
    label: "Hours Saved Per Firm",
    sub: "Average per busy season",
    mono: true,
  },
  {
    id: "stat-response",
    value: "<2s",
    label: "Agent Response Time",
    sub: "P95 across all tasks",
    mono: true,
  },
];

export default function MetricsBar() {
  return (
    <section
      aria-label="Platform metrics"
      className="section-divider bg-shell-surface py-0"
    >
      <AnimatedSection staggerChildren={false}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-px bg-shell-border lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="flex flex-col justify-between bg-shell-surface px-8 py-10"
              >
                <span
                  className={`text-4xl font-bold text-ink-primary lg:text-5xl ${
                    s.mono ? "font-financial" : ""
                  }`}
                >
                  {s.value}
                </span>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-ink-secondary">
                    {s.label}
                  </p>
                  <p className="mt-0.5 text-xs text-ink-muted">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
