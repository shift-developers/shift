import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHiFT – A Modern Approach to Mental Health",
  description:
    "SHiFT is reimagining mental health through engaging content, expert voices, and an inclusive movement. Explore real healing with relatable therapy, trusted resources, and daily support in your journey to better mental well-being.",
  metadataBase: new URL("https://shiftmastersessions.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shiftmastersessions.com",
    siteName: "SHiFT",
    title: "SHiFT – A Modern Approach to Mental Health",
    description:
      "SHiFT is reimagining mental health through engaging content, expert voices, and an inclusive movement.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SHiFT – Mental Health Reinvented",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shiftapp",
    creator: "@shiftapp",
  },
  keywords: [
    "mental health",
    "therapy",
    "healing",
    "support",
    "wellness",
    "mindfulness",
    "self-care",
    "SHiFT app",
    "emotional health",
    "online therapy",
  ],
  other: {
    "theme-color": "#002766",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </body>
    </html>
  );
}
