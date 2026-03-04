"use client";

import AnimateIn from "@/components/AnimateIn";
import SectionLabel from "@/components/SectionLabel";
import BookingEmbed from "@/components/BookingEmbed";

export default function BookContent() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 grid-bg" />
        <div className="section-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>Book a Call</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight sm:text-5xl">
                Let&apos;s Map Out Your{" "}
                <span className="gradient-text">Growth System</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 text-brand-muted leading-relaxed text-lg">
                Pick a time that works for you. On the call, we&apos;ll review
                your current online presence, identify where you&apos;re losing
                leads, and walk through exactly how we&apos;d build a system to
                fix it. Free. No pressure. No pitch deck.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="pb-8 md:pb-12">
        <div className="section-container">
          <div className="mx-auto max-w-4xl">
            <AnimateIn>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    ),
                    title: "Presence Audit",
                    description: "We'll review your website, Google profile, and online footprint.",
                  },
                  {
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                      </svg>
                    ),
                    title: "Custom Roadmap",
                    description: "You'll get a clear plan tailored to your trade and market.",
                  },
                  {
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "15–20 Minutes",
                    description: "Quick, focused, and actionable. No hour-long sales calls.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-brand-border bg-brand-surface/20 p-5 text-center"
                  >
                    <div className="mb-3 flex justify-center text-brand-accent">
                      {item.icon}
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-brand-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Calendar Embed */}
      <section className="pb-20 md:pb-28">
        <div className="section-container">
          <div className="mx-auto max-w-4xl">
            <AnimateIn delay={0.1}>
              <BookingEmbed />
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
