"use client";

import AnimateIn from "./AnimateIn";

const trades = [
  { name: "Plumbers", icon: "🔧" },
  { name: "HVAC", icon: "❄️" },
  { name: "Electricians", icon: "⚡" },
  { name: "Roofers", icon: "🏠" },
  { name: "Painters", icon: "🎨" },
  { name: "Landscapers", icon: "🌿" },
  { name: "Pressure Washers", icon: "💧" },
  { name: "Pest Control", icon: "🐜" },
  { name: "Movers", icon: "📦" },
  { name: "Auto Detailers", icon: "🚗" },
  { name: "Remodelers", icon: "🔨" },
  { name: "Flooring & Carpet", icon: "🏗️" },
];

export default function TradesGrid() {
  return (
    <section className="section-dark py-16 lg:py-24">
      <div className="container-main">
        <AnimateIn>
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
              Who We Serve
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold uppercase tracking-wide sm:text-3xl lg:text-4xl">
              Built for Trades. Nobody Else.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-xs-gray">
              We only work with local service businesses. No restaurants, no
              e-commerce, no SaaS startups. Just contractors.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {trades.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.03}>
              <div className="flex flex-col items-center gap-2 rounded-lg border border-xs-border bg-xs-navy-light p-5 text-center transition-colors hover:border-xs-green/25">
                <span className="text-2xl">{t.icon}</span>
                <span className="text-xs font-medium text-xs-gray-light">
                  {t.name}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
