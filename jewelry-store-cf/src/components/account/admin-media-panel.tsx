"use client";

import { useState } from "react";

import { createObjectKey, buildPublicAssetUrl } from "@/lib/server/storage/media";

export function AdminMediaPanel() {
  const [filename, setFilename] = useState("hero-necklace.jpg");
  const [previewKey, setPreviewKey] = useState("");

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
      <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">Media Strategy</p>
      <h2 className="mt-4 text-2xl font-semibold text-white">Chuẩn bị upload ảnh sản phẩm lên R2</h2>
      <p className="mt-4 max-w-3xl leading-8 text-white/68">
        Giai đoạn này tạo key và public URL theo convention để bước sau chỉ cần thay route ký upload thật bằng binding Cloudflare R2.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto]">
        <input
          value={filename}
          onChange={(event) => setFilename(event.target.value)}
          className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-white outline-none transition focus:border-[#d4b277]"
          placeholder="product-image.jpg"
        />
        <button
          onClick={() => setPreviewKey(createObjectKey("products", filename))}
          className="rounded-full bg-[#d4b277] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#e5c68e]"
        >
          Tạo object key
        </button>
      </div>
      {previewKey ? (
        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-sm text-white/72">
          <p><span className="text-white">Object key:</span> {previewKey}</p>
          <p className="mt-2"><span className="text-white">Public URL:</span> {buildPublicAssetUrl(previewKey)}</p>
        </div>
      ) : null}
    </section>
  );
}