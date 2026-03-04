"use client";

import AnimateIn from "@/components/AnimateIn";
import SectionLabel from "@/components/SectionLabel";
import CTAButton from "@/components/CTAButton";

const values = [
  {
    title: "Systems Over Services",
    description:
      "We don't sell one-off projects. We build interconnected systems where every component — website, booking, follow-up, reviews, SEO — amplifies the others.",
  },
  {
    title: "Results Over Aesthetics",
    description:
      "A beautiful website that doesn't generate leads is a liability. Everything we build is designed to convert first, look good second. (It does both.)",
  },
  {
    title: "Trades-First Focus",
    description:
      "We don't work with everyone. We specialize in local service businesses because we know the problems, the customers, and the strategies that actually work in this space.",
  },
  {
    title: "Straight Talk",
    description:
      "No fluff, no jargon, no overpromising. We tell you exactly what we'll do, what it costs, and what results to expect. Then we deliver.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 grid-bg" />
        <div className="section-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>About</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Built by Someone Who{" "}
                <span className="gradient-text">Gives a Damn</span>
              </h1>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="pb-20 md:pb-28">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <div className="space-y-6 text-brand-muted leading-relaxed text-lg">
                <p>
                  Xhine Systems started with a simple observation: the best
                  contractors in Atlanta were some of the hardest to find online.
                </p>
                <p>
                  Plumbers who could fix anything. Electricians with decades of
                  experience. Painters who took pride in every job. But when
                  someone pulled out their phone and searched &ldquo;plumber near
                  me,&rdquo; these guys didn&apos;t show up. The contractors with
                  slick websites and automated systems got the calls instead —
                  even when they weren&apos;t as good.
                </p>
                <p>
                  That didn&apos;t sit right.
                </p>
                <p>
                  I started Xhine Systems to fix that gap. I&apos;m 18, based in
                  Atlanta, and I built this company from the ground up — not
                  because I needed another project, but because I saw real
                  businesses getting left behind while the digital world moved on
                  without them.
                </p>
                <p>
                  The big marketing agencies don&apos;t care about a local
                  plumber. The DIY website builders produce sites that look like
                  everyone else&apos;s. And the &ldquo;social media
                  gurus&rdquo; are selling likes, not leads.
                </p>
                <p className="text-brand-white font-medium">
                  Xhine Systems is different. We build complete local presence
                  systems — website, booking, automation, Google visibility — all
                  working together. Specifically for trades. Specifically to get
                  results.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding border-t border-brand-border bg-brand-dark/30">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>Mission</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Give Trades and Contractors the Same Online Leverage Big
                Companies Have
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 text-brand-muted leading-relaxed text-lg">
                The big companies have marketing teams, CRMs, automated
                follow-ups, and SEO strategies. A solo plumber or a three-person
                roofing crew doesn&apos;t — but they should. That&apos;s what we
                build. Enterprise-level systems at a price that makes sense for
                local businesses.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>How We Operate</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
                Principles, Not Platitudes
              </h2>
            </AnimateIn>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <AnimateIn key={value.title} delay={index * 0.1}>
                <div className="h-full rounded-lg border border-brand-border bg-brand-surface/20 p-6 transition-all hover:border-brand-accent/15 hover:bg-brand-surface/40">
                  <h3 className="font-heading text-base font-semibold text-brand-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding border-t border-brand-border bg-brand-dark/30">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <div className="inline-flex items-center gap-2 text-brand-muted mb-4">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-sm">Atlanta, Georgia</span>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                Local Roots. National Reach.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-4 text-brand-muted leading-relaxed">
                Based in Atlanta, serving contractors across the country.
                Everything we build works remotely — you don&apos;t need to be
                local to work with us. But if you are, we know the market.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-brand-border relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="section-container relative">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Let&apos;s Build Your System
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="mt-4 text-brand-muted leading-relaxed">
                No corporate pitch decks. No 90-day onboarding. Just a
                conversation about your business and a plan to get it found
                online.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="mt-8">
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
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
