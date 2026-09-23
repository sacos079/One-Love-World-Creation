import { featurePanels } from "@/data/home";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function HomeFeaturePanels() {
  return (
    <Section className="bg-brand-surface-alt">
      <SectionHeading
        description="The starter app proves the direction now while leaving room for richer tooling later."
        eyebrow="Foundation blocks"
        title="Built to grow into commerce, customization, and originals"
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {featurePanels.map((panel) => (
          <Card className="flex h-full flex-col" key={panel.title}>
            <h3 className="font-display text-2xl font-semibold text-brand-midnight">
              {panel.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-brand-muted sm:text-base">
              {panel.description}
            </p>
            <Button className="mt-6 w-fit" href={panel.href} variant="ghost">
              {panel.label}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
