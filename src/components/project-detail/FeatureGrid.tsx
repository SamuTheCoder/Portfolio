import { FeatureCard, type Feature } from './FeatureCard';

interface FeatureGridProps {
  features: readonly Feature[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}

