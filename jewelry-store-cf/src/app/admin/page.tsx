import { adminStats } from "@/lib/site-data";

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(212,178,119,0.16),rgba(255,255,255,0.02))] p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">Operations</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[0.05em] text-white">Bảng điều khiển vận hành</h2>
        <p className="mt-4 max-w-2xl leading-8 text-white/70">Admin shell đã được làm đầy đủ hơn để hỗ trợ theo dõi doanh thu, tồn kho, xử lý đơn và chăm sóc khách hàng.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((stat) => (
          <article key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-white/60">{stat.label}</p>
            <p className="mt-3 text-3xl font-semibold text-[#f3e7cf]">{stat.value}</p>
          </article>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-2xl text-white">Workflow nhanh</h3>
          <div className="mt-5 grid gap-3 text-white/70">
            <p>• Duyệt đơn chờ xác nhận</p>
            <p>• Cập nhật trạng thái vận chuyển</p>
            <p>• Gắn note chăm sóc khách VIP</p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-2xl text-white">Nâng cấp tiếp theo</h3>
          <div className="mt-5 grid gap-3 text-white/70">
            <p>• CRUD sản phẩm thật</p>
            <p>• Upload media R2</p>
            <p>• Dashboard analytics và lọc dữ liệu</p>
          </div>
        </div>
      </div>
    </div>
  );
}