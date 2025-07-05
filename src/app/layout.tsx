import type { Metadata } from "next";
import "./globals.css";
import { CountryProvider } from "@/contexts/CountryContext";

export const metadata: Metadata = {
  title: "Sparkles by Junetrain - Rhinestone Templates & Transfers",
  description: "Design Bold. Shine Bright. High-quality rhinestone templates and transfers for fashion designers, apparel businesses, and DIY enthusiasts. Custom blinging solutions made in Canada.",
  keywords: "rhinestone templates, rhinestone transfers, custom blinging, cheer blings, sports blings, fashion design, apparel, DIY rhinestones, Canada",
  authors: [{ name: "Sparkles by Junetrain" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Sparkles by Junetrain - Rhinestone Templates & Transfers",
    description: "Design Bold. Shine Bright. High-quality rhinestone templates and transfers for fashion designers, apparel businesses, and DIY enthusiasts.",
    type: "website",
  },
  icons: {
    icon: "/Sparkles3.svg",
    shortcut: "/Sparkles3.svg",
    apple: "/Sparkles3.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-[#1A1A1A]">
        <CountryProvider>
          {children}
        </CountryProvider>
      </body>
    </html>
  );
}
