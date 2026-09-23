import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand-midnight/75">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight font-semibold text-brand-midnight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-brand-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
