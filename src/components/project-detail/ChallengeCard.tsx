import { DetailIcon, type DetailIconName } from './DetailIcon';

export interface ProjectChallenge {
  title: string;
  description: string;
  icon: DetailIconName;
}

export function ChallengeCard({ title, description, icon }: ProjectChallenge) {
  return (
    <article className="flex gap-4 rounded-lg border border-border-strong bg-surface p-4">
      <DetailIcon name={icon} className="h-6 w-6 shrink-0 text-accent" />
      <div>
        <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
        <p className="mt-1 text-sm leading-5 text-text-muted">{description}</p>
      </div>
    </article>
  );
}

