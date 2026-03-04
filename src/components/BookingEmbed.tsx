"use client";

export default function BookingEmbed() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

  if (!bookingUrl) {
    return (
      <div className="rounded-lg border border-brand-border bg-brand-surface/30 p-12 text-center">
        <p className="text-sm text-brand-muted">
          Booking calendar is being set up. Please check back soon or{" "}
          <a href="/contact" className="text-brand-accent hover:underline">
            contact us directly
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-brand-border bg-brand-surface/20">
      <iframe
        src={bookingUrl}
        title="Book a Discovery Call with Xhine Systems"
        className="h-[700px] w-full border-0"
        loading="lazy"
        allow="payment"
      />
    </div>
  );
}
