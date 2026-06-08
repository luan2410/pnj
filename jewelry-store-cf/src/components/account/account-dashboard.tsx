"use client";

import Link from "next/link";

import { products } from "@/lib/site-data";
import { useCart } from "@/components/providers/cart-provider";

function formatCurrency(value: number) {
  return `${value.toLocaleString("vi-VN")}đ`;
}

function AccountSkeleton() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 lg:grid-cols-[280px_1fr] lg:px-10">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 animate-pulse">
        <div className="h-6 w-1/2 rounded bg-white/10" />
        <div className="mt-4 space-y-3">{[1, 2, 3, 4].map((item) => <div key={item} className="h-4 rounded bg-white/10" />)}</div>
      </div>
      <div className="space-y-6">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 animate-pulse">
          <div className="h-4 w-24 rounded bg-white/10" />
          <div className="mt-4 h-8 w-1/3 rounded bg-white/10" />
          <div className="mt-3 h-4 w-1/2 rounded bg-white/10" />
        </div>
        <div className="grid gap-4 md:grid-cols-3">{[1, 2, 3].map((item) => <div key={item} className="h-28 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 animate-pulse" />)}</div>
      </div>
    </section>
  );
}

function EmptyOrdersState() {
  return (
    <div className="rounded-[1.5rem] border border-dashed border-white/10 bg-black/20 p-8 text-center">
      <p className="text-xl text-white">Chưa có đơn hàng nào</p>
      <p className="mt-3 text-sm leading-7 text-white/60">Hãy thử thêm sản phẩm vào giỏ và hoàn tất checkout để tạo lịch sử đơn hàng demo.</p>
      <Link href="/shop" className="mt-6 inline-flex rounded-full bg-[#d4b277] px-5 py-3 text-sm font-medium text-black transition hover:bg-[#e5c68e]">Mua sắm ngay</Link>
    </div>
  );
}

function EmptyWishlistState() {
  return (
    <div className="rounded-[1.5rem] border border-dashed border-white/10 bg-black/20 p-8 text-center md:col-span-2">
      <p className="text-xl text-white">Wishlist của bạn đang trống</p>
      <p className="mt-3 text-sm leading-7 text-white/60">Lưu lại những thiết kế bạn yêu thích để so sánh, quay lại sau hoặc chia sẻ với người thân.</p>
      <Link href="/shop" className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm text-white/85 transition hover:border-[#d4b277] hover:text-[#f3e7cf]">Khám phá sản phẩm</Link>
    </div>
  );
}

export function AccountDashboard() {
  const { orders, wishlist, sessionUser, signOutDemo, isHydrated } = useCart();
  const wishlistedProducts = products.filter((product) => wishlist.includes(product.slug));

  if (!isHydrated) return <AccountSkeleton />;

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 lg:grid-cols-[280px_1fr] lg:px-10">
      <aside className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-white/72">
        <p className="text-white">Hồ sơ khách hàng</p>
        <p className="mt-3">Lịch sử đơn hàng</p>
        <p className="mt-3">Wishlist</p>
        <p className="mt-3">Địa chỉ giao hàng</p>
        {sessionUser ? <button className="mt-6 text-sm text-[#f3e7cf]" onClick={signOutDemo}>Đăng xuất demo</button> : null}
      </aside>
      <div className="grid gap-6">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 min-h-[120px]">
          <p className="text-sm text-white/60">Phiên đăng nhập</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{sessionUser?.name ?? "Khách đang xem"}</h2>
          <p className="mt-2 text-white/68">{sessionUser?.email ?? "Chưa đăng nhập demo"}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 min-h-[124px]"><p className="text-sm text-white/60">Đơn hàng</p><p className="mt-3 text-3xl font-semibold text-[#f3e7cf]">{orders.length}</p></article>
          <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 min-h-[124px]"><p className="text-sm text-white/60">Wishlist</p><p className="mt-3 text-3xl font-semibold text-[#f3e7cf]">{wishlist.length}</p></article>
          <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 min-h-[124px]"><p className="text-sm text-white/60">Tổng chi demo</p><p className="mt-3 text-3xl font-semibold text-[#f3e7cf]">{formatCurrency(orders.reduce((sum, order) => sum + order.total, 0))}</p></article>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">Đơn hàng gần đây</h2>
          <div className="mt-6 grid gap-4">
            {orders.length ? orders.map((order) => (
              <article key={order.id} className="rounded-[1.5rem] border border-white/10 p-5 text-white/72">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-white">{order.id}</span>
                  <span>{new Date(order.createdAt).toLocaleString("vi-VN")}</span>
                  <span className="text-[#f3e7cf]">{formatCurrency(order.total)}</span>
                </div>
                <p className="mt-3 text-sm">{order.items.map((item) => `${item.name} x${item.quantity}`).join(", ")}</p>
              </article>
            )) : <EmptyOrdersState />}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-white">Wishlist</h2>
            <Link href="/shop" className="text-sm text-[#f3e7cf] transition hover:text-white">Tiếp tục khám phá →</Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {wishlistedProducts.length ? wishlistedProducts.map((product) => (
              <Link key={product.slug} href={`/shop/${product.slug}`} className="rounded-[1.5rem] border border-white/10 p-5 text-white/72 transition hover:border-[#d4b277]">
                <p className="text-white">{product.name}</p>
                <p className="mt-2">{product.category}</p>
                <p className="mt-3 text-[#f3e7cf]">{product.price}</p>
              </Link>
            )) : <EmptyWishlistState />}
          </div>
        </div>
      </div>
    </section>
  );
}