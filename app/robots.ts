import type { MetadataRoute } from "next";
import { siteUrl } from "@data/site";

// All crawlers, including AI assistants (GPTBot, ClaudeBot, PerplexityBot, Google-Extended),
// may read public pages so the portfolio can be found and cited.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login", "/dashboard", "/projects/add"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
