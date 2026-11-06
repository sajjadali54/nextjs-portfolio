import type { MetadataRoute } from "next";
import { siteUrl } from "@data/site";
import { education } from "@data/education";
import { jobs } from "@data/jobs";
import { projects } from "@data/projects";

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
    ...projects
      .filter((project) => project.slug)
      .map((project) => ({
        url: `${siteUrl}/projects/${project.slug}`,
        changeFrequency: "monthly" as const,
        priority: project.hasCaseStudy ? 0.8 : 0.5,
      })),
    ...education.map((_, index) => ({
      url: `${siteUrl}/education/${index}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...jobs.map((_, index) => ({
      url: `${siteUrl}/experience/${index}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
