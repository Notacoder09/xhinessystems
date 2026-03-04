"use client";

import HeroSection from "@/components/HeroSection";
import StatBar from "@/components/StatBar";
import AnimateIn from "@/components/AnimateIn";
import FeatureSection from "@/components/FeatureSection";
import TradesGrid from "@/components/TradesGrid";
import StepCard from "@/components/StepCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import IMessageMockup from "@/components/IMessageMockup";

const faqs = [
  {
    question: "When will I see results?",
    answer:
      "Your website and booking system go live in 7-10 days. Most clients see new leads within the first 30 days. Google rankings build over 2-4 weeks. We're not going to promise you'll be rich by Tuesday, but you will see movement fast.",
  },
  {
    question: "Why is your pricing so low?",
    answer:
      "Because we built this to be accessible for one-truck operations and small crews — not just companies with big marketing budgets. Our systems are efficient. We keep overhead low. And $197/mo pays for itself the moment you land even one extra job.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "Give us 30 days notice and you're free. No cancellation fees, no guilt trips. We keep clients by getting results, not by locking them in.",
  },
  {
    question: "Do I need to be tech savvy to use this?",
    answer:
      "Nope. We build everything, set everything up, and manage everything. You fill out a short form with your business info, we handle the rest. If you can text and check email, you can use this.",
  },
  {
    question: "Will my website actually show up on Google?",
    answer:
      "Yes. Every site we build is optimized for search from day one. If you're on our Domination Plan, we also optimize your Google Business Profile and build local SEO foundations to get you ranking in the map pack.",
  },
  {
    question: "Why not just keep relying on word of mouth?",
    answer:
      "Word of mouth is great — when it works. But it's unpredictable. You can't control when referrals come in, and you're invisible to the 97% of people who search online before hiring a contractor. This system gives you a consistent pipeline on top of your referrals.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — dark */}
      <HeroSection />

      {/* STATS BAR */}
      <StatBar />

      {/* PROBLEM — light */}
      <section className="section-light py-16 lg:py-24">
        <div className="container-main">
          <AnimateIn>
            <div className="mx-auto max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
                The Problem
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold uppercase leading-snug tracking-wide text-xs-text-dark sm:text-3xl lg:text-4xl">
                You&apos;re Great at Your Trade. But Nobody Can Find You Online.
              </h2>
              <div className="mt-6 space-y-4 text-xs-text-muted leading-relaxed">
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

      {/* FEATURES — alternating dark/light per feature */}
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
        theme="dark"
        deviceType="laptop"
        screenTitle="Your Contractor Website"
        screenLines={["Book Now button", "5-star reviews", "Service area map", "Click-to-call"]}
        screenAccent="Book an Appointment"
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
        theme="light"
        screenTitle="Booking Calendar"
        screenLines={["Pick a date & time", "Enter your info", "Confirm instantly", "SMS reminder sent"]}
        screenAccent="Appointment Confirmed ✓"
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
        theme="dark"
        customVisual={<IMessageMockup />}
      />

      <FeatureSection
        label="Review Automation"
        headline="5-Star Reviews Without the Awkward Ask"
        body="After every job, your customer gets a text with a direct link to leave you a Google review. No awkward conversations. No forgetting. Just a steady stream of reviews building your reputation."
        bullets={[
          "Automatic post-job review requests via SMS",
          "Direct link to your Google review page",
          "More reviews = higher Google rankings",
          "Builds trust before they even call you",
        ]}
        imageSide="left"
        theme="light"
        screenTitle="Google Review Request"
        screenLines={[
          "Thanks for choosing Smith Plumbing!",
          "Mind leaving us a quick review?",
          "⭐⭐⭐⭐⭐",
          "Tap here to leave a review →",
        ]}
        screenAccent="Review Posted ⭐"
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
        theme="dark"
        screenTitle="Missed Call → Auto Text"
        screenLines={[
          "📞 Missed call from (555) 987-6543",
          "→ Auto-text sent!",
          '"Hey! Sorry we missed your call."',
          '"How can we help? Reply here."',
        ]}
        screenAccent="Lead Captured ✓"
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
        theme="light"
        deviceType="laptop"
        screenTitle="Google Maps — Local Results"
        screenLines={["#1 Smith's Plumbing ⭐4.9", "#2 Johnson HVAC ⭐4.7", "#3 Metro Electric ⭐4.5"]}
        screenAccent="You're #1 on the Map"
      />

      {/* TRADES — dark */}
      <TradesGrid />

      {/* HOW IT WORKS — light */}
      <section id="how-it-works" className="section-light py-16 lg:py-24">
        <div className="container-main">
          <AnimateIn>
            <div className="mb-12 text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
                How It Works
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold uppercase tracking-wide text-xs-text-dark sm:text-3xl lg:text-4xl">
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
              description="Fill out a simple form with your business info. We handle everything — website, booking, automation, the whole thing. You don't touch a line of code."
              index={1}
            />
            <StepCard
              number="03"
              title="You Start Getting Calls"
              subtitle="Go live and grow"
              description="We flip the switch. Leads come in. Bookings fill up. Reviews stack. You focus on the work."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* WHY XHINE — dark */}
      <section className="section-dark py-16 lg:py-24">
        <div className="container-main">
          <AnimateIn>
            <div className="mb-12 text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
                Why Us
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold uppercase tracking-wide sm:text-3xl lg:text-4xl">
                Why we&apos;re different...
                <br />
                <span className="text-xs-gray-light font-medium normal-case tracking-normal text-lg sm:text-xl">
                  (besides actually delivering results)
                </span>
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
                title: "Affordable",
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
                <div className="rounded-lg border border-xs-border bg-xs-navy-light p-6 h-full">
                  <h3 className="font-heading text-base font-bold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-xs-gray-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — light */}
      <section className="section-light py-16 lg:py-24">
        <div className="container-main">
          <AnimateIn>
            <div className="mb-10 text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
                FAQ
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold uppercase tracking-wide text-xs-text-dark sm:text-3xl">
                Questions We Get All the Time
              </h2>
            </div>
          </AnimateIn>

          <div className="mx-auto max-w-2xl">
            <FAQAccordion items={faqs} theme="light" />
          </div>
    </div>
      </section>

      {/* FINAL CTA — dark with eagle watermark */}
      <CTASection />
    </>
  );
}
