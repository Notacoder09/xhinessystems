"use client";

import AnimateIn from "@/components/AnimateIn";
import LeadForm from "@/components/LeadForm";
import Link from "next/link";

export default function ContactContent() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container-main text-center">
          <AnimateIn>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
              Contact
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Let&apos;s Talk About <span className="text-xs-green">Your Business</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-xs-gray leading-relaxed">
              Fill out the form and we&apos;ll reach out within 24 hours. Or
              skip straight to booking a call.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="pb-20 lg:pb-28">
        <div className="container-main">
          <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[1fr,320px]">
            {/* Form */}
            <AnimateIn>
              <div className="rounded-lg border border-xs-border bg-xs-card/50 p-6 sm:p-8">
                <h2 className="font-heading text-lg font-bold mb-6">
                  Send Us a Message
                </h2>
                <LeadForm />
              </div>
            </AnimateIn>

            {/* Sidebar */}
            <div className="space-y-5">
              <AnimateIn delay={0.08}>
                <div className="rounded-lg border border-xs-border bg-xs-card/50 p-6">
                  <h3 className="font-heading text-sm font-bold mb-3">
                    Rather Just Talk?
                  </h3>
                  <p className="text-sm text-xs-gray leading-relaxed mb-4">
                    Skip the form. Book a 20-minute discovery call and we&apos;ll
                    talk through everything live.
                  </p>
                  <Link
                    href="/book"
                    className="block rounded bg-xs-green py-2.5 text-center text-sm font-semibold text-xs-black transition-colors hover:bg-xs-green-hover"
                  >
                    Book a Call →
                  </Link>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.12}>
                <div className="rounded-lg border border-xs-border bg-xs-card/50 p-6">
                  <h3 className="font-heading text-sm font-bold mb-3">
                    What Happens Next
                  </h3>
                  <ol className="space-y-2.5">
                    {[
                      "You fill out the form",
                      "We review your online presence",
                      "We reach out within 24 hours with a game plan",
                    ].map((step, i) => (
                      <li key={step} className="flex items-start gap-2.5 text-sm text-xs-gray">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-xs-green/10 text-[10px] font-mono font-bold text-xs-green">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.16}>
                <div className="rounded-lg border border-xs-border bg-xs-card/50 p-6">
                  <h3 className="font-heading text-sm font-bold mb-2">
                    Xhine Systems
                  </h3>
                  <p className="text-sm text-xs-gray">📍 Atlanta, GA</p>
                  <p className="text-sm text-xs-gray">
                    ✉️ hello@xhinessystems.com
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
