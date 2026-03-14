import { PageShell } from "@/components/layout/page-shell";

export default function CateringPage() {
  return (
    <PageShell
      title="Catering Inquiry"
      description="Collect event details and contact preferences for custom butcher and catering packages."
    >
      <form className="grid gap-4 rounded-xl border border-black/10 bg-white p-6 sm:grid-cols-2">
        <input className="rounded-md border border-black/20 px-3 py-2" placeholder="Name" />
        <input className="rounded-md border border-black/20 px-3 py-2" placeholder="Email" />
        <input className="rounded-md border border-black/20 px-3 py-2" placeholder="Event Date" />
        <input className="rounded-md border border-black/20 px-3 py-2" placeholder="Guest Count" />
        <textarea className="sm:col-span-2 rounded-md border border-black/20 px-3 py-2" rows={4} placeholder="What do you need?" />
        <button type="button" className="sm:col-span-2 rounded-md bg-brand-red px-4 py-2 font-semibold text-white">Submit Inquiry (placeholder)</button>
      </form>
    </PageShell>
  );
}
