import { DetailIcon, type DetailIconName } from './DetailIcon';

export interface TechnicalArea {
  title: string;
  icon: DetailIconName;
  points: readonly string[];
}

export function TechnicalCard({ title, icon, points }: TechnicalArea) {
  return (
    <article className="rounded-lg border border-border-strong bg-surface p-4">
      <div className="flex items-center gap-3">
        <DetailIcon name={icon} className="h-5 w-5 text-accent" />
        <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
      </div>
      <ul className="mt-3 space-y-1.5 pl-5 text-sm leading-5 text-text-muted">
        {points.map((point) => (
          <li key={point} className="relative before:absolute before:-left-4 before:text-accent-bright before:content-['•']">
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

