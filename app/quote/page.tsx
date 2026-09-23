import type { Metadata } from "next";

import { QuoteProcess } from "@/components/commerce/quote-process";
import { RequestForm } from "@/components/forms/request-form";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Request a Quote",
  description:
    "Submit a structured custom apparel quote request for One Luv without relying on fake fixed pricing.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <>
      <PageHero
        description="Use the structured request flow to capture the information that actually affects production and pricing, from garment source to placements and quantity."
        eyebrow="Request a quote"
        primaryCta={{ href: "/customize", label: "Review customization route" }}
        secondaryCta={{ href: "/contact", label: "Need help first?" }}
        title="Quote-first commerce starts with a better intake."
      />
      <Section>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_24rem] xl:items-start">
          <RequestForm mode="quote" />
          <Card className="bg-brand-lavender/60">
            <h2 className="font-display text-2xl font-semibold text-brand-midnight">
              Why there is no instant price
            </h2>
            <p className="mt-4 text-sm leading-7 text-brand-muted sm:text-base">
              Pricing depends on garment source, decoration method, placement
              count, artwork complexity, and quantity. The UI deliberately
              avoids fake formulas so the customer journey stays honest.
            </p>
          </Card>
        </div>
      </Section>
      <Section className="bg-brand-surface-alt">
        <SectionHeading
          description="This is the intended path to move a request from concept into production without hardwiring checkout assumptions too early."
          eyebrow="Commerce path"
          title="Customize → request quote → review → approval → payment → production"
        />
        <div className="mt-10">
          <QuoteProcess />
        </div>
      </Section>
    </>
  );
}
