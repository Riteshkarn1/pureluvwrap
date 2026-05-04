import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

/* ─── Google Fonts ─────────────────────────────────── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

/* ─── SEO Metadata ─────────────────────────────────── */
export const metadata: Metadata = {
  title: "PureLuvWrap — Handcrafted Bouquets in Jalandhar, Punjab",
  description:
    "Premium handcrafted bouquets for every occasion. Same-day delivery across Jalandhar & Punjab. Order via WhatsApp. Anniversaries, birthdays, weddings & more.",
  keywords: [
    "bouquet Jalandhar",
    "flower delivery Punjab",
    "handcrafted bouquets",
    "wedding flowers Jalandhar",
    "birthday bouquet delivery",
    "anniversary flowers",
    "PureLuvWrap",
  ],
  openGraph: {
    title: "PureLuvWrap — Handcrafted Bouquets in Jalandhar",
    description:
      "Every petal, wrapped in love. Premium bouquets for every occasion, delivered across Jalandhar & Punjab.",
    siteName: "PureLuvWrap",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PureLuvWrap — Handcrafted Bouquets",
    description: "Every petal, wrapped in love.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#C9727A",
  width: "device-width",
  initialScale: 1,
};

/* ─── Root Layout ──────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-dm antialiased">{children}</body>
    </html>
  );
}
