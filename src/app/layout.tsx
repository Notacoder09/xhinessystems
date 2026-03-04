import type { Metadata } from "next";
import { Space_Grotesk, Outfit, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xhinessystems.com"),
  title: {
    default: "Xhine Systems — Local Presence Management for Trades & Contractors",
    template: "%s | Xhine Systems",
  },
  description:
    "Websites, booking automation, lead follow-up, and Google visibility for trades and contractors. Stop losing jobs to competitors who show up first.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xhinessystems.com",
    siteName: "Xhine Systems",
    title: "Xhine Systems — Local Presence Management for Trades & Contractors",
    description:
      "Websites, booking automation, lead follow-up, and Google visibility for trades and contractors. Stop losing jobs to competitors who show up first.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xhine Systems — Local Presence Management for Trades & Contractors",
    description:
      "Websites, booking automation, lead follow-up, and Google visibility for trades and contractors.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-brand-black text-brand-white font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
