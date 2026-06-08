"use client";

import { useState } from "react";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { useCart } from "@/components/providers/cart-provider";
import { PageIntro } from "@/components/ui/page-intro";

export default function RegisterPage() {
  const { signInDemo } = useCart();
  const [name, setName] = useState("Maison Client");
  const [email, setEmail] = useState("new@maisonaurum.vn");
  const [phone, setPhone] = useState("0900000000");
  const [password, setPassword] = useState("demo-password");
  const [done, setDone] = useState(false);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080808] text-white">
        <PageIntro
          eyebrow="Create Account"
          title="Tạo tài khoản để lưu wishlist và theo dõi đơn hàng."
          description="Trang đăng ký được thiết kế theo phong cách boutique: rõ ràng, sang trọng và sẵn sàng kết nối auth thật ở bước backend."
        />
        <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[1fr_0.95fr] lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">Member Benefits</p>
            <h2 className="mt-5 text-4xl font-semibold text-white">Tài khoản riêng cho khách hàng cần trải nghiệm liền mạch hơn.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Lưu sản phẩm yêu thích và quay lại sau",
                "Xem đơn hàng gần đây và tổng chi tiêu demo",
                "Điền sẵn thông tin checkout cho lần mua tiếp theo",
                "Nhận tư vấn riêng cho bridal và gifting",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">Register</p>
            <h1 className="mt-5 text-4xl font-semibold text-white">Start your private account</h1>
            <div className="mt-8 grid gap-4">
              <label className="grid gap-2 text-sm text-white/68">
                Họ và tên
                <input value={name} onChange={(event) => setName(event.target.value)} className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-white outline-none transition focus:border-[#d4b277]" />
              </label>
              <label className="grid gap-2 text-sm text-white/68">
                Email
                <input value={email} onChange={(event) => setEmail(event.target.value)} className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-white outline-none transition focus:border-[#d4b277]" />
              </label>
              <label className="grid gap-2 text-sm text-white/68">
                Số điện thoại
                <input value={phone} onChange={(event) => setPhone(event.target.value)} className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-white outline-none transition focus:border-[#d4b277]" />
              </label>
              <label className="grid gap-2 text-sm text-white/68">
                Mật khẩu
                <input value={password} onChange={(event) => setPassword(event.target.value)} className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-white outline-none transition focus:border-[#d4b277]" />
              </label>
            </div>
            <button
              className="mt-8 w-full rounded-full bg-[#d4b277] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#e5c68e]"
              onClick={() => {
                signInDemo({ name, email });
                setDone(true);
              }}
            >
              Tạo tài khoản demo
            </button>
            {done ? (
              <div className="mt-4 rounded-[1.25rem] border border-[#d4b277]/25 bg-[#d4b277]/10 px-4 py-3 text-sm text-[#f3e7cf]">
                Tài khoản demo đã sẵn sàng. <Link href="/account" className="underline">Mở trang tài khoản</Link>
              </div>
            ) : null}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}