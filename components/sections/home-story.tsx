import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function HomeStory() {
  return (
    <Section>
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            description="One Love World Creation is presented as a family-owned custom apparel business built around helping people represent who they are, what they do, and who they move with."
            eyebrow="Family business"
            title="A brand for identity, crews, culture, and everyday expression"
          />
          <p className="mt-5 max-w-2xl text-base leading-8 text-brand-muted">
            The site language stays welcoming and direct. It should feel
            professional enough for workplace and organization orders while
            still carrying the energy of creative customization.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="ghost">
              Read the starter story page
            </Button>
          </div>
        </div>
        <Card className="grid gap-4 bg-brand-lavender/60">
          {[
            "Family-owned foundation",
            "Community-first mindset",
            "Quote-first process",
            "Ready for customer-supplied or One Luv-supplied garments",
          ].map((item) => (
            <div
              className="rounded-md border border-brand-line bg-brand-white px-4 py-4 text-sm font-medium text-brand-midnight"
              key={item}
            >
              {item}
            </div>
          ))}
        </Card>
      </div>
    </Section>
  );
}
