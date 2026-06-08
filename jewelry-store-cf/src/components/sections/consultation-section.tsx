import Link from "next/link";

export function ConsultationSection() {
  return (
    <section className="py-24">
      <div className="grid gap-6 rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(212,178,119,0.16),rgba(255,255,255,0.02))] p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">Private Consultation</p>
          <h2 className="mt-5 max-w-2xl text-4xl font-semibold text-white md:text-5xl">
            Đặt lịch riêng để được tư vấn bridal, gifting hoặc thiết kế bespoke.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/72">
            Trang tư vấn được thiết kế như điểm chuyển đổi mềm cho khách hàng cần nhiều niềm tin hơn trước khi đặt hàng. Đây là nơi thu lead chất lượng và nuôi dưỡng quyết định mua.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-[#d4b277] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#e5c68e]">
              Đặt lịch ngay
            </Link>
            <Link href="/gifting" className="rounded-full border border-white/15 px-7 py-3 text-sm text-white/85 transition hover:border-[#d4b277] hover:text-[#f3e7cf]">
              Xem giải pháp quà tặng
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            "Lịch hẹn 45 phút cùng chuyên viên tư vấn",
            "Preview sản phẩm, chất liệu và size trước khi chốt",
            "Có thể đặt lịch online hoặc tại showroom",
          ].map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-white/75">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}