import Link from "next/link";

import { navigationLinks } from "@/data/site";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-line/80 bg-brand-white/95 backdrop-blur">
      <Container className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link className="group inline-flex items-center gap-3" href="/">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-line bg-brand-lavender text-sm font-bold text-brand-midnight transition group-hover:border-brand-midnight">
              OL
            </span>
            <div>
              <p className="font-display text-base font-semibold text-brand-midnight sm:text-lg">
                ONE LOVE WORLD CREATION
              </p>
              <p className="text-sm text-brand-muted">
                One Luv · Made to represent you.
              </p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <nav
            aria-label="Primary"
            className="flex flex-wrap gap-2 text-sm font-medium text-brand-muted"
          >
            {navigationLinks.map((item) => (
              <Link
                className="rounded-pill px-3 py-2 transition hover:bg-brand-lavender hover:text-brand-midnight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-midnight"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap gap-3">
            <Button href="/quote" variant="ghost">
              Request quote
            </Button>
            <Button href="/customize" variant="secondary">
              Create your piece
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
