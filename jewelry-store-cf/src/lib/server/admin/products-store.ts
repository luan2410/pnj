import { catalogProducts } from "@/lib/catalog-data";

export type AdminProductRecord = {
  slug: string;
  name: string;
  category: string;
  price: string;
  material: string;
  description: string;
  details: string[];
};

declare global {
  var __admin_products_store__: AdminProductRecord[] | undefined;
}

function seedStore(): AdminProductRecord[] {
  return catalogProducts.map((product) => ({
    slug: product.slug,
    name: product.name,
    category: product.category,
    price: product.price,
    material: product.material,
    description: product.description,
    details: [...product.details],
  }));
}

function getStore() {
  if (!global.__admin_products_store__) {
    global.__admin_products_store__ = seedStore();
  }

  return global.__admin_products_store__;
}

export function listAdminProducts() {
  return getStore();
}

export function getAdminProduct(slug: string) {
  return getStore().find((item) => item.slug === slug) ?? null;
}

export function createAdminProduct(input: Omit<AdminProductRecord, "details"> & { details?: string[] }) {
  const store = getStore();
  const exists = store.some((item) => item.slug === input.slug);

  if (exists) {
    throw new Error("SLUG_EXISTS");
  }

  const product: AdminProductRecord = {
    ...input,
    details: input.details ?? [],
  };

  store.unshift(product);
  return product;
}

export function updateAdminProduct(
  slug: string,
  input: Partial<Omit<AdminProductRecord, "slug" | "details">> & { details?: string[] },
) {
  const store = getStore();
  const index = store.findIndex((item) => item.slug === slug);

  if (index === -1) {
    return null;
  }

  store[index] = {
    ...store[index],
    ...input,
    details: input.details ?? store[index].details,
  };

  return store[index];
}
