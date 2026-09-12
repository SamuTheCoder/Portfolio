import type { ReactNode } from 'react';
import { ExternalLinkIcon } from '../ui/Icons';
import { DetailIcon, type DetailIconName } from './DetailIcon';
import { ProjectTags } from './ProjectTags';

interface DetailLink {
  label: string;
  href: string;
}

export interface ProjectDetails {
  role?: string;
  projectType?: string;
  status?: string;
  year?: string;
  repository?: DetailLink;
  liveDemo?: DetailLink;
  stack?: readonly string[];
}

interface ProjectDetailsCardProps {
  details: ProjectDetails;
}

interface DetailRowProps {
  icon: DetailIconName;
  label: string;
  children: ReactNode;
}

function DetailRow({ icon, label, children }: DetailRowProps) {
  return (
    <div className="grid grid-cols-[18px_92px_1fr] items-start gap-2 text-sm">
      <DetailIcon name={icon} className="mt-0.5 h-4 w-4 text-text-muted" />
      <dt className="text-text-muted">{label}</dt>
      <dd className="min-w-0 text-text-secondary">{children}</dd>
    </div>
  );
}

function ExternalDetailLink({ link }: { link: DetailLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-accent-bright hover:text-text-primary"
    >
      {link.label}
      <ExternalLinkIcon className="h-3 w-3" />
    </a>
  );
}

export function ProjectDetailsCard({ details }: ProjectDetailsCardProps) {
  return (
    <aside className="rounded-lg border border-border-strong bg-surface p-5" aria-labelledby="project-details-title">
      <h2 id="project-details-title" className="font-semibold text-text-primary">Project Details</h2>
      <dl className="mt-4 space-y-3">
        {details.role ? <DetailRow icon="users" label="Role">{details.role}</DetailRow> : null}
        {details.projectType ? <DetailRow icon="box" label="Project Type">{details.projectType}</DetailRow> : null}
        {details.status ? (
          <DetailRow icon="check" label="Status">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              {details.status}
            </span>
          </DetailRow>
        ) : null}
        {details.year ? <DetailRow icon="calendar" label="Year">{details.year}</DetailRow> : null}
        {details.repository ? (
          <DetailRow icon="code" label="Repository"><ExternalDetailLink link={details.repository} /></DetailRow>
        ) : null}
        {details.liveDemo ? (
          <DetailRow icon="devices" label="Live Demo"><ExternalDetailLink link={details.liveDemo} /></DetailRow>
        ) : null}
        {details.stack?.length ? (
          <DetailRow icon="database" label="Stack"><ProjectTags items={details.stack} /></DetailRow>
        ) : null}
      </dl>
    </aside>
  );
}
