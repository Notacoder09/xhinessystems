"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const GREEN_FILTER =
  "brightness(0) saturate(100%) invert(74%) sepia(69%) saturate(500%) hue-rotate(93deg) brightness(103%) contrast(101%)";

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="border-t border-xs-border bg-xs-navy">
      <div className="container-main py-14 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              {!logoError && (
                <Image
                  src="/logo.png"
                  alt="XhinesSystems Logo"
                  width={64}
                  height={32}
                  className="h-8 w-auto"
                  style={{ filter: GREEN_FILTER }}
                  onError={() => setLogoError(true)}
                />
              )}
              <span className="font-heading text-base font-bold uppercase tracking-wider">
                XhinesSystems
              </span>
            </Link>
            <p className="mt-3 text-sm text-xs-gray leading-relaxed">
              We provide the structure, systems, and strategy. You bring the
              commitment. Based in Atlanta, GA.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold text-xs-white mb-3">Pages</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/pricing", label: "Pricing" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/book", label: "Book a Call" },
              ].map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-xs-gray transition-colors hover:text-xs-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans + Legal */}
          <div>
            <h4 className="text-sm font-semibold text-xs-white mb-3">Plans</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-xs-gray transition-colors hover:text-xs-white"
                >
                  Growth Plan — $197/mo
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-xs-gray transition-colors hover:text-xs-white"
                >
                  Domination Plan — $297/mo
                </Link>
              </li>
            </ul>

            <h4 className="mt-6 text-sm font-semibold text-xs-white mb-3">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-xs-gray transition-colors hover:text-xs-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-xs-gray transition-colors hover:text-xs-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold text-xs-white mb-3">
              Ready to Get Found?
            </h4>
            <p className="text-sm text-xs-gray leading-relaxed mb-4">
              Book a free call. We&apos;ll show you where you&apos;re losing
              leads and how to fix it.
            </p>
            <Link
              href="/book"
              className="inline-flex rounded bg-xs-green px-5 py-2 text-sm font-bold text-xs-navy uppercase tracking-wider transition-colors hover:bg-xs-green-hover"
            >
              Book a Call →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-xs-border pt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs text-xs-gray/60">
            © {new Date().getFullYear()} XhinesSystems. All rights reserved.
          </p>
          <p className="text-xs text-xs-gray/50 max-w-xl leading-relaxed">
            By texting or submitting a form, you agree to receive SMS and email
            from XhinesSystems. Reply STOP to opt out. Standard message and data
            rates may apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
