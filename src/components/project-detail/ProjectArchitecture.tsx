interface ProjectArchitectureProps {
  image?: string;
  alt: string;
  description?: string;
}

export function ProjectArchitecture({ image, alt, description }: ProjectArchitectureProps) {
  if (!image) return null;

  return (
    <section aria-labelledby="architecture-title">
      <h2 id="architecture-title" className="detail-section-title">System Architecture</h2>
      <div className={`mt-3 grid gap-3 ${description ? 'lg:grid-cols-[1fr_360px]' : ''}`}>
        <div className="overflow-hidden rounded-lg border border-border-strong bg-surface-deep">
          <img src={image} alt={alt} className="h-auto w-full object-contain" />
        </div>
        {description ? (
          <div className="rounded-lg border border-border-strong bg-surface p-5">
            <h3 className="text-sm font-semibold text-text-primary">Architecture notes</h3>
            <p className="mt-2 text-sm leading-6 text-text-muted">{description}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

