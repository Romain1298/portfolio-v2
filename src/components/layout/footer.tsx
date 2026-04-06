export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-sm text-muted">
          &copy; {currentYear} Romain. Tous droits réservés.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/romain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent-light"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/romain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent-light"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
