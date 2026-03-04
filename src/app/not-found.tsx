import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-dark flex min-h-[80vh] items-center justify-center">
      <div className="container-main text-center">
        <div className="font-heading text-7xl font-extrabold uppercase tracking-wider text-xs-green/20 sm:text-9xl">
          404
        </div>
        <h1 className="mt-4 font-heading text-2xl font-bold uppercase tracking-wide sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mt-2 text-sm text-xs-gray">
          This page doesn&apos;t exist. Let&apos;s get you back.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded bg-xs-green px-6 py-2.5 text-sm font-bold text-xs-navy uppercase tracking-wider transition-colors hover:bg-xs-green-hover"
          >
            Go Home →
          </Link>
          <Link
            href="/contact"
            className="rounded border border-xs-border px-6 py-2.5 text-sm font-semibold text-xs-white transition-colors hover:bg-xs-navy-light"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
