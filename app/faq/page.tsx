import type { Metadata } from "next";

import { faqs } from "@/data/faqs";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about One Luv's customization process, group orders, garment sourcing, and future site capabilities.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        description="Starter answers for the most likely early questions while the full business operations and policies are still being finalized."
        eyebrow="FAQ"
        primaryCta={{ href: "/contact", label: "Ask a question" }}
        secondaryCta={{ href: "/quote", label: "Start a request" }}
        title="Answers built around the quote-first customization model."
      />
      <Section>
        <SectionHeading
          description="These answers are intentionally practical and avoid overpromising unfinished functionality."
          eyebrow="Common questions"
          title="A lightweight FAQ that can grow with the business"
        />
        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details
              className="rounded-lg border border-brand-line bg-brand-white px-6 py-5 shadow-soft"
              key={item.question}
            >
              <summary className="cursor-pointer font-display text-xl font-semibold text-brand-midnight marker:text-brand-midnight">
                {item.question}
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-muted sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
