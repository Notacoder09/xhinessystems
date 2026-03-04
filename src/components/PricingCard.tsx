"use client";

import AnimateIn from "./AnimateIn";
import CTAButton from "./CTAButton";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  index?: number;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
  badge,
  index = 0,
}: PricingCardProps) {
  return (
    <AnimateIn delay={index * 0.15}>
      <div
        className={`relative h-full rounded-lg border p-8 transition-all duration-300 ${
          highlighted
            ? "border-brand-accent/30 bg-brand-surface/60 accent-glow"
            : "border-brand-border bg-brand-surface/30 hover:border-brand-border/80"
        }`}
      >
        {badge && (
          <div className="absolute -top-3 left-8 rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold text-brand-black">
            {badge}
          </div>
        )}

        <div className="mb-6">
          <h3 className="font-heading text-xl font-semibold text-brand-white mb-1">
            {name}
          </h3>
          <p className="text-sm text-brand-muted">{description}</p>
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-4xl font-bold text-brand-white">
              {price}
            </span>
            <span className="text-sm text-brand-muted">/month</span>
          </div>
        </div>

        <ul className="mb-8 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm text-brand-muted-light">{feature}</span>
            </li>
          ))}
        </ul>

        <CTAButton
          href="/book"
          variant={highlighted ? "primary" : "outline"}
          size="md"
          className="w-full"
        >
          Book a Call
          <svg
            className="h-4 w-4"
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
        </CTAButton>
      </div>
    </AnimateIn>
  );
}
