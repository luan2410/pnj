import { PageIntro } from "@/components/ui/page-intro";
import { adminCustomers } from "@/lib/site-data";

export default function AdminCustomersPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <PageIntro eyebrow="Admin Customers" title="Quản lý hồ sơ khách hàng và phân nhóm VIP." description="Shell này đã được mở rộng thành danh sách khách hàng có segment và ghi chú follow-up để phục vụ chăm sóc." />
      <section className="mx-auto grid w-full max-w-7xl gap-4 px-6 py-12 md:grid-cols-3 lg:px-10">
        {adminCustomers.map((customer) => (
          <article key={customer.name} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-xl font-medium text-white">{customer.name}</h2>
            <p className="mt-3 text-sm text-[#f3e7cf]">{customer.segment}</p>
            <p className="mt-3 text-white/60">{customer.note}</p>
          </article>
        ))}
      </section>
    </main>
  );
}