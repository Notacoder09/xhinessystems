import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites, booking automation, lead follow-up, review systems, Google visibility, and missed call text back — built for trades and contractors.",
  openGraph: {
    title: "Services | XhinesSystems",
    description:
      "Custom websites, booking automation, lead follow-up, review systems, Google visibility, and missed call text back — built for trades and contractors.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
