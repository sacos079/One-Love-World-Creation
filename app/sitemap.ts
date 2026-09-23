import type { MetadataRoute } from "next";

import { siteMetadata } from "@/lib/metadata";

const routes = [
  "",
  "/customize",
  "/group-orders",
  "/originals",
  "/gallery",
  "/about",
  "/faq",
  "/contact",
  "/quote",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteMetadata.siteUrl}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
