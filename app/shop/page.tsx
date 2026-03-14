import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { ProductCard } from "@/components/shop/product-card";
import { ShopBrowser } from "@/components/shop/shop-browser";
import { catalogProvider } from "@/lib/catalog";

export default async function ShopPage() {
  const payload = await catalogProvider.getBrowsePayload();
  const products = await catalogProvider.listProducts({ sort: payload.filters.defaultSort });
  const featuredBundles = await catalogProvider.getFeaturedBundles();

  return (
    <PageShell
      title="Shop the Counter"
      description="Browse our full butcher inventory with filters and sorting. Every item is set up to map to Square catalog items and variations as we launch online ordering."
    >
      <div className="mb-8 rounded-2xl border border-brand-red/20 bg-white p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Order for pickup</h2>
            <p className="text-sm text-black/70">Reserve your cuts now and pick up fresh at the shop.</p>
          </div>
          <Link href="/pickup-order" className="rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-white">
            Start pickup order
          </Link>
        </div>
      </div>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">Shop by Category</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {payload.categories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop/${category.slug}`}
              className="rounded-xl border border-black/10 bg-white p-4 hover:border-brand-red"
            >
              <p className="text-lg font-semibold">{category.label}</p>
              <p className="text-sm text-black/70">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {featuredBundles.length > 0 ? (
        <section className="mb-10 space-y-4">
          <div className="flex items-end justify-between gap-3">
            <h2 className="text-2xl font-semibold">Featured Bundles</h2>
            <Link href="/shop/bundles" className="text-sm font-medium text-brand-red">
              View all bundles
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBundles.map((bundle) => (
              <ProductCard key={bundle.id} product={bundle} />
            ))}
          </div>
        </section>
      ) : null}

      <ShopBrowser payload={payload} initialProducts={products} />
    </PageShell>
  );
}
