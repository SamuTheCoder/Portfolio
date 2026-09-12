import { Link } from 'react-router-dom';
import type { Project } from '../../types/project';
import { ProjectTag } from './ProjectTag';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group block h-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <article className="h-full overflow-hidden rounded-lg border border-border-strong bg-surface transition-colors group-hover:border-accent-muted">
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
          </div>
        </div>
      </article>
    </Link>
  );
}
