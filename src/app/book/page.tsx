import type { Metadata } from "next";
import BookContent from "./BookContent";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a free 20-minute discovery call with XhinesSystems. We'll audit your online presence and map out a plan to get your phone ringing.",
  openGraph: {
    title: "Book a Call | XhinesSystems",
    description:
      "Book a free 20-minute discovery call with XhinesSystems. We'll audit your online presence and map out a plan.",
  },
};

export default function BookPage() {
  return <BookContent />;
}
