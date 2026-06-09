import { catalogProducts } from "@/lib/catalog-data";

export type CatalogProduct = (typeof catalogProducts)[number];

export async function getCatalogProducts(): Promise<CatalogProduct[]> {
  return [...catalogProducts];
}

export async function getCatalogProductBySlug(slug: string): Promise<CatalogProduct | null> {
  const list = await getCatalogProducts();
  return list.find((item) => item.slug === slug) ?? null;
}
