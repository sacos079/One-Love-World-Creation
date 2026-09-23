import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <Section className="border-b border-brand-line bg-brand-lavender/50">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
        <div>
          <SectionHeading
            description={description}
            eyebrow={eyebrow}
            title={title}
          />
          {primaryCta || secondaryCta ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta ? (
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              ) : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="ghost">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="rounded-lg border border-brand-line bg-brand-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-midnight/70">
            Starter foundation
          </p>
          <p className="mt-3 text-sm leading-7 text-brand-muted sm:text-base">
            This page ships as a production-ready placeholder that makes the
            business direction clear without pretending unfinished systems
            already exist.
          </p>
        </div>
      </div>
    </Section>
  );
}
