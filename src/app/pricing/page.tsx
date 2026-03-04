import type { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Two simple plans for trades and contractors. Growth Plan at $197/mo and Domination Plan at $297/mo. No setup fees. No long-term contracts.",
  openGraph: {
    title: "Pricing | Xhine Systems",
    description:
      "Two simple plans for trades and contractors. Growth Plan at $197/mo and Domination Plan at $297/mo. No setup fees. No long-term contracts.",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
