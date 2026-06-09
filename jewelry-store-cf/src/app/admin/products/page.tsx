import Link from "next/link";

import { AdminMediaPanel } from "@/components/account/admin-media-panel";
import { PageIntro } from "@/components/ui/page-intro";
import { listAdminProducts } from "@/lib/server/admin/products-store";

export default function AdminProductsPage() {
  const products = listAdminProducts();

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <PageIntro eyebrow="Admin Products" title="Quản lý sản phẩm, biến thể, chất liệu và tồn kho." description="Trang quản trị sản phẩm giờ đã có bố cục rõ ràng hơn để dễ chuyển sang CRUD, SEO, media và inventory thật." />
      <section className="mx-auto w-full max-w-[120rem] px-6 py-12 lg:px-10">
        <div className="mb-6 flex justify-end">
          <Link href="/admin/products/new" className="rounded-full bg-[#d4b277] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#e5c68e]">
            Tạo sản phẩm mới
          </Link>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          {products.map((product) => (
            <div key={product.slug} className="grid gap-4 border-b border-white/10 p-5 text-white/72 md:grid-cols-[1fr_180px_160px_140px] md:items-center">
              <span className="text-white">{product.name}</span>
              <span>{product.category}</span>
              <span>{product.price}</span>
              <Link href={`/admin/products/${product.slug}`} className="rounded-full border border-white/10 px-4 py-2 text-center text-sm transition hover:border-[#d4b277] hover:text-[#f3e7cf]">
                Chỉnh sửa
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <AdminMediaPanel />
        </div>
      </section>
    </main>
  );
}