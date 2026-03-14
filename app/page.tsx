import type { Metadata } from "next";
import { HomeLandingSections } from "@/components/sections/home-landing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Local Butcher Shop | Order Online, Pick Up In Store",
  description:
    "Order premium meats online from The Butcher on Tucker and pick up in store. Shop steaks, bundles, weekly specials, and catering packages.",
  keywords: [
    "butcher shop",
    "online meat order pickup",
    "meat bundles",
    "weekly meat specials",
    "local catering meats",
  ],
  openGraph: {
    title: "Order Online, Pick Up In Store | The Butcher on Tucker",
    description:
      "Premium local butcher cuts, family bundles, and weekly specials ready for fast in-store pickup.",
    type: "website",
  },
};

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ButcherShop",
    name: siteConfig.name,
    telephone: siteConfig.phoneDial,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.cityStateZip,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    areaServed: "Local pickup customers",
    makesOffer: ["Online pickup orders", "Meat bundles", "Weekly specials", "Catering packages"],
  };

  return (
    <>
      <HomeLandingSections />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
