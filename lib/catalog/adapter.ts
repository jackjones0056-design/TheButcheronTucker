import { mockCatalogBrowsePayload } from "@/lib/catalog/mock-data";
import { filterProducts, sortProducts } from "@/lib/catalog/query";
import { CatalogBrowsePayload, ProductFilter, ProductItem, ProductSortKey, ShopCategory } from "@/lib/catalog/types";

export type CatalogAdapter = {
  getBrowsePayload(): Promise<CatalogBrowsePayload>;
  listProducts(input?: { filter?: ProductFilter; sort?: ProductSortKey }): Promise<ProductItem[]>;
  getFeaturedBundles(limit?: number): Promise<ProductItem[]>;
  getCategoryBySlug(slug: string): Promise<CatalogBrowsePayload["categories"][number] | null>;
};

export const mockCatalogAdapter: CatalogAdapter = {
  async getBrowsePayload() {
    return mockCatalogBrowsePayload;
  },

  async listProducts(input = {}) {
    const filtered = filterProducts(mockCatalogBrowsePayload.products, input.filter);
    return sortProducts(filtered, input.sort);
  },

  async getFeaturedBundles(limit = 3) {
    const bundles = await this.listProducts({ filter: { category: "bundles", featuredOnly: true }, sort: "featured" });
    return bundles.slice(0, limit);
  },

  async getCategoryBySlug(slug: string) {
    return mockCatalogBrowsePayload.categories.find((category) => category.slug === (slug as ShopCategory)) ?? null;
  },
};
