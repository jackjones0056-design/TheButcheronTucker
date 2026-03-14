import { PageShell } from "@/components/layout/page-shell";

export default function SpecialsPage() {
  return (
    <PageShell
      title="Weekly Specials"
      description="Promote limited-time discounts and seasonal products to encourage repeat visits."
    >
      <div className="rounded-xl border border-black/10 bg-white p-5 text-sm text-black/70">
        Weekly specials feed placeholder. Next step: pull flagged items from Square catalog and discounts.
      </div>
    </PageShell>
  );
}
