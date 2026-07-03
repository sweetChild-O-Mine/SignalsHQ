"use client";

import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import { BorderBeam } from "../ui/BorderBeam";

const stats = [
  {
    id: "stat-time-saved",
    value: "4+ hrs",
    label: "Time Saved",
    sub: "Per client engagement",
    mono: true,
  },
  {
    id: "stat-advisory",
    value: "2×",
    label: "Advisory Revenue",
    sub: "Redirected from prep grind",
    mono: true,
  },
  {
    id: "stat-satisfaction",
    value: "95%+",
    label: "Client Satisfaction",
    sub: "Across firm deployments",
    mono: true,
  },
];

export default function ValueProp() {
  return (
    <section
      id="value-prop"
      aria-labelledby="value-prop-heading"
      className="section-divider bg-shell-bg py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/30">
              Why SignalsHQ
            </p>
            <h2
              id="value-prop-heading"
              className="text-3xl font-bold tracking-tight text-white lg:text-4xl"
            >
              Cut research and preparation hours with AI-driven automation.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/50 lg:pt-10">
            One reliable layer for authoritative answers, automated intake and extraction,
            and streamlined prep to help your firm cut busy-season grind and redirect
            time to advisory.
          </p>
        </AnimatedSection>

        {/* Stats Row */}
        <AnimatedSection staggerChildren>
          <div className="grid grid-cols-1 gap-px bg-white/[0.06] sm:grid-cols-3">
            {stats.map((s, idx) => (
              <AnimatedItem key={s.id}>
                <div
                  id={s.id}
                  className="card-shimmer relative flex flex-col overflow-hidden bg-shell-surface px-10 py-10"
                >
                  <BorderBeam duration={9} delay={idx * 2} color="rgba(255,255,255,0.2)" borderRadius="0px" />
                  <span className={`text-5xl font-bold text-white lg:text-6xl ${s.mono ? "font-financial" : ""}`}>
                    {s.value}
                  </span>
                  <p className="mt-4 text-sm font-semibold text-white/80">{s.label}</p>
                  <p className="mt-1 text-xs text-white/35">{s.sub}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
