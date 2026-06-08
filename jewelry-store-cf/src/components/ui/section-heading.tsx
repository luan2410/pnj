type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl space-y-4 ${alignment}`}>
      <p className="text-xs uppercase tracking-[0.35em] text-[#d4b277]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[0.06em] text-white md:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-white/68">{description}</p>
    </div>
  );
}
