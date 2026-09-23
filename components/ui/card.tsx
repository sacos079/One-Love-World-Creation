import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-brand-line bg-brand-white p-6 shadow-card sm:p-7",
        className,
      )}
    >
      {children}
    </div>
  );
}
