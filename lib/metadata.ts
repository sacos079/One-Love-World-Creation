import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const siteMetadata = {
  siteName: "ONE LOVE WORLD CREATION",
  shortName: "One Luv",
  tagline: "Made to represent you.",
  description:
    "One Luv creates custom apparel for crews, communities, workplaces, events, and individuals through a quote-first customization process.",
  siteUrl,
};

type MetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = siteMetadata.description,
  path = "/",
}: MetadataOptions = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteMetadata.shortName}`
    : `${siteMetadata.siteName} | ${siteMetadata.tagline}`;

  const canonical = new URL(path, siteMetadata.siteUrl).toString();

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteMetadata.siteUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonical,
      siteName: siteMetadata.siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}
