"use client";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="container py-6 text-xs text-muted">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span>© {year} WELVERS</span>
        </div>
      </div>
    </footer>
  );
}
