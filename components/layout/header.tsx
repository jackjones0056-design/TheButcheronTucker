import Link from "next/link";

const links = [
  ["Shop", "/shop"],
  ["Bundles", "/bundles"],
  ["Specials", "/specials"],
  ["Catering", "/catering"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Header() {
  return (
    <header className="border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-brand-red">
          The Butcher on Tucker
        </Link>
        <nav className="hidden gap-5 text-sm font-medium md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-brand-red">
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/pickup-order"
          className="rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-white"
        >
          Order Pickup
        </Link>
      </div>
    </header>
  );
}
