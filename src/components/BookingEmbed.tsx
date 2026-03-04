"use client";

export default function BookingEmbed() {
  const url = process.env.NEXT_PUBLIC_BOOKING_URL;

  if (!url) {
    return (
      <div className="rounded-lg border border-xs-border-light bg-white p-12 text-center">
        <p className="text-sm text-xs-text-muted">
          Booking calendar is being set up. Check back soon or{" "}
          <a href="/contact" className="text-xs-green underline">
            contact us directly
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-xs-border-light bg-white">
      <iframe
        src={url}
        title="Book a Call with XhinesSystems"
        className="h-[700px] w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
