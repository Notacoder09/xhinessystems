"use client";

import AnimateIn from "@/components/AnimateIn";
import SectionLabel from "@/components/SectionLabel";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTAButton from "@/components/CTAButton";

const growthFeatures = [
  "Custom website (designed + maintained)",
  "Online booking integration",
  "Automated appointment reminders",
  "Lead follow-up sequences (SMS + email)",
  "Monthly performance report",
];

const dominationFeatures = [
  "Everything in Growth Plan",
  "Google review request automation",
  "Google Business Profile optimization",
  "Local SEO foundations",
  "Priority support",
];

const comparisonFeatures = [
  { name: "Custom Website", growth: true, domination: true },
  { name: "Online Booking Integration", growth: true, domination: true },
  { name: "Automated Appointment Reminders", growth: true, domination: true },
  { name: "Lead Follow-Up Sequences (SMS + Email)", growth: true, domination: true },
  { name: "Monthly Performance Report", growth: true, domination: true },
  { name: "Google Review Automation", growth: false, domination: true },
  { name: "Google Business Profile Optimization", growth: false, domination: true },
  { name: "Local SEO Foundations", growth: false, domination: true },
  { name: "Priority Support", growth: false, domination: true },
];

const faqs = [
  {
    question: "Is there a setup fee or long-term contract?",
    answer:
      "No setup fees and no long-term contracts. You pay month to month. We ask for 30 days notice before cancellation, but that's it. We keep our clients by delivering results, not by locking them in.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Your website and booking system will be live within the first 2 weeks. Google Business Profile optimization starts showing results within 2-4 weeks. Lead follow-up sequences are active from day one. Most clients see meaningful lead flow within 30 days.",
  },
  {
    question: "Do I need to be tech-savvy to use this?",
    answer:
      "Not at all. We handle everything — the design, the setup, the automation, the maintenance. You'll get a simple dashboard to see your bookings and leads, but you don't need to touch any of the technical stuff. That's literally what you're paying us for.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We'll audit your current site and either rebuild it or optimize what you have — whichever makes more sense. Most contractor websites we see are template sites that aren't optimized for conversions or search. A rebuild is usually the better move, and it's included in both plans.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. You can upgrade from Growth to Domination at any time. Many clients start with Growth to get the foundation in place, then upgrade once they see the results and want to go all-in on Google visibility.",
  },
  {
    question: "What trades do you work with?",
    answer:
      "We work with plumbers, HVAC techs, electricians, painters, roofers, landscapers, auto detailers, cleaning services, pressure washers, general contractors, and similar local service businesses. If you serve a local area and need more customers, we can help.",
  },
  {
    question: "How is this different from hiring a marketing agency?",
    answer:
      "Most marketing agencies sell you ads or social media management. We build a system. Your website, your booking flow, your follow-up sequences, and your Google presence all work together as one integrated machine. And we only work with trades and contractors — we know this space inside and out.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "Give us 30 days notice and we'll wrap things up cleanly. You keep your Google Business Profile and any reviews collected. Your website and automations are part of the service, so those would be deactivated — but we'll help you transition smoothly.",
  },
];

export default function PricingContent() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 grid-bg" />
        <div className="section-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>Pricing</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Simple Plans.{" "}
                <span className="gradient-text">Serious Results.</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 text-brand-muted leading-relaxed text-lg">
                Two plans. Everything included. No setup fees, no hidden costs,
                no long-term contracts. Pick the level that fits your goals.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 md:pb-28">
        <div className="section-container">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <PricingCard
              name="Growth Plan"
              price="$197"
              description="The foundation — get online, get booked, get followed up."
              features={growthFeatures}
              index={0}
            />
            <PricingCard
              name="Domination Plan"
              price="$297"
              description="The full system — own your local market on Google."
              features={dominationFeatures}
              highlighted
              badge="Most Popular"
              index={1}
            />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding border-t border-brand-border bg-brand-dark/30">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">
                Plan Comparison
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="mt-10 overflow-hidden rounded-lg border border-brand-border">
                {/* Header */}
                <div className="grid grid-cols-[1fr,100px,100px] border-b border-brand-border bg-brand-surface/50 px-6 py-4 sm:grid-cols-[1fr,140px,140px]">
                  <span className="text-xs font-medium text-brand-muted uppercase tracking-wider">
                    Feature
                  </span>
                  <span className="text-center text-xs font-medium text-brand-muted uppercase tracking-wider">
                    Growth
                  </span>
                  <span className="text-center text-xs font-medium text-brand-accent uppercase tracking-wider">
                    Domination
                  </span>
                </div>

                {/* Rows */}
                {comparisonFeatures.map((feature, index) => (
                  <div
                    key={feature.name}
                    className={`grid grid-cols-[1fr,100px,100px] px-6 py-3.5 sm:grid-cols-[1fr,140px,140px] ${
                      index < comparisonFeatures.length - 1
                        ? "border-b border-brand-border/50"
                        : ""
                    }`}
                  >
                    <span className="text-sm text-brand-muted-light">
                      {feature.name}
                    </span>
                    <div className="flex justify-center">
                      {feature.growth ? (
                        <svg
                          className="h-4 w-4 text-brand-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <span className="text-brand-muted/30">—</span>
                      )}
                    </div>
                    <div className="flex justify-center">
                      {feature.domination ? (
                        <svg
                          className="h-4 w-4 text-brand-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <span className="text-brand-muted/30">—</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <div className="text-center">
                <SectionLabel>FAQ</SectionLabel>
                <h2 className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
                  Common Questions
                </h2>
              </div>
            </AnimateIn>

            <div className="mt-10">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-brand-border relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-brand-accent/[0.04] blur-[100px]" />
        <div className="section-container relative">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Still Have Questions?
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="mt-4 text-brand-muted leading-relaxed">
                Book a free discovery call. No sales pitch — just a real
                conversation about your business and whether we&apos;re a good
                fit.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
                <CTAButton href="/contact" variant="secondary" size="lg">
                  Contact Us
                </CTAButton>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
