import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ToolContent } from "./types";

const toolsDir = path.join(process.cwd(), "content/tools");

export function getTools(locale: string): ToolContent[] {
  if (!fs.existsSync(toolsDir)) return [];
  const files = fs.readdirSync(toolsDir);
  return files
    .filter((f) => f.startsWith(locale + "-") && f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(toolsDir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: `/${locale}/tools/${data.slug}`,
        title: data.title,
        excerpt: data.excerpt,
        category: data.category,
        pricing: data.pricing,
        affiliateUrl: data.affiliateUrl,
        content: content.trim()
      } as ToolContent;
    });
}

export function getToolBySlug(locale: string, slug: string): ToolContent | null {
  const file = path.join(toolsDir, `${locale}-${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug: `/${locale}/tools/${data.slug}`,
    title: data.title,
    excerpt: data.excerpt,
    category: data.category,
    pricing: data.pricing,
    affiliateUrl: data.affiliateUrl,
    content: content.trim()
  } as ToolContent;
}
