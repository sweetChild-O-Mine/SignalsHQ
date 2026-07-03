"use client";

import { Search, FolderOpen, Brain, CheckCircle2 } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import { BorderBeam } from "../ui/BorderBeam";

const plans = [
  {
    id: "plan-tax-assist",
    icon: Search,
    iconBg: "bg-zinc-800/80",
    title: "Tax Assist",
    description:
      "AI-powered tax research and Q&A that gives you IRS-cited answers in seconds.",
    bullets: [
      { text: "Instant tax research with direct IRS citations", boldPart: "direct IRS citations" },
      { text: "Federal & SALT coverage across all 50 states", boldPart: "Federal & SALT coverage" },
      { text: "Court ruling references", boldPart: "" },
      { text: "Context-aware answers", boldPart: "Context-aware answers" },
      { text: "Natural language queries", boldPart: "" },
      { text: "Exportable memos", boldPart: "" },
    ],
  },
  {
    id: "plan-client-organizer",
    icon: FolderOpen,
    iconBg: "bg-amber-900/50",
    title: "Client Organizer",
    description:
      "Automated document intake and extraction that turns stacks of PDFs into structured, searchable client data.",
    bullets: [
      { text: "AI document intake; drag, drop, done", boldPart: "AI document intake;" },
      { text: "K-1, 1099s, W-2s auto-extraction with 95%+ accuracy", boldPart: "K-1, 1099s, W-2 auto-extraction" },
      { text: "Automated binders", boldPart: "" },
      { text: "360° client overview", boldPart: "360° client overview" },
      { text: "Smart categorization", boldPart: "" },
      { text: "Audit-ready trail", boldPart: "" },
    ],
  },
  {
    id: "plan-client-review",
    icon: Brain,
    iconBg: "bg-rose-900/50",
    title: "Client Review",
    description:
      "Proactive advisory insights that surface tax savings, flag risks, and generate strategy.",
    bullets: [
      { text: "Current-year category rollups", boldPart: "Current-year category rollups" },
      { text: "Comprehensive schedule summaries", boldPart: "" },
      { text: "Multi-entity support; 1040, 1065, 1120-S", boldPart: "" },
      { text: "Auto-Generated Workpapers", boldPart: "Auto-Generated Workpapers" },
      { text: "Anomaly alerts across client binder", boldPart: "" },
      { text: "AI-drafted returns; 70% faster prep", boldPart: "70% faster prep" },
    ],
  },
];

function BulletText({ text, boldPart }: { text: string; boldPart: string }) {
  if (!boldPart) return <span className="text-sm leading-snug text-white/50">{text}</span>;
  const idx = text.indexOf(boldPart);
  if (idx === -1) return <span className="text-sm leading-snug text-white/50">{text}</span>;
  return (
    <span className="text-sm leading-snug text-white/50">
      {text.slice(0, idx)}
      <strong className="font-semibold text-white/80">{boldPart}</strong>
      {text.slice(idx + boldPart.length)}
    </span>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="section-divider bg-shell-bg py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/40">
            ✦ Pricing
          </span>
          <h2
            id="pricing-heading"
            className="text-3xl font-bold tracking-tight text-white lg:text-4xl xl:text-5xl"
          >
            Simple Subscription to Scale your Practice
          </h2>
        </AnimatedSection>

        {/* 3 Plan Cards */}
        <AnimatedSection staggerChildren>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {plans.map((plan, idx) => {
              const Icon = plan.icon;
              return (
                <AnimatedItem key={plan.id}>
                  <div
                    id={plan.id}
                    className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-shell-surface p-7"
                  >
                    {/* Border beam — staggered start per card */}
                    <BorderBeam duration={7} delay={idx * 1.8} color="rgba(255,255,255,0.3)" borderRadius="16px" />
                    {/* Icon */}
                    <div className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl ${plan.iconBg}`}>
                      <Icon size={18} className="text-white/70" />
                    </div>

                    {/* Title + Description */}
                    <h3 className="mb-2 text-base font-semibold text-white">{plan.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed text-white/45">{plan.description}</p>

                    {/* Bullet List */}
                    <ul className="mb-8 flex-1 space-y-3">
                      {plan.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0 text-white/25" />
                          <BulletText text={b.text} boldPart={b.boldPart} />
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="#contact"
                      className="block w-full rounded-full border border-white/20 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
                    >
                      Talk to Sales
                    </a>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Footer note */}
        <AnimatedSection delay={0.2} className="mt-8 text-center">
          <p className="text-xs text-white/25">
            All plans include SOC 2 Type II compliance, E2E encryption, and dedicated onboarding.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
