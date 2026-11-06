import type { MetadataRoute } from "next";
import { siteUrl } from "@data/site";
import { jobs } from "@data/jobs";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/projects", priority: 0.9 },
    { path: "/experience", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/education", priority: 0.7 },
    { path: "/blogs", priority: 0.6 },
    { path: "/contact", priority: 0.5 },
  ];

  return [
    ...pages.map(({ path, priority }) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...jobs.map((_, index) => ({
      url: `${siteUrl}/experience/${index}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
