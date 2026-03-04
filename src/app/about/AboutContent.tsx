"use client";

import AnimateIn from "@/components/AnimateIn";
import CTASection from "@/components/CTASection";

export default function AboutContent() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container-main text-center">
          <AnimateIn>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
              About
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              The Short Version: We Help
              <br />
              <span className="text-xs-green">Contractors Get Found Online</span>
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section className="pb-16 lg:pb-24">
        <div className="container-main">
          <AnimateIn>
            <div className="mx-auto max-w-2xl space-y-5 text-xs-gray leading-relaxed">
              <p className="text-lg text-xs-white font-medium">
                Xhine Systems started because I kept seeing the same thing:
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

              <p>That didn&apos;t sit right with me.</p>

              <p>
                I&apos;m 18, based in Atlanta, and I built Xhine Systems from
                the ground up. Not because I needed a side project — because I
                saw a real problem that nobody was solving properly. The big
                marketing agencies don&apos;t care about a local plumber.
                They&apos;re chasing $10K/month enterprise contracts. The DIY
                website builders give you a template that looks like everyone
                else&apos;s. And the &ldquo;social media gurus&rdquo; are
                selling likes, not leads.
              </p>

              <p>
                So I built something different. A simple, complete system —
                website, booking, follow-up automation, Google visibility — all
                working together. Built specifically for trades. Priced so it
                actually makes sense for a one-truck operation or a small crew.
              </p>

              <p className="text-xs-white font-medium">
                We provide the structure, systems, and strategy. You bring the
                commitment. That&apos;s the deal.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 border-t border-xs-border">
        <div className="container-main text-center">
          <AnimateIn>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
              Mission
            </span>
            <h2 className="mx-auto mt-3 max-w-2xl font-heading text-2xl font-bold leading-snug sm:text-3xl">
              Give Trades and Contractors the Same Online Leverage Big Companies
              Have
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-xs-gray leading-relaxed">
              Big companies have marketing teams, CRMs, automated follow-ups,
              and SEO strategies. A solo plumber doesn&apos;t — but he should.
              That&apos;s what we build. The same firepower, at a price that
              makes sense.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* How we operate */}
      <section className="py-16 lg:py-24 border-t border-xs-border">
        <div className="container-main">
          <AnimateIn>
            <div className="mb-10 text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
                How We Operate
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">
                No Fluff. Just These.
              </h2>
            </div>
          </AnimateIn>

          <div className="mx-auto max-w-3xl grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "Systems, Not Services",
                d: "We don't sell one-off projects. We build an interconnected system where every piece makes the other pieces work better.",
              },
              {
                t: "Results First",
                d: "A beautiful website that doesn't generate leads is useless. Everything we build is designed to get your phone ringing.",
              },
              {
                t: "Trades Only",
                d: "We don't work with restaurants, e-commerce stores, or tech startups. Contractors. That's it.",
              },
              {
                t: "Straight Talk",
                d: "No jargon, no overpromising, no 47-page proposals. We tell you what we'll do, what it costs, and then we do it.",
              },
            ].map((v, i) => (
              <AnimateIn key={v.t} delay={i * 0.05}>
                <div className="rounded-lg border border-xs-border bg-xs-card/50 p-6 h-full">
                  <h3 className="font-heading text-base font-bold">{v.t}</h3>
                  <p className="mt-2 text-sm text-xs-gray leading-relaxed">
                    {v.d}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 lg:py-16 border-t border-xs-border">
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
