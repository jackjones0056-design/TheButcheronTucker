import { PageShell } from "@/components/layout/page-shell";

export default async function ShopCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  return (
    <PageShell
      title={`${category.charAt(0).toUpperCase() + category.slice(1)} Selection`}
      description="Placeholder product grid. Will be populated from Square catalog objects and item variations."
    >
      <div className="rounded-xl border border-dashed border-black/20 bg-white p-6 text-sm text-black/70">
        Product cards will render here once Square integration is implemented.
      </div>
    </PageShell>
  );
}
