import { PageShell } from "@/components/layout/page-shell";

export default function BundlesPage() {
  return (
    <PageShell
      title="Meat Bundles"
      description="High-value bundles designed to increase average order size and simplify customer decisions."
    >
      <div className="space-y-3">
        {["Family Bundle", "Grill Master Bundle", "Meal Prep Bundle"].map((bundle) => (
          <article key={bundle} className="rounded-xl border border-black/10 bg-white p-5">
            <h2 className="font-semibold">{bundle}</h2>
            <p className="mt-1 text-sm text-black/70">Placeholder content for bundle details and Square item linkage.</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
