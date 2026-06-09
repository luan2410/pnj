"use client";

import { useMemo, useState } from "react";

import { ProductCard } from "@/components/ui/product-card";
import type { CatalogProduct } from "@/lib/server/catalog";

const categoryOptions = ["Tất cả", "Nhẫn kim cương", "Dây chuyền vàng 18K", "Bông tai đá quý"] as const;
const materialOptions = ["Tất cả", "Vàng 18K", "Vàng trắng 18K", "Lab-grown"] as const;
const priceOptions = ["Tất cả", "Dưới 30M", "30M - 40M", "Trên 40M"] as const;

function parsePrice(price: string) {
  return Number(price.replace(/[^\d]/g, ""));
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm text-white/62">
      <span>{label}</span>
      <div className="rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-4 py-1.5">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full bg-transparent py-2.5 text-sm text-white outline-none"
        >
          {options.map((option) => <option key={option} value={option} className="bg-[#111]">{option}</option>)}
        </select>
      </div>
    </label>
  );
}

export function ShopCatalog({ products }: Readonly<{ products: CatalogProduct[] }>) {
  const [category, setCategory] = useState<(typeof categoryOptions)[number]>("Tất cả");
  const [material, setMaterial] = useState<(typeof materialOptions)[number]>("Tất cả");
  const [priceRange, setPriceRange] = useState<(typeof priceOptions)[number]>("Tất cả");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (category !== "Tất cả") {
      list = list.filter((product) => product.category === category);
    }

    if (material !== "Tất cả") {
      list = list.filter((product) => product.material.includes(material));
    }

    if (priceRange !== "Tất cả") {
      list = list.filter((product) => {
        const price = parsePrice(product.price);
        if (priceRange === "Dưới 30M") return price < 30000000;
        if (priceRange === "30M - 40M") return price >= 30000000 && price <= 40000000;
        return price > 40000000;
      });
    }

    if (sortBy === "price-asc") {
      list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortBy === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [category, material, priceRange, products, sortBy]);

  return (
    <section className="mx-auto grid w-full max-w-[120rem] gap-8 px-6 py-10 lg:grid-cols-[272px_minmax(0,1fr)] lg:px-10 xl:grid-cols-[280px_minmax(0,1fr)] 2xl:grid-cols-[288px_minmax(0,1fr)]">
      <aside className="h-fit rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 lg:sticky lg:top-28">
        <div className="border-b border-white/10 pb-5">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#d4b277]">Refine Selection</p>
          <h2 className="mt-3 text-2xl font-medium text-white">Tìm thiết kế phù hợp</h2>
          <p className="mt-3 text-sm leading-7 text-white/60">Lọc theo dịp mua, chất liệu và mức giá để rút ngắn shortlist nhanh hơn.</p>
        </div>
        <div className="mt-6 grid gap-4">
          <SelectField label="Loại trang sức" value={category} options={categoryOptions} onChange={(value) => setCategory(value as (typeof categoryOptions)[number])} />
          <SelectField label="Chất liệu" value={material} options={materialOptions} onChange={(value) => setMaterial(value as (typeof materialOptions)[number])} />
          <SelectField label="Khoảng giá" value={priceRange} options={priceOptions} onChange={(value) => setPriceRange(value as (typeof priceOptions)[number])} />
        </div>
      </aside>
      <div className="min-w-0">
        <div className="mb-7 flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-white/52">Boutique Selection</p>
            <p className="mt-1 text-base text-white/80">{filteredProducts.length} thiết kế đang sẵn sàng để bạn khám phá</p>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-white/68">
            <span className="whitespace-nowrap">Sắp xếp theo</span>
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="bg-transparent pr-2 text-white outline-none">
              <option value="featured" className="bg-[#111]">Nổi bật</option>
              <option value="price-asc" className="bg-[#111]">Giá tăng dần</option>
              <option value="price-desc" className="bg-[#111]">Giá giảm dần</option>
              <option value="name" className="bg-[#111]">Tên A-Z</option>
            </select>
          </div>
        </div>
        <div className="grid gap-7 md:grid-cols-2 min-[1280px]:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}