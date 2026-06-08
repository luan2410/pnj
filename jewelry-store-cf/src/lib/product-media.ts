export const productMediaBySlug = {
  "radiant-sol-ring": {
    src: "/products/radiant-sol-ring.svg",
    alt: "Radiant Sol Ring preview",
  },
  "aurum-line-necklace": {
    src: "/products/aurum-line-necklace.svg",
    alt: "Aurum Line Necklace preview",
  },
  "celeste-drop-earrings": {
    src: "/products/celeste-drop-earrings.svg",
    alt: "Celeste Drop Earrings preview",
  },
} as const;

export function getProductMedia(slug: string) {
  return productMediaBySlug[slug as keyof typeof productMediaBySlug] ?? {
    src: "/products/radiant-sol-ring.svg",
    alt: "Maison Aurum product preview",
  };
}