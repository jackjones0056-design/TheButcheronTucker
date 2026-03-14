import Link from "next/link";
import { siteConfig } from "@/lib/site";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="max-w-3xl space-y-3">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold tracking-tight text-brand-charcoal sm:text-3xl">{title}</h2>
      <p className="text-sm text-black/70 sm:text-base">{description}</p>
    </header>
  );
}

type ImageSlotProps = {
  label: string;
};

function ImageSlot({ label }: ImageSlotProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex aspect-[4/3] items-end rounded-xl border border-black/10 bg-gradient-to-br from-brand-charcoal via-brand-charcoal to-brand-red p-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/80"
    >
      {label}
    </div>
  );
}

const featuredCategories = [
  {
    title: "Steaks & Premium Cuts",
    description: "Hand-trimmed ribeyes, strips, filets, and butcher recommendations ready for tonight's dinner.",
    cta: "Shop Steaks",
    href: "/shop",
    imageLabel: "Premium steak display image placeholder",
  },
  {
    title: "Pork, Chicken & Everyday Favorites",
    description: "Fresh proteins for weeknight meals, stocked daily for quick pickup and easy meal planning.",
    cta: "Shop Everyday Cuts",
    href: "/shop",
    imageLabel: "Fresh pork and chicken image placeholder",
  },
  {
    title: "Sausages, Marinated & Ready-to-Cook",
    description: "House-seasoned options built for fast dinners, tailgates, and weekend grilling without guesswork.",
    cta: "Browse Ready-to-Cook",
    href: "/shop",
    imageLabel: "Prepared meats and sausages image placeholder",
  },
];

const bundles = [
  {
    name: "Family Freezer Bundle",
    details: "A full week of dinners with steaks, chops, chicken, and ground beef in one value pack.",
    price: "Starting at $129",
  },
  {
    name: "Grill Weekend Bundle",
    details: "Ribeyes, burgers, sausages, and chicken skewers for hosting without a second store run.",
    price: "Starting at $99",
  },
  {
    name: "Meal Prep Protein Pack",
    details: "Lean proteins portioned for high-protein lunches, post-workout meals, and simple reheats.",
    price: "Starting at $89",
  },
];

const specials = [
  {
    title: "Wednesday Steak Night",
    details: "Save 15% on selected steaks when you order online for same-day pickup.",
  },
  {
    title: "Weekend Smokehouse Deal",
    details: "Buy 2 racks of ribs and get house rub + sauce included at no extra charge.",
  },
  {
    title: "Bulk Ground Beef Special",
    details: "Stock up and save with 10 lb family packs at limited-time pricing.",
  },
];

const trustPoints = [
  "USDA-inspected meats cut in-house every day",
  "Clear pricing and honest recommendations from experienced butchers",
  "Reliable pickup windows so orders are ready when promised",
  "Locally rooted service focused on families, teams, and neighborhood events",
];

