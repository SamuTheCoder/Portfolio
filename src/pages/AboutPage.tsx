import { siteConfig } from '../data/site';

const aboutSections = [
  { title: 'Education', content: 'Education details will be added here.' },
  { title: 'Experience', content: 'Professional experience will be added here.' },
  { title: 'Technologies', content: 'A focused overview of tools and technologies will be added here.' },
  { title: 'Curriculum vitae', content: 'A downloadable CV will be available here.' },
];

export function AboutPage() {
  return (
    <main className="page-shell py-10 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">About</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Building useful software with care.
        </h1>
        <p className="mt-6 text-lg leading-8 text-text-muted">
          I’m {siteConfig.name}, a software engineer focused on backend development, AI integration,
          and dependable systems. This page will grow into a fuller view of my background and work.
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border-strong bg-border-strong sm:grid-cols-2">
        {aboutSections.map((section) => (
          <section key={section.title} className="bg-surface p-6 sm:p-8">
            <h2 className="font-semibold text-text-primary">{section.title}</h2>
            <p className="mt-2 text-sm leading-6 text-text-muted">{section.content}</p>
          </section>
        ))}
      </div>
    </main>
  );
}

