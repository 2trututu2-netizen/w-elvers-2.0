import Link from "next/link";

export function ToolCard({
  tool,
  locale,
}: {
  tool: any;
  locale: string;
}) {
  const href = `/${locale}/tools/${tool.slug}`;

  return (
    <Link
      href={href as any}
      className="group flex flex-col rounded-xl border border-border/60 bg-background/60 p-4 text-sm hover:border-border hover:bg-background transition-colors"
    >
      <h2 className="mb-2 font-medium leading-snug">
        {tool.name || tool.title}
      </h2>

      <p className="mb-3 line-clamp-3 text-xs text-muted">
        {tool.description || tool.excerpt}
      </p>

      <span className="mt-auto text-[11px] text-primary group-hover:underline">
        View tool
      </span>
    </Link>
  );
}