export function HomeLandingSections() {
  return (
    <>
      <section className="container-shell py-10 sm:py-14">
        <div className="grid gap-8 rounded-3xl bg-brand-charcoal p-6 text-white sm:p-10 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">The Butcher on Tucker</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Order online. Pick up in store. Serve better meals tonight.</h1>
            <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
              Premium local cuts, value bundles, and weekly specials prepared by a team that knows your name and your grill.
              Place your order in minutes and pick up fresh at your chosen time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pickup-order"
                className="rounded-md bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#761919]"
              >
                Start Pickup Order
              </Link>
              <Link
                href="/specials"
                className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See This Week's Specials
              </Link>
            </div>
          </div>
          <aside className="space-y-4 rounded-2xl border border-white/15 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Why customers order online</h2>
            <ul className="space-y-3 text-sm text-white/85">
              <li>• Reserve your cuts before they sell out.</li>
              <li>• Skip waiting and pick up on your schedule.</li>
              <li>• Build bigger baskets with bundles and specials.</li>
            </ul>
            <div className="rounded-xl bg-white/10 p-4 text-sm">
              <p className="font-semibold">Today's pickup hours</p>
              <p className="mt-1 text-white/80">{siteConfig.hours.weekday}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-shell py-10">
        <SectionHeader
          eyebrow="Shop by category"
          title="Featured categories built for quick decisions"
          description="From premium steaks to weeknight staples, each category is optimized for fast online ordering and easy in-store pickup."
        />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {featuredCategories.map((category) => (
            <article key={category.title} className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
              <ImageSlot label={category.imageLabel} />
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="text-sm text-black/70">{category.description}</p>
                <Link href={category.href} className="inline-flex text-sm font-semibold text-brand-red hover:underline">
                  {category.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
          <SectionHeader
            eyebrow="Best sellers"
            title="Meat bundles that raise value and simplify the cart"
            description="Our top-performing bundles are designed for families, grill nights, and meal prep customers who want quality and convenience in one click."
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {bundles.map((bundle) => (
              <article key={bundle.name} className="rounded-xl border border-black/10 bg-brand-cream p-5">
                <h3 className="font-semibold">{bundle.name}</h3>
                <p className="mt-2 text-sm text-black/70">{bundle.details}</p>
                <p className="mt-3 text-sm font-semibold text-brand-red">{bundle.price}</p>
              </article>
            ))}
          </div>
          <Link href="/bundles" className="mt-6 inline-flex rounded-md bg-brand-red px-5 py-3 text-sm font-semibold text-white">
            Shop Meat Bundles
          </Link>
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="grid gap-6 rounded-2xl border border-black/10 bg-white p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="Limited-time deals"
              title="Weekly specials that bring customers back"
              description="Fresh markdowns and rotating offers help your household save while still getting butcher-quality proteins."
            />
            <ul className="mt-5 space-y-4">
              {specials.map((special) => (
                <li key={special.title} className="rounded-lg border border-black/10 bg-brand-cream p-4">
                  <h3 className="font-semibold">{special.title}</h3>
                  <p className="mt-1 text-sm text-black/70">{special.details}</p>
                </li>
              ))}
            </ul>
            <Link href="/specials" className="mt-6 inline-flex rounded-md border border-brand-red px-5 py-3 text-sm font-semibold text-brand-red">
              Claim Weekly Specials
            </Link>
          </div>
          <ImageSlot label="Weekly specials display case image placeholder" />
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="grid gap-8 rounded-2xl border border-black/10 bg-white p-6 sm:p-8 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Why choose us"
              title="Butcher quality without the guesswork"
              description="Every order is cut, packed, and labeled by a team focused on quality, consistency, and straightforward service."
            />
          </div>
          <ul className="space-y-3 text-sm text-black/80">
            {trustPoints.map((point) => (
              <li key={point} className="rounded-lg border border-black/10 bg-brand-cream p-4">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="grid gap-6 rounded-2xl bg-[#2D2D2D] p-6 text-white sm:p-8 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="Veteran & family owned"
              title="Built on service, trusted by local families"
              description="We're a veteran-owned, family-run butcher shop committed to fair pricing, dependable quality, and treating every customer like a neighbor."
            />
            <p className="mt-4 text-sm text-white/80">
              Whether you're feeding a household, a team, or a company event, we help you order with confidence and pick up stress-free.
            </p>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/5 p-5 text-sm">
            <p className="font-semibold">Serving our community since 2012</p>
            <p className="mt-2 text-white/80">Local sourcing relationships, transparent cuts, and personalized recommendations from experienced staff.</p>
            <Link href="/about" className="mt-4 inline-flex font-semibold text-white underline-offset-4 hover:underline">
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="rounded-2xl border border-brand-red/30 bg-brand-red p-6 text-white sm:p-8">
          <SectionHeader
            eyebrow="Catering"
            title="Need proteins for an event, office lunch, or team cookout?"
            description="Tell us your headcount, budget, and timeline. We'll build a custom meat and sides plan that's pickup-ready and event-safe."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/catering" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand-red">
              Request Catering Quote
            </Link>
            <Link href="/contact" className="rounded-md border border-white/50 px-5 py-3 text-sm font-semibold text-white">
              Call for Same-Week Availability
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="Location and contact" className="container-shell py-10 pb-24 sm:pb-12">
        <div className="grid gap-4 rounded-2xl border border-black/10 bg-white p-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold">Visit us</p>
            <p className="mt-1 text-black/70">{siteConfig.address.street}</p>
            <p className="text-black/70">{siteConfig.address.cityStateZip}</p>
          </div>
          <div>
            <p className="font-semibold">Hours</p>
            <p className="mt-1 text-black/70">Mon-Fri: {siteConfig.hours.weekday}</p>
            <p className="text-black/70">Sat: {siteConfig.hours.saturday}</p>
            <p className="text-black/70">Sun: {siteConfig.hours.sunday}</p>
          </div>
          <div>
            <p className="font-semibold">Call</p>
            <a href={`tel:${siteConfig.phoneDial}`} className="mt-1 inline-block text-black/70 hover:text-brand-red">
              {siteConfig.phone}
            </a>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <a href={`mailto:${siteConfig.email}`} className="mt-1 inline-block text-black/70 hover:text-brand-red">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 p-3 shadow-lg backdrop-blur md:hidden">
        <Link
          href="/pickup-order"
          className="flex w-full items-center justify-center rounded-md bg-brand-red px-4 py-3 text-sm font-semibold text-white"
        >
          Order Online for Pickup
        </Link>
      </div>
    </>
  );
}
