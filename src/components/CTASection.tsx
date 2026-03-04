"use client";

import Link from "next/link";
import AnimateIn from "./AnimateIn";

export default function CTASection({
  headline = "Ready to Get Found?",
  body = "Book a free call. We'll look at your current online presence and show you exactly where you're losing leads.",
  buttonText = "Book a Discovery Call →",
  buttonHref = "/book",
}: {
  headline?: string;
  body?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="relative section-dark py-20 lg:py-28 overflow-hidden">
      {/* Eagle watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <svg
          viewBox="0 0 200 200"
          className="h-[500px] w-[500px]"
          fill="none"
        >
          <path
            d="M100 10 L180 55 L180 120 C180 155 145 185 100 195 C55 185 20 155 20 120 L20 55 Z"
            stroke="#00FF94"
            strokeWidth="2"
          />
          <path
            d="M100 70 C85 55 55 40 35 50 C55 55 70 65 80 80 C70 75 50 70 30 75 C55 82 70 90 80 100 Z"
            fill="#00FF94"
          />
          <path
            d="M100 70 C115 55 145 40 165 50 C145 55 130 65 120 80 C130 75 150 70 170 75 C145 82 130 90 120 100 Z"
            fill="#00FF94"
          />
          <circle cx="100" cy="75" r="14" fill="#00FF94" />
          <path d="M90 100 L100 150 L110 100 Z" fill="#00FF94" />
          <text
            x="100"
            y="130"
            textAnchor="middle"
            fill="#00FF94"
            fontSize="24"
            fontWeight="800"
          >
            X
          </text>
        </svg>
      </div>

      <div className="container-main relative z-10">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide sm:text-4xl lg:text-5xl">
              {headline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-xs-gray-light leading-relaxed">
              {body}
            </p>
            <div className="mt-8">
              <Link
                href={buttonHref}
                className="inline-flex rounded bg-xs-green px-8 py-3.5 text-sm font-bold text-xs-navy uppercase tracking-wider transition-colors hover:bg-xs-green-hover"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
