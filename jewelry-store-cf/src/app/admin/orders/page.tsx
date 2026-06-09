import { PageIntro } from "@/components/ui/page-intro";
import { adminOrders } from "@/lib/site-data";

export default function AdminOrdersPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <PageIntro eyebrow="Admin Orders" title="Quản lý đơn hàng từ xác nhận đến hoàn tất." description="Luồng vận hành đã được trình bày theo kiểu list rõ ràng để dễ nâng cấp thành workflow nội bộ thật." />
      <section className="mx-auto grid w-full max-w-[120rem] gap-4 px-6 py-12 lg:px-10">
        {adminOrders.map((order) => (
          <article key={order.code} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 text-white/72">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-white">{order.code}</span>
              <span>{order.customer}</span>
              <span className="text-[#f3e7cf]">{order.amount}</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">{order.status}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}