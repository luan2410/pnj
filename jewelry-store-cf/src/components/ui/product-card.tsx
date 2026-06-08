import Link from "next/link";

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
    <article className="group rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 transition hover:-translate-y-1 hover:border-[#d4b277]/50">
      <ProductVisual slug={slug} name={name} className="mb-6 aspect-[4/5]" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#d4b277]">{category}</p>
          <h3 className="mt-3 text-xl font-medium text-white">{name}</h3>
        </div>
        {accent ? <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">{accent}</span> : null}
      </div>
      <p className="mt-4 min-h-12 text-sm leading-7 text-white/58">{material ?? "Thiết kế chủ lực trong bộ sưu tập Maison Aurum."}</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-lg font-semibold text-[#f3e7cf]">{price}</span>
        <Link href={`/shop/${slug}`} className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/80 transition group-hover:border-[#d4b277] group-hover:text-[#f3e7cf]">Xem chi tiết</Link>
      </div>
    </article>
  );
}