import Link from "next/link";

import { contactPlaceholders, footerColumns } from "@/data/site";

import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-line bg-brand-midnight text-brand-white">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
              One Luv
            </p>
            <h2 className="font-display text-2xl font-semibold">
              Your piece. Your way.
            </h2>
            <p className="max-w-md text-sm leading-7 text-brand-white/78 sm:text-base">
              Custom apparel for communities, crews, workplaces, events, and
              personal style—built on a quote-first process that leaves room for
              real customization.
            </p>
            <div className="space-y-2 text-sm text-brand-white/80">
              <p>Email placeholder: {contactPlaceholders.email}</p>
              <p>Phone placeholder: {contactPlaceholders.phone}</p>
              <p>Social placeholder: {contactPlaceholders.social}</p>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div className="space-y-4" key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm text-brand-white/80">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      className="transition hover:text-brand-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-brand-white/15 pt-6 text-sm text-brand-white/70">
          <p>
            Official website starter for ONE LOVE WORLD CREATION. Replace
            placeholders before launch.
          </p>
        </div>
      </Container>
    </footer>
  );
}
