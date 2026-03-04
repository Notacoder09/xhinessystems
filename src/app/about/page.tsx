import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Xhine Systems was founded in Atlanta, GA to give trades and contractors the same online leverage big companies have. Learn our story.",
  openGraph: {
    title: "About | Xhine Systems",
    description:
      "Xhine Systems was founded in Atlanta, GA to give trades and contractors the same online leverage big companies have. Learn our story.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
