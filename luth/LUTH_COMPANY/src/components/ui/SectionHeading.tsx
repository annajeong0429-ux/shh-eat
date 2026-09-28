type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-text">
          {description}
        </p>
      )}
    </div>
  );
}
