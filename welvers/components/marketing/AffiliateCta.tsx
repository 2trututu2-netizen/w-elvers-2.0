import Link from "next/link";

export default function AffiliateCta({
  label,
  button,
  href
}: {
  label: string;
  button: string;
  href: string;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-background/60 p-4 text-xs">
      <p className="mb-3 text-muted">{label}</p>
      <Link
        href={href}
        className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90"
      >
        {button}
      </Link>
    </div>
  );
}
