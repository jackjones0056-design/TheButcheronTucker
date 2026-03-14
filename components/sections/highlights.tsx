const highlights = [
  { title: "Weekly Specials", text: "Feature rotating deals synced from Square catalog pricing." },
  { title: "Meat Bundles", text: "Drive average order value with family and grilling bundles." },
  { title: "Pickup Windows", text: "Simple flow for customers to choose pickup times." },
];

export function HighlightsSection() {
  return (
    <section className="container-shell pb-16">
      <div className="grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-xl border border-black/10 bg-white p-5">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-black/70">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
