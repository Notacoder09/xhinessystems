import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xhinessystems.com"),
  title: {
    default:
      "Xhine Systems — Websites, Automation & Google Visibility for Contractors",
    template: "%s | Xhine Systems",
  },
  description:
    "We build websites, booking systems, and lead follow-up automation for trades and contractors. Get found on Google. Get more calls. Starting at $197/mo.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xhinessystems.com",
    siteName: "Xhine Systems",
    title:
      "Xhine Systems — Websites, Automation & Google Visibility for Contractors",
    description:
      "We build websites, booking systems, and lead follow-up automation for trades and contractors. Get found on Google. Get more calls. Starting at $197/mo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xhine Systems",
    description:
      "Websites, automation & Google visibility for trades and contractors.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body className="bg-xs-black text-xs-white font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
