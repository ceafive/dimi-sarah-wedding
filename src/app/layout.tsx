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
    { path: "./fonts/CoFoRaffine-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/CoFoRaffine-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
});

// Gabriola — used as the site's sans-serif face (addresses, labels, captions).
const gabriola = localFont({
  src: "./fonts/Gabriola.ttf",
  variable: "--font-serif",
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

        {children}
      </body>
    </html>
  );
}
