"use client";

import AnimateIn from "@/components/AnimateIn";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

const growthFeatures = [
  "Custom website (designed, hosted & maintained)",
  "Online booking integration",
  "Automated appointment reminders",
  "Lead follow-up sequences (SMS + email)",
  "Missed call text back",
  "Monthly performance check-in",
];

const dominationFeatures = [
  "Everything in the Growth Plan",
  "Google review request automation",
  "Google Business Profile optimization",
  "Local SEO foundations",
  "Priority support",
];

const faqs = [
  {
    question: "Are there any setup fees?",
    answer:
      "No. Zero. Zip. Your monthly price is your monthly price. We don't charge extra to build your site or set up your automations.",
  },
  {
    question: "What's the difference between the two plans?",
    answer:
      "Growth gives you the core system: website, booking, follow-up, missed call text back. Domination adds everything Google — review automation, business profile optimization, and local SEO. If you want to own your local search results, go Domination.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Absolutely. A lot of clients start with Growth to get the foundation in place, then upgrade to Domination once they see it working.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "Give us 30 days notice. No cancellation fees. You keep your Google reviews and business profile. We'll help you transition.",
  },
  {
    question: "How fast do I get results?",
    answer:
      "Site and booking live in 7-10 days. Follow-up sequences activate immediately. Google rankings build over 2-4 weeks. Most clients see real lead flow within 30 days.",
  },
  {
    question: "$197/month — is that really worth it?",
    answer:
      "If you close even one extra job per month, you've already made your money back several times over. Most trades charge $200-$500+ per job. Do the math.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No. Month to month. 30 days notice to cancel. We keep clients by delivering results, not contracts.",
  },
];

export default function PricingContent() {
  return (
    <>
      {/* Header — dark */}
      <section className="section-dark pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container-main text-center">
          <AnimateIn>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
              Pricing
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight tracking-wide sm:text-4xl lg:text-5xl">
              Simple Pricing. No Surprises.
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-xs-gray-light leading-relaxed">
              Two plans. Everything included. No setup fees, no hidden costs, no
              contracts. Pick what fits.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Cards — light */}
      <section className="section-light py-16 lg:py-20">
        <div className="container-main">
          <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
            <PricingCard
              name="Growth Plan"
              price="$197"
              description="The foundation — website, booking, follow-up."
              features={growthFeatures}
              index={0}
            />
            <PricingCard
              name="Domination Plan"
              price="$297"
              description="Full system — everything plus Google domination."
              features={dominationFeatures}
              highlighted
              badge="Most Popular"
              index={1}
            />
          </div>
        </div>
      </section>

      {/* Comparison — dark */}
      <section className="section-dark py-16">
        <div className="container-main">
          <AnimateIn>
            <div className="mx-auto max-w-2xl">
              <h2 className="text-center font-heading text-xl font-bold uppercase tracking-wide sm:text-2xl mb-8">
                Quick Comparison
              </h2>
              <div className="overflow-hidden rounded-lg border border-xs-border">
                <div className="grid grid-cols-[1fr,80px,80px] sm:grid-cols-[1fr,120px,120px] border-b border-xs-border bg-xs-navy-light px-4 py-3 sm:px-6">
                  <span className="text-xs text-xs-gray uppercase tracking-wider">Feature</span>
                  <span className="text-center text-xs text-xs-gray uppercase tracking-wider">Growth</span>
                  <span className="text-center text-xs text-xs-green uppercase tracking-wider font-bold">Domination</span>
                </div>
                {[
                  { name: "Custom Website", g: true, d: true },
                  { name: "Online Booking", g: true, d: true },
                  { name: "Appointment Reminders", g: true, d: true },
                  { name: "Lead Follow-Up (SMS + Email)", g: true, d: true },
                  { name: "Missed Call Text Back", g: true, d: true },
                  { name: "Monthly Check-In", g: true, d: true },
                  { name: "Google Review Automation", g: false, d: true },
                  { name: "Google Business Profile", g: false, d: true },
                  { name: "Local SEO Foundations", g: false, d: true },
                  { name: "Priority Support", g: false, d: true },
                ].map((row, i, arr) => (
                  <div
                    key={row.name}
                    className={`grid grid-cols-[1fr,80px,80px] sm:grid-cols-[1fr,120px,120px] px-4 py-3 sm:px-6 ${
                      i < arr.length - 1 ? "border-b border-xs-border/50" : ""
                    }`}
                  >
                    <span className="text-sm text-xs-gray-light">{row.name}</span>
                    <div className="text-center text-sm">
                      {row.g ? <span className="text-xs-green">✓</span> : <span className="text-xs-gray-dark">—</span>}
                    </div>
                    <div className="text-center text-sm">
                      {row.d ? <span className="text-xs-green">✓</span> : <span className="text-xs-gray-dark">—</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ — light */}
      <section className="section-light py-16 lg:py-20">
        <div className="container-main">
          <AnimateIn>
            <div className="mb-10 text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">FAQ</span>
              <h2 className="mt-3 font-heading text-xl font-bold uppercase tracking-wide text-xs-text-dark sm:text-2xl">
                Pricing Questions
              </h2>
            </div>
          </AnimateIn>
          <div className="mx-auto max-w-2xl">
            <FAQAccordion items={faqs} theme="light" />
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Get Started?"
        body="Book a call. We'll walk through your situation, pick the right plan, and get your system built in under two weeks."
        buttonText="Book a Call to Get Started →"
      />
    </>
  );
}
