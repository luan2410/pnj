import Image from "next/image";

import { getProductMedia } from "@/lib/product-media";

export function ProductVisual({ slug, name, className = "" }: Readonly<{ slug: string; name: string; className?: string }>) {
  const media = getProductMedia(slug);

  return (
    <div className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.32),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] ${className}`}>
      <div className="absolute inset-x-[18%] top-[11%] h-14 rounded-full bg-[#f6e8c9]/18 blur-3xl" />
      <div className="absolute inset-x-[14%] bottom-[-6%] h-16 rounded-full bg-black/45 blur-2xl" />
      <Image src={media.src} alt={media.alt || name} fill sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 33vw" className="object-contain object-center p-5 transition duration-500 group-hover:scale-[1.04]" />
    </div>
  );
}