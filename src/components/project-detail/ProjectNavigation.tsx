import { Link } from 'react-router-dom';
import { ArrowIcon } from '../ui/Icons';

interface NextProject {
  name: string;
  href?: string;
}

interface ProjectNavigationProps {
  next?: NextProject;
}

export function ProjectNavigation({ next }: ProjectNavigationProps) {
  return (
    <nav className="border-t border-border" aria-label="Project navigation">
      <div className="page-shell flex items-center justify-between gap-6 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-accent-bright hover:text-text-primary"
        >
          <ArrowIcon className="h-4 w-4 rotate-180" />
          Back to Projects
        </Link>

        {next ? (
          next.href ? (
            <Link to={next.href} className="group text-right">
              <span className="flex items-center justify-end gap-2 text-xs text-text-muted">
                Next Project <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="mt-1 block text-sm font-semibold text-text-primary">{next.name}</span>
            </Link>
          ) : (
            <div className="text-right opacity-55" aria-disabled="true">
              <span className="flex items-center justify-end gap-2 text-xs text-text-muted">
                Next Project <ArrowIcon className="h-3.5 w-3.5" />
              </span>
              <span className="mt-1 block text-sm font-semibold text-text-secondary">{next.name}</span>
            </div>
          )
        ) : null}
      </div>
    </nav>
  );
}
