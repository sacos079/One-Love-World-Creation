import type { Metadata } from "next";

import { QuoteProcess } from "@/components/commerce/quote-process";
import { ConfiguratorPreview } from "@/components/customizer/configurator-preview";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Customize",
  description:
    "Start a custom apparel request for shirts, workwear, vests, graphics, patches, and more through One Luv's quote-first workflow.",
  path: "/customize",
});

export default function CustomizePage() {
  return (
    <>
      <PageHero
        description="Start with the garment, placements, text, graphics, or custom direction you have in mind. The live configurator is still ahead, but the architecture is already organized around it."
        eyebrow="Customize"
        primaryCta={{ href: "/quote", label: "Request a quote" }}
        secondaryCta={{ href: "/contact", label: "Ask a question" }}
        title="Build the piece around your identity, work, or crew."
      />
      <Section>
        <SectionHeading
          description="The current route introduces the customization framework without overbuilding the front end before real production requirements are confirmed."
          eyebrow="Starter experience"
          title="A modular path toward 2D and future 3D customization"
        />
        <div className="mt-10">
          <ConfiguratorPreview />
        </div>
      </Section>
      <Section className="bg-brand-surface-alt">
        <SectionHeading
          description="Customization flows into review and quoting before payment or production assumptions are made."
          eyebrow="Workflow"
          title="Designed for quote-first commerce"
        />
        <div className="mt-10">
          <QuoteProcess />
        </div>
      </Section>
    </>
  );
}
