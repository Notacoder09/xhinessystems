import Link from "next/link";

const footerLinks = {
  pages: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/book", label: "Book a Call" },
  ],
  plans: [
    { href: "/pricing", label: "Growth Plan — $197/mo" },
    { href: "/pricing", label: "Domination Plan — $297/mo" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-black">
      <div className="section-container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-accent">
                <span className="font-heading text-sm font-bold text-brand-black">
                  X
                </span>
              </div>
              <span className="font-heading text-lg font-semibold tracking-tight">
                Xhine
                <span className="text-brand-muted font-normal ml-0.5">
                  Systems
                </span>
              </span>
            </Link>
            <p className="text-sm text-brand-muted leading-relaxed max-w-xs">
              Local presence management for trades and contractors. Websites,
              automation, and Google visibility — built as a system.
            </p>
            <p className="mt-4 text-xs text-brand-muted/70">
              Atlanta, GA
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-brand-white mb-4">
              Pages
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.pages.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted transition-colors hover:text-brand-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-brand-white mb-4">
              Plans
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.plans.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted transition-colors hover:text-brand-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="font-heading text-sm font-semibold text-brand-white mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-muted transition-colors hover:text-brand-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-brand-white mb-4">
              Ready to Get Started?
            </h4>
            <p className="text-sm text-brand-muted mb-4 leading-relaxed">
              Book a free discovery call and see how we can put your business on
              the map.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-md bg-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-black transition-all hover:bg-brand-accent-hover"
            >
              Book a Call
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-brand-border pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-brand-muted/70">
              &copy; {new Date().getFullYear()} Xhine Systems. All rights
              reserved.
            </p>
            <p className="text-xs text-brand-muted/50 max-w-lg leading-relaxed">
              By engaging with Xhine Systems, you may receive SMS and email
              communications. Reply STOP to opt out at any time. Standard
              message and data rates may apply.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
