import Link from "next/link";

export function ToolCard({ tool }: { tool: any }) {
  return (
    <Link
      href={tool.slug}
      className="group flex flex-col rounded-xl border border-border/60 bg-background/60 p-4 text-sm hover:border-border hover:bg-background transition-colors"
    >
      <h2 className="mb-2 font-medium leading-snug">{tool.title}</h2>
      <p className="mb-3 line-clamp-3 text-xs text-muted">{tool.excerpt}</p>
      <div className="mt-auto flex items-center justify-between text-[11px] text-muted">
        <span>{tool.category}</span>
        <span>{tool.pricing}</span>
      </div>
    </Link>
  );
}
