export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "The Butcher on Tucker",
  phone: process.env.NEXT_PUBLIC_SHOP_PHONE ?? "(555) 010-1212",
  email: process.env.NEXT_PUBLIC_SHOP_EMAIL ?? "hello@butcherontucker.com",
  squareLocationId: process.env.SQUARE_LOCATION_ID ?? "",
};
