import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCta } from "@/components/MobileCta";

export const metadata: Metadata = {
  title: {
    default: "Roof Claim Help Oklahoma | Storm Damage Roof Guidance",
    template: "%s | Roof Claim Help Oklahoma",
  },
  description:
    "Oklahoma roof inspection guidance for hail damage, wind damage, roof leaks, and insurance roof claim help.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
