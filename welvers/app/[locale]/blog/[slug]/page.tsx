import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/content/articles";

export const dynamic = "force-static";

export default function ArticleDetailPage({
  params
}: {
  params: { locale: string; slug: string };
}) {
  const locale = params.locale || "en";
  const article = getArticleBySlug(locale, params.slug);
  if (!article) notFound();

  return (
    <div className="container pt-24 md:pt-32 pb-20 md:pb-24 max-w-3xl">
      <header className="mb-5">
        <h1 className="font-display text-2xl md:text-3xl font-semibold">
          {article.title}
        </h1>
        <p className="mt-2 text-xs md:text-sm text-muted max-w-2xl">
          {article.excerpt}
        </p>
      </header>
      <article className="prose prose-invert max-w-none text-sm md:text-base whitespace-pre-wrap">
        {article.content}
      </article>
    </div>
  );
}
