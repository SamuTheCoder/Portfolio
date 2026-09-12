import { Button } from '../ui/Button';
import { ChevronIcon, FilterIcon, SearchIcon } from '../ui/Icons';

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
  filtersOpen: boolean;
  onToggleFilters: () => void;
  activeFilterCount: number;
}

export function ProjectSearch({
  value,
  onChange,
  filtersOpen,
  onToggleFilters,
  activeFilterCount,
}: ProjectSearchProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <label className="relative min-w-0 flex-1">
        <span className="sr-only">Search projects</span>
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search projects..."
          className="h-10 w-full rounded-md border border-border-strong bg-surface px-12 text-sm text-text-primary outline-none transition-colors placeholder:text-text-subtle focus:border-accent focus:ring-2 focus:ring-accent/15"
        />
      </label>
      <Button
        variant={filtersOpen || activeFilterCount > 0 ? 'primary' : 'secondary'}
        onClick={onToggleFilters}
        aria-expanded={filtersOpen}
        aria-controls="project-filters"
        className="h-10 justify-between sm:min-w-32"
      >
        <span className="inline-flex items-center gap-2">
          <FilterIcon className="h-4 w-4" />
          Filters
          {activeFilterCount > 0 ? (
            <span className="rounded-full bg-accent px-1.5 text-[11px] text-page">
              {activeFilterCount}
            </span>
          ) : null}
        </span>
        <ChevronIcon
          className={`h-4 w-4 transition-transform ${filtersOpen ? 'rotate-180' : ''}`}
        />
      </Button>
    </div>
  );
}
