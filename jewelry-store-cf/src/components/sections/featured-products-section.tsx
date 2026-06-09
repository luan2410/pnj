import Link from "next/link";

import { featuredCatalogProducts } from "@/lib/catalog-data";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedProductsSection() {
  return (
    <section className="space-y-10 py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Featured Pieces"
          title="Những thiết kế nổi bật dành cho khách hàng mới"
          description="Bộ card sản phẩm được tối ưu để đi thẳng từ cảm hứng sang hành động mua, đồng thời vẫn giữ được cảm giác trưng bày cao cấp."
        />
        <Link href="/shop" className="text-sm text-[#f3e7cf] transition hover:text-white">
          Xem toàn bộ catalog →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredCatalogProducts.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </section>
  );
}

