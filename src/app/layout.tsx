import type { Metadata } from "next";
import { Lora, Playfair_Display } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
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
        className={`${lora.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
