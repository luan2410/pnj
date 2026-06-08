import Link from "next/link";

import { featuredCollections } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function CollectionsSection() {
  return (
    <section className="space-y-10 py-24">
      <SectionHeading
        eyebrow="Curated Collections"
        title="Bộ sưu tập trang sức mang tính biểu tượng"
        description="Mỗi collection được xây như một landing block riêng để dễ mở rộng thành chiến dịch, lookbook hoặc page bán hàng theo mùa."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {featuredCollections.map((collection, index) => (
          <article
            key={collection.title}
            className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-1 hover:border-[#d4b277]/40"
          >
            <div className={`mb-8 aspect-[4/3] rounded-[1.75rem] border border-white/10 ${index === 0 ? "bg-[radial-gradient(circle_at_35%_25%,rgba(212,178,119,0.7),transparent_18%),rgba(255,255,255,0.03)]" : index === 1 ? "bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.35),transparent_16%),rgba(212,178,119,0.12)]" : "bg-[radial-gradient(circle_at_65%_28%,rgba(148,196,255,0.48),transparent_18%),rgba(255,255,255,0.03)]"}`} />
            <p className="text-xs uppercase tracking-[0.32em] text-[#d4b277]">{collection.eyebrow}</p>
            <h3 className="mt-6 text-2xl font-medium text-white">{collection.title}</h3>
            <p className="mt-4 leading-8 text-white/68">{collection.description}</p>
            <p className="mt-4 text-sm leading-7 text-white/50">{collection.note}</p>
            <Link
              href="/collections"
              className="mt-8 inline-flex text-sm text-[#f3e7cf] transition group-hover:text-white"
            >
              Khám phá bộ sưu tập →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}