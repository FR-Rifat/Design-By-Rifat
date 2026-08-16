import type { Metadata } from "next";
import { Outfit, Pacifico, DM_Sans, Geist } from "next/font/google";
import { Carter_One } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/SmoothScroll";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-carter",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
  display: "swap",
});

const accent = Pacifico({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FR Rifat | UI/UX Designer",
  description:
    "Portfolio of FR Rifat — UI/UX Designer crafting modern websites, dashboards, SaaS products, and digital experiences.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth",
        outfit.variable,
        body.variable,
        accent.variable,
        carterOne.variable,
        "font-sans",
        geist.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#0A0A0A] text-white antialiased selection:bg-white selection:text-black">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}