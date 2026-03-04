"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({
  items,
  theme = "light",
}: {
  items: FAQItem[];
  theme?: "dark" | "light";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isDark = theme === "dark";

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <AnimateIn key={i} delay={i * 0.04}>
            <div
              className={`border-b ${
                isDark ? "border-xs-border" : "border-xs-border-light"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span
                  className={`pr-4 text-sm font-semibold ${
                    isDark ? "text-xs-white" : "text-xs-text-dark"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`shrink-0 text-sm transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  } ${isDark ? "text-xs-gray" : "text-xs-text-muted"}`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-xs-gray" : "text-xs-text-muted"
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </AnimateIn>
        );
      })}
    </div>
  );
}
