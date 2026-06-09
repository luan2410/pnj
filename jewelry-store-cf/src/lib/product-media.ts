import { catalogProductMediaBySlug } from "@/lib/catalog-data";

export const productMediaBySlug = catalogProductMediaBySlug;

export function getProductMedia(slug: string) {
  return productMediaBySlug[slug as keyof typeof productMediaBySlug] ?? {
    src: "/products/radiant-sol-ring.svg",
    alt: "Maison Aurum product preview",
  };
}
