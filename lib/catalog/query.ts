import { ProductFilter, ProductItem, ProductSortKey } from "@/lib/catalog/types";

export function getPrimaryPrice(product: ProductItem) {
  return product.variations[0]?.priceMoney.amount ?? Number.MAX_SAFE_INTEGER;
}

export function filterProducts(products: ProductItem[], filter?: ProductFilter) {
  if (!filter) return products;

  return products.filter((product) => {
    if (filter.category && product.category !== filter.category) return false;
    if (filter.tag && !product.tags.includes(filter.tag)) return false;
    if (filter.featuredOnly && !product.featured) return false;
    return true;
  });
}

export function sortProducts(products: ProductItem[], sort: ProductSortKey = "featured") {
  const output = [...products];

  switch (sort) {
    case "name":
      output.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "price-asc":
      output.sort((a, b) => getPrimaryPrice(a) - getPrimaryPrice(b));
      break;
    case "price-desc":
      output.sort((a, b) => getPrimaryPrice(b) - getPrimaryPrice(a));
      break;
    case "featured":
    default:
      output.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || a.name.localeCompare(b.name));
      break;
  }

  return output;
}
