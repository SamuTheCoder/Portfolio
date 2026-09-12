import boardImage from '../../assets/projects/projboard/board.svg?no-inline';
import calendarImage from '../../assets/projects/projboard/calendar.svg?no-inline';
import membersImage from '../../assets/projects/projboard/members.svg?no-inline';
import settingsImage from '../../assets/projects/projboard/settings.svg?no-inline';
import taskDetailsImage from '../../assets/projects/projboard/task-details.svg?no-inline';
import { ChallengeCard, type ProjectChallenge } from '../../components/project-detail/ChallengeCard';
import { FeatureGrid } from '../../components/project-detail/FeatureGrid';
import type { Feature } from '../../components/project-detail/FeatureCard';
import { ProjectArchitecture } from '../../components/project-detail/ProjectArchitecture';
import { ProjectDetailsCard, type ProjectDetails } from '../../components/project-detail/ProjectDetailsCard';
import { ProjectHeader } from '../../components/project-detail/ProjectHeader';
import { ProjectMediaGallery, type ProjectMediaItem } from '../../components/project-detail/ProjectMediaGallery';
import { ProjectNavigation } from '../../components/project-detail/ProjectNavigation';
import { ScreenshotGallery } from '../../components/project-detail/ScreenshotGallery';
import { TechnicalCard, type TechnicalArea } from '../../components/project-detail/TechnicalCard';
import { projects } from '../../data/projects';

const projBoard = projects.find((project) => project.slug === 'projboard');

const technologies = ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'SQLAlchemy', 'Docker'];

const mediaItems: ProjectMediaItem[] = [
  { src: boardImage, alt: 'ProjBoard Kanban project board placeholder', title: 'Project Board' },
  { src: taskDetailsImage, alt: 'ProjBoard task details placeholder', title: 'Task Details' },
  { src: calendarImage, alt: 'ProjBoard calendar view placeholder', title: 'Calendar View' },
  { src: membersImage, alt: 'ProjBoard members management placeholder', title: 'Members' },
  { src: settingsImage, alt: 'ProjBoard project settings placeholder', title: 'Project Settings' },
];

const galleryItems: ProjectMediaItem[] = [
  { ...mediaItems[0], title: 'Project Dashboard' },
  { ...mediaItems[0], title: 'Tasks (Kanban)' },
  mediaItems[1],
  mediaItems[2],
  { ...mediaItems[3], title: 'Members Management' },
].filter((item): item is ProjectMediaItem => Boolean(item));

const details: ProjectDetails = {
  role: 'Full-stack Developer',
  projectType: 'Personal Project',
  status: 'Completed',
  year: '2026',
  repository: projBoard?.github ? { label: 'GitHub', href: projBoard.github } : undefined,
  liveDemo: projBoard?.deployment ? { label: 'Available', href: projBoard.deployment } : undefined,
  stack: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
};

const features: Feature[] = [
  { title: 'JWT Authentication', description: 'Secure authentication and protected routes.', icon: 'lock' },
  { title: 'Project Management', description: 'Create projects and manage team members.', icon: 'users' },
  { title: 'Role-based Permissions', description: 'Predictable permissions for owners, creators, assignees and reviewers.', icon: 'shield' },
  { title: 'Kanban Workflow', description: 'Move work through backlog, ready, progress, review and done.', icon: 'kanban' },
  { title: 'Task Assignment & Review', description: 'Assign work, set reviewers and manage review status.', icon: 'check' },
  { title: 'Cross-project View', description: 'See assigned tasks across multiple projects.', icon: 'layers' },
  { title: 'Project Calendar', description: 'Visualize task deadlines in a calendar view.', icon: 'calendar' },
  { title: 'Responsive Frontend', description: 'A clean interface for desktop, tablet and mobile.', icon: 'devices' },
];

