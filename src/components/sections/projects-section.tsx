"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      // Animation du titre au scroll
      gsap.from(".projects-heading", {
        x: -40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 85%",
        },
      });

      // Animation stagger des cartes de projets
      gsap.from(".project-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  // Projets mis en avant en premier, puis le reste
  const sortedProjects = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative px-6 py-24"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="projects-heading">
          <SectionHeading
            title="Mes projets"
            subtitle="Une sélection de projets sur lesquels j'ai travaillé."
          />
        </div>

        <div className="projects-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project) => (
            <div key={project.id} className="project-card">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
