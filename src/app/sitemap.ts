import type { MetadataRoute } from "next";

// Génération automatique du sitemap pour le SEO
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://romain.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
