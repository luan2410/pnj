import { CartView } from "@/components/cart/cart-view";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageIntro } from "@/components/ui/page-intro";

export default function CartPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080808] text-white">
        <PageIntro eyebrow="Cart" title="Giỏ hàng được tối ưu để khách kiểm tra nhanh trước khi thanh toán." description="Trang này giữ luồng rõ ràng: xem sản phẩm, chỉnh số lượng, xem tổng đơn và đi thẳng sang checkout." />
        <CartView />
      </main>
      <SiteFooter />
    </>
  );
}