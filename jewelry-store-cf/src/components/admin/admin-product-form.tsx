"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type AdminProductFormProps = {
  mode: "create" | "edit";
  initialValues?: {
    name?: string;
    slug?: string;
    category?: string;
    price?: string;
    material?: string;
    description?: string;
  };
};

export function AdminProductForm({ mode, initialValues }: Readonly<AdminProductFormProps>) {
  const router = useRouter();
  const [values, setValues] = useState({
    name: initialValues?.name ?? "",
    slug: initialValues?.slug ?? "",
    category: initialValues?.category ?? "",
    price: initialValues?.price ?? "",
    material: initialValues?.material ?? "",
    description: initialValues?.description ?? "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  async function handleSubmit() {
    setSaving(true);
    setStatus(null);

    const response = await fetch(mode === "create" ? "/api/admin/products" : `/api/admin/products/${values.slug}`, {
      method: mode === "create" ? "POST" : "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const payload = (await response.json()) as { error?: string; product?: { slug: string } };

    if (!response.ok) {
      setStatus(payload.error ?? "Không thể lưu dữ liệu demo.");
      setSaving(false);
      return;
    }

    setStatus(mode === "create" ? "Đã tạo sản phẩm demo thành công." : "Đã cập nhật sản phẩm demo thành công.");
    setSaving(false);
    router.refresh();

    if (mode === "create" && payload.product?.slug) {
      router.push(`/admin/products/${payload.product.slug}`);
    }
  }

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
      <div className="grid gap-5 md:grid-cols-2">
        {[
          ["name", "Tên sản phẩm"],
          ["slug", "Slug"],
          ["category", "Danh mục"],
          ["price", "Giá bán"],
          ["material", "Chất liệu"],
        ].map(([field, label]) => (
          <label key={field} className="grid gap-2 text-sm text-white/68">
            {label}
            <input
              value={values[field as keyof typeof values]}
              onChange={(event) => setValues((current) => ({ ...current, [field]: event.target.value }))}
              className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-white outline-none transition focus:border-[#d4b277]"
            />
          </label>
        ))}
        <label className="grid gap-2 text-sm text-white/68 md:col-span-2">
          Mô tả
          <textarea
            value={values.description}
            onChange={(event) => setValues((current) => ({ ...current, description: event.target.value }))}
            className="min-h-36 rounded-[1.5rem] border border-white/10 bg-black/30 px-5 py-3 text-white outline-none transition focus:border-[#d4b277]"
          />
        </label>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button onClick={handleSubmit} disabled={saving} className="rounded-full bg-[#d4b277] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#e5c68e] disabled:opacity-60">
          {saving ? "Đang lưu..." : mode === "create" ? "Lưu sản phẩm demo" : "Cập nhật sản phẩm demo"}
        </button>
        <button className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/72">Thêm biến thể</button>
        <button className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/72">Quản lý tồn kho</button>
      </div>
      {status ? <div className="mt-4 rounded-[1.25rem] border border-[#d4b277]/25 bg-[#d4b277]/10 px-4 py-3 text-sm text-[#f3e7cf]">{status}</div> : null}
    </section>
  );
}