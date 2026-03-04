import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "XhinesSystems was built in Atlanta, GA by a young entrepreneur who saw contractors losing jobs to competitors who just marketed better. Here's the story.",
  openGraph: {
    title: "About | XhinesSystems",
    description:
      "XhinesSystems was built in Atlanta, GA by a young entrepreneur who saw contractors losing jobs to competitors who just marketed better.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
