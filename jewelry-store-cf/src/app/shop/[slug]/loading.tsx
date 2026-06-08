import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProductDetailSkeleton } from "@/components/ui/product-skeleton";

export default function Loading() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080808] text-white">
        <ProductDetailSkeleton />
      </main>
      <SiteFooter />
    </>
  );
}
