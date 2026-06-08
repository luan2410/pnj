"use client";

import { useCart } from "@/components/providers/cart-provider";

export function WishlistButton({ slug }: Readonly<{ slug: string }>) {
  const { isWishlisted, toggleWishlist } = useCart();
  const active = isWishlisted(slug);

  return (
    <button
      className={`rounded-full border px-7 py-3 text-sm transition ${active ? "border-[#d4b277] text-[#f3e7cf]" : "border-white/15 text-white/85 hover:border-[#d4b277] hover:text-[#f3e7cf]"}`}
      onClick={() => toggleWishlist(slug)}
    >
      {active ? "Đã lưu yêu thích" : "Lưu vào wishlist"}
    </button>
  );
}