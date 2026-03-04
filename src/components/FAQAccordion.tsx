"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function FAQItemComponent({
  item,
  index,
  isOpen,
  toggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <AnimateIn delay={index * 0.08}>
      <div className="border-b border-brand-border">
        <button
          onClick={toggle}
          className="flex w-full items-center justify-between py-5 text-left"
          aria-expanded={isOpen}
        >
          <span className="font-heading text-sm font-medium text-brand-white pr-4">
            {item.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-border"
          >
            <svg
              className="h-3 w-3 text-brand-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-sm text-brand-muted leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimateIn>
  );
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y-0">
      {items.map((item, index) => (
        <FAQItemComponent
          key={index}
          item={item}
          index={index}
          isOpen={openIndex === index}
          toggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
