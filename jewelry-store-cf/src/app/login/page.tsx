"use client";

import { useState } from "react";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { useCart } from "@/components/providers/cart-provider";
import { PageIntro } from "@/components/ui/page-intro";

function AuthCard({ eyebrow, title, button }: { eyebrow: string; title: string; button: string }) {
  const { signInDemo } = useCart();
  const [email, setEmail] = useState("client@maisonaurum.vn");
  const [password, setPassword] = useState("demo-password");
  const [done, setDone] = useState(false);

  return (
    <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
      <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">{eyebrow}</p>
      <h1 className="mt-5 text-4xl font-semibold text-white">{title}</h1>
      <div className="mt-8 grid gap-4">
        <label className="grid gap-2 text-sm text-white/68">
          Email
          <input value={email} onChange={(event) => setEmail(event.target.value)} className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-white outline-none transition focus:border-[#d4b277]" />
        </label>
        <label className="grid gap-2 text-sm text-white/68">
          Mật khẩu
          <input value={password} onChange={(event) => setPassword(event.target.value)} className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-white outline-none transition focus:border-[#d4b277]" />
        </label>
      </div>
      <button
        className="mt-8 w-full rounded-full bg-[#d4b277] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#e5c68e]"
        onClick={() => {
          signInDemo({ name: email.split("@")[0] || "Maison Client", email });
          setDone(true);
        }}
      >
        {button}
      </button>
      {done ? (
        <div className="mt-4 rounded-[1.25rem] border border-[#d4b277]/25 bg-[#d4b277]/10 px-4 py-3 text-sm text-[#f3e7cf]">
          Đăng nhập demo thành công. <Link href="/account" className="underline">Vào tài khoản</Link>
        </div>
      ) : null}
      <p className="mt-6 text-sm text-white/55">
        Chưa có tài khoản? <Link href="/register" className="text-[#f3e7cf] underline">Tạo tài khoản demo</Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080808] text-white">
        <PageIntro
          eyebrow="Account Access"
          title="Đăng nhập để quản lý đơn hàng, wishlist và lịch sử tư vấn."
          description="Auth wiring hiện dùng session demo local, nhưng phần giao diện đã hoàn thiện để thay sang auth provider thật ở bước backend."
        />
        <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(212,178,119,0.14),rgba(255,255,255,0.02))] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">Private Account</p>
            <h2 className="mt-5 text-4xl font-semibold text-white">Một không gian riêng để theo dõi hành trình mua sắm.</h2>
            <div className="mt-8 grid gap-4">
              {[
                "Theo dõi đơn hàng và trạng thái xử lý",
                "Lưu wishlist và sản phẩm đang cân nhắc",
                "Nhận lịch hẹn tư vấn riêng và ưu đãi cá nhân hóa",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-white/75">{item}</div>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <AuthCard eyebrow="Login" title="Welcome back" button="Đăng nhập demo" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}