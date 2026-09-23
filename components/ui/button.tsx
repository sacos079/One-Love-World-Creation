import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-brand-midnight text-brand-white hover:-translate-y-0.5 hover:bg-brand-ink focus-visible:outline-brand-midnight",
  secondary:
    "bg-brand-orange text-brand-midnight hover:-translate-y-0.5 hover:bg-brand-green focus-visible:outline-brand-orange",
  ghost:
    "border border-brand-line bg-brand-white text-brand-midnight hover:border-brand-midnight hover:bg-brand-lavender focus-visible:outline-brand-midnight",
};

const baseClassName =
  "inline-flex min-h-12 items-center justify-center rounded-pill px-5 py-3 text-sm font-semibold tracking-[0.02em] transition duration-[var(--duration-base)] focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({
  children,
  className,
  href,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const composedClassName = cn(baseClassName, variants[variant], className);

  if (href) {
    return (
      <Link className={composedClassName} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={composedClassName} type={type}>
      {children}
    </button>
  );
}
