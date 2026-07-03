"use client";

import type { CSSProperties } from "react";

interface BorderBeamProps {
  /** How long (seconds) the light takes to complete one loop */
  duration?: number;
  /** Length of the beam element in px */
  size?: number;
  /** Stagger start delay in seconds */
  delay?: number;
  /** Beam colour at its peak brightness */
  color?: string;
  /** Border-radius of the containing element (mirrors rounded-* value) */
  borderRadius?: string;
}

/**
 * Drop a <BorderBeam /> inside any `relative overflow-hidden` element.
 * It renders a light that travels along the border using CSS Motion Path.
 */
export function BorderBeam({
  duration = 5,
  size = 140,
  delay = 0,
  color = "rgba(255, 255, 255, 0.35)",
  borderRadius = "0px",
}: BorderBeamProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{ borderRadius } as CSSProperties}
    >
      <div
        style={
          {
            position: "absolute",
            width: `${size}px`,
            height: "1.5px",
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            offsetPath: `rect(0 100% 100% 0 round ${borderRadius})`,
            offsetDistance: "0%",
            animationName: "border-beam",
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            willChange: "offset-distance",
          } as CSSProperties
        }
      />
    </div>
  );
}
