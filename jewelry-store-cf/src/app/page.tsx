import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BrandPillarsSection } from "@/components/sections/brand-pillars-section";
import { CollectionsSection } from "@/components/sections/collections-section";
import { ConsultationSection } from "@/components/sections/consultation-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#080808] text-white">
        <HeroSection />
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <CollectionsSection />
          <FeaturedProductsSection />
          <BrandPillarsSection />
          <ConsultationSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}