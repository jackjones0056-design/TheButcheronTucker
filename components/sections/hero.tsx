import Link from "next/link";

export function HeroSection() {
  return (
    <section className="container-shell py-16">
      <div className="rounded-2xl bg-brand-charcoal p-8 text-white sm:p-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/80">Neighborhood Butcher Shop</p>
        <h1 className="text-3xl font-bold sm:text-5xl">Fresh cuts, curated bundles, and easy online pickup.</h1>
        <p className="mt-4 max-w-2xl text-white/85">
          Browse our Square-powered catalog, reserve your order online, and pick up when it suits your schedule.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/pickup-order" className="rounded-md bg-brand-red px-5 py-3 font-semibold text-white">
            Start Pickup Order
          </Link>
          <Link href="/shop" className="rounded-md border border-white/30 px-5 py-3 font-semibold">
            Browse Shop
          </Link>
        </div>
      </div>
    </section>
  );
}
