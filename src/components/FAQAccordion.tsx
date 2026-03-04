"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <AnimateIn key={i} delay={i * 0.04}>
            <div className="border-b border-xs-border">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="pr-4 text-sm font-medium text-xs-white">
                  {item.question}
                </span>
                <span
                  className={`shrink-0 text-xs text-xs-gray transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm text-xs-gray leading-relaxed">
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
