export function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-card-border bg-card px-3 py-1 font-mono text-xs text-muted">
      {label}
    </span>
  );
}
