import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageIntro } from "@/components/ui/page-intro";
import { contactDetails, serviceJourney } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080808] text-white">
        <PageIntro
          eyebrow="Consultation"
          title="Tư vấn riêng để khách hàng yên tâm trước khi chốt món trang sức quan trọng."
          description="Trang liên hệ giờ đã có bố cục landing hoàn chỉnh: thông tin showroom, cách thức đặt lịch và các điểm chạm niềm tin cần thiết cho khách hàng cao cấp."
        />
        <section className="mx-auto grid w-full max-w-[120rem] gap-6 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">Showroom</p>
            <h2 className="mt-5 text-3xl font-semibold text-white">Maison Aurum Private Studio</h2>
            <div className="mt-6 space-y-4 leading-8 text-white/70">
              <p>{contactDetails.showroom}</p>
              <p>{contactDetails.email}</p>
              <p>{contactDetails.phone}</p>
              <p>{contactDetails.hours}</p>
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-white/70">
              Ưu tiên lịch hẹn riêng cho bridal consultation, gifting proposal và thử sản phẩm theo set.
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">Booking Flow</p>
            <div className="mt-6 grid gap-4">
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