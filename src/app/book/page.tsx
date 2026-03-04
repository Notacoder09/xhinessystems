import type { Metadata } from "next";
import BookContent from "./BookContent";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a free 20-minute discovery call with Xhine Systems. We'll audit your online presence and map out a plan to get your phone ringing.",
  openGraph: {
    title: "Book a Call | Xhine Systems",
    description:
      "Book a free 20-minute discovery call with Xhine Systems. We'll audit your online presence and map out a plan.",
  },
};

export default function BookPage() {
  return <BookContent />;
}