const technicalAreas: TechnicalArea[] = [
  {
    title: 'Backend',
    icon: 'server',
    points: ['FastAPI', 'SQLAlchemy ORM', 'PostgreSQL', 'Alembic migrations', 'JWT authentication', 'Service-layer architecture'],
  },
  {
    title: 'Frontend',
    icon: 'devices',
    points: ['React', 'TypeScript', 'Vite', 'Reusable component architecture', 'Axios client with interceptors', 'Responsive UI'],
  },
  {
    title: 'Infrastructure',
    icon: 'box',
    points: ['Docker for backend and frontend', 'Environment-based configuration', 'Docker Compose development setup'],
  },
  {
    title: 'API & Database Design',
    icon: 'database',
    points: ['REST API with clear resources', 'Relational data model', 'Alembic migrations', 'Pydantic schemas', 'Backend behavior tests'],
  },
];

const challenges: ProjectChallenge[] = [
  {
    title: 'Role-based permissions',
    description: 'Keeping authorization predictable across owners, task creators, assignees and reviewers required clearly separated backend rules.',
    icon: 'lightbulb',
  },
  {
    title: 'Database modelling',
    description: 'Relational constraints and migrations clarified how schema choices affect both product behavior and long-term maintainability.',
    icon: 'database',
  },
  {
    title: 'Frontend–backend integration',
    description: 'Synchronizing UI state with API behavior required consistent loading, error and permission handling across the application.',
    icon: 'code',
  },
];

// Import a real architecture asset here when available. Leaving this undefined omits the section.
const architectureImage: string | undefined = undefined;

export function ProjBoardPage() {
  return (
    <>
      <main className="page-shell py-6 sm:py-8">
        <ProjectHeader
          name="ProjBoard"
          subtitle="Full-stack project management platform with role-based workflows."
          description="ProjBoard is a modern project management application built to help teams plan, track and ship projects together, with a focus on clean architecture and real-world practices."
          categories={['Full Stack', 'Project Management']}
          technologies={technologies}
          github={projBoard?.github}
          liveDemo={projBoard?.deployment}
          quote="A project management platform built to learn, build and ship."
        />

        <div className="mt-6">
          <ProjectMediaGallery items={mediaItems} />
        </div>

        <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_400px]" aria-labelledby="overview-title">
          <div>
            <h2 id="overview-title" className="detail-section-title">Overview</h2>
            <div className="mt-3 max-w-3xl space-y-3 text-sm leading-6 text-text-muted">
              <p>
                ProjBoard is a full-stack project management application built to explore backend architecture,
                role-based permissions, relational data modelling and frontend integration.
              </p>
              <p>
                Teams can create projects, invite members, define and assign tasks, track status through a Kanban
                workflow, coordinate reviews and keep deadlines visible from a shared calendar.
              </p>
              <p>
                I built it as a practical way to apply modern web-development patterns while solving a real delivery
                problem: helping small teams stay organized without making the tool itself feel heavy.
              </p>
            </div>
          </div>
          <ProjectDetailsCard details={details} />
        </section>

        <section className="mt-8" aria-labelledby="features-title">
          <h2 id="features-title" className="detail-section-title">Key Features</h2>
          <div className="mt-3"><FeatureGrid features={features} /></div>
        </section>

        {architectureImage ? <div className="mt-8">
          <ProjectArchitecture
            image={architectureImage}
            alt="ProjBoard system architecture"
            description="A concise explanation of the architecture can be placed here alongside the final diagram."
          />
        </div> : null}

        <section className="mt-8" aria-labelledby="technical-title">
          <h2 id="technical-title" className="detail-section-title">Technical Implementation</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {technicalAreas.map((area) => <TechnicalCard key={area.title} {...area} />)}
          </div>
        </section>

        <section className="mt-8" aria-labelledby="challenges-title">
          <h2 id="challenges-title" className="detail-section-title">Challenges &amp; Learnings</h2>
          <div className="mt-3 grid gap-3 lg:grid-cols-3">
            {challenges.map((challenge) => <ChallengeCard key={challenge.title} {...challenge} />)}
          </div>
        </section>

        <section className="mt-8" aria-labelledby="gallery-title">
          <h2 id="gallery-title" className="detail-section-title">Gallery</h2>
          <div className="mt-3"><ScreenshotGallery items={galleryItems} /></div>
        </section>
      </main>

      <div className="mt-8">
        <ProjectNavigation next={{ name: 'RAG Educational Assistant' }} />
      </div>
    </>
  );
}
