import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        // Dark shell
        shell: {
          bg: "#0A0A0F",
          surface: "#111118",
          border: "#1E1E2E",
          "border-light": "#2A2A3E",
        },
        // Text on dark
        ink: {
          primary: "#F0F0F5",
          secondary: "#C8C8D8",
          muted: "#8A8A9F",
          subtle: "#4A4A60",
        },
        // Semantic/status
        signal: {
          green: "#22C55E",
          "green-dim": "#16A34A",
          amber: "#F59E0B",
          "amber-dim": "#D97706",
          red: "#EF4444",
          purple: "#A855F7",
          "purple-dim": "#7C3AED",
          blue: "#3B82F6",
          "blue-dim": "#2563EB",
        },
        // App preview (light)
        preview: {
          bg: "#FFFFFF",
          surface: "#F8F7FF",
          border: "#E8E4F0",
          text: "#1A1A2E",
          muted: "#6B6880",
        },
      },
      backgroundImage: {
        "preview-gradient": "linear-gradient(135deg, #FFF1F2 0%, #FAF5FF 50%, #EEF2FF 100%)",
        "preview-gradient-2": "linear-gradient(135deg, #F0FDF4 0%, #F5F3FF 50%, #EFF6FF 100%)",
        "subtle-grid": "radial-gradient(circle, #1E1E2E 1px, transparent 1px)",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(168, 85, 247, 0.12), transparent)",
      },
      backgroundSize: {
        "grid-48": "48px 48px",
      },
      boxShadow: {
        "preview-card": "0 20px 60px -10px rgba(0,0,0,0.6), 0 0 0 1px rgba(168,85,247,0.1)",
        "feature-cell": "inset 0 1px 0 rgba(255,255,255,0.04)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.06)",
        glow: "0 0 0 1px rgba(168,85,247,0.3), 0 8px 32px rgba(168,85,247,0.15)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
