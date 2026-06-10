import { getTools } from "@/lib/content/tools";
import { ToolCard } from "@/components/cards/ToolCard";

export const dynamic = "force-static";

export default function ToolsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || "en";
  const tools = getTools(locale);

  return (
    <div className="container pt-24 md:pt-32 pb-20 md:pb-24">
      <header className="mb-5 max-w-2xl">
        <h1 className="font-display text-2xl md:text-3xl font-semibold">AI Tools</h1>
        <p className="mt-2 text-xs md:text-sm text-muted">
          Каталог проверенных AI‑инструментов.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} locale={locale} />
        ))}
      </div>
    </div>
  );
}
