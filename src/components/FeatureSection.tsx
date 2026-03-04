"use client";

import AnimateIn from "./AnimateIn";

interface FeatureSectionProps {
  label: string;
  headline: string;
  body: string;
  bullets?: string[];
  imageSide?: "left" | "right";
  imagePlaceholder?: string;
}

export default function FeatureSection({
  label,
  headline,
  body,
  bullets,
  imageSide = "right",
  imagePlaceholder = "Feature Preview",
}: FeatureSectionProps) {
  const textBlock = (
    <div className="flex flex-col justify-center">
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
        {label}
      </span>
      <h3 className="mt-3 font-heading text-2xl font-bold leading-snug sm:text-3xl">
        {headline}
      </h3>
      <p className="mt-4 text-xs-gray leading-relaxed">{body}</p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-5 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-xs-gray-light">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-xs-green" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const imageBlock = (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-sm">
        {/* Phone mockup placeholder */}
        <div className="mx-auto aspect-[9/16] w-56 rounded-[2rem] border-2 border-xs-border-light bg-xs-card sm:w-64">
          <div className="flex h-full flex-col items-center justify-center p-6 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-xs-green/10">
              <span className="text-xl text-xs-green">✓</span>
            </div>
            <span className="text-sm font-medium text-xs-gray">
              {imagePlaceholder}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AnimateIn>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {imageSide === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </AnimateIn>
  );
}
