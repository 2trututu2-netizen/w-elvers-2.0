export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="container py-6 text-xs text-muted">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} WELVERS</span>
          <div className="flex flex-wrap gap-3">
            <a href="/legal/privacy">Privacy</a>
            <a href="/legal/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
