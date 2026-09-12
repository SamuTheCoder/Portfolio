import { DetailIcon, type DetailIconName } from './DetailIcon';

export interface TechnicalArea {
  title: string;
  icon: DetailIconName;
  points: readonly string[];
}

export function TechnicalCard({ title, icon, points }: TechnicalArea) {
  return (
    <article className="rounded-lg border border-border-strong bg-surface p-5">
      <div className="flex items-center gap-3.5">
        <DetailIcon name={icon} className="h-6 w-6 text-accent" />
        <h3 className="text-base font-semibold text-text-primary">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 pl-5 text-base leading-6 text-text-muted">
        {points.map((point) => (
          <li key={point} className="relative before:absolute before:-left-4 before:text-accent-bright before:content-['•']">
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
