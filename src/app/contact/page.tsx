import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with XhinesSystems. Fill out our form and we'll reach out within 24 hours to talk about your business.",
  openGraph: {
    title: "Contact | XhinesSystems",
    description:
      "Get in touch with XhinesSystems. Fill out our form and we'll reach out within 24 hours.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
