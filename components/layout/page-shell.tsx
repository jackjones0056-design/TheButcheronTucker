import { ReactNode } from "react";

export function PageShell({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <main className="container-shell py-12">
      <header className="mb-8 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 text-base text-black/70">{description}</p>
      </header>
      {children}
    </main>
  );
}
