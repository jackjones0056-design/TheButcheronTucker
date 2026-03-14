import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { ShopBrowser } from "@/components/shop/shop-browser";
import { catalogProvider } from "@/lib/catalog";
import { SHOP_CATEGORIES, ShopCategory } from "@/lib/catalog/types";

export function generateStaticParams() {
  return SHOP_CATEGORIES.map((category) => ({ category }));
}

export default async function ShopCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryData = await catalogProvider.getCategoryBySlug(category);

  if (!categoryData) {
    notFound();
  }

  const payload = await catalogProvider.getBrowsePayload();
  const products = await catalogProvider.listProducts({
    filter: { category: category as ShopCategory },
    sort: payload.filters.defaultSort,
  });

  return (
    <PageShell title={`${categoryData.label} Selection`} description={categoryData.description}>
      <div className="mb-8 rounded-2xl border border-brand-red/20 bg-white p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-black/70">Need help choosing cuts? Call ahead and we will prep your pickup order.</p>
          <div className="flex gap-3">
            <Link href="/pickup-order" className="rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-white">
              Order for pickup
            </Link>
            <Link href="/shop" className="rounded-md border border-black/20 px-4 py-2 text-sm font-medium">
              Back to shop
            </Link>
          </div>
        </div>
      </div>

      <ShopBrowser payload={payload} initialProducts={products} fixedCategory={category as ShopCategory} />
    </PageShell>
  );
}
