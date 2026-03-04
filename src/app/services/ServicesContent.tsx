"use client";

import AnimateIn from "@/components/AnimateIn";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";

export default function ServicesContent() {
  return (
    <>
      {/* Header — dark */}
      <section className="section-dark pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container-main text-center">
          <AnimateIn>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
              Services
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight tracking-wide sm:text-4xl lg:text-5xl">
              Everything You Need to
              <br />
              <span className="text-xs-green">Get Found and Get Booked</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-xs-gray-light leading-relaxed">
              Each service solves a specific problem. Together, they form a
              system that runs in the background while you&apos;re on the job.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Alternating feature sections */}
      <FeatureSection
        label="01 — Custom Website"
        headline="A Website That Works as Hard as You Do"
        body="We design and build a fast, clean website specifically for your trade. Not a template. Not a drag-and-drop builder. A real site built to turn visitors into customers. Your phone number is front and center, booking is one tap away, and it loads fast on any device."
        bullets={[
          "Custom design tailored to your trade",
          "Mobile-first — built for how people actually browse",
          "Built-in booking so customers can schedule instantly",
          "Ongoing maintenance and hosting included",
          "SSL secured and optimized for Google",
        ]}
        imageSide="right"
        theme="light"
        deviceType="laptop"
        screenTitle="Your Custom Website"
        screenLines={["Hero with phone number", "Service list", "Review section", "Booking widget"]}
        screenAccent="Request a Quote →"
      />

      <FeatureSection
        label="02 — Booking & Reminders"
        headline="Bookings Come In While You Sleep"
        body="No more phone tag. No more 'I'll call them back later' and then forgetting. Customers book online 24/7, get automatic confirmation, and get reminder texts so they actually show up."
        bullets={[
          "24/7 online booking widget on your site",
          "Syncs with your existing calendar",
          "Automated SMS and email reminders",
          "Cuts no-shows significantly",
          "Customers book in under 60 seconds",
        ]}
        imageSide="left"
        theme="dark"
        screenTitle="Booking Calendar"
        screenLines={["Select a date", "Choose a time slot", "Enter your info", "Confirm booking"]}
        screenAccent="Appointment Booked ✓"
      />

      <FeatureSection
        label="03 — Lead Follow-Up"
        headline="Every Lead Gets a Reply in Minutes. Not Days."
        body="Speed wins. When a lead comes in, our system fires off a text and an email within minutes — automatically. Then it keeps following up until they book or tell us to stop."
        bullets={[
          "Instant lead response — SMS + email",
          "Multi-step nurture sequences",
          "Personalized messages, not robotic templates",
          "Smart timing between follow-ups",
          "Lead notifications straight to your phone",
        ]}
        imageSide="right"
        theme="light"
        screenTitle="Auto Follow-Up SMS"
        screenLines={[
          "Hey! Thanks for reaching out.",
          "Still need that repair done?",
          "We have an opening Thursday AM",
          "Reply YES to confirm →",
        ]}
        screenAccent="Lead Engaged ✓"
      />

      <FeatureSection
        label="04 — Google Review Automation"
        headline="More 5-Star Reviews on Autopilot"
        body="After every job, your customer gets a text with a direct link to leave a Google review. No awkward asking. Just a steady stream of 5-star reviews that boost your Google ranking."
        bullets={[
          "Automated post-job review requests via SMS",
          "Direct link — one tap to leave a review",
          "More reviews = higher rankings = more leads",
          "Review monitoring so you can respond fast",
          "Builds social proof that closes deals",
        ]}
        imageSide="left"
        theme="dark"
        screenTitle="Review Request Sent"
        screenLines={[
          "Thanks for choosing us!",
          "Mind leaving a quick review?",
          "⭐⭐⭐⭐⭐",
          "Tap to review on Google →",
        ]}
        screenAccent="New 5-Star Review ⭐"
      />

      <FeatureSection
        label="05 — Missed Call Text Back"
        headline="Miss a Call? We've Got You Covered."
        body="You're under a sink. You're on a ladder. You can't answer. Our system detects the missed call and instantly texts the caller back. That lead doesn't go to your competitor."
        bullets={[
          "Fires automatically when you miss a call",
          "Customizable message for your business",
          "Captures the lead before they move on",
          "Works 24/7 even when you're off the clock",
        ]}
        imageSide="right"
        theme="light"
        screenTitle="Missed Call → Auto Text"
        screenLines={[
          "📞 Missed call detected",
          "Auto-text sending...",
          '"Sorry we missed you!"',
          '"How can we help? Reply here."',
        ]}
        screenAccent="Lead Saved ✓"
      />

      <FeatureSection
        label="06 — Google Business Profile"
        headline="Get on the Map. Literally."
        body="When someone searches 'plumber near me,' Google shows a map with three businesses. We make sure you're one of them. Complete optimization of your Google Business Profile."
        bullets={[
          "Complete profile optimization",
          "Category and keyword strategy",
          "Regular Google Posts to stay active",
          "Photo and media management",
          "Ongoing monitoring and updates",
        ]}
        imageSide="left"
        theme="dark"
        deviceType="laptop"
        screenTitle="Google Maps Listing"
        screenLines={["Your Business — ⭐4.9 (127)", "Open · Serves your area", "Call · Directions · Website"]}
        screenAccent="Showing in Top 3 ✓"
      />

      <CTASection
        headline="Ready to Build Your System?"
        body="Book a free call. We'll look at what you have, what you're missing, and map out a plan to get your phone ringing."
      />
    </>
  );
}
