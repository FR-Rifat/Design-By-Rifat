import type { Metadata } from "next";
import { Outfit, Pacifico, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
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
      className={`${outfit.variable} ${body.variable} ${accent.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#0A0A0A] text-white antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}