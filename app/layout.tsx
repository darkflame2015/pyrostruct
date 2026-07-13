import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sagnik Datta | Premium Web Developer & SaaS Architect",
    template: "%s | Sagnik Datta",
  },
  description:
    "Professional web developer and SaaS architect. Sagnik Datta crafts premium digital experiences, custom websites, and robust SaaS applications with elite UI/UX design.",
  keywords: [
    "Sagnik Datta",
    "web developer",
    "SaaS development",
    "premium websites",
    "UI/UX design",
    "PyroStruct",
    "freelance developer",
    "Next.js developer"
  ],
  openGraph: {
    title: "Sagnik Datta | Premium Web Developer",
    description:
      "Professional web developer and SaaS architect. Sagnik Datta crafts premium digital experiences, custom websites, and robust SaaS applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Navbar />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
