import Link from "next/link";

import { siteConfig } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(212,178,119,0.18),transparent_32%),linear-gradient(180deg,#0f0f10_0%,#080808_100%)]">
      <div className="mx-auto grid min-h-[82vh] w-full max-w-[120rem] gap-16 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#d4b277]">Luxury storefront on Cloudflare</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-[0.04em] text-white md:text-6xl">
            Không chỉ bán trang sức, đây là một trải nghiệm mua sắm cao cấp hoàn chỉnh.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/70">
            Maison Aurum kết hợp tinh thần visual sang trọng, luồng mua hàng rõ ràng và cấu trúc sẵn sàng mở rộng sang catalog, CRM và vận hành trên Cloudflare Workers.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/shop"
              className="rounded-full bg-[#d4b277] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#e5c68e]"
            >
              Khám phá sản phẩm
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-7 py-3 text-sm text-white/85 transition hover:border-[#d4b277] hover:text-[#f3e7cf]"
            >
              Đặt lịch tư vấn
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-semibold text-[#f3e7cf]">{stat.value}</p>
                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-xl rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
            <div className="aspect-[4/5] rounded-[2rem] bg-[radial-gradient(circle_at_32%_24%,rgba(255,255,255,0.45),transparent_12%),radial-gradient(circle_at_68%_34%,rgba(212,178,119,0.62),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d4b277]">Storefront</p>
                <p className="mt-3 text-white">Trang ch?, b? s?u t?p, c?a h?ng, chi ti?t s?n ph?m v? checkout li?n m?ch.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d4b277]">Operations</p>
                <p className="mt-3 text-white">Admin dashboard, product management và lead capture ready.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}