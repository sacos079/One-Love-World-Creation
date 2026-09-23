import type { Metadata } from "next";

import { QuoteProcess } from "@/components/commerce/quote-process";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";

const groupUseCases = [
  "Employee crews and workplace teams",
  "Airport and ramp culture groups",
  "Dance communities and event crews",
  "Organizations, clubs, and family events",
  "Bulk custom runs with names, roles, or roster variation",
] as const;

export const metadata: Metadata = createMetadata({
  title: "Group Orders",
  description:
    "Plan custom group apparel for teams, organizations, events, and workplaces with One Luv's quote-first order flow.",
  path: "/group-orders",
});

export default function GroupOrdersPage() {
  return (
    <>
      <PageHero
        description="Group orders are a core part of the business direction, from workplace identity and event teams to communities, clubs, and friend groups."
        eyebrow="Group orders"
        primaryCta={{ href: "/quote", label: "Start a group quote" }}
        secondaryCta={{ href: "/contact", label: "Talk through your order" }}
        title="Built for crews, teams, workplaces, and bulk custom runs."
      />
      <Section>
        <SectionHeading
          description="The structure is ready for future multi-size runs, name lists, and roster uploads without hardwiring that complexity into the starter UI."
          eyebrow="Use cases"
          title="Important order types are already accounted for"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {groupUseCases.map((item) => (
            <Card key={item}>
              <p className="font-display text-xl font-semibold text-brand-midnight">
                {item}
              </p>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="bg-brand-surface-alt">
        <SectionHeading
          description="Future features like CSV rosters, approval flows, and tracking can layer onto this process without changing the overall customer journey."
          eyebrow="Order flow"
          title="Quote-first before approval and production"
        />
        <div className="mt-10">
          <QuoteProcess />
        </div>
      </Section>
    </>
  );
}
