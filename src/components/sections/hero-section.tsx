"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GlowButton } from "@/components/ui/glow-button";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Respect de la préférence utilisateur pour les animations réduites
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".hero-animate", { opacity: 1, y: 0 });
        return;
      }

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animation séquentielle : salutation → nom → sous-titre → CTA
      timeline
        .from(".hero-greeting", {
          y: 30,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          ".hero-name span",
          {
            y: 50,
            opacity: 0,
            stagger: 0.08,
            duration: 0.7,
          },
          "-=0.2"
        )
        .from(
          ".hero-subtitle",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          ".hero-tagline",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2"
        )
        .from(
          ".hero-cta",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2"
        );

      // Orbes décoratives flottantes en continu
      gsap.to(".hero-orb-1", {
        y: -20,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orb-2", {
        y: 15,
        x: -15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef }
  );

  // Chaque lettre du nom dans un span pour l'animation stagger
  const nameLetters = "Romain".split("");

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-grid px-6"
    >
      {/* Orbes décoratives en arrière-plan */}
      <div
        className="hero-orb-1 absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="hero-orb-2 absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl text-center">
        <p className="hero-animate hero-greeting mb-4 font-mono text-sm tracking-widest text-accent-light">
          Salut, je suis
        </p>

        <h1 className="hero-name mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
          {nameLetters.map((letter, index) => (
            <span key={index} className="inline-block">
              {letter}
            </span>
          ))}
        </h1>

        <p className="hero-animate hero-subtitle mb-4 text-xl text-muted sm:text-2xl">
          Développeur{" "}
          <span className="text-accent-light">Fullstack</span>
        </p>

        <p className="hero-animate hero-tagline mb-10 max-w-xl mx-auto text-base text-muted/80">
          Je conçois et développe des applications web modernes, performantes et
          élégantes.
        </p>

        <div className="hero-animate hero-cta">
          <GlowButton href="#projects">Voir mes projets</GlowButton>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-muted"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
