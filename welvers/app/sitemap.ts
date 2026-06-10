import type { MetadataRoute } from "next";
import { getTools } from "@/lib/content/tools";
import { getArticles } from "@/lib/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const locale = "en";

  const toolEntries = getTools(locale).map((tool) => ({
    url: `${baseUrl}${tool.slug}`,
    lastModified: new Date()
  }));

  const articleEntries = getArticles(locale).map((article) => ({
    url: `${baseUrl}${article.slug}`,
    lastModified: new Date()
  }));

  return [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/${locale}/tools`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/${locale}/blog`,
      lastModified: new Date()
    },
    ...toolEntries,
    ...articleEntries
  ];
}
