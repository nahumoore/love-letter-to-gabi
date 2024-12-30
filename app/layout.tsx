import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title: "A Love Letter to Gabi 💌",
  description: "Desde lo mas profundo de mi corazon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.className} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
