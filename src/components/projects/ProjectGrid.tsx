import type { Project } from '../../types/project';
import { PlusIcon } from '../ui/Icons';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border-strong px-6 py-16 text-center">
        <p className="font-medium text-text-secondary">No projects match those filters.</p>
        <p className="mt-1 text-sm text-text-subtle">Try a broader search or clear a filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
      {projects.length === 4 ? (
        <div className="hidden min-h-52 flex-col items-center justify-center rounded-lg border border-dashed border-border-strong text-center text-text-subtle xl:flex">
          <PlusIcon className="mb-3 h-7 w-7" />
          <p className="text-sm">More projects coming soon...</p>
        </div>
      ) : null}
    </div>
  );
}

