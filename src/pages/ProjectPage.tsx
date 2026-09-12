import { Link, useParams } from 'react-router-dom';
import { ProjectTag } from '../components/projects/ProjectTag';
import { ArrowIcon, ExternalLinkIcon, GitHubIcon } from '../components/ui/Icons';
import { projects } from '../data/projects';

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="page-shell py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">
          404 · Project not found
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">That project does not exist.</h1>
        <p className="mt-3 max-w-xl text-text-muted">
          The link may be outdated, or the project may have moved.
        </p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 text-sm text-accent-bright">
          <ArrowIcon className="h-4 w-4 rotate-180" />
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="page-shell py-10 sm:py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary">
        <ArrowIcon className="h-4 w-4 rotate-180" />
        All projects
      </Link>

      <article className="mt-8 max-w-4xl">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((category, index) => (
            <ProjectTag key={category} category index={index}>
              {category}
            </ProjectTag>
          ))}
        </div>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{project.name}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-text-muted">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <ProjectTag key={technology}>{technology}</ProjectTag>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-4 py-2 text-sm hover:border-accent-muted"
            >
              <GitHubIcon className="h-4 w-4" /> GitHub
            </a>
          ) : null}
          {project.deployment ? (
            <a
              href={project.deployment}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-4 py-2 text-sm hover:border-accent-muted"
            >
              Live project <ExternalLinkIcon className="h-4 w-4" />
            </a>
          ) : null}
        </div>

        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={`Preview of ${project.name}`}
            className="mt-10 w-full rounded-lg border border-border-strong bg-surface-deep"
          />
        ) : null}
      </article>
    </main>
  );
}

