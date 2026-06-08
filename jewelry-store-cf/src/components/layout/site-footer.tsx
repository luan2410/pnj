import Link from "next/link";

import { contactDetails, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#090909]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 text-sm text-white/70 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">{siteConfig.name}</p>
          <p className="max-w-sm leading-7">
            Nhà trang sức cao cấp tập trung vào bridal, gifting và các thiết kế bespoke mang dấu ấn cá nhân.
          </p>
          <div className="space-y-2">
            {siteConfig.highlights.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-white">Khám phá</p>
          <div className="flex flex-col gap-3">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#f3e7cf]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-white">Dịch vụ</p>
          <div className="space-y-3 leading-7">
            <p>Tư vấn 1:1 tại showroom</p>
            <p>Thiết kế theo yêu cầu</p>
            <p>Khắc tên, gói quà, giao hỏa tốc nội thành</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-white">Liên hệ</p>
          <div className="space-y-2 leading-7">
            <p>{contactDetails.showroom}</p>
            <p>{contactDetails.email}</p>
            <p>{contactDetails.phone}</p>
            <p>{contactDetails.hours}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}