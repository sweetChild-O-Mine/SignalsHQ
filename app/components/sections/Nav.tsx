"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#capabilities" },
  { label: "Pricing", href: "#pricing" },
  { label: "Use Case", href: "#use-cases" },
  { label: "Security", href: "#compliance" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <motion.header
      className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-shell-bg/85 backdrop-blur-xl"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="SignalsHQ Home">
          {/* Gradient asterisk — swap with <img src="/logo.svg"> when available */}
          <span
            className="text-xl font-bold"
            style={{
              background: "linear-gradient(135deg, #f472b6 0%, #a855f7 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ✳
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">SignalsHQ</span>
        </a>

        {/* Nav Links */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/50 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          {/* Resources dropdown (visual only) */}
          <button className="flex items-center gap-1 text-sm font-medium text-white/50 transition-colors hover:text-white">
            Resources <ChevronDown size={13} className="opacity-60" />
          </button>
        </nav>

        {/* CTA */}
        <a
          id="nav-cta-book-demo"
          href="#contact"
          className="rounded-full border border-white/20 bg-transparent px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-shell-bg"
        >
          Book a Demo →
        </a>
      </div>
    </motion.header>
  );
}
