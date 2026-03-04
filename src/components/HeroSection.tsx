"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-24">
      <div className="container-main text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-xs-border bg-xs-card px-4 py-1.5"
        >
          <span className="h-2 w-2 rounded-full bg-xs-green" />
          <span className="font-mono text-xs text-xs-green">
            Now serving contractors nationwide
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl"
        >
          The Leads Are There.
          <br />
          <span className="text-xs-green">They Just Can&apos;t Find You.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mx-auto mt-5 max-w-xl text-base text-xs-gray leading-relaxed sm:text-lg"
        >
          People are searching for your trade right now. If they can&apos;t find
          you, they&apos;re calling someone else. We fix that.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Link
            href="/book"
            className="rounded bg-xs-green px-7 py-3 text-sm font-semibold text-xs-black transition-colors hover:bg-xs-green-hover"
          >
            Book a Discovery Call →
          </Link>
          <Link
            href="#how-it-works"
            className="rounded border border-xs-border px-7 py-3 text-sm font-medium text-xs-white transition-colors hover:border-xs-gray-dark hover:bg-xs-card/50"
          >
            See How It Works
          </Link>
        </motion.div>

        {/* Trust bullets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-xs-gray"
        >
          {[
            "No long-term contracts",
            "Built for trades & contractors",
            "Results in 30 days",
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="text-xs-green">✓</span>
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
