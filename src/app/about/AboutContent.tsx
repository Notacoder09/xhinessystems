"use client";

import AnimateIn from "@/components/AnimateIn";
import CTASection from "@/components/CTASection";

export default function AboutContent() {
  return (
    <>
      {/* Header — dark */}
      <section className="section-dark pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container-main text-center">
          <AnimateIn>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
              About
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight tracking-wide sm:text-4xl lg:text-5xl">
              The Short Version: We Help
              <br />
              <span className="text-xs-green">Contractors Get Found Online</span>
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Story — light */}
      <section className="section-light py-16 lg:py-24">
        <div className="container-main">
          <AnimateIn>
            <div className="mx-auto max-w-2xl space-y-5 text-xs-text-muted leading-relaxed">
              <p className="text-lg text-xs-text-dark font-medium">
                XhinesSystems started because I kept seeing the same thing:
                great contractors losing jobs to worse ones who just marketed
                better.
              </p>
              <p>
                Plumbers who could fix anything. Electricians with 20 years of
                experience. Roofers who actually showed up on time. But when
                someone pulled out their phone and searched &ldquo;plumber near
                me,&rdquo; these guys were nowhere to be found.
              </p>
              <p>
                The contractors who showed up? They had a website. They had
                Google reviews. They had a booking link. And they were getting
                all the calls — even when their work wasn&apos;t as good.
              </p>
              <p className="text-xs-text-dark font-medium">
                That didn&apos;t sit right with me.
              </p>
              <p>
                I&apos;m 18, based in Atlanta, and I built XhinesSystems from
                the ground up. Not because I needed a side project — because I
                saw a real problem that nobody was solving properly. The big
                agencies don&apos;t care about a local plumber. The DIY builders
                give you a template that looks like everyone else&apos;s. And
                the &ldquo;social media gurus&rdquo; are selling likes, not
                leads.
              </p>
              <p>
                So I built something different. A simple, complete system —
                website, booking, follow-up automation, Google visibility — all
                working together. Built specifically for trades. Priced so it
                makes sense for a one-truck operation or a small crew.
              </p>
              <p className="text-lg text-xs-text-dark font-semibold">
                We provide the structure, systems, and strategy. You bring the
                commitment. That&apos;s the deal.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Mission — dark */}
      <section className="section-dark py-16 lg:py-20">
        <div className="container-main text-center">
          <AnimateIn>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
              Mission
            </span>
            <h2 className="mx-auto mt-3 max-w-2xl font-heading text-2xl font-bold uppercase leading-snug tracking-wide sm:text-3xl">
              Give Trades and Contractors the Same Online Leverage Big Companies
              Have
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-xs-gray-light leading-relaxed">
              Big companies have marketing teams, CRMs, automated follow-ups,
              and SEO strategies. A solo plumber doesn&apos;t — but he should.
              That&apos;s what we build. The same firepower, at a price that
              makes sense.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Values — light */}
      <section className="section-light py-16 lg:py-20">
        <div className="container-main">
          <AnimateIn>
            <div className="mb-10 text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
                How We Operate
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold uppercase tracking-wide text-xs-text-dark sm:text-3xl">
                No Fluff. Just These.
              </h2>
            </div>
          </AnimateIn>
          <div className="mx-auto max-w-3xl grid gap-4 sm:grid-cols-2">
            {[
              { t: "Systems, Not Services", d: "We don't sell one-off projects. We build an interconnected system where every piece makes the other pieces work better." },
              { t: "Results First", d: "A beautiful website that doesn't generate leads is useless. Everything we build is designed to get your phone ringing." },
              { t: "Trades Only", d: "We don't work with restaurants, e-commerce stores, or tech startups. Contractors. That's it." },
              { t: "Straight Talk", d: "No jargon, no overpromising, no 47-page proposals. We tell you what we'll do, what it costs, and then we do it." },
            ].map((v, i) => (
              <AnimateIn key={v.t} delay={i * 0.05}>
                <div className="rounded-lg border border-xs-border-light bg-white p-6 h-full shadow-sm">
                  <h3 className="font-heading text-base font-bold uppercase tracking-wide text-xs-text-dark">
                    {v.t}
                  </h3>
                  <p className="mt-2 text-sm text-xs-text-muted leading-relaxed">
                    {v.d}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location — dark */}
      <section className="section-dark py-10 lg:py-14">
        <div className="container-main text-center">
          <AnimateIn>
            <p className="text-sm text-xs-gray">
              📍 Based in Atlanta, GA — serving contractors nationwide.
            </p>
          </AnimateIn>
        </div>
      </section>

      <CTASection
        headline="Want to Work Together?"
        body="Book a free call. No slide decks, no 90-day onboarding. Just a conversation about your business and how to get it found online."
      />
    </>
  );
}
