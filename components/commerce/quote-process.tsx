import { Card } from "@/components/ui/card";

const quoteStages = [
  "Customize or describe the piece",
  "Request a quote",
  "Review scope, garment source, and decoration details",
  "Approve the direction",
  "Receive payment instructions",
  "Move into production",
] as const;

export function QuoteProcess() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {quoteStages.map((stage, index) => (
        <Card className="h-full" key={stage}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-midnight/70">
            Stage {index + 1}
          </p>
          <h3 className="mt-3 font-display text-xl font-semibold text-brand-midnight">
            {stage}
          </h3>
        </Card>
      ))}
    </div>
  );
}
