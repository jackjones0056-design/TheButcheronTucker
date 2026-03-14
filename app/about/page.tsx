import { PageShell } from "@/components/layout/page-shell";

export default function AboutPage() {
  return (
    <PageShell
      title="About Our Shop"
      description="Tell the butcher shop story, sourcing standards, and trust indicators."
    >
      <div className="rounded-xl border border-black/10 bg-white p-6 text-black/80">
        <p>
          We are a local butcher shop focused on quality cuts, personal service, and transparent sourcing. This section
          is a placeholder for your story, team photos, and sourcing commitments.
        </p>
      </div>
    </PageShell>
  );
}
