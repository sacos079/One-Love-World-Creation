import { galleryPlaceholders } from "@/data/home";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function HomeGallery() {
  return (
    <Section>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          description="Use these placeholders as a clean starting point until approved customer work and studio photography are ready."
          eyebrow="Gallery direction"
          title="Showcasing future customer pieces without faking proof"
        />
        <Button href="/gallery" variant="ghost">
          View gallery route
        </Button>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {galleryPlaceholders.map((item) => (
          <Card className="space-y-4" key={item}>
            <div className="aspect-[4/5] rounded-md border border-dashed border-brand-line bg-brand-surface-alt" />
            <p className="text-sm leading-7 text-brand-muted">{item}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
