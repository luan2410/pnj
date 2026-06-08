import { NextResponse } from "next/server";

import { createAdminProduct, listAdminProducts } from "@/lib/server/admin/products-store";

export async function GET() {
  return NextResponse.json({ products: listAdminProducts() });
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    slug?: string;
    name?: string;
    category?: string;
    price?: string;
    material?: string;
    description?: string;
  };

  if (!body.slug || !body.name) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const product = createAdminProduct({
      slug: body.slug,
      name: body.name,
      category: body.category ?? "Trang sức cao cấp",
      price: body.price ?? "0đ",
      material: body.material ?? "",
      description: body.description ?? "",
    });

    return NextResponse.json({ product }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "SLUG_EXISTS") {
      return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
    }

    return NextResponse.json({ error: "Unable to create product" }, { status: 500 });
  }
}
