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
      <div className="mx-auto flex w-full max-w-[120rem] items-center justify-between gap-5 px-6 py-4 lg:gap-8 lg:px-10 xl:gap-10">
        <div className="flex min-w-0 items-center gap-4 xl:gap-6">
          <button type="button" aria-label="Open menu" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden" onClick={() => setMenuOpen((current) => !current)}>
            <span className="text-lg">☰</span>
          </button>
          <Link href="/" className="shrink-0 text-sm font-semibold uppercase tracking-[0.28em] text-[#f3e7cf]">{siteConfig.name}</Link>
          <p className="hidden whitespace-nowrap text-[11px] text-white/34 min-[1820px]:block">Fine jewelry • Bridal • Bespoke gifting</p>
        </div>
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 xl:flex xl:gap-5 2xl:gap-6">
          {siteConfig.navigation.map((item) => {
            const active = pathname === item.href;
            return <Link key={item.href} href={item.href} className={`whitespace-nowrap text-sm transition ${active ? "text-[#f3e7cf]" : "text-white/72 hover:text-[#f3e7cf]"}`}>{item.label}</Link>;
          })}
        </nav>
        <div className="flex shrink-0 items-center gap-2.5 min-[1480px]:gap-3">
          <Link href="/cart" className="inline-flex min-w-[118px] justify-center whitespace-nowrap rounded-full border border-white/15 px-3.5 py-2 text-sm text-white/80 transition hover:border-[#d4b277] hover:text-[#f3e7cf] min-[1480px]:min-w-[128px] min-[1480px]:px-4">{cartLabel}</Link>
          <Link href="/account" className="hidden min-w-[98px] justify-center whitespace-nowrap rounded-full border border-white/15 px-3.5 py-2 text-sm text-white/80 transition hover:border-[#d4b277] hover:text-[#f3e7cf] min-[1480px]:min-w-[104px] min-[1480px]:px-4 md:inline-flex">Tài khoản</Link>
          <Link href="/shop" className="hidden min-w-[108px] justify-center whitespace-nowrap rounded-full bg-[#d4b277] px-3.5 py-2 text-sm font-medium text-black transition hover:bg-[#e5c68e] min-[1480px]:min-w-[114px] min-[1480px]:px-4 md:inline-flex">Mua ngay</Link>
        </div>
      </div>
      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#0b0b0b] px-6 py-5 lg:hidden">
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