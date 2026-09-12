import { DetailIcon, type DetailIconName } from './DetailIcon';

export interface Feature {
  title: string;
  description: string;
  icon: DetailIconName;
}

export function FeatureCard({ title, description, icon }: Feature) {
  return (
    <article className="flex gap-4 rounded-lg border border-border-strong bg-surface p-5">
      <DetailIcon name={icon} className="h-7 w-7 shrink-0 text-accent" />
      <div>
        <h3 className="text-base font-semibold text-text-primary">{title}</h3>
        <p className="mt-1.5 text-base leading-6 text-text-muted">{description}</p>
      </div>
    </article>
  );
}
