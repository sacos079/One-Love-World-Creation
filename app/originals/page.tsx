import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";

const originalsPrinciples = [
  "Originals should reflect meaningful human creative direction and review.",
  "AI may support internal exploration, mockups, or ideation, but raw outputs are not automatically Originals.",
  "Future metadata should track concept, iterations, review, asset source, and approval status.",
] as const;

export const metadata: Metadata = createMetadata({
  title: "One Luv Originals",
  description:
    "Placeholder route for the future One Luv Originals collection and supporting design-direction metadata.",
  path: "/originals",
});

export default function OriginalsPage() {
  return (
    <>
      <PageHero
        description="This collection space is reserved for internally directed designs and future releases developed under One Luv's creative standards."
        eyebrow="One Luv Originals"
        primaryCta={{ href: "/contact", label: "Ask about future drops" }}
        secondaryCta={{ href: "/gallery", label: "See inspiration" }}
        title="A future collection shaped by creative direction, not generic output."
      />
      <Section>
        <SectionHeading
          description="The route is intentionally framed carefully so it does not overclaim copyright, exclusivity, or human-only generation."
          eyebrow="Guiding principles"
          title="Originals need real review, context, and approval metadata"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {originalsPrinciples.map((principle) => (
            <Card key={principle}>
              <p className="text-base leading-8 text-brand-muted">
                {principle}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
