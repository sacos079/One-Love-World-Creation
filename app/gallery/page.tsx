import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";

const galleryCards = [
  "Customer work placeholder: custom work shirt story",
  "Customer work placeholder: ramp or team vest concept",
  "Customer work placeholder: event tee direction",
  "Customer work placeholder: patch and text placement detail",
  "Inspiration placeholder: originals design board",
  "Inspiration placeholder: group-order lineup concept",
] as const;

export const metadata: Metadata = createMetadata({
  title: "Gallery",
  description:
    "Placeholder gallery for future approved customer work, inspiration boards, and apparel direction from One Luv.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        description="This gallery route is ready for approved customer work, studio photography, and inspiration boards once real assets are available."
        eyebrow="Gallery"
        primaryCta={{ href: "/quote", label: "Build your piece" }}
        secondaryCta={{ href: "/contact", label: "Ask about a concept" }}
        title="A clean placeholder space for future work, not fake proof."
      />
      <Section>
        <SectionHeading
          description="Every tile is intentionally labeled as a placeholder so the foundation remains honest until final imagery is approved."
          eyebrow="Placeholder media"
          title="Ready for real projects and inspiration drops"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryCards.map((card) => (
            <Card className="space-y-4" key={card}>
              <div className="aspect-[4/5] rounded-md border border-dashed border-brand-line bg-brand-surface-alt" />
              <p className="text-sm leading-7 text-brand-muted">{card}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
