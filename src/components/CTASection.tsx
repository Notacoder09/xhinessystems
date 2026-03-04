"use client";

import Link from "next/link";
import AnimateIn from "./AnimateIn";

export default function CTASection({
  headline = "Stop Losing Jobs to Guys Who Just Market Better",
  body = "Book a free 20-minute call. We'll look at your online presence, tell you what's working (and what's not), and map out a plan. No pressure.",
  buttonText = "Book a Discovery Call →",
  buttonHref = "/book",
}: {
  headline?: string;
  body?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-main">
        <AnimateIn>
          <div className="rounded-lg border border-xs-border bg-xs-card p-8 text-center sm:p-12 lg:p-16">
            <h2 className="font-heading text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              {headline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-xs-gray leading-relaxed">
              {body}
            </p>
            <div className="mt-8">
              <Link
                href={buttonHref}
                className="inline-flex rounded bg-xs-green px-7 py-3 text-sm font-semibold text-xs-black transition-colors hover:bg-xs-green-hover"
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
