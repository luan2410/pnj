import { AdminProductForm } from "@/components/admin/admin-product-form";
import { PageIntro } from "@/components/ui/page-intro";

export default function NewAdminProductPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <PageIntro eyebrow="Admin Products" title="Tạo sản phẩm mới cho catalog trang sức." description="Form shell này mô phỏng quy trình nhập sản phẩm, sẵn sàng nối create API và mutations thật ở bước backend." />
      <section className="mx-auto w-full max-w-[120rem] px-6 py-12 lg:px-10">
        <AdminProductForm mode="create" />
      </section>
    </main>
  );
}