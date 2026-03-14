export const SHOP_CATEGORIES = [
  "beef",
  "pork",
  "chicken",
  "sausage",
  "seafood",
  "prepared-foods",
  "bundles",
] as const;

export type ShopCategory = (typeof SHOP_CATEGORIES)[number];

export type CatalogMoney = {
  amount: number;
  currency: "USD";
};

export type ProductVariation = {
  id: string;
  name: string;
  sku: string;
  priceMoney: CatalogMoney;
  unitName?: string;
  inventoryLabel?: string;
};

export type ProductItem = {
  id: string;
  slug: string;
  category: ShopCategory;
  categoryLabel: string;
  name: string;
  shortDescription: string;
  imageUrl: string;
  featured?: boolean;
  tags: string[];
  variations: ProductVariation[];
};

export type ProductSortKey = "featured" | "price-asc" | "price-desc" | "name";

export type ProductFilter = {
  category?: ShopCategory;
  tag?: string;
  featuredOnly?: boolean;
};

export type CatalogBrowsePayload = {
  categories: Array<{ slug: ShopCategory; label: string; description: string }>;
  products: ProductItem[];
  filters: {
    tags: string[];
    defaultSort: ProductSortKey;
    sortOptions: Array<{ value: ProductSortKey; label: string }>;
  };
};
