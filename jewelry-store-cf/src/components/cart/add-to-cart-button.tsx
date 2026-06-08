"use client";

import { useState } from "react";

import type { CatalogProduct } from "@/lib/server/catalog";
import { useCart } from "@/components/providers/cart-provider";

export function AddToCartButton({ product }: Readonly<{ product: CatalogProduct }>) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      className="rounded-full bg-[#d4b277] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#e5c68e]"
      onClick={() => {
        addItem(product);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1600);
      }}
    >
      {added ? "Đã thêm vào giỏ" : "Thêm vào giỏ"}
    </button>
  );
}