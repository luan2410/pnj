import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageIntro } from "@/components/ui/page-intro";
import { giftingMoments } from "@/lib/site-data";

export default function GiftingPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080808] text-white">
        <PageIntro
          eyebrow="Gifting"
          title="Giải pháp quà tặng cao cấp cho những dịp cần sự tinh tế và ghi nhớ."
          description="Trang gifting được dựng như một campaign landing linh hoạt: đủ đẹp để chạy theo mùa, đủ rõ để đẩy chuyển đổi theo từng dịp tặng quà."
        />
        <section className="mx-auto w-full max-w-[120rem] px-6 py-16 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-3">
            {giftingMoments.map((item, index) => (
              <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                <div className={`mb-8 aspect-[4/3] rounded-[1.75rem] border border-white/10 ${index === 0 ? "bg-[radial-gradient(circle_at_50%_22%,rgba(212,178,119,0.58),transparent_18%),rgba(255,255,255,0.03)]" : index === 1 ? "bg-[radial-gradient(circle_at_45%_26%,rgba(255,255,255,0.28),transparent_18%),rgba(212,178,119,0.14)]" : "bg-[radial-gradient(circle_at_58%_26%,rgba(255,182,193,0.32),transparent_18%),rgba(255,255,255,0.03)]"}`} />
                <h2 className="text-3xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 leading-8 text-white/68">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-16 grid gap-6 rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(212,178,119,0.16),rgba(255,255,255,0.02))] p-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">Gift Concierge</p>
              <h2 className="mt-5 text-4xl font-semibold text-white">Từ chọn quà đến gói quà, mọi thứ đều có thể cá nhân hóa.</h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/72">
                Maison Aurum hỗ trợ chọn sản phẩm theo ngân sách, phong cách người nhận, khắc tên, thiệp và thời gian giao. Rất phù hợp cho quà cá nhân và quà doanh nghiệp.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="rounded-full bg-[#d4b277] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#e5c68e]">
                  Nhận tư vấn quà tặng
                </Link>
                <Link href="/shop" className="rounded-full border border-white/15 px-7 py-3 text-sm text-white/85 transition hover:border-[#d4b277] hover:text-[#f3e7cf]">
                  Xem sản phẩm phù hợp
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              {[
                "Khắc tên hoặc thông điệp riêng",
                "Bộ quà theo ngân sách từ 20M đến 100M+",
                "Hỗ trợ chuẩn bị proposal box và corporate gift set",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}