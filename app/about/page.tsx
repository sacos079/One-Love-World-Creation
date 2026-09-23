import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";

const values = [
  "Representation-first customization",
  "Community and crew identity",
  "Professional enough for workplace orders",
  "Creative energy without generic print-shop visuals",
] as const;

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn the starter story, mission, and brand direction behind ONE LOVE WORLD CREATION and One Luv.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="One Love World Creation is presented as a family-owned custom apparel business focused on helping people represent their identity, communities, workplaces, and style through custom pieces."
        eyebrow="About One Luv"
        primaryCta={{ href: "/contact", label: "Reach out" }}
        secondaryCta={{ href: "/quote", label: "Request a quote" }}
        title="Family-owned custom apparel with a creative-studio feel."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
          <div>
            <SectionHeading
              description="The brand voice is direct and welcoming: cool enough for streetwear and culture-driven apparel, polished enough for team, group, and business work."
              eyebrow="Mission"
              title="Helping people represent who they are"
            />
            <p className="mt-5 text-base leading-8 text-brand-muted">
              This starter site intentionally avoids making up unverified
              business history, customer counts, or partner claims. Replace
              placeholder story details only when the real brand narrative is
              ready.
            </p>
          </div>
          <Card className="space-y-4 bg-brand-lavender/60">
            {values.map((value) => (
              <div
                className="rounded-md border border-brand-line bg-brand-white px-4 py-4 text-sm font-medium text-brand-midnight"
                key={value}
              >
                {value}
              </div>
            ))}
          </Card>
        </div>
      </Section>
    </>
  );
}
