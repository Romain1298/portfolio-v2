import type { Project } from "@/types";

// Projets à afficher dans le portfolio — à compléter avec les vraies descriptions
export const projects: Project[] = [
  {
    id: "hypescout-ai",
    title: "HypeScout AI",
    description:
      "Plateforme d'analyse de tendances propulsée par l'IA pour les marques et influenceurs.",
    image: "/images/projects/hypescout-ai.webp",
    techStack: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    githubUrl: "https://github.com/romain/hypescout-ai",
    category: "ai",
    featured: true,
  },
  {
    id: "codeforge",
    title: "CodeForge",
    description:
      "Plateforme d'apprentissage du code interactive avec exercices pratiques.",
    image: "/images/projects/codeforge.webp",
    techStack: ["React", "Node.js", "TypeScript", "Monorepo"],
    githubUrl: "https://github.com/romain/codeforge",
    category: "web-app",
    featured: true,
  },
  {
    id: "gametribe",
    title: "GameTribe",
    description:
      "Réseau social gaming avec matchmaking et système de communautés.",
    image: "/images/projects/gametribe.webp",
    techStack: ["Next.js", "Supabase", "Socket.io", "Tailwind CSS"],
    githubUrl: "https://github.com/romain/gametribe",
    category: "gaming",
    featured: true,
  },
  {
    id: "learnsy",
    title: "Learnsy",
    description:
      "Marketplace de formations en ligne avec lecteur vidéo et suivi de progression.",
    image: "/images/projects/learnsy.webp",
    techStack: ["Next.js", "Prisma", "Mux", "Stripe"],
    githubUrl: "https://github.com/romain/learnsy",
    category: "saas",
    featured: true,
  },
  {
    id: "flipos",
    title: "FlipOS",
    description: "Application web moderne avec stack Next.js de dernière génération.",
    image: "/images/projects/flipos.webp",
    techStack: ["Next.js", "React 19", "Supabase", "Tailwind v4"],
    githubUrl: "https://github.com/romain/flipos",
    category: "web-app",
    featured: false,
  },
  {
    id: "cerberus",
    title: "Cerberus",
    description:
      "Bot de trading crypto avec stratégies automatisées en temps réel.",
    image: "/images/projects/cerberus.webp",
    techStack: ["Python", "WebSocket", "Trading APIs"],
    githubUrl: "https://github.com/romain/cerberus",
    category: "crypto",
    featured: false,
  },
  {
    id: "savestate",
    title: "SaveState",
    description:
      "Plateforme de partage de sauvegardes de jeux et défis communautaires.",
    image: "/images/projects/savestate.webp",
    techStack: ["Next.js", "Supabase", "Cloud Storage"],
    githubUrl: "https://github.com/romain/savestate",
    category: "gaming",
    featured: false,
  },
  {
    id: "zenova-host",
    title: "ZenovaHost",
    description: "Solution d'hébergement web avec tableau de bord de gestion.",
    image: "/images/projects/zenova-host.webp",
    techStack: ["React", "Node.js", "Docker"],
    githubUrl: "https://github.com/romain/zenova-host",
    category: "tool",
    featured: false,
  },
  {
    id: "vinly",
    title: "Vinly",
    description:
      "Application web avec architecture worker pour le traitement en arrière-plan.",
    image: "/images/projects/vinly.webp",
    techStack: ["React", "Workers", "TypeScript"],
    githubUrl: "https://github.com/romain/vinly",
    category: "web-app",
    featured: false,
  },
  {
    id: "community",
    title: "CommUnity",
    description:
      "Plateforme communautaire favorisant les échanges et la collaboration.",
    image: "/images/projects/community.webp",
    techStack: ["React", "Node.js", "TypeScript"],
    githubUrl: "https://github.com/romain/community",
    category: "web-app",
    featured: false,
  },
  {
    id: "groweasy",
    title: "GrowEasy",
    description: "Outil de croissance avec modules d'apprentissage intégrés.",
    image: "/images/projects/groweasy.webp",
    techStack: ["React", "Node.js"],
    githubUrl: "https://github.com/romain/groweasy",
    category: "saas",
    featured: false,
  },
];
