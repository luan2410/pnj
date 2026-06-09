"use client";

import Link from "next/link";

import { WishlistButton } from "@/components/cart/wishlist-button";
import { ProductVisual } from "@/components/ui/product-visual";

type ProductCardProps = {
  category: string;
  name: string;
  price: string;
  slug?: string;
  material?: string;
  accent?: string;
};

export function ProductCard({ category, name, price, slug = "radiant-sol-ring", material, accent }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1.5 hover:border-[#d4b277]/45">
      <div className="p-5 pb-0">
        <ProductVisual slug={slug} name={name} className="aspect-[4/4.1] rounded-[1.7rem]" />
      </div>
      <div className="p-6 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] tracking-[0.1em] text-[#d4b277]">{category}</p>
            <h3 className="mt-3 text-[1.42rem] font-medium leading-[1.24] tracking-[0.01em] text-white">
              {name}
            </h3>
          </div>
          <span className="mt-0.5 shrink-0 whitespace-nowrap rounded-full border border-emerald-300/15 bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-200/85">Sẵn hàng</span>
        </div>
        <p className="mt-4 min-h-14 text-sm leading-7 text-white/58">{material ?? "Thiết kế chủ lực trong bộ sưu tập Maison Aurum."}</p>
        <div className="mt-5 flex flex-wrap gap-2.5 text-xs text-white/46">
          <span className="min-w-max whitespace-nowrap rounded-full border border-white/10 px-3.5 py-1.5">Tư vấn size</span>
          <span className="min-w-max whitespace-nowrap rounded-full border border-white/10 px-3.5 py-1.5">Gói quà cao cấp</span>
          {accent ? <span className="min-w-max whitespace-nowrap rounded-full border border-[#d4b277]/20 bg-[#d4b277]/8 px-3.5 py-1.5 text-[#f3e7cf]">{accent}</span> : null}
        </div>
        <div className="mt-6 grid gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-white/38">Giá từ</p>
            <p className="mt-2 whitespace-nowrap text-2xl font-semibold text-[#f3e7cf]">{price}</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <WishlistButton slug={slug} />
            <Link href={`/shop/${slug}`} className="inline-flex min-w-[148px] justify-center whitespace-nowrap rounded-full bg-[#d4b277] px-5 py-3 text-sm font-medium text-black transition hover:bg-[#e5c68e]">
              Xem chi tiết
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}