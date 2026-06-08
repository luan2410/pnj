import Link from "next/link";

const adminLinks = [
  { label: "Dashboard", href: "/admin" },
  { label: "Sản phẩm", href: "/admin/products" },
  { label: "Tạo mới", href: "/admin/products/new" },
  { label: "Đơn hàng", href: "/admin/orders" },
  { label: "Khách hàng", href: "/admin/customers" },
];

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_1fr] lg:px-10">
        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">Admin</p>
          <h1 className="mt-4 text-2xl font-semibold text-white">Maison Console</h1>
          <p className="mt-3 text-sm leading-7 text-white/60">Khung quản trị premium dùng chung tone màu, card system và spacing với storefront.</p>
          <nav className="mt-8 grid gap-3">
            {adminLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-white/10 px-4 py-3 text-sm text-white/72 transition hover:border-[#d4b277] hover:text-[#f3e7cf]">
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
}