import { AdminProductForm } from "@/components/admin/admin-product-form";
import { PageIntro } from "@/components/ui/page-intro";
import { getAdminProduct } from "@/lib/server/admin/products-store";

type AdminProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function AdminProductDetailPage({ params }: AdminProductDetailPageProps) {
  const { slug } = await params;
  const product = getAdminProduct(slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#080808] text-white">
        <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-white/72">
            Không tìm thấy sản phẩm demo này.
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <PageIntro eyebrow="Admin Products" title={`Chỉnh sửa ${product.name}`} description="Trang edit này sẽ phát triển thành màn hình cập nhật sản phẩm, SEO, media và tồn kho." />
      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10">
        <AdminProductForm
          mode="edit"
          initialValues={{
            name: product.name,
            slug: product.slug,
            category: product.category,
            price: product.price,
            material: product.material,
            description: product.description,
          }}
        />
      </section>
    </main>
  );
}