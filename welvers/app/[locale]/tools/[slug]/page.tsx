import { notFound } from "next/navigation";
import { getToolBySlug } from "@/lib/content/tools";
import AffiliateCta from "@/components/marketing/AffiliateCta";
import { normalizeLocale } from "@/lib/i18n";

export const dynamic = "force-static";

export default function ToolDetailPage({
  params
}: {
  params: { locale: string; slug: string };
}) {
  const locale = normalizeLocale(params.locale);
  const tool = getToolBySlug(locale, params.slug);
  if (!tool) notFound();

  return (
    <div className="container pt-24 md:pt-32 pb-20 md:pb-24 max-w-4xl">
      <header className="mb-5">
        <h1 className="font-display text-2xl md:text-3xl font-semibold">
          {tool.title}
        </h1>
        <p className="mt-2 text-xs md:text-sm text-muted max-w-2xl">
          {tool.excerpt}
        </p>
      </header>

      {tool.affiliateUrl && (
        <div className="mb-8">
          <AffiliateCta
            label="Партнёрская ссылка. Мы рекомендуем только проверенные инструменты."
            button="Перейти на сайт"
            href={tool.affiliateUrl}
          />
        </div>
      )}

      <article className="prose prose-invert max-w-none text-sm md:text-base whitespace-pre-wrap">
        {tool.content}
      </article>
    </div>
  );
}
