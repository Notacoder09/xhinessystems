"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-xs-navy/95 backdrop-blur-sm border-b border-xs-border shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-main flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-xs-green">
            <span className="font-heading text-sm font-extrabold text-xs-navy">
              X
            </span>
          </div>
          <span className="font-heading text-base font-bold uppercase tracking-wider sm:text-lg">
            Xhine Systems
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                pathname === l.href
                  ? "text-xs-white font-medium"
                  : "text-xs-gray hover:text-xs-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/book"
          className="hidden rounded bg-xs-green px-5 py-2 text-sm font-bold text-xs-navy uppercase tracking-wider transition-colors hover:bg-xs-green-hover lg:inline-flex"
        >
          Book a Call
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded border border-xs-border lg:hidden"
          aria-label="Menu"
        >
          <span
            className={`block h-px w-4 bg-xs-white transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-4 bg-xs-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-4 bg-xs-white transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-xs-border bg-xs-navy/98 lg:hidden">
          <div className="container-main flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded px-3 py-2.5 text-sm ${
                  pathname === l.href
                    ? "bg-xs-green/10 text-xs-green font-medium"
                    : "text-xs-gray hover:text-xs-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded bg-xs-green px-4 py-2.5 text-center text-sm font-bold text-xs-navy uppercase tracking-wider"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
