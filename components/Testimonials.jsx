const quotes = [
  { q: "So fresh and convenient—my weeknights are saved!", a: "Aarav" },
  { q: "Delicious plant-based options that actually fill me up.", a: "Sneha" },
  { q: "Nutrition labels are clear and the flavors pop.", a: "Rahul" },
];

export default function Testimonials() {
  return (
    <section className="container-default py-16" id="story">
      <h2 className="text-3xl md:text-4xl font-bold">Loved by busy foodies</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {quotes.map((x, i) => (
          <figure key={i} className="card p-6">
            <blockquote className="text-slate-700">“{x.q}”</blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">— {x.a}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
