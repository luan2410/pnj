import { CheckoutForm } from "@/components/cart/checkout-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageIntro } from "@/components/ui/page-intro";

export default function CheckoutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080808] text-white">
        <PageIntro eyebrow="Checkout" title="Checkout gọn gàng, sang trọng và đủ niềm tin để khách hoàn tất đơn." description="Giao diện checkout đã hoàn thiện phần form, coupon, tổng đơn và trạng thái đặt hàng demo." />
        <CheckoutForm />
      </main>
      <SiteFooter />
    </>
  );
}