"use client";

import AnimateIn from "@/components/AnimateIn";
import LeadForm from "@/components/LeadForm";
import Link from "next/link";

export default function ContactContent() {
  return (
    <>
      {/* Header — dark */}
      <section className="section-dark pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container-main text-center">
          <AnimateIn>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
              Contact
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight tracking-wide sm:text-4xl lg:text-5xl">
              Let&apos;s Talk About{" "}
              <span className="text-xs-green">Your Business</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-xs-gray-light leading-relaxed">
              Fill out the form and we&apos;ll reach out within 24 hours. Or
              skip straight to booking a call.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Form — light */}
      <section className="section-light py-16 lg:py-20">
        <div className="container-main">
          <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[1fr,320px]">
            <AnimateIn>
              <div className="rounded-lg border border-xs-border-light bg-white p-6 sm:p-8 shadow-sm">
                <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-xs-text-dark mb-6">
                  Send Us a Message
                </h2>
                <LeadForm />
              </div>
            </AnimateIn>

            <div className="space-y-5">
              <AnimateIn delay={0.08}>
                <div className="rounded-lg border border-xs-border-light bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-xs-text-dark mb-3">
                    Rather Just Talk?
                  </h3>
                  <p className="text-sm text-xs-text-muted leading-relaxed mb-4">
                    Skip the form. Book a 20-minute discovery call.
                  </p>
                  <Link
                    href="/book"
                    className="block rounded bg-xs-green py-2.5 text-center text-sm font-bold text-xs-navy uppercase tracking-wider transition-colors hover:bg-xs-green-hover"
                  >
                    Book a Call →
                  </Link>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.12}>
                <div className="rounded-lg border border-xs-border-light bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-xs-text-dark mb-3">
                    What Happens Next
                  </h3>
                  <ol className="space-y-2.5">
                    {[
                      "You fill out the form",
                      "We review your online presence",
                      "We reach out within 24 hours",
                    ].map((step, i) => (
                      <li key={step} className="flex items-start gap-2.5 text-sm text-xs-text-muted">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-xs-green/15 text-[10px] font-mono font-bold text-xs-green">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.16}>
                <div className="rounded-lg border border-xs-border-light bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-xs-text-dark mb-2">
                    XhinesSystems
                  </h3>
                  <p className="text-sm text-xs-text-muted">📍 Atlanta, GA</p>
                  <p className="text-sm text-xs-text-muted">✉️ hello@xhinessystems.com</p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
