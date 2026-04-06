import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Zoogród — Sklep zoologiczny dla Twojego pupila",
  description:
    "Zoogród to nowoczesny sklep zoologiczny z karmą, akcesoriami i wszystkim, czego potrzebuje Twój pies lub kot. 1% zysku przekazujemy na pomoc zwierzętom.",
  keywords: [
    "sklep zoologiczny",
    "karma dla psa",
    "karma dla kota",
    "akcesoria dla zwierząt",
    "Zoogród",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
