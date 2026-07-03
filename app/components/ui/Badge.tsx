import React from "react";

type BadgeVariant = "green" | "amber" | "red" | "purple" | "blue" | "neutral";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  green:
    "bg-green-950/60 text-green-400 border-green-800/50 ring-green-400/10",
  amber:
    "bg-amber-950/60 text-amber-400 border-amber-800/50 ring-amber-400/10",
  red: "bg-red-950/60 text-red-400 border-red-800/50 ring-red-400/10",
  purple:
    "bg-purple-950/60 text-purple-400 border-purple-800/50 ring-purple-400/10",
  blue: "bg-blue-950/60 text-blue-400 border-blue-800/50 ring-blue-400/10",
  neutral:
    "bg-shell-surface text-ink-muted border-shell-border ring-white/5",
};

const dotColors: Record<BadgeVariant, string> = {
  green: "bg-green-400",
  amber: "bg-amber-400",
  red: "bg-red-400",
  purple: "bg-purple-400",
  blue: "bg-blue-400",
  neutral: "bg-ink-muted",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-[11px]",
  md: "px-2.5 py-1 text-xs",
};

export function Badge({
  variant = "neutral",
  size = "sm",
  children,
  dot = false,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-full border font-medium tracking-wide
        ring-1 ring-inset
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${dotColors[variant]}`}
        />
      )}
      {children}
    </span>
  );
}

// Lightweight dark preview badge for use inside light AppPreviewCard panels
export function PreviewBadge({
  variant = "green",
  children,
}: {
  variant?: BadgeVariant;
  children: React.ReactNode;
}) {
  const previewStyles: Record<BadgeVariant, string> = {
    green: "bg-green-50 text-green-700 border-green-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    red: "bg-red-50 text-red-700 border-red-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    neutral: "bg-gray-100 text-gray-600 border-gray-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide ${previewStyles[variant]}`}
    >
      {children}
    </span>
  );
}
