import { useState } from 'react';
import { ArrowIcon } from '../ui/Icons';

export interface ProjectMediaItem {
  src: string;
  alt: string;
  title: string;
}

interface ProjectMediaGalleryProps {
  items: readonly ProjectMediaItem[];
}

export function ProjectMediaGallery({ items }: ProjectMediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  if (!activeItem) return null;

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));
  };

  return (
    <section aria-label="Project media">
      <div className="overflow-hidden rounded-lg border border-border-strong bg-surface-deep">
        <img
          src={activeItem.src}
          alt={activeItem.alt}
          className="aspect-video w-full object-cover object-top sm:aspect-[16/7] xl:aspect-[16/5]"
        />
      </div>

      {items.length > 1 ? (
        <div className="mt-3 grid grid-cols-[36px_minmax(0,1fr)_36px] items-center gap-3">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous screenshot"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-text-muted transition-colors hover:border-accent-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <ArrowIcon className="h-4 w-4 rotate-180" />
          </button>

          <div className="flex snap-x gap-3 overflow-x-auto pb-1">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${item.title}`}
                aria-pressed={index === activeIndex}
                className="min-w-32 flex-1 snap-start text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:min-w-40"
              >
                <span
                  className={`block overflow-hidden rounded-md border bg-surface-deep transition-colors ${
                    index === activeIndex ? 'border-accent' : 'border-border-strong hover:border-accent-muted'
                  }`}
                >
                  <img src={item.src} alt="" className="aspect-[16/7] w-full object-cover object-top" />
                </span>
                <span
                  className={`mt-1.5 block truncate text-center text-xs ${
                    index === activeIndex ? 'text-accent-bright' : 'text-text-secondary'
                  }`}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label="Show next screenshot"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-text-muted transition-colors hover:border-accent-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <ArrowIcon className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
