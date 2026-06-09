import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const outputFile = path.join(projectRoot, "src", "lib", "catalog-data.generated.ts");

const CATEGORY_MAP = {
  BRACELETS: { category: "Lắc tay bạc", material: "Bạc 925", accent: "Layered Silver" },
  BANGLES: { category: "Vòng tay bạc", material: "Bạc 925", accent: "Minimal Glow" },
  NECKLACE: { category: "Dây chuyền bạc", material: "Bạc 925", accent: "Everyday Shine" },
  PENDANT: { category: "Mặt dây bạc", material: "Bạc 925", accent: "Signature Charm" },
  "EAR STUDS": { category: "Bông tai bạc", material: "Bạc 925", accent: "Modern Spark" },
  "EAR JACKETS": { category: "Bông tai bạc", material: "Bạc 925", accent: "Statement Edge" },
  "EAR CUFF": { category: "Khuyên tai cuff", material: "Bạc 925", accent: "Bold Accent" },
  "MIDI RINGS": { category: "Nhẫn bạc", material: "Bạc 925", accent: "Stackable Chic" },
  ANKLETS: { category: "Lắc chân bạc", material: "Bạc 925", accent: "Playful Shine" },
  "TOE RINGS": { category: "Nhẫn chân bạc", material: "Bạc 925", accent: "Summer Edit" },
};

const CATEGORY_ORDER = ["BRACELETS", "NECKLACE", "EAR STUDS", "MIDI RINGS", "BANGLES", "ANKLETS", "EAR CUFF", "PENDANT"];
const LIMITS = {
  BRACELETS: 4,
  NECKLACE: 3,
  "EAR STUDS": 3,
  "MIDI RINGS": 2,
  BANGLES: 2,
  ANKLETS: 2,
  "EAR CUFF": 1,
  PENDANT: 1,
};

function toTitleCase(value) {
  return value
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatPrice(value) {
  return `${new Intl.NumberFormat("vi-VN").format(Math.round(value))}đ`;
}

function buildDescription(name, category) {
  return `${name} là mẫu ${category.toLowerCase()} theo phong cách đương đại, phù hợp để lên set hằng ngày hoặc làm điểm nhấn nhẹ cho outfit đi tiệc.`;
}

function buildDetails(product) {
  const variant = product.variants?.[0];
  const details = [
    "Dữ liệu hình ảnh và giá tham chiếu từ catalog công khai.",
    product.available ? "Trạng thái hiển thị: còn hàng trên nguồn tham chiếu." : "Trạng thái hiển thị: cần kiểm tra tồn kho lại.",
  ];

  if (variant?.sku) details.push(`SKU: ${variant.sku}`);
  if (variant?.weight) details.push(`Khối lượng tham chiếu: ${variant.weight}${variant.weight_unit ?? "g"}`);

  return details;
}

function pickProducts(products) {
  const selected = [];
  const counts = new Map();

  for (const type of CATEGORY_ORDER) {
    const limit = LIMITS[type] ?? 0;
    const matches = products.filter((product) => product.available && product.product_type === type);

    for (const product of matches) {
      const current = counts.get(type) ?? 0;
      if (current >= limit) break;
      selected.push(product);
      counts.set(type, current + 1);
    }
  }

  return selected;
}

function normalizeProduct(product) {
  const mapped = CATEGORY_MAP[product.product_type] ?? { category: "Trang sức bạc", material: "Bạc 925", accent: "Curated Pick" };
  const name = toTitleCase(product.name);

  return {
    slug: product.alias,
    name,
    category: mapped.category,
    price: formatPrice(product.price_min || product.price),
    material: mapped.material,
    description: buildDescription(name, mapped.category),
    details: buildDetails(product),
    accent: mapped.accent,
    image: product.featured_image,
    sourceUrl: `https://katjewelry.vn${product.url}`,
  };
}

async function fetchProducts() {
  const response = await fetch("https://katjewelry.vn/products.json?limit=250", {
    headers: { "user-agent": "Mozilla/5.0" },
  });

  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.status}`);
  }

  const payload = await response.json();
  return payload.products ?? [];
}

async function main() {
  const sourceProducts = await fetchProducts();
  const curatedProducts = pickProducts(sourceProducts).map(normalizeProduct);

  const fileBody = `export type CatalogProductRecord = {\n  slug: string;\n  name: string;\n  category: string;\n  price: string;\n  material: string;\n  description: string;\n  details: string[];\n  accent: string;\n  image: string;\n  sourceUrl: string;\n};\n\nexport const catalogProducts: CatalogProductRecord[] = ${JSON.stringify(curatedProducts, null, 2)};\n\nexport const featuredCatalogProducts = catalogProducts.slice(0, 6);\n\nexport const catalogProductMediaBySlug = Object.fromEntries(\n  catalogProducts.map((product) => [product.slug, { src: product.image, alt: product.name }]),\n) as Record<string, { src: string; alt: string }>;\n`;

  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, fileBody, "utf8");
  console.log(`Wrote ${curatedProducts.length} curated products to ${outputFile}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
