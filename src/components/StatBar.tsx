"use client";

import AnimateIn from "./AnimateIn";

const stats = [
  { value: "100%", label: "Done-For-You" },
  { value: "24/7", label: "Automated Booking" },
  { value: "30-Day", label: "Results Timeline" },
  { value: "$197", label: "Starting Price" },
];

export default function StatBar() {
  return (
    <section className="border-y border-xs-border bg-xs-dark">
      <div className="container-main py-8 lg:py-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 0.05}>
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-xs-green sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-xs-gray">{s.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
