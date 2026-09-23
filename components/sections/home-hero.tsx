import { homeHero } from "@/data/home";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export function HomeHero() {
  return (
    <Section className="border-b border-brand-line bg-[linear-gradient(180deg,var(--color-brand-lavender),rgba(255,255,255,0.88))]">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-midnight/70">
            {homeHero.eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-none font-semibold text-brand-midnight sm:text-6xl lg:text-7xl">
            {homeHero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted sm:text-xl">
            {homeHero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={homeHero.primaryCta.href}>
              {homeHero.primaryCta.label}
            </Button>
            <Button href={homeHero.secondaryCta.href} variant="ghost">
              {homeHero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden bg-brand-midnight text-brand-white">
          <div className="flex items-center justify-between gap-4 border-b border-brand-white/15 pb-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
                Creative studio direction
              </p>
              <p className="mt-2 text-lg font-semibold">
                Workwear × streetwear × community
              </p>
            </div>
            <div className="h-14 w-14 rounded-full border border-brand-white/20 bg-brand-blue/18" />
          </div>
          <div className="grid gap-4 pt-6 sm:grid-cols-2">
            {[
              "Shirts",
              "Workwear",
              "Safety vests",
              "DTF graphics",
              "Patches",
              "Names & text",
            ].map((item) => (
              <div
                className="rounded-md border border-brand-white/12 bg-brand-white/6 px-4 py-4 text-sm font-medium"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
