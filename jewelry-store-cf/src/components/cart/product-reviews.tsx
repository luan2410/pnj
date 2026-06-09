"use client";

import { useCart } from "@/components/providers/cart-provider";

export function ProductReviews({ slug }: Readonly<{ slug: string }>) {
  const { getReviews } = useCart();
  const reviews = getReviews(slug);

  return (
    <section className="mx-auto w-full max-w-[120rem] px-6 pb-20 lg:px-10">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">Customer Reviews</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Khách hàng nói gì về thiết kế này</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {reviews.map((review) => (
            <article key={`${review.name}-${review.content}`} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex items-center justify-between">
                <p className="text-white">{review.name}</p>
                <p className="text-[#f3e7cf]">{"★".repeat(review.rating)}</p>
              </div>
              <p className="mt-4 leading-8 text-white/68">{review.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
