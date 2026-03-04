"use client";

import Link from "next/link";
import AnimateIn from "./AnimateIn";

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
    <AnimateIn delay={index * 0.1}>
      <div
        className={`relative h-full rounded-lg border p-7 sm:p-8 ${
          highlighted
            ? "border-xs-green/30 bg-xs-card"
            : "border-xs-border bg-xs-card/50"
        }`}
      >
        {badge && (
          <div className="absolute -top-3 left-7 rounded-full bg-xs-green px-3 py-1 text-xs font-bold text-xs-black">
            {badge}
          </div>
        )}

        <h3 className="font-heading text-xl font-bold">{name}</h3>
        <p className="mt-1 text-sm text-xs-gray">{description}</p>

        <div className="mt-5 flex items-baseline gap-1">
          <span className="font-heading text-4xl font-bold">{price}</span>
          <span className="text-sm text-xs-gray">/month</span>
        </div>

        <ul className="mt-6 space-y-2.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <span className="mt-0.5 text-xs-green">✓</span>
              <span className="text-xs-gray-light">{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/book"
          className={`mt-7 block rounded py-3 text-center text-sm font-semibold transition-colors ${
            highlighted
              ? "bg-xs-green text-xs-black hover:bg-xs-green-hover"
              : "border border-xs-green/30 text-xs-green hover:bg-xs-green/10"
          }`}
        >
          Book a Call to Get Started →
        </Link>
      </div>
    </AnimateIn>
  );
}
