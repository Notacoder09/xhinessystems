"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-accent/[0.03] blur-[120px]" />

      <div className="section-container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-accent" />
            </span>
            <span className="font-mono text-xs text-brand-accent">
              Local Presence Management — Atlanta, GA
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            The Leads Are There.
            <br />
            <span className="gradient-text">They Just Can&apos;t Find You.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base text-brand-muted leading-relaxed sm:text-lg md:mt-8"
          >
            Your competitors are getting the calls, the bookings, and the
            5-star reviews — while you&apos;re relying on word of mouth and
            hoping the phone rings. We build the system that changes that.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-10"
          >
            <CTAButton href="/book" variant="primary" size="lg">
              Book a Discovery Call
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
            <CTAButton href="/services" variant="secondary" size="lg">
              See How It Works
            </CTAButton>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-brand-muted/60 md:mt-16"
          >
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-brand-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              No long-term contracts
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-brand-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Built for trades &amp; contractors
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-brand-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Results in 30 days
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
