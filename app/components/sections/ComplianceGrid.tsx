"use client";

import { Lock, Activity, Key, Shield } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import { BorderBeam } from "../ui/BorderBeam";

const securityCards = [
  {
    id: "sec-encryption",
    icon: Lock,
    label: "End-to-end Encryption",
    badge: "SOC 2 Type II",
    details: [
      "SOC 2 Type II certified",
      "Data encrypted at rest and in transit",
      "Industry-leading encryption standards",
    ],
    iconClass: "text-green-400",
    bgClass: "bg-green-950/40 border-green-800/40",
  },
  {
    id: "sec-monitoring",
    icon: Activity,
    label: "Monitoring Systems",
    badge: "24/7",
    details: [
      "24/7 intrusion detection",
      "Quarterly vulnerability scans",
      "Annual penetration tests",
    ],
    iconClass: "text-blue-400",
    bgClass: "bg-blue-950/40 border-blue-800/40",
  },
  {
    id: "sec-access",
    icon: Key,
    label: "Access Control",
    badge: "MFA",
    details: [
      "Multi-Factor Authentication",
      "Role-based permissions",
      "Session controls & audit logging",
    ],
    iconClass: "text-white/70",
    bgClass: "bg-white/[0.05] border-white/[0.08]",
  },
  {
    id: "sec-regulation",
    icon: Shield,
    label: "Regulation Compliant",
    badge: "TLS 256-bit",
    details: [
      "TLS 256-bit encryption in transit",
      "256-bit AES encryption at rest",
      "AICPA & IRS compliance standards",
    ],
    iconClass: "text-white/70",
    bgClass: "bg-white/[0.05] border-white/[0.08]",
  },
];

export default function ComplianceGrid() {
  return (
    <section
      id="compliance"
      aria-labelledby="compliance-heading"
      className="section-divider bg-shell-bg py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/30">
            Security & Compliance
          </p>
          <h2
            id="compliance-heading"
            className="max-w-2xl text-3xl font-bold tracking-tight text-white lg:text-4xl"
          >
            Secure Conversations. Smarter Tax Strategies.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/40">
            Built on industry-leading standards to keep your clients&apos; data safe
            and your firm audit-ready.
          </p>
        </AnimatedSection>

        {/* 4 Security Cards */}
        <AnimatedSection staggerChildren>
          <div className="grid grid-cols-1 gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {securityCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <AnimatedItem key={card.id}>
                  <div
                    id={card.id}
                    className="relative flex h-full flex-col overflow-hidden bg-shell-surface p-7"
                  >
                    {/* Border beam */}
                    <BorderBeam duration={8} delay={idx * 1.4} color="rgba(255,255,255,0.18)" borderRadius="0px" />
                    {/* Icon */}
                    <div className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border ${card.bgClass}`}>
                      <Icon size={17} className={card.iconClass} />
                    </div>

                    {/* Label + Badge */}
                    <div className="mb-4 flex flex-col gap-1.5">
                      <span className="text-sm font-semibold text-white">{card.label}</span>
                      <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.06] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/50">
                        {card.badge}
                      </span>
                    </div>

                    {/* Detail bullets */}
                    <ul className="mt-auto space-y-2.5">
                      {card.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-white/40">
                          <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-white/20" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Bottom notice */}
        <AnimatedSection delay={0.2} className="mt-6">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-7 py-5">
            <p className="text-xs font-semibold text-white">
              Client Data Is Never Used for Model Training
            </p>
            <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-white/40">
              Your clients&apos; financial data is used exclusively to perform the task at hand. It is never
              retained for, or contributed to, AI model training — by SignalsHQ or any third-party model provider.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
