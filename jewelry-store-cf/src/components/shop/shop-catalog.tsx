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
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 lg:grid-cols-[300px_1fr] lg:px-10">
      <aside className="h-fit rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d4b277]">Bộ lọc</p>
        <div className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm text-white/68">
            Loại trang sức
            <select value={category} onChange={(event) => setCategory(event.target.value as (typeof categoryOptions)[number])} className="rounded-full border border-white/10 bg-black/30 px-4 py-3 text-white outline-none">
              {categoryOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm text-white/68">
            Chất liệu
            <select value={material} onChange={(event) => setMaterial(event.target.value as (typeof materialOptions)[number])} className="rounded-full border border-white/10 bg-black/30 px-4 py-3 text-white outline-none">
              {materialOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm text-white/68">
            Khoảng giá
            <select value={priceRange} onChange={(event) => setPriceRange(event.target.value as (typeof priceOptions)[number])} className="rounded-full border border-white/10 bg-black/30 px-4 py-3 text-white outline-none">
              {priceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
        </div>
      </aside>
      <div>
        <div className="mb-6 flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">{filteredProducts.length} sản phẩm phù hợp</p>
          <label className="flex items-center gap-3 text-sm text-white/68">
            Sắp xếp
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="rounded-full border border-white/10 bg-black/30 px-4 py-3 text-white outline-none">
              <option value="featured">Nổi bật</option>
              <option value="price-asc">Giá tăng dần</option>
              <option value="price-desc">Giá giảm dần</option>
              <option value="name">Tên A-Z</option>
            </select>
          </label>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}