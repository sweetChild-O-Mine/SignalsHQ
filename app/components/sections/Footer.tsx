"use client";



import { AnimatedSection } from "../ui/AnimatedSection";

const footerLinks = {
  Product: [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Workflow", href: "#workflow" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
  ],
  Security: [
    { label: "SOC 2 Report", href: "#compliance" },
    { label: "Trust Center", href: "#" },
    { label: "Data Privacy", href: "#" },
    { label: "Security Changelog", href: "#" },
  ],
  Firm: [
    { label: "Book a Demo", href: "#contact" },
    { label: "Case Studies", href: "#" },
    { label: "Partner Program", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "DPA", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="section-divider bg-shell-surface"
      aria-label="Site footer"
    >
      <AnimatedSection>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* CTA Banner */}
          <div className="border-b border-shell-border py-16">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white lg:text-3xl">
                  Ready to reclaim busy season?
                </h2>
                <p className="mt-2 max-w-md text-sm text-white/40">
                  Schedule a 30-minute demo with a SignalsHQ product specialist. We&apos;ll walk through your firm&apos;s specific workflow and show you exactly what gets automated.
                </p>
              </div>
              <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  id="footer-cta-demo"
                  href="#"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-white/90"
                >
                  Book a Firm Demo
                </a>
                <a
                  id="footer-cta-trial"
                  href="#pricing"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/60 transition-colors hover:border-white/25 hover:text-white"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
                  {group}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/40 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-start justify-between gap-4 border-t border-shell-border py-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2.5">
              <span className="text-base font-semibold text-white">
                ✦ SignalsHQ
              </span>
            </div>
            <p className="text-xs text-white/25">
              &copy; {new Date().getFullYear()} SignalsHQ, Inc. All rights reserved. &nbsp;·&nbsp;
              SOC 2 Type II Certified &nbsp;·&nbsp; IRS e-file Authorized
            </p>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
}
