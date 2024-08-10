import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PrelineScript from "./components/PrelineScripts";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Res Easy Services",
  description: "A reservation system for restaurants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    
  );
  <PrelineScript />
}
