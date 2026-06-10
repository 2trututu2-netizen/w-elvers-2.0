"use client";

import Link from "next/link";
import { useState } from "react";

export function Header({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <Link href={`/${locale}`} className="font-display text-sm">
          WELVERS
        </Link>
        <nav className="hidden items-center gap-5 text-xs text-muted md:flex">
          <Link href={`/${locale}/tools`} className="hover:text-foreground">
            Tools
          </Link>
          <Link href={`/${locale}/blog`} className="hover:text-foreground">
            Articles
          </Link>
        </nav>
        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span className="block h-[2px] w-4 bg-foreground" />
            <span className="block h-[2px] w-4 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="container flex flex-col gap-2 py-3 text-sm text-muted">
            <Link href={`/${locale}/tools`} onClick={() => setOpen(false)}>
              Tools
            </Link>
            <Link href={`/${locale}/blog`} onClick={() => setOpen(false)}>
              Articles
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
