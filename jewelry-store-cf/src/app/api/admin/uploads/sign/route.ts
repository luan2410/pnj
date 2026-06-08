import { NextRequest, NextResponse } from "next/server";

import { buildPublicAssetUrl } from "@/lib/server/storage/media";

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");
  const contentType = request.nextUrl.searchParams.get("contentType") ?? "application/octet-stream";

  if (!key) {
    return NextResponse.json({ error: "Missing key" }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    key,
    contentType,
    method: "PUT",
    uploadMode: "direct-r2-placeholder",
    publicUrl: buildPublicAssetUrl(key),
    note: "Replace this route with signed R2 upload logic once Cloudflare bindings are connected.",
  });
}
