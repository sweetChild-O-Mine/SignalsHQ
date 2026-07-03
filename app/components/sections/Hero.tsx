"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import { AppPreviewCard } from "../ui/AppPreviewCard";

const metrics = [
  { label: "Time Saved", value: "4+ hrs", mono: true },
  { label: "Advisory Revenue", value: "2×", mono: true },
  { label: "Client Satisfaction", value: "95%+", mono: true },
  { label: "Compliance Standard", value: "SOC 2 Type II", mono: false },
];

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen overflow-hidden bg-shell-bg pt-24"
    >
      <div className="hero-glow-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">

          {/* ── Left Column ──────────────────────────── */}
          <div className="lg:col-span-6">
            <motion.div variants={fadeUp(0)} initial="hidden" animate="visible" className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium tracking-wide text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                AI Infrastructure for Tax Firms
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold leading-[1.08] tracking-tight text-white lg:text-5xl xl:text-6xl"
            >
              Powering Tax Experts.
              <br />
              <span className="text-white/60">Fueling Firm Growth.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-lg text-base leading-relaxed text-white/50"
            >
              Smart Automation Built for Scaling Tax Firms
            </motion.p>

            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                id="hero-cta-book-demo"
                href="#contact"
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-all duration-200 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-shell-bg"
              >
                Book a Demo
                <ArrowRight size={15} />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="visible"
              className="mt-10 flex items-center gap-2 text-xs text-white/30"
            >
              <Lock size={11} />
              <span>SOC 2 Type II · TLS 256-bit · 24/7 intrusion detection · No training on client data</span>
            </motion.div>
          </div>

          {/* ── Right Column — App Preview ─────────── */}
          <motion.div className="relative lg:col-span-6" variants={fadeUp(0.2)} initial="hidden" animate="visible">
            <div className="absolute -inset-4 rounded-3xl bg-white/[0.02] blur-3xl" />
            {/* Float animation — gentle breathing motion */}
            <div className="animate-float">
              <AppPreviewCard className="relative" />
            </div>
          </motion.div>
        </div>

        {/* ── Real Metrics Strip ──────────────────── */}
        <motion.div
          variants={fadeUp(0.45)}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.07] lg:grid-cols-4"
        >
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-start bg-shell-bg px-6 py-5">
              <span className={`text-2xl font-bold text-white lg:text-3xl ${m.mono ? "font-financial" : ""}`}>
                {m.value}
              </span>
              <span className="mt-1 text-xs font-medium text-white/40">{m.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
