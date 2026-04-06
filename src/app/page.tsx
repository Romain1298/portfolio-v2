import { GSAPProvider } from "@/components/providers/gsap-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <GSAPProvider>
      {/* Lien d'accessibilité pour sauter au contenu principal */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu principal
      </a>

      <Header />

      <main id="main">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </GSAPProvider>
  );
}
