import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SignalsHQ — AI Agent Platform for CPA Firms",
  description:
    "SignalsHQ automates W-2/1099 intake, Schedule K-1 reconciliation, client memo generation, and tax savings identification. Built for CPA firms and tax partners who demand precision, speed, and absolute security.",
  keywords: [
    "CPA software",
    "AI tax automation",
    "Schedule K-1 reconciliation",
    "tax workflow automation",
    "accounting AI agents",
    "W-2 1099 intake",
  ],
  openGraph: {
    title: "SignalsHQ — AI Agent Platform for CPA Firms",
    description: "Automate your entire tax workflow. Built for firms that can't afford errors.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-shell-bg text-ink-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
