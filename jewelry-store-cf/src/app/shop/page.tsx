import { Suspense } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ShopCatalog } from "@/components/shop/shop-catalog";
import { PageIntro } from "@/components/ui/page-intro";
import { ProductGridSkeleton } from "@/components/ui/product-skeleton";
import { getCatalogProducts } from "@/lib/server/catalog";

async function ShopCatalogContent() {
  const products = await getCatalogProducts();
  return <ShopCatalog products={products} />;
}

export default function ShopPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080808] text-white">
        <PageIntro
          eyebrow="Maison Aurum Shop"
          title="Tuyển chọn trang sức dành cho những khoảnh khắc cần sự tinh tế, sáng giá và rất riêng."
          description="Khám phá những thiết kế bridal, quà tặng và trang sức đeo hằng ngày được tuyển chọn theo cảm xúc, chất liệu và nhịp sống hiện đại."
        />
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(212,178,119,0.12),transparent_42%)]">
          <div className="mx-auto grid w-full max-w-[120rem] gap-4 px-6 py-8 sm:grid-cols-3 lg:px-10">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#d4b277]">Curated Selection</p>
              <p className="mt-3 text-sm leading-7 text-white/68">Boutique edit cho proposal, kỷ niệm và gifting cao cấp.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#d4b277]">Private Consultation</p>
              <p className="mt-3 text-sm leading-7 text-white/68">Tư vấn size, chất liệu và set quà tại showroom hoặc online.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#d4b277]">Luxury Service</p>
              <p className="mt-3 text-sm leading-7 text-white/68">Đóng gói trang trọng, khắc tên và giao nhận theo lịch hẹn riêng.</p>
            </div>
          </div>
        </section>
        <Suspense
          fallback={
            <section className="mx-auto grid w-full max-w-[120rem] gap-8 px-6 py-10 lg:grid-cols-[272px_minmax(0,1fr)] lg:px-10">
              <aside className="h-fit rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 animate-pulse">
                <div className="h-5 w-28 rounded bg-white/10" />
                <div className="mt-6 grid gap-4">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="h-20 rounded-[1.5rem] bg-white/10" />
                  ))}
                </div>
              </aside>
              <ProductGridSkeleton count={6} />
            </section>
          }
        >
          <ShopCatalogContent />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}