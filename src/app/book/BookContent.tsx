"use client";

import AnimateIn from "@/components/AnimateIn";
import BookingEmbed from "@/components/BookingEmbed";

export default function BookContent() {
  return (
    <>
      {/* Header — dark */}
      <section className="section-dark pt-28 pb-10 sm:pt-36 sm:pb-14">
        <div className="container-main text-center">
          <AnimateIn>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
              Book a Call
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight tracking-wide sm:text-4xl lg:text-5xl">
              Pick a Time.{" "}
              <span className="text-xs-green">Let&apos;s Talk.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-xs-gray-light leading-relaxed">
              20 minutes. We&apos;ll look at your current online presence, tell
              you where you&apos;re losing leads, and map out a plan. Free. No
              pressure. (It&apos;s technically a sales call, we just didn&apos;t
              want to scare you.)
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Calendar — light */}
      <section className="section-light py-12 lg:py-16">
        <div className="container-main">
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <BookingEmbed />
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
