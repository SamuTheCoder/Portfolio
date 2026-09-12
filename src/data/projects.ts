import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        slug: "projboard",
        name: "ProjBoard",
        shortDescription:
            "A full-stack project management platform for teams to plan, track, and ship great products together.",
        description:
            "ProjBoard brings project planning, task ownership, and delivery tracking into a focused workspace designed for small product teams.",
        categories: ["Full Stack", "Backend"],
        technologies: [
            "FastAPI",
            "React",
            "PostgreSQL",
            "Docker",
            "TypeScript",
        ],
        github: "https://github.com/",
        coverImage: "/projects/projboard.svg",
    },
    {
        slug: "rag-educational-assistant",
        name: "RAG Educational Assistant",
        shortDescription:
            "An AI-powered learning platform using RAG to provide accurate, sourced answers from educational content.",
        description:
            "A retrieval-augmented learning assistant that grounds its answers in course material and helps students explore difficult concepts.",
        categories: ["AI / ML", "Backend"],
        technologies: ["Python", "FastAPI", "PyTorch", "PostgreSQL", "Docker"],
        github: "https://github.com/",
        coverImage: "/projects/rag-assistant.svg",
    },
    {
        slug: "git-repository-mirror",
        name: "Git Repository Mirror",
        shortDescription:
            "Automated GitLab and GitHub repository mirroring with scheduling, monitoring, and clear error handling.",
        description:
            "A dependable automation service for synchronizing repositories across hosting providers, with observable jobs and failure recovery.",
        categories: ["DevOps", "Backend"],
        technologies: ["Python", "Docker", "GitLab CI", "GitHub Actions"],
        github: "https://github.com/",
        coverImage: "/projects/git-mirror.svg",
    },
];
