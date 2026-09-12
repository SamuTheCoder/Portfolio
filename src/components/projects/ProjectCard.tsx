import { Link } from 'react-router-dom';
import type { Project } from '../../types/project';
import { ArrowIcon, GitHubIcon } from '../ui/Icons';
import { ProjectTag } from './ProjectTag';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-lg border border-border-strong bg-surface transition-colors hover:border-accent-muted ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className={project.featured ? 'md:grid md:grid-cols-[0.95fr_1.35fr]' : ''}>
        <div className={`overflow-hidden bg-surface-deep ${project.featured ? 'md:h-full' : ''}`}>
          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt={`Preview of ${project.name}`}
              className={`w-full object-cover transition-transform duration-300 group-hover:scale-[1.01] ${
                project.featured ? 'aspect-[16/9] h-full' : 'aspect-[16/7.4]'
              }`}
            />
          ) : (
            <div className="aspect-[16/7.4]" aria-hidden="true" />
          )}
        </div>

        <div className="flex min-h-46 flex-col p-3">
          <div className="mb-2 flex flex-wrap gap-2">
            {project.categories.map((category, index) => (
              <ProjectTag key={category} category index={index}>
                {category}
              </ProjectTag>
            ))}
          </div>

          <h3 className="text-lg font-semibold tracking-tight text-text-primary">
            {project.name}
          </h3>
          <p className="mt-1 text-sm leading-5 text-text-muted">{project.shortDescription}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <ProjectTag key={technology}>{technology}</ProjectTag>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between gap-4 pt-3">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-bright transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              View Project
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} on GitHub`}
                className="text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
