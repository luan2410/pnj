export function ProductCardSkeleton() {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 animate-pulse">
      <div className="mb-6 aspect-[4/5] rounded-[1.5rem] bg-white/10" />
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          <div className="h-3 w-24 rounded bg-white/10" />
          <div className="h-6 w-2/3 rounded bg-white/10" />
        </div>
        <div className="h-7 w-20 rounded-full bg-white/10" />
      </div>
      <div className="mt-4 h-10 rounded bg-white/10" />
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="h-6 w-24 rounded bg-white/10" />
        <div className="h-10 w-28 rounded-full bg-white/10" />
      </div>
    </article>
  );
}

export function ProductGridSkeleton({ count = 6 }: Readonly<{ count?: number }>) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
      <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 animate-pulse">
        <div className="aspect-[4/5] rounded-[2rem] bg-white/10" />
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-11 rounded-full bg-white/10" />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center animate-pulse">
        <div className="h-3 w-28 rounded bg-white/10" />
        <div className="mt-6 h-14 w-2/3 rounded bg-white/10" />
        <div className="mt-4 h-8 w-32 rounded bg-white/10" />
        <div className="mt-6 space-y-3">
          <div className="h-4 rounded bg-white/10" />
          <div className="h-4 rounded bg-white/10" />
          <div className="h-4 w-5/6 rounded bg-white/10" />
        </div>
        <div className="mt-8 h-28 rounded-[1.5rem] bg-white/10" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="h-28 rounded-[1.5rem] bg-white/10" />
          <div className="h-28 rounded-[1.5rem] bg-white/10" />
        </div>
        <div className="mt-10 flex gap-4">
          <div className="h-12 w-36 rounded-full bg-white/10" />
          <div className="h-12 w-40 rounded-full bg-white/10" />
        </div>
      </div>
    </section>
  );
}
