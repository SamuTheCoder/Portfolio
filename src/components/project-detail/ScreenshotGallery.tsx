import type { ProjectMediaItem } from './ProjectMediaGallery';

interface ScreenshotGalleryProps {
  items: readonly ProjectMediaItem[];
}

export function ScreenshotGallery({ items }: ScreenshotGalleryProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {items.map((item) => (
        <figure key={item.title}>
          <div className="overflow-hidden rounded-md border border-border-strong bg-surface-deep transition-colors hover:border-accent-muted">
            <img src={item.src} alt={item.alt} className="aspect-video w-full object-cover object-top" />
          </div>
          <figcaption className="mt-2 text-xs text-text-secondary">{item.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}

