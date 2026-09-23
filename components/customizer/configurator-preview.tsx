import { Card } from "@/components/ui/card";

const previewCapabilities = [
  "Garment type and color selection",
  "Front, back, chest, and sleeve placements",
  "Names, text, and font direction",
  "DTF graphic and patch planning",
  "Quote-first review before production",
] as const;

export function ConfiguratorPreview() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <Card className="bg-brand-midnight text-brand-white">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
          Future customization module
        </p>
        <h3 className="mt-4 font-display text-3xl font-semibold">
          Planned to support rich apparel configuration without shipping heavy
          tooling yet.
        </h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {previewCapabilities.map((capability) => (
            <div
              className="rounded-md border border-brand-white/12 bg-brand-white/6 px-4 py-4 text-sm"
              key={capability}
            >
              {capability}
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-midnight/70">
          Placeholder note
        </p>
        <p className="mt-4 text-sm leading-7 text-brand-muted sm:text-base">
          The live 2D and 3D configuration tools are intentionally deferred.
          This starter route communicates the direction and keeps the
          architecture modular for later implementation.
        </p>
      </Card>
    </div>
  );
}
