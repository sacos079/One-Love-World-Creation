import { processSteps } from "@/data/home";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function HomeProcess() {
  return (
    <Section className="bg-brand-midnight text-brand-white">
      <SectionHeading
        align="center"
        description="A clear, flexible process that supports custom direction before production begins."
        eyebrow="How it works"
        title="Quote-first, built for real customization"
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <Card
            className="border-brand-white/12 bg-brand-white/6 text-brand-white shadow-none"
            key={step}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">
              0{index + 1}
            </p>
            <h3 className="mt-4 font-display text-xl font-semibold">{step}</h3>
          </Card>
        ))}
      </div>
    </Section>
  );
}
