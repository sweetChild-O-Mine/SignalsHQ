"use client";

import { BookOpen, Database, TrendingUp } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import { BorderBeam } from "../ui/BorderBeam";

const useCases = [
  {
    id: "usecase-tax-rules",
    icon: BookOpen,
    title: "Always Current on Tax Rules",
    body: "Delivers the latest updates across SALT and Federal taxes directly in your workflow.",
  },
  {
    id: "usecase-raw-data",
    icon: Database,
    title: "Turn Raw Data into Insight",
    body: "Uses AI to locate, organize, and surface client insights hidden in client documents.",
  },
  {
    id: "usecase-savings-risks",
    icon: TrendingUp,
    title: "Surface Savings & Risks",
    body: "Analyze your client data to unlock opportunities and spot risks proactively.",
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      aria-labelledby="use-cases-heading"
      className="section-divider bg-shell-bg py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/30">
            Use Cases
          </p>
          <h2
            id="use-cases-heading"
            className="max-w-2xl text-3xl font-bold tracking-tight text-white lg:text-4xl"
          >
            Focus on high-value client outcomes.
          </h2>
        </AnimatedSection>

        {/* 3 Use Case Cards */}
        <AnimatedSection staggerChildren>
          <div className="grid grid-cols-1 gap-px bg-white/[0.06] md:grid-cols-3">
            {useCases.map((uc, idx) => {
              const Icon = uc.icon;
              return (
                <AnimatedItem key={uc.id}>
                  <div
                    id={uc.id}
                    className="card-shimmer group flex h-full flex-col bg-shell-surface p-8 transition-colors hover:bg-shell-surface/80"
                  >
                    {/* Border beam */}
                    <BorderBeam duration={6} delay={idx * 1.2} color="rgba(255,255,255,0.2)" borderRadius="0px" />
                    <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.07] bg-shell-bg transition-colors group-hover:border-white/15">
                      <Icon size={18} className="text-white/30 transition-colors group-hover:text-white/60" />
                    </span>
                    <h3 className="mb-3 text-base font-semibold text-white">
                      {uc.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">
                      {uc.body}
                    </p>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
