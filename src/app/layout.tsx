import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon Pokedex",
  description: "포켓몬 도감",
  icons: {
    icon: "/logo.png",
  },
};

export default function HtmlLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
