import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container } from "./container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section className={cn("py-[var(--spacing-section-y)]", className)} id={id}>
      <Container>{children}</Container>
    </section>
  );
}
