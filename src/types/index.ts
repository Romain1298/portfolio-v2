export type ProjectCategory =
  | "web-app"
  | "saas"
  | "gaming"
  | "ai"
  | "crypto"
  | "tool";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: ProjectCategory;
  featured: boolean;
}
