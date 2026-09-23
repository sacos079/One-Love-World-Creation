import { categoryCards } from "@/data/home";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function HomeCategories() {
  return (
    <Section id="categories">
      <SectionHeading
        description="Built to support personal pieces, workplace identity, events, and expressive community-driven apparel."
        eyebrow="Customization categories"
        title="What One Luv is ready to build around"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {categoryCards.map((category) => (
          <Card
            className="flex h-full flex-col justify-between"
            key={category.title}
          >
            <div>
              <h3 className="font-display text-2xl font-semibold text-brand-midnight">
                {category.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-brand-muted sm:text-base">
                {category.description}
              </p>
            </div>
            <div className="mt-6 h-24 rounded-md border border-dashed border-brand-line bg-brand-lavender/55" />
          </Card>
        ))}
      </div>
    </Section>
  );
}
