"use client";

import AnimateIn from "@/components/AnimateIn";
import SectionLabel from "@/components/SectionLabel";
import LeadForm from "@/components/LeadForm";
import CTAButton from "@/components/CTAButton";

export default function ContactContent() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 grid-bg" />
        <div className="section-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>Contact</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Let&apos;s Talk About{" "}
                <span className="gradient-text">Your Business</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 text-brand-muted leading-relaxed text-lg">
                Fill out the form below and we&apos;ll reach out within 24
                hours. Or skip the form and book a call directly.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-20 md:pb-28">
        <div className="section-container">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr,380px]">
            {/* Form */}
            <AnimateIn>
              <div className="rounded-lg border border-brand-border bg-brand-surface/20 p-6 md:p-8">
                <h2 className="font-heading text-xl font-semibold text-brand-white mb-6">
                  Send Us a Message
                </h2>
                <LeadForm />
              </div>
            </AnimateIn>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimateIn delay={0.1}>
                <div className="rounded-lg border border-brand-border bg-brand-surface/20 p-6">
                  <h3 className="font-heading text-base font-semibold text-brand-white mb-4">
                    Prefer a Call?
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed mb-4">
                    Skip the form and book a free discovery call. We&apos;ll
                    audit your online presence and map out a plan — no pressure.
                  </p>
                  <CTAButton href="/book" variant="primary" size="md" className="w-full">
                    Book a Call
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

              <AnimateIn delay={0.2}>
                <div className="rounded-lg border border-brand-border bg-brand-surface/20 p-6">
                  <h3 className="font-heading text-base font-semibold text-brand-white mb-4">
                    What Happens Next
                  </h3>
                  <ol className="space-y-3">
                    {[
                      "You fill out the form with your info",
                      "We review your current online presence",
                      "We reach out within 24 hours with a game plan",
                    ].map((step, i) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-accent/20 bg-brand-accent/10 text-[10px] font-mono text-brand-accent">
                          {i + 1}
                        </span>
                        <span className="text-sm text-brand-muted leading-relaxed">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <div className="rounded-lg border border-brand-border bg-brand-surface/20 p-6">
                  <h3 className="font-heading text-base font-semibold text-brand-white mb-3">
                    Xhine Systems
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-brand-muted">
                      <svg
                        className="h-4 w-4 text-brand-accent/60"
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
                      Atlanta, GA
                    </div>
                    <div className="flex items-center gap-2 text-sm text-brand-muted">
                      <svg
                        className="h-4 w-4 text-brand-accent/60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      hello@xhinessystems.com
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
