"use client";

import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";

const steps = [
  {
    id: "step-ingest",
    number: "01",
    title: "Ingest",
    description:
      "Documents arrive via secure client portal, email parsing, or direct integration with your existing DMS. W-2s, 1099s, K-1s, and brokerage statements are captured automatically.",
    detail: "Supports Drake, CCH Axcess, ProConnect",
  },
  {
    id: "step-classify",
    number: "02",
    title: "Classify",
    description:
      "Each document is classified by type, tax year, and taxpayer ID. Duplicates are detected and flagged before they enter the workflow.",
    detail: "99.4% classification accuracy",
  },
  {
    id: "step-reconcile",
    number: "03",
    title: "Reconcile",
    description:
      "AI agents cross-reference reported figures against prior-year data, partner allocations, and IRS published limits. Discrepancies are surfaced for human review.",
    detail: "Schedule K-1 · 1099-B · W-2 · 1099-R",
  },
  {
    id: "step-flag",
    number: "04",
    title: "Flag & Route",
    description:
      "Any figure outside tolerance — basis adjustments, missing EIN, late K-1s — is flagged with a specific resolution recommendation and routed to the responsible staff member.",
    detail: "Smart routing by staff role",
  },
  {
    id: "step-deliver",
    number: "05",
    title: "Deliver",
    description:
      "Reviewed returns, client memos, and estimated payment schedules are packaged and delivered. Full audit trail exported on demand for peer review or regulatory inspection.",
    detail: "PDF · CSV · DMS export",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      aria-labelledby="workflow-heading"
      className="section-divider bg-shell-bg py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/30">
            Agent Workflow
          </p>
          <h2
            id="workflow-heading"
            className="max-w-2xl text-3xl font-bold tracking-tight text-white lg:text-4xl"
          >
            From document chaos to filed return in five structured steps.
          </h2>
        </AnimatedSection>

        {/* Steps */}
        <AnimatedSection staggerChildren>
          <div className="grid grid-cols-1 gap-px bg-shell-border md:grid-cols-5">
            {steps.map((step, i) => (
              <AnimatedItem key={step.id}>
                <div
                  id={step.id}
                  className="group relative flex h-full flex-col bg-shell-surface p-6 transition-colors hover:bg-shell-surface/80"
                >
                  {/* Step number */}
                  <span className="font-financial mb-4 block text-4xl font-bold text-white/[0.08] transition-colors group-hover:text-white/15">
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="mb-3 text-sm font-semibold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="flex-1 text-xs leading-relaxed text-white/50">
                    {step.description}
                  </p>

                  {/* Detail tag */}
                  <div className="mt-5 border-t border-white/[0.07] pt-4">
                    <span className="font-financial text-[10px] text-white/25">
                      {step.detail}
                    </span>
                  </div>

                  {/* Arrow connector (hidden on last) */}
                  {i < steps.length - 1 && (
                    <div className="pointer-events-none absolute -right-px top-1/2 hidden -translate-y-1/2 md:block">
                      <div className="h-px w-px" />
                    </div>
                  )}
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
