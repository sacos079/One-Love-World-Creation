import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type RequestFormProps = {
  mode: "contact" | "quote";
};

export function RequestForm({ mode }: RequestFormProps) {
  const isQuote = mode === "quote";

  return (
    <Card className="p-0 overflow-hidden">
      <div className="border-b border-brand-line bg-brand-lavender/60 px-6 py-5 sm:px-8">
        <h2 className="font-display text-2xl font-semibold text-brand-midnight">
          {isQuote ? "Structured quote request" : "Contact starter form"}
        </h2>
        <p className="mt-2 text-sm leading-7 text-brand-muted sm:text-base">
          {isQuote
            ? "This placeholder form collects the right categories of information without pretending live pricing or inbox delivery already exist."
            : "Use this starter form structure until the real contact destination and submission workflow are connected."}
        </p>
      </div>

      <form className="grid gap-5 px-6 py-6 sm:px-8 sm:py-8">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-brand-midnight">
            Full name
            <input
              className="min-h-12 rounded-md border border-brand-line px-4"
              name="name"
              type="text"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-brand-midnight">
            Email address
            <input
              className="min-h-12 rounded-md border border-brand-line px-4"
              name="email"
              type="email"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-brand-midnight">
            Phone number
            <input
              className="min-h-12 rounded-md border border-brand-line px-4"
              name="phone"
              type="tel"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-brand-midnight">
            Request type
            <select
              className="min-h-12 rounded-md border border-brand-line px-4"
              name="requestType"
            >
              <option>Custom piece</option>
              <option>Group order</option>
              <option>Workwear</option>
              <option>Originals inquiry</option>
              <option>General question</option>
            </select>
          </label>
        </div>

        {isQuote ? (
          <div className="grid gap-5 md:grid-cols-3">
            <label className="grid gap-2 text-sm font-medium text-brand-midnight">
              Garment source
              <select
                className="min-h-12 rounded-md border border-brand-line px-4"
                name="garmentSource"
              >
                <option>One Luv supplied</option>
                <option>Customer supplied</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-brand-midnight">
              Estimated quantity
              <input
                className="min-h-12 rounded-md border border-brand-line px-4"
                name="quantity"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-brand-midnight">
              Needed by
              <input
                className="min-h-12 rounded-md border border-brand-line px-4"
                name="timeline"
                type="text"
              />
            </label>
          </div>
        ) : null}

        <label className="grid gap-2 text-sm font-medium text-brand-midnight">
          Project details
          <textarea
            className="min-h-40 rounded-md border border-brand-line px-4 py-3"
            name="details"
            placeholder="Describe the garment, placements, graphics, names, quantity, group context, or any details that matter."
          />
        </label>

        <label className="flex items-start gap-3 rounded-md border border-brand-line bg-brand-surface-alt px-4 py-4 text-sm leading-6 text-brand-muted">
          <input
            className="mt-1 h-4 w-4 rounded border-brand-line"
            name="rightsAcknowledgment"
            type="checkbox"
          />
          <span>
            Future live uploads should require the customer to confirm they have
            permission to use any artwork or logos they provide.
          </span>
        </label>

        <div className="flex flex-col gap-3 border-t border-brand-line pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-brand-muted">
            Placeholder implementation: submission routing will be connected
            after inbox / CRM details are confirmed.
          </p>
          <Button type="button" variant="secondary">
            {isQuote ? "Review request details" : "Prepare contact request"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
