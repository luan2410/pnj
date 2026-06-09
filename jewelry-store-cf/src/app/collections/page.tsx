import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageIntro } from "@/components/ui/page-intro";
import { featuredCollections, serviceJourney } from "@/lib/site-data";

export default function CollectionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080808] text-white">
        <PageIntro
          eyebrow="Collections"
          title="Mỗi bộ sưu tập là một câu chuyện thẩm mỹ, dịp mua và cảm xúc khác nhau."
          description="Trang collections được hoàn thiện như một showroom số: giúp khách hàng định hướng nhanh theo nhu cầu thay vì chỉ duyệt danh mục sản phẩm rời rạc."
        />
        <section className="mx-auto w-full max-w-[120rem] px-6 py-16 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-3">
            {featuredCollections.map((collection, index) => (
              <article key={collection.title} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                <div className={`mb-8 aspect-[4/3] rounded-[1.75rem] border border-white/10 ${index === 0 ? "bg-[radial-gradient(circle_at_35%_25%,rgba(212,178,119,0.7),transparent_18%),rgba(255,255,255,0.03)]" : index === 1 ? "bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.35),transparent_16%),rgba(212,178,119,0.12)]" : "bg-[radial-gradient(circle_at_65%_28%,rgba(148,196,255,0.48),transparent_18%),rgba(255,255,255,0.03)]"}`} />
                <p className="text-xs uppercase tracking-[0.32em] text-[#d4b277]">{collection.eyebrow}</p>
                <h2 className="mt-6 text-3xl font-semibold text-white">{collection.title}</h2>
                <p className="mt-4 leading-8 text-white/68">{collection.description}</p>
                <p className="mt-4 text-sm leading-7 text-white/50">{collection.note}</p>
                <Link href="/shop" className="mt-8 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm text-white/80 transition hover:border-[#d4b277] hover:text-[#f3e7cf]">
                  Xem sản phẩm liên quan
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-16 grid gap-6 rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">How We Curate</p>
              <h2 className="mt-5 text-4xl font-semibold text-white">Lộ trình chọn bộ sưu tập phù hợp cho từng khách hàng.</h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/68">
                Thay vì để khách hàng tự bơi trong quá nhiều lựa chọn, Maison Aurum sắp xếp catalog theo mục đích mua, cường độ cảm xúc và phong cách đeo.
              </p>
            </div>
            <div className="grid gap-4">
              {serviceJourney.map((item) => (
                <div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <p className="text-sm text-[#f3e7cf]">Bước {item.step}</p>
                  <h3 className="mt-2 text-xl text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/68">{item.description}</p>
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