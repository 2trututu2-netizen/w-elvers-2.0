import type { MetadataRoute } from "next";
import { getTools } from "@/lib/content/tools";
import { getArticles } from "@/lib/content/articles";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const lastModified = new Date();

  return locales.flatMap((locale) => {
    const toolEntries = getTools(locale).map((tool) => ({
      url: `${baseUrl}${tool.slug}`,
      lastModified
    }));

    const articleEntries = getArticles(locale).map((article) => ({
      url: `${baseUrl}${article.slug}`,
      lastModified
    }));

    return [
      {
        url: `${baseUrl}/${locale}`,
        lastModified
      },
      {
        url: `${baseUrl}/${locale}/tools`,
        lastModified
      },
      {
        url: `${baseUrl}/${locale}/blog`,
        lastModified
      },
      ...toolEntries,
      ...articleEntries
    ];
  });
}
