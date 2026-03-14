import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="container-shell grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-semibold text-brand-red">{siteConfig.name}</h2>
          <p className="mt-2 text-sm">Premium cuts, local service, convenient pickup.</p>
        </div>
        <div>
          <h3 className="font-semibold">Shop</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/shop">All Categories</Link></li>
            <li><Link href="/specials">Weekly Specials</Link></li>
            <li><Link href="/bundles">Meat Bundles</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Business</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/catering">Catering Inquiry</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
        </div>
      </div>
    </footer>
  );
}
