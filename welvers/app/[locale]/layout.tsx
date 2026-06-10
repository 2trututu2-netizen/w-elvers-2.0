import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { defaultLocale, isLocale, normalizeLocale } from "@/lib/i18n";

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    redirect(`/${defaultLocale}`);
  }

  const locale = normalizeLocale(params.locale);

  return (
  <div className="min-h-screen bg-[#050509] text-white">
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  </div>
);
