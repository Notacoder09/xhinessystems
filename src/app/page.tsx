"use client";

import HeroSection from "@/components/HeroSection";
import SectionLabel from "@/components/SectionLabel";
import AnimateIn from "@/components/AnimateIn";
import StepCard from "@/components/StepCard";
import ServiceCard from "@/components/ServiceCard";
import CTAButton from "@/components/CTAButton";

const services = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Custom Website Design",
    description:
      "A fast, mobile-first website built to convert visitors into booked jobs. Not a template — built for your trade.",
    outcome: "A website that actually generates leads instead of collecting dust",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Google Business Optimization",
    description:
      "Get found when locals search for your trade. We optimize your Google Business Profile to rank in the map pack.",
    outcome: "Showing up in the top 3 local results when customers search",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Booking Automation",
    description:
      "Let customers book appointments 24/7 without calling. Automated reminders cut no-shows and keep your schedule full.",
    outcome: "Customers book while you sleep — no phone tag required",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Lead Follow-Up Sequences",
    description:
      "Automated SMS and email sequences that nurture every lead. No more forgetting to follow up — the system handles it.",
    outcome: "Every lead gets followed up within minutes, not days",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Review Automation",
    description:
      "Automatically request Google reviews from happy customers. More reviews means more trust and higher rankings.",
    outcome: "A stream of 5-star reviews building your reputation on autopilot",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Local SEO Foundations",
    description:
      "Citations, directory listings, and on-page optimization that get you ranking for local searches in your area.",
    outcome: "Sustainable organic visibility that compounds over time",
  },
];

const steps = [
  {
    step: "01",
    title: "Build",
    description:
      "We build your website, set up your booking system, and optimize your Google Business Profile. Everything is designed to convert — not just look good.",
  },
  {
    step: "02",
    title: "Automate",
    description:
      "We connect lead follow-up sequences, appointment reminders, and review requests. Every touchpoint is handled — automatically.",
  },
  {
    step: "03",
    title: "Dominate",
    description:
      "Your business shows up when locals search. Leads come in. Bookings fill up. Reviews stack. You focus on the work — the system handles the rest.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Credibility Bar */}
      <section className="border-y border-brand-border bg-brand-dark/50">
        <div className="section-container py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "100%", label: "Done-For-You" },
              { value: "24/7", label: "Automated Booking" },
              { value: "30-Day", label: "Results Timeline" },
              { value: "$197", label: "Starting Price" },
            ].map((stat) => (
              <AnimateIn key={stat.label}>
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-brand-accent md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-brand-muted">
                    {stat.label}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <SectionLabel>The Problem</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                You&apos;re Great at Your Trade.
                <br />
                <span className="text-brand-muted">
                  But Nobody Can Find You Online.
                </span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="mt-8 space-y-4 text-brand-muted leading-relaxed">
                <p>
                  You&apos;ve built your skills over years. You do quality work.
                  Your customers are happy. But when someone in your area searches
                  Google for a plumber, an electrician, or a roofer — your
                  competitor&apos;s name comes up first. Not yours.
                </p>
                <p>
                  They have a website. They have reviews. They show up on the map.
                  They have an automated booking system. And they&apos;re getting
                  the calls that should be going to you.
                </p>
                <p>
                  Meanwhile, you&apos;re relying on word of mouth, a Facebook
                  page, or a Yelp listing you don&apos;t control. You&apos;re
                  losing leads because you didn&apos;t follow up fast enough.
                  You&apos;re invisible to the people who are actively searching
                  for exactly what you do.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding border-t border-brand-border bg-brand-dark/30">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>The System</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                One System.{" "}
                <span className="gradient-text">Every Angle Covered.</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 text-brand-muted leading-relaxed">
                Xhine Systems isn&apos;t just a website. It&apos;s a complete
                local presence engine — your website, your booking system, your
                follow-up automation, and your Google visibility all working
                together as one machine. Built specifically for trades and
                contractors.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>How It Works</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Three Steps to Local Domination
              </h2>
            </AnimateIn>
          </div>

          <div className="mt-16 grid gap-8 md:gap-12 lg:grid-cols-3">
            {steps.map((step, i) => (
              <StepCard key={step.step} {...step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding border-t border-brand-border bg-brand-dark/30">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>Services</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Everything You Need to{" "}
                <span className="gradient-text">Own Your Market</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-4 text-brand-muted">
                Each piece is built to work independently — and exponentially
                better together.
              </p>
            </AnimateIn>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>

          <AnimateIn className="mt-12 text-center">
            <CTAButton href="/services" variant="secondary" size="md">
              View All Services
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
          </AnimateIn>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>Pricing</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Transparent Pricing. No Surprises.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-4 text-brand-muted">
                Two plans. Everything included. No setup fees, no hidden costs.
                Cancel anytime with 30 days notice.
              </p>
            </AnimateIn>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            <AnimateIn>
              <div className="rounded-lg border border-brand-border bg-brand-surface/30 p-6 text-center">
                <h3 className="font-heading text-lg font-semibold text-brand-white">
                  Growth Plan
                </h3>
                <div className="mt-2 font-heading text-3xl font-bold text-brand-white">
                  $197<span className="text-sm text-brand-muted font-normal">/mo</span>
                </div>
                <p className="mt-2 text-sm text-brand-muted">
                  Website + Booking + Follow-Up
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="rounded-lg border border-brand-accent/20 bg-brand-surface/50 p-6 text-center accent-glow">
                <h3 className="font-heading text-lg font-semibold text-brand-white">
                  Domination Plan
                </h3>
                <div className="mt-2 font-heading text-3xl font-bold text-brand-white">
                  $297<span className="text-sm text-brand-muted font-normal">/mo</span>
                </div>
                <p className="mt-2 text-sm text-brand-muted">
                  Everything + Google + SEO
                </p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn className="mt-10 text-center">
            <CTAButton href="/pricing" variant="outline" size="md">
              Compare Plans
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
          </AnimateIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding border-t border-brand-border relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-brand-accent/[0.04] blur-[100px]" />

        <div className="section-container relative">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Stop Losing Jobs to
                <br />
                <span className="gradient-text">Competitors Who Show Up First</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="mt-6 text-brand-muted leading-relaxed">
                Book a free discovery call. We&apos;ll audit your current online
                presence, show you exactly where you&apos;re losing leads, and
                map out a system to fix it. No pressure, no fluff — just a
                straight conversation about getting your phone to ring.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="mt-8">
                <CTAButton href="/book" variant="primary" size="lg">
                  Book Your Free Discovery Call
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
          </div>
        </div>
      </section>
    </>
  );
}
