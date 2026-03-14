import { PageShell } from "@/components/layout/page-shell";

export default function PickupOrderPage() {
  return (
    <PageShell
      title="Online Pickup Ordering"
      description="This flow will connect to Square Orders, Payments, and fulfillment APIs in a future implementation step."
    >
      <ol className="space-y-3 rounded-xl border border-black/10 bg-white p-6 text-sm text-black/80">
        <li>1. Customer chooses products from Square-synced catalog.</li>
        <li>2. Customer selects a pickup window.</li>
        <li>3. Customer confirms payment through Square.</li>
        <li>4. Staff receives order and prepares pickup.</li>
      </ol>
    </PageShell>
  );
}
