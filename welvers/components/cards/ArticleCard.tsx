import Link from "next/link";

export function ArticleCard({
  article,
  locale
}: {
  article: { slug: string; title: string; excerpt: string };
  locale?: string;
}) {
  const href = `/${locale ?? "en"}/blog/${article.slug}`;

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-4 text-sm hover:border-white/20 transition"
    >
      <h2 className="mb-2 font-medium leading-snug">
        {article.title}
      </h2>

      <p className="mb-3 line-clamp-3 text-xs text-white/60">
        {article.excerpt}
      </p>

      <span className="mt-auto text-[11px] text-purple-400 group-hover:underline">
        Read article
      </span>
    </Link>
  );
}
