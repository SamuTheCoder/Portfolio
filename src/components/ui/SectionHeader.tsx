interface SectionHeaderProps {
  id?: string;
  title: string;
  description: string;
  aside?: string;
}

export function SectionHeader({ id, title, description, aside }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <h2 id={id} className="text-2xl font-semibold tracking-tight text-text-primary">
          {title}
        </h2>
        <p className="text-sm text-text-muted">{description}</p>
      </div>
      {aside ? (
        <p className="shrink-0 pb-1 text-sm tabular-nums text-text-muted">{aside}</p>
      ) : null}
    </div>
  );
}
