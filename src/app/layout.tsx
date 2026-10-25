import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Noto_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["devanagari"],
  weight: "500",
  variable: "--font-noto",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ritu - Find the rhythm already within you",
    template: "%s - Ritu",
  },
  description:
    "Ritu helps you track your everyday experiences, reflect on them, and understand patterns across your mood, energy, body, and cycle.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} ${notoSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-cream font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-sage focus:px-4 focus:py-2 focus:text-inverse"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">
          <div className="relative mx-auto min-h-full max-w-[1512px]">{children}</div>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
