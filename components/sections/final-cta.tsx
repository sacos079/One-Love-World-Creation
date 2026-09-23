import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function FinalCta() {
  return (
    <Section className="bg-brand-midnight text-brand-white">
      <div className="rounded-lg border border-brand-white/12 bg-brand-white/6 p-8 shadow-none sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
          Ready when you are
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold sm:text-5xl">
          Start the piece, crew order, or concept you want to represent.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-brand-white/78 sm:text-lg">
          This starter experience keeps the path simple: describe the piece,
          request a quote, review the direction, then move into production.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/quote" variant="secondary">
            Request a quote
          </Button>
          <Button href="/contact" variant="ghost">
            Ask a question
          </Button>
        </div>
      </div>
    </Section>
  );
}
