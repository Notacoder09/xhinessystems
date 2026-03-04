"use client";

import AnimateIn from "./AnimateIn";

interface StepCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  index?: number;
}

export default function StepCard({
  number,
  title,
  subtitle,
  description,
  index = 0,
}: StepCardProps) {
  return (
    <AnimateIn delay={index * 0.1}>
      <div className="rounded-lg border border-xs-border-light bg-white p-6 sm:p-7 shadow-sm">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-xs-green/15 font-mono text-sm font-bold text-xs-green">
          {number}
        </div>
        <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-xs-text-dark">
          {title}
        </h3>
        <p className="mt-1 text-xs font-semibold text-xs-green">{subtitle}</p>
        <p className="mt-3 text-sm text-xs-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </AnimateIn>
  );
}
