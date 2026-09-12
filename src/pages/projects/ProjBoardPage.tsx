import {
    ChallengeCard,
    type ProjectChallenge,
} from "../../components/project-detail/ChallengeCard";
import { FeatureGrid } from "../../components/project-detail/FeatureGrid";
import type { Feature } from "../../components/project-detail/FeatureCard";
import { ProjectArchitecture } from "../../components/project-detail/ProjectArchitecture";
import { ProjectHeader } from "../../components/project-detail/ProjectHeader";
import {
    ProjectMediaGallery,
    type ProjectMediaItem,
} from "../../components/project-detail/ProjectMediaGallery";
import { ProjectNavigation } from "../../components/project-detail/ProjectNavigation";
import {
    TechnicalCard,
    type TechnicalArea,
} from "../../components/project-detail/TechnicalCard";
import { projects } from "../../data/projects";

const projBoard = projects.find((project) => project.slug === "projboard");

const mediaItems: ProjectMediaItem[] = [
    {
        src: "/projects/projboard/projects_page.png",
        alt: "ProjBoard projects page",
        title: "Projects Page",
    },
    {
        src: "/projects/projboard/login.png",
        alt: "ProjBoard login page",
        title: "Login",
    },
    {
        src: "/projects/projboard/kanban.png",
        alt: "ProjBoard Kanban board",
        title: "Kanban",
    },
    {
        src: "/projects/projboard/task.png",
        alt: "ProjBoard task details page",
        title: "Task",
    },
    {
        src: "/projects/projboard/tasks_inside.png",
        alt: "Tasks inside a ProjBoard project",
        title: "Project Tasks",
    },
    {
        src: "/projects/projboard/calendar.png",
        alt: "ProjBoard calendar page",
        title: "Calendar",
    },
    {
        src: "/projects/projboard/members.png",
        alt: "ProjBoard members page",
        title: "Members",
    },
    {
        src: "/projects/projboard/mytasks.png",
        alt: "ProjBoard personal tasks page",
        title: "My Tasks",
    },
];

const features: Feature[] = [
    {
        title: "JWT Authentication",
        description: "Secure authentication and protected routes.",
        icon: "lock",
    },
    {
        title: "Role-based Permissions",
        description:
            "Predictable permissions for owners, creators, assignees and reviewers.",
        icon: "shield",
    },
    {
        title: "Kanban Workflow",
        description:
            "Move work through backlog, ready, progress, review and done.",
        icon: "kanban",
    },
    {
        title: "Task Assignment & Review",
        description: "Assign work, set reviewers and manage review status.",
        icon: "check",
    },
    {
        title: "Cross-project View",
        description: "See assigned tasks across multiple projects.",
        icon: "layers",
    },
    {
        title: "Project Calendar",
        description: "Visualize task deadlines in a calendar view.",
        icon: "calendar",
    },
];

const technicalAreas: TechnicalArea[] = [
    {
        title: "Backend",
        icon: "server",
        points: [
            "FastAPI",
            "SQLAlchemy ORM",
            "PostgreSQL",
            "Alembic migrations",
            "JWT authentication",
            "Service-layer architecture",
        ],
    },
    {
        title: "Frontend",
        icon: "devices",
        points: [
            "React",
            "TypeScript",
            "Vite",
            "Reusable component architecture",
            "Axios",
        ],
    },
    {
        title: "API & Database Design",
        icon: "database",
        points: [
            "REST API with clear resources",
            "Relational data model",
            "Pydantic schemas",
            "Backend pytest unit tests",
        ],
    },
];

const challenges: ProjectChallenge[] = [
    {
        title: "Role-based permissions",
        description:
            "Keeping authorization rules across owners, task creators, assignees and reviewers required clearly separated backend rules.",
        icon: "lightbulb",
    },
    {
        title: "Database modelling",
        description:
            "Relational constraints and migrations clarified how schema choices affect both product behavior and long-term maintainability.",
        icon: "database",
    },
    {
        title: "Frontend–backend integration",
        description:
            "Synchronizing UI state with API behavior required consistent loading, error and permission handling across the application.",
        icon: "code",
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
                    github={projBoard?.github}
                    liveDemo={projBoard?.deployment}
                    quote="A project management platform built to learn, build and ship."
                />

                <div className="mt-6">
                    <ProjectMediaGallery items={mediaItems} />
                </div>

                <section className="mt-8" aria-labelledby="overview-title">
                    <h2 id="overview-title" className="detail-section-title">
                        Overview
                    </h2>
                    <div className="mt-4 max-w-6xl space-y-5 text-lg leading-8 text-text-muted sm:text-xl sm:leading-8 lg:text-2xl lg:leading-9">
                        <p>
                            ProjBoard is a full-stack project management
                            application built to explore backend architecture,
                            role-based permissions, relational data modelling
                            and frontend integration.
                        </p>
                        <p>
                            Teams can create projects, invite members, define
                            and assign tasks, track status through a Kanban
                            workflow, coordinate reviews and keep deadlines
                            visible from a shared calendar.
                        </p>
                    </div>
                </section>

                <section className="mt-8" aria-labelledby="features-title">
                    <h2 id="features-title" className="detail-section-title">
                        Key Features
                    </h2>
                    <div className="mt-3">
                        <FeatureGrid features={features} />
                    </div>
                </section>

                {architectureImage ? (
                    <div className="mt-8">
                        <ProjectArchitecture
                            image={architectureImage}
                            alt="ProjBoard system architecture"
                            description="A concise explanation of the architecture can be placed here alongside the final diagram."
                        />
                    </div>
                ) : null}

                <section className="mt-8" aria-labelledby="technical-title">
                    <h2 id="technical-title" className="detail-section-title">
                        Technical Implementation
                    </h2>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {technicalAreas.map((area) => (
                            <TechnicalCard key={area.title} {...area} />
                        ))}
                    </div>
                </section>

                <section className="mt-8" aria-labelledby="challenges-title">
                    <h2 id="challenges-title" className="detail-section-title">
                        Challenges &amp; Learnings
                    </h2>
                    <div className="mt-3 grid gap-3 lg:grid-cols-3">
                        {challenges.map((challenge) => (
                            <ChallengeCard
                                key={challenge.title}
                                {...challenge}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <div className="mt-8">
                <ProjectNavigation
                    next={{ name: "RAG Educational Assistant" }}
                />
            </div>
        </>
    );
}
