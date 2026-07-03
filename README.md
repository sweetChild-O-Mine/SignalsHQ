# SignalsHQ — Landing Page Redesign

A high-performance, enterprise-grade landing page prototype designed specifically for **SignalsHQ**. 

This redesign pivots away from standard "dev-tool" aesthetics to focus on a **Modern Enterprise Finance** visual language, tailored specifically for CPAs, tax professionals, and firm partners who value data density, stability, and absolute trust.

## 🎯 Design Philosophy

When evaluating the target demographic (Tax Experts & Firm Partners), I made several deliberate design and architecture decisions:

- **Enterprise Trust over Hacker Aesthetics:** Removed terminal-style fonts and chaotic animations in favor of strict, clean, high-contrast UI (white on `#0A0A0F`). 
- **High Data Density:** CPAs work in Excel and complex tax software. The UI leverages tight grid structures (Bento grids) and highly scannable bullet points rather than overly spaced marketing fluff.
- **Micro-Interactions for Polish:** Subtle `Framer Motion` animations (like the slow `BorderBeam` light sweep and card shimmer effects) are used to make the site feel premium and alive without being distracting.
- **Content Accuracy:** Integrated the exact real-world product pillars: **Tax Assist, Client Organizer, and Client Review**, alongside real compliance metrics (SOC 2, TLS 256-bit).

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Strict utility classes, no heavy component libraries)
- **Animations:** Framer Motion & pure CSS Keyframes
- **Icons:** Lucide React

## 📦 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

The project is highly modular. All major UI blocks are isolated into their own components:

```text
app/
├── components/
│   ├── sections/          # Major page blocks
│   │   ├── Hero.tsx
│   │   ├── ValueProp.tsx
│   │   ├── CapabilityGrid.tsx
│   │   ├── Pricing.tsx
│   │   ├── UseCases.tsx
│   │   ├── ComplianceGrid.tsx
│   │   └── Nav.tsx / Footer.tsx
│   └── ui/                # Reusable micro-components
│       ├── AnimatedSection.tsx
│       ├── AppPreviewCard.tsx
│       └── BorderBeam.tsx
├── globals.css            # Custom animations & Tailwind base
└── page.tsx               # Main assembly file
```
