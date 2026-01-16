import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vidyabhyasam | Nurturing Minds, Cultivating Values",
  description: "Vidyabhyasam is a thoughtful initiative dedicated to fostering holistic education and timeless values for meaningful living.",
  keywords: ["education", "values", "holistic learning", "character development", "Vidyabhyasam"],
  openGraph: {
    title: "Vidyabhyasam | Nurturing Minds, Cultivating Values",
    description: "A journey of knowledge, character, and purpose.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorant.variable} ${ebGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
