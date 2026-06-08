"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useCart } from "@/components/providers/cart-provider";
import { siteConfig } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount, isHydrated } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const cartLabel = isHydrated && itemCount > 0 ? `Giỏ hàng (${itemCount})` : "Giỏ hàng";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,10,10,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <div className="flex items-center gap-4">
          <button type="button" aria-label="Open menu" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden" onClick={() => setMenuOpen((current) => !current)}>
            <span className="text-lg">☰</span>
          </button>
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f3e7cf]">{siteConfig.name}</Link>
          <p className="hidden text-sm text-white/45 xl:block">Fine jewelry • Bridal • Bespoke gifting</p>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.navigation.map((item) => {
            const active = pathname === item.href;
            return <Link key={item.href} href={item.href} className={`text-sm transition ${active ? "text-[#f3e7cf]" : "text-white/72 hover:text-[#f3e7cf]"}`}>{item.label}</Link>;
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/cart" className="inline-flex min-w-[132px] justify-center rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-[#d4b277] hover:text-[#f3e7cf]">{cartLabel}</Link>
          <Link href="/account" className="hidden min-w-[108px] justify-center rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-[#d4b277] hover:text-[#f3e7cf] sm:inline-flex">Tài khoản</Link>
          <Link href="/shop" className="hidden min-w-[108px] justify-center rounded-full bg-[#d4b277] px-4 py-2 text-sm font-medium text-black transition hover:bg-[#e5c68e] sm:inline-flex">Mua ngay</Link>
        </div>
      </div>
      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#0b0b0b] px-6 py-5 md:hidden">
          <nav className="grid gap-3">
            {siteConfig.navigation.map((item) => {
              const active = pathname === item.href;
              return <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={`rounded-full border px-4 py-3 text-sm transition ${active ? "border-[#d4b277] text-[#f3e7cf]" : "border-white/10 text-white/72"}`}>{item.label}</Link>;
            })}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link href="/account" onClick={() => setMenuOpen(false)} className="rounded-full border border-white/10 px-4 py-3 text-center text-sm text-white/80">Tài khoản</Link>
              <Link href="/shop" onClick={() => setMenuOpen(false)} className="rounded-full bg-[#d4b277] px-4 py-3 text-center text-sm font-medium text-black">Mua ngay</Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}