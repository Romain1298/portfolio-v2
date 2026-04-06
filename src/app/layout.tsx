import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Romain | Développeur Fullstack",
    template: "%s | Romain",
  },
  description:
    "Portfolio de Romain, développeur fullstack passionné par la création d'applications web modernes et performantes.",
  metadataBase: new URL("https://romain.dev"),
  openGraph: {
    title: "Romain | Développeur Fullstack",
    description:
      "Portfolio de Romain, développeur fullstack passionné par la création d'applications web modernes et performantes.",
    type: "website",
    locale: "fr_FR",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romain | Développeur Fullstack",
    description:
      "Portfolio de Romain, développeur fullstack passionné par la création d'applications web modernes et performantes.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
