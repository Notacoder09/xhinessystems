"use client";

import AnimateIn from "./AnimateIn";

interface StepCardProps {
  step: string;
  title: string;
  description: string;
  index?: number;
}

export default function StepCard({
  step,
  title,
  description,
  index = 0,
}: StepCardProps) {
  return (
    <AnimateIn delay={index * 0.15}>
      <div className="relative">
        {/* Step number */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-brand-accent/20 bg-brand-accent/10">
            <span className="font-mono text-sm font-medium text-brand-accent">
              {step}
            </span>
          </div>
          {index < 2 && (
            <div className="hidden h-px flex-1 bg-gradient-to-r from-brand-accent/20 to-transparent lg:block" />
          )}
        </div>

        <h3 className="font-heading text-lg font-semibold text-brand-white mb-2">
          {title}
        </h3>

        <p className="text-sm text-brand-muted leading-relaxed">
          {description}
        </p>
      </div>
    </AnimateIn>
  );
}
