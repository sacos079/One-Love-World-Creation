export const homeHero = {
  eyebrow: "ONE LOVE WORLD CREATION",
  title: "Made to represent you.",
  description:
    "One Luv creates custom apparel built around your identity, your crew, your work culture, your community, and your personal style.",
  primaryCta: { href: "/customize", label: "Create your piece" },
  secondaryCta: { href: "/group-orders", label: "Group orders" },
};

export const categoryCards = [
  {
    title: "Custom shirts",
    description:
      "Street-ready or event-ready pieces with placement-driven graphics, text, and design direction.",
  },
  {
    title: "Workwear",
    description:
      "Uniform-minded apparel that still feels clean, current, and representative of your crew.",
  },
  {
    title: "Safety & work vests",
    description:
      "Visibility-focused garments customized with names, departments, or team identity.",
  },
  {
    title: "Patches & DTF graphics",
    description:
      "Heat-pressed patch and DTF options for expressive decoration and mixed-placement builds.",
  },
  {
    title: "Names & custom text",
    description:
      "Personalized lettering, role callouts, crew IDs, and event-specific customization.",
  },
  {
    title: "Group orders",
    description:
      "Custom pieces for workplaces, organizations, events, dance crews, and community groups.",
  },
] as const;

export const processSteps = [
  "Choose your piece",
  "Tell us what you want",
  "We create it",
  "Approve your design",
  "We make your piece",
] as const;

export const galleryPlaceholders = [
  "Front-and-back work shirt concept placeholder",
  "Crew vest customization placeholder",
  "Patch placement and name detail placeholder",
  "Event shirt concept placeholder",
] as const;

export const featurePanels = [
  {
    title: "Quote-first customization",
    description:
      "The starter experience is built around flexible requests, approvals, and production readiness instead of fake instant pricing.",
    href: "/quote",
    label: "Request a quote",
  },
  {
    title: "Group orders built in from day one",
    description:
      "The information architecture already makes room for crews, workplaces, events, rosters, and scaled custom runs.",
    href: "/group-orders",
    label: "Plan a group order",
  },
  {
    title: "One Luv Originals-ready",
    description:
      "Originals can grow into a curated collection with human creative direction, approvals, and licensing-aware metadata.",
    href: "/originals",
    label: "See the Originals plan",
  },
] as const;
