"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-xs-navy pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="container-main relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-xs-border bg-xs-navy-light px-4 py-1.5"
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
              transition={{ duration: 0.5, delay: 0.06 }}
              className="font-heading text-4xl font-extrabold uppercase leading-[1.05] tracking-wide sm:text-5xl lg:text-6xl"
            >
              The Leads Are There.
              <br />
              <span className="text-xs-green">
                They Just Can&apos;t Find You.
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="mt-5 max-w-md text-base text-xs-gray-light leading-relaxed sm:text-lg"
            >
              People are searching for your trade right now. If they can&apos;t
              find you, they&apos;re calling someone else. We fix that.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/book"
                className="rounded bg-xs-green px-7 py-3 text-center text-sm font-bold text-xs-navy uppercase tracking-wider transition-colors hover:bg-xs-green-hover"
              >
                Book a Discovery Call →
              </Link>
              <Link
                href="#how-it-works"
                className="rounded border border-xs-border px-7 py-3 text-center text-sm font-semibold text-xs-white transition-colors hover:border-xs-gray-dark hover:bg-xs-navy-light"
              >
                See How It Works
              </Link>
            </motion.div>

            {/* Trust */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-xs-gray"
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

          {/* Right — Eagle Brand Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden items-center justify-center lg:flex"
          >
            <div className="relative">
              {/* Eagle SVG */}
              <svg
                viewBox="0 0 200 200"
                className="h-72 w-72 xl:h-80 xl:w-80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Shield body */}
                <path
                  d="M100 10 L180 55 L180 120 C180 155 145 185 100 195 C55 185 20 155 20 120 L20 55 Z"
                  fill="#151d2e"
                  stroke="#00FF94"
                  strokeWidth="2"
                  strokeOpacity="0.3"
                />
                {/* Eagle wings — left */}
                <path
                  d="M100 70 C85 55 55 40 35 50 C55 55 70 65 80 80 C70 75 50 70 30 75 C55 82 70 90 80 100 Z"
                  fill="#00FF94"
                  fillOpacity="0.15"
                  stroke="#00FF94"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                />
                {/* Eagle wings — right */}
                <path
                  d="M100 70 C115 55 145 40 165 50 C145 55 130 65 120 80 C130 75 150 70 170 75 C145 82 130 90 120 100 Z"
                  fill="#00FF94"
                  fillOpacity="0.15"
                  stroke="#00FF94"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                />
                {/* Eagle head */}
                <circle
                  cx="100"
                  cy="75"
                  r="14"
                  fill="#151d2e"
                  stroke="#00FF94"
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                />
                {/* Eyes */}
                <circle cx="95" cy="73" r="2" fill="#00FF94" />
                <circle cx="105" cy="73" r="2" fill="#00FF94" />
                {/* Beak */}
                <path
                  d="M97 79 L100 85 L103 79"
                  fill="#00FF94"
                  fillOpacity="0.4"
                  stroke="#00FF94"
                  strokeWidth="1"
                />
                {/* Body / tail feathers */}
                <path
                  d="M90 100 L100 150 L110 100 Z"
                  fill="#00FF94"
                  fillOpacity="0.08"
                  stroke="#00FF94"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                {/* X mark in center */}
                <text
                  x="100"
                  y="130"
                  textAnchor="middle"
                  className="font-heading"
                  fill="#00FF94"
                  fontSize="24"
                  fontWeight="800"
                  letterSpacing="2"
                >
                  X
                </text>
                <text
                  x="100"
                  y="147"
                  textAnchor="middle"
                  fill="#00FF94"
                  fillOpacity="0.6"
                  fontSize="8"
                  fontWeight="600"
                  letterSpacing="4"
                >
                  XHINESSYSTEMS
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
