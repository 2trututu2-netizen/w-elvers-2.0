import { getArticles } from "@/lib/content/articles";
import { ArticleCard } from "@/components/cards/ArticleCard";

export const dynamic = "force-static";

export default function BlogPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || "en";
  const articles = getArticles(locale);

  return (
    <div className="container pt-24 md:pt-32 pb-20 md:pb-24">
      <header className="mb-5 max-w-2xl">
        <h1 className="font-display text-2xl md:text-3xl font-semibold">Articles</h1>
        <p className="mt-2 text-xs md:text-sm text-muted">
          Гайды и материалы по выбору AI‑инструментов.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} locale={locale} />
        ))}
      </div>
    </div>
  );
}
