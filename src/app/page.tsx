"use client";

import HeroSection from "@/components/HeroSection";
import StatBar from "@/components/StatBar";
import AnimateIn from "@/components/AnimateIn";
import FeatureSection from "@/components/FeatureSection";
import TradesGrid from "@/components/TradesGrid";
import StepCard from "@/components/StepCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

const faqs = [
  {
    question: "When will I see results?",
    answer:
      "Your website and booking system go live in 7-10 days. Most clients see new leads coming in within the first 30 days. Google visibility builds over 2-4 weeks depending on your market. We're not going to promise you'll be rich by Tuesday, but you will see movement fast.",
  },
  {
    question: "Is this affordable for a small operation?",
    answer:
      "Our Growth Plan starts at $197/month. That's less than one job for most trades. If we help you land even one extra job a month, it's already paid for itself multiple times over. No setup fees either.",
  },
  {
    question: "What if I cancel?",
    answer:
      "Give us 30 days notice and you're free. No cancellation fees, no guilt trips. We keep clients by getting results, not by locking them in.",
  },
  {
    question: "Do I need to be tech savvy?",
    answer:
      "Nope. We build everything, set everything up, and manage everything. You fill out a short form with your business info, we handle the rest. If you can text and check email, you can use this.",
  },
  {
    question: "Will my website show up on Google?",
    answer:
      "Yes. Every site we build is optimized for search from day one. If you're on our Domination Plan, we also optimize your Google Business Profile and build local SEO foundations to get you ranking in the map pack.",
  },
  {
    question: "Why not just use word of mouth?",
    answer:
      "Word of mouth is great — when it works. But it's unpredictable. You can't control when referrals come in, and you're invisible to the 97% of people who search online before hiring a contractor. This system gives you a consistent pipeline on top of your referrals.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatBar />

      {/* Problem Section */}
      <section className="py-20 lg:py-28">
        <div className="container-main">
          <AnimateIn>
            <div className="mx-auto max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
                The Problem
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
                You&apos;re Great at Your Trade. But Nobody Can Find You Online.
              </h2>
              <div className="mt-6 space-y-4 text-xs-gray leading-relaxed">
                <p>
                  You do great work. Your customers love you. But when someone
                  in your area searches Google for a plumber, an electrician, or
                  a roofer — your name doesn&apos;t come up. The guy down the
                  street with half your experience? He shows up first. He has a
                  website. He has reviews. He has a booking link.
                </p>
                <p>
                  And he&apos;s getting the calls that should be going to you.
                </p>
                <p>
                  Meanwhile you&apos;re relying on word of mouth, a Facebook
                  page nobody checks, and hoping the phone rings. That&apos;s
                  not a strategy. That&apos;s a coin flip.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-xs-border py-20 lg:py-28">
        <div className="container-main">
          <AnimateIn>
            <div className="mb-16 text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
                What We Build For You
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl lg:text-4xl">
                One System. Every Angle Covered.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-xs-gray">
                Not just a website. A complete system that gets you found, gets
                you booked, and follows up automatically.
              </p>
            </div>
          </AnimateIn>

          <div className="space-y-20 lg:space-y-28">
            <FeatureSection
              label="Custom Website"
              headline="A Website That Actually Gets You Leads"
              body="Not a Wix template. Not a $5,000 agency project that takes 3 months. A clean, fast, mobile-first site built to turn visitors into booked jobs. Your phone number front and center, booking link on every page, and built to rank on Google."
              bullets={[
                "Designed for your specific trade",
                "Mobile-first — looks great on any phone",
                "Built-in booking so customers can schedule instantly",
                "Maintained and hosted by us",
              ]}
              imageSide="right"
              imagePlaceholder="Your Website"
            />

            <FeatureSection
              label="Booking & Reminders"
              headline="Customers Book While You're on a Job"
              body="People don't want to play phone tag. They want to book online at 10pm on a Tuesday. We give them that option. Plus automated reminders so they actually show up."
              bullets={[
                "24/7 online booking — no more missed calls",
                "Syncs with your calendar",
                "SMS & email reminders cut no-shows",
                "Customers book in under 60 seconds",
              ]}
              imageSide="left"
              imagePlaceholder="Booking System"
            />

            <FeatureSection
              label="Lead Follow-Up"
              headline="Never Lose a Lead to Slow Follow-Up Again"
              body="When someone fills out your form or requests a quote, our system hits them back within minutes — automatically. SMS and email sequences keep the conversation going until they book."
              bullets={[
                "Instant response — under 5 minutes",
                "Automated SMS + email nurture sequences",
                "Personalized messages, not generic spam",
                "Follow-up runs 24/7 in the background",
              ]}
              imageSide="right"
              imagePlaceholder="Lead Follow-Up"
            />

            <FeatureSection
              label="Review Automation"
              headline="5-Star Reviews Without the Awkward Ask"
              body="After every job, your customer gets a text with a direct link to leave you a Google review. No awkward conversations. No forgetting. Just a steady stream of reviews building your reputation."
              bullets={[
                "Automatic post-job review requests via SMS",
                "Direct link to your Google review page",
                "More reviews = higher Google rankings",
                "Builds trust with new customers before they even call",
              ]}
              imageSide="left"
              imagePlaceholder="Google Reviews"
            />

            <FeatureSection
              label="Missed Call Text Back"
              headline="Every Missed Call Gets an Instant Text"
              body="You're on a roof. You can't answer. Instead of losing that lead forever, they get an automatic text: 'Hey, sorry we missed your call. How can we help?' Keeps the conversation alive."
              bullets={[
                "Fires automatically on missed calls",
                "Customizable message for your business",
                "Captures the lead before they call someone else",
                "Works even when you're elbows-deep in a job",
              ]}
              imageSide="right"
              imagePlaceholder="Missed Call Text"
            />

            <FeatureSection
              label="Google Business Profile"
              headline="Show Up on the Map When It Matters"
              body="When someone searches 'plumber near me,' Google shows 3 businesses on the map. We make sure you're one of them. Full optimization of your profile — categories, photos, posts, everything."
              bullets={[
                "Complete Google Business Profile setup",
                "Category and keyword optimization",
                "Regular Google Posts to stay active",
                "Ongoing monitoring and updates",
              ]}
              imageSide="left"
              imagePlaceholder="Google Maps"
            />
          </div>
        </div>
      </section>

      {/* Trades Grid */}
      <TradesGrid />

      {/* How It Works */}
      <section id="how-it-works" className="py-20 lg:py-28 border-t border-xs-border">
        <div className="container-main">
          <AnimateIn>
            <div className="mb-12 text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
                How It Works
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl lg:text-4xl">
                Three Steps. That&apos;s It.
              </h2>
            </div>
          </AnimateIn>

          <div className="mx-auto max-w-4xl grid gap-5 md:grid-cols-3">
            <StepCard
              number="01"
              title="Book a Call"
              subtitle="20 min — free, no pressure"
              description="It's actually a sales call, we just didn't want to scare you. We'll look at your current online presence and tell you exactly where you're losing leads."
              index={0}
            />
            <StepCard
              number="02"
              title="We Build Your System"
              subtitle="7-10 days to launch"
              description="Fill out a simple form with your business info. We handle the rest — website, booking, automation, the whole thing. You don't touch a line of code."
              index={1}
            />
            <StepCard
              number="03"
              title="You Start Getting Calls"
              subtitle="Go live and grow"
              description="We walk you through everything, flip the switch, and you're live. Leads come in. Bookings fill up. Reviews stack. You focus on the work."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Why Xhine Systems */}
      <section className="py-20 lg:py-28 border-t border-xs-border">
        <div className="container-main">
          <AnimateIn>
            <div className="mb-12 text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
                Why Us
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl lg:text-4xl">
                Why Contractors Choose Xhine Systems
              </h2>
            </div>
          </AnimateIn>

          <div className="mx-auto max-w-4xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Simple to Use",
                desc: "You don't need to be tech savvy. We build it, manage it, and explain it in plain English.",
              },
              {
                title: "Actually Affordable",
                desc: "Starts at $197/mo. Less than one job for most trades. No setup fees, no surprises.",
              },
              {
                title: "No Contracts",
                desc: "Month to month. Cancel anytime with 30 days notice. We keep you because we deliver.",
              },
              {
                title: "No Fluff",
                desc: "No vanity metrics, no buzzwords. We track what matters: calls, bookings, and revenue.",
              },
              {
                title: "Real Results",
                desc: "Websites that generate leads, not just look pretty. Automation that actually runs.",
              },
              {
                title: "Built for Trades",
                desc: "We only work with contractors and service businesses. We know your world.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.05}>
                <div className="rounded-lg border border-xs-border bg-xs-card/50 p-6 h-full">
                  <h3 className="font-heading text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-xs-gray leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 border-t border-xs-border">
        <div className="container-main">
          <AnimateIn>
            <div className="mb-10 text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
                FAQ
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">
                Questions We Get All the Time
              </h2>
            </div>
          </AnimateIn>

          <div className="mx-auto max-w-2xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
