import Image from "next/image";

import { getProductMedia } from "@/lib/product-media";

export function ProductVisual({ slug, name, className = "" }: Readonly<{ slug: string; name: string; className?: string }>) {
  const media = getProductMedia(slug);

  return (
    <div className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] ${className}`}>
      <Image src={media.src} alt={media.alt || name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
    </div>
  );
}