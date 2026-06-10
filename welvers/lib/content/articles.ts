import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ArticleContent } from "./types";

const articlesDir = path.join(process.cwd(), "content/articles");

export function getArticles(locale: string): ArticleContent[] {
  if (!fs.existsSync(articlesDir)) return [];
  const files = fs.readdirSync(articlesDir);
  return files
    .filter((f) => f.startsWith(locale + "-") && f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(articlesDir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: `/${locale}/blog/${data.slug}`,
        title: data.title,
        excerpt: data.excerpt,
        content: content.trim()
      } as ArticleContent;
    });
}

export function getArticleBySlug(locale: string, slug: string): ArticleContent | null {
  const file = path.join(articlesDir, `${locale}-${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug: `/${locale}/blog/${data.slug}`,
    title: data.title,
    excerpt: data.excerpt,
    content: content.trim()
  } as ArticleContent;
}
