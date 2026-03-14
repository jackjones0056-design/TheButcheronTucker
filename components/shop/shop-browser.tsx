"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/shop/product-card";
import { filterProducts, sortProducts } from "@/lib/catalog/query";
import { CatalogBrowsePayload, ProductItem, ProductSortKey, ShopCategory } from "@/lib/catalog/types";
import Link from "next/link";

export function ShopBrowser({
  payload,
  initialProducts,
  fixedCategory,
}: {
  payload: CatalogBrowsePayload;
  initialProducts: ProductItem[];
  fixedCategory?: ShopCategory;
}) {
  const [sort, setSort] = useState<ProductSortKey>(payload.filters.defaultSort);
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const products = useMemo(() => {
    const filtered = filterProducts(initialProducts, {
      tag: selectedTag === "all" ? undefined : selectedTag,
      featuredOnly,
    });

    return sortProducts(filtered, sort);
  }, [featuredOnly, initialProducts, selectedTag, sort]);

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-black/10 bg-white p-4">
        <div className="grid gap-3 md:grid-cols-3">
          <label className="text-sm font-medium">
            Sort by
            <select value={sort} onChange={(event) => setSort(event.target.value as ProductSortKey)} className="mt-1 w-full rounded-md border border-black/20 p-2 text-sm">
              {payload.filters.sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium">
            Filter by tag
            <select value={selectedTag} onChange={(event) => setSelectedTag(event.target.value)} className="mt-1 w-full rounded-md border border-black/20 p-2 text-sm">
              <option value="all">All</option>
              {payload.filters.tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-end gap-2 pb-2 text-sm font-medium">
            <input type="checkbox" checked={featuredOnly} onChange={(event) => setFeaturedOnly(event.target.checked)} />
            Featured only
          </label>
        </div>
      </div>

      {!fixedCategory ? (
        <div className="flex flex-wrap gap-2">
          {payload.categories.map((category) => (
            <Link key={category.slug} href={`/shop/${category.slug}`} className="rounded-full border border-black/20 bg-white px-4 py-2 text-sm hover:border-brand-red">
              {category.label}
            </Link>
          ))}
        </div>
      ) : null}

      <p className="text-sm text-black/70">{products.length} products available for pickup ordering.</p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} id={product.slug}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
