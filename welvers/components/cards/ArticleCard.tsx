 import Link from "next/link";

export function ArticleCard({
  article,
  locale
}: {
  article: { slug: string; title: string; excerpt: string };
  locale: string;
}) {
  const href = article.slug;

  return (
    <Link
      href={`/${locale}/${article.slug}`}
      className="group flex flex-col rounded-xl border border-border/60 bg-background/60 p-4 text-sm hover:border-border hover:bg-background transition-colors"
    >
      <h2 className="mb-2 font-medium leading-snug">{article.title}</h2>
      <p className="mb-3 line-clamp-3 text-xs text-muted">{article.excerpt}</p>
      <span className="mt-auto text-[11px] text-primary group-hover:underline">
        Read article
      </span>
    </Link>
  );
}
