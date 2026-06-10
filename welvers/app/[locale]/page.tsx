TEST-UI-CHANGE
import Link from "next/link";
import { normalizeLocale } from "@/lib/i18n";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = normalizeLocale(params.locale);

  return (
    <div className="container pt-24 pb-20">
      {/* HERO */}
      <section className="mb-14">
        <span className="text-xs uppercase tracking-widest text-purple-400">
          Trusted AI Tools Intelligence
        </span>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
          Discover, Compare & Evaluate{" "}
          <span className="text-purple-400">AI Tools</span>
        </h1>

        <p className="mt-5 text-white/60 max-w-xl text-base leading-relaxed">
          WELVERS — независимая платформа для поиска, сравнения и оценки AI-инструментов.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <Link
            href={`/${locale}/tools`}
            className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition text-white text-sm font-medium"
          >
            Browse AI Tools
          </Link>

          <Link
            href={`/${locale}/blog`}
            className="px-5 py-2 rounded-lg border border-white/10 hover:border-white/25 transition text-sm"
          >
            Read Articles
          </Link>
        </div>
      </section>

      {/* SIMPLE FEATURE GRID */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="p-5 rounded-xl border border-white/10 bg-white/5">
          <h3 className="font-medium mb-2">Compare Tools</h3>
          <p className="text-sm text-white/60">
            Side-by-side analysis of AI tools.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-white/10 bg-white/5">
          <h3 className="font-medium mb-2">Curated Reviews</h3>
          <p className="text-sm text-white/60">
            Real breakdowns, not marketing fluff.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-white/10 bg-white/5">
          <h3 className="font-medium mb-2">AI Directory</h3>
          <p className="text-sm text-white/60">
            Structured database of AI products.
          </p>
        </div>
      </section>
    </div>
  );
}
}
