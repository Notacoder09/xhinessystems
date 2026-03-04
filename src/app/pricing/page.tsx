import type { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Two simple plans for contractors. Growth Plan at $197/mo, Domination Plan at $297/mo. No setup fees. No contracts. Cancel anytime.",
  openGraph: {
    title: "Pricing | XhinesSystems",
    description:
      "Two simple plans for contractors. Growth Plan at $197/mo, Domination Plan at $297/mo. No setup fees. No contracts. Cancel anytime.",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
