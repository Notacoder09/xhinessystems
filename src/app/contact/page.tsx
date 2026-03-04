import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Xhine Systems. Fill out our form and we'll reach out within 24 hours to talk about your business.",
  openGraph: {
    title: "Contact | Xhine Systems",
    description:
      "Get in touch with Xhine Systems. Fill out our form and we'll reach out within 24 hours.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
