import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FloralFrame from "@/components/FloralFrame";

// CoFo Raffine — high-contrast Didone serif. Used for the masthead, section
// titles and body copy, giving the whole page the editorial invitation feel.
const raffine = localFont({
  src: [
    { path: "./fonts/CoFoRaffine-Thin.otf", weight: "200", style: "normal" },
    { path: "./fonts/CoFoRaffine-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/CoFoRaffine-Regular.otf", weight: "400", style: "normal" },
    // { path: "./fonts/CoFoRaffine-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/CoFoRaffine-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-serif",
  display: "swap",
  adjustFontFallback: false,
});

// Gabriola — calligraphic script for the eyebrow flourishes and accents.
const gabriola = localFont({
  src: "./fonts/Gabriola.ttf",
  variable: "--font-script",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Sarah & Dimitris | Our Wedding",
  description:
    "Sarah & Dimitris are getting married — Saturday 21 August 2027 at Galazia Akti, Schinias Beach, Greece. Bookmark the date.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raffine.variable} ${gabriola.variable}`}>
      <body className="antialiased">
        <FloralFrame />

        {/* Top floral border — caps the head of the page (flowers hang down) */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative z-0 h-20 w-full -scale-y-100 mix-blend-multiply bg-[url('/floral-band.png')] bg-repeat-x [background-size:auto_100%] md:h-28"
        />

        {children}

        {/* Bottom floral border — closes the foot of the page (flowers point up) */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative z-0 h-20 w-full mix-blend-multiply bg-[url('/floral-band.png')] bg-repeat-x [background-size:auto_100%] md:h-28"
        />
      </body>
    </html>
  );
}
