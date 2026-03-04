"use client";

import AnimateIn from "./AnimateIn";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  outcome: string;
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  outcome,
  index = 0,
}: ServiceCardProps) {
  return (
    <AnimateIn delay={index * 0.1}>
      <div className="group relative h-full rounded-lg border border-brand-border bg-brand-surface/30 p-6 transition-all duration-300 hover:border-brand-accent/20 hover:bg-brand-surface/60">
        {/* Accent line at top */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-brand-accent/10 text-brand-accent">
          {icon}
        </div>

        <h3 className="font-heading text-lg font-semibold text-brand-white mb-2">
          {title}
        </h3>

        <p className="text-sm text-brand-muted leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex items-start gap-2 rounded-md bg-brand-accent/5 p-3 border border-brand-accent/10">
          <svg
            className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
          <p className="text-xs text-brand-accent font-medium">{outcome}</p>
        </div>
      </div>
    </AnimateIn>
  );
}
