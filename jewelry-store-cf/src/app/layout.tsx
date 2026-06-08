import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "@/components/providers/cart-provider";

export const metadata: Metadata = {
  title: "Maison Aurum",
  description:
    "Premium jewelry storefront prepared for Cloudflare Workers and rebuilt from the NextJS Material Kit visual direction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full bg-[#080808] font-sans text-white">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}