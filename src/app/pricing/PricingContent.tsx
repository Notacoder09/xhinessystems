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
      "Growth gives you the core system: website, booking, follow-up, missed call text back. Domination adds everything related to Google — review automation, business profile optimization, and local SEO. If you want to own your local search results, go with Domination.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Absolutely. A lot of clients start with Growth to get the foundation in place, then upgrade to Domination once they see it working and want to go all-in on Google visibility.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "Give us 30 days notice. No cancellation fees. You keep your Google reviews and business profile. Your website and automations are part of the service, so those would be deactivated — but we'll help you transition.",
  },
  {
    question: "How fast do I get results?",
    answer:
      "Your site and booking system are live in 7-10 days. Follow-up sequences activate immediately. Google rankings build over 2-4 weeks. Most clients see real lead flow within 30 days.",
  },
  {
    question: "$197/month — is that really worth it?",
    answer:
      "If you close even one extra job per month from it, you've already made your money back several times over. Most trades charge $200-$500+ per job. The math works out pretty fast.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No. It's month to month. We keep clients by delivering results, not by locking them in. The only thing we ask is 30 days notice before you cancel.",
  },
];

export default function PricingContent() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container-main text-center">
          <AnimateIn>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
              Pricing
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Simple Pricing. No Surprises.
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-xs-gray leading-relaxed">
              Two plans. Everything included. No setup fees, no hidden costs, no
              long-term contracts. Pick what fits.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-20 lg:pb-24">
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

      {/* Comparison */}
      <section className="py-16 border-t border-xs-border">
        <div className="container-main">
          <AnimateIn>
            <div className="mx-auto max-w-2xl">
              <h2 className="text-center font-heading text-xl font-bold sm:text-2xl mb-8">
                Quick Comparison
              </h2>
              <div className="overflow-hidden rounded-lg border border-xs-border">
                <div className="grid grid-cols-[1fr,80px,80px] sm:grid-cols-[1fr,120px,120px] border-b border-xs-border bg-xs-card px-4 py-3 sm:px-6">
                  <span className="text-xs text-xs-gray uppercase tracking-wider">
                    Feature
                  </span>
                  <span className="text-center text-xs text-xs-gray uppercase tracking-wider">
                    Growth
                  </span>
                  <span className="text-center text-xs text-xs-green uppercase tracking-wider font-medium">
                    Domination
                  </span>
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
                      {row.g ? (
                        <span className="text-xs-green">✓</span>
                      ) : (
                        <span className="text-xs-gray-dark">—</span>
                      )}
                    </div>
                    <div className="text-center text-sm">
                      {row.d ? (
                        <span className="text-xs-green">✓</span>
                      ) : (
                        <span className="text-xs-gray-dark">—</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 border-t border-xs-border">
        <div className="container-main">
          <AnimateIn>
            <div className="mb-10 text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
                FAQ
              </span>
              <h2 className="mt-3 font-heading text-xl font-bold sm:text-2xl">
                Pricing Questions
              </h2>
            </div>
          </AnimateIn>
          <div className="mx-auto max-w-2xl">
            <FAQAccordion items={faqs} />
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
