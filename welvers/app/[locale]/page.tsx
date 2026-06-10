import Link from "next/link";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale || "en";

  return (
    <div className="container pt-24 pb-20">
      <section className="mb-10">
        <span className="inline-flex items-center text-xs font-medium text-primary/80 uppercase tracking-wider mb-4">
          Trusted AI Tools Intelligence
        </span>
        <h1 className="font-display text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
          Discover, Compare &amp; Evaluate{" "}
          <span className="text-primary">AI Tools</span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-muted max-w-xl">
          WELVERS — независимая платформа для поиска, сравнения и оценки AI‑инструментов.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm">
          <Link
            href={`/${locale}/tools`}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2 text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Browse AI Tools
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-2 hover:bg-secondary/40 transition-colors"
          >
            Read Articles
          </Link>
        </div>
      </section>
    </div>
  );
}
