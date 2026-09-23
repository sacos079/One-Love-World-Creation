import type { Metadata } from "next";

import { RequestForm } from "@/components/forms/request-form";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Reach out to One Luv with a custom apparel question, project idea, or request for next-step guidance.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        description="Reach out to start a conversation about a piece, a crew order, a workplace request, or a future originals idea."
        eyebrow="Contact"
        primaryCta={{ href: "/quote", label: "Go to quote form" }}
        secondaryCta={{ href: "/faq", label: "Read FAQs" }}
        title="Questions, ideas, and custom requests start here."
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <RequestForm mode="contact" />
          <Card className="bg-brand-surface-alt">
            <h2 className="font-display text-2xl font-semibold text-brand-midnight">
              Before launch
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-brand-muted sm:text-base">
              <li>
                Replace placeholder contact details in the footer and
                environment variables.
              </li>
              <li>
                Connect form submission to the real inbox or CRM workflow.
              </li>
              <li>
                Add policies for artwork rights, custom orders, privacy, and
                remakes.
              </li>
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
