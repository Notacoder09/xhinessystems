import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center">
      <div className="section-container text-center">
        <div className="mx-auto max-w-lg">
          <div className="font-mono text-7xl font-bold text-brand-accent/20 md:text-9xl">
            404
          </div>
          <h1 className="mt-4 font-heading text-2xl font-bold text-brand-white sm:text-3xl">
            Page Not Found
          </h1>
          <p className="mt-3 text-brand-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-black transition-all hover:bg-brand-accent-hover"
            >
              Go Home
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
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-surface px-6 py-3 text-sm font-medium text-brand-white transition-all hover:border-brand-muted/40"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
