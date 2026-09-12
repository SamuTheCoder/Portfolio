export const projectCategories = [
  'Backend',
  'Full Stack',
  'AI / ML',
  'DevOps',
  'Embedded / Electronics',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  categories: ProjectCategory[];
  technologies: string[];
  github?: string;
  deployment?: string;
  coverImage?: string;
  images?: string[];
  videos?: string[];
  featured?: boolean;
}

