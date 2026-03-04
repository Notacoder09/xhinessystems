"use client";

import AnimateIn from "@/components/AnimateIn";
import SectionLabel from "@/components/SectionLabel";
import CTAButton from "@/components/CTAButton";

const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Custom Website Design & Development",
    description:
      "We design and build a fast, mobile-first website that's engineered to convert visitors into booked jobs. No templates, no page builders — just clean, custom code built specifically for your trade. Your site loads fast, looks sharp on every device, and gives potential customers exactly what they need: proof you're legit, and a way to book you right now.",
    outcome:
      "A professional website that positions you as the go-to contractor in your area and turns visitors into paying customers.",
    features: [
      "Custom design tailored to your trade",
      "Mobile-first, lightning fast",
      "Built-in booking integration",
      "Ongoing maintenance included",
      "SSL secured & optimized for Google",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Google Business Profile Optimization",
    description:
      "When someone searches 'plumber near me' or 'HVAC repair [your city],' Google shows a map with three businesses. We make sure you're one of them. We fully optimize your Google Business Profile — categories, descriptions, photos, posts, Q&A — and keep it actively managed so you maintain and improve your position.",
    outcome:
      "Consistent visibility in Google's local map pack, where 46% of all searches have local intent.",
    features: [
      "Complete profile optimization",
      "Category & keyword strategy",
      "Regular Google Posts",
      "Photo & media management",
      "Ongoing monitoring & updates",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Booking & Appointment Automation",
    description:
      "Your customers want to book at 10pm on a Tuesday. Without an online booking system, that lead goes to whoever has one. We integrate a 24/7 booking system directly into your website and Google profile, backed by automated appointment reminders via SMS and email that slash no-shows.",
    outcome:
      "A full calendar with fewer no-shows — bookings come in around the clock without you lifting a finger.",
    features: [
      "24/7 online booking widget",
      "Syncs with your calendar",
      "Automated SMS reminders",
      "Automated email confirmations",
      "No-show reduction system",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Lead Follow-Up Sequences (SMS + Email)",
    description:
      "Speed to lead wins. When someone fills out your contact form or requests a quote, our system fires off a personalized SMS and email sequence within minutes — not hours, not days. The automated nurture sequence keeps the conversation going until they book, so you never lose a lead to slow follow-up.",
    outcome:
      "Every lead gets a response in under 5 minutes and is nurtured automatically until they convert or opt out.",
    features: [
      "Instant lead response (SMS + email)",
      "Multi-step nurture sequences",
      "Personalized messaging",
      "Smart timing & follow-up intervals",
      "Lead tracking & notifications",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Google Review Automation",
    description:
      "Reviews are the new word of mouth — and the #1 factor in local search rankings. After every completed job, our system automatically sends your customer a review request via SMS with a direct link to your Google profile. No awkward asking, no forgetting — it just happens.",
    outcome:
      "A growing stream of 5-star Google reviews that build trust, boost rankings, and close more business.",
    features: [
      "Automated post-job review requests",
      "Direct link to Google review page",
      "SMS + email delivery",
      "Review monitoring dashboard",
      "Response templates for engagement",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Local SEO Foundations",
    description:
      "SEO for local businesses isn't about gaming the algorithm — it's about building a consistent, trustworthy presence across the web. We handle citation building, directory submissions, on-page optimization, and keyword targeting so that Google sees you as the authority in your area for your trade.",
    outcome:
      "Long-term organic visibility that compounds month over month, reducing your dependence on paid ads.",
    features: [
      "Citation building (50+ directories)",
      "On-page SEO optimization",
      "Local keyword targeting",
      "NAP consistency audit",
      "Monthly ranking reports",
    ],
  },
];

export default function ServicesContent() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 grid-bg" />
        <div className="section-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>Services</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                The Full System.{" "}
                <span className="gradient-text">Every Service You Need.</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 text-brand-muted leading-relaxed text-lg">
                Each service solves a specific problem. Together, they form a
                complete local presence system that gets you found, gets you
                booked, and gets you paid.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20 md:pb-28">
        <div className="section-container">
          <div className="space-y-8">
            {services.map((service, index) => (
              <AnimateIn key={service.title} delay={index * 0.05}>
                <div className="group rounded-lg border border-brand-border bg-brand-surface/20 p-6 transition-all hover:border-brand-accent/15 hover:bg-brand-surface/40 md:p-8 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
                    <div>
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                          {service.icon}
                        </div>
                        <div>
                          <span className="font-mono text-xs text-brand-accent/60">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h2 className="font-heading text-xl font-semibold text-brand-white md:text-2xl">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-brand-muted leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-6 rounded-md border border-brand-accent/10 bg-brand-accent/5 p-4">
                        <div className="flex items-start gap-2">
                          <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
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
                          <p className="text-sm text-brand-accent font-medium">
                            {service.outcome}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border border-brand-border/50 bg-brand-black/30 p-5">
                      <h4 className="font-heading text-xs font-semibold text-brand-muted uppercase tracking-wider mb-4">
                        What&apos;s Included
                      </h4>
                      <ul className="space-y-2.5">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5"
                          >
                            <svg
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-accent"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm text-brand-muted-light">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-brand-border">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Ready to Build Your System?
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="mt-4 text-brand-muted leading-relaxed">
                Book a free discovery call. We&apos;ll walk through your
                current setup, identify the gaps, and show you exactly how
                we&apos;d build a system that fills your calendar.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="mt-8">
                <CTAButton href="/book" variant="primary" size="lg">
                  Book a Discovery Call
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
          </div>
        </div>
      </section>
    </>
  );
}
