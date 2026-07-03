"use client";

import { Search, FolderOpen, FileCheck } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import { BorderBeam } from "../ui/BorderBeam";

const features = [
  {
    id: "feat-tax-assist",
    icon: Search,
    label: "Tax Assist",
    title: "Instant, reliable answers to your tax questions.",
    bullets: [
      "Direct IRS citations & court ruling references",
      "Federal & SALT coverage across all 50 states",
      "Context-aware answers",
      "Exportable memos for client-ready documentation",
    ],
  },
  {
    id: "feat-client-organizer",
    icon: FolderOpen,
    label: "Client Organizer",
    title: "Client Data in One Place. Structured. Searchable.",
    bullets: [
      "AI document intake — drag, drop, done",
      "K-1, 1099s, W-2s auto-extraction at 95%+ accuracy",
      "360° client overview with smart categorization",
      "Automated binders",
    ],
  },
  {
    id: "feat-client-review",
    icon: FileCheck,
    label: "Client Review",
    title: "Get workpaper insight. Zero Manual Grind.",
    bullets: [
      "Current-year category rollups",
      "Multi-entity support for 1040, 1065, 1120-S",
      "Auto-Generated Workpapers",
      "AI-drafted first-pass returns — 70% faster prep",
    ],
  },
];

export default function CapabilityGrid() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="section-divider bg-shell-bg py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/30">
            Platform Capabilities
          </p>
          <h2
            id="capabilities-heading"
            className="max-w-2xl text-3xl font-bold tracking-tight text-white lg:text-4xl"
          >
            Everything a CPA firm needs. Nothing it doesn&apos;t.
          </h2>
        </AnimatedSection>

        {/* 3-Column Feature Grid */}
        <AnimatedSection staggerChildren>
          <div className="grid grid-cols-1 gap-px bg-white/[0.06] md:grid-cols-3">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <AnimatedItem key={f.id}>
                  <div
                    id={f.id}
                    className="card-shimmer group flex h-full flex-col bg-shell-surface p-8 transition-colors duration-200 hover:bg-shell-surface/80"
                  >
                    {/* Travelling border light — staggered per card */}
                    <BorderBeam duration={6} delay={idx * 1.5} color="rgba(255,255,255,0.25)" borderRadius="0px" />
                    {/* Icon + Label */}
                    <div className="mb-6 flex items-center gap-3">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-shell-bg transition-colors group-hover:border-white/15 group-hover:bg-white/[0.04]">
                        <Icon
                          size={16}
                          className="text-white/30 transition-colors group-hover:text-white/70"
                        />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-white/30">
                        {f.label}
                      </span>
                    </div>

                    <h3 className="mb-5 text-base font-semibold leading-snug text-white">
                      {f.title}
                    </h3>

                    {/* Bullet list */}
                    <ul className="mt-auto space-y-3">
                      {f.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/20" />
                          <span className="text-sm leading-relaxed text-white/50">{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
