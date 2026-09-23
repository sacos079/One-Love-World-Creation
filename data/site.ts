export const navigationLinks = [
  { href: "/customize", label: "Customize" },
  { href: "/group-orders", label: "Group Orders" },
  { href: "/originals", label: "Originals" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const footerColumns = [
  {
    title: "Explore",
    links: navigationLinks,
  },
  {
    title: "Start a request",
    links: [
      { href: "/quote", label: "Request a quote" },
      { href: "/customize", label: "Customize your piece" },
      { href: "/group-orders", label: "Plan a group order" },
    ],
  },
  {
    title: "Policies to add later",
    links: [
      { href: "/contact", label: "Artwork rights policy placeholder" },
      { href: "/contact", label: "Custom order policy placeholder" },
      { href: "/contact", label: "Privacy & terms placeholder" },
    ],
  },
] as const;

export const contactPlaceholders = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com",
  phone: "[add phone number]",
  social: "[add Instagram or preferred social handle]",
};
