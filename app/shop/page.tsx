import { PageShell } from "@/components/layout/page-shell";
import Link from "next/link";

const categories = ["beef", "pork", "poultry", "sausage", "seafood"];

export default function ShopPage() {
  return (
    <PageShell
      title="Shop by Category"
      description="This page will display category-level inventory from Square Catalog API in the next phase."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/shop/${category}`}
            className="rounded-xl border border-black/10 bg-white p-5 text-lg font-semibold capitalize hover:border-brand-red"
          >
            {category}
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
