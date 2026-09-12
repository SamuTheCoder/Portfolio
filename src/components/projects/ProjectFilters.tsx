import { projectCategories, type ProjectCategory } from '../../types/project';
import { technologyFilters } from '../../data/projectFilters';
import { CloseIcon } from '../ui/Icons';

export type CategoryFilter = 'All' | ProjectCategory;

interface ProjectFiltersProps {
  category: CategoryFilter;
  technologies: string[];
  onCategoryChange: (category: CategoryFilter) => void;
  onTechnologyToggle: (technology: string) => void;
  onClear: () => void;
}

const filterButtonClass = (active: boolean) =>
  `rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
    active
      ? 'border-accent bg-accent text-page'
      : 'border-border-strong bg-surface-raised text-text-secondary hover:border-accent-muted hover:text-text-primary'
  }`;

export function ProjectFilters({
  category,
  technologies,
  onCategoryChange,
  onTechnologyToggle,
  onClear,
}: ProjectFiltersProps) {
  const hasActiveFilters = category !== 'All' || technologies.length > 0;

  return (
    <section
      id="project-filters"
      aria-label="Project filters"
      className="rounded-lg border border-border-strong bg-surface p-4"
    >
      <div className="mb-4 flex items-center justify-between lg:mb-0 lg:hidden">
        <h3 className="text-sm font-semibold">Filter projects</h3>
        <button
          type="button"
          onClick={onClear}
          disabled={!hasActiveFilters}
          className="text-xs text-accent-bright disabled:text-text-subtle"
        >
          Clear all
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1px_1.15fr] lg:gap-6">
        <fieldset>
          <legend className="mb-2.5 text-sm font-semibold text-text-primary">Categories</legend>
          <div className="flex flex-wrap gap-1.5">
            {(['All', ...projectCategories] as CategoryFilter[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onCategoryChange(item)}
                aria-pressed={category === item}
                className={filterButtonClass(category === item)}
              >
                {item}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="hidden bg-border-strong lg:block" aria-hidden="true" />

        <fieldset className="relative">
          <div className="mb-2.5 flex items-center justify-between gap-4">
            <legend className="text-sm font-semibold text-text-primary">Technologies</legend>
            <button
              type="button"
              onClick={onClear}
              disabled={!hasActiveFilters}
              className="hidden items-center gap-2 text-xs text-accent-bright transition-colors hover:text-text-primary disabled:text-text-subtle lg:inline-flex"
            >
              Clear all
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {technologyFilters.map((technology) => {
              const active = technologies.includes(technology);
              return (
                <button
                  key={technology}
                  type="button"
                  onClick={() => onTechnologyToggle(technology)}
                  aria-pressed={active}
                  className={filterButtonClass(active)}
                >
                  {technology}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>
    </section>
  );
}
