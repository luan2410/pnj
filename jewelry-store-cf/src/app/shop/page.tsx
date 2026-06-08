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
          eyebrow="Shop"
          title="Danh mục mua sắm được sắp xếp như một boutique số hiện đại."
          description="Trang shop giờ đã có filter và sort tương tác ở client, sẵn sàng nối tiếp sang inventory, search và dữ liệu thật từ backend."
        />
        <Suspense
          fallback={
            <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 lg:grid-cols-[300px_1fr] lg:px-10">
              <aside className="h-fit rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 animate-pulse">
                <div className="h-5 w-20 rounded bg-white/10" />
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