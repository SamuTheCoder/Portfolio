import { useMemo, useState } from "react";
import {
    ProjectFilters,
    type CategoryFilter,
} from "../components/projects/ProjectFilters";
import { ProjectGrid } from "../components/projects/ProjectGrid";
import { ProjectSearch } from "../components/projects/ProjectSearch";
import { SectionHeader } from "../components/ui/SectionHeader";
import { projects } from "../data/projects";
import { siteConfig } from "../data/site";

export function ProjectsPage() {
    const [query, setQuery] = useState("");
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [category, setCategory] = useState<CategoryFilter>("All");
    const [technologies, setTechnologies] = useState<string[]>([]);

    const filteredProjects = useMemo(() => {
        const normalizedQuery = query.trim().toLocaleLowerCase();

        return projects.filter((project) => {
            const searchableContent = [
                project.name,
                project.shortDescription,
                project.description,
                ...project.categories,
                ...project.technologies,
            ]
                .join(" ")
                .toLocaleLowerCase();

            const matchesSearch =
                normalizedQuery.length === 0 ||
                searchableContent.includes(normalizedQuery);
            const matchesCategory =
                category === "All" || project.categories.includes(category);
            const matchesTechnologies = technologies.every((technology) => {
                if (technology === "Others") {
                    return project.technologies.some(
                        (item) =>
                            ![
                                "Python",
                                "FastAPI",
                                "React",
                                "TypeScript",
                                "PostgreSQL",
                                "Docker",
                                "SQLAlchemy",
                                "Alembic",
                                "PyTorch",
                                "GitLab CI",
                                "GitHub Actions",
                                "C / C++",
                                "SPICE",
                                "Verilog",
                            ].includes(item),
                    );
                }
                return project.technologies.includes(technology);
            });

            return matchesSearch && matchesCategory && matchesTechnologies;
        });
    }, [category, query, technologies]);

    const handleTechnologyToggle = (technology: string) => {
        setTechnologies((current) =>
            current.includes(technology)
                ? current.filter((item) => item !== technology)
                : [...current, technology],
        );
    };

    const handleClearFilters = () => {
        setCategory("All");
        setTechnologies([]);
    };

    const activeFilterCount =
        technologies.length + (category === "All" ? 0 : 1);

    return (
        <main>
            <section className="hero-background border-b border-border">
                <div className="page-shell grid gap-8 py-6 sm:pb-3 sm:pt-7 lg:grid-cols-[1fr_190px] lg:items-center">
                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-text-muted">
                            Build · Learn · Improve · Repeat
                        </p>
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-text-primary">
                            {siteConfig.name}
                        </h1>
                        <p className="mt-1 text-lg font-medium text-text-secondary sm:text-xl">
                            {siteConfig.role}
                        </p>
                        <p className="mt-2 max-w-2xl text-sm leading-5 text-text-muted">
                            {siteConfig.introduction}
                        </p>
                    </div>
                </div>
            </section>

            <section
                className="page-shell py-5"
                aria-labelledby="projects-heading"
            >
                <div>
                    <SectionHeader
                        id="projects-heading"
                        title="Projects"
                        description="A collection of personal and academic projects."
                        aside={`${filteredProjects.length} ${filteredProjects.length === 1 ? "project" : "projects"}`}
                    />
                </div>

                <div className="mt-2">
                    <ProjectSearch
                        value={query}
                        onChange={setQuery}
                        filtersOpen={filtersOpen}
                        onToggleFilters={() => setFiltersOpen((open) => !open)}
                        activeFilterCount={activeFilterCount}
                    />
                </div>

                {filtersOpen ? (
                    <div className="mt-2">
                        <ProjectFilters
                            category={category}
                            technologies={technologies}
                            onCategoryChange={setCategory}
                            onTechnologyToggle={handleTechnologyToggle}
                            onClear={handleClearFilters}
                        />
                    </div>
                ) : null}

                <div className="mt-4">
                    <ProjectGrid projects={filteredProjects} />
                </div>
            </section>
        </main>
    );
}
