export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "The Butcher on Tucker",
  phone: process.env.NEXT_PUBLIC_SHOP_PHONE ?? "(555) 010-1212",
  phoneDial: process.env.NEXT_PUBLIC_SHOP_PHONE_DIAL ?? "+15550101212",
  email: process.env.NEXT_PUBLIC_SHOP_EMAIL ?? "hello@butcherontucker.com",
  squareLocationId: process.env.SQUARE_LOCATION_ID ?? "",
  address: {
    street: process.env.NEXT_PUBLIC_SHOP_ADDRESS_STREET ?? "123 Tucker Ave",
    cityStateZip: process.env.NEXT_PUBLIC_SHOP_ADDRESS_CITY_STATE_ZIP ?? "Your City, ST 12345",
  },
  hours: {
    weekday: process.env.NEXT_PUBLIC_SHOP_HOURS_WEEKDAY ?? "8:00 AM - 6:00 PM",
    saturday: process.env.NEXT_PUBLIC_SHOP_HOURS_SATURDAY ?? "8:00 AM - 4:00 PM",
    sunday: process.env.NEXT_PUBLIC_SHOP_HOURS_SUNDAY ?? "Closed",
  },
};
