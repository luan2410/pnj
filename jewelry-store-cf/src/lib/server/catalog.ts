import { products } from "@/lib/site-data";

export type CatalogProduct = (typeof products)[number];

export async function getCatalogProducts(): Promise<CatalogProduct[]> {
  return [...products];
}

export async function getCatalogProductBySlug(slug: string): Promise<CatalogProduct | null> {
  const list = await getCatalogProducts();
  return list.find((item) => item.slug === slug) ?? null;
}