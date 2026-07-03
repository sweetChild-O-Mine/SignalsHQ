"use client";

import { InboxIcon, GitMerge, AlertCircle } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";

const problems = [
  {
    id: "problem-data-chaos",
    icon: InboxIcon,
    label: "Data Chaos",
    title: "Hundreds of unstructured documents, zero organization.",
    body: "Every tax season begins with W-2s, 1099s, brokerage statements, and K-1s arriving in different formats across different channels. Your team spends the first two weeks just sorting the pile.",
    stat: "60%",
    statLabel: "of busy-season hours spent on document triage",
  },
  {
    id: "problem-manual-work",
    icon: GitMerge,
    label: "Manual Reconciliation",
    title: "Work that doesn't require a CPA license shouldn't be done by one.",
    body: "Cross-referencing partner allocations, tracing basis adjustments, and checking 1099-B proceeds against client records is high-volume, low-judgment work. It consumes licensed staff at licensed staff rates.",
    stat: "3.2×",
    statLabel: "longer reconciliation time vs. AI-assisted workflow",
  },
  {
    id: "problem-deadline-risk",
    icon: AlertCircle,
    label: "Deadline Risk",
    title: "One missed K-1 or late extension is a client relationship at risk.",
    body: "As client rosters scale past 200 returns, manual tracking becomes a liability. A single missed Schedule K-1 or overlooked 1040 extension triggers IRS correspondence — and a difficult conversation.",
    stat: "1 in 8",
    statLabel: "manually-tracked returns contain a filing error",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="section-divider bg-shell-bg py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/30">
            The Status Quo
          </p>
          <h2
            id="problem-heading"
            className="max-w-2xl text-3xl font-bold tracking-tight text-white lg:text-4xl"
          >
            Tax season is still running on spreadsheets and email threads.
          </h2>
        </AnimatedSection>

        {/* 3-Column Grid */}
        <AnimatedSection staggerChildren className="grid grid-cols-1 gap-px bg-shell-border md:grid-cols-3">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <AnimatedItem key={p.id}>
                <div
                  id={p.id}
                  className="flex h-full flex-col bg-shell-surface p-8"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-shell-bg">
                      <Icon size={16} className="text-white/30" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/30">
                      {p.label}
                    </span>
                  </div>

                  <h3 className="mb-3 text-base font-semibold leading-snug text-white">
                    {p.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-white/50">
                    {p.body}
                  </p>

                  {/* Stat */}
                  <div className="mt-8 border-t border-white/[0.07] pt-6">
                    <span className="font-financial block text-3xl font-bold text-white">
                      {p.stat}
                    </span>
                    <span className="mt-1 block text-xs text-white/40">
                      {p.statLabel}
                    </span>
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
