"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { ProductVisual } from "@/components/ui/product-visual";
import { useCart } from "@/components/providers/cart-provider";

function formatCurrency(value: number) {
  return `${value.toLocaleString("vi-VN")}đ`;
}

function CartSkeleton() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1fr_380px] lg:px-10">
      <div className="space-y-4">
        {[1, 2].map((item) => (
          <div key={item} className="flex gap-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 animate-pulse">
            <div className="h-24 w-24 rounded-[1.25rem] bg-white/10" />
            <div className="flex-1 space-y-3">
              <div className="h-6 w-1/2 rounded bg-white/10" />
              <div className="h-4 w-2/3 rounded bg-white/10" />
              <div className="h-5 w-1/4 rounded bg-white/10" />
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 animate-pulse">
        <div className="h-5 w-1/3 rounded bg-white/10" />
        <div className="mt-6 space-y-4">
          {[1, 2, 3].map((item) => <div key={item} className="h-4 rounded bg-white/10" />)}
        </div>
        <div className="mt-8 h-12 rounded-full bg-white/10" />
      </div>
    </section>
  );
}

export function CartView() {
  const { items, subtotal, total, removeItem, updateQuantity, isHydrated } = useCart();
  const [giftWrap] = useState(true);
  const empty = useMemo(() => items.length === 0, [items.length]);

  if (!isHydrated) return <CartSkeleton />;

  if (empty) {
    return (
      <section className="mx-auto w-full max-w-4xl px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-center text-white/70">
          <p>Giỏ hàng đang trống. Hãy quay lại cửa hàng để chọn món trang sức đầu tiên.</p>
          <Link href="/shop" className="mt-6 inline-flex rounded-full bg-[#d4b277] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#e5c68e]">
            Khám phá sản phẩm
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1fr_380px] lg:px-10">
      <div className="space-y-4">
        {items.map((item) => (
          <article key={item.slug} className="flex gap-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <ProductVisual slug={item.slug} name={item.name} className="h-24 w-24 shrink-0 rounded-[1.25rem]" />
            <div className="flex-1">
              <h2 className="text-xl font-medium text-white">{item.name}</h2>
              <p className="mt-2 text-white/60">{item.material ?? item.category}</p>
              <p className="mt-4 text-[#f3e7cf]">{item.price}</p>
              <div className="mt-4 flex items-center gap-3">
                <button className="rounded-full border border-white/10 px-3 py-1" onClick={() => updateQuantity(item.slug, item.quantity - 1)}>−</button>
                <span className="min-w-8 text-center">{item.quantity}</span>
                <button className="rounded-full border border-white/10 px-3 py-1" onClick={() => updateQuantity(item.slug, item.quantity + 1)}>+</button>
                <button className="ml-3 text-sm text-white/55 transition hover:text-white" onClick={() => removeItem(item.slug)}>Xóa</button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <aside className="h-fit rounded-[2rem] border border-[#d4b277]/20 bg-white/[0.04] p-6">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d4b277]">Tổng đơn</p>
        <div className="mt-6 space-y-4 text-white/70">
          <div className="flex justify-between"><span>Tạm tính</span><span>{formatCurrency(subtotal)}</span></div>
          <div className="flex justify-between"><span>Gói quà</span><span>{giftWrap ? "Miễn phí" : "0đ"}</span></div>
          <div className="flex justify-between"><span>Giao nội thành</span><span>Liên hệ</span></div>
          <div className="flex justify-between border-t border-white/10 pt-4 text-xl text-white"><span>Tổng</span><span>{formatCurrency(total)}</span></div>
        </div>
        <p className="mt-6 text-sm leading-7 text-white/60">Đơn hàng sẽ được showroom xác nhận lại về size, thời gian giao và các tùy chọn khắc/gói quà.</p>
        <Link href="/checkout" className="mt-8 block rounded-full bg-[#d4b277] px-7 py-3 text-center text-sm font-medium text-black transition hover:bg-[#e5c68e]">
          Thanh toán
        </Link>
      </aside>
    </section>
  );
}