import { GlowButton } from "@/components/ui/glow-button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-grid px-6 text-center">
      <h1 className="mb-2 font-mono text-8xl font-bold text-accent">404</h1>
      <p className="mb-8 text-xl text-muted">
        Cette page n&apos;existe pas.
      </p>
      <GlowButton href="/">Retour à l&apos;accueil</GlowButton>
    </div>
  );
}
