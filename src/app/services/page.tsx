import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites, Google optimization, booking automation, lead follow-up, review systems, and local SEO — built for trades and contractors.",
  openGraph: {
    title: "Services | Xhine Systems",
    description:
      "Custom websites, Google optimization, booking automation, lead follow-up, review systems, and local SEO — built for trades and contractors.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
