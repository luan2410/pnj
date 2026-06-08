import { AccountDashboard } from "@/components/account/account-dashboard";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageIntro } from "@/components/ui/page-intro";

export default function AccountPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080808] text-white">
        <PageIntro eyebrow="Account" title="Khu vực tài khoản quản lý đơn hàng, wishlist và lịch sử mua sắm." description="Trang này đã có layout rõ ràng hơn để khách có thể theo dõi các thông tin quan trọng trong một nơi duy nhất." />
        <AccountDashboard />
      </main>
      <SiteFooter />
    </>
  );
}