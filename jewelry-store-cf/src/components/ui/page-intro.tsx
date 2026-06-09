type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] py-20">
      <div className="mx-auto w-full max-w-[120rem] px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[0.04em] text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">{description}</p>
      </div>
    </section>
  );
}