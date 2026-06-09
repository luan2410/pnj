import Link from "next/link";

import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { ProductReviews } from "@/components/cart/product-reviews";
import { WishlistButton } from "@/components/cart/wishlist-button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProductVisual } from "@/components/ui/product-visual";
import { getCatalogProductBySlug, getCatalogProducts } from "@/lib/server/catalog";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await getCatalogProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const products = await getCatalogProducts();
  const product = (await getCatalogProductBySlug(slug)) ?? products[0];
  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 2);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080808] text-white">
        <section className="mx-auto grid w-full max-w-[120rem] gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_35%_20%,rgba(212,178,119,0.42),transparent_25%),rgba(255,255,255,0.03)] p-6">
            <ProductVisual slug={product.slug} name={product.name} className="aspect-[4/5] rounded-[2rem]" />
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {product.details.map((detail) => (
                <div key={detail} className="rounded-full border border-white/10 px-4 py-3 text-center text-sm text-white/72">
                  {detail}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">{product.category}</p>
            <h1 className="mt-6 text-5xl font-semibold tracking-[0.04em] text-white">{product.name}</h1>
            <p className="mt-4 text-2xl font-semibold text-[#f3e7cf]">{product.price}</p>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/70">{product.description}</p>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d4b277]">Chất liệu & hoàn thiện</p>
              <p className="mt-3 text-white/78">{product.material ?? "Thông tin sẽ cập nhật từ catalog service"}</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-white/72">
                <p className="text-white">Miễn phí tư vấn size và cách đeo</p>
                <p className="mt-3 leading-7">Đội ngũ tư vấn hỗ trợ chọn size, set quà và phong cách phù hợp trước khi chốt đơn.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-white/72">
                <p className="text-white">Đóng gói quà sang trọng</p>
                <p className="mt-3 leading-7">Có thể thêm thiệp, khắc tên hoặc chuẩn bị set quà cho proposal, anniversary và birthday.</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <AddToCartButton product={product} />
              <WishlistButton slug={product.slug} />
            </div>
          </div>
        </section>
        <section className="mx-auto w-full max-w-[120rem] px-6 pb-10 lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold text-white">Thiết kế liên quan</h2>
            <Link href="/shop" className="text-sm text-[#f3e7cf] transition hover:text-white">Quay lại catalog →</Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {relatedProducts.map((item) => (
              <Link key={item.slug} href={`/shop/${item.slug}`} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#d4b277]/40">
                <ProductVisual slug={item.slug} name={item.name} className="aspect-[16/10] rounded-[1.5rem]" />
                <p className="mt-5 text-sm uppercase tracking-[0.25em] text-[#d4b277]">{item.category}</p>
                <h3 className="mt-3 text-2xl text-white">{item.name}</h3>
                <p className="mt-3 text-white/60">{item.price}</p>
              </Link>
            ))}
          </div>
        </section>
        <ProductReviews slug={product.slug} />
      </main>
      <SiteFooter />
    </>
  );
}