"use client";

import { useMemo, useState } from "react";

import { useCart } from "@/components/providers/cart-provider";

function formatCurrency(value: number) {
  return `${value.toLocaleString("vi-VN")}đ`;
}

function CheckoutSkeleton() {
  return (
    <section className="mx-auto grid w-full max-w-[120rem] gap-8 px-6 py-20 lg:grid-cols-[minmax(0,1.18fr)_420px] lg:px-10">
      <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 animate-pulse">
        {[1, 2, 3, 4].map((item) => <div key={item} className="space-y-2"><div className="h-4 w-24 rounded bg-white/10" /><div className="h-12 rounded-full bg-white/10" /></div>)}
        <div className="h-32 rounded-[1.5rem] bg-white/10" />
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 animate-pulse"><div className="h-5 w-1/3 rounded bg-white/10" /><div className="mt-6 h-24 rounded-[1.5rem] bg-white/10" /><div className="mt-6 space-y-4">{[1, 2, 3].map((item) => <div key={item} className="h-4 rounded bg-white/10" />)}</div><div className="mt-8 h-12 rounded-full bg-white/10" /></div>
    </section>
  );
}

export function CheckoutForm() {
  const { checkoutDetails, items, subtotal, total, discountAmount, appliedCoupon, updateCheckoutDetails, placeOrder, applyCoupon, clearCoupon, isHydrated } = useCart();
  const [submittedOrderId, setSubmittedOrderId] = useState<string | null>(null);
  const [couponInput, setCouponInput] = useState(appliedCoupon ?? "");
  const [couponMessage, setCouponMessage] = useState<string | null>(null);

  const canSubmit = useMemo(() => items.length > 0, [items.length]);
  if (!isHydrated) return <CheckoutSkeleton />;

  return (
    <section className="mx-auto grid w-full max-w-[120rem] gap-8 px-6 py-20 lg:grid-cols-[minmax(0,1.18fr)_420px] lg:px-10">
      <form className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6" onSubmit={(event) => { event.preventDefault(); const order = placeOrder(); setSubmittedOrderId(order?.id ?? null); setCouponInput(""); }}>
        {[ ["fullName", "Họ và tên"], ["phone", "Số điện thoại"], ["email", "Email"], ["address", "Địa chỉ giao hàng"] ].map(([field, label]) => (
          <label key={field} className="grid gap-2 text-sm text-white/70">{label}<input value={checkoutDetails[field as keyof typeof checkoutDetails]} onChange={(event) => updateCheckoutDetails({ [field]: event.target.value })} className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-white outline-none transition focus:border-[#d4b277]" /></label>
        ))}
        <label className="grid gap-2 text-sm text-white/70">Ghi chú tư vấn / gói quà<textarea value={checkoutDetails.note} onChange={(event) => updateCheckoutDetails({ note: event.target.value })} className="min-h-32 rounded-[1.5rem] border border-white/10 bg-black/30 px-5 py-3 text-white outline-none transition focus:border-[#d4b277]" /></label>
        {submittedOrderId ? <div className="rounded-[1.5rem] border border-[#d4b277]/25 bg-[#d4b277]/10 px-5 py-4 text-sm text-[#f3e7cf]">Đơn demo `{submittedOrderId}` đã được ghi nhận. Bạn có thể xem lại trong trang tài khoản.</div> : null}
      </form>
      <aside className="h-fit rounded-[2rem] border border-[#d4b277]/20 bg-white/[0.04] p-6">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d4b277]">Thanh toán</p>
        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
          <p className="text-sm text-white/70">Mã ưu đãi</p>
          <div className="mt-3 flex gap-3">
            <input value={couponInput} onChange={(event) => setCouponInput(event.target.value.toUpperCase())} className="flex-1 rounded-full border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[#d4b277]" placeholder="AURUM10" />
            <button type="button" className="rounded-full border border-white/10 px-4 py-3 text-sm text-white/80" onClick={() => { const ok = applyCoupon(couponInput); setCouponMessage(ok ? "Áp dụng ưu đãi thành công." : "Mã chưa hợp lệ trong bản demo."); if (ok) setCouponInput(couponInput.trim().toUpperCase()); }}>Áp dụng</button>
          </div>
          {appliedCoupon ? <button type="button" className="mt-3 text-sm text-[#f3e7cf]" onClick={() => { clearCoupon(); setCouponInput(""); }}>Gỡ mã `{appliedCoupon}`</button> : null}
          {couponMessage ? <p className="mt-3 text-sm text-white/60">{couponMessage}</p> : null}
        </div>
        <div className="mt-6 space-y-4 text-white/70">
          <div className="flex justify-between"><span>Số dòng sản phẩm</span><span>{items.length}</span></div>
          <div className="flex justify-between"><span>Tạm tính</span><span>{formatCurrency(subtotal)}</span></div>
          <div className="flex justify-between"><span>Ưu đãi</span><span>-{formatCurrency(discountAmount)}</span></div>
          <div className="flex justify-between"><span>Phí giao hàng</span><span>Liên hệ</span></div>
          <div className="flex justify-between border-t border-white/10 pt-4 text-xl text-white"><span>Tổng dự kiến</span><span>{formatCurrency(total)}</span></div>
        </div>
        <p className="mt-6 leading-8 text-white/70">COD cao cấp, chuyển khoản, VNPay/MoMo/Stripe sẽ được tích hợp ở phase backend.</p>
        <button type="submit" formAction="javascript:void(0)" onClick={() => { const form = document.querySelector("form"); form?.requestSubmit(); }} disabled={!canSubmit} className="mt-8 w-full rounded-full bg-[#d4b277] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#e5c68e] disabled:cursor-not-allowed disabled:opacity-50">Đặt hàng</button>
      </aside>
    </section>
  );
}