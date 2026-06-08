import { brandPillars, serviceJourney } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function BrandPillarsSection() {
  return (
    <section className="space-y-10 py-24">
      <SectionHeading
        eyebrow="Why Maison Aurum"
        title="Niềm tin được xây bằng minh bạch, tay nghề và dịch vụ"
        description="Ngoài hình ảnh đẹp, storefront cần kể rõ lý do khách hàng nên ra quyết định. Phần này đóng vai trò trust-building xuyên suốt funnel."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-6 md:grid-cols-3">
          {brandPillars.map((pillar) => (
            <article key={pillar.title} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-2xl text-white">{pillar.title}</h3>
              <p className="mt-4 leading-8 text-white/68">{pillar.description}</p>
            </article>
          ))}
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(212,178,119,0.12),rgba(255,255,255,0.02))] p-7">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">Service Journey</p>
          <div className="mt-6 grid gap-5">
            {serviceJourney.map((item) => (
              <div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-[#f3e7cf]">Bước {item.step}</p>
                <h3 className="mt-2 text-xl text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/68">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}