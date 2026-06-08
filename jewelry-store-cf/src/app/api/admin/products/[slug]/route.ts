import { NextResponse } from "next/server";

import { getAdminProduct, updateAdminProduct } from "@/lib/server/admin/products-store";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function GET(_: Request, { params }: RouteProps) {
  const { slug } = await params;
  const product = getAdminProduct(slug);

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ product });
}

export async function PATCH(request: Request, { params }: RouteProps) {
  const { slug } = await params;
  const body = (await request.json()) as {
    name?: string;
    category?: string;
    price?: string;
    material?: string;
    description?: string;
  };

  const product = updateAdminProduct(slug, body);

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ product });
}
