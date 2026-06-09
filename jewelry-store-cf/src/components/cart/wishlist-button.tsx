"use client";

import { useCart } from "@/components/providers/cart-provider";

export function WishlistButton({ slug }: Readonly<{ slug: string }>) {
  const { isWishlisted, toggleWishlist } = useCart();
  const active = isWishlisted(slug);

  return (
    <button
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-sm transition ${active ? "border-[#d4b277] bg-[#d4b277]/12 text-[#f3e7cf]" : "border-white/15 text-white/70 hover:border-[#d4b277] hover:text-[#f3e7cf]"}`}
      onClick={() => toggleWishlist(slug)}
      aria-label={active ? "Bỏ lưu yêu thích" : "Lưu vào wishlist"}
      title={active ? "Đã lưu yêu thích" : "Lưu vào wishlist"}
    >
      {active ? "♥" : "♡"}
    </button>
  );
}