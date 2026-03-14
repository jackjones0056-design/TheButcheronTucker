import Link from "next/link";
import { ProductItem } from "@/lib/catalog/types";

function formatMoney(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount / 100);
}

export function ProductCard({ product }: { product: ProductItem }) {
  const primaryVariation = product.variations[0];

  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-cover" />
        {product.featured ? (
          <span className="absolute left-3 top-3 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-white">Featured</span>
        ) : null}
      </div>
      <div className="space-y-3 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-black/60">{product.categoryLabel}</p>
        <h3 className="text-xl font-semibold text-brand-charcoal">{product.name}</h3>
        <p className="text-sm text-black/70">{product.shortDescription}</p>
        {primaryVariation ? (
          <div className="text-sm">
            <p className="font-semibold text-brand-charcoal">{formatMoney(primaryVariation.priceMoney.amount, primaryVariation.priceMoney.currency)}</p>
            <p className="text-black/60">{primaryVariation.name}</p>
          </div>
        ) : null}
        <div className="flex gap-2">
          <Link
            href={`/shop/${product.category}#${product.slug}`}
            className="rounded-md border border-black/20 px-3 py-2 text-sm font-medium hover:border-brand-red"
          >
            Details
          </Link>
          <Link
            href={`/pickup-order?item=${product.slug}`}
            className="rounded-md bg-brand-red px-3 py-2 text-sm font-semibold text-white"
          >
            Order for pickup
          </Link>
        </div>
      </div>
    </article>
  );
}
