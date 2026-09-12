import { Link } from 'react-router-dom';
import { ArrowIcon, ExternalLinkIcon, GitHubIcon } from '../ui/Icons';
import { ProjectTags } from './ProjectTags';

interface ProjectHeaderProps {
  name: string;
  subtitle: string;
  description: string;
  categories: readonly string[];
  technologies: readonly string[];
  github?: string;
  liveDemo?: string;
  quote?: string;
}

const actionClass =
  'inline-flex h-10 items-center gap-2 rounded-md border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

export function ProjectHeader({
  name,
  subtitle,
  description,
  categories,
  technologies,
  github,
  liveDemo,
  quote,
}: ProjectHeaderProps) {
  return (
    <header>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-accent-bright transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <ArrowIcon className="h-4 w-4 rotate-180" />
        Back to Projects
      </Link>

      <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_200px] lg:items-start">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">{name}</h1>
          <p className="mt-1 text-lg font-medium text-text-secondary">{subtitle}</p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-text-muted">{description}</p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <ProjectTags items={categories} kind="category" />
              <ProjectTags items={technologies} />
            </div>

            {github || liveDemo ? (
              <div className="flex shrink-0 flex-wrap gap-3">
              {github ? (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className={`${actionClass} border-border-strong bg-surface hover:border-accent-muted`}
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              ) : null}
              {liveDemo ? (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className={`${actionClass} border-accent bg-accent text-page hover:bg-accent-bright`}
                >
                  Live Demo
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              ) : null}
              </div>
            ) : null}
          </div>
        </div>

        {quote ? (
          <blockquote className="hidden border-l border-border-strong pl-7 text-sm leading-6 text-text-muted lg:block">
            “{quote}”
            <span className="mt-3 block h-px w-5 bg-text-subtle" aria-hidden="true" />
          </blockquote>
        ) : null}
      </div>
    </header>
  );
}
